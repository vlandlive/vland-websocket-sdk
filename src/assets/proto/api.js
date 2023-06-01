/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * CmdScope enum.
     * @name pb.CmdScope
     * @enum {number}
     * @property {number} SPACE=0 SPACE value
     * @property {number} EVENT=1 EVENT value
     */
    pb.CmdScope = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SPACE"] = 0;
        values[valuesById[1] = "EVENT"] = 1;
        return values;
    })();

    /**
     * StatusType enum.
     * @name pb.StatusType
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} OFFLINE=1 OFFLINE value
     */
    pb.StatusType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "OFFLINE"] = 1;
        return values;
    })();

    /**
     * AnimationType enum.
     * @name pb.AnimationType
     * @enum {number}
     * @property {number} DANCE_1=0 DANCE_1 value
     * @property {number} DANCE_2=1 DANCE_2 value
     * @property {number} DANCE_3=2 DANCE_3 value
     * @property {number} DANCE_4=3 DANCE_4 value
     * @property {number} DANCE_5=4 DANCE_5 value
     * @property {number} DANCE_6=5 DANCE_6 value
     * @property {number} DANCE_7=6 DANCE_7 value
     * @property {number} DANCE_8=7 DANCE_8 value
     * @property {number} DANCE_9=8 DANCE_9 value
     * @property {number} DANCE_10=9 DANCE_10 value
     * @property {number} HELLO_B=10 HELLO_B value
     * @property {number} HELLO_F=11 HELLO_F value
     * @property {number} HELLO_P=12 HELLO_P value
     * @property {number} JUMP_B=13 JUMP_B value
     * @property {number} JUMP_F=14 JUMP_F value
     * @property {number} JUMP_P=15 JUMP_P value
     * @property {number} STAND_B=16 STAND_B value
     * @property {number} STAND_F=17 STAND_F value
     * @property {number} STAND_P=18 STAND_P value
     * @property {number} WALK_B=19 WALK_B value
     * @property {number} WALK_F=20 WALK_F value
     * @property {number} WALK_P=21 WALK_P value
     * @property {number} SIT_B=22 SIT_B value
     * @property {number} SIT_F=23 SIT_F value
     * @property {number} SIT_P=24 SIT_P value
     */
    pb.AnimationType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DANCE_1"] = 0;
        values[valuesById[1] = "DANCE_2"] = 1;
        values[valuesById[2] = "DANCE_3"] = 2;
        values[valuesById[3] = "DANCE_4"] = 3;
        values[valuesById[4] = "DANCE_5"] = 4;
        values[valuesById[5] = "DANCE_6"] = 5;
        values[valuesById[6] = "DANCE_7"] = 6;
        values[valuesById[7] = "DANCE_8"] = 7;
        values[valuesById[8] = "DANCE_9"] = 8;
        values[valuesById[9] = "DANCE_10"] = 9;
        values[valuesById[10] = "HELLO_B"] = 10;
        values[valuesById[11] = "HELLO_F"] = 11;
        values[valuesById[12] = "HELLO_P"] = 12;
        values[valuesById[13] = "JUMP_B"] = 13;
        values[valuesById[14] = "JUMP_F"] = 14;
        values[valuesById[15] = "JUMP_P"] = 15;
        values[valuesById[16] = "STAND_B"] = 16;
        values[valuesById[17] = "STAND_F"] = 17;
        values[valuesById[18] = "STAND_P"] = 18;
        values[valuesById[19] = "WALK_B"] = 19;
        values[valuesById[20] = "WALK_F"] = 20;
        values[valuesById[21] = "WALK_P"] = 21;
        values[valuesById[22] = "SIT_B"] = 22;
        values[valuesById[23] = "SIT_F"] = 23;
        values[valuesById[24] = "SIT_P"] = 24;
        return values;
    })();

    /**
     * InteractivePageType enum.
     * @name pb.InteractivePageType
     * @enum {number}
     * @property {number} IFRAME=0 IFRAME value
     * @property {number} SpecialEffects=1 SpecialEffects value
     */
    pb.InteractivePageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "IFRAME"] = 0;
        values[valuesById[1] = "SpecialEffects"] = 1;
        return values;
    })();

    /**
     * SpaceStatusType enum.
     * @name pb.SpaceStatusType
     * @enum {number}
     * @property {number} MuteStatus=0 MuteStatus value
     * @property {number} CameraStatus=1 CameraStatus value
     * @property {number} ShareScreenStatus=2 ShareScreenStatus value
     */
    pb.SpaceStatusType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MuteStatus"] = 0;
        values[valuesById[1] = "CameraStatus"] = 1;
        values[valuesById[2] = "ShareScreenStatus"] = 2;
        return values;
    })();

    /**
     * EventStatusType enum.
     * @name pb.EventStatusType
     * @enum {number}
     * @property {number} ChatStatus=0 ChatStatus value
     */
    pb.EventStatusType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ChatStatus"] = 0;
        return values;
    })();

    /**
     * ChatType enum.
     * @name pb.ChatType
     * @enum {number}
     * @property {number} Event=0 Event value
     * @property {number} Space=1 Space value
     * @property {number} Near=2 Near value
     */
    pb.ChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Event"] = 0;
        values[valuesById[1] = "Space"] = 1;
        values[valuesById[2] = "Near"] = 2;
        return values;
    })();

    /**
     * MapMaterialType enum.
     * @name pb.MapMaterialType
     * @enum {number}
     * @property {number} Chartlet=0 Chartlet value
     */
    pb.MapMaterialType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Chartlet"] = 0;
        return values;
    })();

    /**
     * BgmStatus enum.
     * @name pb.BgmStatus
     * @enum {number}
     * @property {number} RESET=0 RESET value
     * @property {number} START=1 START value
     * @property {number} SUSPENDED=2 SUSPENDED value
     */
    pb.BgmStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RESET"] = 0;
        values[valuesById[1] = "START"] = 1;
        values[valuesById[2] = "SUSPENDED"] = 2;
        return values;
    })();

    /**
     * PopupType enum.
     * @name pb.PopupType
     * @enum {number}
     * @property {number} LocalFile=0 LocalFile value
     * @property {number} LocalVideo=1 LocalVideo value
     * @property {number} LocalPicture=2 LocalPicture value
     * @property {number} LiveStream=3 LiveStream value
     * @property {number} StickyNote=4 StickyNote value
     * @property {number} Whiteboard=5 Whiteboard value
     * @property {number} HyperlinkIframe=6 HyperlinkIframe value
     * @property {number} HyperlinkWindow=7 HyperlinkWindow value
     * @property {number} SpecialEffects=8 SpecialEffects value
     */
    pb.PopupType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LocalFile"] = 0;
        values[valuesById[1] = "LocalVideo"] = 1;
        values[valuesById[2] = "LocalPicture"] = 2;
        values[valuesById[3] = "LiveStream"] = 3;
        values[valuesById[4] = "StickyNote"] = 4;
        values[valuesById[5] = "Whiteboard"] = 5;
        values[valuesById[6] = "HyperlinkIframe"] = 6;
        values[valuesById[7] = "HyperlinkWindow"] = 7;
        values[valuesById[8] = "SpecialEffects"] = 8;
        return values;
    })();

    /**
     * DirectionType enum.
     * @name pb.DirectionType
     * @enum {number}
     * @property {number} LEFT=0 LEFT value
     * @property {number} RIGHT=1 RIGHT value
     * @property {number} UP=2 UP value
     * @property {number} DOWN=3 DOWN value
     */
    pb.DirectionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEFT"] = 0;
        values[valuesById[1] = "RIGHT"] = 1;
        values[valuesById[2] = "UP"] = 2;
        values[valuesById[3] = "DOWN"] = 3;
        return values;
    })();

    /**
     * MoveMode enum.
     * @name pb.MoveMode
     * @enum {number}
     * @property {number} NORMAL_MODE=0 NORMAL_MODE value
     * @property {number} FLY_MODE=1 FLY_MODE value
     */
    pb.MoveMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL_MODE"] = 0;
        values[valuesById[1] = "FLY_MODE"] = 1;
        return values;
    })();

    pb.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof pb
         * @interface IError
         * @property {string|null} [Code] Error Code
         * @property {string|null} [Msg] Error Msg
         * @property {Object.<string,string>|null} [Metadata] Error Metadata
         */

        /**
         * Constructs a new Error.
         * @memberof pb
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {pb.IError=} [properties] Properties to set
         */
        function Error(properties) {
            this.Metadata = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error Code.
         * @member {string} Code
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.Code = "";

        /**
         * Error Msg.
         * @member {string} Msg
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.Msg = "";

        /**
         * Error Metadata.
         * @member {Object.<string,string>} Metadata
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.Metadata = $util.emptyObject;

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof pb.Error
         * @static
         * @param {pb.IError=} [properties] Properties to set
         * @returns {pb.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @function encode
         * @memberof pb.Error
         * @static
         * @param {pb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            if (message.Metadata != null && Object.hasOwnProperty.call(message, "Metadata"))
                for (var keys = Object.keys(message.Metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.Metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Error
         * @static
         * @param {pb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Error(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.string();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                case 3:
                    if (message.Metadata === $util.emptyObject)
                        message.Metadata = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.Metadata[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof pb.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isString(message.Code))
                    return "Code: string expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.Metadata != null && message.hasOwnProperty("Metadata")) {
                if (!$util.isObject(message.Metadata))
                    return "Metadata: object expected";
                var key = Object.keys(message.Metadata);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.Metadata[key[i]]))
                        return "Metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Error)
                return object;
            var message = new $root.pb.Error();
            if (object.Code != null)
                message.Code = String(object.Code);
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.Metadata) {
                if (typeof object.Metadata !== "object")
                    throw TypeError(".pb.Error.Metadata: object expected");
                message.Metadata = {};
                for (var keys = Object.keys(object.Metadata), i = 0; i < keys.length; ++i)
                    message.Metadata[keys[i]] = String(object.Metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Error
         * @static
         * @param {pb.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.Metadata = {};
            if (options.defaults) {
                object.Code = "";
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            var keys2;
            if (message.Metadata && (keys2 = Object.keys(message.Metadata)).length) {
                object.Metadata = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.Metadata[keys2[j]] = message.Metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof pb.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    pb.ConnectSpaceReq = (function() {

        /**
         * Properties of a ConnectSpaceReq.
         * @memberof pb
         * @interface IConnectSpaceReq
         * @property {string|null} [SpaceId] ConnectSpaceReq SpaceId
         * @property {string|null} [Pid] ConnectSpaceReq Pid
         * @property {string|null} [EventId] ConnectSpaceReq EventId
         */

        /**
         * Constructs a new ConnectSpaceReq.
         * @memberof pb
         * @classdesc Represents a ConnectSpaceReq.
         * @implements IConnectSpaceReq
         * @constructor
         * @param {pb.IConnectSpaceReq=} [properties] Properties to set
         */
        function ConnectSpaceReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectSpaceReq SpaceId.
         * @member {string} SpaceId
         * @memberof pb.ConnectSpaceReq
         * @instance
         */
        ConnectSpaceReq.prototype.SpaceId = "";

        /**
         * ConnectSpaceReq Pid.
         * @member {string} Pid
         * @memberof pb.ConnectSpaceReq
         * @instance
         */
        ConnectSpaceReq.prototype.Pid = "";

        /**
         * ConnectSpaceReq EventId.
         * @member {string} EventId
         * @memberof pb.ConnectSpaceReq
         * @instance
         */
        ConnectSpaceReq.prototype.EventId = "";

        /**
         * Creates a new ConnectSpaceReq instance using the specified properties.
         * @function create
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {pb.IConnectSpaceReq=} [properties] Properties to set
         * @returns {pb.ConnectSpaceReq} ConnectSpaceReq instance
         */
        ConnectSpaceReq.create = function create(properties) {
            return new ConnectSpaceReq(properties);
        };

        /**
         * Encodes the specified ConnectSpaceReq message. Does not implicitly {@link pb.ConnectSpaceReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {pb.IConnectSpaceReq} message ConnectSpaceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSpaceReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.SpaceId);
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Pid);
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.EventId);
            return writer;
        };

        /**
         * Encodes the specified ConnectSpaceReq message, length delimited. Does not implicitly {@link pb.ConnectSpaceReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {pb.IConnectSpaceReq} message ConnectSpaceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSpaceReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectSpaceReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectSpaceReq} ConnectSpaceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSpaceReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectSpaceReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SpaceId = reader.string();
                    break;
                case 2:
                    message.Pid = reader.string();
                    break;
                case 3:
                    message.EventId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectSpaceReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectSpaceReq} ConnectSpaceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSpaceReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectSpaceReq message.
         * @function verify
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectSpaceReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            return null;
        };

        /**
         * Creates a ConnectSpaceReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectSpaceReq} ConnectSpaceReq
         */
        ConnectSpaceReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectSpaceReq)
                return object;
            var message = new $root.pb.ConnectSpaceReq();
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            return message;
        };

        /**
         * Creates a plain object from a ConnectSpaceReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectSpaceReq
         * @static
         * @param {pb.ConnectSpaceReq} message ConnectSpaceReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectSpaceReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SpaceId = "";
                object.Pid = "";
                object.EventId = "";
            }
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            return object;
        };

        /**
         * Converts this ConnectSpaceReq to JSON.
         * @function toJSON
         * @memberof pb.ConnectSpaceReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectSpaceReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectSpaceReq;
    })();

    pb.Pid = (function() {

        /**
         * Properties of a Pid.
         * @memberof pb
         * @interface IPid
         * @property {string|null} [Pid] Pid Pid
         */

        /**
         * Constructs a new Pid.
         * @memberof pb
         * @classdesc Represents a Pid.
         * @implements IPid
         * @constructor
         * @param {pb.IPid=} [properties] Properties to set
         */
        function Pid(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pid Pid.
         * @member {string} Pid
         * @memberof pb.Pid
         * @instance
         */
        Pid.prototype.Pid = "";

        /**
         * Creates a new Pid instance using the specified properties.
         * @function create
         * @memberof pb.Pid
         * @static
         * @param {pb.IPid=} [properties] Properties to set
         * @returns {pb.Pid} Pid instance
         */
        Pid.create = function create(properties) {
            return new Pid(properties);
        };

        /**
         * Encodes the specified Pid message. Does not implicitly {@link pb.Pid.verify|verify} messages.
         * @function encode
         * @memberof pb.Pid
         * @static
         * @param {pb.IPid} message Pid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid);
            return writer;
        };

        /**
         * Encodes the specified Pid message, length delimited. Does not implicitly {@link pb.Pid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Pid
         * @static
         * @param {pb.IPid} message Pid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pid message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Pid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Pid} Pid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Pid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Pid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Pid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Pid} Pid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pid message.
         * @function verify
         * @memberof pb.Pid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            return null;
        };

        /**
         * Creates a Pid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Pid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Pid} Pid
         */
        Pid.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Pid)
                return object;
            var message = new $root.pb.Pid();
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            return message;
        };

        /**
         * Creates a plain object from a Pid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Pid
         * @static
         * @param {pb.Pid} message Pid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pid.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Pid = "";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            return object;
        };

        /**
         * Converts this Pid to JSON.
         * @function toJSON
         * @memberof pb.Pid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pid;
    })();

    pb.SpaceId = (function() {

        /**
         * Properties of a SpaceId.
         * @memberof pb
         * @interface ISpaceId
         * @property {string|null} [SpaceId] SpaceId SpaceId
         */

        /**
         * Constructs a new SpaceId.
         * @memberof pb
         * @classdesc Represents a SpaceId.
         * @implements ISpaceId
         * @constructor
         * @param {pb.ISpaceId=} [properties] Properties to set
         */
        function SpaceId(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpaceId SpaceId.
         * @member {string} SpaceId
         * @memberof pb.SpaceId
         * @instance
         */
        SpaceId.prototype.SpaceId = "";

        /**
         * Creates a new SpaceId instance using the specified properties.
         * @function create
         * @memberof pb.SpaceId
         * @static
         * @param {pb.ISpaceId=} [properties] Properties to set
         * @returns {pb.SpaceId} SpaceId instance
         */
        SpaceId.create = function create(properties) {
            return new SpaceId(properties);
        };

        /**
         * Encodes the specified SpaceId message. Does not implicitly {@link pb.SpaceId.verify|verify} messages.
         * @function encode
         * @memberof pb.SpaceId
         * @static
         * @param {pb.ISpaceId} message SpaceId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpaceId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.SpaceId);
            return writer;
        };

        /**
         * Encodes the specified SpaceId message, length delimited. Does not implicitly {@link pb.SpaceId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SpaceId
         * @static
         * @param {pb.ISpaceId} message SpaceId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpaceId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpaceId message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SpaceId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SpaceId} SpaceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpaceId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SpaceId();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SpaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpaceId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SpaceId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SpaceId} SpaceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpaceId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpaceId message.
         * @function verify
         * @memberof pb.SpaceId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpaceId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            return null;
        };

        /**
         * Creates a SpaceId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SpaceId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SpaceId} SpaceId
         */
        SpaceId.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SpaceId)
                return object;
            var message = new $root.pb.SpaceId();
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            return message;
        };

        /**
         * Creates a plain object from a SpaceId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SpaceId
         * @static
         * @param {pb.SpaceId} message SpaceId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpaceId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.SpaceId = "";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            return object;
        };

        /**
         * Converts this SpaceId to JSON.
         * @function toJSON
         * @memberof pb.SpaceId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpaceId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpaceId;
    })();

    pb.Animation = (function() {

        /**
         * Properties of an Animation.
         * @memberof pb
         * @interface IAnimation
         * @property {string|null} [Pid] Animation Pid
         * @property {pb.AnimationType|null} [A] Animation A
         */

        /**
         * Constructs a new Animation.
         * @memberof pb
         * @classdesc Represents an Animation.
         * @implements IAnimation
         * @constructor
         * @param {pb.IAnimation=} [properties] Properties to set
         */
        function Animation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Animation Pid.
         * @member {string} Pid
         * @memberof pb.Animation
         * @instance
         */
        Animation.prototype.Pid = "";

        /**
         * Animation A.
         * @member {pb.AnimationType} A
         * @memberof pb.Animation
         * @instance
         */
        Animation.prototype.A = 0;

        /**
         * Creates a new Animation instance using the specified properties.
         * @function create
         * @memberof pb.Animation
         * @static
         * @param {pb.IAnimation=} [properties] Properties to set
         * @returns {pb.Animation} Animation instance
         */
        Animation.create = function create(properties) {
            return new Animation(properties);
        };

        /**
         * Encodes the specified Animation message. Does not implicitly {@link pb.Animation.verify|verify} messages.
         * @function encode
         * @memberof pb.Animation
         * @static
         * @param {pb.IAnimation} message Animation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Animation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid);
            if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.A);
            return writer;
        };

        /**
         * Encodes the specified Animation message, length delimited. Does not implicitly {@link pb.Animation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Animation
         * @static
         * @param {pb.IAnimation} message Animation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Animation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Animation message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Animation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Animation} Animation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Animation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Animation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Pid = reader.string();
                    break;
                case 2:
                    message.A = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Animation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Animation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Animation} Animation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Animation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Animation message.
         * @function verify
         * @memberof pb.Animation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Animation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.A != null && message.hasOwnProperty("A"))
                switch (message.A) {
                default:
                    return "A: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                    break;
                }
            return null;
        };

        /**
         * Creates an Animation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Animation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Animation} Animation
         */
        Animation.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Animation)
                return object;
            var message = new $root.pb.Animation();
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            switch (object.A) {
            case "DANCE_1":
            case 0:
                message.A = 0;
                break;
            case "DANCE_2":
            case 1:
                message.A = 1;
                break;
            case "DANCE_3":
            case 2:
                message.A = 2;
                break;
            case "DANCE_4":
            case 3:
                message.A = 3;
                break;
            case "DANCE_5":
            case 4:
                message.A = 4;
                break;
            case "DANCE_6":
            case 5:
                message.A = 5;
                break;
            case "DANCE_7":
            case 6:
                message.A = 6;
                break;
            case "DANCE_8":
            case 7:
                message.A = 7;
                break;
            case "DANCE_9":
            case 8:
                message.A = 8;
                break;
            case "DANCE_10":
            case 9:
                message.A = 9;
                break;
            case "HELLO_B":
            case 10:
                message.A = 10;
                break;
            case "HELLO_F":
            case 11:
                message.A = 11;
                break;
            case "HELLO_P":
            case 12:
                message.A = 12;
                break;
            case "JUMP_B":
            case 13:
                message.A = 13;
                break;
            case "JUMP_F":
            case 14:
                message.A = 14;
                break;
            case "JUMP_P":
            case 15:
                message.A = 15;
                break;
            case "STAND_B":
            case 16:
                message.A = 16;
                break;
            case "STAND_F":
            case 17:
                message.A = 17;
                break;
            case "STAND_P":
            case 18:
                message.A = 18;
                break;
            case "WALK_B":
            case 19:
                message.A = 19;
                break;
            case "WALK_F":
            case 20:
                message.A = 20;
                break;
            case "WALK_P":
            case 21:
                message.A = 21;
                break;
            case "SIT_B":
            case 22:
                message.A = 22;
                break;
            case "SIT_F":
            case 23:
                message.A = 23;
                break;
            case "SIT_P":
            case 24:
                message.A = 24;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Animation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Animation
         * @static
         * @param {pb.Animation} message Animation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Animation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Pid = "";
                object.A = options.enums === String ? "DANCE_1" : 0;
            }
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.enums === String ? $root.pb.AnimationType[message.A] : message.A;
            return object;
        };

        /**
         * Converts this Animation to JSON.
         * @function toJSON
         * @memberof pb.Animation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Animation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Animation;
    })();

    pb.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof pb
         * @interface IPosition
         * @property {string|null} [Pid] Position Pid
         * @property {string|null} [RealName] Position RealName
         * @property {number|null} [X] Position X
         * @property {number|null} [Y] Position Y
         * @property {number|null} [Z] Position Z
         * @property {number|null} [Angle] Position Angle
         * @property {pb.DirectionType|null} [D] Position D
         * @property {pb.AnimationType|null} [A] Position A
         * @property {pb.StatusType|null} [S] Position S
         * @property {boolean|null} [B] Position B
         * @property {string|null} [I] Position I
         * @property {pb.MoveMode|null} [MoveMode] Position MoveMode
         * @property {boolean|null} [IsRaiseHand] Position IsRaiseHand
         * @property {pb.Identity|null} [Identity] Position Identity
         * @property {Array.<string>|null} [Pets] Position Pets
         * @property {string|null} [RoleName] Position RoleName
         * @property {pb.RoleType|null} [RoleType] Position RoleType
         */

        /**
         * Constructs a new Position.
         * @memberof pb
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {pb.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            this.Pets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position Pid.
         * @member {string} Pid
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Pid = "";

        /**
         * Position RealName.
         * @member {string} RealName
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.RealName = "";

        /**
         * Position X.
         * @member {number} X
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.X = 0;

        /**
         * Position Y.
         * @member {number} Y
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Y = 0;

        /**
         * Position Z.
         * @member {number} Z
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Z = 0;

        /**
         * Position Angle.
         * @member {number} Angle
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Angle = 0;

        /**
         * Position D.
         * @member {pb.DirectionType} D
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.D = 0;

        /**
         * Position A.
         * @member {pb.AnimationType} A
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.A = 0;

        /**
         * Position S.
         * @member {pb.StatusType} S
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.S = 0;

        /**
         * Position B.
         * @member {boolean} B
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.B = false;

        /**
         * Position I.
         * @member {string} I
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.I = "";

        /**
         * Position MoveMode.
         * @member {pb.MoveMode} MoveMode
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.MoveMode = 0;

        /**
         * Position IsRaiseHand.
         * @member {boolean} IsRaiseHand
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.IsRaiseHand = false;

        /**
         * Position Identity.
         * @member {pb.Identity} Identity
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Identity = 0;

        /**
         * Position Pets.
         * @member {Array.<string>} Pets
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.Pets = $util.emptyArray;

        /**
         * Position RoleName.
         * @member {string} RoleName
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.RoleName = "";

        /**
         * Position RoleType.
         * @member {pb.RoleType} RoleType
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.RoleType = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition=} [properties] Properties to set
         * @returns {pb.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @function encode
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RealName);
            if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.X);
            if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Y);
            if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Z);
            if (message.Angle != null && Object.hasOwnProperty.call(message, "Angle"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Angle);
            if (message.D != null && Object.hasOwnProperty.call(message, "D"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.D);
            if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.A);
            if (message.S != null && Object.hasOwnProperty.call(message, "S"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.S);
            if (message.B != null && Object.hasOwnProperty.call(message, "B"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.B);
            if (message.I != null && Object.hasOwnProperty.call(message, "I"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.I);
            if (message.MoveMode != null && Object.hasOwnProperty.call(message, "MoveMode"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.MoveMode);
            if (message.IsRaiseHand != null && Object.hasOwnProperty.call(message, "IsRaiseHand"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.IsRaiseHand);
            if (message.Identity != null && Object.hasOwnProperty.call(message, "Identity"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.Identity);
            if (message.Pets != null && message.Pets.length)
                for (var i = 0; i < message.Pets.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.Pets[i]);
            if (message.RoleName != null && Object.hasOwnProperty.call(message, "RoleName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.RoleName);
            if (message.RoleType != null && Object.hasOwnProperty.call(message, "RoleType"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.RoleType);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Position();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Pid = reader.string();
                    break;
                case 2:
                    message.RealName = reader.string();
                    break;
                case 3:
                    message.X = reader.int32();
                    break;
                case 4:
                    message.Y = reader.int32();
                    break;
                case 5:
                    message.Z = reader.int32();
                    break;
                case 6:
                    message.Angle = reader.int32();
                    break;
                case 7:
                    message.D = reader.int32();
                    break;
                case 8:
                    message.A = reader.int32();
                    break;
                case 9:
                    message.S = reader.int32();
                    break;
                case 10:
                    message.B = reader.bool();
                    break;
                case 11:
                    message.I = reader.string();
                    break;
                case 12:
                    message.MoveMode = reader.int32();
                    break;
                case 13:
                    message.IsRaiseHand = reader.bool();
                    break;
                case 14:
                    message.Identity = reader.int32();
                    break;
                case 15:
                    if (!(message.Pets && message.Pets.length))
                        message.Pets = [];
                    message.Pets.push(reader.string());
                    break;
                case 16:
                    message.RoleName = reader.string();
                    break;
                case 17:
                    message.RoleType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof pb.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (!$util.isInteger(message.X))
                    return "X: integer expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (!$util.isInteger(message.Y))
                    return "Y: integer expected";
            if (message.Z != null && message.hasOwnProperty("Z"))
                if (!$util.isInteger(message.Z))
                    return "Z: integer expected";
            if (message.Angle != null && message.hasOwnProperty("Angle"))
                if (!$util.isInteger(message.Angle))
                    return "Angle: integer expected";
            if (message.D != null && message.hasOwnProperty("D"))
                switch (message.D) {
                default:
                    return "D: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.A != null && message.hasOwnProperty("A"))
                switch (message.A) {
                default:
                    return "A: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                    break;
                }
            if (message.S != null && message.hasOwnProperty("S"))
                switch (message.S) {
                default:
                    return "S: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.B != null && message.hasOwnProperty("B"))
                if (typeof message.B !== "boolean")
                    return "B: boolean expected";
            if (message.I != null && message.hasOwnProperty("I"))
                if (!$util.isString(message.I))
                    return "I: string expected";
            if (message.MoveMode != null && message.hasOwnProperty("MoveMode"))
                switch (message.MoveMode) {
                default:
                    return "MoveMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.IsRaiseHand != null && message.hasOwnProperty("IsRaiseHand"))
                if (typeof message.IsRaiseHand !== "boolean")
                    return "IsRaiseHand: boolean expected";
            if (message.Identity != null && message.hasOwnProperty("Identity"))
                switch (message.Identity) {
                default:
                    return "Identity: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.Pets != null && message.hasOwnProperty("Pets")) {
                if (!Array.isArray(message.Pets))
                    return "Pets: array expected";
                for (var i = 0; i < message.Pets.length; ++i)
                    if (!$util.isString(message.Pets[i]))
                        return "Pets: string[] expected";
            }
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                if (!$util.isString(message.RoleName))
                    return "RoleName: string expected";
            if (message.RoleType != null && message.hasOwnProperty("RoleType"))
                switch (message.RoleType) {
                default:
                    return "RoleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Position)
                return object;
            var message = new $root.pb.Position();
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.X != null)
                message.X = object.X | 0;
            if (object.Y != null)
                message.Y = object.Y | 0;
            if (object.Z != null)
                message.Z = object.Z | 0;
            if (object.Angle != null)
                message.Angle = object.Angle | 0;
            switch (object.D) {
            case "LEFT":
            case 0:
                message.D = 0;
                break;
            case "RIGHT":
            case 1:
                message.D = 1;
                break;
            case "UP":
            case 2:
                message.D = 2;
                break;
            case "DOWN":
            case 3:
                message.D = 3;
                break;
            }
            switch (object.A) {
            case "DANCE_1":
            case 0:
                message.A = 0;
                break;
            case "DANCE_2":
            case 1:
                message.A = 1;
                break;
            case "DANCE_3":
            case 2:
                message.A = 2;
                break;
            case "DANCE_4":
            case 3:
                message.A = 3;
                break;
            case "DANCE_5":
            case 4:
                message.A = 4;
                break;
            case "DANCE_6":
            case 5:
                message.A = 5;
                break;
            case "DANCE_7":
            case 6:
                message.A = 6;
                break;
            case "DANCE_8":
            case 7:
                message.A = 7;
                break;
            case "DANCE_9":
            case 8:
                message.A = 8;
                break;
            case "DANCE_10":
            case 9:
                message.A = 9;
                break;
            case "HELLO_B":
            case 10:
                message.A = 10;
                break;
            case "HELLO_F":
            case 11:
                message.A = 11;
                break;
            case "HELLO_P":
            case 12:
                message.A = 12;
                break;
            case "JUMP_B":
            case 13:
                message.A = 13;
                break;
            case "JUMP_F":
            case 14:
                message.A = 14;
                break;
            case "JUMP_P":
            case 15:
                message.A = 15;
                break;
            case "STAND_B":
            case 16:
                message.A = 16;
                break;
            case "STAND_F":
            case 17:
                message.A = 17;
                break;
            case "STAND_P":
            case 18:
                message.A = 18;
                break;
            case "WALK_B":
            case 19:
                message.A = 19;
                break;
            case "WALK_F":
            case 20:
                message.A = 20;
                break;
            case "WALK_P":
            case 21:
                message.A = 21;
                break;
            case "SIT_B":
            case 22:
                message.A = 22;
                break;
            case "SIT_F":
            case 23:
                message.A = 23;
                break;
            case "SIT_P":
            case 24:
                message.A = 24;
                break;
            }
            switch (object.S) {
            case "NORMAL":
            case 0:
                message.S = 0;
                break;
            case "OFFLINE":
            case 1:
                message.S = 1;
                break;
            }
            if (object.B != null)
                message.B = Boolean(object.B);
            if (object.I != null)
                message.I = String(object.I);
            switch (object.MoveMode) {
            case "NORMAL_MODE":
            case 0:
                message.MoveMode = 0;
                break;
            case "FLY_MODE":
            case 1:
                message.MoveMode = 1;
                break;
            }
            if (object.IsRaiseHand != null)
                message.IsRaiseHand = Boolean(object.IsRaiseHand);
            switch (object.Identity) {
            case "Normal":
            case 0:
                message.Identity = 0;
                break;
            case "Guest":
            case 1:
                message.Identity = 1;
                break;
            }
            if (object.Pets) {
                if (!Array.isArray(object.Pets))
                    throw TypeError(".pb.Position.Pets: array expected");
                message.Pets = [];
                for (var i = 0; i < object.Pets.length; ++i)
                    message.Pets[i] = String(object.Pets[i]);
            }
            if (object.RoleName != null)
                message.RoleName = String(object.RoleName);
            switch (object.RoleType) {
            case "Role_1":
            case 0:
                message.RoleType = 0;
                break;
            case "Role_2":
            case 1:
                message.RoleType = 1;
                break;
            case "Role_3":
            case 2:
                message.RoleType = 2;
                break;
            case "Role_4":
            case 3:
                message.RoleType = 3;
                break;
            case "Role_5":
            case 4:
                message.RoleType = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Position
         * @static
         * @param {pb.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Pets = [];
            if (options.defaults) {
                object.Pid = "";
                object.RealName = "";
                object.X = 0;
                object.Y = 0;
                object.Z = 0;
                object.Angle = 0;
                object.D = options.enums === String ? "LEFT" : 0;
                object.A = options.enums === String ? "DANCE_1" : 0;
                object.S = options.enums === String ? "NORMAL" : 0;
                object.B = false;
                object.I = "";
                object.MoveMode = options.enums === String ? "NORMAL_MODE" : 0;
                object.IsRaiseHand = false;
                object.Identity = options.enums === String ? "Normal" : 0;
                object.RoleName = "";
                object.RoleType = options.enums === String ? "Role_1" : 0;
            }
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = message.Y;
            if (message.Z != null && message.hasOwnProperty("Z"))
                object.Z = message.Z;
            if (message.Angle != null && message.hasOwnProperty("Angle"))
                object.Angle = message.Angle;
            if (message.D != null && message.hasOwnProperty("D"))
                object.D = options.enums === String ? $root.pb.DirectionType[message.D] : message.D;
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.enums === String ? $root.pb.AnimationType[message.A] : message.A;
            if (message.S != null && message.hasOwnProperty("S"))
                object.S = options.enums === String ? $root.pb.StatusType[message.S] : message.S;
            if (message.B != null && message.hasOwnProperty("B"))
                object.B = message.B;
            if (message.I != null && message.hasOwnProperty("I"))
                object.I = message.I;
            if (message.MoveMode != null && message.hasOwnProperty("MoveMode"))
                object.MoveMode = options.enums === String ? $root.pb.MoveMode[message.MoveMode] : message.MoveMode;
            if (message.IsRaiseHand != null && message.hasOwnProperty("IsRaiseHand"))
                object.IsRaiseHand = message.IsRaiseHand;
            if (message.Identity != null && message.hasOwnProperty("Identity"))
                object.Identity = options.enums === String ? $root.pb.Identity[message.Identity] : message.Identity;
            if (message.Pets && message.Pets.length) {
                object.Pets = [];
                for (var j = 0; j < message.Pets.length; ++j)
                    object.Pets[j] = message.Pets[j];
            }
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                object.RoleName = message.RoleName;
            if (message.RoleType != null && message.hasOwnProperty("RoleType"))
                object.RoleType = options.enums === String ? $root.pb.RoleType[message.RoleType] : message.RoleType;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof pb.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Position;
    })();

    /**
     * RoleType enum.
     * @name pb.RoleType
     * @enum {number}
     * @property {number} Role_1=0 Role_1 value
     * @property {number} Role_2=1 Role_2 value
     * @property {number} Role_3=2 Role_3 value
     * @property {number} Role_4=3 Role_4 value
     * @property {number} Role_5=4 Role_5 value
     */
    pb.RoleType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Role_1"] = 0;
        values[valuesById[1] = "Role_2"] = 1;
        values[valuesById[2] = "Role_3"] = 2;
        values[valuesById[3] = "Role_4"] = 3;
        values[valuesById[4] = "Role_5"] = 4;
        return values;
    })();

    /**
     * Identity enum.
     * @name pb.Identity
     * @enum {number}
     * @property {number} Normal=0 Normal value
     * @property {number} Guest=1 Guest value
     */
    pb.Identity = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Normal"] = 0;
        values[valuesById[1] = "Guest"] = 1;
        return values;
    })();

    pb.MovePosition = (function() {

        /**
         * Properties of a MovePosition.
         * @memberof pb
         * @interface IMovePosition
         * @property {string|null} [Pid] MovePosition Pid
         * @property {number|null} [X] MovePosition X
         * @property {number|null} [Y] MovePosition Y
         * @property {boolean|null} [Transfer] MovePosition Transfer
         */

        /**
         * Constructs a new MovePosition.
         * @memberof pb
         * @classdesc Represents a MovePosition.
         * @implements IMovePosition
         * @constructor
         * @param {pb.IMovePosition=} [properties] Properties to set
         */
        function MovePosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MovePosition Pid.
         * @member {string} Pid
         * @memberof pb.MovePosition
         * @instance
         */
        MovePosition.prototype.Pid = "";

        /**
         * MovePosition X.
         * @member {number} X
         * @memberof pb.MovePosition
         * @instance
         */
        MovePosition.prototype.X = 0;

        /**
         * MovePosition Y.
         * @member {number} Y
         * @memberof pb.MovePosition
         * @instance
         */
        MovePosition.prototype.Y = 0;

        /**
         * MovePosition Transfer.
         * @member {boolean} Transfer
         * @memberof pb.MovePosition
         * @instance
         */
        MovePosition.prototype.Transfer = false;

        /**
         * Creates a new MovePosition instance using the specified properties.
         * @function create
         * @memberof pb.MovePosition
         * @static
         * @param {pb.IMovePosition=} [properties] Properties to set
         * @returns {pb.MovePosition} MovePosition instance
         */
        MovePosition.create = function create(properties) {
            return new MovePosition(properties);
        };

        /**
         * Encodes the specified MovePosition message. Does not implicitly {@link pb.MovePosition.verify|verify} messages.
         * @function encode
         * @memberof pb.MovePosition
         * @static
         * @param {pb.IMovePosition} message MovePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MovePosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid);
            if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.X);
            if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Y);
            if (message.Transfer != null && Object.hasOwnProperty.call(message, "Transfer"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Transfer);
            return writer;
        };

        /**
         * Encodes the specified MovePosition message, length delimited. Does not implicitly {@link pb.MovePosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MovePosition
         * @static
         * @param {pb.IMovePosition} message MovePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MovePosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MovePosition message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MovePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MovePosition} MovePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MovePosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MovePosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Pid = reader.string();
                    break;
                case 2:
                    message.X = reader.int32();
                    break;
                case 3:
                    message.Y = reader.int32();
                    break;
                case 4:
                    message.Transfer = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MovePosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MovePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MovePosition} MovePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MovePosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MovePosition message.
         * @function verify
         * @memberof pb.MovePosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MovePosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (!$util.isInteger(message.X))
                    return "X: integer expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (!$util.isInteger(message.Y))
                    return "Y: integer expected";
            if (message.Transfer != null && message.hasOwnProperty("Transfer"))
                if (typeof message.Transfer !== "boolean")
                    return "Transfer: boolean expected";
            return null;
        };

        /**
         * Creates a MovePosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MovePosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MovePosition} MovePosition
         */
        MovePosition.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MovePosition)
                return object;
            var message = new $root.pb.MovePosition();
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            if (object.X != null)
                message.X = object.X | 0;
            if (object.Y != null)
                message.Y = object.Y | 0;
            if (object.Transfer != null)
                message.Transfer = Boolean(object.Transfer);
            return message;
        };

        /**
         * Creates a plain object from a MovePosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MovePosition
         * @static
         * @param {pb.MovePosition} message MovePosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MovePosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Pid = "";
                object.X = 0;
                object.Y = 0;
                object.Transfer = false;
            }
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = message.Y;
            if (message.Transfer != null && message.hasOwnProperty("Transfer"))
                object.Transfer = message.Transfer;
            return object;
        };

        /**
         * Converts this MovePosition to JSON.
         * @function toJSON
         * @memberof pb.MovePosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MovePosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MovePosition;
    })();

    pb.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof pb
         * @interface IUserMessage
         * @property {string|null} [MsgId] UserMessage MsgId
         * @property {string|null} [Pid] UserMessage Pid
         * @property {string|null} [RealName] UserMessage RealName
         * @property {number|Long|null} [Time] UserMessage Time
         * @property {string|null} [Content] UserMessage Content
         * @property {number|null} [SpeakType] UserMessage SpeakType
         * @property {string|null} [I] UserMessage I
         */

        /**
         * Constructs a new UserMessage.
         * @memberof pb
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {pb.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage MsgId.
         * @member {string} MsgId
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.MsgId = "";

        /**
         * UserMessage Pid.
         * @member {string} Pid
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.Pid = "";

        /**
         * UserMessage RealName.
         * @member {string} RealName
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.RealName = "";

        /**
         * UserMessage Time.
         * @member {number|Long} Time
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.Time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserMessage Content.
         * @member {string} Content
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.Content = "";

        /**
         * UserMessage SpeakType.
         * @member {number} SpeakType
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.SpeakType = 0;

        /**
         * UserMessage I.
         * @member {string} I
         * @memberof pb.UserMessage
         * @instance
         */
        UserMessage.prototype.I = "";

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof pb.UserMessage
         * @static
         * @param {pb.IUserMessage=} [properties] Properties to set
         * @returns {pb.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link pb.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof pb.UserMessage
         * @static
         * @param {pb.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.MsgId);
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Pid);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RealName);
            if (message.Time != null && Object.hasOwnProperty.call(message, "Time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Time);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Content);
            if (message.SpeakType != null && Object.hasOwnProperty.call(message, "SpeakType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.SpeakType);
            if (message.I != null && Object.hasOwnProperty.call(message, "I"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.I);
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link pb.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UserMessage
         * @static
         * @param {pb.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgId = reader.string();
                    break;
                case 2:
                    message.Pid = reader.string();
                    break;
                case 3:
                    message.RealName = reader.string();
                    break;
                case 4:
                    message.Time = reader.int64();
                    break;
                case 5:
                    message.Content = reader.string();
                    break;
                case 6:
                    message.SpeakType = reader.int32();
                    break;
                case 7:
                    message.I = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof pb.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isString(message.MsgId))
                    return "MsgId: string expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (!$util.isInteger(message.Time) && !(message.Time && $util.isInteger(message.Time.low) && $util.isInteger(message.Time.high)))
                    return "Time: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.SpeakType != null && message.hasOwnProperty("SpeakType"))
                if (!$util.isInteger(message.SpeakType))
                    return "SpeakType: integer expected";
            if (message.I != null && message.hasOwnProperty("I"))
                if (!$util.isString(message.I))
                    return "I: string expected";
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserMessage)
                return object;
            var message = new $root.pb.UserMessage();
            if (object.MsgId != null)
                message.MsgId = String(object.MsgId);
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.Time != null)
                if ($util.Long)
                    (message.Time = $util.Long.fromValue(object.Time)).unsigned = false;
                else if (typeof object.Time === "string")
                    message.Time = parseInt(object.Time, 10);
                else if (typeof object.Time === "number")
                    message.Time = object.Time;
                else if (typeof object.Time === "object")
                    message.Time = new $util.LongBits(object.Time.low >>> 0, object.Time.high >>> 0).toNumber();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.SpeakType != null)
                message.SpeakType = object.SpeakType | 0;
            if (object.I != null)
                message.I = String(object.I);
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserMessage
         * @static
         * @param {pb.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgId = "";
                object.Pid = "";
                object.RealName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Time = options.longs === String ? "0" : 0;
                object.Content = "";
                object.SpeakType = 0;
                object.I = "";
            }
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                object.MsgId = message.MsgId;
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (typeof message.Time === "number")
                    object.Time = options.longs === String ? String(message.Time) : message.Time;
                else
                    object.Time = options.longs === String ? $util.Long.prototype.toString.call(message.Time) : options.longs === Number ? new $util.LongBits(message.Time.low >>> 0, message.Time.high >>> 0).toNumber() : message.Time;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.SpeakType != null && message.hasOwnProperty("SpeakType"))
                object.SpeakType = message.SpeakType;
            if (message.I != null && message.hasOwnProperty("I"))
                object.I = message.I;
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof pb.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMessage;
    })();

    pb.JoinReq = (function() {

        /**
         * Properties of a JoinReq.
         * @memberof pb
         * @interface IJoinReq
         * @property {string|null} [Pid] JoinReq Pid
         * @property {string|null} [RealName] JoinReq RealName
         * @property {string|null} [SpaceId] JoinReq SpaceId
         * @property {string|null} [EventId] JoinReq EventId
         * @property {string|null} [I] JoinReq I
         * @property {number|null} [X] JoinReq X
         * @property {number|null} [Y] JoinReq Y
         */

        /**
         * Constructs a new JoinReq.
         * @memberof pb
         * @classdesc Represents a JoinReq.
         * @implements IJoinReq
         * @constructor
         * @param {pb.IJoinReq=} [properties] Properties to set
         */
        function JoinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinReq Pid.
         * @member {string} Pid
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.Pid = "";

        /**
         * JoinReq RealName.
         * @member {string} RealName
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.RealName = "";

        /**
         * JoinReq SpaceId.
         * @member {string} SpaceId
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.SpaceId = "";

        /**
         * JoinReq EventId.
         * @member {string} EventId
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.EventId = "";

        /**
         * JoinReq I.
         * @member {string} I
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.I = "";

        /**
         * JoinReq X.
         * @member {number} X
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.X = 0;

        /**
         * JoinReq Y.
         * @member {number} Y
         * @memberof pb.JoinReq
         * @instance
         */
        JoinReq.prototype.Y = 0;

        /**
         * Creates a new JoinReq instance using the specified properties.
         * @function create
         * @memberof pb.JoinReq
         * @static
         * @param {pb.IJoinReq=} [properties] Properties to set
         * @returns {pb.JoinReq} JoinReq instance
         */
        JoinReq.create = function create(properties) {
            return new JoinReq(properties);
        };

        /**
         * Encodes the specified JoinReq message. Does not implicitly {@link pb.JoinReq.verify|verify} messages.
         * @function encode
         * @memberof pb.JoinReq
         * @static
         * @param {pb.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && Object.hasOwnProperty.call(message, "Pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RealName);
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.SpaceId);
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.EventId);
            if (message.I != null && Object.hasOwnProperty.call(message, "I"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.I);
            if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.X);
            if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Y);
            return writer;
        };

        /**
         * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link pb.JoinReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.JoinReq
         * @static
         * @param {pb.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.JoinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Pid = reader.string();
                    break;
                case 2:
                    message.RealName = reader.string();
                    break;
                case 3:
                    message.SpaceId = reader.string();
                    break;
                case 4:
                    message.EventId = reader.string();
                    break;
                case 5:
                    message.I = reader.string();
                    break;
                case 6:
                    message.X = reader.int32();
                    break;
                case 7:
                    message.Y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinReq message.
         * @function verify
         * @memberof pb.JoinReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                if (!$util.isString(message.Pid))
                    return "Pid: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            if (message.I != null && message.hasOwnProperty("I"))
                if (!$util.isString(message.I))
                    return "I: string expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (!$util.isInteger(message.X))
                    return "X: integer expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (!$util.isInteger(message.Y))
                    return "Y: integer expected";
            return null;
        };

        /**
         * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.JoinReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.JoinReq} JoinReq
         */
        JoinReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.JoinReq)
                return object;
            var message = new $root.pb.JoinReq();
            if (object.Pid != null)
                message.Pid = String(object.Pid);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            if (object.I != null)
                message.I = String(object.I);
            if (object.X != null)
                message.X = object.X | 0;
            if (object.Y != null)
                message.Y = object.Y | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.JoinReq
         * @static
         * @param {pb.JoinReq} message JoinReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Pid = "";
                object.RealName = "";
                object.SpaceId = "";
                object.EventId = "";
                object.I = "";
                object.X = 0;
                object.Y = 0;
            }
            if (message.Pid != null && message.hasOwnProperty("Pid"))
                object.Pid = message.Pid;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            if (message.I != null && message.hasOwnProperty("I"))
                object.I = message.I;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = message.Y;
            return object;
        };

        /**
         * Converts this JoinReq to JSON.
         * @function toJSON
         * @memberof pb.JoinReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinReq;
    })();

    pb.ChangeSpaceStatusCmd = (function() {

        /**
         * Properties of a ChangeSpaceStatusCmd.
         * @memberof pb
         * @interface IChangeSpaceStatusCmd
         * @property {string|null} [eventId] ChangeSpaceStatusCmd eventId
         * @property {string|null} [spaceId] ChangeSpaceStatusCmd spaceId
         * @property {pb.SpaceStatusType|null} [statusType] ChangeSpaceStatusCmd statusType
         * @property {boolean|null} [status] ChangeSpaceStatusCmd status
         */

        /**
         * Constructs a new ChangeSpaceStatusCmd.
         * @memberof pb
         * @classdesc Represents a ChangeSpaceStatusCmd.
         * @implements IChangeSpaceStatusCmd
         * @constructor
         * @param {pb.IChangeSpaceStatusCmd=} [properties] Properties to set
         */
        function ChangeSpaceStatusCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeSpaceStatusCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangeSpaceStatusCmd
         * @instance
         */
        ChangeSpaceStatusCmd.prototype.eventId = "";

        /**
         * ChangeSpaceStatusCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangeSpaceStatusCmd
         * @instance
         */
        ChangeSpaceStatusCmd.prototype.spaceId = "";

        /**
         * ChangeSpaceStatusCmd statusType.
         * @member {pb.SpaceStatusType} statusType
         * @memberof pb.ChangeSpaceStatusCmd
         * @instance
         */
        ChangeSpaceStatusCmd.prototype.statusType = 0;

        /**
         * ChangeSpaceStatusCmd status.
         * @member {boolean} status
         * @memberof pb.ChangeSpaceStatusCmd
         * @instance
         */
        ChangeSpaceStatusCmd.prototype.status = false;

        /**
         * Creates a new ChangeSpaceStatusCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {pb.IChangeSpaceStatusCmd=} [properties] Properties to set
         * @returns {pb.ChangeSpaceStatusCmd} ChangeSpaceStatusCmd instance
         */
        ChangeSpaceStatusCmd.create = function create(properties) {
            return new ChangeSpaceStatusCmd(properties);
        };

        /**
         * Encodes the specified ChangeSpaceStatusCmd message. Does not implicitly {@link pb.ChangeSpaceStatusCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {pb.IChangeSpaceStatusCmd} message ChangeSpaceStatusCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSpaceStatusCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.statusType != null && Object.hasOwnProperty.call(message, "statusType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.statusType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.status);
            return writer;
        };

        /**
         * Encodes the specified ChangeSpaceStatusCmd message, length delimited. Does not implicitly {@link pb.ChangeSpaceStatusCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {pb.IChangeSpaceStatusCmd} message ChangeSpaceStatusCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSpaceStatusCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSpaceStatusCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeSpaceStatusCmd} ChangeSpaceStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSpaceStatusCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeSpaceStatusCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.statusType = reader.int32();
                    break;
                case 4:
                    message.status = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeSpaceStatusCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeSpaceStatusCmd} ChangeSpaceStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSpaceStatusCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeSpaceStatusCmd message.
         * @function verify
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeSpaceStatusCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.statusType != null && message.hasOwnProperty("statusType"))
                switch (message.statusType) {
                default:
                    return "statusType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            return null;
        };

        /**
         * Creates a ChangeSpaceStatusCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeSpaceStatusCmd} ChangeSpaceStatusCmd
         */
        ChangeSpaceStatusCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeSpaceStatusCmd)
                return object;
            var message = new $root.pb.ChangeSpaceStatusCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            switch (object.statusType) {
            case "MuteStatus":
            case 0:
                message.statusType = 0;
                break;
            case "CameraStatus":
            case 1:
                message.statusType = 1;
                break;
            case "ShareScreenStatus":
            case 2:
                message.statusType = 2;
                break;
            }
            if (object.status != null)
                message.status = Boolean(object.status);
            return message;
        };

        /**
         * Creates a plain object from a ChangeSpaceStatusCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeSpaceStatusCmd
         * @static
         * @param {pb.ChangeSpaceStatusCmd} message ChangeSpaceStatusCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeSpaceStatusCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.statusType = options.enums === String ? "MuteStatus" : 0;
                object.status = false;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.statusType != null && message.hasOwnProperty("statusType"))
                object.statusType = options.enums === String ? $root.pb.SpaceStatusType[message.statusType] : message.statusType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ChangeSpaceStatusCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangeSpaceStatusCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSpaceStatusCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSpaceStatusCmd;
    })();

    pb.ChangeEventStatusCmd = (function() {

        /**
         * Properties of a ChangeEventStatusCmd.
         * @memberof pb
         * @interface IChangeEventStatusCmd
         * @property {string|null} [eventId] ChangeEventStatusCmd eventId
         * @property {string|null} [spaceId] ChangeEventStatusCmd spaceId
         * @property {pb.EventStatusType|null} [statusType] ChangeEventStatusCmd statusType
         * @property {boolean|null} [status] ChangeEventStatusCmd status
         */

        /**
         * Constructs a new ChangeEventStatusCmd.
         * @memberof pb
         * @classdesc Represents a ChangeEventStatusCmd.
         * @implements IChangeEventStatusCmd
         * @constructor
         * @param {pb.IChangeEventStatusCmd=} [properties] Properties to set
         */
        function ChangeEventStatusCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeEventStatusCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangeEventStatusCmd
         * @instance
         */
        ChangeEventStatusCmd.prototype.eventId = "";

        /**
         * ChangeEventStatusCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangeEventStatusCmd
         * @instance
         */
        ChangeEventStatusCmd.prototype.spaceId = "";

        /**
         * ChangeEventStatusCmd statusType.
         * @member {pb.EventStatusType} statusType
         * @memberof pb.ChangeEventStatusCmd
         * @instance
         */
        ChangeEventStatusCmd.prototype.statusType = 0;

        /**
         * ChangeEventStatusCmd status.
         * @member {boolean} status
         * @memberof pb.ChangeEventStatusCmd
         * @instance
         */
        ChangeEventStatusCmd.prototype.status = false;

        /**
         * Creates a new ChangeEventStatusCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {pb.IChangeEventStatusCmd=} [properties] Properties to set
         * @returns {pb.ChangeEventStatusCmd} ChangeEventStatusCmd instance
         */
        ChangeEventStatusCmd.create = function create(properties) {
            return new ChangeEventStatusCmd(properties);
        };

        /**
         * Encodes the specified ChangeEventStatusCmd message. Does not implicitly {@link pb.ChangeEventStatusCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {pb.IChangeEventStatusCmd} message ChangeEventStatusCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeEventStatusCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.statusType != null && Object.hasOwnProperty.call(message, "statusType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.statusType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.status);
            return writer;
        };

        /**
         * Encodes the specified ChangeEventStatusCmd message, length delimited. Does not implicitly {@link pb.ChangeEventStatusCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {pb.IChangeEventStatusCmd} message ChangeEventStatusCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeEventStatusCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeEventStatusCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeEventStatusCmd} ChangeEventStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeEventStatusCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeEventStatusCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.statusType = reader.int32();
                    break;
                case 4:
                    message.status = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeEventStatusCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeEventStatusCmd} ChangeEventStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeEventStatusCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeEventStatusCmd message.
         * @function verify
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeEventStatusCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.statusType != null && message.hasOwnProperty("statusType"))
                switch (message.statusType) {
                default:
                    return "statusType: enum value expected";
                case 0:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            return null;
        };

        /**
         * Creates a ChangeEventStatusCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeEventStatusCmd} ChangeEventStatusCmd
         */
        ChangeEventStatusCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeEventStatusCmd)
                return object;
            var message = new $root.pb.ChangeEventStatusCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            switch (object.statusType) {
            case "ChatStatus":
            case 0:
                message.statusType = 0;
                break;
            }
            if (object.status != null)
                message.status = Boolean(object.status);
            return message;
        };

        /**
         * Creates a plain object from a ChangeEventStatusCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeEventStatusCmd
         * @static
         * @param {pb.ChangeEventStatusCmd} message ChangeEventStatusCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeEventStatusCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.statusType = options.enums === String ? "ChatStatus" : 0;
                object.status = false;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.statusType != null && message.hasOwnProperty("statusType"))
                object.statusType = options.enums === String ? $root.pb.EventStatusType[message.statusType] : message.statusType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ChangeEventStatusCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangeEventStatusCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeEventStatusCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeEventStatusCmd;
    })();

    pb.DeleteChatMessageCmd = (function() {

        /**
         * Properties of a DeleteChatMessageCmd.
         * @memberof pb
         * @interface IDeleteChatMessageCmd
         * @property {string|null} [eventId] DeleteChatMessageCmd eventId
         * @property {string|null} [spaceId] DeleteChatMessageCmd spaceId
         * @property {pb.ChatType|null} [chatType] DeleteChatMessageCmd chatType
         * @property {string|null} [msgId] DeleteChatMessageCmd msgId
         */

        /**
         * Constructs a new DeleteChatMessageCmd.
         * @memberof pb
         * @classdesc Represents a DeleteChatMessageCmd.
         * @implements IDeleteChatMessageCmd
         * @constructor
         * @param {pb.IDeleteChatMessageCmd=} [properties] Properties to set
         */
        function DeleteChatMessageCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteChatMessageCmd eventId.
         * @member {string} eventId
         * @memberof pb.DeleteChatMessageCmd
         * @instance
         */
        DeleteChatMessageCmd.prototype.eventId = "";

        /**
         * DeleteChatMessageCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.DeleteChatMessageCmd
         * @instance
         */
        DeleteChatMessageCmd.prototype.spaceId = "";

        /**
         * DeleteChatMessageCmd chatType.
         * @member {pb.ChatType} chatType
         * @memberof pb.DeleteChatMessageCmd
         * @instance
         */
        DeleteChatMessageCmd.prototype.chatType = 0;

        /**
         * DeleteChatMessageCmd msgId.
         * @member {string} msgId
         * @memberof pb.DeleteChatMessageCmd
         * @instance
         */
        DeleteChatMessageCmd.prototype.msgId = "";

        /**
         * Creates a new DeleteChatMessageCmd instance using the specified properties.
         * @function create
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {pb.IDeleteChatMessageCmd=} [properties] Properties to set
         * @returns {pb.DeleteChatMessageCmd} DeleteChatMessageCmd instance
         */
        DeleteChatMessageCmd.create = function create(properties) {
            return new DeleteChatMessageCmd(properties);
        };

        /**
         * Encodes the specified DeleteChatMessageCmd message. Does not implicitly {@link pb.DeleteChatMessageCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {pb.IDeleteChatMessageCmd} message DeleteChatMessageCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteChatMessageCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.chatType);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msgId);
            return writer;
        };

        /**
         * Encodes the specified DeleteChatMessageCmd message, length delimited. Does not implicitly {@link pb.DeleteChatMessageCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {pb.IDeleteChatMessageCmd} message DeleteChatMessageCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteChatMessageCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteChatMessageCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DeleteChatMessageCmd} DeleteChatMessageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteChatMessageCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DeleteChatMessageCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.chatType = reader.int32();
                    break;
                case 4:
                    message.msgId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteChatMessageCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DeleteChatMessageCmd} DeleteChatMessageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteChatMessageCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteChatMessageCmd message.
         * @function verify
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteChatMessageCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                switch (message.chatType) {
                default:
                    return "chatType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            return null;
        };

        /**
         * Creates a DeleteChatMessageCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DeleteChatMessageCmd} DeleteChatMessageCmd
         */
        DeleteChatMessageCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DeleteChatMessageCmd)
                return object;
            var message = new $root.pb.DeleteChatMessageCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            switch (object.chatType) {
            case "Event":
            case 0:
                message.chatType = 0;
                break;
            case "Space":
            case 1:
                message.chatType = 1;
                break;
            case "Near":
            case 2:
                message.chatType = 2;
                break;
            }
            if (object.msgId != null)
                message.msgId = String(object.msgId);
            return message;
        };

        /**
         * Creates a plain object from a DeleteChatMessageCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DeleteChatMessageCmd
         * @static
         * @param {pb.DeleteChatMessageCmd} message DeleteChatMessageCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteChatMessageCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.chatType = options.enums === String ? "Event" : 0;
                object.msgId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = options.enums === String ? $root.pb.ChatType[message.chatType] : message.chatType;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            return object;
        };

        /**
         * Converts this DeleteChatMessageCmd to JSON.
         * @function toJSON
         * @memberof pb.DeleteChatMessageCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteChatMessageCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteChatMessageCmd;
    })();

    pb.ChangeBgmCmd = (function() {

        /**
         * Properties of a ChangeBgmCmd.
         * @memberof pb
         * @interface IChangeBgmCmd
         * @property {string|null} [eventId] ChangeBgmCmd eventId
         * @property {string|null} [spaceId] ChangeBgmCmd spaceId
         * @property {pb.CmdScope|null} [scope] ChangeBgmCmd scope
         * @property {string|null} [url] ChangeBgmCmd url
         * @property {string|null} [name] ChangeBgmCmd name
         * @property {pb.BgmStatus|null} [Status] ChangeBgmCmd Status
         * @property {number|null} [volume] ChangeBgmCmd volume
         */

        /**
         * Constructs a new ChangeBgmCmd.
         * @memberof pb
         * @classdesc Represents a ChangeBgmCmd.
         * @implements IChangeBgmCmd
         * @constructor
         * @param {pb.IChangeBgmCmd=} [properties] Properties to set
         */
        function ChangeBgmCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeBgmCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.eventId = "";

        /**
         * ChangeBgmCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.spaceId = "";

        /**
         * ChangeBgmCmd scope.
         * @member {pb.CmdScope} scope
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.scope = 0;

        /**
         * ChangeBgmCmd url.
         * @member {string} url
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.url = "";

        /**
         * ChangeBgmCmd name.
         * @member {string} name
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.name = "";

        /**
         * ChangeBgmCmd Status.
         * @member {pb.BgmStatus} Status
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.Status = 0;

        /**
         * ChangeBgmCmd volume.
         * @member {number} volume
         * @memberof pb.ChangeBgmCmd
         * @instance
         */
        ChangeBgmCmd.prototype.volume = 0;

        /**
         * Creates a new ChangeBgmCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {pb.IChangeBgmCmd=} [properties] Properties to set
         * @returns {pb.ChangeBgmCmd} ChangeBgmCmd instance
         */
        ChangeBgmCmd.create = function create(properties) {
            return new ChangeBgmCmd(properties);
        };

        /**
         * Encodes the specified ChangeBgmCmd message. Does not implicitly {@link pb.ChangeBgmCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {pb.IChangeBgmCmd} message ChangeBgmCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeBgmCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scope);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Status);
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.volume);
            return writer;
        };

        /**
         * Encodes the specified ChangeBgmCmd message, length delimited. Does not implicitly {@link pb.ChangeBgmCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {pb.IChangeBgmCmd} message ChangeBgmCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeBgmCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeBgmCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeBgmCmd} ChangeBgmCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeBgmCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeBgmCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.scope = reader.int32();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.Status = reader.int32();
                    break;
                case 7:
                    message.volume = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeBgmCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeBgmCmd} ChangeBgmCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeBgmCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeBgmCmd message.
         * @function verify
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeBgmCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                switch (message.Status) {
                default:
                    return "Status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (typeof message.volume !== "number")
                    return "volume: number expected";
            return null;
        };

        /**
         * Creates a ChangeBgmCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeBgmCmd} ChangeBgmCmd
         */
        ChangeBgmCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeBgmCmd)
                return object;
            var message = new $root.pb.ChangeBgmCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            switch (object.scope) {
            case "SPACE":
            case 0:
                message.scope = 0;
                break;
            case "EVENT":
            case 1:
                message.scope = 1;
                break;
            }
            if (object.url != null)
                message.url = String(object.url);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.Status) {
            case "RESET":
            case 0:
                message.Status = 0;
                break;
            case "START":
            case 1:
                message.Status = 1;
                break;
            case "SUSPENDED":
            case 2:
                message.Status = 2;
                break;
            }
            if (object.volume != null)
                message.volume = Number(object.volume);
            return message;
        };

        /**
         * Creates a plain object from a ChangeBgmCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeBgmCmd
         * @static
         * @param {pb.ChangeBgmCmd} message ChangeBgmCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeBgmCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.scope = options.enums === String ? "SPACE" : 0;
                object.url = "";
                object.name = "";
                object.Status = options.enums === String ? "RESET" : 0;
                object.volume = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.pb.CmdScope[message.scope] : message.scope;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = options.enums === String ? $root.pb.BgmStatus[message.Status] : message.Status;
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = options.json && !isFinite(message.volume) ? String(message.volume) : message.volume;
            return object;
        };

        /**
         * Converts this ChangeBgmCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangeBgmCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeBgmCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeBgmCmd;
    })();

    pb.EventAllStaffPopupFile = (function() {

        /**
         * Properties of an EventAllStaffPopupFile.
         * @memberof pb
         * @interface IEventAllStaffPopupFile
         * @property {string|null} [Name] EventAllStaffPopupFile Name
         * @property {string|null} [Md5] EventAllStaffPopupFile Md5
         */

        /**
         * Constructs a new EventAllStaffPopupFile.
         * @memberof pb
         * @classdesc Represents an EventAllStaffPopupFile.
         * @implements IEventAllStaffPopupFile
         * @constructor
         * @param {pb.IEventAllStaffPopupFile=} [properties] Properties to set
         */
        function EventAllStaffPopupFile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventAllStaffPopupFile Name.
         * @member {string} Name
         * @memberof pb.EventAllStaffPopupFile
         * @instance
         */
        EventAllStaffPopupFile.prototype.Name = "";

        /**
         * EventAllStaffPopupFile Md5.
         * @member {string} Md5
         * @memberof pb.EventAllStaffPopupFile
         * @instance
         */
        EventAllStaffPopupFile.prototype.Md5 = "";

        /**
         * Creates a new EventAllStaffPopupFile instance using the specified properties.
         * @function create
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {pb.IEventAllStaffPopupFile=} [properties] Properties to set
         * @returns {pb.EventAllStaffPopupFile} EventAllStaffPopupFile instance
         */
        EventAllStaffPopupFile.create = function create(properties) {
            return new EventAllStaffPopupFile(properties);
        };

        /**
         * Encodes the specified EventAllStaffPopupFile message. Does not implicitly {@link pb.EventAllStaffPopupFile.verify|verify} messages.
         * @function encode
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {pb.IEventAllStaffPopupFile} message EventAllStaffPopupFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventAllStaffPopupFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Md5 != null && Object.hasOwnProperty.call(message, "Md5"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Md5);
            return writer;
        };

        /**
         * Encodes the specified EventAllStaffPopupFile message, length delimited. Does not implicitly {@link pb.EventAllStaffPopupFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {pb.IEventAllStaffPopupFile} message EventAllStaffPopupFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventAllStaffPopupFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventAllStaffPopupFile message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EventAllStaffPopupFile} EventAllStaffPopupFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventAllStaffPopupFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EventAllStaffPopupFile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Md5 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventAllStaffPopupFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.EventAllStaffPopupFile} EventAllStaffPopupFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventAllStaffPopupFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventAllStaffPopupFile message.
         * @function verify
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventAllStaffPopupFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Md5 != null && message.hasOwnProperty("Md5"))
                if (!$util.isString(message.Md5))
                    return "Md5: string expected";
            return null;
        };

        /**
         * Creates an EventAllStaffPopupFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EventAllStaffPopupFile} EventAllStaffPopupFile
         */
        EventAllStaffPopupFile.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EventAllStaffPopupFile)
                return object;
            var message = new $root.pb.EventAllStaffPopupFile();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Md5 != null)
                message.Md5 = String(object.Md5);
            return message;
        };

        /**
         * Creates a plain object from an EventAllStaffPopupFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EventAllStaffPopupFile
         * @static
         * @param {pb.EventAllStaffPopupFile} message EventAllStaffPopupFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventAllStaffPopupFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Md5 = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Md5 != null && message.hasOwnProperty("Md5"))
                object.Md5 = message.Md5;
            return object;
        };

        /**
         * Converts this EventAllStaffPopupFile to JSON.
         * @function toJSON
         * @memberof pb.EventAllStaffPopupFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventAllStaffPopupFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventAllStaffPopupFile;
    })();

    pb.BroadcastEventSpecialEffectsCmd = (function() {

        /**
         * Properties of a BroadcastEventSpecialEffectsCmd.
         * @memberof pb
         * @interface IBroadcastEventSpecialEffectsCmd
         * @property {pb.IEventAllStaffPopup|null} [specialEffectInfo] BroadcastEventSpecialEffectsCmd specialEffectInfo
         */

        /**
         * Constructs a new BroadcastEventSpecialEffectsCmd.
         * @memberof pb
         * @classdesc Represents a BroadcastEventSpecialEffectsCmd.
         * @implements IBroadcastEventSpecialEffectsCmd
         * @constructor
         * @param {pb.IBroadcastEventSpecialEffectsCmd=} [properties] Properties to set
         */
        function BroadcastEventSpecialEffectsCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastEventSpecialEffectsCmd specialEffectInfo.
         * @member {pb.IEventAllStaffPopup|null|undefined} specialEffectInfo
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @instance
         */
        BroadcastEventSpecialEffectsCmd.prototype.specialEffectInfo = null;

        /**
         * Creates a new BroadcastEventSpecialEffectsCmd instance using the specified properties.
         * @function create
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {pb.IBroadcastEventSpecialEffectsCmd=} [properties] Properties to set
         * @returns {pb.BroadcastEventSpecialEffectsCmd} BroadcastEventSpecialEffectsCmd instance
         */
        BroadcastEventSpecialEffectsCmd.create = function create(properties) {
            return new BroadcastEventSpecialEffectsCmd(properties);
        };

        /**
         * Encodes the specified BroadcastEventSpecialEffectsCmd message. Does not implicitly {@link pb.BroadcastEventSpecialEffectsCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {pb.IBroadcastEventSpecialEffectsCmd} message BroadcastEventSpecialEffectsCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastEventSpecialEffectsCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.specialEffectInfo != null && Object.hasOwnProperty.call(message, "specialEffectInfo"))
                $root.pb.EventAllStaffPopup.encode(message.specialEffectInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastEventSpecialEffectsCmd message, length delimited. Does not implicitly {@link pb.BroadcastEventSpecialEffectsCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {pb.IBroadcastEventSpecialEffectsCmd} message BroadcastEventSpecialEffectsCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastEventSpecialEffectsCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastEventSpecialEffectsCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.BroadcastEventSpecialEffectsCmd} BroadcastEventSpecialEffectsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastEventSpecialEffectsCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.BroadcastEventSpecialEffectsCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.specialEffectInfo = $root.pb.EventAllStaffPopup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastEventSpecialEffectsCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.BroadcastEventSpecialEffectsCmd} BroadcastEventSpecialEffectsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastEventSpecialEffectsCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastEventSpecialEffectsCmd message.
         * @function verify
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastEventSpecialEffectsCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.specialEffectInfo != null && message.hasOwnProperty("specialEffectInfo")) {
                var error = $root.pb.EventAllStaffPopup.verify(message.specialEffectInfo);
                if (error)
                    return "specialEffectInfo." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastEventSpecialEffectsCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.BroadcastEventSpecialEffectsCmd} BroadcastEventSpecialEffectsCmd
         */
        BroadcastEventSpecialEffectsCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.BroadcastEventSpecialEffectsCmd)
                return object;
            var message = new $root.pb.BroadcastEventSpecialEffectsCmd();
            if (object.specialEffectInfo != null) {
                if (typeof object.specialEffectInfo !== "object")
                    throw TypeError(".pb.BroadcastEventSpecialEffectsCmd.specialEffectInfo: object expected");
                message.specialEffectInfo = $root.pb.EventAllStaffPopup.fromObject(object.specialEffectInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastEventSpecialEffectsCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @static
         * @param {pb.BroadcastEventSpecialEffectsCmd} message BroadcastEventSpecialEffectsCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastEventSpecialEffectsCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.specialEffectInfo = null;
            if (message.specialEffectInfo != null && message.hasOwnProperty("specialEffectInfo"))
                object.specialEffectInfo = $root.pb.EventAllStaffPopup.toObject(message.specialEffectInfo, options);
            return object;
        };

        /**
         * Converts this BroadcastEventSpecialEffectsCmd to JSON.
         * @function toJSON
         * @memberof pb.BroadcastEventSpecialEffectsCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastEventSpecialEffectsCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastEventSpecialEffectsCmd;
    })();

    pb.EventAllStaffPopup = (function() {

        /**
         * Properties of an EventAllStaffPopup.
         * @memberof pb
         * @interface IEventAllStaffPopup
         * @property {string|null} [EventId] EventAllStaffPopup EventId
         * @property {string|null} [Name] EventAllStaffPopup Name
         * @property {string|null} [Background] EventAllStaffPopup Background
         * @property {pb.PopupType|null} [Type] EventAllStaffPopup Type
         * @property {string|null} [Content] EventAllStaffPopup Content
         * @property {pb.IEventAllStaffPopupFile|null} [File] EventAllStaffPopup File
         * @property {boolean|null} [developerMode] EventAllStaffPopup developerMode
         * @property {number|null} [Style] EventAllStaffPopup Style
         */

        /**
         * Constructs a new EventAllStaffPopup.
         * @memberof pb
         * @classdesc Represents an EventAllStaffPopup.
         * @implements IEventAllStaffPopup
         * @constructor
         * @param {pb.IEventAllStaffPopup=} [properties] Properties to set
         */
        function EventAllStaffPopup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventAllStaffPopup EventId.
         * @member {string} EventId
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.EventId = "";

        /**
         * EventAllStaffPopup Name.
         * @member {string} Name
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.Name = "";

        /**
         * EventAllStaffPopup Background.
         * @member {string} Background
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.Background = "";

        /**
         * EventAllStaffPopup Type.
         * @member {pb.PopupType} Type
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.Type = 0;

        /**
         * EventAllStaffPopup Content.
         * @member {string} Content
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.Content = "";

        /**
         * EventAllStaffPopup File.
         * @member {pb.IEventAllStaffPopupFile|null|undefined} File
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.File = null;

        /**
         * EventAllStaffPopup developerMode.
         * @member {boolean} developerMode
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.developerMode = false;

        /**
         * EventAllStaffPopup Style.
         * @member {number} Style
         * @memberof pb.EventAllStaffPopup
         * @instance
         */
        EventAllStaffPopup.prototype.Style = 0;

        /**
         * Creates a new EventAllStaffPopup instance using the specified properties.
         * @function create
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {pb.IEventAllStaffPopup=} [properties] Properties to set
         * @returns {pb.EventAllStaffPopup} EventAllStaffPopup instance
         */
        EventAllStaffPopup.create = function create(properties) {
            return new EventAllStaffPopup(properties);
        };

        /**
         * Encodes the specified EventAllStaffPopup message. Does not implicitly {@link pb.EventAllStaffPopup.verify|verify} messages.
         * @function encode
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {pb.IEventAllStaffPopup} message EventAllStaffPopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventAllStaffPopup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.EventId);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Background != null && Object.hasOwnProperty.call(message, "Background"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Background);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Content);
            if (message.File != null && Object.hasOwnProperty.call(message, "File"))
                $root.pb.EventAllStaffPopupFile.encode(message.File, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.developerMode != null && Object.hasOwnProperty.call(message, "developerMode"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.developerMode);
            if (message.Style != null && Object.hasOwnProperty.call(message, "Style"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Style);
            return writer;
        };

        /**
         * Encodes the specified EventAllStaffPopup message, length delimited. Does not implicitly {@link pb.EventAllStaffPopup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {pb.IEventAllStaffPopup} message EventAllStaffPopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventAllStaffPopup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventAllStaffPopup message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EventAllStaffPopup} EventAllStaffPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventAllStaffPopup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EventAllStaffPopup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EventId = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Background = reader.string();
                    break;
                case 4:
                    message.Type = reader.int32();
                    break;
                case 5:
                    message.Content = reader.string();
                    break;
                case 6:
                    message.File = $root.pb.EventAllStaffPopupFile.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.developerMode = reader.bool();
                    break;
                case 8:
                    message.Style = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventAllStaffPopup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.EventAllStaffPopup} EventAllStaffPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventAllStaffPopup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventAllStaffPopup message.
         * @function verify
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventAllStaffPopup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Background != null && message.hasOwnProperty("Background"))
                if (!$util.isString(message.Background))
                    return "Background: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.File != null && message.hasOwnProperty("File")) {
                var error = $root.pb.EventAllStaffPopupFile.verify(message.File);
                if (error)
                    return "File." + error;
            }
            if (message.developerMode != null && message.hasOwnProperty("developerMode"))
                if (typeof message.developerMode !== "boolean")
                    return "developerMode: boolean expected";
            if (message.Style != null && message.hasOwnProperty("Style"))
                if (!$util.isInteger(message.Style))
                    return "Style: integer expected";
            return null;
        };

        /**
         * Creates an EventAllStaffPopup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EventAllStaffPopup} EventAllStaffPopup
         */
        EventAllStaffPopup.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EventAllStaffPopup)
                return object;
            var message = new $root.pb.EventAllStaffPopup();
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Background != null)
                message.Background = String(object.Background);
            switch (object.Type) {
            case "LocalFile":
            case 0:
                message.Type = 0;
                break;
            case "LocalVideo":
            case 1:
                message.Type = 1;
                break;
            case "LocalPicture":
            case 2:
                message.Type = 2;
                break;
            case "LiveStream":
            case 3:
                message.Type = 3;
                break;
            case "StickyNote":
            case 4:
                message.Type = 4;
                break;
            case "Whiteboard":
            case 5:
                message.Type = 5;
                break;
            case "HyperlinkIframe":
            case 6:
                message.Type = 6;
                break;
            case "HyperlinkWindow":
            case 7:
                message.Type = 7;
                break;
            case "SpecialEffects":
            case 8:
                message.Type = 8;
                break;
            }
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.File != null) {
                if (typeof object.File !== "object")
                    throw TypeError(".pb.EventAllStaffPopup.File: object expected");
                message.File = $root.pb.EventAllStaffPopupFile.fromObject(object.File);
            }
            if (object.developerMode != null)
                message.developerMode = Boolean(object.developerMode);
            if (object.Style != null)
                message.Style = object.Style | 0;
            return message;
        };

        /**
         * Creates a plain object from an EventAllStaffPopup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EventAllStaffPopup
         * @static
         * @param {pb.EventAllStaffPopup} message EventAllStaffPopup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventAllStaffPopup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.EventId = "";
                object.Name = "";
                object.Background = "";
                object.Type = options.enums === String ? "LocalFile" : 0;
                object.Content = "";
                object.File = null;
                object.developerMode = false;
                object.Style = 0;
            }
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Background != null && message.hasOwnProperty("Background"))
                object.Background = message.Background;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.pb.PopupType[message.Type] : message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.File != null && message.hasOwnProperty("File"))
                object.File = $root.pb.EventAllStaffPopupFile.toObject(message.File, options);
            if (message.developerMode != null && message.hasOwnProperty("developerMode"))
                object.developerMode = message.developerMode;
            if (message.Style != null && message.hasOwnProperty("Style"))
                object.Style = message.Style;
            return object;
        };

        /**
         * Converts this EventAllStaffPopup to JSON.
         * @function toJSON
         * @memberof pb.EventAllStaffPopup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventAllStaffPopup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventAllStaffPopup;
    })();

    pb.GetPlayerInfoCmd = (function() {

        /**
         * Properties of a GetPlayerInfoCmd.
         * @memberof pb
         * @interface IGetPlayerInfoCmd
         * @property {string|null} [eventId] GetPlayerInfoCmd eventId
         * @property {string|null} [spaceId] GetPlayerInfoCmd spaceId
         * @property {Array.<string>|null} [pidArr] GetPlayerInfoCmd pidArr
         */

        /**
         * Constructs a new GetPlayerInfoCmd.
         * @memberof pb
         * @classdesc Represents a GetPlayerInfoCmd.
         * @implements IGetPlayerInfoCmd
         * @constructor
         * @param {pb.IGetPlayerInfoCmd=} [properties] Properties to set
         */
        function GetPlayerInfoCmd(properties) {
            this.pidArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerInfoCmd eventId.
         * @member {string} eventId
         * @memberof pb.GetPlayerInfoCmd
         * @instance
         */
        GetPlayerInfoCmd.prototype.eventId = "";

        /**
         * GetPlayerInfoCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GetPlayerInfoCmd
         * @instance
         */
        GetPlayerInfoCmd.prototype.spaceId = "";

        /**
         * GetPlayerInfoCmd pidArr.
         * @member {Array.<string>} pidArr
         * @memberof pb.GetPlayerInfoCmd
         * @instance
         */
        GetPlayerInfoCmd.prototype.pidArr = $util.emptyArray;

        /**
         * Creates a new GetPlayerInfoCmd instance using the specified properties.
         * @function create
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {pb.IGetPlayerInfoCmd=} [properties] Properties to set
         * @returns {pb.GetPlayerInfoCmd} GetPlayerInfoCmd instance
         */
        GetPlayerInfoCmd.create = function create(properties) {
            return new GetPlayerInfoCmd(properties);
        };

        /**
         * Encodes the specified GetPlayerInfoCmd message. Does not implicitly {@link pb.GetPlayerInfoCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {pb.IGetPlayerInfoCmd} message GetPlayerInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pidArr != null && message.pidArr.length)
                for (var i = 0; i < message.pidArr.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.pidArr[i]);
            return writer;
        };

        /**
         * Encodes the specified GetPlayerInfoCmd message, length delimited. Does not implicitly {@link pb.GetPlayerInfoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {pb.IGetPlayerInfoCmd} message GetPlayerInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerInfoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetPlayerInfoCmd} GetPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetPlayerInfoCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.pidArr && message.pidArr.length))
                        message.pidArr = [];
                    message.pidArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerInfoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetPlayerInfoCmd} GetPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerInfoCmd message.
         * @function verify
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerInfoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pidArr != null && message.hasOwnProperty("pidArr")) {
                if (!Array.isArray(message.pidArr))
                    return "pidArr: array expected";
                for (var i = 0; i < message.pidArr.length; ++i)
                    if (!$util.isString(message.pidArr[i]))
                        return "pidArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GetPlayerInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetPlayerInfoCmd} GetPlayerInfoCmd
         */
        GetPlayerInfoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetPlayerInfoCmd)
                return object;
            var message = new $root.pb.GetPlayerInfoCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pidArr) {
                if (!Array.isArray(object.pidArr))
                    throw TypeError(".pb.GetPlayerInfoCmd.pidArr: array expected");
                message.pidArr = [];
                for (var i = 0; i < object.pidArr.length; ++i)
                    message.pidArr[i] = String(object.pidArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPlayerInfoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetPlayerInfoCmd
         * @static
         * @param {pb.GetPlayerInfoCmd} message GetPlayerInfoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayerInfoCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pidArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pidArr && message.pidArr.length) {
                object.pidArr = [];
                for (var j = 0; j < message.pidArr.length; ++j)
                    object.pidArr[j] = message.pidArr[j];
            }
            return object;
        };

        /**
         * Converts this GetPlayerInfoCmd to JSON.
         * @function toJSON
         * @memberof pb.GetPlayerInfoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayerInfoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayerInfoCmd;
    })();

    pb.PlayerPositionInfos = (function() {

        /**
         * Properties of a PlayerPositionInfos.
         * @memberof pb
         * @interface IPlayerPositionInfos
         * @property {Array.<pb.IPosition>|null} [positionArr] PlayerPositionInfos positionArr
         */

        /**
         * Constructs a new PlayerPositionInfos.
         * @memberof pb
         * @classdesc Represents a PlayerPositionInfos.
         * @implements IPlayerPositionInfos
         * @constructor
         * @param {pb.IPlayerPositionInfos=} [properties] Properties to set
         */
        function PlayerPositionInfos(properties) {
            this.positionArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerPositionInfos positionArr.
         * @member {Array.<pb.IPosition>} positionArr
         * @memberof pb.PlayerPositionInfos
         * @instance
         */
        PlayerPositionInfos.prototype.positionArr = $util.emptyArray;

        /**
         * Creates a new PlayerPositionInfos instance using the specified properties.
         * @function create
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {pb.IPlayerPositionInfos=} [properties] Properties to set
         * @returns {pb.PlayerPositionInfos} PlayerPositionInfos instance
         */
        PlayerPositionInfos.create = function create(properties) {
            return new PlayerPositionInfos(properties);
        };

        /**
         * Encodes the specified PlayerPositionInfos message. Does not implicitly {@link pb.PlayerPositionInfos.verify|verify} messages.
         * @function encode
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {pb.IPlayerPositionInfos} message PlayerPositionInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPositionInfos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.positionArr != null && message.positionArr.length)
                for (var i = 0; i < message.positionArr.length; ++i)
                    $root.pb.Position.encode(message.positionArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerPositionInfos message, length delimited. Does not implicitly {@link pb.PlayerPositionInfos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {pb.IPlayerPositionInfos} message PlayerPositionInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPositionInfos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerPositionInfos message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlayerPositionInfos} PlayerPositionInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPositionInfos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlayerPositionInfos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.positionArr && message.positionArr.length))
                        message.positionArr = [];
                    message.positionArr.push($root.pb.Position.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerPositionInfos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PlayerPositionInfos} PlayerPositionInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPositionInfos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerPositionInfos message.
         * @function verify
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerPositionInfos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.positionArr != null && message.hasOwnProperty("positionArr")) {
                if (!Array.isArray(message.positionArr))
                    return "positionArr: array expected";
                for (var i = 0; i < message.positionArr.length; ++i) {
                    var error = $root.pb.Position.verify(message.positionArr[i]);
                    if (error)
                        return "positionArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerPositionInfos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PlayerPositionInfos} PlayerPositionInfos
         */
        PlayerPositionInfos.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PlayerPositionInfos)
                return object;
            var message = new $root.pb.PlayerPositionInfos();
            if (object.positionArr) {
                if (!Array.isArray(object.positionArr))
                    throw TypeError(".pb.PlayerPositionInfos.positionArr: array expected");
                message.positionArr = [];
                for (var i = 0; i < object.positionArr.length; ++i) {
                    if (typeof object.positionArr[i] !== "object")
                        throw TypeError(".pb.PlayerPositionInfos.positionArr: object expected");
                    message.positionArr[i] = $root.pb.Position.fromObject(object.positionArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerPositionInfos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PlayerPositionInfos
         * @static
         * @param {pb.PlayerPositionInfos} message PlayerPositionInfos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerPositionInfos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.positionArr = [];
            if (message.positionArr && message.positionArr.length) {
                object.positionArr = [];
                for (var j = 0; j < message.positionArr.length; ++j)
                    object.positionArr[j] = $root.pb.Position.toObject(message.positionArr[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerPositionInfos to JSON.
         * @function toJSON
         * @memberof pb.PlayerPositionInfos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerPositionInfos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerPositionInfos;
    })();

    pb.ChangePlayerPositionCmd = (function() {

        /**
         * Properties of a ChangePlayerPositionCmd.
         * @memberof pb
         * @interface IChangePlayerPositionCmd
         * @property {string|null} [eventId] ChangePlayerPositionCmd eventId
         * @property {string|null} [spaceId] ChangePlayerPositionCmd spaceId
         * @property {string|null} [pid] ChangePlayerPositionCmd pid
         * @property {number|null} [x] ChangePlayerPositionCmd x
         * @property {number|null} [y] ChangePlayerPositionCmd y
         */

        /**
         * Constructs a new ChangePlayerPositionCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerPositionCmd.
         * @implements IChangePlayerPositionCmd
         * @constructor
         * @param {pb.IChangePlayerPositionCmd=} [properties] Properties to set
         */
        function ChangePlayerPositionCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerPositionCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         */
        ChangePlayerPositionCmd.prototype.eventId = "";

        /**
         * ChangePlayerPositionCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         */
        ChangePlayerPositionCmd.prototype.spaceId = "";

        /**
         * ChangePlayerPositionCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         */
        ChangePlayerPositionCmd.prototype.pid = "";

        /**
         * ChangePlayerPositionCmd x.
         * @member {number} x
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         */
        ChangePlayerPositionCmd.prototype.x = 0;

        /**
         * ChangePlayerPositionCmd y.
         * @member {number} y
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         */
        ChangePlayerPositionCmd.prototype.y = 0;

        /**
         * Creates a new ChangePlayerPositionCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {pb.IChangePlayerPositionCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerPositionCmd} ChangePlayerPositionCmd instance
         */
        ChangePlayerPositionCmd.create = function create(properties) {
            return new ChangePlayerPositionCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerPositionCmd message. Does not implicitly {@link pb.ChangePlayerPositionCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {pb.IChangePlayerPositionCmd} message ChangePlayerPositionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerPositionCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerPositionCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerPositionCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {pb.IChangePlayerPositionCmd} message ChangePlayerPositionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerPositionCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerPositionCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerPositionCmd} ChangePlayerPositionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerPositionCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerPositionCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.x = reader.int32();
                    break;
                case 5:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerPositionCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerPositionCmd} ChangePlayerPositionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerPositionCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerPositionCmd message.
         * @function verify
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerPositionCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a ChangePlayerPositionCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerPositionCmd} ChangePlayerPositionCmd
         */
        ChangePlayerPositionCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerPositionCmd)
                return object;
            var message = new $root.pb.ChangePlayerPositionCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerPositionCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerPositionCmd
         * @static
         * @param {pb.ChangePlayerPositionCmd} message ChangePlayerPositionCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerPositionCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.x = 0;
                object.y = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this ChangePlayerPositionCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerPositionCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerPositionCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerPositionCmd;
    })();

    pb.ChangePlayerDirectionCmd = (function() {

        /**
         * Properties of a ChangePlayerDirectionCmd.
         * @memberof pb
         * @interface IChangePlayerDirectionCmd
         * @property {string|null} [eventId] ChangePlayerDirectionCmd eventId
         * @property {string|null} [spaceId] ChangePlayerDirectionCmd spaceId
         * @property {string|null} [pid] ChangePlayerDirectionCmd pid
         * @property {pb.DirectionType|null} [direction] ChangePlayerDirectionCmd direction
         */

        /**
         * Constructs a new ChangePlayerDirectionCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerDirectionCmd.
         * @implements IChangePlayerDirectionCmd
         * @constructor
         * @param {pb.IChangePlayerDirectionCmd=} [properties] Properties to set
         */
        function ChangePlayerDirectionCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerDirectionCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerDirectionCmd
         * @instance
         */
        ChangePlayerDirectionCmd.prototype.eventId = "";

        /**
         * ChangePlayerDirectionCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerDirectionCmd
         * @instance
         */
        ChangePlayerDirectionCmd.prototype.spaceId = "";

        /**
         * ChangePlayerDirectionCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerDirectionCmd
         * @instance
         */
        ChangePlayerDirectionCmd.prototype.pid = "";

        /**
         * ChangePlayerDirectionCmd direction.
         * @member {pb.DirectionType} direction
         * @memberof pb.ChangePlayerDirectionCmd
         * @instance
         */
        ChangePlayerDirectionCmd.prototype.direction = 0;

        /**
         * Creates a new ChangePlayerDirectionCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {pb.IChangePlayerDirectionCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerDirectionCmd} ChangePlayerDirectionCmd instance
         */
        ChangePlayerDirectionCmd.create = function create(properties) {
            return new ChangePlayerDirectionCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerDirectionCmd message. Does not implicitly {@link pb.ChangePlayerDirectionCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {pb.IChangePlayerDirectionCmd} message ChangePlayerDirectionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerDirectionCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerDirectionCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerDirectionCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {pb.IChangePlayerDirectionCmd} message ChangePlayerDirectionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerDirectionCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerDirectionCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerDirectionCmd} ChangePlayerDirectionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerDirectionCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerDirectionCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerDirectionCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerDirectionCmd} ChangePlayerDirectionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerDirectionCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerDirectionCmd message.
         * @function verify
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerDirectionCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a ChangePlayerDirectionCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerDirectionCmd} ChangePlayerDirectionCmd
         */
        ChangePlayerDirectionCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerDirectionCmd)
                return object;
            var message = new $root.pb.ChangePlayerDirectionCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            switch (object.direction) {
            case "LEFT":
            case 0:
                message.direction = 0;
                break;
            case "RIGHT":
            case 1:
                message.direction = 1;
                break;
            case "UP":
            case 2:
                message.direction = 2;
                break;
            case "DOWN":
            case 3:
                message.direction = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerDirectionCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerDirectionCmd
         * @static
         * @param {pb.ChangePlayerDirectionCmd} message ChangePlayerDirectionCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerDirectionCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.direction = options.enums === String ? "LEFT" : 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.pb.DirectionType[message.direction] : message.direction;
            return object;
        };

        /**
         * Converts this ChangePlayerDirectionCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerDirectionCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerDirectionCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerDirectionCmd;
    })();

    pb.ChangePlayerAnimationCmd = (function() {

        /**
         * Properties of a ChangePlayerAnimationCmd.
         * @memberof pb
         * @interface IChangePlayerAnimationCmd
         * @property {string|null} [eventId] ChangePlayerAnimationCmd eventId
         * @property {string|null} [spaceId] ChangePlayerAnimationCmd spaceId
         * @property {string|null} [pid] ChangePlayerAnimationCmd pid
         * @property {pb.AnimationType|null} [animation] ChangePlayerAnimationCmd animation
         */

        /**
         * Constructs a new ChangePlayerAnimationCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerAnimationCmd.
         * @implements IChangePlayerAnimationCmd
         * @constructor
         * @param {pb.IChangePlayerAnimationCmd=} [properties] Properties to set
         */
        function ChangePlayerAnimationCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerAnimationCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerAnimationCmd
         * @instance
         */
        ChangePlayerAnimationCmd.prototype.eventId = "";

        /**
         * ChangePlayerAnimationCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerAnimationCmd
         * @instance
         */
        ChangePlayerAnimationCmd.prototype.spaceId = "";

        /**
         * ChangePlayerAnimationCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerAnimationCmd
         * @instance
         */
        ChangePlayerAnimationCmd.prototype.pid = "";

        /**
         * ChangePlayerAnimationCmd animation.
         * @member {pb.AnimationType} animation
         * @memberof pb.ChangePlayerAnimationCmd
         * @instance
         */
        ChangePlayerAnimationCmd.prototype.animation = 0;

        /**
         * Creates a new ChangePlayerAnimationCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {pb.IChangePlayerAnimationCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerAnimationCmd} ChangePlayerAnimationCmd instance
         */
        ChangePlayerAnimationCmd.create = function create(properties) {
            return new ChangePlayerAnimationCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerAnimationCmd message. Does not implicitly {@link pb.ChangePlayerAnimationCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {pb.IChangePlayerAnimationCmd} message ChangePlayerAnimationCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerAnimationCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.animation != null && Object.hasOwnProperty.call(message, "animation"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.animation);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerAnimationCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerAnimationCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {pb.IChangePlayerAnimationCmd} message ChangePlayerAnimationCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerAnimationCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerAnimationCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerAnimationCmd} ChangePlayerAnimationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerAnimationCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerAnimationCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.animation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerAnimationCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerAnimationCmd} ChangePlayerAnimationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerAnimationCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerAnimationCmd message.
         * @function verify
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerAnimationCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.animation != null && message.hasOwnProperty("animation"))
                switch (message.animation) {
                default:
                    return "animation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                    break;
                }
            return null;
        };

        /**
         * Creates a ChangePlayerAnimationCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerAnimationCmd} ChangePlayerAnimationCmd
         */
        ChangePlayerAnimationCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerAnimationCmd)
                return object;
            var message = new $root.pb.ChangePlayerAnimationCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            switch (object.animation) {
            case "DANCE_1":
            case 0:
                message.animation = 0;
                break;
            case "DANCE_2":
            case 1:
                message.animation = 1;
                break;
            case "DANCE_3":
            case 2:
                message.animation = 2;
                break;
            case "DANCE_4":
            case 3:
                message.animation = 3;
                break;
            case "DANCE_5":
            case 4:
                message.animation = 4;
                break;
            case "DANCE_6":
            case 5:
                message.animation = 5;
                break;
            case "DANCE_7":
            case 6:
                message.animation = 6;
                break;
            case "DANCE_8":
            case 7:
                message.animation = 7;
                break;
            case "DANCE_9":
            case 8:
                message.animation = 8;
                break;
            case "DANCE_10":
            case 9:
                message.animation = 9;
                break;
            case "HELLO_B":
            case 10:
                message.animation = 10;
                break;
            case "HELLO_F":
            case 11:
                message.animation = 11;
                break;
            case "HELLO_P":
            case 12:
                message.animation = 12;
                break;
            case "JUMP_B":
            case 13:
                message.animation = 13;
                break;
            case "JUMP_F":
            case 14:
                message.animation = 14;
                break;
            case "JUMP_P":
            case 15:
                message.animation = 15;
                break;
            case "STAND_B":
            case 16:
                message.animation = 16;
                break;
            case "STAND_F":
            case 17:
                message.animation = 17;
                break;
            case "STAND_P":
            case 18:
                message.animation = 18;
                break;
            case "WALK_B":
            case 19:
                message.animation = 19;
                break;
            case "WALK_F":
            case 20:
                message.animation = 20;
                break;
            case "WALK_P":
            case 21:
                message.animation = 21;
                break;
            case "SIT_B":
            case 22:
                message.animation = 22;
                break;
            case "SIT_F":
            case 23:
                message.animation = 23;
                break;
            case "SIT_P":
            case 24:
                message.animation = 24;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerAnimationCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerAnimationCmd
         * @static
         * @param {pb.ChangePlayerAnimationCmd} message ChangePlayerAnimationCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerAnimationCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.animation = options.enums === String ? "DANCE_1" : 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.animation != null && message.hasOwnProperty("animation"))
                object.animation = options.enums === String ? $root.pb.AnimationType[message.animation] : message.animation;
            return object;
        };

        /**
         * Converts this ChangePlayerAnimationCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerAnimationCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerAnimationCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerAnimationCmd;
    })();

    pb.ChangePlayerMoveModeCmd = (function() {

        /**
         * Properties of a ChangePlayerMoveModeCmd.
         * @memberof pb
         * @interface IChangePlayerMoveModeCmd
         * @property {string|null} [eventId] ChangePlayerMoveModeCmd eventId
         * @property {string|null} [spaceId] ChangePlayerMoveModeCmd spaceId
         * @property {string|null} [pid] ChangePlayerMoveModeCmd pid
         * @property {pb.MoveMode|null} [moveMode] ChangePlayerMoveModeCmd moveMode
         */

        /**
         * Constructs a new ChangePlayerMoveModeCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerMoveModeCmd.
         * @implements IChangePlayerMoveModeCmd
         * @constructor
         * @param {pb.IChangePlayerMoveModeCmd=} [properties] Properties to set
         */
        function ChangePlayerMoveModeCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerMoveModeCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerMoveModeCmd
         * @instance
         */
        ChangePlayerMoveModeCmd.prototype.eventId = "";

        /**
         * ChangePlayerMoveModeCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerMoveModeCmd
         * @instance
         */
        ChangePlayerMoveModeCmd.prototype.spaceId = "";

        /**
         * ChangePlayerMoveModeCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerMoveModeCmd
         * @instance
         */
        ChangePlayerMoveModeCmd.prototype.pid = "";

        /**
         * ChangePlayerMoveModeCmd moveMode.
         * @member {pb.MoveMode} moveMode
         * @memberof pb.ChangePlayerMoveModeCmd
         * @instance
         */
        ChangePlayerMoveModeCmd.prototype.moveMode = 0;

        /**
         * Creates a new ChangePlayerMoveModeCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {pb.IChangePlayerMoveModeCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerMoveModeCmd} ChangePlayerMoveModeCmd instance
         */
        ChangePlayerMoveModeCmd.create = function create(properties) {
            return new ChangePlayerMoveModeCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerMoveModeCmd message. Does not implicitly {@link pb.ChangePlayerMoveModeCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {pb.IChangePlayerMoveModeCmd} message ChangePlayerMoveModeCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerMoveModeCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.moveMode != null && Object.hasOwnProperty.call(message, "moveMode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.moveMode);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerMoveModeCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerMoveModeCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {pb.IChangePlayerMoveModeCmd} message ChangePlayerMoveModeCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerMoveModeCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerMoveModeCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerMoveModeCmd} ChangePlayerMoveModeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerMoveModeCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerMoveModeCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.moveMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerMoveModeCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerMoveModeCmd} ChangePlayerMoveModeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerMoveModeCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerMoveModeCmd message.
         * @function verify
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerMoveModeCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.moveMode != null && message.hasOwnProperty("moveMode"))
                switch (message.moveMode) {
                default:
                    return "moveMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ChangePlayerMoveModeCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerMoveModeCmd} ChangePlayerMoveModeCmd
         */
        ChangePlayerMoveModeCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerMoveModeCmd)
                return object;
            var message = new $root.pb.ChangePlayerMoveModeCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            switch (object.moveMode) {
            case "NORMAL_MODE":
            case 0:
                message.moveMode = 0;
                break;
            case "FLY_MODE":
            case 1:
                message.moveMode = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerMoveModeCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerMoveModeCmd
         * @static
         * @param {pb.ChangePlayerMoveModeCmd} message ChangePlayerMoveModeCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerMoveModeCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.moveMode = options.enums === String ? "NORMAL_MODE" : 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.moveMode != null && message.hasOwnProperty("moveMode"))
                object.moveMode = options.enums === String ? $root.pb.MoveMode[message.moveMode] : message.moveMode;
            return object;
        };

        /**
         * Converts this ChangePlayerMoveModeCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerMoveModeCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerMoveModeCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerMoveModeCmd;
    })();

    pb.ChangePlayerImageCmd = (function() {

        /**
         * Properties of a ChangePlayerImageCmd.
         * @memberof pb
         * @interface IChangePlayerImageCmd
         * @property {string|null} [eventId] ChangePlayerImageCmd eventId
         * @property {string|null} [spaceId] ChangePlayerImageCmd spaceId
         * @property {string|null} [pid] ChangePlayerImageCmd pid
         * @property {string|null} [image] ChangePlayerImageCmd image
         */

        /**
         * Constructs a new ChangePlayerImageCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerImageCmd.
         * @implements IChangePlayerImageCmd
         * @constructor
         * @param {pb.IChangePlayerImageCmd=} [properties] Properties to set
         */
        function ChangePlayerImageCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerImageCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerImageCmd
         * @instance
         */
        ChangePlayerImageCmd.prototype.eventId = "";

        /**
         * ChangePlayerImageCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerImageCmd
         * @instance
         */
        ChangePlayerImageCmd.prototype.spaceId = "";

        /**
         * ChangePlayerImageCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerImageCmd
         * @instance
         */
        ChangePlayerImageCmd.prototype.pid = "";

        /**
         * ChangePlayerImageCmd image.
         * @member {string} image
         * @memberof pb.ChangePlayerImageCmd
         * @instance
         */
        ChangePlayerImageCmd.prototype.image = "";

        /**
         * Creates a new ChangePlayerImageCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {pb.IChangePlayerImageCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerImageCmd} ChangePlayerImageCmd instance
         */
        ChangePlayerImageCmd.create = function create(properties) {
            return new ChangePlayerImageCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerImageCmd message. Does not implicitly {@link pb.ChangePlayerImageCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {pb.IChangePlayerImageCmd} message ChangePlayerImageCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerImageCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.image);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerImageCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerImageCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {pb.IChangePlayerImageCmd} message ChangePlayerImageCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerImageCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerImageCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerImageCmd} ChangePlayerImageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerImageCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerImageCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.image = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerImageCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerImageCmd} ChangePlayerImageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerImageCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerImageCmd message.
         * @function verify
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerImageCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            return null;
        };

        /**
         * Creates a ChangePlayerImageCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerImageCmd} ChangePlayerImageCmd
         */
        ChangePlayerImageCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerImageCmd)
                return object;
            var message = new $root.pb.ChangePlayerImageCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.image != null)
                message.image = String(object.image);
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerImageCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerImageCmd
         * @static
         * @param {pb.ChangePlayerImageCmd} message ChangePlayerImageCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerImageCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.image = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            return object;
        };

        /**
         * Converts this ChangePlayerImageCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerImageCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerImageCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerImageCmd;
    })();

    pb.ChangePlayerFollowCmd = (function() {

        /**
         * Properties of a ChangePlayerFollowCmd.
         * @memberof pb
         * @interface IChangePlayerFollowCmd
         * @property {string|null} [eventId] ChangePlayerFollowCmd eventId
         * @property {string|null} [spaceId] ChangePlayerFollowCmd spaceId
         * @property {string|null} [pid] ChangePlayerFollowCmd pid
         * @property {string|null} [followPid] ChangePlayerFollowCmd followPid
         */

        /**
         * Constructs a new ChangePlayerFollowCmd.
         * @memberof pb
         * @classdesc Represents a ChangePlayerFollowCmd.
         * @implements IChangePlayerFollowCmd
         * @constructor
         * @param {pb.IChangePlayerFollowCmd=} [properties] Properties to set
         */
        function ChangePlayerFollowCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerFollowCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangePlayerFollowCmd
         * @instance
         */
        ChangePlayerFollowCmd.prototype.eventId = "";

        /**
         * ChangePlayerFollowCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangePlayerFollowCmd
         * @instance
         */
        ChangePlayerFollowCmd.prototype.spaceId = "";

        /**
         * ChangePlayerFollowCmd pid.
         * @member {string} pid
         * @memberof pb.ChangePlayerFollowCmd
         * @instance
         */
        ChangePlayerFollowCmd.prototype.pid = "";

        /**
         * ChangePlayerFollowCmd followPid.
         * @member {string} followPid
         * @memberof pb.ChangePlayerFollowCmd
         * @instance
         */
        ChangePlayerFollowCmd.prototype.followPid = "";

        /**
         * Creates a new ChangePlayerFollowCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {pb.IChangePlayerFollowCmd=} [properties] Properties to set
         * @returns {pb.ChangePlayerFollowCmd} ChangePlayerFollowCmd instance
         */
        ChangePlayerFollowCmd.create = function create(properties) {
            return new ChangePlayerFollowCmd(properties);
        };

        /**
         * Encodes the specified ChangePlayerFollowCmd message. Does not implicitly {@link pb.ChangePlayerFollowCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {pb.IChangePlayerFollowCmd} message ChangePlayerFollowCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerFollowCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.followPid != null && Object.hasOwnProperty.call(message, "followPid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.followPid);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerFollowCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerFollowCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {pb.IChangePlayerFollowCmd} message ChangePlayerFollowCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerFollowCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerFollowCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangePlayerFollowCmd} ChangePlayerFollowCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerFollowCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangePlayerFollowCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.followPid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePlayerFollowCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangePlayerFollowCmd} ChangePlayerFollowCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerFollowCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerFollowCmd message.
         * @function verify
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerFollowCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.followPid != null && message.hasOwnProperty("followPid"))
                if (!$util.isString(message.followPid))
                    return "followPid: string expected";
            return null;
        };

        /**
         * Creates a ChangePlayerFollowCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangePlayerFollowCmd} ChangePlayerFollowCmd
         */
        ChangePlayerFollowCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangePlayerFollowCmd)
                return object;
            var message = new $root.pb.ChangePlayerFollowCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.followPid != null)
                message.followPid = String(object.followPid);
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerFollowCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangePlayerFollowCmd
         * @static
         * @param {pb.ChangePlayerFollowCmd} message ChangePlayerFollowCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerFollowCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.followPid = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.followPid != null && message.hasOwnProperty("followPid"))
                object.followPid = message.followPid;
            return object;
        };

        /**
         * Converts this ChangePlayerFollowCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangePlayerFollowCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerFollowCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangePlayerFollowCmd;
    })();

    pb.AddPlayerListenerCmd = (function() {

        /**
         * Properties of an AddPlayerListenerCmd.
         * @memberof pb
         * @interface IAddPlayerListenerCmd
         * @property {string|null} [eventId] AddPlayerListenerCmd eventId
         * @property {string|null} [spaceId] AddPlayerListenerCmd spaceId
         * @property {string|null} [listenerId] AddPlayerListenerCmd listenerId
         * @property {Array.<string>|null} [pidArr] AddPlayerListenerCmd pidArr
         * @property {number|null} [signal] AddPlayerListenerCmd signal
         */

        /**
         * Constructs a new AddPlayerListenerCmd.
         * @memberof pb
         * @classdesc Represents an AddPlayerListenerCmd.
         * @implements IAddPlayerListenerCmd
         * @constructor
         * @param {pb.IAddPlayerListenerCmd=} [properties] Properties to set
         */
        function AddPlayerListenerCmd(properties) {
            this.pidArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddPlayerListenerCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         */
        AddPlayerListenerCmd.prototype.eventId = "";

        /**
         * AddPlayerListenerCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         */
        AddPlayerListenerCmd.prototype.spaceId = "";

        /**
         * AddPlayerListenerCmd listenerId.
         * @member {string} listenerId
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         */
        AddPlayerListenerCmd.prototype.listenerId = "";

        /**
         * AddPlayerListenerCmd pidArr.
         * @member {Array.<string>} pidArr
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         */
        AddPlayerListenerCmd.prototype.pidArr = $util.emptyArray;

        /**
         * AddPlayerListenerCmd signal.
         * @member {number} signal
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         */
        AddPlayerListenerCmd.prototype.signal = 0;

        /**
         * Creates a new AddPlayerListenerCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {pb.IAddPlayerListenerCmd=} [properties] Properties to set
         * @returns {pb.AddPlayerListenerCmd} AddPlayerListenerCmd instance
         */
        AddPlayerListenerCmd.create = function create(properties) {
            return new AddPlayerListenerCmd(properties);
        };

        /**
         * Encodes the specified AddPlayerListenerCmd message. Does not implicitly {@link pb.AddPlayerListenerCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {pb.IAddPlayerListenerCmd} message AddPlayerListenerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPlayerListenerCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.listenerId != null && Object.hasOwnProperty.call(message, "listenerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.listenerId);
            if (message.pidArr != null && message.pidArr.length)
                for (var i = 0; i < message.pidArr.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.pidArr[i]);
            if (message.signal != null && Object.hasOwnProperty.call(message, "signal"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.signal);
            return writer;
        };

        /**
         * Encodes the specified AddPlayerListenerCmd message, length delimited. Does not implicitly {@link pb.AddPlayerListenerCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {pb.IAddPlayerListenerCmd} message AddPlayerListenerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPlayerListenerCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddPlayerListenerCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddPlayerListenerCmd} AddPlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPlayerListenerCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddPlayerListenerCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.listenerId = reader.string();
                    break;
                case 4:
                    if (!(message.pidArr && message.pidArr.length))
                        message.pidArr = [];
                    message.pidArr.push(reader.string());
                    break;
                case 5:
                    message.signal = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddPlayerListenerCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddPlayerListenerCmd} AddPlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPlayerListenerCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddPlayerListenerCmd message.
         * @function verify
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddPlayerListenerCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.listenerId != null && message.hasOwnProperty("listenerId"))
                if (!$util.isString(message.listenerId))
                    return "listenerId: string expected";
            if (message.pidArr != null && message.hasOwnProperty("pidArr")) {
                if (!Array.isArray(message.pidArr))
                    return "pidArr: array expected";
                for (var i = 0; i < message.pidArr.length; ++i)
                    if (!$util.isString(message.pidArr[i]))
                        return "pidArr: string[] expected";
            }
            if (message.signal != null && message.hasOwnProperty("signal"))
                if (!$util.isInteger(message.signal))
                    return "signal: integer expected";
            return null;
        };

        /**
         * Creates an AddPlayerListenerCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddPlayerListenerCmd} AddPlayerListenerCmd
         */
        AddPlayerListenerCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddPlayerListenerCmd)
                return object;
            var message = new $root.pb.AddPlayerListenerCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.listenerId != null)
                message.listenerId = String(object.listenerId);
            if (object.pidArr) {
                if (!Array.isArray(object.pidArr))
                    throw TypeError(".pb.AddPlayerListenerCmd.pidArr: array expected");
                message.pidArr = [];
                for (var i = 0; i < object.pidArr.length; ++i)
                    message.pidArr[i] = String(object.pidArr[i]);
            }
            if (object.signal != null)
                message.signal = object.signal | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddPlayerListenerCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddPlayerListenerCmd
         * @static
         * @param {pb.AddPlayerListenerCmd} message AddPlayerListenerCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddPlayerListenerCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pidArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.listenerId = "";
                object.signal = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.listenerId != null && message.hasOwnProperty("listenerId"))
                object.listenerId = message.listenerId;
            if (message.pidArr && message.pidArr.length) {
                object.pidArr = [];
                for (var j = 0; j < message.pidArr.length; ++j)
                    object.pidArr[j] = message.pidArr[j];
            }
            if (message.signal != null && message.hasOwnProperty("signal"))
                object.signal = message.signal;
            return object;
        };

        /**
         * Converts this AddPlayerListenerCmd to JSON.
         * @function toJSON
         * @memberof pb.AddPlayerListenerCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddPlayerListenerCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddPlayerListenerCmd;
    })();

    pb.RemovePlayerListenerCmd = (function() {

        /**
         * Properties of a RemovePlayerListenerCmd.
         * @memberof pb
         * @interface IRemovePlayerListenerCmd
         * @property {string|null} [eventId] RemovePlayerListenerCmd eventId
         * @property {string|null} [spaceId] RemovePlayerListenerCmd spaceId
         * @property {string|null} [listenerId] RemovePlayerListenerCmd listenerId
         * @property {Array.<string>|null} [pidArr] RemovePlayerListenerCmd pidArr
         */

        /**
         * Constructs a new RemovePlayerListenerCmd.
         * @memberof pb
         * @classdesc Represents a RemovePlayerListenerCmd.
         * @implements IRemovePlayerListenerCmd
         * @constructor
         * @param {pb.IRemovePlayerListenerCmd=} [properties] Properties to set
         */
        function RemovePlayerListenerCmd(properties) {
            this.pidArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemovePlayerListenerCmd eventId.
         * @member {string} eventId
         * @memberof pb.RemovePlayerListenerCmd
         * @instance
         */
        RemovePlayerListenerCmd.prototype.eventId = "";

        /**
         * RemovePlayerListenerCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.RemovePlayerListenerCmd
         * @instance
         */
        RemovePlayerListenerCmd.prototype.spaceId = "";

        /**
         * RemovePlayerListenerCmd listenerId.
         * @member {string} listenerId
         * @memberof pb.RemovePlayerListenerCmd
         * @instance
         */
        RemovePlayerListenerCmd.prototype.listenerId = "";

        /**
         * RemovePlayerListenerCmd pidArr.
         * @member {Array.<string>} pidArr
         * @memberof pb.RemovePlayerListenerCmd
         * @instance
         */
        RemovePlayerListenerCmd.prototype.pidArr = $util.emptyArray;

        /**
         * Creates a new RemovePlayerListenerCmd instance using the specified properties.
         * @function create
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {pb.IRemovePlayerListenerCmd=} [properties] Properties to set
         * @returns {pb.RemovePlayerListenerCmd} RemovePlayerListenerCmd instance
         */
        RemovePlayerListenerCmd.create = function create(properties) {
            return new RemovePlayerListenerCmd(properties);
        };

        /**
         * Encodes the specified RemovePlayerListenerCmd message. Does not implicitly {@link pb.RemovePlayerListenerCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {pb.IRemovePlayerListenerCmd} message RemovePlayerListenerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemovePlayerListenerCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.listenerId != null && Object.hasOwnProperty.call(message, "listenerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.listenerId);
            if (message.pidArr != null && message.pidArr.length)
                for (var i = 0; i < message.pidArr.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.pidArr[i]);
            return writer;
        };

        /**
         * Encodes the specified RemovePlayerListenerCmd message, length delimited. Does not implicitly {@link pb.RemovePlayerListenerCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {pb.IRemovePlayerListenerCmd} message RemovePlayerListenerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemovePlayerListenerCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemovePlayerListenerCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemovePlayerListenerCmd} RemovePlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemovePlayerListenerCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemovePlayerListenerCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.listenerId = reader.string();
                    break;
                case 4:
                    if (!(message.pidArr && message.pidArr.length))
                        message.pidArr = [];
                    message.pidArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemovePlayerListenerCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemovePlayerListenerCmd} RemovePlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemovePlayerListenerCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemovePlayerListenerCmd message.
         * @function verify
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemovePlayerListenerCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.listenerId != null && message.hasOwnProperty("listenerId"))
                if (!$util.isString(message.listenerId))
                    return "listenerId: string expected";
            if (message.pidArr != null && message.hasOwnProperty("pidArr")) {
                if (!Array.isArray(message.pidArr))
                    return "pidArr: array expected";
                for (var i = 0; i < message.pidArr.length; ++i)
                    if (!$util.isString(message.pidArr[i]))
                        return "pidArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RemovePlayerListenerCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemovePlayerListenerCmd} RemovePlayerListenerCmd
         */
        RemovePlayerListenerCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemovePlayerListenerCmd)
                return object;
            var message = new $root.pb.RemovePlayerListenerCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.listenerId != null)
                message.listenerId = String(object.listenerId);
            if (object.pidArr) {
                if (!Array.isArray(object.pidArr))
                    throw TypeError(".pb.RemovePlayerListenerCmd.pidArr: array expected");
                message.pidArr = [];
                for (var i = 0; i < object.pidArr.length; ++i)
                    message.pidArr[i] = String(object.pidArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RemovePlayerListenerCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemovePlayerListenerCmd
         * @static
         * @param {pb.RemovePlayerListenerCmd} message RemovePlayerListenerCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemovePlayerListenerCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pidArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.listenerId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.listenerId != null && message.hasOwnProperty("listenerId"))
                object.listenerId = message.listenerId;
            if (message.pidArr && message.pidArr.length) {
                object.pidArr = [];
                for (var j = 0; j < message.pidArr.length; ++j)
                    object.pidArr[j] = message.pidArr[j];
            }
            return object;
        };

        /**
         * Converts this RemovePlayerListenerCmd to JSON.
         * @function toJSON
         * @memberof pb.RemovePlayerListenerCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemovePlayerListenerCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemovePlayerListenerCmd;
    })();

    pb.MapPoint = (function() {

        /**
         * Properties of a MapPoint.
         * @memberof pb
         * @interface IMapPoint
         * @property {number|null} [x] MapPoint x
         * @property {number|null} [y] MapPoint y
         */

        /**
         * Constructs a new MapPoint.
         * @memberof pb
         * @classdesc Represents a MapPoint.
         * @implements IMapPoint
         * @constructor
         * @param {pb.IMapPoint=} [properties] Properties to set
         */
        function MapPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MapPoint x.
         * @member {number} x
         * @memberof pb.MapPoint
         * @instance
         */
        MapPoint.prototype.x = 0;

        /**
         * MapPoint y.
         * @member {number} y
         * @memberof pb.MapPoint
         * @instance
         */
        MapPoint.prototype.y = 0;

        /**
         * Creates a new MapPoint instance using the specified properties.
         * @function create
         * @memberof pb.MapPoint
         * @static
         * @param {pb.IMapPoint=} [properties] Properties to set
         * @returns {pb.MapPoint} MapPoint instance
         */
        MapPoint.create = function create(properties) {
            return new MapPoint(properties);
        };

        /**
         * Encodes the specified MapPoint message. Does not implicitly {@link pb.MapPoint.verify|verify} messages.
         * @function encode
         * @memberof pb.MapPoint
         * @static
         * @param {pb.IMapPoint} message MapPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified MapPoint message, length delimited. Does not implicitly {@link pb.MapPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MapPoint
         * @static
         * @param {pb.IMapPoint} message MapPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MapPoint message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MapPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MapPoint} MapPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MapPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MapPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MapPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MapPoint} MapPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapPoint message.
         * @function verify
         * @memberof pb.MapPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a MapPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MapPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MapPoint} MapPoint
         */
        MapPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MapPoint)
                return object;
            var message = new $root.pb.MapPoint();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a MapPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MapPoint
         * @static
         * @param {pb.MapPoint} message MapPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this MapPoint to JSON.
         * @function toJSON
         * @memberof pb.MapPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MapPoint;
    })();

    pb.BirthPoint = (function() {

        /**
         * Properties of a BirthPoint.
         * @memberof pb
         * @interface IBirthPoint
         * @property {number|null} [x] BirthPoint x
         * @property {number|null} [y] BirthPoint y
         * @property {number|null} [weight] BirthPoint weight
         */

        /**
         * Constructs a new BirthPoint.
         * @memberof pb
         * @classdesc Represents a BirthPoint.
         * @implements IBirthPoint
         * @constructor
         * @param {pb.IBirthPoint=} [properties] Properties to set
         */
        function BirthPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BirthPoint x.
         * @member {number} x
         * @memberof pb.BirthPoint
         * @instance
         */
        BirthPoint.prototype.x = 0;

        /**
         * BirthPoint y.
         * @member {number} y
         * @memberof pb.BirthPoint
         * @instance
         */
        BirthPoint.prototype.y = 0;

        /**
         * BirthPoint weight.
         * @member {number} weight
         * @memberof pb.BirthPoint
         * @instance
         */
        BirthPoint.prototype.weight = 0;

        /**
         * Creates a new BirthPoint instance using the specified properties.
         * @function create
         * @memberof pb.BirthPoint
         * @static
         * @param {pb.IBirthPoint=} [properties] Properties to set
         * @returns {pb.BirthPoint} BirthPoint instance
         */
        BirthPoint.create = function create(properties) {
            return new BirthPoint(properties);
        };

        /**
         * Encodes the specified BirthPoint message. Does not implicitly {@link pb.BirthPoint.verify|verify} messages.
         * @function encode
         * @memberof pb.BirthPoint
         * @static
         * @param {pb.IBirthPoint} message BirthPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BirthPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.weight);
            return writer;
        };

        /**
         * Encodes the specified BirthPoint message, length delimited. Does not implicitly {@link pb.BirthPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.BirthPoint
         * @static
         * @param {pb.IBirthPoint} message BirthPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BirthPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BirthPoint message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BirthPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.BirthPoint} BirthPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BirthPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.BirthPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.weight = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BirthPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.BirthPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.BirthPoint} BirthPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BirthPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BirthPoint message.
         * @function verify
         * @memberof pb.BirthPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BirthPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            return null;
        };

        /**
         * Creates a BirthPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.BirthPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.BirthPoint} BirthPoint
         */
        BirthPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.BirthPoint)
                return object;
            var message = new $root.pb.BirthPoint();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.weight != null)
                message.weight = object.weight | 0;
            return message;
        };

        /**
         * Creates a plain object from a BirthPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.BirthPoint
         * @static
         * @param {pb.BirthPoint} message BirthPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BirthPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.weight = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            return object;
        };

        /**
         * Converts this BirthPoint to JSON.
         * @function toJSON
         * @memberof pb.BirthPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BirthPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BirthPoint;
    })();

    pb.PrivateSpace = (function() {

        /**
         * Properties of a PrivateSpace.
         * @memberof pb
         * @interface IPrivateSpace
         * @property {number|null} [privateOrder] PrivateSpace privateOrder
         * @property {Array.<number>|null} [gridArr] PrivateSpace gridArr
         */

        /**
         * Constructs a new PrivateSpace.
         * @memberof pb
         * @classdesc Represents a PrivateSpace.
         * @implements IPrivateSpace
         * @constructor
         * @param {pb.IPrivateSpace=} [properties] Properties to set
         */
        function PrivateSpace(properties) {
            this.gridArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateSpace privateOrder.
         * @member {number} privateOrder
         * @memberof pb.PrivateSpace
         * @instance
         */
        PrivateSpace.prototype.privateOrder = 0;

        /**
         * PrivateSpace gridArr.
         * @member {Array.<number>} gridArr
         * @memberof pb.PrivateSpace
         * @instance
         */
        PrivateSpace.prototype.gridArr = $util.emptyArray;

        /**
         * Creates a new PrivateSpace instance using the specified properties.
         * @function create
         * @memberof pb.PrivateSpace
         * @static
         * @param {pb.IPrivateSpace=} [properties] Properties to set
         * @returns {pb.PrivateSpace} PrivateSpace instance
         */
        PrivateSpace.create = function create(properties) {
            return new PrivateSpace(properties);
        };

        /**
         * Encodes the specified PrivateSpace message. Does not implicitly {@link pb.PrivateSpace.verify|verify} messages.
         * @function encode
         * @memberof pb.PrivateSpace
         * @static
         * @param {pb.IPrivateSpace} message PrivateSpace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateSpace.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateOrder != null && Object.hasOwnProperty.call(message, "privateOrder"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.privateOrder);
            if (message.gridArr != null && message.gridArr.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.gridArr.length; ++i)
                    writer.int32(message.gridArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified PrivateSpace message, length delimited. Does not implicitly {@link pb.PrivateSpace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PrivateSpace
         * @static
         * @param {pb.IPrivateSpace} message PrivateSpace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateSpace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateSpace message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PrivateSpace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PrivateSpace} PrivateSpace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateSpace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PrivateSpace();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateOrder = reader.int32();
                    break;
                case 2:
                    if (!(message.gridArr && message.gridArr.length))
                        message.gridArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.gridArr.push(reader.int32());
                    } else
                        message.gridArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateSpace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PrivateSpace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PrivateSpace} PrivateSpace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateSpace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateSpace message.
         * @function verify
         * @memberof pb.PrivateSpace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateSpace.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.privateOrder != null && message.hasOwnProperty("privateOrder"))
                if (!$util.isInteger(message.privateOrder))
                    return "privateOrder: integer expected";
            if (message.gridArr != null && message.hasOwnProperty("gridArr")) {
                if (!Array.isArray(message.gridArr))
                    return "gridArr: array expected";
                for (var i = 0; i < message.gridArr.length; ++i)
                    if (!$util.isInteger(message.gridArr[i]))
                        return "gridArr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PrivateSpace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PrivateSpace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PrivateSpace} PrivateSpace
         */
        PrivateSpace.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PrivateSpace)
                return object;
            var message = new $root.pb.PrivateSpace();
            if (object.privateOrder != null)
                message.privateOrder = object.privateOrder | 0;
            if (object.gridArr) {
                if (!Array.isArray(object.gridArr))
                    throw TypeError(".pb.PrivateSpace.gridArr: array expected");
                message.gridArr = [];
                for (var i = 0; i < object.gridArr.length; ++i)
                    message.gridArr[i] = object.gridArr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PrivateSpace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PrivateSpace
         * @static
         * @param {pb.PrivateSpace} message PrivateSpace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateSpace.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.gridArr = [];
            if (options.defaults)
                object.privateOrder = 0;
            if (message.privateOrder != null && message.hasOwnProperty("privateOrder"))
                object.privateOrder = message.privateOrder;
            if (message.gridArr && message.gridArr.length) {
                object.gridArr = [];
                for (var j = 0; j < message.gridArr.length; ++j)
                    object.gridArr[j] = message.gridArr[j];
            }
            return object;
        };

        /**
         * Converts this PrivateSpace to JSON.
         * @function toJSON
         * @memberof pb.PrivateSpace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivateSpace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateSpace;
    })();

    pb.LandMark = (function() {

        /**
         * Properties of a LandMark.
         * @memberof pb
         * @interface ILandMark
         * @property {string|null} [id] LandMark id
         * @property {string|null} [name] LandMark name
         * @property {number|null} [x] LandMark x
         * @property {number|null} [y] LandMark y
         */

        /**
         * Constructs a new LandMark.
         * @memberof pb
         * @classdesc Represents a LandMark.
         * @implements ILandMark
         * @constructor
         * @param {pb.ILandMark=} [properties] Properties to set
         */
        function LandMark(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LandMark id.
         * @member {string} id
         * @memberof pb.LandMark
         * @instance
         */
        LandMark.prototype.id = "";

        /**
         * LandMark name.
         * @member {string} name
         * @memberof pb.LandMark
         * @instance
         */
        LandMark.prototype.name = "";

        /**
         * LandMark x.
         * @member {number} x
         * @memberof pb.LandMark
         * @instance
         */
        LandMark.prototype.x = 0;

        /**
         * LandMark y.
         * @member {number} y
         * @memberof pb.LandMark
         * @instance
         */
        LandMark.prototype.y = 0;

        /**
         * Creates a new LandMark instance using the specified properties.
         * @function create
         * @memberof pb.LandMark
         * @static
         * @param {pb.ILandMark=} [properties] Properties to set
         * @returns {pb.LandMark} LandMark instance
         */
        LandMark.create = function create(properties) {
            return new LandMark(properties);
        };

        /**
         * Encodes the specified LandMark message. Does not implicitly {@link pb.LandMark.verify|verify} messages.
         * @function encode
         * @memberof pb.LandMark
         * @static
         * @param {pb.ILandMark} message LandMark message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandMark.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified LandMark message, length delimited. Does not implicitly {@link pb.LandMark.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LandMark
         * @static
         * @param {pb.ILandMark} message LandMark message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandMark.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LandMark message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LandMark
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LandMark} LandMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandMark.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LandMark();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.x = reader.int32();
                    break;
                case 4:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LandMark message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LandMark
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LandMark} LandMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandMark.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LandMark message.
         * @function verify
         * @memberof pb.LandMark
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LandMark.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a LandMark message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LandMark
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LandMark} LandMark
         */
        LandMark.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LandMark)
                return object;
            var message = new $root.pb.LandMark();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a LandMark message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LandMark
         * @static
         * @param {pb.LandMark} message LandMark
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LandMark.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.x = 0;
                object.y = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this LandMark to JSON.
         * @function toJSON
         * @memberof pb.LandMark
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LandMark.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandMark;
    })();

    pb.PortalTarget = (function() {

        /**
         * Properties of a PortalTarget.
         * @memberof pb
         * @interface IPortalTarget
         * @property {string|null} [eventId] PortalTarget eventId
         * @property {string|null} [spaceId] PortalTarget spaceId
         * @property {number|null} [targetType] PortalTarget targetType
         * @property {string|null} [anchorId] PortalTarget anchorId
         * @property {string|null} [anchorName] PortalTarget anchorName
         */

        /**
         * Constructs a new PortalTarget.
         * @memberof pb
         * @classdesc Represents a PortalTarget.
         * @implements IPortalTarget
         * @constructor
         * @param {pb.IPortalTarget=} [properties] Properties to set
         */
        function PortalTarget(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PortalTarget eventId.
         * @member {string} eventId
         * @memberof pb.PortalTarget
         * @instance
         */
        PortalTarget.prototype.eventId = "";

        /**
         * PortalTarget spaceId.
         * @member {string} spaceId
         * @memberof pb.PortalTarget
         * @instance
         */
        PortalTarget.prototype.spaceId = "";

        /**
         * PortalTarget targetType.
         * @member {number} targetType
         * @memberof pb.PortalTarget
         * @instance
         */
        PortalTarget.prototype.targetType = 0;

        /**
         * PortalTarget anchorId.
         * @member {string} anchorId
         * @memberof pb.PortalTarget
         * @instance
         */
        PortalTarget.prototype.anchorId = "";

        /**
         * PortalTarget anchorName.
         * @member {string} anchorName
         * @memberof pb.PortalTarget
         * @instance
         */
        PortalTarget.prototype.anchorName = "";

        /**
         * Creates a new PortalTarget instance using the specified properties.
         * @function create
         * @memberof pb.PortalTarget
         * @static
         * @param {pb.IPortalTarget=} [properties] Properties to set
         * @returns {pb.PortalTarget} PortalTarget instance
         */
        PortalTarget.create = function create(properties) {
            return new PortalTarget(properties);
        };

        /**
         * Encodes the specified PortalTarget message. Does not implicitly {@link pb.PortalTarget.verify|verify} messages.
         * @function encode
         * @memberof pb.PortalTarget
         * @static
         * @param {pb.IPortalTarget} message PortalTarget message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortalTarget.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.targetType != null && Object.hasOwnProperty.call(message, "targetType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.targetType);
            if (message.anchorId != null && Object.hasOwnProperty.call(message, "anchorId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.anchorId);
            if (message.anchorName != null && Object.hasOwnProperty.call(message, "anchorName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.anchorName);
            return writer;
        };

        /**
         * Encodes the specified PortalTarget message, length delimited. Does not implicitly {@link pb.PortalTarget.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PortalTarget
         * @static
         * @param {pb.IPortalTarget} message PortalTarget message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortalTarget.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PortalTarget message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PortalTarget
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PortalTarget} PortalTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortalTarget.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PortalTarget();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.targetType = reader.int32();
                    break;
                case 4:
                    message.anchorId = reader.string();
                    break;
                case 5:
                    message.anchorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PortalTarget message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PortalTarget
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PortalTarget} PortalTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortalTarget.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PortalTarget message.
         * @function verify
         * @memberof pb.PortalTarget
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PortalTarget.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.targetType != null && message.hasOwnProperty("targetType"))
                if (!$util.isInteger(message.targetType))
                    return "targetType: integer expected";
            if (message.anchorId != null && message.hasOwnProperty("anchorId"))
                if (!$util.isString(message.anchorId))
                    return "anchorId: string expected";
            if (message.anchorName != null && message.hasOwnProperty("anchorName"))
                if (!$util.isString(message.anchorName))
                    return "anchorName: string expected";
            return null;
        };

        /**
         * Creates a PortalTarget message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PortalTarget
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PortalTarget} PortalTarget
         */
        PortalTarget.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PortalTarget)
                return object;
            var message = new $root.pb.PortalTarget();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.targetType != null)
                message.targetType = object.targetType | 0;
            if (object.anchorId != null)
                message.anchorId = String(object.anchorId);
            if (object.anchorName != null)
                message.anchorName = String(object.anchorName);
            return message;
        };

        /**
         * Creates a plain object from a PortalTarget message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PortalTarget
         * @static
         * @param {pb.PortalTarget} message PortalTarget
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PortalTarget.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.targetType = 0;
                object.anchorId = "";
                object.anchorName = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.targetType != null && message.hasOwnProperty("targetType"))
                object.targetType = message.targetType;
            if (message.anchorId != null && message.hasOwnProperty("anchorId"))
                object.anchorId = message.anchorId;
            if (message.anchorName != null && message.hasOwnProperty("anchorName"))
                object.anchorName = message.anchorName;
            return object;
        };

        /**
         * Converts this PortalTarget to JSON.
         * @function toJSON
         * @memberof pb.PortalTarget
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PortalTarget.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PortalTarget;
    })();

    pb.Portal = (function() {

        /**
         * Properties of a Portal.
         * @memberof pb
         * @interface IPortal
         * @property {Array.<pb.IMapPoint>|null} [locations] Portal locations
         * @property {pb.IPortalTarget|null} [portTarget] Portal portTarget
         * @property {boolean|null} [skipConfirmation] Portal skipConfirmation
         */

        /**
         * Constructs a new Portal.
         * @memberof pb
         * @classdesc Represents a Portal.
         * @implements IPortal
         * @constructor
         * @param {pb.IPortal=} [properties] Properties to set
         */
        function Portal(properties) {
            this.locations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Portal locations.
         * @member {Array.<pb.IMapPoint>} locations
         * @memberof pb.Portal
         * @instance
         */
        Portal.prototype.locations = $util.emptyArray;

        /**
         * Portal portTarget.
         * @member {pb.IPortalTarget|null|undefined} portTarget
         * @memberof pb.Portal
         * @instance
         */
        Portal.prototype.portTarget = null;

        /**
         * Portal skipConfirmation.
         * @member {boolean} skipConfirmation
         * @memberof pb.Portal
         * @instance
         */
        Portal.prototype.skipConfirmation = false;

        /**
         * Creates a new Portal instance using the specified properties.
         * @function create
         * @memberof pb.Portal
         * @static
         * @param {pb.IPortal=} [properties] Properties to set
         * @returns {pb.Portal} Portal instance
         */
        Portal.create = function create(properties) {
            return new Portal(properties);
        };

        /**
         * Encodes the specified Portal message. Does not implicitly {@link pb.Portal.verify|verify} messages.
         * @function encode
         * @memberof pb.Portal
         * @static
         * @param {pb.IPortal} message Portal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Portal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locations != null && message.locations.length)
                for (var i = 0; i < message.locations.length; ++i)
                    $root.pb.MapPoint.encode(message.locations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.portTarget != null && Object.hasOwnProperty.call(message, "portTarget"))
                $root.pb.PortalTarget.encode(message.portTarget, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.skipConfirmation != null && Object.hasOwnProperty.call(message, "skipConfirmation"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.skipConfirmation);
            return writer;
        };

        /**
         * Encodes the specified Portal message, length delimited. Does not implicitly {@link pb.Portal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Portal
         * @static
         * @param {pb.IPortal} message Portal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Portal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Portal message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Portal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Portal} Portal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Portal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Portal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.locations && message.locations.length))
                        message.locations = [];
                    message.locations.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.portTarget = $root.pb.PortalTarget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.skipConfirmation = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Portal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Portal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Portal} Portal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Portal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Portal message.
         * @function verify
         * @memberof pb.Portal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Portal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locations != null && message.hasOwnProperty("locations")) {
                if (!Array.isArray(message.locations))
                    return "locations: array expected";
                for (var i = 0; i < message.locations.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.locations[i]);
                    if (error)
                        return "locations." + error;
                }
            }
            if (message.portTarget != null && message.hasOwnProperty("portTarget")) {
                var error = $root.pb.PortalTarget.verify(message.portTarget);
                if (error)
                    return "portTarget." + error;
            }
            if (message.skipConfirmation != null && message.hasOwnProperty("skipConfirmation"))
                if (typeof message.skipConfirmation !== "boolean")
                    return "skipConfirmation: boolean expected";
            return null;
        };

        /**
         * Creates a Portal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Portal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Portal} Portal
         */
        Portal.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Portal)
                return object;
            var message = new $root.pb.Portal();
            if (object.locations) {
                if (!Array.isArray(object.locations))
                    throw TypeError(".pb.Portal.locations: array expected");
                message.locations = [];
                for (var i = 0; i < object.locations.length; ++i) {
                    if (typeof object.locations[i] !== "object")
                        throw TypeError(".pb.Portal.locations: object expected");
                    message.locations[i] = $root.pb.MapPoint.fromObject(object.locations[i]);
                }
            }
            if (object.portTarget != null) {
                if (typeof object.portTarget !== "object")
                    throw TypeError(".pb.Portal.portTarget: object expected");
                message.portTarget = $root.pb.PortalTarget.fromObject(object.portTarget);
            }
            if (object.skipConfirmation != null)
                message.skipConfirmation = Boolean(object.skipConfirmation);
            return message;
        };

        /**
         * Creates a plain object from a Portal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Portal
         * @static
         * @param {pb.Portal} message Portal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Portal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.locations = [];
            if (options.defaults) {
                object.portTarget = null;
                object.skipConfirmation = false;
            }
            if (message.locations && message.locations.length) {
                object.locations = [];
                for (var j = 0; j < message.locations.length; ++j)
                    object.locations[j] = $root.pb.MapPoint.toObject(message.locations[j], options);
            }
            if (message.portTarget != null && message.hasOwnProperty("portTarget"))
                object.portTarget = $root.pb.PortalTarget.toObject(message.portTarget, options);
            if (message.skipConfirmation != null && message.hasOwnProperty("skipConfirmation"))
                object.skipConfirmation = message.skipConfirmation;
            return object;
        };

        /**
         * Converts this Portal to JSON.
         * @function toJSON
         * @memberof pb.Portal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Portal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Portal;
    })();

    pb.GridMaterial = (function() {

        /**
         * Properties of a GridMaterial.
         * @memberof pb
         * @interface IGridMaterial
         * @property {number|null} [grid] GridMaterial grid
         * @property {pb.MapMaterialType|null} [materialType] GridMaterial materialType
         * @property {string|null} [content] GridMaterial content
         */

        /**
         * Constructs a new GridMaterial.
         * @memberof pb
         * @classdesc Represents a GridMaterial.
         * @implements IGridMaterial
         * @constructor
         * @param {pb.IGridMaterial=} [properties] Properties to set
         */
        function GridMaterial(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GridMaterial grid.
         * @member {number} grid
         * @memberof pb.GridMaterial
         * @instance
         */
        GridMaterial.prototype.grid = 0;

        /**
         * GridMaterial materialType.
         * @member {pb.MapMaterialType} materialType
         * @memberof pb.GridMaterial
         * @instance
         */
        GridMaterial.prototype.materialType = 0;

        /**
         * GridMaterial content.
         * @member {string} content
         * @memberof pb.GridMaterial
         * @instance
         */
        GridMaterial.prototype.content = "";

        /**
         * Creates a new GridMaterial instance using the specified properties.
         * @function create
         * @memberof pb.GridMaterial
         * @static
         * @param {pb.IGridMaterial=} [properties] Properties to set
         * @returns {pb.GridMaterial} GridMaterial instance
         */
        GridMaterial.create = function create(properties) {
            return new GridMaterial(properties);
        };

        /**
         * Encodes the specified GridMaterial message. Does not implicitly {@link pb.GridMaterial.verify|verify} messages.
         * @function encode
         * @memberof pb.GridMaterial
         * @static
         * @param {pb.IGridMaterial} message GridMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GridMaterial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid != null && Object.hasOwnProperty.call(message, "grid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.grid);
            if (message.materialType != null && Object.hasOwnProperty.call(message, "materialType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.materialType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified GridMaterial message, length delimited. Does not implicitly {@link pb.GridMaterial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GridMaterial
         * @static
         * @param {pb.IGridMaterial} message GridMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GridMaterial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GridMaterial message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GridMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GridMaterial} GridMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GridMaterial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GridMaterial();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.grid = reader.int32();
                    break;
                case 2:
                    message.materialType = reader.int32();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GridMaterial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GridMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GridMaterial} GridMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GridMaterial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GridMaterial message.
         * @function verify
         * @memberof pb.GridMaterial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GridMaterial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.grid != null && message.hasOwnProperty("grid"))
                if (!$util.isInteger(message.grid))
                    return "grid: integer expected";
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                switch (message.materialType) {
                default:
                    return "materialType: enum value expected";
                case 0:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a GridMaterial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GridMaterial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GridMaterial} GridMaterial
         */
        GridMaterial.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GridMaterial)
                return object;
            var message = new $root.pb.GridMaterial();
            if (object.grid != null)
                message.grid = object.grid | 0;
            switch (object.materialType) {
            case "Chartlet":
            case 0:
                message.materialType = 0;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a GridMaterial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GridMaterial
         * @static
         * @param {pb.GridMaterial} message GridMaterial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GridMaterial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.grid = 0;
                object.materialType = options.enums === String ? "Chartlet" : 0;
                object.content = "";
            }
            if (message.grid != null && message.hasOwnProperty("grid"))
                object.grid = message.grid;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = options.enums === String ? $root.pb.MapMaterialType[message.materialType] : message.materialType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this GridMaterial to JSON.
         * @function toJSON
         * @memberof pb.GridMaterial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GridMaterial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GridMaterial;
    })();

    pb.SpaceMapInfo = (function() {

        /**
         * Properties of a SpaceMapInfo.
         * @memberof pb
         * @interface ISpaceMapInfo
         * @property {Array.<pb.IMapPoint>|null} [addBirthPointArr] SpaceMapInfo addBirthPointArr
         * @property {Array.<pb.IMapPoint>|null} [removeBirthPointArr] SpaceMapInfo removeBirthPointArr
         * @property {Array.<number>|null} [addObstacleArr] SpaceMapInfo addObstacleArr
         * @property {Array.<number>|null} [removeObstacleArr] SpaceMapInfo removeObstacleArr
         * @property {Array.<pb.ILandMark>|null} [addLandMarkArr] SpaceMapInfo addLandMarkArr
         * @property {Array.<string>|null} [removeLandMarkArr] SpaceMapInfo removeLandMarkArr
         * @property {Array.<pb.IPortal>|null} [addPortalArr] SpaceMapInfo addPortalArr
         * @property {Array.<pb.IMapPoint>|null} [removePortalArr] SpaceMapInfo removePortalArr
         * @property {Array.<pb.IGridMaterial>|null} [gridMaterialArr] SpaceMapInfo gridMaterialArr
         */

        /**
         * Constructs a new SpaceMapInfo.
         * @memberof pb
         * @classdesc Represents a SpaceMapInfo.
         * @implements ISpaceMapInfo
         * @constructor
         * @param {pb.ISpaceMapInfo=} [properties] Properties to set
         */
        function SpaceMapInfo(properties) {
            this.addBirthPointArr = [];
            this.removeBirthPointArr = [];
            this.addObstacleArr = [];
            this.removeObstacleArr = [];
            this.addLandMarkArr = [];
            this.removeLandMarkArr = [];
            this.addPortalArr = [];
            this.removePortalArr = [];
            this.gridMaterialArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpaceMapInfo addBirthPointArr.
         * @member {Array.<pb.IMapPoint>} addBirthPointArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.addBirthPointArr = $util.emptyArray;

        /**
         * SpaceMapInfo removeBirthPointArr.
         * @member {Array.<pb.IMapPoint>} removeBirthPointArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.removeBirthPointArr = $util.emptyArray;

        /**
         * SpaceMapInfo addObstacleArr.
         * @member {Array.<number>} addObstacleArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.addObstacleArr = $util.emptyArray;

        /**
         * SpaceMapInfo removeObstacleArr.
         * @member {Array.<number>} removeObstacleArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.removeObstacleArr = $util.emptyArray;

        /**
         * SpaceMapInfo addLandMarkArr.
         * @member {Array.<pb.ILandMark>} addLandMarkArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.addLandMarkArr = $util.emptyArray;

        /**
         * SpaceMapInfo removeLandMarkArr.
         * @member {Array.<string>} removeLandMarkArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.removeLandMarkArr = $util.emptyArray;

        /**
         * SpaceMapInfo addPortalArr.
         * @member {Array.<pb.IPortal>} addPortalArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.addPortalArr = $util.emptyArray;

        /**
         * SpaceMapInfo removePortalArr.
         * @member {Array.<pb.IMapPoint>} removePortalArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.removePortalArr = $util.emptyArray;

        /**
         * SpaceMapInfo gridMaterialArr.
         * @member {Array.<pb.IGridMaterial>} gridMaterialArr
         * @memberof pb.SpaceMapInfo
         * @instance
         */
        SpaceMapInfo.prototype.gridMaterialArr = $util.emptyArray;

        /**
         * Creates a new SpaceMapInfo instance using the specified properties.
         * @function create
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {pb.ISpaceMapInfo=} [properties] Properties to set
         * @returns {pb.SpaceMapInfo} SpaceMapInfo instance
         */
        SpaceMapInfo.create = function create(properties) {
            return new SpaceMapInfo(properties);
        };

        /**
         * Encodes the specified SpaceMapInfo message. Does not implicitly {@link pb.SpaceMapInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {pb.ISpaceMapInfo} message SpaceMapInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpaceMapInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addBirthPointArr != null && message.addBirthPointArr.length)
                for (var i = 0; i < message.addBirthPointArr.length; ++i)
                    $root.pb.MapPoint.encode(message.addBirthPointArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.removeBirthPointArr != null && message.removeBirthPointArr.length)
                for (var i = 0; i < message.removeBirthPointArr.length; ++i)
                    $root.pb.MapPoint.encode(message.removeBirthPointArr[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.addObstacleArr != null && message.addObstacleArr.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.addObstacleArr.length; ++i)
                    writer.int32(message.addObstacleArr[i]);
                writer.ldelim();
            }
            if (message.removeObstacleArr != null && message.removeObstacleArr.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.removeObstacleArr.length; ++i)
                    writer.int32(message.removeObstacleArr[i]);
                writer.ldelim();
            }
            if (message.addLandMarkArr != null && message.addLandMarkArr.length)
                for (var i = 0; i < message.addLandMarkArr.length; ++i)
                    $root.pb.LandMark.encode(message.addLandMarkArr[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.removeLandMarkArr != null && message.removeLandMarkArr.length)
                for (var i = 0; i < message.removeLandMarkArr.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.removeLandMarkArr[i]);
            if (message.addPortalArr != null && message.addPortalArr.length)
                for (var i = 0; i < message.addPortalArr.length; ++i)
                    $root.pb.Portal.encode(message.addPortalArr[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.removePortalArr != null && message.removePortalArr.length)
                for (var i = 0; i < message.removePortalArr.length; ++i)
                    $root.pb.MapPoint.encode(message.removePortalArr[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.gridMaterialArr != null && message.gridMaterialArr.length)
                for (var i = 0; i < message.gridMaterialArr.length; ++i)
                    $root.pb.GridMaterial.encode(message.gridMaterialArr[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpaceMapInfo message, length delimited. Does not implicitly {@link pb.SpaceMapInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {pb.ISpaceMapInfo} message SpaceMapInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpaceMapInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpaceMapInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SpaceMapInfo} SpaceMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpaceMapInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SpaceMapInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addBirthPointArr && message.addBirthPointArr.length))
                        message.addBirthPointArr = [];
                    message.addBirthPointArr.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.removeBirthPointArr && message.removeBirthPointArr.length))
                        message.removeBirthPointArr = [];
                    message.removeBirthPointArr.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.addObstacleArr && message.addObstacleArr.length))
                        message.addObstacleArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.addObstacleArr.push(reader.int32());
                    } else
                        message.addObstacleArr.push(reader.int32());
                    break;
                case 4:
                    if (!(message.removeObstacleArr && message.removeObstacleArr.length))
                        message.removeObstacleArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.removeObstacleArr.push(reader.int32());
                    } else
                        message.removeObstacleArr.push(reader.int32());
                    break;
                case 5:
                    if (!(message.addLandMarkArr && message.addLandMarkArr.length))
                        message.addLandMarkArr = [];
                    message.addLandMarkArr.push($root.pb.LandMark.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.removeLandMarkArr && message.removeLandMarkArr.length))
                        message.removeLandMarkArr = [];
                    message.removeLandMarkArr.push(reader.string());
                    break;
                case 7:
                    if (!(message.addPortalArr && message.addPortalArr.length))
                        message.addPortalArr = [];
                    message.addPortalArr.push($root.pb.Portal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.removePortalArr && message.removePortalArr.length))
                        message.removePortalArr = [];
                    message.removePortalArr.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.gridMaterialArr && message.gridMaterialArr.length))
                        message.gridMaterialArr = [];
                    message.gridMaterialArr.push($root.pb.GridMaterial.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpaceMapInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SpaceMapInfo} SpaceMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpaceMapInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpaceMapInfo message.
         * @function verify
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpaceMapInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addBirthPointArr != null && message.hasOwnProperty("addBirthPointArr")) {
                if (!Array.isArray(message.addBirthPointArr))
                    return "addBirthPointArr: array expected";
                for (var i = 0; i < message.addBirthPointArr.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.addBirthPointArr[i]);
                    if (error)
                        return "addBirthPointArr." + error;
                }
            }
            if (message.removeBirthPointArr != null && message.hasOwnProperty("removeBirthPointArr")) {
                if (!Array.isArray(message.removeBirthPointArr))
                    return "removeBirthPointArr: array expected";
                for (var i = 0; i < message.removeBirthPointArr.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.removeBirthPointArr[i]);
                    if (error)
                        return "removeBirthPointArr." + error;
                }
            }
            if (message.addObstacleArr != null && message.hasOwnProperty("addObstacleArr")) {
                if (!Array.isArray(message.addObstacleArr))
                    return "addObstacleArr: array expected";
                for (var i = 0; i < message.addObstacleArr.length; ++i)
                    if (!$util.isInteger(message.addObstacleArr[i]))
                        return "addObstacleArr: integer[] expected";
            }
            if (message.removeObstacleArr != null && message.hasOwnProperty("removeObstacleArr")) {
                if (!Array.isArray(message.removeObstacleArr))
                    return "removeObstacleArr: array expected";
                for (var i = 0; i < message.removeObstacleArr.length; ++i)
                    if (!$util.isInteger(message.removeObstacleArr[i]))
                        return "removeObstacleArr: integer[] expected";
            }
            if (message.addLandMarkArr != null && message.hasOwnProperty("addLandMarkArr")) {
                if (!Array.isArray(message.addLandMarkArr))
                    return "addLandMarkArr: array expected";
                for (var i = 0; i < message.addLandMarkArr.length; ++i) {
                    var error = $root.pb.LandMark.verify(message.addLandMarkArr[i]);
                    if (error)
                        return "addLandMarkArr." + error;
                }
            }
            if (message.removeLandMarkArr != null && message.hasOwnProperty("removeLandMarkArr")) {
                if (!Array.isArray(message.removeLandMarkArr))
                    return "removeLandMarkArr: array expected";
                for (var i = 0; i < message.removeLandMarkArr.length; ++i)
                    if (!$util.isString(message.removeLandMarkArr[i]))
                        return "removeLandMarkArr: string[] expected";
            }
            if (message.addPortalArr != null && message.hasOwnProperty("addPortalArr")) {
                if (!Array.isArray(message.addPortalArr))
                    return "addPortalArr: array expected";
                for (var i = 0; i < message.addPortalArr.length; ++i) {
                    var error = $root.pb.Portal.verify(message.addPortalArr[i]);
                    if (error)
                        return "addPortalArr." + error;
                }
            }
            if (message.removePortalArr != null && message.hasOwnProperty("removePortalArr")) {
                if (!Array.isArray(message.removePortalArr))
                    return "removePortalArr: array expected";
                for (var i = 0; i < message.removePortalArr.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.removePortalArr[i]);
                    if (error)
                        return "removePortalArr." + error;
                }
            }
            if (message.gridMaterialArr != null && message.hasOwnProperty("gridMaterialArr")) {
                if (!Array.isArray(message.gridMaterialArr))
                    return "gridMaterialArr: array expected";
                for (var i = 0; i < message.gridMaterialArr.length; ++i) {
                    var error = $root.pb.GridMaterial.verify(message.gridMaterialArr[i]);
                    if (error)
                        return "gridMaterialArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SpaceMapInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SpaceMapInfo} SpaceMapInfo
         */
        SpaceMapInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SpaceMapInfo)
                return object;
            var message = new $root.pb.SpaceMapInfo();
            if (object.addBirthPointArr) {
                if (!Array.isArray(object.addBirthPointArr))
                    throw TypeError(".pb.SpaceMapInfo.addBirthPointArr: array expected");
                message.addBirthPointArr = [];
                for (var i = 0; i < object.addBirthPointArr.length; ++i) {
                    if (typeof object.addBirthPointArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.addBirthPointArr: object expected");
                    message.addBirthPointArr[i] = $root.pb.MapPoint.fromObject(object.addBirthPointArr[i]);
                }
            }
            if (object.removeBirthPointArr) {
                if (!Array.isArray(object.removeBirthPointArr))
                    throw TypeError(".pb.SpaceMapInfo.removeBirthPointArr: array expected");
                message.removeBirthPointArr = [];
                for (var i = 0; i < object.removeBirthPointArr.length; ++i) {
                    if (typeof object.removeBirthPointArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.removeBirthPointArr: object expected");
                    message.removeBirthPointArr[i] = $root.pb.MapPoint.fromObject(object.removeBirthPointArr[i]);
                }
            }
            if (object.addObstacleArr) {
                if (!Array.isArray(object.addObstacleArr))
                    throw TypeError(".pb.SpaceMapInfo.addObstacleArr: array expected");
                message.addObstacleArr = [];
                for (var i = 0; i < object.addObstacleArr.length; ++i)
                    message.addObstacleArr[i] = object.addObstacleArr[i] | 0;
            }
            if (object.removeObstacleArr) {
                if (!Array.isArray(object.removeObstacleArr))
                    throw TypeError(".pb.SpaceMapInfo.removeObstacleArr: array expected");
                message.removeObstacleArr = [];
                for (var i = 0; i < object.removeObstacleArr.length; ++i)
                    message.removeObstacleArr[i] = object.removeObstacleArr[i] | 0;
            }
            if (object.addLandMarkArr) {
                if (!Array.isArray(object.addLandMarkArr))
                    throw TypeError(".pb.SpaceMapInfo.addLandMarkArr: array expected");
                message.addLandMarkArr = [];
                for (var i = 0; i < object.addLandMarkArr.length; ++i) {
                    if (typeof object.addLandMarkArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.addLandMarkArr: object expected");
                    message.addLandMarkArr[i] = $root.pb.LandMark.fromObject(object.addLandMarkArr[i]);
                }
            }
            if (object.removeLandMarkArr) {
                if (!Array.isArray(object.removeLandMarkArr))
                    throw TypeError(".pb.SpaceMapInfo.removeLandMarkArr: array expected");
                message.removeLandMarkArr = [];
                for (var i = 0; i < object.removeLandMarkArr.length; ++i)
                    message.removeLandMarkArr[i] = String(object.removeLandMarkArr[i]);
            }
            if (object.addPortalArr) {
                if (!Array.isArray(object.addPortalArr))
                    throw TypeError(".pb.SpaceMapInfo.addPortalArr: array expected");
                message.addPortalArr = [];
                for (var i = 0; i < object.addPortalArr.length; ++i) {
                    if (typeof object.addPortalArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.addPortalArr: object expected");
                    message.addPortalArr[i] = $root.pb.Portal.fromObject(object.addPortalArr[i]);
                }
            }
            if (object.removePortalArr) {
                if (!Array.isArray(object.removePortalArr))
                    throw TypeError(".pb.SpaceMapInfo.removePortalArr: array expected");
                message.removePortalArr = [];
                for (var i = 0; i < object.removePortalArr.length; ++i) {
                    if (typeof object.removePortalArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.removePortalArr: object expected");
                    message.removePortalArr[i] = $root.pb.MapPoint.fromObject(object.removePortalArr[i]);
                }
            }
            if (object.gridMaterialArr) {
                if (!Array.isArray(object.gridMaterialArr))
                    throw TypeError(".pb.SpaceMapInfo.gridMaterialArr: array expected");
                message.gridMaterialArr = [];
                for (var i = 0; i < object.gridMaterialArr.length; ++i) {
                    if (typeof object.gridMaterialArr[i] !== "object")
                        throw TypeError(".pb.SpaceMapInfo.gridMaterialArr: object expected");
                    message.gridMaterialArr[i] = $root.pb.GridMaterial.fromObject(object.gridMaterialArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SpaceMapInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SpaceMapInfo
         * @static
         * @param {pb.SpaceMapInfo} message SpaceMapInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpaceMapInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.addBirthPointArr = [];
                object.removeBirthPointArr = [];
                object.addObstacleArr = [];
                object.removeObstacleArr = [];
                object.addLandMarkArr = [];
                object.removeLandMarkArr = [];
                object.addPortalArr = [];
                object.removePortalArr = [];
                object.gridMaterialArr = [];
            }
            if (message.addBirthPointArr && message.addBirthPointArr.length) {
                object.addBirthPointArr = [];
                for (var j = 0; j < message.addBirthPointArr.length; ++j)
                    object.addBirthPointArr[j] = $root.pb.MapPoint.toObject(message.addBirthPointArr[j], options);
            }
            if (message.removeBirthPointArr && message.removeBirthPointArr.length) {
                object.removeBirthPointArr = [];
                for (var j = 0; j < message.removeBirthPointArr.length; ++j)
                    object.removeBirthPointArr[j] = $root.pb.MapPoint.toObject(message.removeBirthPointArr[j], options);
            }
            if (message.addObstacleArr && message.addObstacleArr.length) {
                object.addObstacleArr = [];
                for (var j = 0; j < message.addObstacleArr.length; ++j)
                    object.addObstacleArr[j] = message.addObstacleArr[j];
            }
            if (message.removeObstacleArr && message.removeObstacleArr.length) {
                object.removeObstacleArr = [];
                for (var j = 0; j < message.removeObstacleArr.length; ++j)
                    object.removeObstacleArr[j] = message.removeObstacleArr[j];
            }
            if (message.addLandMarkArr && message.addLandMarkArr.length) {
                object.addLandMarkArr = [];
                for (var j = 0; j < message.addLandMarkArr.length; ++j)
                    object.addLandMarkArr[j] = $root.pb.LandMark.toObject(message.addLandMarkArr[j], options);
            }
            if (message.removeLandMarkArr && message.removeLandMarkArr.length) {
                object.removeLandMarkArr = [];
                for (var j = 0; j < message.removeLandMarkArr.length; ++j)
                    object.removeLandMarkArr[j] = message.removeLandMarkArr[j];
            }
            if (message.addPortalArr && message.addPortalArr.length) {
                object.addPortalArr = [];
                for (var j = 0; j < message.addPortalArr.length; ++j)
                    object.addPortalArr[j] = $root.pb.Portal.toObject(message.addPortalArr[j], options);
            }
            if (message.removePortalArr && message.removePortalArr.length) {
                object.removePortalArr = [];
                for (var j = 0; j < message.removePortalArr.length; ++j)
                    object.removePortalArr[j] = $root.pb.MapPoint.toObject(message.removePortalArr[j], options);
            }
            if (message.gridMaterialArr && message.gridMaterialArr.length) {
                object.gridMaterialArr = [];
                for (var j = 0; j < message.gridMaterialArr.length; ++j)
                    object.gridMaterialArr[j] = $root.pb.GridMaterial.toObject(message.gridMaterialArr[j], options);
            }
            return object;
        };

        /**
         * Converts this SpaceMapInfo to JSON.
         * @function toJSON
         * @memberof pb.SpaceMapInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpaceMapInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpaceMapInfo;
    })();

    pb.GetSpaceMapInfoCmd = (function() {

        /**
         * Properties of a GetSpaceMapInfoCmd.
         * @memberof pb
         * @interface IGetSpaceMapInfoCmd
         * @property {string|null} [eventId] GetSpaceMapInfoCmd eventId
         * @property {string|null} [spaceId] GetSpaceMapInfoCmd spaceId
         */

        /**
         * Constructs a new GetSpaceMapInfoCmd.
         * @memberof pb
         * @classdesc Represents a GetSpaceMapInfoCmd.
         * @implements IGetSpaceMapInfoCmd
         * @constructor
         * @param {pb.IGetSpaceMapInfoCmd=} [properties] Properties to set
         */
        function GetSpaceMapInfoCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSpaceMapInfoCmd eventId.
         * @member {string} eventId
         * @memberof pb.GetSpaceMapInfoCmd
         * @instance
         */
        GetSpaceMapInfoCmd.prototype.eventId = "";

        /**
         * GetSpaceMapInfoCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GetSpaceMapInfoCmd
         * @instance
         */
        GetSpaceMapInfoCmd.prototype.spaceId = "";

        /**
         * Creates a new GetSpaceMapInfoCmd instance using the specified properties.
         * @function create
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {pb.IGetSpaceMapInfoCmd=} [properties] Properties to set
         * @returns {pb.GetSpaceMapInfoCmd} GetSpaceMapInfoCmd instance
         */
        GetSpaceMapInfoCmd.create = function create(properties) {
            return new GetSpaceMapInfoCmd(properties);
        };

        /**
         * Encodes the specified GetSpaceMapInfoCmd message. Does not implicitly {@link pb.GetSpaceMapInfoCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {pb.IGetSpaceMapInfoCmd} message GetSpaceMapInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSpaceMapInfoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            return writer;
        };

        /**
         * Encodes the specified GetSpaceMapInfoCmd message, length delimited. Does not implicitly {@link pb.GetSpaceMapInfoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {pb.IGetSpaceMapInfoCmd} message GetSpaceMapInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSpaceMapInfoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSpaceMapInfoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetSpaceMapInfoCmd} GetSpaceMapInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSpaceMapInfoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetSpaceMapInfoCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSpaceMapInfoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetSpaceMapInfoCmd} GetSpaceMapInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSpaceMapInfoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSpaceMapInfoCmd message.
         * @function verify
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSpaceMapInfoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            return null;
        };

        /**
         * Creates a GetSpaceMapInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetSpaceMapInfoCmd} GetSpaceMapInfoCmd
         */
        GetSpaceMapInfoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetSpaceMapInfoCmd)
                return object;
            var message = new $root.pb.GetSpaceMapInfoCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            return message;
        };

        /**
         * Creates a plain object from a GetSpaceMapInfoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetSpaceMapInfoCmd
         * @static
         * @param {pb.GetSpaceMapInfoCmd} message GetSpaceMapInfoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSpaceMapInfoCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            return object;
        };

        /**
         * Converts this GetSpaceMapInfoCmd to JSON.
         * @function toJSON
         * @memberof pb.GetSpaceMapInfoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSpaceMapInfoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSpaceMapInfoCmd;
    })();

    pb.AddSpaceMapBirthCmd = (function() {

        /**
         * Properties of an AddSpaceMapBirthCmd.
         * @memberof pb
         * @interface IAddSpaceMapBirthCmd
         * @property {string|null} [eventId] AddSpaceMapBirthCmd eventId
         * @property {string|null} [spaceId] AddSpaceMapBirthCmd spaceId
         * @property {Array.<pb.IBirthPoint>|null} [birthPointArr] AddSpaceMapBirthCmd birthPointArr
         */

        /**
         * Constructs a new AddSpaceMapBirthCmd.
         * @memberof pb
         * @classdesc Represents an AddSpaceMapBirthCmd.
         * @implements IAddSpaceMapBirthCmd
         * @constructor
         * @param {pb.IAddSpaceMapBirthCmd=} [properties] Properties to set
         */
        function AddSpaceMapBirthCmd(properties) {
            this.birthPointArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSpaceMapBirthCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddSpaceMapBirthCmd
         * @instance
         */
        AddSpaceMapBirthCmd.prototype.eventId = "";

        /**
         * AddSpaceMapBirthCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddSpaceMapBirthCmd
         * @instance
         */
        AddSpaceMapBirthCmd.prototype.spaceId = "";

        /**
         * AddSpaceMapBirthCmd birthPointArr.
         * @member {Array.<pb.IBirthPoint>} birthPointArr
         * @memberof pb.AddSpaceMapBirthCmd
         * @instance
         */
        AddSpaceMapBirthCmd.prototype.birthPointArr = $util.emptyArray;

        /**
         * Creates a new AddSpaceMapBirthCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {pb.IAddSpaceMapBirthCmd=} [properties] Properties to set
         * @returns {pb.AddSpaceMapBirthCmd} AddSpaceMapBirthCmd instance
         */
        AddSpaceMapBirthCmd.create = function create(properties) {
            return new AddSpaceMapBirthCmd(properties);
        };

        /**
         * Encodes the specified AddSpaceMapBirthCmd message. Does not implicitly {@link pb.AddSpaceMapBirthCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {pb.IAddSpaceMapBirthCmd} message AddSpaceMapBirthCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapBirthCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.birthPointArr != null && message.birthPointArr.length)
                for (var i = 0; i < message.birthPointArr.length; ++i)
                    $root.pb.BirthPoint.encode(message.birthPointArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddSpaceMapBirthCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapBirthCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {pb.IAddSpaceMapBirthCmd} message AddSpaceMapBirthCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapBirthCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSpaceMapBirthCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddSpaceMapBirthCmd} AddSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapBirthCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddSpaceMapBirthCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.birthPointArr && message.birthPointArr.length))
                        message.birthPointArr = [];
                    message.birthPointArr.push($root.pb.BirthPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSpaceMapBirthCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddSpaceMapBirthCmd} AddSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapBirthCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSpaceMapBirthCmd message.
         * @function verify
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSpaceMapBirthCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.birthPointArr != null && message.hasOwnProperty("birthPointArr")) {
                if (!Array.isArray(message.birthPointArr))
                    return "birthPointArr: array expected";
                for (var i = 0; i < message.birthPointArr.length; ++i) {
                    var error = $root.pb.BirthPoint.verify(message.birthPointArr[i]);
                    if (error)
                        return "birthPointArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddSpaceMapBirthCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddSpaceMapBirthCmd} AddSpaceMapBirthCmd
         */
        AddSpaceMapBirthCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddSpaceMapBirthCmd)
                return object;
            var message = new $root.pb.AddSpaceMapBirthCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.birthPointArr) {
                if (!Array.isArray(object.birthPointArr))
                    throw TypeError(".pb.AddSpaceMapBirthCmd.birthPointArr: array expected");
                message.birthPointArr = [];
                for (var i = 0; i < object.birthPointArr.length; ++i) {
                    if (typeof object.birthPointArr[i] !== "object")
                        throw TypeError(".pb.AddSpaceMapBirthCmd.birthPointArr: object expected");
                    message.birthPointArr[i] = $root.pb.BirthPoint.fromObject(object.birthPointArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddSpaceMapBirthCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddSpaceMapBirthCmd
         * @static
         * @param {pb.AddSpaceMapBirthCmd} message AddSpaceMapBirthCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSpaceMapBirthCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.birthPointArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.birthPointArr && message.birthPointArr.length) {
                object.birthPointArr = [];
                for (var j = 0; j < message.birthPointArr.length; ++j)
                    object.birthPointArr[j] = $root.pb.BirthPoint.toObject(message.birthPointArr[j], options);
            }
            return object;
        };

        /**
         * Converts this AddSpaceMapBirthCmd to JSON.
         * @function toJSON
         * @memberof pb.AddSpaceMapBirthCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSpaceMapBirthCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddSpaceMapBirthCmd;
    })();

    pb.RemoveSpaceMapBirthCmd = (function() {

        /**
         * Properties of a RemoveSpaceMapBirthCmd.
         * @memberof pb
         * @interface IRemoveSpaceMapBirthCmd
         * @property {string|null} [eventId] RemoveSpaceMapBirthCmd eventId
         * @property {string|null} [spaceId] RemoveSpaceMapBirthCmd spaceId
         * @property {Array.<pb.IMapPoint>|null} [birthPointArr] RemoveSpaceMapBirthCmd birthPointArr
         */

        /**
         * Constructs a new RemoveSpaceMapBirthCmd.
         * @memberof pb
         * @classdesc Represents a RemoveSpaceMapBirthCmd.
         * @implements IRemoveSpaceMapBirthCmd
         * @constructor
         * @param {pb.IRemoveSpaceMapBirthCmd=} [properties] Properties to set
         */
        function RemoveSpaceMapBirthCmd(properties) {
            this.birthPointArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveSpaceMapBirthCmd eventId.
         * @member {string} eventId
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @instance
         */
        RemoveSpaceMapBirthCmd.prototype.eventId = "";

        /**
         * RemoveSpaceMapBirthCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @instance
         */
        RemoveSpaceMapBirthCmd.prototype.spaceId = "";

        /**
         * RemoveSpaceMapBirthCmd birthPointArr.
         * @member {Array.<pb.IMapPoint>} birthPointArr
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @instance
         */
        RemoveSpaceMapBirthCmd.prototype.birthPointArr = $util.emptyArray;

        /**
         * Creates a new RemoveSpaceMapBirthCmd instance using the specified properties.
         * @function create
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {pb.IRemoveSpaceMapBirthCmd=} [properties] Properties to set
         * @returns {pb.RemoveSpaceMapBirthCmd} RemoveSpaceMapBirthCmd instance
         */
        RemoveSpaceMapBirthCmd.create = function create(properties) {
            return new RemoveSpaceMapBirthCmd(properties);
        };

        /**
         * Encodes the specified RemoveSpaceMapBirthCmd message. Does not implicitly {@link pb.RemoveSpaceMapBirthCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {pb.IRemoveSpaceMapBirthCmd} message RemoveSpaceMapBirthCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapBirthCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.birthPointArr != null && message.birthPointArr.length)
                for (var i = 0; i < message.birthPointArr.length; ++i)
                    $root.pb.MapPoint.encode(message.birthPointArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RemoveSpaceMapBirthCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapBirthCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {pb.IRemoveSpaceMapBirthCmd} message RemoveSpaceMapBirthCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapBirthCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveSpaceMapBirthCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemoveSpaceMapBirthCmd} RemoveSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapBirthCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemoveSpaceMapBirthCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.birthPointArr && message.birthPointArr.length))
                        message.birthPointArr = [];
                    message.birthPointArr.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveSpaceMapBirthCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemoveSpaceMapBirthCmd} RemoveSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapBirthCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveSpaceMapBirthCmd message.
         * @function verify
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveSpaceMapBirthCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.birthPointArr != null && message.hasOwnProperty("birthPointArr")) {
                if (!Array.isArray(message.birthPointArr))
                    return "birthPointArr: array expected";
                for (var i = 0; i < message.birthPointArr.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.birthPointArr[i]);
                    if (error)
                        return "birthPointArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RemoveSpaceMapBirthCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemoveSpaceMapBirthCmd} RemoveSpaceMapBirthCmd
         */
        RemoveSpaceMapBirthCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemoveSpaceMapBirthCmd)
                return object;
            var message = new $root.pb.RemoveSpaceMapBirthCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.birthPointArr) {
                if (!Array.isArray(object.birthPointArr))
                    throw TypeError(".pb.RemoveSpaceMapBirthCmd.birthPointArr: array expected");
                message.birthPointArr = [];
                for (var i = 0; i < object.birthPointArr.length; ++i) {
                    if (typeof object.birthPointArr[i] !== "object")
                        throw TypeError(".pb.RemoveSpaceMapBirthCmd.birthPointArr: object expected");
                    message.birthPointArr[i] = $root.pb.MapPoint.fromObject(object.birthPointArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoveSpaceMapBirthCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @static
         * @param {pb.RemoveSpaceMapBirthCmd} message RemoveSpaceMapBirthCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveSpaceMapBirthCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.birthPointArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.birthPointArr && message.birthPointArr.length) {
                object.birthPointArr = [];
                for (var j = 0; j < message.birthPointArr.length; ++j)
                    object.birthPointArr[j] = $root.pb.MapPoint.toObject(message.birthPointArr[j], options);
            }
            return object;
        };

        /**
         * Converts this RemoveSpaceMapBirthCmd to JSON.
         * @function toJSON
         * @memberof pb.RemoveSpaceMapBirthCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveSpaceMapBirthCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveSpaceMapBirthCmd;
    })();

    pb.AddSpaceMapObstacleCmd = (function() {

        /**
         * Properties of an AddSpaceMapObstacleCmd.
         * @memberof pb
         * @interface IAddSpaceMapObstacleCmd
         * @property {string|null} [eventId] AddSpaceMapObstacleCmd eventId
         * @property {string|null} [spaceId] AddSpaceMapObstacleCmd spaceId
         * @property {Array.<number>|null} [obstacleArr] AddSpaceMapObstacleCmd obstacleArr
         */

        /**
         * Constructs a new AddSpaceMapObstacleCmd.
         * @memberof pb
         * @classdesc Represents an AddSpaceMapObstacleCmd.
         * @implements IAddSpaceMapObstacleCmd
         * @constructor
         * @param {pb.IAddSpaceMapObstacleCmd=} [properties] Properties to set
         */
        function AddSpaceMapObstacleCmd(properties) {
            this.obstacleArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSpaceMapObstacleCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddSpaceMapObstacleCmd
         * @instance
         */
        AddSpaceMapObstacleCmd.prototype.eventId = "";

        /**
         * AddSpaceMapObstacleCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddSpaceMapObstacleCmd
         * @instance
         */
        AddSpaceMapObstacleCmd.prototype.spaceId = "";

        /**
         * AddSpaceMapObstacleCmd obstacleArr.
         * @member {Array.<number>} obstacleArr
         * @memberof pb.AddSpaceMapObstacleCmd
         * @instance
         */
        AddSpaceMapObstacleCmd.prototype.obstacleArr = $util.emptyArray;

        /**
         * Creates a new AddSpaceMapObstacleCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {pb.IAddSpaceMapObstacleCmd=} [properties] Properties to set
         * @returns {pb.AddSpaceMapObstacleCmd} AddSpaceMapObstacleCmd instance
         */
        AddSpaceMapObstacleCmd.create = function create(properties) {
            return new AddSpaceMapObstacleCmd(properties);
        };

        /**
         * Encodes the specified AddSpaceMapObstacleCmd message. Does not implicitly {@link pb.AddSpaceMapObstacleCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {pb.IAddSpaceMapObstacleCmd} message AddSpaceMapObstacleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapObstacleCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.obstacleArr != null && message.obstacleArr.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.obstacleArr.length; ++i)
                    writer.int32(message.obstacleArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified AddSpaceMapObstacleCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapObstacleCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {pb.IAddSpaceMapObstacleCmd} message AddSpaceMapObstacleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapObstacleCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSpaceMapObstacleCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddSpaceMapObstacleCmd} AddSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapObstacleCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddSpaceMapObstacleCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.obstacleArr && message.obstacleArr.length))
                        message.obstacleArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.obstacleArr.push(reader.int32());
                    } else
                        message.obstacleArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSpaceMapObstacleCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddSpaceMapObstacleCmd} AddSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapObstacleCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSpaceMapObstacleCmd message.
         * @function verify
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSpaceMapObstacleCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.obstacleArr != null && message.hasOwnProperty("obstacleArr")) {
                if (!Array.isArray(message.obstacleArr))
                    return "obstacleArr: array expected";
                for (var i = 0; i < message.obstacleArr.length; ++i)
                    if (!$util.isInteger(message.obstacleArr[i]))
                        return "obstacleArr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an AddSpaceMapObstacleCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddSpaceMapObstacleCmd} AddSpaceMapObstacleCmd
         */
        AddSpaceMapObstacleCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddSpaceMapObstacleCmd)
                return object;
            var message = new $root.pb.AddSpaceMapObstacleCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.obstacleArr) {
                if (!Array.isArray(object.obstacleArr))
                    throw TypeError(".pb.AddSpaceMapObstacleCmd.obstacleArr: array expected");
                message.obstacleArr = [];
                for (var i = 0; i < object.obstacleArr.length; ++i)
                    message.obstacleArr[i] = object.obstacleArr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an AddSpaceMapObstacleCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddSpaceMapObstacleCmd
         * @static
         * @param {pb.AddSpaceMapObstacleCmd} message AddSpaceMapObstacleCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSpaceMapObstacleCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.obstacleArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.obstacleArr && message.obstacleArr.length) {
                object.obstacleArr = [];
                for (var j = 0; j < message.obstacleArr.length; ++j)
                    object.obstacleArr[j] = message.obstacleArr[j];
            }
            return object;
        };

        /**
         * Converts this AddSpaceMapObstacleCmd to JSON.
         * @function toJSON
         * @memberof pb.AddSpaceMapObstacleCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSpaceMapObstacleCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddSpaceMapObstacleCmd;
    })();

    pb.RemoveSpaceMapObstacleCmd = (function() {

        /**
         * Properties of a RemoveSpaceMapObstacleCmd.
         * @memberof pb
         * @interface IRemoveSpaceMapObstacleCmd
         * @property {string|null} [eventId] RemoveSpaceMapObstacleCmd eventId
         * @property {string|null} [spaceId] RemoveSpaceMapObstacleCmd spaceId
         * @property {Array.<number>|null} [obstacleArr] RemoveSpaceMapObstacleCmd obstacleArr
         */

        /**
         * Constructs a new RemoveSpaceMapObstacleCmd.
         * @memberof pb
         * @classdesc Represents a RemoveSpaceMapObstacleCmd.
         * @implements IRemoveSpaceMapObstacleCmd
         * @constructor
         * @param {pb.IRemoveSpaceMapObstacleCmd=} [properties] Properties to set
         */
        function RemoveSpaceMapObstacleCmd(properties) {
            this.obstacleArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveSpaceMapObstacleCmd eventId.
         * @member {string} eventId
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @instance
         */
        RemoveSpaceMapObstacleCmd.prototype.eventId = "";

        /**
         * RemoveSpaceMapObstacleCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @instance
         */
        RemoveSpaceMapObstacleCmd.prototype.spaceId = "";

        /**
         * RemoveSpaceMapObstacleCmd obstacleArr.
         * @member {Array.<number>} obstacleArr
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @instance
         */
        RemoveSpaceMapObstacleCmd.prototype.obstacleArr = $util.emptyArray;

        /**
         * Creates a new RemoveSpaceMapObstacleCmd instance using the specified properties.
         * @function create
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {pb.IRemoveSpaceMapObstacleCmd=} [properties] Properties to set
         * @returns {pb.RemoveSpaceMapObstacleCmd} RemoveSpaceMapObstacleCmd instance
         */
        RemoveSpaceMapObstacleCmd.create = function create(properties) {
            return new RemoveSpaceMapObstacleCmd(properties);
        };

        /**
         * Encodes the specified RemoveSpaceMapObstacleCmd message. Does not implicitly {@link pb.RemoveSpaceMapObstacleCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {pb.IRemoveSpaceMapObstacleCmd} message RemoveSpaceMapObstacleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapObstacleCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.obstacleArr != null && message.obstacleArr.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.obstacleArr.length; ++i)
                    writer.int32(message.obstacleArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RemoveSpaceMapObstacleCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapObstacleCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {pb.IRemoveSpaceMapObstacleCmd} message RemoveSpaceMapObstacleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapObstacleCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveSpaceMapObstacleCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemoveSpaceMapObstacleCmd} RemoveSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapObstacleCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemoveSpaceMapObstacleCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.obstacleArr && message.obstacleArr.length))
                        message.obstacleArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.obstacleArr.push(reader.int32());
                    } else
                        message.obstacleArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveSpaceMapObstacleCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemoveSpaceMapObstacleCmd} RemoveSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapObstacleCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveSpaceMapObstacleCmd message.
         * @function verify
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveSpaceMapObstacleCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.obstacleArr != null && message.hasOwnProperty("obstacleArr")) {
                if (!Array.isArray(message.obstacleArr))
                    return "obstacleArr: array expected";
                for (var i = 0; i < message.obstacleArr.length; ++i)
                    if (!$util.isInteger(message.obstacleArr[i]))
                        return "obstacleArr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RemoveSpaceMapObstacleCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemoveSpaceMapObstacleCmd} RemoveSpaceMapObstacleCmd
         */
        RemoveSpaceMapObstacleCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemoveSpaceMapObstacleCmd)
                return object;
            var message = new $root.pb.RemoveSpaceMapObstacleCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.obstacleArr) {
                if (!Array.isArray(object.obstacleArr))
                    throw TypeError(".pb.RemoveSpaceMapObstacleCmd.obstacleArr: array expected");
                message.obstacleArr = [];
                for (var i = 0; i < object.obstacleArr.length; ++i)
                    message.obstacleArr[i] = object.obstacleArr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoveSpaceMapObstacleCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @static
         * @param {pb.RemoveSpaceMapObstacleCmd} message RemoveSpaceMapObstacleCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveSpaceMapObstacleCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.obstacleArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.obstacleArr && message.obstacleArr.length) {
                object.obstacleArr = [];
                for (var j = 0; j < message.obstacleArr.length; ++j)
                    object.obstacleArr[j] = message.obstacleArr[j];
            }
            return object;
        };

        /**
         * Converts this RemoveSpaceMapObstacleCmd to JSON.
         * @function toJSON
         * @memberof pb.RemoveSpaceMapObstacleCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveSpaceMapObstacleCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveSpaceMapObstacleCmd;
    })();

    pb.AddSpaceMapLandMarkCmd = (function() {

        /**
         * Properties of an AddSpaceMapLandMarkCmd.
         * @memberof pb
         * @interface IAddSpaceMapLandMarkCmd
         * @property {string|null} [eventId] AddSpaceMapLandMarkCmd eventId
         * @property {string|null} [spaceId] AddSpaceMapLandMarkCmd spaceId
         * @property {Array.<pb.ILandMark>|null} [landMarkArr] AddSpaceMapLandMarkCmd landMarkArr
         */

        /**
         * Constructs a new AddSpaceMapLandMarkCmd.
         * @memberof pb
         * @classdesc Represents an AddSpaceMapLandMarkCmd.
         * @implements IAddSpaceMapLandMarkCmd
         * @constructor
         * @param {pb.IAddSpaceMapLandMarkCmd=} [properties] Properties to set
         */
        function AddSpaceMapLandMarkCmd(properties) {
            this.landMarkArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSpaceMapLandMarkCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @instance
         */
        AddSpaceMapLandMarkCmd.prototype.eventId = "";

        /**
         * AddSpaceMapLandMarkCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @instance
         */
        AddSpaceMapLandMarkCmd.prototype.spaceId = "";

        /**
         * AddSpaceMapLandMarkCmd landMarkArr.
         * @member {Array.<pb.ILandMark>} landMarkArr
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @instance
         */
        AddSpaceMapLandMarkCmd.prototype.landMarkArr = $util.emptyArray;

        /**
         * Creates a new AddSpaceMapLandMarkCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {pb.IAddSpaceMapLandMarkCmd=} [properties] Properties to set
         * @returns {pb.AddSpaceMapLandMarkCmd} AddSpaceMapLandMarkCmd instance
         */
        AddSpaceMapLandMarkCmd.create = function create(properties) {
            return new AddSpaceMapLandMarkCmd(properties);
        };

        /**
         * Encodes the specified AddSpaceMapLandMarkCmd message. Does not implicitly {@link pb.AddSpaceMapLandMarkCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {pb.IAddSpaceMapLandMarkCmd} message AddSpaceMapLandMarkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapLandMarkCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.landMarkArr != null && message.landMarkArr.length)
                for (var i = 0; i < message.landMarkArr.length; ++i)
                    $root.pb.LandMark.encode(message.landMarkArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddSpaceMapLandMarkCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapLandMarkCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {pb.IAddSpaceMapLandMarkCmd} message AddSpaceMapLandMarkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapLandMarkCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSpaceMapLandMarkCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddSpaceMapLandMarkCmd} AddSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapLandMarkCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddSpaceMapLandMarkCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.landMarkArr && message.landMarkArr.length))
                        message.landMarkArr = [];
                    message.landMarkArr.push($root.pb.LandMark.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSpaceMapLandMarkCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddSpaceMapLandMarkCmd} AddSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapLandMarkCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSpaceMapLandMarkCmd message.
         * @function verify
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSpaceMapLandMarkCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.landMarkArr != null && message.hasOwnProperty("landMarkArr")) {
                if (!Array.isArray(message.landMarkArr))
                    return "landMarkArr: array expected";
                for (var i = 0; i < message.landMarkArr.length; ++i) {
                    var error = $root.pb.LandMark.verify(message.landMarkArr[i]);
                    if (error)
                        return "landMarkArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddSpaceMapLandMarkCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddSpaceMapLandMarkCmd} AddSpaceMapLandMarkCmd
         */
        AddSpaceMapLandMarkCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddSpaceMapLandMarkCmd)
                return object;
            var message = new $root.pb.AddSpaceMapLandMarkCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.landMarkArr) {
                if (!Array.isArray(object.landMarkArr))
                    throw TypeError(".pb.AddSpaceMapLandMarkCmd.landMarkArr: array expected");
                message.landMarkArr = [];
                for (var i = 0; i < object.landMarkArr.length; ++i) {
                    if (typeof object.landMarkArr[i] !== "object")
                        throw TypeError(".pb.AddSpaceMapLandMarkCmd.landMarkArr: object expected");
                    message.landMarkArr[i] = $root.pb.LandMark.fromObject(object.landMarkArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddSpaceMapLandMarkCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @static
         * @param {pb.AddSpaceMapLandMarkCmd} message AddSpaceMapLandMarkCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSpaceMapLandMarkCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.landMarkArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.landMarkArr && message.landMarkArr.length) {
                object.landMarkArr = [];
                for (var j = 0; j < message.landMarkArr.length; ++j)
                    object.landMarkArr[j] = $root.pb.LandMark.toObject(message.landMarkArr[j], options);
            }
            return object;
        };

        /**
         * Converts this AddSpaceMapLandMarkCmd to JSON.
         * @function toJSON
         * @memberof pb.AddSpaceMapLandMarkCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSpaceMapLandMarkCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddSpaceMapLandMarkCmd;
    })();

    pb.RemoveSpaceMapLandMarkCmd = (function() {

        /**
         * Properties of a RemoveSpaceMapLandMarkCmd.
         * @memberof pb
         * @interface IRemoveSpaceMapLandMarkCmd
         * @property {string|null} [eventId] RemoveSpaceMapLandMarkCmd eventId
         * @property {string|null} [spaceId] RemoveSpaceMapLandMarkCmd spaceId
         * @property {Array.<string>|null} [landMarkIdArr] RemoveSpaceMapLandMarkCmd landMarkIdArr
         */

        /**
         * Constructs a new RemoveSpaceMapLandMarkCmd.
         * @memberof pb
         * @classdesc Represents a RemoveSpaceMapLandMarkCmd.
         * @implements IRemoveSpaceMapLandMarkCmd
         * @constructor
         * @param {pb.IRemoveSpaceMapLandMarkCmd=} [properties] Properties to set
         */
        function RemoveSpaceMapLandMarkCmd(properties) {
            this.landMarkIdArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveSpaceMapLandMarkCmd eventId.
         * @member {string} eventId
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @instance
         */
        RemoveSpaceMapLandMarkCmd.prototype.eventId = "";

        /**
         * RemoveSpaceMapLandMarkCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @instance
         */
        RemoveSpaceMapLandMarkCmd.prototype.spaceId = "";

        /**
         * RemoveSpaceMapLandMarkCmd landMarkIdArr.
         * @member {Array.<string>} landMarkIdArr
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @instance
         */
        RemoveSpaceMapLandMarkCmd.prototype.landMarkIdArr = $util.emptyArray;

        /**
         * Creates a new RemoveSpaceMapLandMarkCmd instance using the specified properties.
         * @function create
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {pb.IRemoveSpaceMapLandMarkCmd=} [properties] Properties to set
         * @returns {pb.RemoveSpaceMapLandMarkCmd} RemoveSpaceMapLandMarkCmd instance
         */
        RemoveSpaceMapLandMarkCmd.create = function create(properties) {
            return new RemoveSpaceMapLandMarkCmd(properties);
        };

        /**
         * Encodes the specified RemoveSpaceMapLandMarkCmd message. Does not implicitly {@link pb.RemoveSpaceMapLandMarkCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {pb.IRemoveSpaceMapLandMarkCmd} message RemoveSpaceMapLandMarkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapLandMarkCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.landMarkIdArr != null && message.landMarkIdArr.length)
                for (var i = 0; i < message.landMarkIdArr.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.landMarkIdArr[i]);
            return writer;
        };

        /**
         * Encodes the specified RemoveSpaceMapLandMarkCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapLandMarkCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {pb.IRemoveSpaceMapLandMarkCmd} message RemoveSpaceMapLandMarkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapLandMarkCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveSpaceMapLandMarkCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemoveSpaceMapLandMarkCmd} RemoveSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapLandMarkCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemoveSpaceMapLandMarkCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.landMarkIdArr && message.landMarkIdArr.length))
                        message.landMarkIdArr = [];
                    message.landMarkIdArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveSpaceMapLandMarkCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemoveSpaceMapLandMarkCmd} RemoveSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapLandMarkCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveSpaceMapLandMarkCmd message.
         * @function verify
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveSpaceMapLandMarkCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.landMarkIdArr != null && message.hasOwnProperty("landMarkIdArr")) {
                if (!Array.isArray(message.landMarkIdArr))
                    return "landMarkIdArr: array expected";
                for (var i = 0; i < message.landMarkIdArr.length; ++i)
                    if (!$util.isString(message.landMarkIdArr[i]))
                        return "landMarkIdArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RemoveSpaceMapLandMarkCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemoveSpaceMapLandMarkCmd} RemoveSpaceMapLandMarkCmd
         */
        RemoveSpaceMapLandMarkCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemoveSpaceMapLandMarkCmd)
                return object;
            var message = new $root.pb.RemoveSpaceMapLandMarkCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.landMarkIdArr) {
                if (!Array.isArray(object.landMarkIdArr))
                    throw TypeError(".pb.RemoveSpaceMapLandMarkCmd.landMarkIdArr: array expected");
                message.landMarkIdArr = [];
                for (var i = 0; i < object.landMarkIdArr.length; ++i)
                    message.landMarkIdArr[i] = String(object.landMarkIdArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoveSpaceMapLandMarkCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @static
         * @param {pb.RemoveSpaceMapLandMarkCmd} message RemoveSpaceMapLandMarkCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveSpaceMapLandMarkCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.landMarkIdArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.landMarkIdArr && message.landMarkIdArr.length) {
                object.landMarkIdArr = [];
                for (var j = 0; j < message.landMarkIdArr.length; ++j)
                    object.landMarkIdArr[j] = message.landMarkIdArr[j];
            }
            return object;
        };

        /**
         * Converts this RemoveSpaceMapLandMarkCmd to JSON.
         * @function toJSON
         * @memberof pb.RemoveSpaceMapLandMarkCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveSpaceMapLandMarkCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveSpaceMapLandMarkCmd;
    })();

    pb.AddSpaceMapPortalCmd = (function() {

        /**
         * Properties of an AddSpaceMapPortalCmd.
         * @memberof pb
         * @interface IAddSpaceMapPortalCmd
         * @property {string|null} [eventId] AddSpaceMapPortalCmd eventId
         * @property {string|null} [spaceId] AddSpaceMapPortalCmd spaceId
         * @property {Array.<pb.IPortal>|null} [portalArr] AddSpaceMapPortalCmd portalArr
         */

        /**
         * Constructs a new AddSpaceMapPortalCmd.
         * @memberof pb
         * @classdesc Represents an AddSpaceMapPortalCmd.
         * @implements IAddSpaceMapPortalCmd
         * @constructor
         * @param {pb.IAddSpaceMapPortalCmd=} [properties] Properties to set
         */
        function AddSpaceMapPortalCmd(properties) {
            this.portalArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSpaceMapPortalCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddSpaceMapPortalCmd
         * @instance
         */
        AddSpaceMapPortalCmd.prototype.eventId = "";

        /**
         * AddSpaceMapPortalCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddSpaceMapPortalCmd
         * @instance
         */
        AddSpaceMapPortalCmd.prototype.spaceId = "";

        /**
         * AddSpaceMapPortalCmd portalArr.
         * @member {Array.<pb.IPortal>} portalArr
         * @memberof pb.AddSpaceMapPortalCmd
         * @instance
         */
        AddSpaceMapPortalCmd.prototype.portalArr = $util.emptyArray;

        /**
         * Creates a new AddSpaceMapPortalCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {pb.IAddSpaceMapPortalCmd=} [properties] Properties to set
         * @returns {pb.AddSpaceMapPortalCmd} AddSpaceMapPortalCmd instance
         */
        AddSpaceMapPortalCmd.create = function create(properties) {
            return new AddSpaceMapPortalCmd(properties);
        };

        /**
         * Encodes the specified AddSpaceMapPortalCmd message. Does not implicitly {@link pb.AddSpaceMapPortalCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {pb.IAddSpaceMapPortalCmd} message AddSpaceMapPortalCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapPortalCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.portalArr != null && message.portalArr.length)
                for (var i = 0; i < message.portalArr.length; ++i)
                    $root.pb.Portal.encode(message.portalArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddSpaceMapPortalCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapPortalCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {pb.IAddSpaceMapPortalCmd} message AddSpaceMapPortalCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapPortalCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSpaceMapPortalCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddSpaceMapPortalCmd} AddSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapPortalCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddSpaceMapPortalCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.portalArr && message.portalArr.length))
                        message.portalArr = [];
                    message.portalArr.push($root.pb.Portal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSpaceMapPortalCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddSpaceMapPortalCmd} AddSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapPortalCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSpaceMapPortalCmd message.
         * @function verify
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSpaceMapPortalCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.portalArr != null && message.hasOwnProperty("portalArr")) {
                if (!Array.isArray(message.portalArr))
                    return "portalArr: array expected";
                for (var i = 0; i < message.portalArr.length; ++i) {
                    var error = $root.pb.Portal.verify(message.portalArr[i]);
                    if (error)
                        return "portalArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddSpaceMapPortalCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddSpaceMapPortalCmd} AddSpaceMapPortalCmd
         */
        AddSpaceMapPortalCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddSpaceMapPortalCmd)
                return object;
            var message = new $root.pb.AddSpaceMapPortalCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.portalArr) {
                if (!Array.isArray(object.portalArr))
                    throw TypeError(".pb.AddSpaceMapPortalCmd.portalArr: array expected");
                message.portalArr = [];
                for (var i = 0; i < object.portalArr.length; ++i) {
                    if (typeof object.portalArr[i] !== "object")
                        throw TypeError(".pb.AddSpaceMapPortalCmd.portalArr: object expected");
                    message.portalArr[i] = $root.pb.Portal.fromObject(object.portalArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddSpaceMapPortalCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddSpaceMapPortalCmd
         * @static
         * @param {pb.AddSpaceMapPortalCmd} message AddSpaceMapPortalCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSpaceMapPortalCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.portalArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.portalArr && message.portalArr.length) {
                object.portalArr = [];
                for (var j = 0; j < message.portalArr.length; ++j)
                    object.portalArr[j] = $root.pb.Portal.toObject(message.portalArr[j], options);
            }
            return object;
        };

        /**
         * Converts this AddSpaceMapPortalCmd to JSON.
         * @function toJSON
         * @memberof pb.AddSpaceMapPortalCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSpaceMapPortalCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddSpaceMapPortalCmd;
    })();

    pb.RemoveSpaceMapPortalCmd = (function() {

        /**
         * Properties of a RemoveSpaceMapPortalCmd.
         * @memberof pb
         * @interface IRemoveSpaceMapPortalCmd
         * @property {string|null} [eventId] RemoveSpaceMapPortalCmd eventId
         * @property {string|null} [spaceId] RemoveSpaceMapPortalCmd spaceId
         * @property {Array.<pb.IMapPoint>|null} [portalPointArr] RemoveSpaceMapPortalCmd portalPointArr
         */

        /**
         * Constructs a new RemoveSpaceMapPortalCmd.
         * @memberof pb
         * @classdesc Represents a RemoveSpaceMapPortalCmd.
         * @implements IRemoveSpaceMapPortalCmd
         * @constructor
         * @param {pb.IRemoveSpaceMapPortalCmd=} [properties] Properties to set
         */
        function RemoveSpaceMapPortalCmd(properties) {
            this.portalPointArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveSpaceMapPortalCmd eventId.
         * @member {string} eventId
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @instance
         */
        RemoveSpaceMapPortalCmd.prototype.eventId = "";

        /**
         * RemoveSpaceMapPortalCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @instance
         */
        RemoveSpaceMapPortalCmd.prototype.spaceId = "";

        /**
         * RemoveSpaceMapPortalCmd portalPointArr.
         * @member {Array.<pb.IMapPoint>} portalPointArr
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @instance
         */
        RemoveSpaceMapPortalCmd.prototype.portalPointArr = $util.emptyArray;

        /**
         * Creates a new RemoveSpaceMapPortalCmd instance using the specified properties.
         * @function create
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {pb.IRemoveSpaceMapPortalCmd=} [properties] Properties to set
         * @returns {pb.RemoveSpaceMapPortalCmd} RemoveSpaceMapPortalCmd instance
         */
        RemoveSpaceMapPortalCmd.create = function create(properties) {
            return new RemoveSpaceMapPortalCmd(properties);
        };

        /**
         * Encodes the specified RemoveSpaceMapPortalCmd message. Does not implicitly {@link pb.RemoveSpaceMapPortalCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {pb.IRemoveSpaceMapPortalCmd} message RemoveSpaceMapPortalCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapPortalCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.portalPointArr != null && message.portalPointArr.length)
                for (var i = 0; i < message.portalPointArr.length; ++i)
                    $root.pb.MapPoint.encode(message.portalPointArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RemoveSpaceMapPortalCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapPortalCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {pb.IRemoveSpaceMapPortalCmd} message RemoveSpaceMapPortalCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSpaceMapPortalCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveSpaceMapPortalCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemoveSpaceMapPortalCmd} RemoveSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapPortalCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemoveSpaceMapPortalCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.portalPointArr && message.portalPointArr.length))
                        message.portalPointArr = [];
                    message.portalPointArr.push($root.pb.MapPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveSpaceMapPortalCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemoveSpaceMapPortalCmd} RemoveSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSpaceMapPortalCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveSpaceMapPortalCmd message.
         * @function verify
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveSpaceMapPortalCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.portalPointArr != null && message.hasOwnProperty("portalPointArr")) {
                if (!Array.isArray(message.portalPointArr))
                    return "portalPointArr: array expected";
                for (var i = 0; i < message.portalPointArr.length; ++i) {
                    var error = $root.pb.MapPoint.verify(message.portalPointArr[i]);
                    if (error)
                        return "portalPointArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RemoveSpaceMapPortalCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemoveSpaceMapPortalCmd} RemoveSpaceMapPortalCmd
         */
        RemoveSpaceMapPortalCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemoveSpaceMapPortalCmd)
                return object;
            var message = new $root.pb.RemoveSpaceMapPortalCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.portalPointArr) {
                if (!Array.isArray(object.portalPointArr))
                    throw TypeError(".pb.RemoveSpaceMapPortalCmd.portalPointArr: array expected");
                message.portalPointArr = [];
                for (var i = 0; i < object.portalPointArr.length; ++i) {
                    if (typeof object.portalPointArr[i] !== "object")
                        throw TypeError(".pb.RemoveSpaceMapPortalCmd.portalPointArr: object expected");
                    message.portalPointArr[i] = $root.pb.MapPoint.fromObject(object.portalPointArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoveSpaceMapPortalCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @static
         * @param {pb.RemoveSpaceMapPortalCmd} message RemoveSpaceMapPortalCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveSpaceMapPortalCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.portalPointArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.portalPointArr && message.portalPointArr.length) {
                object.portalPointArr = [];
                for (var j = 0; j < message.portalPointArr.length; ++j)
                    object.portalPointArr[j] = $root.pb.MapPoint.toObject(message.portalPointArr[j], options);
            }
            return object;
        };

        /**
         * Converts this RemoveSpaceMapPortalCmd to JSON.
         * @function toJSON
         * @memberof pb.RemoveSpaceMapPortalCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveSpaceMapPortalCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveSpaceMapPortalCmd;
    })();

    pb.AddSpaceMapGridMaterialCmd = (function() {

        /**
         * Properties of an AddSpaceMapGridMaterialCmd.
         * @memberof pb
         * @interface IAddSpaceMapGridMaterialCmd
         * @property {string|null} [eventId] AddSpaceMapGridMaterialCmd eventId
         * @property {string|null} [spaceId] AddSpaceMapGridMaterialCmd spaceId
         * @property {Array.<pb.IGridMaterial>|null} [gridMaterialArr] AddSpaceMapGridMaterialCmd gridMaterialArr
         */

        /**
         * Constructs a new AddSpaceMapGridMaterialCmd.
         * @memberof pb
         * @classdesc Represents an AddSpaceMapGridMaterialCmd.
         * @implements IAddSpaceMapGridMaterialCmd
         * @constructor
         * @param {pb.IAddSpaceMapGridMaterialCmd=} [properties] Properties to set
         */
        function AddSpaceMapGridMaterialCmd(properties) {
            this.gridMaterialArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSpaceMapGridMaterialCmd eventId.
         * @member {string} eventId
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @instance
         */
        AddSpaceMapGridMaterialCmd.prototype.eventId = "";

        /**
         * AddSpaceMapGridMaterialCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @instance
         */
        AddSpaceMapGridMaterialCmd.prototype.spaceId = "";

        /**
         * AddSpaceMapGridMaterialCmd gridMaterialArr.
         * @member {Array.<pb.IGridMaterial>} gridMaterialArr
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @instance
         */
        AddSpaceMapGridMaterialCmd.prototype.gridMaterialArr = $util.emptyArray;

        /**
         * Creates a new AddSpaceMapGridMaterialCmd instance using the specified properties.
         * @function create
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IAddSpaceMapGridMaterialCmd=} [properties] Properties to set
         * @returns {pb.AddSpaceMapGridMaterialCmd} AddSpaceMapGridMaterialCmd instance
         */
        AddSpaceMapGridMaterialCmd.create = function create(properties) {
            return new AddSpaceMapGridMaterialCmd(properties);
        };

        /**
         * Encodes the specified AddSpaceMapGridMaterialCmd message. Does not implicitly {@link pb.AddSpaceMapGridMaterialCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IAddSpaceMapGridMaterialCmd} message AddSpaceMapGridMaterialCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapGridMaterialCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.gridMaterialArr != null && message.gridMaterialArr.length)
                for (var i = 0; i < message.gridMaterialArr.length; ++i)
                    $root.pb.GridMaterial.encode(message.gridMaterialArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddSpaceMapGridMaterialCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapGridMaterialCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IAddSpaceMapGridMaterialCmd} message AddSpaceMapGridMaterialCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSpaceMapGridMaterialCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSpaceMapGridMaterialCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddSpaceMapGridMaterialCmd} AddSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapGridMaterialCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddSpaceMapGridMaterialCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.gridMaterialArr && message.gridMaterialArr.length))
                        message.gridMaterialArr = [];
                    message.gridMaterialArr.push($root.pb.GridMaterial.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSpaceMapGridMaterialCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddSpaceMapGridMaterialCmd} AddSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSpaceMapGridMaterialCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSpaceMapGridMaterialCmd message.
         * @function verify
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSpaceMapGridMaterialCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.gridMaterialArr != null && message.hasOwnProperty("gridMaterialArr")) {
                if (!Array.isArray(message.gridMaterialArr))
                    return "gridMaterialArr: array expected";
                for (var i = 0; i < message.gridMaterialArr.length; ++i) {
                    var error = $root.pb.GridMaterial.verify(message.gridMaterialArr[i]);
                    if (error)
                        return "gridMaterialArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddSpaceMapGridMaterialCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddSpaceMapGridMaterialCmd} AddSpaceMapGridMaterialCmd
         */
        AddSpaceMapGridMaterialCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddSpaceMapGridMaterialCmd)
                return object;
            var message = new $root.pb.AddSpaceMapGridMaterialCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.gridMaterialArr) {
                if (!Array.isArray(object.gridMaterialArr))
                    throw TypeError(".pb.AddSpaceMapGridMaterialCmd.gridMaterialArr: array expected");
                message.gridMaterialArr = [];
                for (var i = 0; i < object.gridMaterialArr.length; ++i) {
                    if (typeof object.gridMaterialArr[i] !== "object")
                        throw TypeError(".pb.AddSpaceMapGridMaterialCmd.gridMaterialArr: object expected");
                    message.gridMaterialArr[i] = $root.pb.GridMaterial.fromObject(object.gridMaterialArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddSpaceMapGridMaterialCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @static
         * @param {pb.AddSpaceMapGridMaterialCmd} message AddSpaceMapGridMaterialCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSpaceMapGridMaterialCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.gridMaterialArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.gridMaterialArr && message.gridMaterialArr.length) {
                object.gridMaterialArr = [];
                for (var j = 0; j < message.gridMaterialArr.length; ++j)
                    object.gridMaterialArr[j] = $root.pb.GridMaterial.toObject(message.gridMaterialArr[j], options);
            }
            return object;
        };

        /**
         * Converts this AddSpaceMapGridMaterialCmd to JSON.
         * @function toJSON
         * @memberof pb.AddSpaceMapGridMaterialCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSpaceMapGridMaterialCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddSpaceMapGridMaterialCmd;
    })();

    pb.ClearSpaceMapGridMaterialCmd = (function() {

        /**
         * Properties of a ClearSpaceMapGridMaterialCmd.
         * @memberof pb
         * @interface IClearSpaceMapGridMaterialCmd
         * @property {string|null} [eventId] ClearSpaceMapGridMaterialCmd eventId
         * @property {string|null} [spaceId] ClearSpaceMapGridMaterialCmd spaceId
         * @property {Array.<number>|null} [gridArr] ClearSpaceMapGridMaterialCmd gridArr
         */

        /**
         * Constructs a new ClearSpaceMapGridMaterialCmd.
         * @memberof pb
         * @classdesc Represents a ClearSpaceMapGridMaterialCmd.
         * @implements IClearSpaceMapGridMaterialCmd
         * @constructor
         * @param {pb.IClearSpaceMapGridMaterialCmd=} [properties] Properties to set
         */
        function ClearSpaceMapGridMaterialCmd(properties) {
            this.gridArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClearSpaceMapGridMaterialCmd eventId.
         * @member {string} eventId
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @instance
         */
        ClearSpaceMapGridMaterialCmd.prototype.eventId = "";

        /**
         * ClearSpaceMapGridMaterialCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @instance
         */
        ClearSpaceMapGridMaterialCmd.prototype.spaceId = "";

        /**
         * ClearSpaceMapGridMaterialCmd gridArr.
         * @member {Array.<number>} gridArr
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @instance
         */
        ClearSpaceMapGridMaterialCmd.prototype.gridArr = $util.emptyArray;

        /**
         * Creates a new ClearSpaceMapGridMaterialCmd instance using the specified properties.
         * @function create
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IClearSpaceMapGridMaterialCmd=} [properties] Properties to set
         * @returns {pb.ClearSpaceMapGridMaterialCmd} ClearSpaceMapGridMaterialCmd instance
         */
        ClearSpaceMapGridMaterialCmd.create = function create(properties) {
            return new ClearSpaceMapGridMaterialCmd(properties);
        };

        /**
         * Encodes the specified ClearSpaceMapGridMaterialCmd message. Does not implicitly {@link pb.ClearSpaceMapGridMaterialCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IClearSpaceMapGridMaterialCmd} message ClearSpaceMapGridMaterialCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearSpaceMapGridMaterialCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.gridArr != null && message.gridArr.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.gridArr.length; ++i)
                    writer.int32(message.gridArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ClearSpaceMapGridMaterialCmd message, length delimited. Does not implicitly {@link pb.ClearSpaceMapGridMaterialCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {pb.IClearSpaceMapGridMaterialCmd} message ClearSpaceMapGridMaterialCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearSpaceMapGridMaterialCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClearSpaceMapGridMaterialCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ClearSpaceMapGridMaterialCmd} ClearSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearSpaceMapGridMaterialCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ClearSpaceMapGridMaterialCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.gridArr && message.gridArr.length))
                        message.gridArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.gridArr.push(reader.int32());
                    } else
                        message.gridArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClearSpaceMapGridMaterialCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ClearSpaceMapGridMaterialCmd} ClearSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearSpaceMapGridMaterialCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClearSpaceMapGridMaterialCmd message.
         * @function verify
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClearSpaceMapGridMaterialCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.gridArr != null && message.hasOwnProperty("gridArr")) {
                if (!Array.isArray(message.gridArr))
                    return "gridArr: array expected";
                for (var i = 0; i < message.gridArr.length; ++i)
                    if (!$util.isInteger(message.gridArr[i]))
                        return "gridArr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ClearSpaceMapGridMaterialCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ClearSpaceMapGridMaterialCmd} ClearSpaceMapGridMaterialCmd
         */
        ClearSpaceMapGridMaterialCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ClearSpaceMapGridMaterialCmd)
                return object;
            var message = new $root.pb.ClearSpaceMapGridMaterialCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.gridArr) {
                if (!Array.isArray(object.gridArr))
                    throw TypeError(".pb.ClearSpaceMapGridMaterialCmd.gridArr: array expected");
                message.gridArr = [];
                for (var i = 0; i < object.gridArr.length; ++i)
                    message.gridArr[i] = object.gridArr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ClearSpaceMapGridMaterialCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @static
         * @param {pb.ClearSpaceMapGridMaterialCmd} message ClearSpaceMapGridMaterialCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearSpaceMapGridMaterialCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.gridArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.gridArr && message.gridArr.length) {
                object.gridArr = [];
                for (var j = 0; j < message.gridArr.length; ++j)
                    object.gridArr[j] = message.gridArr[j];
            }
            return object;
        };

        /**
         * Converts this ClearSpaceMapGridMaterialCmd to JSON.
         * @function toJSON
         * @memberof pb.ClearSpaceMapGridMaterialCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearSpaceMapGridMaterialCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearSpaceMapGridMaterialCmd;
    })();

    pb.InitGameCmd = (function() {

        /**
         * Properties of an InitGameCmd.
         * @memberof pb
         * @interface IInitGameCmd
         * @property {string|null} [eventId] InitGameCmd eventId
         * @property {string|null} [spaceId] InitGameCmd spaceId
         * @property {string|null} [name] InitGameCmd name
         * @property {string|null} [url] InitGameCmd url
         * @property {string|null} [icon] InitGameCmd icon
         * @property {string|null} [describe] InitGameCmd describe
         */

        /**
         * Constructs a new InitGameCmd.
         * @memberof pb
         * @classdesc Represents an InitGameCmd.
         * @implements IInitGameCmd
         * @constructor
         * @param {pb.IInitGameCmd=} [properties] Properties to set
         */
        function InitGameCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitGameCmd eventId.
         * @member {string} eventId
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.eventId = "";

        /**
         * InitGameCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.spaceId = "";

        /**
         * InitGameCmd name.
         * @member {string} name
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.name = "";

        /**
         * InitGameCmd url.
         * @member {string} url
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.url = "";

        /**
         * InitGameCmd icon.
         * @member {string} icon
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.icon = "";

        /**
         * InitGameCmd describe.
         * @member {string} describe
         * @memberof pb.InitGameCmd
         * @instance
         */
        InitGameCmd.prototype.describe = "";

        /**
         * Creates a new InitGameCmd instance using the specified properties.
         * @function create
         * @memberof pb.InitGameCmd
         * @static
         * @param {pb.IInitGameCmd=} [properties] Properties to set
         * @returns {pb.InitGameCmd} InitGameCmd instance
         */
        InitGameCmd.create = function create(properties) {
            return new InitGameCmd(properties);
        };

        /**
         * Encodes the specified InitGameCmd message. Does not implicitly {@link pb.InitGameCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.InitGameCmd
         * @static
         * @param {pb.IInitGameCmd} message InitGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitGameCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.describe != null && Object.hasOwnProperty.call(message, "describe"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.describe);
            return writer;
        };

        /**
         * Encodes the specified InitGameCmd message, length delimited. Does not implicitly {@link pb.InitGameCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.InitGameCmd
         * @static
         * @param {pb.IInitGameCmd} message InitGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitGameCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitGameCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.InitGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.InitGameCmd} InitGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitGameCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.InitGameCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.icon = reader.string();
                    break;
                case 6:
                    message.describe = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitGameCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.InitGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.InitGameCmd} InitGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitGameCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitGameCmd message.
         * @function verify
         * @memberof pb.InitGameCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitGameCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.describe != null && message.hasOwnProperty("describe"))
                if (!$util.isString(message.describe))
                    return "describe: string expected";
            return null;
        };

        /**
         * Creates an InitGameCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.InitGameCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.InitGameCmd} InitGameCmd
         */
        InitGameCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.InitGameCmd)
                return object;
            var message = new $root.pb.InitGameCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.describe != null)
                message.describe = String(object.describe);
            return message;
        };

        /**
         * Creates a plain object from an InitGameCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.InitGameCmd
         * @static
         * @param {pb.InitGameCmd} message InitGameCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitGameCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.name = "";
                object.url = "";
                object.icon = "";
                object.describe = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.describe != null && message.hasOwnProperty("describe"))
                object.describe = message.describe;
            return object;
        };

        /**
         * Converts this InitGameCmd to JSON.
         * @function toJSON
         * @memberof pb.InitGameCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitGameCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitGameCmd;
    })();

    pb.PreStartGameCmd = (function() {

        /**
         * Properties of a PreStartGameCmd.
         * @memberof pb
         * @interface IPreStartGameCmd
         * @property {string|null} [eventId] PreStartGameCmd eventId
         * @property {string|null} [spaceId] PreStartGameCmd spaceId
         * @property {number|null} [code] PreStartGameCmd code
         * @property {string|null} [message] PreStartGameCmd message
         */

        /**
         * Constructs a new PreStartGameCmd.
         * @memberof pb
         * @classdesc Represents a PreStartGameCmd.
         * @implements IPreStartGameCmd
         * @constructor
         * @param {pb.IPreStartGameCmd=} [properties] Properties to set
         */
        function PreStartGameCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreStartGameCmd eventId.
         * @member {string} eventId
         * @memberof pb.PreStartGameCmd
         * @instance
         */
        PreStartGameCmd.prototype.eventId = "";

        /**
         * PreStartGameCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.PreStartGameCmd
         * @instance
         */
        PreStartGameCmd.prototype.spaceId = "";

        /**
         * PreStartGameCmd code.
         * @member {number} code
         * @memberof pb.PreStartGameCmd
         * @instance
         */
        PreStartGameCmd.prototype.code = 0;

        /**
         * PreStartGameCmd message.
         * @member {string} message
         * @memberof pb.PreStartGameCmd
         * @instance
         */
        PreStartGameCmd.prototype.message = "";

        /**
         * Creates a new PreStartGameCmd instance using the specified properties.
         * @function create
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {pb.IPreStartGameCmd=} [properties] Properties to set
         * @returns {pb.PreStartGameCmd} PreStartGameCmd instance
         */
        PreStartGameCmd.create = function create(properties) {
            return new PreStartGameCmd(properties);
        };

        /**
         * Encodes the specified PreStartGameCmd message. Does not implicitly {@link pb.PreStartGameCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {pb.IPreStartGameCmd} message PreStartGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreStartGameCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified PreStartGameCmd message, length delimited. Does not implicitly {@link pb.PreStartGameCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {pb.IPreStartGameCmd} message PreStartGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreStartGameCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreStartGameCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PreStartGameCmd} PreStartGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreStartGameCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PreStartGameCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreStartGameCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PreStartGameCmd} PreStartGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreStartGameCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreStartGameCmd message.
         * @function verify
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreStartGameCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a PreStartGameCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PreStartGameCmd} PreStartGameCmd
         */
        PreStartGameCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PreStartGameCmd)
                return object;
            var message = new $root.pb.PreStartGameCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a PreStartGameCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PreStartGameCmd
         * @static
         * @param {pb.PreStartGameCmd} message PreStartGameCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreStartGameCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.code = 0;
                object.message = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this PreStartGameCmd to JSON.
         * @function toJSON
         * @memberof pb.PreStartGameCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreStartGameCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreStartGameCmd;
    })();

    pb.GameCountdownCmd = (function() {

        /**
         * Properties of a GameCountdownCmd.
         * @memberof pb
         * @interface IGameCountdownCmd
         * @property {string|null} [eventId] GameCountdownCmd eventId
         * @property {string|null} [spaceId] GameCountdownCmd spaceId
         * @property {number|null} [countdown] GameCountdownCmd countdown
         */

        /**
         * Constructs a new GameCountdownCmd.
         * @memberof pb
         * @classdesc Represents a GameCountdownCmd.
         * @implements IGameCountdownCmd
         * @constructor
         * @param {pb.IGameCountdownCmd=} [properties] Properties to set
         */
        function GameCountdownCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameCountdownCmd eventId.
         * @member {string} eventId
         * @memberof pb.GameCountdownCmd
         * @instance
         */
        GameCountdownCmd.prototype.eventId = "";

        /**
         * GameCountdownCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GameCountdownCmd
         * @instance
         */
        GameCountdownCmd.prototype.spaceId = "";

        /**
         * GameCountdownCmd countdown.
         * @member {number} countdown
         * @memberof pb.GameCountdownCmd
         * @instance
         */
        GameCountdownCmd.prototype.countdown = 0;

        /**
         * Creates a new GameCountdownCmd instance using the specified properties.
         * @function create
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {pb.IGameCountdownCmd=} [properties] Properties to set
         * @returns {pb.GameCountdownCmd} GameCountdownCmd instance
         */
        GameCountdownCmd.create = function create(properties) {
            return new GameCountdownCmd(properties);
        };

        /**
         * Encodes the specified GameCountdownCmd message. Does not implicitly {@link pb.GameCountdownCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {pb.IGameCountdownCmd} message GameCountdownCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCountdownCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.countdown);
            return writer;
        };

        /**
         * Encodes the specified GameCountdownCmd message, length delimited. Does not implicitly {@link pb.GameCountdownCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {pb.IGameCountdownCmd} message GameCountdownCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCountdownCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameCountdownCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameCountdownCmd} GameCountdownCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCountdownCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameCountdownCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.countdown = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameCountdownCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameCountdownCmd} GameCountdownCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCountdownCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameCountdownCmd message.
         * @function verify
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameCountdownCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.countdown != null && message.hasOwnProperty("countdown"))
                if (!$util.isInteger(message.countdown))
                    return "countdown: integer expected";
            return null;
        };

        /**
         * Creates a GameCountdownCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameCountdownCmd} GameCountdownCmd
         */
        GameCountdownCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameCountdownCmd)
                return object;
            var message = new $root.pb.GameCountdownCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.countdown != null)
                message.countdown = object.countdown | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameCountdownCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameCountdownCmd
         * @static
         * @param {pb.GameCountdownCmd} message GameCountdownCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameCountdownCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.countdown = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.countdown != null && message.hasOwnProperty("countdown"))
                object.countdown = message.countdown;
            return object;
        };

        /**
         * Converts this GameCountdownCmd to JSON.
         * @function toJSON
         * @memberof pb.GameCountdownCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameCountdownCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCountdownCmd;
    })();

    pb.TriggerInteractiveEffectCmd = (function() {

        /**
         * Properties of a TriggerInteractiveEffectCmd.
         * @memberof pb
         * @interface ITriggerInteractiveEffectCmd
         * @property {string|null} [eventId] TriggerInteractiveEffectCmd eventId
         * @property {string|null} [spaceId] TriggerInteractiveEffectCmd spaceId
         * @property {string|null} [pid] TriggerInteractiveEffectCmd pid
         * @property {string|null} [id] TriggerInteractiveEffectCmd id
         * @property {number|null} [effect] TriggerInteractiveEffectCmd effect
         */

        /**
         * Constructs a new TriggerInteractiveEffectCmd.
         * @memberof pb
         * @classdesc Represents a TriggerInteractiveEffectCmd.
         * @implements ITriggerInteractiveEffectCmd
         * @constructor
         * @param {pb.ITriggerInteractiveEffectCmd=} [properties] Properties to set
         */
        function TriggerInteractiveEffectCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TriggerInteractiveEffectCmd eventId.
         * @member {string} eventId
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         */
        TriggerInteractiveEffectCmd.prototype.eventId = "";

        /**
         * TriggerInteractiveEffectCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         */
        TriggerInteractiveEffectCmd.prototype.spaceId = "";

        /**
         * TriggerInteractiveEffectCmd pid.
         * @member {string} pid
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         */
        TriggerInteractiveEffectCmd.prototype.pid = "";

        /**
         * TriggerInteractiveEffectCmd id.
         * @member {string} id
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         */
        TriggerInteractiveEffectCmd.prototype.id = "";

        /**
         * TriggerInteractiveEffectCmd effect.
         * @member {number} effect
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         */
        TriggerInteractiveEffectCmd.prototype.effect = 0;

        /**
         * Creates a new TriggerInteractiveEffectCmd instance using the specified properties.
         * @function create
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {pb.ITriggerInteractiveEffectCmd=} [properties] Properties to set
         * @returns {pb.TriggerInteractiveEffectCmd} TriggerInteractiveEffectCmd instance
         */
        TriggerInteractiveEffectCmd.create = function create(properties) {
            return new TriggerInteractiveEffectCmd(properties);
        };

        /**
         * Encodes the specified TriggerInteractiveEffectCmd message. Does not implicitly {@link pb.TriggerInteractiveEffectCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {pb.ITriggerInteractiveEffectCmd} message TriggerInteractiveEffectCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TriggerInteractiveEffectCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            if (message.effect != null && Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.effect);
            return writer;
        };

        /**
         * Encodes the specified TriggerInteractiveEffectCmd message, length delimited. Does not implicitly {@link pb.TriggerInteractiveEffectCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {pb.ITriggerInteractiveEffectCmd} message TriggerInteractiveEffectCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TriggerInteractiveEffectCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TriggerInteractiveEffectCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TriggerInteractiveEffectCmd} TriggerInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TriggerInteractiveEffectCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TriggerInteractiveEffectCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.id = reader.string();
                    break;
                case 5:
                    message.effect = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TriggerInteractiveEffectCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TriggerInteractiveEffectCmd} TriggerInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TriggerInteractiveEffectCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TriggerInteractiveEffectCmd message.
         * @function verify
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TriggerInteractiveEffectCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.effect != null && message.hasOwnProperty("effect"))
                if (!$util.isInteger(message.effect))
                    return "effect: integer expected";
            return null;
        };

        /**
         * Creates a TriggerInteractiveEffectCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TriggerInteractiveEffectCmd} TriggerInteractiveEffectCmd
         */
        TriggerInteractiveEffectCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TriggerInteractiveEffectCmd)
                return object;
            var message = new $root.pb.TriggerInteractiveEffectCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.id != null)
                message.id = String(object.id);
            if (object.effect != null)
                message.effect = object.effect | 0;
            return message;
        };

        /**
         * Creates a plain object from a TriggerInteractiveEffectCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TriggerInteractiveEffectCmd
         * @static
         * @param {pb.TriggerInteractiveEffectCmd} message TriggerInteractiveEffectCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TriggerInteractiveEffectCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.id = "";
                object.effect = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.effect != null && message.hasOwnProperty("effect"))
                object.effect = message.effect;
            return object;
        };

        /**
         * Converts this TriggerInteractiveEffectCmd to JSON.
         * @function toJSON
         * @memberof pb.TriggerInteractiveEffectCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TriggerInteractiveEffectCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TriggerInteractiveEffectCmd;
    })();

    pb.UpdateGameRankListCmd = (function() {

        /**
         * Properties of an UpdateGameRankListCmd.
         * @memberof pb
         * @interface IUpdateGameRankListCmd
         * @property {string|null} [eventId] UpdateGameRankListCmd eventId
         * @property {string|null} [spaceId] UpdateGameRankListCmd spaceId
         * @property {string|null} [type] UpdateGameRankListCmd type
         * @property {Array.<pb.IRankInfo>|null} [rankInfo] UpdateGameRankListCmd rankInfo
         */

        /**
         * Constructs a new UpdateGameRankListCmd.
         * @memberof pb
         * @classdesc Represents an UpdateGameRankListCmd.
         * @implements IUpdateGameRankListCmd
         * @constructor
         * @param {pb.IUpdateGameRankListCmd=} [properties] Properties to set
         */
        function UpdateGameRankListCmd(properties) {
            this.rankInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGameRankListCmd eventId.
         * @member {string} eventId
         * @memberof pb.UpdateGameRankListCmd
         * @instance
         */
        UpdateGameRankListCmd.prototype.eventId = "";

        /**
         * UpdateGameRankListCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.UpdateGameRankListCmd
         * @instance
         */
        UpdateGameRankListCmd.prototype.spaceId = "";

        /**
         * UpdateGameRankListCmd type.
         * @member {string} type
         * @memberof pb.UpdateGameRankListCmd
         * @instance
         */
        UpdateGameRankListCmd.prototype.type = "";

        /**
         * UpdateGameRankListCmd rankInfo.
         * @member {Array.<pb.IRankInfo>} rankInfo
         * @memberof pb.UpdateGameRankListCmd
         * @instance
         */
        UpdateGameRankListCmd.prototype.rankInfo = $util.emptyArray;

        /**
         * Creates a new UpdateGameRankListCmd instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {pb.IUpdateGameRankListCmd=} [properties] Properties to set
         * @returns {pb.UpdateGameRankListCmd} UpdateGameRankListCmd instance
         */
        UpdateGameRankListCmd.create = function create(properties) {
            return new UpdateGameRankListCmd(properties);
        };

        /**
         * Encodes the specified UpdateGameRankListCmd message. Does not implicitly {@link pb.UpdateGameRankListCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {pb.IUpdateGameRankListCmd} message UpdateGameRankListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameRankListCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.rankInfo != null && message.rankInfo.length)
                for (var i = 0; i < message.rankInfo.length; ++i)
                    $root.pb.RankInfo.encode(message.rankInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateGameRankListCmd message, length delimited. Does not implicitly {@link pb.UpdateGameRankListCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {pb.IUpdateGameRankListCmd} message UpdateGameRankListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameRankListCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGameRankListCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGameRankListCmd} UpdateGameRankListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameRankListCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGameRankListCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    if (!(message.rankInfo && message.rankInfo.length))
                        message.rankInfo = [];
                    message.rankInfo.push($root.pb.RankInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGameRankListCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGameRankListCmd} UpdateGameRankListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameRankListCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGameRankListCmd message.
         * @function verify
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGameRankListCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.rankInfo != null && message.hasOwnProperty("rankInfo")) {
                if (!Array.isArray(message.rankInfo))
                    return "rankInfo: array expected";
                for (var i = 0; i < message.rankInfo.length; ++i) {
                    var error = $root.pb.RankInfo.verify(message.rankInfo[i]);
                    if (error)
                        return "rankInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateGameRankListCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGameRankListCmd} UpdateGameRankListCmd
         */
        UpdateGameRankListCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGameRankListCmd)
                return object;
            var message = new $root.pb.UpdateGameRankListCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.rankInfo) {
                if (!Array.isArray(object.rankInfo))
                    throw TypeError(".pb.UpdateGameRankListCmd.rankInfo: array expected");
                message.rankInfo = [];
                for (var i = 0; i < object.rankInfo.length; ++i) {
                    if (typeof object.rankInfo[i] !== "object")
                        throw TypeError(".pb.UpdateGameRankListCmd.rankInfo: object expected");
                    message.rankInfo[i] = $root.pb.RankInfo.fromObject(object.rankInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateGameRankListCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGameRankListCmd
         * @static
         * @param {pb.UpdateGameRankListCmd} message UpdateGameRankListCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGameRankListCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rankInfo = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.type = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.rankInfo && message.rankInfo.length) {
                object.rankInfo = [];
                for (var j = 0; j < message.rankInfo.length; ++j)
                    object.rankInfo[j] = $root.pb.RankInfo.toObject(message.rankInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateGameRankListCmd to JSON.
         * @function toJSON
         * @memberof pb.UpdateGameRankListCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGameRankListCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateGameRankListCmd;
    })();

    pb.RankInfo = (function() {

        /**
         * Properties of a RankInfo.
         * @memberof pb
         * @interface IRankInfo
         * @property {string|null} [pid] RankInfo pid
         * @property {number|Long|null} [time] RankInfo time
         */

        /**
         * Constructs a new RankInfo.
         * @memberof pb
         * @classdesc Represents a RankInfo.
         * @implements IRankInfo
         * @constructor
         * @param {pb.IRankInfo=} [properties] Properties to set
         */
        function RankInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankInfo pid.
         * @member {string} pid
         * @memberof pb.RankInfo
         * @instance
         */
        RankInfo.prototype.pid = "";

        /**
         * RankInfo time.
         * @member {number|Long} time
         * @memberof pb.RankInfo
         * @instance
         */
        RankInfo.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RankInfo instance using the specified properties.
         * @function create
         * @memberof pb.RankInfo
         * @static
         * @param {pb.IRankInfo=} [properties] Properties to set
         * @returns {pb.RankInfo} RankInfo instance
         */
        RankInfo.create = function create(properties) {
            return new RankInfo(properties);
        };

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link pb.RankInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.RankInfo
         * @static
         * @param {pb.IRankInfo} message RankInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pid);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link pb.RankInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RankInfo
         * @static
         * @param {pb.IRankInfo} message RankInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RankInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RankInfo} RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RankInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.string();
                    break;
                case 2:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RankInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RankInfo} RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankInfo message.
         * @function verify
         * @memberof pb.RankInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a RankInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RankInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RankInfo} RankInfo
         */
        RankInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RankInfo)
                return object;
            var message = new $root.pb.RankInfo();
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RankInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RankInfo
         * @static
         * @param {pb.RankInfo} message RankInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this RankInfo to JSON.
         * @function toJSON
         * @memberof pb.RankInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankInfo;
    })();

    pb.FinishGameCmd = (function() {

        /**
         * Properties of a FinishGameCmd.
         * @memberof pb
         * @interface IFinishGameCmd
         * @property {string|null} [eventId] FinishGameCmd eventId
         * @property {string|null} [spaceId] FinishGameCmd spaceId
         * @property {string|null} [pid] FinishGameCmd pid
         */

        /**
         * Constructs a new FinishGameCmd.
         * @memberof pb
         * @classdesc Represents a FinishGameCmd.
         * @implements IFinishGameCmd
         * @constructor
         * @param {pb.IFinishGameCmd=} [properties] Properties to set
         */
        function FinishGameCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FinishGameCmd eventId.
         * @member {string} eventId
         * @memberof pb.FinishGameCmd
         * @instance
         */
        FinishGameCmd.prototype.eventId = "";

        /**
         * FinishGameCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.FinishGameCmd
         * @instance
         */
        FinishGameCmd.prototype.spaceId = "";

        /**
         * FinishGameCmd pid.
         * @member {string} pid
         * @memberof pb.FinishGameCmd
         * @instance
         */
        FinishGameCmd.prototype.pid = "";

        /**
         * Creates a new FinishGameCmd instance using the specified properties.
         * @function create
         * @memberof pb.FinishGameCmd
         * @static
         * @param {pb.IFinishGameCmd=} [properties] Properties to set
         * @returns {pb.FinishGameCmd} FinishGameCmd instance
         */
        FinishGameCmd.create = function create(properties) {
            return new FinishGameCmd(properties);
        };

        /**
         * Encodes the specified FinishGameCmd message. Does not implicitly {@link pb.FinishGameCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.FinishGameCmd
         * @static
         * @param {pb.IFinishGameCmd} message FinishGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishGameCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            return writer;
        };

        /**
         * Encodes the specified FinishGameCmd message, length delimited. Does not implicitly {@link pb.FinishGameCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FinishGameCmd
         * @static
         * @param {pb.IFinishGameCmd} message FinishGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishGameCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FinishGameCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FinishGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FinishGameCmd} FinishGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishGameCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FinishGameCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FinishGameCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FinishGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FinishGameCmd} FinishGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishGameCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FinishGameCmd message.
         * @function verify
         * @memberof pb.FinishGameCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FinishGameCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            return null;
        };

        /**
         * Creates a FinishGameCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FinishGameCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FinishGameCmd} FinishGameCmd
         */
        FinishGameCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FinishGameCmd)
                return object;
            var message = new $root.pb.FinishGameCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            return message;
        };

        /**
         * Creates a plain object from a FinishGameCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FinishGameCmd
         * @static
         * @param {pb.FinishGameCmd} message FinishGameCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FinishGameCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            return object;
        };

        /**
         * Converts this FinishGameCmd to JSON.
         * @function toJSON
         * @memberof pb.FinishGameCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FinishGameCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FinishGameCmd;
    })();

    pb.StopGameCmd = (function() {

        /**
         * Properties of a StopGameCmd.
         * @memberof pb
         * @interface IStopGameCmd
         * @property {string|null} [eventId] StopGameCmd eventId
         * @property {string|null} [spaceId] StopGameCmd spaceId
         */

        /**
         * Constructs a new StopGameCmd.
         * @memberof pb
         * @classdesc Represents a StopGameCmd.
         * @implements IStopGameCmd
         * @constructor
         * @param {pb.IStopGameCmd=} [properties] Properties to set
         */
        function StopGameCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopGameCmd eventId.
         * @member {string} eventId
         * @memberof pb.StopGameCmd
         * @instance
         */
        StopGameCmd.prototype.eventId = "";

        /**
         * StopGameCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.StopGameCmd
         * @instance
         */
        StopGameCmd.prototype.spaceId = "";

        /**
         * Creates a new StopGameCmd instance using the specified properties.
         * @function create
         * @memberof pb.StopGameCmd
         * @static
         * @param {pb.IStopGameCmd=} [properties] Properties to set
         * @returns {pb.StopGameCmd} StopGameCmd instance
         */
        StopGameCmd.create = function create(properties) {
            return new StopGameCmd(properties);
        };

        /**
         * Encodes the specified StopGameCmd message. Does not implicitly {@link pb.StopGameCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.StopGameCmd
         * @static
         * @param {pb.IStopGameCmd} message StopGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopGameCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            return writer;
        };

        /**
         * Encodes the specified StopGameCmd message, length delimited. Does not implicitly {@link pb.StopGameCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.StopGameCmd
         * @static
         * @param {pb.IStopGameCmd} message StopGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopGameCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopGameCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StopGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.StopGameCmd} StopGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopGameCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.StopGameCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StopGameCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.StopGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.StopGameCmd} StopGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopGameCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopGameCmd message.
         * @function verify
         * @memberof pb.StopGameCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopGameCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            return null;
        };

        /**
         * Creates a StopGameCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.StopGameCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.StopGameCmd} StopGameCmd
         */
        StopGameCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.StopGameCmd)
                return object;
            var message = new $root.pb.StopGameCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            return message;
        };

        /**
         * Creates a plain object from a StopGameCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.StopGameCmd
         * @static
         * @param {pb.StopGameCmd} message StopGameCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopGameCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            return object;
        };

        /**
         * Converts this StopGameCmd to JSON.
         * @function toJSON
         * @memberof pb.StopGameCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopGameCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StopGameCmd;
    })();

    pb.FinishGameNotice = (function() {

        /**
         * Properties of a FinishGameNotice.
         * @memberof pb
         * @interface IFinishGameNotice
         * @property {string|null} [pid] FinishGameNotice pid
         * @property {number|Long|null} [time] FinishGameNotice time
         */

        /**
         * Constructs a new FinishGameNotice.
         * @memberof pb
         * @classdesc Represents a FinishGameNotice.
         * @implements IFinishGameNotice
         * @constructor
         * @param {pb.IFinishGameNotice=} [properties] Properties to set
         */
        function FinishGameNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FinishGameNotice pid.
         * @member {string} pid
         * @memberof pb.FinishGameNotice
         * @instance
         */
        FinishGameNotice.prototype.pid = "";

        /**
         * FinishGameNotice time.
         * @member {number|Long} time
         * @memberof pb.FinishGameNotice
         * @instance
         */
        FinishGameNotice.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FinishGameNotice instance using the specified properties.
         * @function create
         * @memberof pb.FinishGameNotice
         * @static
         * @param {pb.IFinishGameNotice=} [properties] Properties to set
         * @returns {pb.FinishGameNotice} FinishGameNotice instance
         */
        FinishGameNotice.create = function create(properties) {
            return new FinishGameNotice(properties);
        };

        /**
         * Encodes the specified FinishGameNotice message. Does not implicitly {@link pb.FinishGameNotice.verify|verify} messages.
         * @function encode
         * @memberof pb.FinishGameNotice
         * @static
         * @param {pb.IFinishGameNotice} message FinishGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishGameNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pid);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified FinishGameNotice message, length delimited. Does not implicitly {@link pb.FinishGameNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FinishGameNotice
         * @static
         * @param {pb.IFinishGameNotice} message FinishGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishGameNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FinishGameNotice message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FinishGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FinishGameNotice} FinishGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishGameNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FinishGameNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.string();
                    break;
                case 2:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FinishGameNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FinishGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FinishGameNotice} FinishGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishGameNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FinishGameNotice message.
         * @function verify
         * @memberof pb.FinishGameNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FinishGameNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a FinishGameNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FinishGameNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FinishGameNotice} FinishGameNotice
         */
        FinishGameNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FinishGameNotice)
                return object;
            var message = new $root.pb.FinishGameNotice();
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FinishGameNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FinishGameNotice
         * @static
         * @param {pb.FinishGameNotice} message FinishGameNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FinishGameNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this FinishGameNotice to JSON.
         * @function toJSON
         * @memberof pb.FinishGameNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FinishGameNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FinishGameNotice;
    })();

    pb.GameInteractiveEffectCmd = (function() {

        /**
         * Properties of a GameInteractiveEffectCmd.
         * @memberof pb
         * @interface IGameInteractiveEffectCmd
         * @property {string|null} [eventId] GameInteractiveEffectCmd eventId
         * @property {string|null} [spaceId] GameInteractiveEffectCmd spaceId
         * @property {string|null} [pid] GameInteractiveEffectCmd pid
         * @property {string|null} [effect] GameInteractiveEffectCmd effect
         */

        /**
         * Constructs a new GameInteractiveEffectCmd.
         * @memberof pb
         * @classdesc Represents a GameInteractiveEffectCmd.
         * @implements IGameInteractiveEffectCmd
         * @constructor
         * @param {pb.IGameInteractiveEffectCmd=} [properties] Properties to set
         */
        function GameInteractiveEffectCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInteractiveEffectCmd eventId.
         * @member {string} eventId
         * @memberof pb.GameInteractiveEffectCmd
         * @instance
         */
        GameInteractiveEffectCmd.prototype.eventId = "";

        /**
         * GameInteractiveEffectCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GameInteractiveEffectCmd
         * @instance
         */
        GameInteractiveEffectCmd.prototype.spaceId = "";

        /**
         * GameInteractiveEffectCmd pid.
         * @member {string} pid
         * @memberof pb.GameInteractiveEffectCmd
         * @instance
         */
        GameInteractiveEffectCmd.prototype.pid = "";

        /**
         * GameInteractiveEffectCmd effect.
         * @member {string} effect
         * @memberof pb.GameInteractiveEffectCmd
         * @instance
         */
        GameInteractiveEffectCmd.prototype.effect = "";

        /**
         * Creates a new GameInteractiveEffectCmd instance using the specified properties.
         * @function create
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {pb.IGameInteractiveEffectCmd=} [properties] Properties to set
         * @returns {pb.GameInteractiveEffectCmd} GameInteractiveEffectCmd instance
         */
        GameInteractiveEffectCmd.create = function create(properties) {
            return new GameInteractiveEffectCmd(properties);
        };

        /**
         * Encodes the specified GameInteractiveEffectCmd message. Does not implicitly {@link pb.GameInteractiveEffectCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {pb.IGameInteractiveEffectCmd} message GameInteractiveEffectCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInteractiveEffectCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.effect != null && Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.effect);
            return writer;
        };

        /**
         * Encodes the specified GameInteractiveEffectCmd message, length delimited. Does not implicitly {@link pb.GameInteractiveEffectCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {pb.IGameInteractiveEffectCmd} message GameInteractiveEffectCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInteractiveEffectCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInteractiveEffectCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameInteractiveEffectCmd} GameInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInteractiveEffectCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameInteractiveEffectCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 5:
                    message.effect = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameInteractiveEffectCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameInteractiveEffectCmd} GameInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInteractiveEffectCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInteractiveEffectCmd message.
         * @function verify
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInteractiveEffectCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.effect != null && message.hasOwnProperty("effect"))
                if (!$util.isString(message.effect))
                    return "effect: string expected";
            return null;
        };

        /**
         * Creates a GameInteractiveEffectCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameInteractiveEffectCmd} GameInteractiveEffectCmd
         */
        GameInteractiveEffectCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameInteractiveEffectCmd)
                return object;
            var message = new $root.pb.GameInteractiveEffectCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.effect != null)
                message.effect = String(object.effect);
            return message;
        };

        /**
         * Creates a plain object from a GameInteractiveEffectCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameInteractiveEffectCmd
         * @static
         * @param {pb.GameInteractiveEffectCmd} message GameInteractiveEffectCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInteractiveEffectCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.effect = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.effect != null && message.hasOwnProperty("effect"))
                object.effect = message.effect;
            return object;
        };

        /**
         * Converts this GameInteractiveEffectCmd to JSON.
         * @function toJSON
         * @memberof pb.GameInteractiveEffectCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInteractiveEffectCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInteractiveEffectCmd;
    })();

    pb.GameTriggerSpecialAreaNotice = (function() {

        /**
         * Properties of a GameTriggerSpecialAreaNotice.
         * @memberof pb
         * @interface IGameTriggerSpecialAreaNotice
         * @property {string|null} [pid] GameTriggerSpecialAreaNotice pid
         * @property {string|null} [name] GameTriggerSpecialAreaNotice name
         */

        /**
         * Constructs a new GameTriggerSpecialAreaNotice.
         * @memberof pb
         * @classdesc Represents a GameTriggerSpecialAreaNotice.
         * @implements IGameTriggerSpecialAreaNotice
         * @constructor
         * @param {pb.IGameTriggerSpecialAreaNotice=} [properties] Properties to set
         */
        function GameTriggerSpecialAreaNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameTriggerSpecialAreaNotice pid.
         * @member {string} pid
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @instance
         */
        GameTriggerSpecialAreaNotice.prototype.pid = "";

        /**
         * GameTriggerSpecialAreaNotice name.
         * @member {string} name
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @instance
         */
        GameTriggerSpecialAreaNotice.prototype.name = "";

        /**
         * Creates a new GameTriggerSpecialAreaNotice instance using the specified properties.
         * @function create
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {pb.IGameTriggerSpecialAreaNotice=} [properties] Properties to set
         * @returns {pb.GameTriggerSpecialAreaNotice} GameTriggerSpecialAreaNotice instance
         */
        GameTriggerSpecialAreaNotice.create = function create(properties) {
            return new GameTriggerSpecialAreaNotice(properties);
        };

        /**
         * Encodes the specified GameTriggerSpecialAreaNotice message. Does not implicitly {@link pb.GameTriggerSpecialAreaNotice.verify|verify} messages.
         * @function encode
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {pb.IGameTriggerSpecialAreaNotice} message GameTriggerSpecialAreaNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTriggerSpecialAreaNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified GameTriggerSpecialAreaNotice message, length delimited. Does not implicitly {@link pb.GameTriggerSpecialAreaNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {pb.IGameTriggerSpecialAreaNotice} message GameTriggerSpecialAreaNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTriggerSpecialAreaNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameTriggerSpecialAreaNotice message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameTriggerSpecialAreaNotice} GameTriggerSpecialAreaNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTriggerSpecialAreaNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameTriggerSpecialAreaNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameTriggerSpecialAreaNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameTriggerSpecialAreaNotice} GameTriggerSpecialAreaNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTriggerSpecialAreaNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameTriggerSpecialAreaNotice message.
         * @function verify
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameTriggerSpecialAreaNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a GameTriggerSpecialAreaNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameTriggerSpecialAreaNotice} GameTriggerSpecialAreaNotice
         */
        GameTriggerSpecialAreaNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameTriggerSpecialAreaNotice)
                return object;
            var message = new $root.pb.GameTriggerSpecialAreaNotice();
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GameTriggerSpecialAreaNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @static
         * @param {pb.GameTriggerSpecialAreaNotice} message GameTriggerSpecialAreaNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTriggerSpecialAreaNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = "";
                object.name = "";
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GameTriggerSpecialAreaNotice to JSON.
         * @function toJSON
         * @memberof pb.GameTriggerSpecialAreaNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTriggerSpecialAreaNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameTriggerSpecialAreaNotice;
    })();

    pb.GameTriggerInteractiveNotice = (function() {

        /**
         * Properties of a GameTriggerInteractiveNotice.
         * @memberof pb
         * @interface IGameTriggerInteractiveNotice
         * @property {string|null} [pid] GameTriggerInteractiveNotice pid
         * @property {string|null} [name] GameTriggerInteractiveNotice name
         * @property {string|null} [call] GameTriggerInteractiveNotice call
         * @property {string|null} [param] GameTriggerInteractiveNotice param
         */

        /**
         * Constructs a new GameTriggerInteractiveNotice.
         * @memberof pb
         * @classdesc Represents a GameTriggerInteractiveNotice.
         * @implements IGameTriggerInteractiveNotice
         * @constructor
         * @param {pb.IGameTriggerInteractiveNotice=} [properties] Properties to set
         */
        function GameTriggerInteractiveNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameTriggerInteractiveNotice pid.
         * @member {string} pid
         * @memberof pb.GameTriggerInteractiveNotice
         * @instance
         */
        GameTriggerInteractiveNotice.prototype.pid = "";

        /**
         * GameTriggerInteractiveNotice name.
         * @member {string} name
         * @memberof pb.GameTriggerInteractiveNotice
         * @instance
         */
        GameTriggerInteractiveNotice.prototype.name = "";

        /**
         * GameTriggerInteractiveNotice call.
         * @member {string} call
         * @memberof pb.GameTriggerInteractiveNotice
         * @instance
         */
        GameTriggerInteractiveNotice.prototype.call = "";

        /**
         * GameTriggerInteractiveNotice param.
         * @member {string} param
         * @memberof pb.GameTriggerInteractiveNotice
         * @instance
         */
        GameTriggerInteractiveNotice.prototype.param = "";

        /**
         * Creates a new GameTriggerInteractiveNotice instance using the specified properties.
         * @function create
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {pb.IGameTriggerInteractiveNotice=} [properties] Properties to set
         * @returns {pb.GameTriggerInteractiveNotice} GameTriggerInteractiveNotice instance
         */
        GameTriggerInteractiveNotice.create = function create(properties) {
            return new GameTriggerInteractiveNotice(properties);
        };

        /**
         * Encodes the specified GameTriggerInteractiveNotice message. Does not implicitly {@link pb.GameTriggerInteractiveNotice.verify|verify} messages.
         * @function encode
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {pb.IGameTriggerInteractiveNotice} message GameTriggerInteractiveNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTriggerInteractiveNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.call != null && Object.hasOwnProperty.call(message, "call"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.call);
            if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.param);
            return writer;
        };

        /**
         * Encodes the specified GameTriggerInteractiveNotice message, length delimited. Does not implicitly {@link pb.GameTriggerInteractiveNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {pb.IGameTriggerInteractiveNotice} message GameTriggerInteractiveNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTriggerInteractiveNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameTriggerInteractiveNotice message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameTriggerInteractiveNotice} GameTriggerInteractiveNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTriggerInteractiveNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameTriggerInteractiveNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.call = reader.string();
                    break;
                case 4:
                    message.param = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameTriggerInteractiveNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameTriggerInteractiveNotice} GameTriggerInteractiveNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTriggerInteractiveNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameTriggerInteractiveNotice message.
         * @function verify
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameTriggerInteractiveNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.call != null && message.hasOwnProperty("call"))
                if (!$util.isString(message.call))
                    return "call: string expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isString(message.param))
                    return "param: string expected";
            return null;
        };

        /**
         * Creates a GameTriggerInteractiveNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameTriggerInteractiveNotice} GameTriggerInteractiveNotice
         */
        GameTriggerInteractiveNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameTriggerInteractiveNotice)
                return object;
            var message = new $root.pb.GameTriggerInteractiveNotice();
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.call != null)
                message.call = String(object.call);
            if (object.param != null)
                message.param = String(object.param);
            return message;
        };

        /**
         * Creates a plain object from a GameTriggerInteractiveNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameTriggerInteractiveNotice
         * @static
         * @param {pb.GameTriggerInteractiveNotice} message GameTriggerInteractiveNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTriggerInteractiveNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = "";
                object.name = "";
                object.call = "";
                object.param = "";
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.call != null && message.hasOwnProperty("call"))
                object.call = message.call;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this GameTriggerInteractiveNotice to JSON.
         * @function toJSON
         * @memberof pb.GameTriggerInteractiveNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTriggerInteractiveNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameTriggerInteractiveNotice;
    })();

    pb.ChangeMoveSpeedCmd = (function() {

        /**
         * Properties of a ChangeMoveSpeedCmd.
         * @memberof pb
         * @interface IChangeMoveSpeedCmd
         * @property {string|null} [eventId] ChangeMoveSpeedCmd eventId
         * @property {string|null} [spaceId] ChangeMoveSpeedCmd spaceId
         * @property {string|null} [pid] ChangeMoveSpeedCmd pid
         * @property {number|null} [speed] ChangeMoveSpeedCmd speed
         * @property {number|null} [duration] ChangeMoveSpeedCmd duration
         */

        /**
         * Constructs a new ChangeMoveSpeedCmd.
         * @memberof pb
         * @classdesc Represents a ChangeMoveSpeedCmd.
         * @implements IChangeMoveSpeedCmd
         * @constructor
         * @param {pb.IChangeMoveSpeedCmd=} [properties] Properties to set
         */
        function ChangeMoveSpeedCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeMoveSpeedCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         */
        ChangeMoveSpeedCmd.prototype.eventId = "";

        /**
         * ChangeMoveSpeedCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         */
        ChangeMoveSpeedCmd.prototype.spaceId = "";

        /**
         * ChangeMoveSpeedCmd pid.
         * @member {string} pid
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         */
        ChangeMoveSpeedCmd.prototype.pid = "";

        /**
         * ChangeMoveSpeedCmd speed.
         * @member {number} speed
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         */
        ChangeMoveSpeedCmd.prototype.speed = 0;

        /**
         * ChangeMoveSpeedCmd duration.
         * @member {number} duration
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         */
        ChangeMoveSpeedCmd.prototype.duration = 0;

        /**
         * Creates a new ChangeMoveSpeedCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {pb.IChangeMoveSpeedCmd=} [properties] Properties to set
         * @returns {pb.ChangeMoveSpeedCmd} ChangeMoveSpeedCmd instance
         */
        ChangeMoveSpeedCmd.create = function create(properties) {
            return new ChangeMoveSpeedCmd(properties);
        };

        /**
         * Encodes the specified ChangeMoveSpeedCmd message. Does not implicitly {@link pb.ChangeMoveSpeedCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {pb.IChangeMoveSpeedCmd} message ChangeMoveSpeedCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeMoveSpeedCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pid);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.speed);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.duration);
            return writer;
        };

        /**
         * Encodes the specified ChangeMoveSpeedCmd message, length delimited. Does not implicitly {@link pb.ChangeMoveSpeedCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {pb.IChangeMoveSpeedCmd} message ChangeMoveSpeedCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeMoveSpeedCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeMoveSpeedCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeMoveSpeedCmd} ChangeMoveSpeedCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeMoveSpeedCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeMoveSpeedCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.pid = reader.string();
                    break;
                case 4:
                    message.speed = reader.double();
                    break;
                case 5:
                    message.duration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeMoveSpeedCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeMoveSpeedCmd} ChangeMoveSpeedCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeMoveSpeedCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeMoveSpeedCmd message.
         * @function verify
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeMoveSpeedCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (typeof message.speed !== "number")
                    return "speed: number expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };

        /**
         * Creates a ChangeMoveSpeedCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeMoveSpeedCmd} ChangeMoveSpeedCmd
         */
        ChangeMoveSpeedCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeMoveSpeedCmd)
                return object;
            var message = new $root.pb.ChangeMoveSpeedCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.speed != null)
                message.speed = Number(object.speed);
            if (object.duration != null)
                message.duration = object.duration | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChangeMoveSpeedCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeMoveSpeedCmd
         * @static
         * @param {pb.ChangeMoveSpeedCmd} message ChangeMoveSpeedCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeMoveSpeedCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.pid = "";
                object.speed = 0;
                object.duration = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this ChangeMoveSpeedCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangeMoveSpeedCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeMoveSpeedCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeMoveSpeedCmd;
    })();

    pb.ChangeSpaceSettingCmd = (function() {

        /**
         * Properties of a ChangeSpaceSettingCmd.
         * @memberof pb
         * @interface IChangeSpaceSettingCmd
         * @property {string|null} [eventId] ChangeSpaceSettingCmd eventId
         * @property {string|null} [spaceId] ChangeSpaceSettingCmd spaceId
         * @property {boolean|null} [canHandUp] ChangeSpaceSettingCmd canHandUp
         * @property {boolean|null} [canAutoMove] ChangeSpaceSettingCmd canAutoMove
         * @property {boolean|null} [canFollow] ChangeSpaceSettingCmd canFollow
         */

        /**
         * Constructs a new ChangeSpaceSettingCmd.
         * @memberof pb
         * @classdesc Represents a ChangeSpaceSettingCmd.
         * @implements IChangeSpaceSettingCmd
         * @constructor
         * @param {pb.IChangeSpaceSettingCmd=} [properties] Properties to set
         */
        function ChangeSpaceSettingCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeSpaceSettingCmd eventId.
         * @member {string} eventId
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         */
        ChangeSpaceSettingCmd.prototype.eventId = "";

        /**
         * ChangeSpaceSettingCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         */
        ChangeSpaceSettingCmd.prototype.spaceId = "";

        /**
         * ChangeSpaceSettingCmd canHandUp.
         * @member {boolean} canHandUp
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         */
        ChangeSpaceSettingCmd.prototype.canHandUp = false;

        /**
         * ChangeSpaceSettingCmd canAutoMove.
         * @member {boolean} canAutoMove
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         */
        ChangeSpaceSettingCmd.prototype.canAutoMove = false;

        /**
         * ChangeSpaceSettingCmd canFollow.
         * @member {boolean} canFollow
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         */
        ChangeSpaceSettingCmd.prototype.canFollow = false;

        /**
         * Creates a new ChangeSpaceSettingCmd instance using the specified properties.
         * @function create
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {pb.IChangeSpaceSettingCmd=} [properties] Properties to set
         * @returns {pb.ChangeSpaceSettingCmd} ChangeSpaceSettingCmd instance
         */
        ChangeSpaceSettingCmd.create = function create(properties) {
            return new ChangeSpaceSettingCmd(properties);
        };

        /**
         * Encodes the specified ChangeSpaceSettingCmd message. Does not implicitly {@link pb.ChangeSpaceSettingCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {pb.IChangeSpaceSettingCmd} message ChangeSpaceSettingCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSpaceSettingCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.canHandUp != null && Object.hasOwnProperty.call(message, "canHandUp"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.canHandUp);
            if (message.canAutoMove != null && Object.hasOwnProperty.call(message, "canAutoMove"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canAutoMove);
            if (message.canFollow != null && Object.hasOwnProperty.call(message, "canFollow"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.canFollow);
            return writer;
        };

        /**
         * Encodes the specified ChangeSpaceSettingCmd message, length delimited. Does not implicitly {@link pb.ChangeSpaceSettingCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {pb.IChangeSpaceSettingCmd} message ChangeSpaceSettingCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSpaceSettingCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSpaceSettingCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeSpaceSettingCmd} ChangeSpaceSettingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSpaceSettingCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeSpaceSettingCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.canHandUp = reader.bool();
                    break;
                case 4:
                    message.canAutoMove = reader.bool();
                    break;
                case 5:
                    message.canFollow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeSpaceSettingCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeSpaceSettingCmd} ChangeSpaceSettingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSpaceSettingCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeSpaceSettingCmd message.
         * @function verify
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeSpaceSettingCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.canHandUp != null && message.hasOwnProperty("canHandUp"))
                if (typeof message.canHandUp !== "boolean")
                    return "canHandUp: boolean expected";
            if (message.canAutoMove != null && message.hasOwnProperty("canAutoMove"))
                if (typeof message.canAutoMove !== "boolean")
                    return "canAutoMove: boolean expected";
            if (message.canFollow != null && message.hasOwnProperty("canFollow"))
                if (typeof message.canFollow !== "boolean")
                    return "canFollow: boolean expected";
            return null;
        };

        /**
         * Creates a ChangeSpaceSettingCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeSpaceSettingCmd} ChangeSpaceSettingCmd
         */
        ChangeSpaceSettingCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeSpaceSettingCmd)
                return object;
            var message = new $root.pb.ChangeSpaceSettingCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.canHandUp != null)
                message.canHandUp = Boolean(object.canHandUp);
            if (object.canAutoMove != null)
                message.canAutoMove = Boolean(object.canAutoMove);
            if (object.canFollow != null)
                message.canFollow = Boolean(object.canFollow);
            return message;
        };

        /**
         * Creates a plain object from a ChangeSpaceSettingCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeSpaceSettingCmd
         * @static
         * @param {pb.ChangeSpaceSettingCmd} message ChangeSpaceSettingCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeSpaceSettingCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.canHandUp = false;
                object.canAutoMove = false;
                object.canFollow = false;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.canHandUp != null && message.hasOwnProperty("canHandUp"))
                object.canHandUp = message.canHandUp;
            if (message.canAutoMove != null && message.hasOwnProperty("canAutoMove"))
                object.canAutoMove = message.canAutoMove;
            if (message.canFollow != null && message.hasOwnProperty("canFollow"))
                object.canFollow = message.canFollow;
            return object;
        };

        /**
         * Converts this ChangeSpaceSettingCmd to JSON.
         * @function toJSON
         * @memberof pb.ChangeSpaceSettingCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSpaceSettingCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSpaceSettingCmd;
    })();

    pb.GetSpecialAreaPlayerInfoCmd = (function() {

        /**
         * Properties of a GetSpecialAreaPlayerInfoCmd.
         * @memberof pb
         * @interface IGetSpecialAreaPlayerInfoCmd
         * @property {string|null} [eventId] GetSpecialAreaPlayerInfoCmd eventId
         * @property {string|null} [spaceId] GetSpecialAreaPlayerInfoCmd spaceId
         * @property {number|null} [index] GetSpecialAreaPlayerInfoCmd index
         */

        /**
         * Constructs a new GetSpecialAreaPlayerInfoCmd.
         * @memberof pb
         * @classdesc Represents a GetSpecialAreaPlayerInfoCmd.
         * @implements IGetSpecialAreaPlayerInfoCmd
         * @constructor
         * @param {pb.IGetSpecialAreaPlayerInfoCmd=} [properties] Properties to set
         */
        function GetSpecialAreaPlayerInfoCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSpecialAreaPlayerInfoCmd eventId.
         * @member {string} eventId
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @instance
         */
        GetSpecialAreaPlayerInfoCmd.prototype.eventId = "";

        /**
         * GetSpecialAreaPlayerInfoCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @instance
         */
        GetSpecialAreaPlayerInfoCmd.prototype.spaceId = "";

        /**
         * GetSpecialAreaPlayerInfoCmd index.
         * @member {number} index
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @instance
         */
        GetSpecialAreaPlayerInfoCmd.prototype.index = 0;

        /**
         * Creates a new GetSpecialAreaPlayerInfoCmd instance using the specified properties.
         * @function create
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {pb.IGetSpecialAreaPlayerInfoCmd=} [properties] Properties to set
         * @returns {pb.GetSpecialAreaPlayerInfoCmd} GetSpecialAreaPlayerInfoCmd instance
         */
        GetSpecialAreaPlayerInfoCmd.create = function create(properties) {
            return new GetSpecialAreaPlayerInfoCmd(properties);
        };

        /**
         * Encodes the specified GetSpecialAreaPlayerInfoCmd message. Does not implicitly {@link pb.GetSpecialAreaPlayerInfoCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {pb.IGetSpecialAreaPlayerInfoCmd} message GetSpecialAreaPlayerInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSpecialAreaPlayerInfoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
            return writer;
        };

        /**
         * Encodes the specified GetSpecialAreaPlayerInfoCmd message, length delimited. Does not implicitly {@link pb.GetSpecialAreaPlayerInfoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {pb.IGetSpecialAreaPlayerInfoCmd} message GetSpecialAreaPlayerInfoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSpecialAreaPlayerInfoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSpecialAreaPlayerInfoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetSpecialAreaPlayerInfoCmd} GetSpecialAreaPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSpecialAreaPlayerInfoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetSpecialAreaPlayerInfoCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSpecialAreaPlayerInfoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetSpecialAreaPlayerInfoCmd} GetSpecialAreaPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSpecialAreaPlayerInfoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSpecialAreaPlayerInfoCmd message.
         * @function verify
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSpecialAreaPlayerInfoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };

        /**
         * Creates a GetSpecialAreaPlayerInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetSpecialAreaPlayerInfoCmd} GetSpecialAreaPlayerInfoCmd
         */
        GetSpecialAreaPlayerInfoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetSpecialAreaPlayerInfoCmd)
                return object;
            var message = new $root.pb.GetSpecialAreaPlayerInfoCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.index != null)
                message.index = object.index | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetSpecialAreaPlayerInfoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @static
         * @param {pb.GetSpecialAreaPlayerInfoCmd} message GetSpecialAreaPlayerInfoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSpecialAreaPlayerInfoCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.index = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this GetSpecialAreaPlayerInfoCmd to JSON.
         * @function toJSON
         * @memberof pb.GetSpecialAreaPlayerInfoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSpecialAreaPlayerInfoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSpecialAreaPlayerInfoCmd;
    })();

    pb.Pids = (function() {

        /**
         * Properties of a Pids.
         * @memberof pb
         * @interface IPids
         * @property {Array.<string>|null} [Pid] Pids Pid
         */

        /**
         * Constructs a new Pids.
         * @memberof pb
         * @classdesc Represents a Pids.
         * @implements IPids
         * @constructor
         * @param {pb.IPids=} [properties] Properties to set
         */
        function Pids(properties) {
            this.Pid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pids Pid.
         * @member {Array.<string>} Pid
         * @memberof pb.Pids
         * @instance
         */
        Pids.prototype.Pid = $util.emptyArray;

        /**
         * Creates a new Pids instance using the specified properties.
         * @function create
         * @memberof pb.Pids
         * @static
         * @param {pb.IPids=} [properties] Properties to set
         * @returns {pb.Pids} Pids instance
         */
        Pids.create = function create(properties) {
            return new Pids(properties);
        };

        /**
         * Encodes the specified Pids message. Does not implicitly {@link pb.Pids.verify|verify} messages.
         * @function encode
         * @memberof pb.Pids
         * @static
         * @param {pb.IPids} message Pids message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pids.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pid != null && message.Pid.length)
                for (var i = 0; i < message.Pid.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Pid[i]);
            return writer;
        };

        /**
         * Encodes the specified Pids message, length delimited. Does not implicitly {@link pb.Pids.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Pids
         * @static
         * @param {pb.IPids} message Pids message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pids.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pids message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Pids
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Pids} Pids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pids.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Pids();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Pid && message.Pid.length))
                        message.Pid = [];
                    message.Pid.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pids message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Pids
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Pids} Pids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pids.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pids message.
         * @function verify
         * @memberof pb.Pids
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pids.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Pid != null && message.hasOwnProperty("Pid")) {
                if (!Array.isArray(message.Pid))
                    return "Pid: array expected";
                for (var i = 0; i < message.Pid.length; ++i)
                    if (!$util.isString(message.Pid[i]))
                        return "Pid: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Pids message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Pids
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Pids} Pids
         */
        Pids.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Pids)
                return object;
            var message = new $root.pb.Pids();
            if (object.Pid) {
                if (!Array.isArray(object.Pid))
                    throw TypeError(".pb.Pids.Pid: array expected");
                message.Pid = [];
                for (var i = 0; i < object.Pid.length; ++i)
                    message.Pid[i] = String(object.Pid[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Pids message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Pids
         * @static
         * @param {pb.Pids} message Pids
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pids.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Pid = [];
            if (message.Pid && message.Pid.length) {
                object.Pid = [];
                for (var j = 0; j < message.Pid.length; ++j)
                    object.Pid[j] = message.Pid[j];
            }
            return object;
        };

        /**
         * Converts this Pids to JSON.
         * @function toJSON
         * @memberof pb.Pids
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pids.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pids;
    })();

    pb.GameToastCmd = (function() {

        /**
         * Properties of a GameToastCmd.
         * @memberof pb
         * @interface IGameToastCmd
         * @property {string|null} [eventId] GameToastCmd eventId
         * @property {string|null} [spaceId] GameToastCmd spaceId
         * @property {string|null} [type] GameToastCmd type
         * @property {string|null} [content] GameToastCmd content
         * @property {number|Long|null} [duration] GameToastCmd duration
         * @property {Array.<string>|null} [pidArr] GameToastCmd pidArr
         */

        /**
         * Constructs a new GameToastCmd.
         * @memberof pb
         * @classdesc Represents a GameToastCmd.
         * @implements IGameToastCmd
         * @constructor
         * @param {pb.IGameToastCmd=} [properties] Properties to set
         */
        function GameToastCmd(properties) {
            this.pidArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameToastCmd eventId.
         * @member {string} eventId
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.eventId = "";

        /**
         * GameToastCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.spaceId = "";

        /**
         * GameToastCmd type.
         * @member {string} type
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.type = "";

        /**
         * GameToastCmd content.
         * @member {string} content
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.content = "";

        /**
         * GameToastCmd duration.
         * @member {number|Long} duration
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameToastCmd pidArr.
         * @member {Array.<string>} pidArr
         * @memberof pb.GameToastCmd
         * @instance
         */
        GameToastCmd.prototype.pidArr = $util.emptyArray;

        /**
         * Creates a new GameToastCmd instance using the specified properties.
         * @function create
         * @memberof pb.GameToastCmd
         * @static
         * @param {pb.IGameToastCmd=} [properties] Properties to set
         * @returns {pb.GameToastCmd} GameToastCmd instance
         */
        GameToastCmd.create = function create(properties) {
            return new GameToastCmd(properties);
        };

        /**
         * Encodes the specified GameToastCmd message. Does not implicitly {@link pb.GameToastCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.GameToastCmd
         * @static
         * @param {pb.IGameToastCmd} message GameToastCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameToastCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.duration);
            if (message.pidArr != null && message.pidArr.length)
                for (var i = 0; i < message.pidArr.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.pidArr[i]);
            return writer;
        };

        /**
         * Encodes the specified GameToastCmd message, length delimited. Does not implicitly {@link pb.GameToastCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameToastCmd
         * @static
         * @param {pb.IGameToastCmd} message GameToastCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameToastCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameToastCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameToastCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameToastCmd} GameToastCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameToastCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameToastCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                case 5:
                    message.duration = reader.int64();
                    break;
                case 6:
                    if (!(message.pidArr && message.pidArr.length))
                        message.pidArr = [];
                    message.pidArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameToastCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameToastCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameToastCmd} GameToastCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameToastCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameToastCmd message.
         * @function verify
         * @memberof pb.GameToastCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameToastCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                    return "duration: integer|Long expected";
            if (message.pidArr != null && message.hasOwnProperty("pidArr")) {
                if (!Array.isArray(message.pidArr))
                    return "pidArr: array expected";
                for (var i = 0; i < message.pidArr.length; ++i)
                    if (!$util.isString(message.pidArr[i]))
                        return "pidArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GameToastCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameToastCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameToastCmd} GameToastCmd
         */
        GameToastCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameToastCmd)
                return object;
            var message = new $root.pb.GameToastCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.content != null)
                message.content = String(object.content);
            if (object.duration != null)
                if ($util.Long)
                    (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                else if (typeof object.duration === "string")
                    message.duration = parseInt(object.duration, 10);
                else if (typeof object.duration === "number")
                    message.duration = object.duration;
                else if (typeof object.duration === "object")
                    message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
            if (object.pidArr) {
                if (!Array.isArray(object.pidArr))
                    throw TypeError(".pb.GameToastCmd.pidArr: array expected");
                message.pidArr = [];
                for (var i = 0; i < object.pidArr.length; ++i)
                    message.pidArr[i] = String(object.pidArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameToastCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameToastCmd
         * @static
         * @param {pb.GameToastCmd} message GameToastCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameToastCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pidArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.type = "";
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.duration = options.longs === String ? "0" : 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (typeof message.duration === "number")
                    object.duration = options.longs === String ? String(message.duration) : message.duration;
                else
                    object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
            if (message.pidArr && message.pidArr.length) {
                object.pidArr = [];
                for (var j = 0; j < message.pidArr.length; ++j)
                    object.pidArr[j] = message.pidArr[j];
            }
            return object;
        };

        /**
         * Converts this GameToastCmd to JSON.
         * @function toJSON
         * @memberof pb.GameToastCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameToastCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameToastCmd;
    })();

    pb.ShowWidgetCmd = (function() {

        /**
         * Properties of a ShowWidgetCmd.
         * @memberof pb
         * @interface IShowWidgetCmd
         * @property {string|null} [eventId] ShowWidgetCmd eventId
         * @property {string|null} [spaceId] ShowWidgetCmd spaceId
         * @property {Array.<string>|null} [pidArr] ShowWidgetCmd pidArr
         * @property {string|null} [type] ShowWidgetCmd type
         * @property {string|null} [url] ShowWidgetCmd url
         * @property {string|null} [param] ShowWidgetCmd param
         */

        /**
         * Constructs a new ShowWidgetCmd.
         * @memberof pb
         * @classdesc Represents a ShowWidgetCmd.
         * @implements IShowWidgetCmd
         * @constructor
         * @param {pb.IShowWidgetCmd=} [properties] Properties to set
         */
        function ShowWidgetCmd(properties) {
            this.pidArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowWidgetCmd eventId.
         * @member {string} eventId
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.eventId = "";

        /**
         * ShowWidgetCmd spaceId.
         * @member {string} spaceId
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.spaceId = "";

        /**
         * ShowWidgetCmd pidArr.
         * @member {Array.<string>} pidArr
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.pidArr = $util.emptyArray;

        /**
         * ShowWidgetCmd type.
         * @member {string} type
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.type = "";

        /**
         * ShowWidgetCmd url.
         * @member {string} url
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.url = "";

        /**
         * ShowWidgetCmd param.
         * @member {string} param
         * @memberof pb.ShowWidgetCmd
         * @instance
         */
        ShowWidgetCmd.prototype.param = "";

        /**
         * Creates a new ShowWidgetCmd instance using the specified properties.
         * @function create
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {pb.IShowWidgetCmd=} [properties] Properties to set
         * @returns {pb.ShowWidgetCmd} ShowWidgetCmd instance
         */
        ShowWidgetCmd.create = function create(properties) {
            return new ShowWidgetCmd(properties);
        };

        /**
         * Encodes the specified ShowWidgetCmd message. Does not implicitly {@link pb.ShowWidgetCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {pb.IShowWidgetCmd} message ShowWidgetCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowWidgetCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spaceId);
            if (message.pidArr != null && message.pidArr.length)
                for (var i = 0; i < message.pidArr.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.pidArr[i]);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
            if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.param);
            return writer;
        };

        /**
         * Encodes the specified ShowWidgetCmd message, length delimited. Does not implicitly {@link pb.ShowWidgetCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {pb.IShowWidgetCmd} message ShowWidgetCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowWidgetCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShowWidgetCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ShowWidgetCmd} ShowWidgetCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowWidgetCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ShowWidgetCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    if (!(message.pidArr && message.pidArr.length))
                        message.pidArr = [];
                    message.pidArr.push(reader.string());
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                case 6:
                    message.param = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShowWidgetCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ShowWidgetCmd} ShowWidgetCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowWidgetCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShowWidgetCmd message.
         * @function verify
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShowWidgetCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                if (!$util.isString(message.spaceId))
                    return "spaceId: string expected";
            if (message.pidArr != null && message.hasOwnProperty("pidArr")) {
                if (!Array.isArray(message.pidArr))
                    return "pidArr: array expected";
                for (var i = 0; i < message.pidArr.length; ++i)
                    if (!$util.isString(message.pidArr[i]))
                        return "pidArr: string[] expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isString(message.param))
                    return "param: string expected";
            return null;
        };

        /**
         * Creates a ShowWidgetCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ShowWidgetCmd} ShowWidgetCmd
         */
        ShowWidgetCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ShowWidgetCmd)
                return object;
            var message = new $root.pb.ShowWidgetCmd();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.pidArr) {
                if (!Array.isArray(object.pidArr))
                    throw TypeError(".pb.ShowWidgetCmd.pidArr: array expected");
                message.pidArr = [];
                for (var i = 0; i < object.pidArr.length; ++i)
                    message.pidArr[i] = String(object.pidArr[i]);
            }
            if (object.type != null)
                message.type = String(object.type);
            if (object.url != null)
                message.url = String(object.url);
            if (object.param != null)
                message.param = String(object.param);
            return message;
        };

        /**
         * Creates a plain object from a ShowWidgetCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ShowWidgetCmd
         * @static
         * @param {pb.ShowWidgetCmd} message ShowWidgetCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowWidgetCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pidArr = [];
            if (options.defaults) {
                object.eventId = "";
                object.spaceId = "";
                object.type = "";
                object.url = "";
                object.param = "";
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.pidArr && message.pidArr.length) {
                object.pidArr = [];
                for (var j = 0; j < message.pidArr.length; ++j)
                    object.pidArr[j] = message.pidArr[j];
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this ShowWidgetCmd to JSON.
         * @function toJSON
         * @memberof pb.ShowWidgetCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShowWidgetCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShowWidgetCmd;
    })();

    pb.RobotJoinInfo = (function() {

        /**
         * Properties of a RobotJoinInfo.
         * @memberof pb
         * @interface IRobotJoinInfo
         * @property {string|null} [RobotId] RobotJoinInfo RobotId
         * @property {string|null} [RobotName] RobotJoinInfo RobotName
         * @property {string|null} [Avatar] RobotJoinInfo Avatar
         * @property {number|null} [X] RobotJoinInfo X
         * @property {number|null} [Y] RobotJoinInfo Y
         */

        /**
         * Constructs a new RobotJoinInfo.
         * @memberof pb
         * @classdesc Represents a RobotJoinInfo.
         * @implements IRobotJoinInfo
         * @constructor
         * @param {pb.IRobotJoinInfo=} [properties] Properties to set
         */
        function RobotJoinInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RobotJoinInfo RobotId.
         * @member {string} RobotId
         * @memberof pb.RobotJoinInfo
         * @instance
         */
        RobotJoinInfo.prototype.RobotId = "";

        /**
         * RobotJoinInfo RobotName.
         * @member {string} RobotName
         * @memberof pb.RobotJoinInfo
         * @instance
         */
        RobotJoinInfo.prototype.RobotName = "";

        /**
         * RobotJoinInfo Avatar.
         * @member {string} Avatar
         * @memberof pb.RobotJoinInfo
         * @instance
         */
        RobotJoinInfo.prototype.Avatar = "";

        /**
         * RobotJoinInfo X.
         * @member {number} X
         * @memberof pb.RobotJoinInfo
         * @instance
         */
        RobotJoinInfo.prototype.X = 0;

        /**
         * RobotJoinInfo Y.
         * @member {number} Y
         * @memberof pb.RobotJoinInfo
         * @instance
         */
        RobotJoinInfo.prototype.Y = 0;

        /**
         * Creates a new RobotJoinInfo instance using the specified properties.
         * @function create
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {pb.IRobotJoinInfo=} [properties] Properties to set
         * @returns {pb.RobotJoinInfo} RobotJoinInfo instance
         */
        RobotJoinInfo.create = function create(properties) {
            return new RobotJoinInfo(properties);
        };

        /**
         * Encodes the specified RobotJoinInfo message. Does not implicitly {@link pb.RobotJoinInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {pb.IRobotJoinInfo} message RobotJoinInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotJoinInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RobotId != null && Object.hasOwnProperty.call(message, "RobotId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RobotId);
            if (message.RobotName != null && Object.hasOwnProperty.call(message, "RobotName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RobotName);
            if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Avatar);
            if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.X);
            if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Y);
            return writer;
        };

        /**
         * Encodes the specified RobotJoinInfo message, length delimited. Does not implicitly {@link pb.RobotJoinInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {pb.IRobotJoinInfo} message RobotJoinInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotJoinInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RobotJoinInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RobotJoinInfo} RobotJoinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotJoinInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RobotJoinInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RobotId = reader.string();
                    break;
                case 2:
                    message.RobotName = reader.string();
                    break;
                case 3:
                    message.Avatar = reader.string();
                    break;
                case 4:
                    message.X = reader.int32();
                    break;
                case 5:
                    message.Y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RobotJoinInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RobotJoinInfo} RobotJoinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotJoinInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotJoinInfo message.
         * @function verify
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotJoinInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RobotId != null && message.hasOwnProperty("RobotId"))
                if (!$util.isString(message.RobotId))
                    return "RobotId: string expected";
            if (message.RobotName != null && message.hasOwnProperty("RobotName"))
                if (!$util.isString(message.RobotName))
                    return "RobotName: string expected";
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                if (!$util.isString(message.Avatar))
                    return "Avatar: string expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (!$util.isInteger(message.X))
                    return "X: integer expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (!$util.isInteger(message.Y))
                    return "Y: integer expected";
            return null;
        };

        /**
         * Creates a RobotJoinInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RobotJoinInfo} RobotJoinInfo
         */
        RobotJoinInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RobotJoinInfo)
                return object;
            var message = new $root.pb.RobotJoinInfo();
            if (object.RobotId != null)
                message.RobotId = String(object.RobotId);
            if (object.RobotName != null)
                message.RobotName = String(object.RobotName);
            if (object.Avatar != null)
                message.Avatar = String(object.Avatar);
            if (object.X != null)
                message.X = object.X | 0;
            if (object.Y != null)
                message.Y = object.Y | 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotJoinInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RobotJoinInfo
         * @static
         * @param {pb.RobotJoinInfo} message RobotJoinInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotJoinInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RobotId = "";
                object.RobotName = "";
                object.Avatar = "";
                object.X = 0;
                object.Y = 0;
            }
            if (message.RobotId != null && message.hasOwnProperty("RobotId"))
                object.RobotId = message.RobotId;
            if (message.RobotName != null && message.hasOwnProperty("RobotName"))
                object.RobotName = message.RobotName;
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                object.Avatar = message.Avatar;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = message.Y;
            return object;
        };

        /**
         * Converts this RobotJoinInfo to JSON.
         * @function toJSON
         * @memberof pb.RobotJoinInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotJoinInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RobotJoinInfo;
    })();

    pb.RobotJoinCmd = (function() {

        /**
         * Properties of a RobotJoinCmd.
         * @memberof pb
         * @interface IRobotJoinCmd
         * @property {string|null} [EventId] RobotJoinCmd EventId
         * @property {string|null} [SpaceId] RobotJoinCmd SpaceId
         * @property {Array.<pb.IRobotJoinInfo>|null} [joinInfoArr] RobotJoinCmd joinInfoArr
         */

        /**
         * Constructs a new RobotJoinCmd.
         * @memberof pb
         * @classdesc Represents a RobotJoinCmd.
         * @implements IRobotJoinCmd
         * @constructor
         * @param {pb.IRobotJoinCmd=} [properties] Properties to set
         */
        function RobotJoinCmd(properties) {
            this.joinInfoArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RobotJoinCmd EventId.
         * @member {string} EventId
         * @memberof pb.RobotJoinCmd
         * @instance
         */
        RobotJoinCmd.prototype.EventId = "";

        /**
         * RobotJoinCmd SpaceId.
         * @member {string} SpaceId
         * @memberof pb.RobotJoinCmd
         * @instance
         */
        RobotJoinCmd.prototype.SpaceId = "";

        /**
         * RobotJoinCmd joinInfoArr.
         * @member {Array.<pb.IRobotJoinInfo>} joinInfoArr
         * @memberof pb.RobotJoinCmd
         * @instance
         */
        RobotJoinCmd.prototype.joinInfoArr = $util.emptyArray;

        /**
         * Creates a new RobotJoinCmd instance using the specified properties.
         * @function create
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {pb.IRobotJoinCmd=} [properties] Properties to set
         * @returns {pb.RobotJoinCmd} RobotJoinCmd instance
         */
        RobotJoinCmd.create = function create(properties) {
            return new RobotJoinCmd(properties);
        };

        /**
         * Encodes the specified RobotJoinCmd message. Does not implicitly {@link pb.RobotJoinCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {pb.IRobotJoinCmd} message RobotJoinCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotJoinCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.EventId);
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SpaceId);
            if (message.joinInfoArr != null && message.joinInfoArr.length)
                for (var i = 0; i < message.joinInfoArr.length; ++i)
                    $root.pb.RobotJoinInfo.encode(message.joinInfoArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RobotJoinCmd message, length delimited. Does not implicitly {@link pb.RobotJoinCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {pb.IRobotJoinCmd} message RobotJoinCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotJoinCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RobotJoinCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RobotJoinCmd} RobotJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotJoinCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RobotJoinCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EventId = reader.string();
                    break;
                case 2:
                    message.SpaceId = reader.string();
                    break;
                case 3:
                    if (!(message.joinInfoArr && message.joinInfoArr.length))
                        message.joinInfoArr = [];
                    message.joinInfoArr.push($root.pb.RobotJoinInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RobotJoinCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RobotJoinCmd} RobotJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotJoinCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotJoinCmd message.
         * @function verify
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotJoinCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            if (message.joinInfoArr != null && message.hasOwnProperty("joinInfoArr")) {
                if (!Array.isArray(message.joinInfoArr))
                    return "joinInfoArr: array expected";
                for (var i = 0; i < message.joinInfoArr.length; ++i) {
                    var error = $root.pb.RobotJoinInfo.verify(message.joinInfoArr[i]);
                    if (error)
                        return "joinInfoArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RobotJoinCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RobotJoinCmd} RobotJoinCmd
         */
        RobotJoinCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RobotJoinCmd)
                return object;
            var message = new $root.pb.RobotJoinCmd();
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            if (object.joinInfoArr) {
                if (!Array.isArray(object.joinInfoArr))
                    throw TypeError(".pb.RobotJoinCmd.joinInfoArr: array expected");
                message.joinInfoArr = [];
                for (var i = 0; i < object.joinInfoArr.length; ++i) {
                    if (typeof object.joinInfoArr[i] !== "object")
                        throw TypeError(".pb.RobotJoinCmd.joinInfoArr: object expected");
                    message.joinInfoArr[i] = $root.pb.RobotJoinInfo.fromObject(object.joinInfoArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RobotJoinCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RobotJoinCmd
         * @static
         * @param {pb.RobotJoinCmd} message RobotJoinCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotJoinCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.joinInfoArr = [];
            if (options.defaults) {
                object.EventId = "";
                object.SpaceId = "";
            }
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            if (message.joinInfoArr && message.joinInfoArr.length) {
                object.joinInfoArr = [];
                for (var j = 0; j < message.joinInfoArr.length; ++j)
                    object.joinInfoArr[j] = $root.pb.RobotJoinInfo.toObject(message.joinInfoArr[j], options);
            }
            return object;
        };

        /**
         * Converts this RobotJoinCmd to JSON.
         * @function toJSON
         * @memberof pb.RobotJoinCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotJoinCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RobotJoinCmd;
    })();

    pb.RobotMoveCmd = (function() {

        /**
         * Properties of a RobotMoveCmd.
         * @memberof pb
         * @interface IRobotMoveCmd
         * @property {string|null} [EventId] RobotMoveCmd EventId
         * @property {string|null} [SpaceId] RobotMoveCmd SpaceId
         * @property {string|null} [RobotId] RobotMoveCmd RobotId
         * @property {number|null} [X] RobotMoveCmd X
         * @property {number|null} [Y] RobotMoveCmd Y
         * @property {string|null} [ChatMessage] RobotMoveCmd ChatMessage
         */

        /**
         * Constructs a new RobotMoveCmd.
         * @memberof pb
         * @classdesc Represents a RobotMoveCmd.
         * @implements IRobotMoveCmd
         * @constructor
         * @param {pb.IRobotMoveCmd=} [properties] Properties to set
         */
        function RobotMoveCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RobotMoveCmd EventId.
         * @member {string} EventId
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.EventId = "";

        /**
         * RobotMoveCmd SpaceId.
         * @member {string} SpaceId
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.SpaceId = "";

        /**
         * RobotMoveCmd RobotId.
         * @member {string} RobotId
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.RobotId = "";

        /**
         * RobotMoveCmd X.
         * @member {number} X
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.X = 0;

        /**
         * RobotMoveCmd Y.
         * @member {number} Y
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.Y = 0;

        /**
         * RobotMoveCmd ChatMessage.
         * @member {string} ChatMessage
         * @memberof pb.RobotMoveCmd
         * @instance
         */
        RobotMoveCmd.prototype.ChatMessage = "";

        /**
         * Creates a new RobotMoveCmd instance using the specified properties.
         * @function create
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {pb.IRobotMoveCmd=} [properties] Properties to set
         * @returns {pb.RobotMoveCmd} RobotMoveCmd instance
         */
        RobotMoveCmd.create = function create(properties) {
            return new RobotMoveCmd(properties);
        };

        /**
         * Encodes the specified RobotMoveCmd message. Does not implicitly {@link pb.RobotMoveCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {pb.IRobotMoveCmd} message RobotMoveCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotMoveCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.EventId);
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SpaceId);
            if (message.RobotId != null && Object.hasOwnProperty.call(message, "RobotId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RobotId);
            if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.X);
            if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Y);
            if (message.ChatMessage != null && Object.hasOwnProperty.call(message, "ChatMessage"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ChatMessage);
            return writer;
        };

        /**
         * Encodes the specified RobotMoveCmd message, length delimited. Does not implicitly {@link pb.RobotMoveCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {pb.IRobotMoveCmd} message RobotMoveCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotMoveCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RobotMoveCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RobotMoveCmd} RobotMoveCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotMoveCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RobotMoveCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EventId = reader.string();
                    break;
                case 2:
                    message.SpaceId = reader.string();
                    break;
                case 3:
                    message.RobotId = reader.string();
                    break;
                case 4:
                    message.X = reader.int32();
                    break;
                case 5:
                    message.Y = reader.int32();
                    break;
                case 6:
                    message.ChatMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RobotMoveCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RobotMoveCmd} RobotMoveCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotMoveCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotMoveCmd message.
         * @function verify
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotMoveCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            if (message.RobotId != null && message.hasOwnProperty("RobotId"))
                if (!$util.isString(message.RobotId))
                    return "RobotId: string expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (!$util.isInteger(message.X))
                    return "X: integer expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (!$util.isInteger(message.Y))
                    return "Y: integer expected";
            if (message.ChatMessage != null && message.hasOwnProperty("ChatMessage"))
                if (!$util.isString(message.ChatMessage))
                    return "ChatMessage: string expected";
            return null;
        };

        /**
         * Creates a RobotMoveCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RobotMoveCmd} RobotMoveCmd
         */
        RobotMoveCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RobotMoveCmd)
                return object;
            var message = new $root.pb.RobotMoveCmd();
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            if (object.RobotId != null)
                message.RobotId = String(object.RobotId);
            if (object.X != null)
                message.X = object.X | 0;
            if (object.Y != null)
                message.Y = object.Y | 0;
            if (object.ChatMessage != null)
                message.ChatMessage = String(object.ChatMessage);
            return message;
        };

        /**
         * Creates a plain object from a RobotMoveCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RobotMoveCmd
         * @static
         * @param {pb.RobotMoveCmd} message RobotMoveCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotMoveCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.EventId = "";
                object.SpaceId = "";
                object.RobotId = "";
                object.X = 0;
                object.Y = 0;
                object.ChatMessage = "";
            }
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            if (message.RobotId != null && message.hasOwnProperty("RobotId"))
                object.RobotId = message.RobotId;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = message.Y;
            if (message.ChatMessage != null && message.hasOwnProperty("ChatMessage"))
                object.ChatMessage = message.ChatMessage;
            return object;
        };

        /**
         * Converts this RobotMoveCmd to JSON.
         * @function toJSON
         * @memberof pb.RobotMoveCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotMoveCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RobotMoveCmd;
    })();

    pb.RobotExitCmd = (function() {

        /**
         * Properties of a RobotExitCmd.
         * @memberof pb
         * @interface IRobotExitCmd
         * @property {string|null} [EventId] RobotExitCmd EventId
         * @property {string|null} [SpaceId] RobotExitCmd SpaceId
         * @property {Array.<string>|null} [RobotIdArr] RobotExitCmd RobotIdArr
         */

        /**
         * Constructs a new RobotExitCmd.
         * @memberof pb
         * @classdesc Represents a RobotExitCmd.
         * @implements IRobotExitCmd
         * @constructor
         * @param {pb.IRobotExitCmd=} [properties] Properties to set
         */
        function RobotExitCmd(properties) {
            this.RobotIdArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RobotExitCmd EventId.
         * @member {string} EventId
         * @memberof pb.RobotExitCmd
         * @instance
         */
        RobotExitCmd.prototype.EventId = "";

        /**
         * RobotExitCmd SpaceId.
         * @member {string} SpaceId
         * @memberof pb.RobotExitCmd
         * @instance
         */
        RobotExitCmd.prototype.SpaceId = "";

        /**
         * RobotExitCmd RobotIdArr.
         * @member {Array.<string>} RobotIdArr
         * @memberof pb.RobotExitCmd
         * @instance
         */
        RobotExitCmd.prototype.RobotIdArr = $util.emptyArray;

        /**
         * Creates a new RobotExitCmd instance using the specified properties.
         * @function create
         * @memberof pb.RobotExitCmd
         * @static
         * @param {pb.IRobotExitCmd=} [properties] Properties to set
         * @returns {pb.RobotExitCmd} RobotExitCmd instance
         */
        RobotExitCmd.create = function create(properties) {
            return new RobotExitCmd(properties);
        };

        /**
         * Encodes the specified RobotExitCmd message. Does not implicitly {@link pb.RobotExitCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.RobotExitCmd
         * @static
         * @param {pb.IRobotExitCmd} message RobotExitCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotExitCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EventId != null && Object.hasOwnProperty.call(message, "EventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.EventId);
            if (message.SpaceId != null && Object.hasOwnProperty.call(message, "SpaceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SpaceId);
            if (message.RobotIdArr != null && message.RobotIdArr.length)
                for (var i = 0; i < message.RobotIdArr.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.RobotIdArr[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotExitCmd message, length delimited. Does not implicitly {@link pb.RobotExitCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RobotExitCmd
         * @static
         * @param {pb.IRobotExitCmd} message RobotExitCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotExitCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RobotExitCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RobotExitCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RobotExitCmd} RobotExitCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotExitCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RobotExitCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EventId = reader.string();
                    break;
                case 2:
                    message.SpaceId = reader.string();
                    break;
                case 3:
                    if (!(message.RobotIdArr && message.RobotIdArr.length))
                        message.RobotIdArr = [];
                    message.RobotIdArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RobotExitCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RobotExitCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RobotExitCmd} RobotExitCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotExitCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotExitCmd message.
         * @function verify
         * @memberof pb.RobotExitCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotExitCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                if (!$util.isString(message.EventId))
                    return "EventId: string expected";
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                if (!$util.isString(message.SpaceId))
                    return "SpaceId: string expected";
            if (message.RobotIdArr != null && message.hasOwnProperty("RobotIdArr")) {
                if (!Array.isArray(message.RobotIdArr))
                    return "RobotIdArr: array expected";
                for (var i = 0; i < message.RobotIdArr.length; ++i)
                    if (!$util.isString(message.RobotIdArr[i]))
                        return "RobotIdArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RobotExitCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RobotExitCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RobotExitCmd} RobotExitCmd
         */
        RobotExitCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RobotExitCmd)
                return object;
            var message = new $root.pb.RobotExitCmd();
            if (object.EventId != null)
                message.EventId = String(object.EventId);
            if (object.SpaceId != null)
                message.SpaceId = String(object.SpaceId);
            if (object.RobotIdArr) {
                if (!Array.isArray(object.RobotIdArr))
                    throw TypeError(".pb.RobotExitCmd.RobotIdArr: array expected");
                message.RobotIdArr = [];
                for (var i = 0; i < object.RobotIdArr.length; ++i)
                    message.RobotIdArr[i] = String(object.RobotIdArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RobotExitCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RobotExitCmd
         * @static
         * @param {pb.RobotExitCmd} message RobotExitCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotExitCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RobotIdArr = [];
            if (options.defaults) {
                object.EventId = "";
                object.SpaceId = "";
            }
            if (message.EventId != null && message.hasOwnProperty("EventId"))
                object.EventId = message.EventId;
            if (message.SpaceId != null && message.hasOwnProperty("SpaceId"))
                object.SpaceId = message.SpaceId;
            if (message.RobotIdArr && message.RobotIdArr.length) {
                object.RobotIdArr = [];
                for (var j = 0; j < message.RobotIdArr.length; ++j)
                    object.RobotIdArr[j] = message.RobotIdArr[j];
            }
            return object;
        };

        /**
         * Converts this RobotExitCmd to JSON.
         * @function toJSON
         * @memberof pb.RobotExitCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotExitCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RobotExitCmd;
    })();

    pb.SelfAndOthers = (function() {

        /**
         * Properties of a SelfAndOthers.
         * @memberof pb
         * @interface ISelfAndOthers
         * @property {string|null} [self] SelfAndOthers self
         * @property {Array.<string>|null} [others] SelfAndOthers others
         */

        /**
         * Constructs a new SelfAndOthers.
         * @memberof pb
         * @classdesc Represents a SelfAndOthers.
         * @implements ISelfAndOthers
         * @constructor
         * @param {pb.ISelfAndOthers=} [properties] Properties to set
         */
        function SelfAndOthers(properties) {
            this.others = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelfAndOthers self.
         * @member {string} self
         * @memberof pb.SelfAndOthers
         * @instance
         */
        SelfAndOthers.prototype.self = "";

        /**
         * SelfAndOthers others.
         * @member {Array.<string>} others
         * @memberof pb.SelfAndOthers
         * @instance
         */
        SelfAndOthers.prototype.others = $util.emptyArray;

        /**
         * Creates a new SelfAndOthers instance using the specified properties.
         * @function create
         * @memberof pb.SelfAndOthers
         * @static
         * @param {pb.ISelfAndOthers=} [properties] Properties to set
         * @returns {pb.SelfAndOthers} SelfAndOthers instance
         */
        SelfAndOthers.create = function create(properties) {
            return new SelfAndOthers(properties);
        };

        /**
         * Encodes the specified SelfAndOthers message. Does not implicitly {@link pb.SelfAndOthers.verify|verify} messages.
         * @function encode
         * @memberof pb.SelfAndOthers
         * @static
         * @param {pb.ISelfAndOthers} message SelfAndOthers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfAndOthers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.self);
            if (message.others != null && message.others.length)
                for (var i = 0; i < message.others.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.others[i]);
            return writer;
        };

        /**
         * Encodes the specified SelfAndOthers message, length delimited. Does not implicitly {@link pb.SelfAndOthers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SelfAndOthers
         * @static
         * @param {pb.ISelfAndOthers} message SelfAndOthers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfAndOthers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelfAndOthers message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SelfAndOthers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SelfAndOthers} SelfAndOthers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfAndOthers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SelfAndOthers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self = reader.string();
                    break;
                case 2:
                    if (!(message.others && message.others.length))
                        message.others = [];
                    message.others.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelfAndOthers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SelfAndOthers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SelfAndOthers} SelfAndOthers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfAndOthers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelfAndOthers message.
         * @function verify
         * @memberof pb.SelfAndOthers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelfAndOthers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.self != null && message.hasOwnProperty("self"))
                if (!$util.isString(message.self))
                    return "self: string expected";
            if (message.others != null && message.hasOwnProperty("others")) {
                if (!Array.isArray(message.others))
                    return "others: array expected";
                for (var i = 0; i < message.others.length; ++i)
                    if (!$util.isString(message.others[i]))
                        return "others: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SelfAndOthers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SelfAndOthers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SelfAndOthers} SelfAndOthers
         */
        SelfAndOthers.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SelfAndOthers)
                return object;
            var message = new $root.pb.SelfAndOthers();
            if (object.self != null)
                message.self = String(object.self);
            if (object.others) {
                if (!Array.isArray(object.others))
                    throw TypeError(".pb.SelfAndOthers.others: array expected");
                message.others = [];
                for (var i = 0; i < object.others.length; ++i)
                    message.others[i] = String(object.others[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SelfAndOthers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SelfAndOthers
         * @static
         * @param {pb.SelfAndOthers} message SelfAndOthers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelfAndOthers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.others = [];
            if (options.defaults)
                object.self = "";
            if (message.self != null && message.hasOwnProperty("self"))
                object.self = message.self;
            if (message.others && message.others.length) {
                object.others = [];
                for (var j = 0; j < message.others.length; ++j)
                    object.others[j] = message.others[j];
            }
            return object;
        };

        /**
         * Converts this SelfAndOthers to JSON.
         * @function toJSON
         * @memberof pb.SelfAndOthers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelfAndOthers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SelfAndOthers;
    })();

    return pb;
})();

module.exports = $root;
