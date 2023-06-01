import { pb } from '../assets/proto/api';
import { ApiRoute, ServerPush, ServerConfig } from "./apiEnum";
import { Player } from './Player'

class Game {

    public listener!: Function;
    public player: Player;

    constructor() {
        this.player = new Player()
    }

    private serverConfig = {
        eventId: global.wsconfig.eventId,
        spaceId: global.wsconfig.spaceId,
        apiKey: global.wsconfig.apiKey
    }

    /**
     * Initialize the game and create game-related listeners. Please consult the vland staff for the official game.
     * @param config - game config, contains {name, describe, icon, listener}. ```listener```is a custom function.
     * @example
     * If you wanna initialize a official race game.
     * ```ts
     * app.game.initGame({name: "race", describe: "This is a race game", "icon": "https://xxxxx.png", (type, data)=> {console.log(type, data)}})
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public initGame(config: {name: string, describe: string, icon: string, listener: Function}): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            this.listener = config.listener
            let res = await this.player.addListener([], "01000010", this.listener)
            if (res) {
                // 初始化游戏
                const req: pb.IInitGameCmd = {
                    ...this.serverConfig,
                    name: config.name,
                    describe: config.describe,
                    icon: config.icon,
                    url: "https://cocos.vland.live/cocos/vland_game/game.html",
                }
                const info = pb.InitGameCmd.create(req)
                const arrBuffer = pb.InitGameCmd.encode(info).finish()
                global.nano.request(ApiRoute.INIT_GAME, arrBuffer, (dataEncode: Uint8Array) => {
                    const result = pb.Error.decode(dataEncode)
                    if (result.Code == 'PIT-200') {
                        resolve(true)
                    } else {
                        reject(result.Msg)
                    }
                })
            }

        })
    }

    /**
     * Send a notification that the game is ready to start
     * @param code - status of readiness
     * @param message - text message of current status
     * @example
     * If the game if ready.
     * ```ts
     * app.game.readyGame(code: 200, "Race game is ready!")
     * ```
     * If the game is not ready due to some bug.
     * ```ts
     * app.game.readyGame(code: 400, "Race game is not ready!")
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public readyGame(code: number, message: string): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            const req: pb.IPreStartGameCmd = {
                ...this.serverConfig,
                code: code,
                message: message
            }
            const info = pb.PreStartGameCmd.create(req)
            const arrBuffer = pb.PreStartGameCmd.encode(info).finish()
            global.nano.request(ApiRoute.PRESTART_GAME, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Pop up the countdown component, ready to start the game
     * @param second - countdown duration, milliseconds
     * @example
     * If the game needs a 5s countdown
     * ```ts
     * app.game.countDown(5000)
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public countDown(second: number): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            const req: pb.IGameCountdownCmd = {
                ...this.serverConfig,
                countdown: second
            }
            const info = pb.GameCountdownCmd.create(req)
            const arrBuffer = pb.GameCountdownCmd.encode(info).finish()
            global.nano.request(ApiRoute.GAME_COUNT_DOWN, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Push updated leaderboard information
     * @param rankInfo - leaderboard information list, item contains {pid, time}. ```time```is  milliseconds.
     * @param type - custom leaderboard type, such as race, ox, etc.
     * @example
     * If you wanna update the leaderboard.
     * ```ts
     * app.game.updateRankList([{pid: '123', time: 99999}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public updateRankList(rankInfo: [{pid: string, time: number}],type: string): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            const req: pb.IUpdateGameRankListCmd = {
                ...this.serverConfig,
                rankInfo: rankInfo,
                type:type||''
            }
            const info = pb.UpdateGameRankListCmd.create(req)
            const arrBuffer = pb.UpdateGameRankListCmd.encode(info).finish()
            global.nano.request(ApiRoute.UPDATE_GAME_RANK_LIST, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Send a notification that the game is finish
     * @param pid - specifies the id of the user who received the notification
     * @example
     * If you want to send a game finish notification to the user with id 123
     * ```ts
     * app.game.finishGame('123')
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public finishGame(pid: string): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            const req: pb.IFinishGameCmd = {
                ...this.serverConfig,
                pid: pid
            }
            const info = pb.FinishGameCmd.create(req)
            const arrBuffer = pb.FinishGameCmd.encode(info).finish()
            global.nano.request(ApiRoute.FINISH_GAME, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Send a notification that the game is stop
     * @example
     * If you want to send a game stop notification to the all users
     * ```ts
     * app.game.stopGame()
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public stopGame(): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            const req: pb.IStopGameCmd = {
                ...this.serverConfig,
            }
            const info = pb.StopGameCmd.create(req)
            const arrBuffer = pb.StopGameCmd.encode(info).finish()
            global.nano.request(ApiRoute.STOP_GAME, arrBuffer, (dataEncode: Uint8Array) => {
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    // public gameEffect(pid: string, effect: string) {
    //     return new Promise(async(resolve, reject) => {

    //         const req: pb.IGameInteractiveEffectCmd = {
    //             ...this.serverConfig,
    //             pid: pid,
    //             effect: ""
    //         }
    //         const info = pb.GameInteractiveEffectCmd.create(req)
    //         const arrBuffer = pb.GameInteractiveEffectCmd.encode(info).finish()
    //         global.nano.request(ApiRoute.GAME_EFFECT, arrBuffer, (dataEncode: Uint8Array) => {
    //             const result = pb.Error.decode(dataEncode)
    //             if (result.Code == 'PIT-200') {
    //                 resolve(true)
    //             } else {
    //                 resolve(result.Msg)
    //             }
    //         })
    //     })
    // }
}

export {
    Game
}
