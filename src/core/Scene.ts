import { pb } from '../assets/proto/api';
import { ApiRoute, ServerConfig } from "./apiEnum";
import { Base64 } from '../../node_modules/js-base64/base64';
import axios from '../../node_modules/axios/index';

export interface birthPoint {
    x: number,
    y: number,
    weight: number
}

export interface Landmark {
    id: string,
    name: string,
    x: number,
    y: number
}

export interface Coordinates {
    x: number,
    y: number
}

export interface Portal {
    locations: Coordinates[]
    target: {
        eventId: string
        spaceId: string
        type: number
        anchorId: string
        anchorName: string
    }
    skipConfirmation: boolean
}

export interface SpecialArea {
    name: string,
    index: string,
    locations: Coordinates[]
}

export interface MapData {
    birthplaces: birthPoint[]
    width: number
    high: number,
    obstacles: any,
    privacies: any,
    pcu: number,
    autoDuplicated: boolean,
    landmarks: Landmark[],
    portals: Portal[],
    specialAreas: SpecialArea[]
}

class Scene {

    constructor() {

    }

    private serverConfig = {
        eventId: global.wsconfig.eventId,
        spaceId: global.wsconfig.spaceId,
        apiKey: global.wsconfig.apiKey
    }

    /**
     * Get space map information.
     * @example
     * If you wanna get the information of the map.
     * ```ts
     * app.scene.getSpaceMapInfo()
     * ```
     * @throws Error message    
     */
    public getSpaceMapInfo(): Promise<MapData> {
        return new Promise((resolve, reject) => {
            let url = "https://us-api.vland.live"
            if (global.wsconfig.environment == "cn") { 
                url = "https://api.vland.live"
            }

            axios({
                method: 'get',
                url: url+'/sdk/space/expand/'+this.serverConfig.spaceId,
                headers: {
                    "APIKEY": Base64.encode(this.serverConfig.apiKey)
                },
            }).then(function (response) {
                console.log(response.data)
                const result = response.data.data
                resolve(result)
            });
        })
    }


    /**
     * Obtain the temporary information changed through the API in the space.
     * @example
     * If you wanna get the temporary information of the map.
     * ```ts
     * app.scene.getSpaceTempInfo()
     * ```
     * @throws Error message    
     */
    public getSpaceTempInfo(): Promise<pb.SpaceMapInfo> {
        return new Promise((resolve, reject) => {
            const req: pb.IAddSpaceMapBirthCmd = {
                ...this.serverConfig,
            }

            const arrbuffer = pb.GetSpaceMapInfoCmd.encode(req).finish();

            global.nano.request(ApiRoute.GET_SPACE_MAP_INFO, arrbuffer, (dataEncode: Uint8Array) => {
                const result = pb.SpaceMapInfo.decode(dataEncode)
                resolve(result)
            })
        })
    }

    /**
     * Add spawn points of maps in batches.
     * @param birthPointArr -x & y coordinates list
     * @example
     * If you wanna add [2, 2] and [4, 6] as map spawn points.
     * ```ts
     * app.scene.addSpaceMapBirth([{x: 2, y: 2}, {x: 4, y: 6}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceMapBirth(birthPointArr: Coordinates[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const req: pb.IAddSpaceMapBirthCmd = {
                ...this.serverConfig,
                birthPointArr: birthPointArr
            }
            const info = pb.AddSpaceMapBirthCmd.create(req)
            const arrBuffer = pb.AddSpaceMapBirthCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_BIRTH, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Remove spawn points of the map in batches. Not only the birth point added by using the API, but also the original birth point of the map can be removed. But when everyone leaves, the map data will be reset.
     * @param birthPointArr - x & y coordinates list
     * @example
     * If you wanna remove the [2, 2] map spawn point. 
     * ```ts
     * app.scene.removeSpaceMapBirth([{x: 2, y: 2}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public removeSpaceMapBirth(birthPointArr: Coordinates[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const req: pb.IRemoveSpaceMapBirthCmd = {
                ...this.serverConfig,
                birthPointArr: birthPointArr
            }
            const info = pb.RemoveSpaceMapBirthCmd.create(req)
            const arrBuffer = pb.RemoveSpaceMapBirthCmd.encode(info).finish()

            global.nano.request(ApiRoute.REMOVE_SPACE_MAP_BIRTH, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Add obstacles to the map
     * @example
     * @param obstacleArr - x & y coordinates list
     * If you wanna add [2, 2] and [4, 6] as obstacles.
     * ```ts
     * app.scene.addSpaceMapObstacle([{x: 2, y: 2}, {x: 4, y: 6}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceMapObstacle(obstacleArr: Coordinates[]): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            let arr: number[] = []

            let mapInfo = await this.getSpaceMapInfo() as { width: number, high: number }

            obstacleArr.forEach((item: {x:number, y:number}) => {
                arr.push( item.y * mapInfo.width + item.x)
            }) 

            // console.log(arr)

            const req: pb.IAddSpaceMapObstacleCmd = {
                ...this.serverConfig,
                obstacleArr: arr
            }
            const info = pb.AddSpaceMapObstacleCmd.create(req)
            const arrBuffer = pb.AddSpaceMapObstacleCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_OBSTACLE, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Remove obstacles of the map in batches. Not only the obstacles added by using the API, but also the original obstacles of the map can be removed. But when everyone leaves, the map data will be reset.
     * @param obstacleArr - x & y coordinates list
     * @example
     * If you wanna remove the [2, 2] map obstacle. 
     * ```ts
     * app.scene.removeSpaceMapObstacle([{x: 2, y: 2}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public removeSpaceMapObstacle(obstacleArr: Coordinates[]): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            let arr: number[] = []

            let mapInfo = await this.getSpaceMapInfo() as { width: number, high: number }

            obstacleArr.forEach((item: {x:number, y:number}) => {
                arr.push( item.y * mapInfo.width + item.x)
            }) 

            // console.log(arr)


            const req: pb.IRemoveSpaceMapObstacleCmd = {
                ...this.serverConfig,
                obstacleArr: arr
            }
            const info = pb.RemoveSpaceMapObstacleCmd.create(req)
            const arrBuffer = pb.RemoveSpaceMapObstacleCmd.encode(info).finish()

            global.nano.request(ApiRoute.REMOVE_SPACE_MAP_OBSTACLE, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Add landmark point to the map
     * @param landMarkArr - landmark info list, every item contains {anchorId, anchorName, x, y}
     * @example
     * If you wanna add [2, 3] as a landmark point.
     * ```ts
     * app.scene.addSpaceMapLandmark([{id: "123", name: "test landmark", x: 2, y: 3, }])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceMapLandmark(landMarkArr: Landmark[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const req: pb.IAddSpaceMapLandMarkCmd = {
                ...this.serverConfig,
                landMarkArr: landMarkArr
            }
            const info = pb.AddSpaceMapLandMarkCmd.create(req)
            const arrBuffer = pb.AddSpaceMapLandMarkCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_LANDMARK, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Remove landmark points of the map in batches. Not only the landmark points added by using the API, but also the original landmark points of the map can be removed. But when everyone leaves, the map data will be reset.
     * @param landMarkIdArr - landmark id list
     * @example
     * If you wanna remove the map landmark point by id.
     * ```ts
     * app.scene.removeSpaceMapLandmark(['123'])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public removeSpaceMapLandmark(landMarkIdArr: string[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const req: pb.IRemoveSpaceMapLandMarkCmd = {
                ...this.serverConfig,
                landMarkIdArr: landMarkIdArr
            }
            const info = pb.RemoveSpaceMapLandMarkCmd.create(req)
            const arrBuffer = pb.RemoveSpaceMapLandMarkCmd.encode(info).finish()

            global.nano.request(ApiRoute.REMOVE_SPACE_MAP_LANDMARK, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Add a portal to the random birth point. You can also set to send directly without confirmation.
     * @param portal - x & y coordinates list
     * @param skipConfirmation - whether to send confirmation
     * @example
     * If you wanna add [2, 2] to [2, 3] as a portal to the random birth point without confirmation.
     * ```ts
     * app.scene.addSpaceBirthPortal([{x: 2, y: 2}, {x: 2, y: 3}], true)
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceBirthPortal(portal: Coordinates[], skipConfirmation: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let portalArr = [{
                locations: portal,
                portTarget: {
                    ...this.serverConfig,
                    targetType: 2,
                },
                skipConfirmation: skipConfirmation
            }]
            console.log(portalArr)

            const req: pb.IAddSpaceMapPortalCmd = {
                ...this.serverConfig,
                portalArr: portalArr
            }

            const info = pb.AddSpaceMapPortalCmd.create(req)
            const arrBuffer = pb.AddSpaceMapPortalCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_PORTAL, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Add a portal to the designated landmark. You can also set to send directly without confirmation.
     * @param portal - x & y coordinates list
     * @param anchor - designated landmark info, contains {anchorId, anchorName}
     * @param skipConfirmation - whether to send confirmation
     * @example
     * If you wanna add [2, 2] to [2, 3] as a portal to the designated landmark with confirmation.
     * ```ts
     * app.scene.addSpaceMarkPortal([{x: 2, y: 2}, {x: 2, y: 3}], {"123", "test landmark"}, false)
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceMarkPortal(portal: [], anchor: { anchorId: string, anchorName: string }, skipConfirmation: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let portalArr = [{
                locations: portal,
                portTarget: {
                    ...this.serverConfig,
                    targetType: 1,
                    anchorId: anchor.anchorId,
                    anchorName: anchor.anchorName
                },
                skipConfirmation: skipConfirmation
            }]
            console.log(portalArr)

            const req: pb.IAddSpaceMapPortalCmd = {
                ...this.serverConfig,
                portalArr: portalArr
            }

            const info = pb.AddSpaceMapPortalCmd.create(req)
            const arrBuffer = pb.AddSpaceMapPortalCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_PORTAL, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Remove portals of the map in batches. Not only the portals added by using the API, but also the original portals of the map can be removed. But when everyone leaves, the map data will be reset.
     * @param portal - x & y coordinates list
     * @example
     * If you wanna remove the [2, 2] map portals. 
     * ```ts
     * app.scene.removeSpaceMapPortal([{x: 2, y: 2}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public removeSpaceMapPortal(portal: []): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const req: pb.IRemoveSpaceMapPortalCmd = {
                ...this.serverConfig,
                portalPointArr: portal
            }
            const info = pb.RemoveSpaceMapPortalCmd.create(req)
            const arrBuffer = pb.RemoveSpaceMapPortalCmd.encode(info).finish()

            global.nano.request(ApiRoute.REMOVE_SPACE_MAP_PORTAL, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Add materials to map.
     * @param gridMaterialArr - material info, contains {x, y ,materialType, content}. MaterialType must be 0. Because currently only images are supported.
     * @example
     * If you wanna add a picture to [2, 3].
     * ```ts
     * app.scene.addSpaceMapGridMaterial([{x: 2, y: 3, materialType: 0, content: "https://xxxxxx.png"}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public addSpaceMapGridMaterial(gridMaterialArr: []): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            let arr: any = []

            let mapInfo = await this.getSpaceMapInfo() as { width: number, high: number }

            gridMaterialArr.forEach((item: {grid:number, x:number, y:number}) => {
                item.grid = item.y * mapInfo.width + item.x
                arr.push(item)
            }) 

            // console.log(arr)


            const req: pb.IAddSpaceMapGridMaterialCmd = {
                ...this.serverConfig,
                gridMaterialArr: arr
            }
            const info = pb.AddSpaceMapGridMaterialCmd.create(req)
            const arrBuffer = pb.AddSpaceMapGridMaterialCmd.encode(info).finish()

            global.nano.request(ApiRoute.ADD_SPACE_MAP_GRIDMATERIAL, arrBuffer, (dataEncode: Uint8Array) => {
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
     * Clear all materials from specify coordinate point.
     * @param gridArr - x & y coordinates list
     * @example
     * If you wanna remove all materials from [2, 3].
     * ```ts
     * app.scene.clearSpaceMapGridMaterial([{x: 2, y: 3}])
     * ```
     * @throws Error message 
     * @returns If it is successfully sent to the server, it will return ```true```. Otherwise it will return an error message
     */
    public clearSpaceMapGridMaterial(gridArr: []): Promise<boolean> {
        return new Promise(async(resolve, reject) => {

            let arr: number[] = []

            let mapInfo = await this.getSpaceMapInfo() as { width: number, high: number }

            gridArr.forEach((item: {x:number, y:number}) => {
                arr.push(item.y * mapInfo.width + item.x)
            }) 

            console.log(arr)

            const req: pb.IClearSpaceMapGridMaterialCmd = {
                ...this.serverConfig,
                gridArr: arr,
            }
            const info = pb.ClearSpaceMapGridMaterialCmd.create(req)
            const arrBuffer = pb.ClearSpaceMapGridMaterialCmd.encode(info).finish()
            global.nano.request(ApiRoute.CLEAR_SPACE_MAP_GRIDMATERIAL, arrBuffer, (dataEncode: Uint8Array) => {
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
    Scene
}
