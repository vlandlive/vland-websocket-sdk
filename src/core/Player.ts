import { pb } from '../assets/proto/api';
import { ApiRoute, ServerPush } from './apiEnum';

class Player {
    public bindFunction!: Function;
    private serverConfig = {
        eventId: global.wsconfig.eventId,
        spaceId: global.wsconfig.spaceId,
        apiKey: global.wsconfig.apiKey
    }

    constructor() {
        
    }

    /**
     * Get user information list.
     * @param pidArr - pid list of users receiving notifications, [] means all users
     * @example
     * If you wanna get the information of all users.
     * ```ts
     * app.player.getPlayerInfo([])
     * ```
     * @throws Error message    
     */
    public getPlayerInfo(pidArr: string[]): Promise<pb.IPosition[]> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.GetPlayerInfoCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pidArr = pidArr
    
            const pbarrbuffer = pb.GetPlayerInfoCmd.encode(pbdata).finish();
            
            global.nano.request(ApiRoute.GET_PLAYER_INFO, pbarrbuffer, (dataEncode: Uint8Array) => {

                console.log("???????????",dataEncode, typeof(dataEncode))
                const result = pb.PlayerPositionInfos.decode(dataEncode)
                
                if (result.positionArr.length === 0) {
                    reject("this user does not exist")
                } else {
                    resolve(result.positionArr)
                }
            })
        })
    }

    /**
     * Get users standing on a special area.
     * @param index - the index of a special area (data in Scene.getSpaceMapInfo())
     * @example
     * If you wanna get all users standing on a special area which index is 1.
     * ```ts
     * app.player.getSpecialAreaPlayerInfo(1)
     * ```
     * @throws Error message    
     */
    public getSpecialAreaPlayerInfo(index: number): Promise<string[]> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.GetSpecialAreaPlayerInfoCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.index = index
            const pbarrbuffer = pb.GetSpecialAreaPlayerInfoCmd.encode(pbdata).finish();
            global.nano.request(ApiRoute.GET_SPECIAL_AREA_INFO, pbarrbuffer, (dataEncode: Uint8Array) => {
                const result = pb.Pids.decode(dataEncode)
                if(result?.Pid?.length>0){
                    resolve(result?.Pid)
                }else{
                    resolve([])
                }   
            })
        })
    }

    /**
     * Set avatar location to specified coordinates in this space.
     * @param pid - user id
     * @param position - x & y coordinates
     * @example
     * If you wanna set avatar location to specified coordinates.
     * ```ts
     * app.player.setPlayerPosition("000001", [10, 20])
     * ```
     * @throws Error message    
     */
    public setPlayerPosition(pid: string, position: [x: number, y: number]): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerPositionCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.x = position[0]
            pbdata.y = position[1]

            const pbarrbuffer = pb.ChangePlayerPositionCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_POSITION, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change postion: ", pb.Error.decode(dataEncode))
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }


    /**
     * Set avatar direction.
     * @param pid - user id
     * @param direction - number of direction, options: [0, 1, 2, 3], 0:left, 1:right, 2: up, 3:down
     * @example
     * If you wanna set avatar direction to right
     * ```ts
     * app.player.setPlayerDirection("000001", 1)
     * ```
     * @throws Error message    
     */
    public setPlayerDirection(pid: string, direction: number): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerDirectionCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.direction = direction

            const pbarrbuffer = pb.ChangePlayerDirectionCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_DIRECTION, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change direction: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    /**
     * Set avatar animation.
     * @param pid - user id
     * @param animation - number of animation, options: [0 - 24], details in ```pb.AnimationType```
     * @example
     * If you wanna set the avatar to wave to the front
     * ```ts
     * app.player.setPlayerAnimation("000001", 11)
     * ```
     * @throws Error message    
     */
    public setPlayerAnimation(pid: string, animation: number): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerAnimationCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.animation = animation

            // console.log(pbdata)

            const pbarrbuffer = pb.ChangePlayerAnimationCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_ANIMATION, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change animation: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }


    /**
     * Set avatar move mode.
     * @param pid - user id
     * @param moveMode - number of move mode, options: [0, 1], 0:NORMAL_MODE 1:FLY_MODE
     * @example
     * If you wanna set the avatar to fly mode to through others
     * ```ts
     * app.player.setPlayerMoveMode("000001", 1)
     * ```
     * @throws Error message    
     */
    public setPlayerMoveMode(pid: string, moveMode: number): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerMoveModeCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.moveMode = moveMode

            // console.log(pbdata)

            const pbarrbuffer = pb.ChangePlayerMoveModeCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_MOVE_MODE, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change move mode: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    /**
     * Set the following target of the avatar
     * @param pid - user id
     * @param followPid - target id
     * @example
     * If you wanna set avatar follow someone.
     * ```ts
     * app.player.setPlayerFollow("000001", "000002")
     * ```
     * @throws Error message    
     */
    public setPlayerFollow(pid: string, followPid: string): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerFollowCmd.create()
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.followPid = followPid

            // console.log(pbdata)

            const pbarrbuffer = pb.ChangePlayerFollowCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_FOLLOW, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change follow: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    // 修改用户形象
    public setPlayerAvatar(pid: string, image: string) {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.ChangePlayerImageCmd.create()
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.pid = pid
            pbdata.image = image

            // console.log(pbdata)

            const pbarrbuffer = pb.ChangePlayerImageCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.CHANGE_PLAYER_AVATAR, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("change avatar: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    resolve(result.Msg)
                }
            })
        })
    }

    /**
     * Set avatar speed
     * @param pid - user id
     * @param speed - number of speed, range in [0, 2]
     * @param duration - the duration of new speed, milliseconds
     * @example
     * If you wanna make avatar faster for 3 seconds 
     * ```ts
     * app.player.setPlayerSpeed("000001", 1.5, 3000)
     * ```
     * @throws Error message    
     */
    public setPlayerSpeed(pid: string, speed: number, duration: number): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const req: pb.IChangeMoveSpeedCmd = {
                ...this.serverConfig,
                pid: pid,
                speed: speed,
                duration: duration
            }
            const info = pb.ChangeMoveSpeedCmd.create(req)
            const arrBuffer = pb.ChangeMoveSpeedCmd.encode(info).finish()

            global.nano.request(ApiRoute.CHANGE_SPEED, arrBuffer, (dataEncode: Uint8Array) => {
                // console.log("change avatar: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    // 监听用户状态
    // PlayerJoinSignal      = 00000001
    // PlayerLeaveSignal     = 00000010
    // PlayerMoveSignal      = 00000100
    // PlayerTransferSignal  = 00001000
    // PlayerAnimationSignal = 00010000
    // PlayerSendMsgSignal   = 00100000
    // PlayerGameSignal      = 01000000
    // RobotViewSignal       = 10000000

    /**
     * Monitor the behavior of specified users
     * @param pidArr - - pid list of users receiving notifications, [] means all users
     * @param signal - listening content, binary, can be combined arbitrarily: {join: '00000001', leave: '00000010', move: '00000100', transfer: '00001000', animation: '00010000', chat: '00100000', game: '01000000', robot: '10000000'}
     * @param bindFunction - Custom function for accepting server push
     * @example
     * If you wanna moniter join, leave, and move infomation of all users. 
     * ```ts
     * app.player.addListener([], '00000111', (type, data)=>{console.log(type, data)})
     * ```
     * @throws Error message    
     */
    public addListener(pidArr: string[], signal: string, bindFunction: Function): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            this.bindFunction = bindFunction
            const pbdata = pb.ConnectSpaceReq.create();
            pbdata.EventId = global.wsconfig.eventId
            pbdata.SpaceId = global.wsconfig.spaceId
            pbdata.Pid = global.wsconfig.apiId + "X"
            const pbarrbuffer = pb.ConnectSpaceReq.encode(pbdata).finish();

            global.nano.request(ApiRoute.CONNECT_SPACE, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("connect space: ", pb.Error.decode(dataEncode).Code)
                let result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {

                    const pbdata2 = pb.AddPlayerListenerCmd.create();
                    pbdata2.eventId = global.wsconfig.eventId
                    pbdata2.spaceId = global.wsconfig.spaceId
                    pbdata2.listenerId = global.wsconfig.apiId + "X"
                    pbdata2.pidArr = pidArr
                    pbdata2.signal = parseInt(signal, 2)
                    const pbarrbuffer = pb.AddPlayerListenerCmd.encode(pbdata2).finish();

                    global.nano.request(ApiRoute.ADD_PLAYER_LISTENER, pbarrbuffer, (dataEncode: Uint8Array) => {
                        // console.log("add listener: ", pb.Error.decode(dataEncode))
                        result = pb.Error.decode(dataEncode)

                        if (result.Code === 'PIT-200') {
                            if ((parseInt(signal, 2) & 1) === 1) {
                                global.nano.on(ServerPush.NewPosition, this.onNewPositionHandler.bind(this));
                            }
                            if ((parseInt(signal, 2) & 2) === 2) {
                                global.nano.on(ServerPush.Exit, this.onExitHandler.bind(this));
                            }
                            if ((parseInt(signal, 2) & 4) === 4) {
                                global.nano.on(ServerPush.OnMove, this.onMoveHandler.bind(this));
                            }
                            if ((parseInt(signal, 2) & 8) === 8) {
                                global.nano.on(ServerPush.OnMove, this.onMoveHandler.bind(this));
                            }
                            if ((parseInt(signal, 2) & 16) === 16) {
                                global.nano.on(ServerPush.Animation, this.onAnimationHandler.bind(this))
                            }
                            if ((parseInt(signal, 2) & 32) === 32) {
                                global.nano.on(ServerPush.SendNearMessage, this.onNearMsgHandler.bind(this))
                                global.nano.on(ServerPush.SendGlobalMessage, this.onGlobalMsgHandler.bind(this))
                                global.nano.on(ServerPush.SendEventMessage, this.onEventMsgHandler.bind(this))
                                global.nano.on(ServerPush.SendPrivateMessage, this.onPrivateMsgHandler.bind(this))
                            }         

                            if ((parseInt(signal, 2) & 64) === 64) {
                                global.nano.on(ServerPush.PrepareGameRoute, this.onPrepareGameHandler.bind(this));
                                global.nano.on(ServerPush.FinishGameRoute, this.onFinishGameHandler.bind(this));
                                global.nano.on(ServerPush.GameTriggerSpecialAreaRoute, this.onTriggerSpecialAreaHandler.bind(this));
                                global.nano.on(ServerPush.GameTriggerInteractiveRoute, this.onTriggerInteractiveHandler.bind(this));
                            }

                            if((parseInt(signal,2) & 128) === 128){
                                global.nano.on(ServerPush.OpenVideo, this.onRobotViewEnterHandler.bind(this))
                                global.nano.on(ServerPush.CloseVideo, this.onRobotViewLeaveHandler.bind(this))
                            }

                            global.nano.on(ServerPush.SpaceClose, this.onSpaceClose.bind(this));
                            resolve(true)
                        } else {
                            reject(result.Msg)
                            throw new ReferenceError("监听Space失败")
                        }
                    })
                } else {
                    reject(result.Msg)
                    throw new ReferenceError("连接Space失败")
                }
            })
        })
    }

    /**
     * Remove monitor
     * @example
     * If you wanna remove your moniter
     * ```ts
     * app.player.removeListener()
     * ```
     * @throws Error message    
     */
    public removeListener(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            const pbdata = pb.RemovePlayerListenerCmd.create();
            pbdata.eventId = global.wsconfig.eventId
            pbdata.spaceId = global.wsconfig.spaceId
            pbdata.listenerId = global.wsconfig.apiId + "X"
            // pbdata.pidArr = pidArr  // 暂时不需要传

            const pbarrbuffer = pb.RemovePlayerListenerCmd.encode(pbdata).finish();

            global.nano.request(ApiRoute.REMOVE_PLAYER_LISTENER, pbarrbuffer, (dataEncode: Uint8Array) => {
                // console.log("remove moniter: ", pb.Error.decode(dataEncode).Code)
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    // 监听位置
    private onNewPositionHandler(data: Uint8Array) {
        // console.log("position", pb.Position.decode(data))
        this.bindFunction("position", pb.Position.decode(data))
    }

    // 监听移动/传送
    private onMoveHandler(data: Uint8Array) {
        if (pb.MovePosition.decode(data).Transfer) {
            // console.log("transfer", pb.MovePosition.decode(data))
            this.bindFunction("transfer", pb.MovePosition.decode(data))
        } else {
            // console.log("move", pb.MovePosition.decode(data))
            this.bindFunction("move", pb.MovePosition.decode(data))
        }
    }

    // 监听离开
    private onExitHandler(data: Uint8Array) {
        // console.log("exit", pb.Pid.decode(data))
        this.bindFunction("exit", pb.Pid.decode(data))
    }

    // 监听离开
    private onSpaceClose(data: Uint8Array) {
        // console.log("close", pb.SpaceId.decode(data))
        this.bindFunction("close", pb.SpaceId.decode(data))
    }

    // 监听动作
    private onAnimationHandler(data: Uint8Array) {
        // console.log("animation", pb.Animation.decode(data))
        this.bindFunction("animation", pb.Animation.decode(data))
    }

    // 监听附近的消息
    private onNearMsgHandler(data: Uint8Array) {
        // console.log("near mesaage", pb.UserMessage.decode(data))
        this.bindFunction("near mesaage", pb.UserMessage.decode(data))
    }

    // 监听Space的消息
    private onGlobalMsgHandler(data: Uint8Array) {
        // console.log("space message", pb.UserMessage.decode(data))
        this.bindFunction("space message", pb.UserMessage.decode(data))
    }

    // 监听Event的消息
    private onEventMsgHandler(data: Uint8Array) {
        // console.log("event message", pb.UserMessage.decode(data))
        this.bindFunction("event message", pb.UserMessage.decode(data))
    }

    // 监听私密空间的消息
    private onPrivateMsgHandler(data: Uint8Array) {
        // console.log("private message", pb.UserMessage.decode(data))
        this.bindFunction("private message", pb.UserMessage.decode(data))
    }

    // 监听游戏准备
    private onPrepareGameHandler(data: Uint8Array) {
        this.bindFunction("ready", pb.Pid.decode(data))
    }
    
    // 监听有人完成
    private onFinishGameHandler(data: Uint8Array) {
        this.bindFunction("finish", pb.FinishGameNotice.decode(data))
    }

    // 监听触发交互区域
    private onTriggerSpecialAreaHandler(data: Uint8Array) {
        this.bindFunction("area", pb.GameTriggerSpecialAreaNotice.decode(data))
    }

    // 监听触发交互物
    private onTriggerInteractiveHandler(data: Uint8Array) {
        this.bindFunction("interactive", pb.GameTriggerInteractiveNotice.decode(data))
    }

     // 监听智能体机器人进出视野
    private onRobotViewEnterHandler(data: Uint8Array) {
        this.bindFunction("robotViewEnter", pb.SelfAndOthers.decode(data))
    }

    // 监听智能体机器人进出视野
    private onRobotViewLeaveHandler(data: Uint8Array) {
        this.bindFunction("robotViewClose", pb.SelfAndOthers.decode(data))
    }
}

export {
    Player
}
