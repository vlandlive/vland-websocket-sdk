
const WebSocket = require('isomorphic-ws');
import '../assets/nano-protocol.js'
import '../assets/nano-websocket-client.js'
import { pb } from '../assets/proto/api';
import { ApiRoute, ServerPush, RouteDic, ServerConfig } from "./apiEnum";

global.websocket = WebSocket

class Engine {
    private params: any
    private config: {
        apiId: string
        apiKey: string
        eventId: string
        spaceId: string,

    }

    constructor() {
        let host = "wss://us-game.vland.live"
        if (global.wsconfig.environment == "cn") { 
            host = "wss://game.vland.live"
        }
        
        const wsconfig = {
            host: host,
            HEARTBEAT_INTERVAL: 6000,
            CONNECT_TIMEOUT: 5000,
        }


        global.wsconfig = { ...global.wsconfig, ...wsconfig };
        this.config = global.wsconfig

        this.params = {
            host: `${global.wsconfig.host}`,
            path: `?apiId=${global.wsconfig.apiId}&eventId=${global.wsconfig.eventId}&key=${global.wsconfig.apiKey}`,
            dict: RouteDic
        }
    }

    start() {
        let that = this
        return new Promise(async(resolve, reject) => {
            let status = false
            let timer = setTimeout(() => {
                if (status) {
                    clearTimeout(timer)
                    return 
                }
                // console.log("超时", 500)
                resolve({status: 500, message: "连接超时，请检查连接url："+this.params.host+this.params.path})
            }, global.wsconfig.CONNECT_TIMEOUT)

            console.log(`开始连接服务器, ${Date.now()}`)
            global.nano.init(this.params, () => { 
                console.log(this.params.host+this.params.path)
                status = true
                resolve({status: 200, message: "连接成功，url："+this.params.host+this.params.path})
            });
            
            setInterval(() => {
                that.sendHeartBeat()
            }, global.wsconfig.HEARTBEAT_INTERVAL)
        })
    }

    // 发送心跳
    sendHeartBeat() {
        global.nano.sendHeartBeat()
    }

    // 断开连接
    end() {
        return new Promise((resolve, reject)=>{
            global.nano.end()
            // throw new ReferenceError("连接已断开")
        })
    }

    connectSpace() {
        return new Promise((resolve, reject)=>{
           
            const pbdata = pb.ConnectSpaceReq.create();
            pbdata.EventId = global.wsconfig.eventId
            pbdata.SpaceId = global.wsconfig.spaceId
            pbdata.Pid = global.wsconfig.apiId + "X"

            const pbarrbuffer = pb.ConnectSpaceReq.encode(pbdata).finish();

            global.nano.request(ApiRoute.CONNECT_SPACE, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("connect space: ", pb.Error.decode(dataEncode).Code)
                let result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                    // throw new ReferenceError("连接Space失败")
                }
            })
        })
    }
}

export {
    Engine
}
