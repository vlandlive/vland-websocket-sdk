import { pb } from '../assets/proto/api';
import { ApiRoute, ServerPush, ServerConfig, RouteDic } from "./apiEnum";
import { Engine } from './Engine';
import { Player } from './Player'

export interface RobotData {
    name: string,
    birth: string,
    avatar: number
}
export interface RobotDataList {
    [id: string]: RobotData
}
class Robot {
    public listener!: Function;
    public player: Player;
    private robotIdList: any = [];

    constructor() {
        this.player = new Player();
    }

    private serverConfig = {
        eventId: global.wsconfig.eventId,
        spaceId: global.wsconfig.spaceId,
        apiKey: global.wsconfig.apiKey,
    }

    /**
     * Add robot from data list
     * @param dataList - A object contains every robot data.
     * @example
     * If you wanna add a robot with id 123.
     * ```ts
     * app.scene.addRobot({"123": {name: "robot", "birth": "specialArea1", "avatar": 1}})
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addRobot(dataList: RobotDataList): Promise<RobotData[]> {
        
        // 对json数据进行遍历 生成对应的机器人
        return new Promise(async (resolve, reject) => {
            let robotLits: any = [];
            this.robotIdList = [];
            for (let i in dataList) {
                this.robotIdList.push(i);
                const tempArr: any = {};
                tempArr.RobotId = i;
                tempArr.RobotName = dataList[i].name;
                const position = this.calculatedPosition(dataList[i].birth)
                const avatar = this.getAvatar(dataList[i].avatar)
                tempArr.Avatar = avatar
                tempArr.X = position.x
                tempArr.Y = position.y
                robotLits.push(tempArr)
            }
            //这里调用接口批量生成机器人 初始化只给坐标不给动作行为
            let temp: any = [];
            robotLits?.forEach((item: any) => {
                const req: pb.IRobotJoinInfo = {
                    RobotId: item?.RobotId,
                    RobotName: item?.RobotName,
                    Avatar: item?.Avatar,
                    X: item?.X,
                    Y: item?.Y,
                };
                let info = pb.RobotJoinInfo.create(req);
                temp.push(info)
            });

            const data = pb.RobotJoinCmd.create();
            data.joinInfoArr = temp;
            data.EventId = String(this.serverConfig.eventId);
            data.SpaceId = String(this.serverConfig.spaceId);
            // console.log(data, '??????????????')
            const arrBuffer = pb.RobotJoinCmd.encode(data).finish()
            global.nano?.request(ApiRoute.ROBOT_JOIN, arrBuffer, (dataEncode: Uint8Array) => {
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(this.robotIdList)
                } else {
                    resolve([])
                }
            })
        })
    }

    /**
     * Randomly generate an avatar
     * @event randomAvatar()
     * @returns avatar url
     */
    private randomAvatar() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 20]
        const r = arr[Math.floor((Math.random() * arr.length))]
        const str = "back/cs/outfit/" + r + "/show.png?timestamp=" + new Date().getTime() + "&code=1-" + r
        return str
    }

    /**
     * Get an avatar by index
     * @param avatar - the index of avatar, options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 20]
     * @event getAvatar()
     * @returns avatar url
     */
    private getAvatar(avatar: number) {
        const str = "back/cs/outfit/" + avatar + "/show.png?timestamp=" + new Date().getTime() + "&code=1-" + avatar
        return str
    }

    /**
     * Get a random coordinate point in the special area name
     * @param name - the name of special area
     * @event calculatedPosition()
     * @returns { x: number, y: number; index: number}
     */
    public calculatedPosition(name: string) {
        const info: any = {}
        for (let i of global.mapData.specialAreas) {
            if (i.name === name) {
                const randomNum = Math.round(Math.random() * (i.locations.length - 1))
                return {
                    x: i.locations[randomNum] % global.mapData.width,
                    y: Math.floor(i.locations[randomNum] / global.mapData.width),
                    index: i.index
                }
            }
        }

        return {
            x: Math.round(Math.random() * global.mapData.width),
            y: Math.round(Math.random() * global.mapData.high),
            index: -1
        }
    }

    /**
     * Move a robot to the specified coordinates
     * @param pid - robot id
     * @param x - x-coordinate
     * @param y - y-coordinate
     * @param message words said after moving to position
     * @example
     * If you wanna move a robot to [2,3] and say "hello".
     * ```ts
     * app.scene.moveRobot('123', 2, 3, 'hello')
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public moveRobot(pid: string, x: number, y: number, message: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            const req: pb.IRobotMoveCmd = {
                EventId: String(this.serverConfig.eventId),
                SpaceId: String(this.serverConfig.spaceId),
                RobotId: pid,
                X: x,
                Y: y,
                ChatMessage: message
            }
            const info = pb.RobotMoveCmd.create(req)
            const arrBuffer = pb.RobotMoveCmd.encode(info).finish()
            global.nano?.request(ApiRoute.ROBOT_MOVE, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Move a robot to the specified coordinates
     * @param idList - robots id list
     * @example
     * If you wanna remove robots with id '123' and id '456'.
     * ```ts
     * app.scene.exitRobot(['123', '456'])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public exitRobot(idList: string[]): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            const req: pb.IRobotExitCmd = {
                EventId: String(this.serverConfig.eventId),
                SpaceId: String(this.serverConfig.spaceId),
                RobotIdArr: idList?.length > 0 ? idList : this.robotIdList,
            }
            const info = pb.RobotExitCmd.create(req)
            const arrBuffer = pb.RobotExitCmd.encode(info).finish()
            global.nano?.request(ApiRoute.ROBOT_EXIT, arrBuffer, (dataEncode: Uint8Array) => {
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else {
                    reject(result.Msg)
                }
            })
        })
    }
}

export {
    Robot
}
