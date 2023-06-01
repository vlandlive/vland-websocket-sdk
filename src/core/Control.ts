import { __String } from '../../node_modules/typescript/lib/typescript';
import { pb } from '../assets/proto/api';
import { ApiRoute, ServerConfig } from "./apiEnum";

class Control {

    constructor() {

    }

    private serverConfig = {
        eventId: global.wsconfig.eventId,
        spaceId: global.wsconfig.spaceId
    }

    /**
     * Contorl function by event. (chat)
     * @param type - control content, option: ['chat']
     * @param status - switch status, option: [true, false]
     * @example
     * If you wanna open chat function by event.
     * ```ts
     * app.control.changeEventStatus("chat", true)
     * ```
     * If you wanna close chat function by evnet.
     * ```ts
     * app.control.changeEventStatus("chat", false)
     * ```
     * @throws Error message  
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message  
     */
    public changeEventStatus(type: string, status: boolean): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            let statusType: number = 0
            switch(type)
            {
                case 'chat':
                    statusType = 0
                    status = !status  // reverse 
                    break;
                default:
                    reject("type does not exist")
            }
            
            const req: pb.IChangeEventStatusCmd = {
                ...this.serverConfig,
                statusType: statusType,
                status: status
            }
            const cmd = pb.ChangeEventStatusCmd.create(req)
            const arrBuffer = pb.ChangeEventStatusCmd.encode(cmd).finish()

            global.nano.request(ApiRoute.CHANGE_EVENT_STATUS, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Contorl function by space. (microphone, camera, sharescreen)
     * @param type - control content, option: ['microphone', 'camera', 'sharescreen']
     * @param status - switch status, option: [true, false]
     * @example
     * If you wanna open microphone function by event.
     * ```ts
     * app.control.changeSpaceStatus("microphone", true)
     * ```
     * If you wanna close camera function by evnet.
     * ```ts
     * app.control.changeSpaceStatus("camera", false)
     * ```
     * @throws Error message
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message    
     */
    public changeSpaceStatus(type: string, status: boolean): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            // MuteStatus = 0,
            // CameraStatus = 1,
            // ShareScreenStatus = 2
            let statusType: number = 0
            switch(type)
            {
                case 'microphone':
                    statusType = 0
                    break;
                case 'camera':
                    statusType = 1
                    break;
                case 'sharescreen':
                    statusType = 2
                    break;
                default:
                    reject("type does not exist")
            }

            const req: pb.IChangeSpaceStatusCmd = {
                ...this.serverConfig,
                statusType: statusType,
                status: status
            }
            const cmd = pb.ChangeSpaceStatusCmd.create(req)
            const arrBuffer = pb.ChangeSpaceStatusCmd.encode(cmd).finish()

            global.nano.request(ApiRoute.CHANGE_SPACE_STATUS, arrBuffer, (dataEncode: Uint8Array) => {
                const result = pb.Error.decode(dataEncode)
                if (result.Code == 'PIT-200') {
                    resolve(true)
                } else if (result.Code == 'PIT-999') {
                    reject("true but no change")
                } else {
                    reject(result.Msg)
                }
            })
        })
    }

    /**
     * Control background music.
     * @param scope - control scope, option: ['space', 'event']
     * @param status - background music status, option: [0, 1, 2], 0:reset, 1:start, 2:suspended
     * @param bgm - background music infomation, contains: {name, url, volume}
     * @example
     * If you wanna play a music as bgm by event.
     * ```ts
     * app.control.handleBgm("event", 1, {name: "test", url: "https://xxxx.mp3", 0.6})
     * ```
     * If you wanna pause bgm by space.
     * ```ts
     * app.control.handleBgm("event", 2, {name: "test", url: "https://xxxx.mp3", 0.6})
     * ```
     * @throws Error message
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message    
     */
    public handleBgm(scope: string, status: number, bgm: {name: string, url: string, volume: number}): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            // RESET = 0,
            // START = 1,
            // SUSPENDED = 2
            let scopeNum: number = 0
            switch(scope)
            {
                case 'space':
                    scopeNum = 0
                    break;
                case 'event':
                    scopeNum = 1
                    break;
                default:
                    reject("scope error")
            }
            const req: pb.IChangeBgmCmd = {
                ...this.serverConfig,
                scope: scopeNum,
                name: bgm.name,
                url: bgm.url,
                Status: status,
                volume:  bgm.volume
            }
            const info = pb.ChangeBgmCmd.create(req)
            const arrBuffer = pb.ChangeBgmCmd.encode(info).finish()

            global.nano.request(ApiRoute.CHANGE_BGM, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Open a interactive object popup.  (file, video, picture, live)
     * Only live streaming in m3u8 format is supported.
     * @param type - type of interactive object, option: ['file', 'video', 'picture', 'live']
     * @param content - link of interactive object
     * @param background - background color of popup
     * @param style - the position of popup, option: ["fullscreen", "center"]
     * @example
     * If you wanna open file popup with transparent background in full screen.
     * ```ts
     * app.control.openPopup("file", "https://xxxx.pdf", "rgba(0,0,0,0)", "fullscreen")
     * ```
     * If you wanna open live popup in the middle of the screen. 
     * ```ts
     * app.control.openPopup("live", "https://xxxx.m3u8", "rgba(0,0,0,0.7)", "center")
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public openPopup(type: string, content: string, background: string, style: string): Promise<boolean> {
        // LocalFile = 0,
        // LocalVideo = 1,
        // LocalPicture = 2,
        // LiveStream = 3,
        return new Promise((resolve, reject)=>{
            let timestamp = new Date().getTime().toString()

            let typeNum: number = 0
            let styleNum: number = 1
            switch(type)
            {
                case 'file':
                    typeNum = 0
                    break;
                case 'video':
                    typeNum = 1
                    break;
                case 'picture':
                    typeNum = 2
                    break;
                case 'live':
                    typeNum = 3
                    break;
                default:
                    reject("type error")
            }
            switch(style)
            {
                case 'fullscreen':
                    styleNum = 1
                    break;
                case 'center':
                    styleNum = 2
                    break;
                default:
                    reject("style error")
            }

            const req: pb.IBroadcastEventSpecialEffectsCmd = {
                specialEffectInfo: {
                    EventId: this.serverConfig.eventId,
                    Name: timestamp,
                    Background: background || "rgba(0,0,0,0.7)",
                    Type: typeNum,
                    Content: content,
                    Style: styleNum || 1
                }
            }
            const cmd = pb.BroadcastEventSpecialEffectsCmd.create(req)
            const arrBuffer = pb.BroadcastEventSpecialEffectsCmd.encode(cmd).finish()

            global.nano.request(ApiRoute.BROADCAST_EVENT_SPECIAL_EFFECTS, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Open a sticky note popup. 
     * @param content - content of sticky notes
     * @param background - background color of popup
     * @example
     * If you wanna open sticky note popup with black background.
     * ```ts
     * app.control.openNote("this is a note", "rgba(0,0,0,1)")
     * ```
     * @throws Error message    
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public openNote(content: string, background: string): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            // StickyNote = 4,
            // Whiteboard = 5,
            // HyperlinkIframe = 6,
            // HyperlinkWindow = 7,
            // SpecialEffects = 8
            let timestamp = new Date().getTime().toString()

            let typeNum: number = 4

            const req: pb.IBroadcastEventSpecialEffectsCmd = {
                specialEffectInfo: {
                    EventId: this.serverConfig.eventId,
                    Name: timestamp,
                    Background: background || "rgba(0,0,0,0.7)",
                    Type: typeNum,
                    Content: content,
                }
            }
            const cmd = pb.BroadcastEventSpecialEffectsCmd.create(req)
            const arrBuffer = pb.BroadcastEventSpecialEffectsCmd.encode(cmd).finish()

            global.nano.request(ApiRoute.BROADCAST_EVENT_SPECIAL_EFFECTS, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Open a iframe popup. 
     * @param content - content of sticky notes
     * @param background - background color of popup
     * @param style - the position of popup, option: ["fullscreen", "center"]
     * @param developerMode - the iframe in developer mode can be passed to you after the link ```vlandId``` and ```vlandName```
     * @example
     * If you wanna open a iframe popup in developer mode.
     * ```ts
     * app.control.openIframe("https://xxxxxx.com", "rgba(0,0,0,0.7)", "fullscreen", true)
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message  
     */
    public openIframe(content: string, background: string, style: string, developerMode: boolean): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            let timestamp = new Date().getTime().toString()

            let typeNum: number = 6
            let styleNum: number = 1
            switch(style)
            {
                case 'fullscreen':
                    styleNum = 1
                    break;
                case 'center':
                    styleNum = 2
                    break;
                default:
                    reject("style error")
            }

            const req: pb.IBroadcastEventSpecialEffectsCmd = {
                specialEffectInfo: {
                    EventId: this.serverConfig.eventId,
                    Name: timestamp,
                    Type: typeNum,  
                    Content: content,
                    Background: background || "rgba(0,0,0,0.7)", 
                    developerMode: developerMode,
                    Style: styleNum || 1           
                }
            }
            const cmd = pb.BroadcastEventSpecialEffectsCmd.create(req)
            const arrBuffer = pb.BroadcastEventSpecialEffectsCmd.encode(cmd).finish()

            global.nano.request(ApiRoute.BROADCAST_EVENT_SPECIAL_EFFECTS, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Pop up a message to remind the user.
     * @param type - type of message, option: ["success", "warning", "error", "info"]
     * @param content - content of message
     * @param duration - duration of message, milliseconds
     * @param pidArr - pid list of users receiving notifications, [] means all users
     * @example
     * If you wanna pop up a message to all users
     * ```ts
     * app.control.gameToast("success", "Hello world!", 3000, [])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public gameToast(type: string, content: string, duration: number, pidArr: string[]): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            const req: pb.IGameToastCmd = {
                ...this.serverConfig,
                type: type,
                content: content,
                duration: duration || 2000,
                pidArr: pidArr || []
            }
            const info = pb.GameToastCmd.create(req)
            const arrBuffer = pb.GameToastCmd.encode(info).finish()
            global.nano.request(ApiRoute.GAME_TOAST, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Pop up a widget for customize api game.
     * @param pidArr - pid list of users receiving notifications, [] means all users
     * @param type - type of widget, please contact Vland staff to customize type
     * @param url - content of widget, please contact Vland staff to customize content
     * @param param - customize params for widget
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public openComponent(pidArr: any, type: string, url: string, param: string): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            const req: pb.IShowWidgetCmd = {
               eventId:this.serverConfig.eventId,
               spaceId:this.serverConfig.spaceId,
               pidArr:pidArr,
               type:type,
               url:url,
               param:param
            }
            const info = pb.ShowWidgetCmd.create(req)
            const arrBuffer = pb.ShowWidgetCmd.encode(info).finish()
            global.nano.request(ApiRoute.SHOW_WIDHET, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Pop up a message to remind the user.
     * @param canHandUp - whether to allow all users to raise their hands
     * @param canAutoMove - whether to allow all users to use automatic wayfinding
     * @param canFollow - whether to allow all users to follow others
     * @example
     * If you want to disable all features
     * ```ts
     * app.control.changeSpaceSetting(false, false, false)
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message   
     */
    public changeSpaceSetting(canHandUp: boolean, canAutoMove: boolean, canFollow: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {

            const req: pb.IChangeSpaceSettingCmd = {
                ...this.serverConfig,
                canHandUp: canHandUp,
                canAutoMove: canAutoMove,
                canFollow: canFollow,
            }

            const info = pb.ChangeSpaceSettingCmd.create(req)
            const arrBuffer = pb.ChangeSpaceSettingCmd.encode(info).finish()

            global.nano.request(ApiRoute.CHANGE_SPACE_SETTING, arrBuffer, (dataEncode: Uint8Array) => {
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
    Control
}
