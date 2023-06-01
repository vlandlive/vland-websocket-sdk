import { Engine } from "./Engine";
import { Control } from "./Control";
import { Player } from "./Player"
import { Scene } from "./Scene";
import { Game } from "./Game";
import { Robot } from "./Robot";

class VlandApp {
    private engine?: Engine
    public control: Control
    public player: Player
    public scene: Scene
    public game: Game
    public robot: Robot

    wsconfig: {apiId: string, apiKey: string, eventId: string, spaceId: string, environment: string}

    constructor(wsconfig: {apiId: string, apiKey: string, eventId: string, spaceId: string, environment: string}) {

        this.wsconfig = wsconfig
        global.wsconfig = wsconfig

        this.engine = new Engine()
        this.control = new Control()
        this.player = new Player()
        this.scene = new Scene()
        this.game = new Game()
        this.robot = new Robot()
    }

    connect() {
        return new Promise(async(resolve, reject) => {
            let res = await this.engine?.start()
            resolve(res)
        })
        
    }

    disconnect() {
        this.robot.exitRobot([]);
        this.engine?.end()
        return {status: 200, message: "连接已断开"}
    }
}

export {
    VlandApp
}
