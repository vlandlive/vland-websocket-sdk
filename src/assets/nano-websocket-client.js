(function() {
	function Emitter(obj) {
		if (obj) return mixin(obj);
	}
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	function mixin(obj) {
		for (var key in Emitter.prototype) {
			obj[key] = Emitter.prototype[key];
		}
		return obj;
	}
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
		this._callbacks = this._callbacks || {};
		(this._callbacks[event] = this._callbacks[event] || []).push(fn);
		return this;
	};
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.once = function(event, fn) {
		var self = this;
		this._callbacks = this._callbacks || {};

		function on() {
			self.off(event, on);
			fn.apply(this, arguments);
		}
		on.fn = fn;
		this.on(event, on);
		return this;
	};
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.off =
		Emitter.prototype.removeListener =
		Emitter.prototype.removeAllListeners =
		Emitter.prototype.removeEventListener =
		function(event, fn) {
			this._callbacks = this._callbacks || {};
			// all
			if (0 == arguments.length) {
				this._callbacks = {};
				return this;
			}
			// specific event
			var callbacks = this._callbacks[event];
			if (!callbacks) return this;
			// remove all handlers
			if (1 == arguments.length) {
				delete this._callbacks[event];
				return this;
			}
			// remove specific handler
			var cb;
			for (var i = 0; i < callbacks.length; i++) {
				cb = callbacks[i];
				if (cb === fn || cb.fn === fn) {
					callbacks.splice(i, 1);
					break;
				}
			}
			return this;
		};
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	Emitter.prototype.emit = function(event) {
		this._callbacks = this._callbacks || {};
		var args = [].slice.call(arguments, 1),
			callbacks = this._callbacks[event];
		if (callbacks) {
			callbacks = callbacks.slice(0);
			for (var i = 0, len = callbacks.length; i < len; ++i) {
				callbacks[i].apply(this, args);
			}
		}
		return this;
	};
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	Emitter.prototype.listeners = function(event) {
		this._callbacks = this._callbacks || {};
		return this._callbacks[event] || [];
	};
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	Emitter.prototype.hasListeners = function(event) {
		return !!this.listeners(event).length;
	};

	
	var JS_WS_CLIENT_TYPE = 'js-websocket';
	var JS_WS_CLIENT_VERSION = '0.0.1';
	var Protocol = global.Protocol;
	var decodeIO_encoder = null;
	var decodeIO_decoder = null;
	var Package = Protocol.Package;
	var Message = Protocol.Message;
	var EventEmitter = Emitter;
	var rsa = global.rsa;
	if (typeof global != 'undefined' && typeof sys != 'undefined' && sys.localStorage) {
		global.localStorage = sys.localStorage;
	}
	var RES_OK = 200;
	var RES_FAIL = 500;
	var RES_OLD_CLIENT = 501;
	if (typeof Object.create !== 'function') {
		Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}
	var log = (...params) => {
		if (global['cocosDEV'] !== 'production') {
			// console.log(global['cocosDEV'], ...params);
		}
	}
	var root = global;
	var nano = Object.create(EventEmitter.prototype); // object extend from object
	console.log("111", nano)
	console.log("222", EventEmitter)
	console.log("333", EventEmitter.prototype)
	root.nano = nano;
	var socket = null;
	var reqId = 0;
	var callbacks = {};
	var handlers = {};
	//Map from request id to route
	var routeMap = {};
	var dict = {}; // route string to code
	var abbrs = {}; // code to route string
	var heartbeatInterval = 0;
	var heartbeatTimeout = 0;
	var nextHeartbeatTimeout = 0;
	var gapThreshold = 100; // heartbeat gap threashold
	var heartbeatId = null;
	var heartbeatTimeoutId = null;
	var handshakeCallback = null;
	var decode = null;
	var encode = null;
	var gzipBuffer = null;
	var uzipBuffer = null;
	var reconnect = false;
	var reconncetTimer = null;
	var reconnectUrl = null;
	var reconnectAttempts = 0;
	var reconnectionDelay = 5000;
	var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;
	var useCrypto;
	var end = false
	var handshakeBuffer = {
		sys: {
			type: JS_WS_CLIENT_TYPE,
			version: JS_WS_CLIENT_VERSION,
			rsa: {},
		},
		user: {},
	};
	var initCallback = null;
	//初始化连接
	nano.init = function(params, cb) {
		initCallback = cb;
		var host = params.host;
		var port = params.port;
		var path = params.path;
		encode = params.encode || defaultEncode;
		decode = params.decode || defaultDecode;
		gzipBuffer = params.gzipBuffer;
		uzipBuffer = params.uzipBuffer;
		dict = params.dict;
		// var url = global._URL + host;
		// if (port) {
		//   url += ':' + port;
		// }
		// if (path) {
		//   url += path;
		// }
		var url = host;
		handshakeBuffer.user = params.user;
		if (params.encrypt) {
			useCrypto = true;
			rsa.generate(1024, '10001');
			var data = {
				rsa_n: rsa.n.toString(16),
				rsa_e: rsa.e,
			};
			handshakeBuffer.sys.rsa = data;
		}
		handshakeCallback = params.handshakeCallback;
		connect(params, url, cb);
	};
	// onCallback = function() {};
	// nano.on = function(route,cb)
	// {
	//     onCallback = cb;
	//     log("我是 on 方法");
	// }
	var defaultDecode = (nano.decode = function(data) {


		var msg = Message.decode(data);
		if (msg.id > 0) {
			msg.route = routeMap[msg.id];
			delete routeMap[msg.id];
			if (!msg.route) {
				return;
			}
		}

		if (gzipBuffer && msg.zip) {
			msg = uzipBuffer(msg);
		}
		msg.body = deCompose(msg).body;
		return msg;
	});
	var defaultEncode = (nano.encode = function(reqId, route, msg, tryZip) {
		var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
		if (decodeIO_encoder && decodeIO_encoder.lookup(route)) {
			var Builder = decodeIO_encoder.build(route);
			msg = msg;
		} else {
			msg = msg;
		}
		var compressRoute = 0;

		if (dict && dict[route]) {
			route = dict[route];
			compressRoute = 1;
		}

		let zip = false;
		let newmsg = msg;

		if (gzipBuffer && tryZip) {
			[zip, newmsg] = gzipBuffer(msg)
		}


		let buffer = Message.encode(reqId, type, compressRoute, route, newmsg, zip);


		return buffer;
	});
	var isConnecting = false;
	var interval;
	var connect = function(params, url, cb) {
		var params = params || {};
		var maxReconnectAttempts = params.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
		reconnectUrl = url;
		var onopen = function(event) {
			if (!!reconnect) {
				nano.emit('reconnect');
			}
			reset();
			var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(
				handshakeBuffer)));
			send(obj);
			//
			//
			// global.eventbus.$emit(`C_2_C_GETCON`);

			console.log("连接成功")
			return 200;

			//  const repeat = (func, ms) => {
			//  interval =  setTimeout(() => {
			//     func()
			//     repeat(func, ms)
			//   }, ms)
			// }

			// repeat(()=>{
			//   heartbeat()
			// },6000)
		};
		var onmessage = function(event) {
			global.socketlive = true;
			processPackage(Package.decode(event.data), cb);
			// new package arrived, update the heartbeat timeout
			if (heartbeatTimeout) {
				nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
			}
		};
		var onerror = function(event) {
			nano.emit('io-error', event);
			return 500;

		};
		var onclose = function(event) {
			// global.eventbus.$emit(`C_2_C_LOSECON`);
			if (!event.wasClean) {
				socket.close();
				socket = null;
			}
			clearInterval(interval);
			// interval = null;
			nano.emit('close', event);
			nano.emit('disconnect', event);
			// global.CocosFail("断开连接");
			// global['Reconnection']();
			if (reconnectAttempts < maxReconnectAttempts && !isConnecting && !end) {
				log('cocos deve + socket close: reconnect', event);
				reconnect = true;
				isConnecting = true;
				reconnectAttempts++;
				reconncetTimer = setTimeout(function() {
					connect(params, reconnectUrl, cb);
					isConnecting = false;
				}, reconnectionDelay);
				reconnectionDelay *= 2;
			} else {
				console.log('连接已断开')
			}
		};
		socket = new global.websocket(url);
		socket.binaryType = 'arraybuffer';
		socket.onopen = onopen;
		socket.onmessage = onmessage;
		socket.onerror = onerror;
		socket.onclose = onclose;
	};

	nano.sendHeartBeat = function() {
		heartbeat()
		// console.log("heartbeat")
	}

	//断开连接
	nano.disconnect = function() {
		log('cocos deve + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos deve + disconnect 有 socket');
			socket = null;
			//   global.CocosFail("断开连接");
			global.Reconnection();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//刷新连接
	nano.Refresh = function() {
		log('cocos deve Refresh + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
			global['Reconnection']();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//仅断开连接
	nano.OffLine = function() {
		log('cocos + 断开了连接offline');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	nano.end = function() {
		end = true
		socket.close()
	}

	var reset = function() {
		reconnect = false;
		reconnectionDelay = 1000 * 5;
		reconnectAttempts = 0;
		clearTimeout(reconncetTimer);
	};
	//发送一次消息 并且带有回调函数
	nano.request = function(route, msg, cb) {
		if (arguments.length === 2 && typeof msg === 'function') {
			cb = msg;
			msg = {};
		} else {
			msg = msg || {};
		}

		// console.log("route = "+route);

		route = route || msg.route;
		if (!route) {
			return;
		}
		try {
			reqId++;
			sendMessage(reqId, route, msg);
			callbacks[reqId] = cb;
			routeMap[reqId] = route;
		} catch (error) {
			console.error('deve nano.request error', error);
			// global['Reconnection']();
		}
	};

	//发送一次消息 没有带有回调函数
	nano.notify = function(route, msg) {
		msg = msg || {};
		try {
			sendMessage(0, route, msg);
		} catch (error) {
			console.error('deve nano.notify error', error);
			// global['Reconnection']();
		}
	};
	var sendMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_DATA, msg);
		send(packet);
	};

	var sendApiMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_API, msg);
		send(packet);
	};

	var send = function(packet) {
		try {
			if (socket) {
				// console.log("发送数据长度："+ packet.buffer.byteLength);
				socket.send(packet.buffer);
			}
		} catch (error) {
			// global['Reconnection']();
		}
	};
	var handler = {};
	var heartbeat = function(data) {
		// var date = new Date();
		// var getTime = `day:${date.getDate()}---hour:${date.getHours()}---minute:${date.getMinutes()}--second:${date.getSeconds()}`
		if (!heartbeatInterval) {
			// no heartbeat
			return;
		}
		log('heartbeat receive', Date.now());
		var obj = Package.encode(Package.TYPE_HEARTBEAT);
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
		if (heartbeatId) {
			// already in a heartbeat interval
			return;
		}

		heartbeatId = null;
		send(obj);
		sendTime = new Date();
		nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
		heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
	};
	var heartbeatTimeoutCb = function() {
		var gap = nextHeartbeatTimeout - Date.now();
		if (gap > gapThreshold) {
			heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap);
		} else {
			nano.emit('heartbeat timeout');
			nano.disconnect();
		}
	};
	var handshake = function(data) {
		data = JSON.parse(Protocol.strdecode(data));
		if (data.code === RES_OLD_CLIENT) {
			nano.emit('error', 'client version not fullfill');
			return;
		}
		if (data.code !== RES_OK) {
			nano.emit('error', 'handshake fail');
			return;
		}
		handshakeInit(data);
		var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
		var heatObj = Package.encode(Package.TYPE_HEARTBEAT);
		send(obj);
		send(heatObj);
		if (initCallback) {
			initCallback(socket);
		}
	};
	var handshakeack = function(data) {
		// data = JSON.parse(Protocol.strdecode(data));
		log('handshakeack', data);
	};
	var onData = function(data) {
		var msg = data;
		if (decode) {
			msg = decode(msg);
		}
		processMessage(nano, msg);
	};
	var onKick = function(data) {
		log('cocos + onKick', data);
		data = JSON.parse(Protocol.strdecode(data));
		nano.emit('onKick', data);
	};

	var sendTime = 0;
	var delay = 0;

	handlers[Package.TYPE_HANDSHAKE] = handshake;
	handlers[Package.TYPE_HEARTBEAT] = heartbeat;
	handlers[Package.TYPE_HANDSHAKE_ACK] = handshakeack;
	handlers[Package.TYPE_DATA] = onData;
	handlers[Package.TYPE_KICK] = onKick;
	var processPackage = function(msgs) {
		if (Array.isArray(msgs)) {
			for (var i = 0; i < msgs.length; i++) {
				var msg = msgs[i];
				handlers[msg.type](msg.body);
			}
		} else {
			if (msgs.type == Package.TYPE_HEARTBEAT) {
				if (sendTime != 0) {
					const currentTime = new Date();
					delay = currentTime - sendTime;
					// global.eventbus.$emit(`C_2_V_CURRENT_DELAY`, delay);
				}
				return;
			}
			handlers[msgs.type](msgs.body);
		}
	};
	var processMessage = function(nano, msg) {
		if (!msg.id) {
			// server push message
			nano.emit(msg.route, msg.body);
			return;
		}
		//if have a id then find the callback function with the request
		var cb = callbacks[msg.id];
		delete callbacks[msg.id];
		if (typeof cb !== 'function') {
			return;
		}
		cb(msg.body);
	};
	var processMessageBatch = function(nano, msgs) {
		for (var i = 0, l = msgs.length; i < l; i++) {
			processMessage(nano, msgs[i]);
		}
	};
	var deCompose = function(msg) {
		var route = msg.route;
		//Decompose route from dict
		if (msg.compressRoute) {
			if (!abbrs[route]) {
				return {};
			}
			route = msg.route = abbrs[route];
		}
		return msg;
	};
	var handshakeInit = function(data) {
		if (data.sys && data.sys.heartbeat) {
			heartbeatInterval = data.sys.heartbeat * 1000; // heartbeat interval
			heartbeatTimeout = heartbeatInterval * 2; // max heartbeat timeout
			log(`cocos deve + heartbeatInterval=${heartbeatInterval} heartbeatTimeout=${heartbeatTimeout}`);
		} else {
			heartbeatInterval = 0;
			heartbeatTimeout = 0;
		}
		initData(data);
		if (typeof handshakeCallback === 'function') {
			handshakeCallback(data.user);
		}
	};
	//Initilize data used in nano client
	var initData = function(data) {
		if (!data || !data.sys) {
			return;
		}
		dict = dict || data.sys?.dict;
		//Init compress dict
		if (dict) {
			dict = dict;
			abbrs = {};
			for (var route in dict) {
				abbrs[dict[route]] = route;
			}
		}
		global.nano = nano;
		global.socket = socket;
		console.log(nano)
	};
})();
(function() {
	function Emitter(obj) {
		if (obj) return mixin(obj);
	}
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	function mixin(obj) {
		for (var key in Emitter.prototype) {
			obj[key] = Emitter.prototype[key];
		}
		return obj;
	}
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
		this._callbacks = this._callbacks || {};
		(this._callbacks[event] = this._callbacks[event] || []).push(fn);
		return this;
	};
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.once = function(event, fn) {
		var self = this;
		this._callbacks = this._callbacks || {};

		function on() {
			self.off(event, on);
			fn.apply(this, arguments);
		}
		on.fn = fn;
		this.on(event, on);
		return this;
	};
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.off =
		Emitter.prototype.removeListener =
		Emitter.prototype.removeAllListeners =
		Emitter.prototype.removeEventListener =
		function(event, fn) {
			this._callbacks = this._callbacks || {};
			// all
			if (0 == arguments.length) {
				this._callbacks = {};
				return this;
			}
			// specific event
			var callbacks = this._callbacks[event];
			if (!callbacks) return this;
			// remove all handlers
			if (1 == arguments.length) {
				delete this._callbacks[event];
				return this;
			}
			// remove specific handler
			var cb;
			for (var i = 0; i < callbacks.length; i++) {
				cb = callbacks[i];
				if (cb === fn || cb.fn === fn) {
					callbacks.splice(i, 1);
					break;
				}
			}
			return this;
		};
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	Emitter.prototype.emit = function(event) {
		this._callbacks = this._callbacks || {};
		var args = [].slice.call(arguments, 1),
			callbacks = this._callbacks[event];
		if (callbacks) {
			callbacks = callbacks.slice(0);
			for (var i = 0, len = callbacks.length; i < len; ++i) {
				callbacks[i].apply(this, args);
			}
		}
		return this;
	};
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	Emitter.prototype.listeners = function(event) {
		this._callbacks = this._callbacks || {};
		return this._callbacks[event] || [];
	};
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	Emitter.prototype.hasListeners = function(event) {
		return !!this.listeners(event).length;
	};

	
	var JS_WS_CLIENT_TYPE = 'js-websocket';
	var JS_WS_CLIENT_VERSION = '0.0.1';
	var Protocol = global.Protocol;
	var decodeIO_encoder = null;
	var decodeIO_decoder = null;
	var Package = Protocol.Package;
	var Message = Protocol.Message;
	var EventEmitter = Emitter;
	var rsa = global.rsa;
	if (typeof global != 'undefined' && typeof sys != 'undefined' && sys.localStorage) {
		global.localStorage = sys.localStorage;
	}
	var RES_OK = 200;
	var RES_FAIL = 500;
	var RES_OLD_CLIENT = 501;
	if (typeof Object.create !== 'function') {
		Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}
	var log = (...params) => {
		if (global['cocosDEV'] !== 'production') {
			// console.log(global['cocosDEV'], ...params);
		}
	}
	var root = global;
	var nano = Object.create(EventEmitter.prototype); // object extend from object
	console.log("111", nano)
	console.log("222", EventEmitter)
	console.log("333", EventEmitter.prototype)
	root.nano = nano;
	var socket = null;
	var reqId = 0;
	var callbacks = {};
	var handlers = {};
	//Map from request id to route
	var routeMap = {};
	var dict = {}; // route string to code
	var abbrs = {}; // code to route string
	var heartbeatInterval = 0;
	var heartbeatTimeout = 0;
	var nextHeartbeatTimeout = 0;
	var gapThreshold = 100; // heartbeat gap threashold
	var heartbeatId = null;
	var heartbeatTimeoutId = null;
	var handshakeCallback = null;
	var decode = null;
	var encode = null;
	var gzipBuffer = null;
	var uzipBuffer = null;
	var reconnect = false;
	var reconncetTimer = null;
	var reconnectUrl = null;
	var reconnectAttempts = 0;
	var reconnectionDelay = 5000;
	var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;
	var useCrypto;
	var end = false
	var handshakeBuffer = {
		sys: {
			type: JS_WS_CLIENT_TYPE,
			version: JS_WS_CLIENT_VERSION,
			rsa: {},
		},
		user: {},
	};
	var initCallback = null;
	//初始化连接
	nano.init = function(params, cb) {
		initCallback = cb;
		var host = params.host;
		var port = params.port;
		var path = params.path;
		encode = params.encode || defaultEncode;
		decode = params.decode || defaultDecode;
		gzipBuffer = params.gzipBuffer;
		uzipBuffer = params.uzipBuffer;
		dict = params.dict;
		// var url = global._URL + host;
		// if (port) {
		//   url += ':' + port;
		// }
		// if (path) {
		//   url += path;
		// }
		var url = host;
		handshakeBuffer.user = params.user;
		if (params.encrypt) {
			useCrypto = true;
			rsa.generate(1024, '10001');
			var data = {
				rsa_n: rsa.n.toString(16),
				rsa_e: rsa.e,
			};
			handshakeBuffer.sys.rsa = data;
		}
		handshakeCallback = params.handshakeCallback;
		connect(params, url, cb);
	};
	// onCallback = function() {};
	// nano.on = function(route,cb)
	// {
	//     onCallback = cb;
	//     log("我是 on 方法");
	// }
	var defaultDecode = (nano.decode = function(data) {


		var msg = Message.decode(data);
		if (msg.id > 0) {
			msg.route = routeMap[msg.id];
			delete routeMap[msg.id];
			if (!msg.route) {
				return;
			}
		}

		if (gzipBuffer && msg.zip) {
			msg = uzipBuffer(msg);
		}
		msg.body = deCompose(msg).body;
		return msg;
	});
	var defaultEncode = (nano.encode = function(reqId, route, msg, tryZip) {
		var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
		if (decodeIO_encoder && decodeIO_encoder.lookup(route)) {
			var Builder = decodeIO_encoder.build(route);
			msg = msg;
		} else {
			msg = msg;
		}
		var compressRoute = 0;

		if (dict && dict[route]) {
			route = dict[route];
			compressRoute = 1;
		}

		let zip = false;
		let newmsg = msg;

		if (gzipBuffer && tryZip) {
			[zip, newmsg] = gzipBuffer(msg)
		}


		let buffer = Message.encode(reqId, type, compressRoute, route, newmsg, zip);


		return buffer;
	});
	var isConnecting = false;
	var interval;
	var connect = function(params, url, cb) {
		var params = params || {};
		var maxReconnectAttempts = params.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
		reconnectUrl = url;
		var onopen = function(event) {
			if (!!reconnect) {
				nano.emit('reconnect');
			}
			reset();
			var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(
				handshakeBuffer)));
			send(obj);
			//
			//
			// global.eventbus.$emit(`C_2_C_GETCON`);

			console.log("连接成功")
			return 200;

			//  const repeat = (func, ms) => {
			//  interval =  setTimeout(() => {
			//     func()
			//     repeat(func, ms)
			//   }, ms)
			// }

			// repeat(()=>{
			//   heartbeat()
			// },6000)
		};
		var onmessage = function(event) {
			global.socketlive = true;
			processPackage(Package.decode(event.data), cb);
			// new package arrived, update the heartbeat timeout
			if (heartbeatTimeout) {
				nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
			}
		};
		var onerror = function(event) {
			nano.emit('io-error', event);
			return 500;

		};
		var onclose = function(event) {
			// global.eventbus.$emit(`C_2_C_LOSECON`);
			if (!event.wasClean) {
				socket.close();
				socket = null;
			}
			clearInterval(interval);
			// interval = null;
			nano.emit('close', event);
			nano.emit('disconnect', event);
			// global.CocosFail("断开连接");
			// global['Reconnection']();
			if (reconnectAttempts < maxReconnectAttempts && !isConnecting && !end) {
				log('cocos deve + socket close: reconnect', event);
				reconnect = true;
				isConnecting = true;
				reconnectAttempts++;
				reconncetTimer = setTimeout(function() {
					connect(params, reconnectUrl, cb);
					isConnecting = false;
				}, reconnectionDelay);
				reconnectionDelay *= 2;
			} else {
				console.log('连接已断开')
			}
		};
		socket = new global.websocket(url);
		socket.binaryType = 'arraybuffer';
		socket.onopen = onopen;
		socket.onmessage = onmessage;
		socket.onerror = onerror;
		socket.onclose = onclose;
	};

	nano.sendHeartBeat = function() {
		heartbeat()
		// console.log("heartbeat")
	}

	//断开连接
	nano.disconnect = function() {
		log('cocos deve + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos deve + disconnect 有 socket');
			socket = null;
			//   global.CocosFail("断开连接");
			global.Reconnection();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//刷新连接
	nano.Refresh = function() {
		log('cocos deve Refresh + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
			global['Reconnection']();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//仅断开连接
	nano.OffLine = function() {
		log('cocos + 断开了连接offline');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	nano.end = function() {
		end = true
		socket.close()
	}

	var reset = function() {
		reconnect = false;
		reconnectionDelay = 1000 * 5;
		reconnectAttempts = 0;
		clearTimeout(reconncetTimer);
	};
	//发送一次消息 并且带有回调函数
	nano.request = function(route, msg, cb) {
		if (arguments.length === 2 && typeof msg === 'function') {
			cb = msg;
			msg = {};
		} else {
			msg = msg || {};
		}

		// console.log("route = "+route);

		route = route || msg.route;
		if (!route) {
			return;
		}
		try {
			reqId++;
			sendMessage(reqId, route, msg);
			callbacks[reqId] = cb;
			routeMap[reqId] = route;
		} catch (error) {
			console.error('deve nano.request error', error);
			// global['Reconnection']();
		}
	};

	//发送一次消息 没有带有回调函数
	nano.notify = function(route, msg) {
		msg = msg || {};
		try {
			sendMessage(0, route, msg);
		} catch (error) {
			console.error('deve nano.notify error', error);
			// global['Reconnection']();
		}
	};
	var sendMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_DATA, msg);
		send(packet);
	};

	var sendApiMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_API, msg);
		send(packet);
	};

	var send = function(packet) {
		try {
			if (socket) {
				// console.log("发送数据长度："+ packet.buffer.byteLength);
				socket.send(packet.buffer);
			}
		} catch (error) {
			// global['Reconnection']();
		}
	};
	var handler = {};
	var heartbeat = function(data) {
		// var date = new Date();
		// var getTime = `day:${date.getDate()}---hour:${date.getHours()}---minute:${date.getMinutes()}--second:${date.getSeconds()}`
		if (!heartbeatInterval) {
			// no heartbeat
			return;
		}
		log('heartbeat receive', Date.now());
		var obj = Package.encode(Package.TYPE_HEARTBEAT);
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
		if (heartbeatId) {
			// already in a heartbeat interval
			return;
		}

		heartbeatId = null;
		send(obj);
		sendTime = new Date();
		nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
		heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
	};
	var heartbeatTimeoutCb = function() {
		var gap = nextHeartbeatTimeout - Date.now();
		if (gap > gapThreshold) {
			heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap);
		} else {
			nano.emit('heartbeat timeout');
			nano.disconnect();
		}
	};
	var handshake = function(data) {
		data = JSON.parse(Protocol.strdecode(data));
		if (data.code === RES_OLD_CLIENT) {
			nano.emit('error', 'client version not fullfill');
			return;
		}
		if (data.code !== RES_OK) {
			nano.emit('error', 'handshake fail');
			return;
		}
		handshakeInit(data);
		var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
		var heatObj = Package.encode(Package.TYPE_HEARTBEAT);
		send(obj);
		send(heatObj);
		if (initCallback) {
			initCallback(socket);
		}
	};
	var handshakeack = function(data) {
		// data = JSON.parse(Protocol.strdecode(data));
		log('handshakeack', data);
	};
	var onData = function(data) {
		var msg = data;
		if (decode) {
			msg = decode(msg);
		}
		processMessage(nano, msg);
	};
	var onKick = function(data) {
		log('cocos + onKick', data);
		data = JSON.parse(Protocol.strdecode(data));
		nano.emit('onKick', data);
	};

	var sendTime = 0;
	var delay = 0;

	handlers[Package.TYPE_HANDSHAKE] = handshake;
	handlers[Package.TYPE_HEARTBEAT] = heartbeat;
	handlers[Package.TYPE_HANDSHAKE_ACK] = handshakeack;
	handlers[Package.TYPE_DATA] = onData;
	handlers[Package.TYPE_KICK] = onKick;
	var processPackage = function(msgs) {
		if (Array.isArray(msgs)) {
			for (var i = 0; i < msgs.length; i++) {
				var msg = msgs[i];
				handlers[msg.type](msg.body);
			}
		} else {
			if (msgs.type == Package.TYPE_HEARTBEAT) {
				if (sendTime != 0) {
					const currentTime = new Date();
					delay = currentTime - sendTime;
					// global.eventbus.$emit(`C_2_V_CURRENT_DELAY`, delay);
				}
				return;
			}
			handlers[msgs.type](msgs.body);
		}
	};
	var processMessage = function(nano, msg) {
		if (!msg.id) {
			// server push message
			nano.emit(msg.route, msg.body);
			return;
		}
		//if have a id then find the callback function with the request
		var cb = callbacks[msg.id];
		delete callbacks[msg.id];
		if (typeof cb !== 'function') {
			return;
		}
		cb(msg.body);
	};
	var processMessageBatch = function(nano, msgs) {
		for (var i = 0, l = msgs.length; i < l; i++) {
			processMessage(nano, msgs[i]);
		}
	};
	var deCompose = function(msg) {
		var route = msg.route;
		//Decompose route from dict
		if (msg.compressRoute) {
			if (!abbrs[route]) {
				return {};
			}
			route = msg.route = abbrs[route];
		}
		return msg;
	};
	var handshakeInit = function(data) {
		if (data.sys && data.sys.heartbeat) {
			heartbeatInterval = data.sys.heartbeat * 1000; // heartbeat interval
			heartbeatTimeout = heartbeatInterval * 2; // max heartbeat timeout
			log(`cocos deve + heartbeatInterval=${heartbeatInterval} heartbeatTimeout=${heartbeatTimeout}`);
		} else {
			heartbeatInterval = 0;
			heartbeatTimeout = 0;
		}
		initData(data);
		if (typeof handshakeCallback === 'function') {
			handshakeCallback(data.user);
		}
	};
	//Initilize data used in nano client
	var initData = function(data) {
		if (!data || !data.sys) {
			return;
		}
		dict = dict || data.sys?.dict;
		//Init compress dict
		if (dict) {
			dict = dict;
			abbrs = {};
			for (var route in dict) {
				abbrs[dict[route]] = route;
			}
		}
		global.nano = nano;
		global.socket = socket;
		console.log(nano)
	};
})();
(function() {
	function Emitter(obj) {
		if (obj) return mixin(obj);
	}
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	function mixin(obj) {
		for (var key in Emitter.prototype) {
			obj[key] = Emitter.prototype[key];
		}
		return obj;
	}
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
		this._callbacks = this._callbacks || {};
		(this._callbacks[event] = this._callbacks[event] || []).push(fn);
		return this;
	};
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.once = function(event, fn) {
		var self = this;
		this._callbacks = this._callbacks || {};

		function on() {
			self.off(event, on);
			fn.apply(this, arguments);
		}
		on.fn = fn;
		this.on(event, on);
		return this;
	};
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	Emitter.prototype.off =
		Emitter.prototype.removeListener =
		Emitter.prototype.removeAllListeners =
		Emitter.prototype.removeEventListener =
		function(event, fn) {
			this._callbacks = this._callbacks || {};
			// all
			if (0 == arguments.length) {
				this._callbacks = {};
				return this;
			}
			// specific event
			var callbacks = this._callbacks[event];
			if (!callbacks) return this;
			// remove all handlers
			if (1 == arguments.length) {
				delete this._callbacks[event];
				return this;
			}
			// remove specific handler
			var cb;
			for (var i = 0; i < callbacks.length; i++) {
				cb = callbacks[i];
				if (cb === fn || cb.fn === fn) {
					callbacks.splice(i, 1);
					break;
				}
			}
			return this;
		};
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	Emitter.prototype.emit = function(event) {
		this._callbacks = this._callbacks || {};
		var args = [].slice.call(arguments, 1),
			callbacks = this._callbacks[event];
		if (callbacks) {
			callbacks = callbacks.slice(0);
			for (var i = 0, len = callbacks.length; i < len; ++i) {
				callbacks[i].apply(this, args);
			}
		}
		return this;
	};
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	Emitter.prototype.listeners = function(event) {
		this._callbacks = this._callbacks || {};
		return this._callbacks[event] || [];
	};
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	Emitter.prototype.hasListeners = function(event) {
		return !!this.listeners(event).length;
	};

	
	var JS_WS_CLIENT_TYPE = 'js-websocket';
	var JS_WS_CLIENT_VERSION = '0.0.1';
	var Protocol = global.Protocol;
	var decodeIO_encoder = null;
	var decodeIO_decoder = null;
	var Package = Protocol.Package;
	var Message = Protocol.Message;
	var EventEmitter = Emitter;
	var rsa = global.rsa;
	if (typeof global != 'undefined' && typeof sys != 'undefined' && sys.localStorage) {
		global.localStorage = sys.localStorage;
	}
	var RES_OK = 200;
	var RES_FAIL = 500;
	var RES_OLD_CLIENT = 501;
	if (typeof Object.create !== 'function') {
		Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}
	var log = (...params) => {
		if (global['cocosDEV'] !== 'production') {
			// console.log(global['cocosDEV'], ...params);
		}
	}
	var root = global;
	var nano = Object.create(EventEmitter.prototype); // object extend from object
	console.log("111", nano)
	console.log("222", EventEmitter)
	console.log("333", EventEmitter.prototype)
	root.nano = nano;
	var socket = null;
	var reqId = 0;
	var callbacks = {};
	var handlers = {};
	//Map from request id to route
	var routeMap = {};
	var dict = {}; // route string to code
	var abbrs = {}; // code to route string
	var heartbeatInterval = 0;
	var heartbeatTimeout = 0;
	var nextHeartbeatTimeout = 0;
	var gapThreshold = 100; // heartbeat gap threashold
	var heartbeatId = null;
	var heartbeatTimeoutId = null;
	var handshakeCallback = null;
	var decode = null;
	var encode = null;
	var gzipBuffer = null;
	var uzipBuffer = null;
	var reconnect = false;
	var reconncetTimer = null;
	var reconnectUrl = null;
	var reconnectAttempts = 0;
	var reconnectionDelay = 5000;
	var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;
	var useCrypto;
	var end = false
	var handshakeBuffer = {
		sys: {
			type: JS_WS_CLIENT_TYPE,
			version: JS_WS_CLIENT_VERSION,
			rsa: {},
		},
		user: {},
	};
	var initCallback = null;
	//初始化连接
	nano.init = function(params, cb) {
		initCallback = cb;
		var host = params.host;
		var port = params.port;
		var path = params.path;
		encode = params.encode || defaultEncode;
		decode = params.decode || defaultDecode;
		gzipBuffer = params.gzipBuffer;
		uzipBuffer = params.uzipBuffer;
		dict = params.dict;
		// var url = global._URL + host;
		// if (port) {
		//   url += ':' + port;
		// }
		// if (path) {
		//   url += path;
		// }
		var url = host;
		handshakeBuffer.user = params.user;
		if (params.encrypt) {
			useCrypto = true;
			rsa.generate(1024, '10001');
			var data = {
				rsa_n: rsa.n.toString(16),
				rsa_e: rsa.e,
			};
			handshakeBuffer.sys.rsa = data;
		}
		handshakeCallback = params.handshakeCallback;
		connect(params, url, cb);
	};
	// onCallback = function() {};
	// nano.on = function(route,cb)
	// {
	//     onCallback = cb;
	//     log("我是 on 方法");
	// }
	var defaultDecode = (nano.decode = function(data) {


		var msg = Message.decode(data);
		if (msg.id > 0) {
			msg.route = routeMap[msg.id];
			delete routeMap[msg.id];
			if (!msg.route) {
				return;
			}
		}

		if (gzipBuffer && msg.zip) {
			msg = uzipBuffer(msg);
		}
		msg.body = deCompose(msg).body;
		return msg;
	});
	var defaultEncode = (nano.encode = function(reqId, route, msg, tryZip) {
		var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
		if (decodeIO_encoder && decodeIO_encoder.lookup(route)) {
			var Builder = decodeIO_encoder.build(route);
			msg = msg;
		} else {
			msg = msg;
		}
		var compressRoute = 0;

		if (dict && dict[route]) {
			route = dict[route];
			compressRoute = 1;
		}

		let zip = false;
		let newmsg = msg;

		if (gzipBuffer && tryZip) {
			[zip, newmsg] = gzipBuffer(msg)
		}


		let buffer = Message.encode(reqId, type, compressRoute, route, newmsg, zip);


		return buffer;
	});
	var isConnecting = false;
	var interval;
	var connect = function(params, url, cb) {
		var params = params || {};
		var maxReconnectAttempts = params.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
		reconnectUrl = url;
		var onopen = function(event) {
			if (!!reconnect) {
				nano.emit('reconnect');
			}
			reset();
			var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(
				handshakeBuffer)));
			send(obj);
			//
			//
			// global.eventbus.$emit(`C_2_C_GETCON`);

			console.log("连接成功")
			return 200;

			//  const repeat = (func, ms) => {
			//  interval =  setTimeout(() => {
			//     func()
			//     repeat(func, ms)
			//   }, ms)
			// }

			// repeat(()=>{
			//   heartbeat()
			// },6000)
		};
		var onmessage = function(event) {
			global.socketlive = true;
			processPackage(Package.decode(event.data), cb);
			// new package arrived, update the heartbeat timeout
			if (heartbeatTimeout) {
				nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
			}
		};
		var onerror = function(event) {
			nano.emit('io-error', event);
			return 500;

		};
		var onclose = function(event) {
			// global.eventbus.$emit(`C_2_C_LOSECON`);
			if (!event.wasClean) {
				socket.close();
				socket = null;
			}
			clearInterval(interval);
			// interval = null;
			nano.emit('close', event);
			nano.emit('disconnect', event);
			// global.CocosFail("断开连接");
			// global['Reconnection']();
			if (reconnectAttempts < maxReconnectAttempts && !isConnecting && !end) {
				log('cocos deve + socket close: reconnect', event);
				reconnect = true;
				isConnecting = true;
				reconnectAttempts++;
				reconncetTimer = setTimeout(function() {
					connect(params, reconnectUrl, cb);
					isConnecting = false;
				}, reconnectionDelay);
				reconnectionDelay *= 2;
			} else {
				console.log('连接已断开')
			}
		};
		socket = new global.websocket(url);
		socket.binaryType = 'arraybuffer';
		socket.onopen = onopen;
		socket.onmessage = onmessage;
		socket.onerror = onerror;
		socket.onclose = onclose;
	};

	nano.sendHeartBeat = function() {
		heartbeat()
		// console.log("heartbeat")
	}

	//断开连接
	nano.disconnect = function() {
		log('cocos deve + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos deve + disconnect 有 socket');
			socket = null;
			//   global.CocosFail("断开连接");
			global.Reconnection();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//刷新连接
	nano.Refresh = function() {
		log('cocos deve Refresh + 断开了连接');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
			global['Reconnection']();
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	//仅断开连接
	nano.OffLine = function() {
		log('cocos + 断开了连接offline');
		if (socket) {
			if (socket.disconnect) socket.disconnect();
			if (socket.close) socket.close();
			log('cocos + disconnect');
			socket = null;
		}
		if (heartbeatId) {
			clearTimeout(heartbeatId);
			heartbeatId = null;
		}
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
	};
	nano.end = function() {
		end = true
		socket.close()
	}

	var reset = function() {
		reconnect = false;
		reconnectionDelay = 1000 * 5;
		reconnectAttempts = 0;
		clearTimeout(reconncetTimer);
	};
	//发送一次消息 并且带有回调函数
	nano.request = function(route, msg, cb) {
		if (arguments.length === 2 && typeof msg === 'function') {
			cb = msg;
			msg = {};
		} else {
			msg = msg || {};
		}

		// console.log("route = "+route);

		route = route || msg.route;
		if (!route) {
			return;
		}
		try {
			reqId++;
			sendMessage(reqId, route, msg);
			callbacks[reqId] = cb;
			routeMap[reqId] = route;
		} catch (error) {
			console.error('deve nano.request error', error);
			// global['Reconnection']();
		}
	};

	//发送一次消息 没有带有回调函数
	nano.notify = function(route, msg) {
		msg = msg || {};
		try {
			sendMessage(0, route, msg);
		} catch (error) {
			console.error('deve nano.notify error', error);
			// global['Reconnection']();
		}
	};
	var sendMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_DATA, msg);
		send(packet);
	};

	var sendApiMessage = function(reqId, route, msg) {
		if (useCrypto) {
			msg = JSON.stringify(msg);
			var sig = rsa.signString(msg, 'sha256');
			msg = JSON.parse(msg);
			msg['__crypto__'] = sig;
		}
		if (encode) {
			msg = encode(reqId, route, msg, true);
		}

		// console.log("=============ms========================== ");
		// console.log(msg)

		var packet = Package.encode(Package.TYPE_API, msg);
		send(packet);
	};

	var send = function(packet) {
		try {
			if (socket) {
				// console.log("发送数据长度："+ packet.buffer.byteLength);
				socket.send(packet.buffer);
			}
		} catch (error) {
			// global['Reconnection']();
		}
	};
	var handler = {};
	var heartbeat = function(data) {
		// var date = new Date();
		// var getTime = `day:${date.getDate()}---hour:${date.getHours()}---minute:${date.getMinutes()}--second:${date.getSeconds()}`
		if (!heartbeatInterval) {
			// no heartbeat
			return;
		}
		log('heartbeat receive', Date.now());
		var obj = Package.encode(Package.TYPE_HEARTBEAT);
		if (heartbeatTimeoutId) {
			clearTimeout(heartbeatTimeoutId);
			heartbeatTimeoutId = null;
		}
		if (heartbeatId) {
			// already in a heartbeat interval
			return;
		}

		heartbeatId = null;
		send(obj);
		sendTime = new Date();
		nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
		heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
	};
	var heartbeatTimeoutCb = function() {
		var gap = nextHeartbeatTimeout - Date.now();
		if (gap > gapThreshold) {
			heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap);
		} else {
			nano.emit('heartbeat timeout');
			nano.disconnect();
		}
	};
	var handshake = function(data) {
		data = JSON.parse(Protocol.strdecode(data));
		if (data.code === RES_OLD_CLIENT) {
			nano.emit('error', 'client version not fullfill');
			return;
		}
		if (data.code !== RES_OK) {
			nano.emit('error', 'handshake fail');
			return;
		}
		handshakeInit(data);
		var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
		var heatObj = Package.encode(Package.TYPE_HEARTBEAT);
		send(obj);
		send(heatObj);
		if (initCallback) {
			initCallback(socket);
		}
	};
	var handshakeack = function(data) {
		// data = JSON.parse(Protocol.strdecode(data));
		log('handshakeack', data);
	};
	var onData = function(data) {
		var msg = data;
		if (decode) {
			msg = decode(msg);
		}
		processMessage(nano, msg);
	};
	var onKick = function(data) {
		log('cocos + onKick', data);
		data = JSON.parse(Protocol.strdecode(data));
		nano.emit('onKick', data);
	};

	var sendTime = 0;
	var delay = 0;

	handlers[Package.TYPE_HANDSHAKE] = handshake;
	handlers[Package.TYPE_HEARTBEAT] = heartbeat;
	handlers[Package.TYPE_HANDSHAKE_ACK] = handshakeack;
	handlers[Package.TYPE_DATA] = onData;
	handlers[Package.TYPE_KICK] = onKick;
	var processPackage = function(msgs) {
		if (Array.isArray(msgs)) {
			for (var i = 0; i < msgs.length; i++) {
				var msg = msgs[i];
				handlers[msg.type](msg.body);
			}
		} else {
			if (msgs.type == Package.TYPE_HEARTBEAT) {
				if (sendTime != 0) {
					const currentTime = new Date();
					delay = currentTime - sendTime;
					// global.eventbus.$emit(`C_2_V_CURRENT_DELAY`, delay);
				}
				return;
			}
			handlers[msgs.type](msgs.body);
		}
	};
	var processMessage = function(nano, msg) {
		if (!msg.id) {
			// server push message
			nano.emit(msg.route, msg.body);
			return;
		}
		//if have a id then find the callback function with the request
		var cb = callbacks[msg.id];
		delete callbacks[msg.id];
		if (typeof cb !== 'function') {
			return;
		}
		cb(msg.body);
	};
	var processMessageBatch = function(nano, msgs) {
		for (var i = 0, l = msgs.length; i < l; i++) {
			processMessage(nano, msgs[i]);
		}
	};
	var deCompose = function(msg) {
		var route = msg.route;
		//Decompose route from dict
		if (msg.compressRoute) {
			if (!abbrs[route]) {
				return {};
			}
			route = msg.route = abbrs[route];
		}
		return msg;
	};
	var handshakeInit = function(data) {
		if (data.sys && data.sys.heartbeat) {
			heartbeatInterval = data.sys.heartbeat * 1000; // heartbeat interval
			heartbeatTimeout = heartbeatInterval * 2; // max heartbeat timeout
			log(`cocos deve + heartbeatInterval=${heartbeatInterval} heartbeatTimeout=${heartbeatTimeout}`);
		} else {
			heartbeatInterval = 0;
			heartbeatTimeout = 0;
		}
		initData(data);
		if (typeof handshakeCallback === 'function') {
			handshakeCallback(data.user);
		}
	};
	//Initilize data used in nano client
	var initData = function(data) {
		if (!data || !data.sys) {
			return;
		}
		dict = dict || data.sys?.dict;
		//Init compress dict
		if (dict) {
			dict = dict;
			abbrs = {};
			for (var route in dict) {
				abbrs[dict[route]] = route;
			}
		}
		global.nano = nano;
		global.socket = socket;
		console.log(nano)
	};
})();
