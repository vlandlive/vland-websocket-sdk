
# Vland Websocket SDK ( Node.JS )
We provide a highly efficient Websocket SDK based on the Vland platform, which includes various built-in interfaces for easy access and modification of the environment and character states within the scene. In addition, our SDK supports customized development, allowing you to quickly build various small games and add more fun and excitement to your application. Let's work together to create a better and more enriched virtual world!


## Documentation

[Vland websocket sdk doc (nodejs)](https://cocos.vland.live/docs/)


## Installation

Install Vland websocket sdk with npm

```bash
  cd my-node-project
  npm install vlandapi
```
    
## Running

To use sdk, run the following command

```js
// Import VlandApp
import {VlandApp} from 'vlandapi'

// Configuration parameters {apiId，apiKey，eventId，spaceId}
const wsconfig = {
  // user vland id, can be found in https://us.vland.live/app
  apiId: "4178966954",
  // The apikey for your vland event
  apiKey: "7mXWDiDDy6Y********3NCLFPG4C6Y",
  eventId: "63523daf0b7d2c1993b83325",
  spaceId: "6425286902055d1eadbf038b",
  // `cn` for China, `us` for Others (default)
  environment: "us" 
}

// create an app instance
let app = new VlandApp(wsconfig)
```


## Example

If you wanna get the information of all users. You will get ```Position[]```
```js
app.player.getPlayerInfo([])
```

If you wanna add [2, 2] and [4, 6] as obstacles.
```js
app.scene.addSpaceMapObstacle([{x: 2, y: 2}, {x: 4, y: 6}])
```

If you want to disable all features (canHandUp, canAutoMove, canFollow)
```js
app.control.changeSpaceSetting(false, false, false)
```



## Support

For support, email vland.live@gmail.com

