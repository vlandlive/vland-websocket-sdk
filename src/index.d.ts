declare module './assets/nano-protocol.js'
declare module './assets/nano-websocket-client.js'

declare global {
    var nano: any
    var websocket: any
    var wsconfig: any
    var mapData:any;// 地图数据 宽高 特殊区域等数据
    var agentList: any; // Agent实例列表
    var conversationList: any // Agent对话列表
    var specialMapObj:any;//特殊区域坐标对象
}

export{}