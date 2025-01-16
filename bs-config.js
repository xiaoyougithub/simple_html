// @see https://browsersync.io/docs/options/
module.exports = {
    // "ui": {
    //     "port": 3001,
    //     "weinre": {
    //         "port": 8080
    //     }
    // },
    "files": ["**/*.css", "**/*.html", "**/*.js"],
    "watchOptions": {
      ignore: '.*',
      usePolling: true, // 开启轮询监听文件变化
      interval: 200 // 轮询间隔ms
    },
    "server": {
      // baseDir: "src"
    },
    // "proxy": false,
    "port": 8080,
    // "middleware": false,
    // "serveStatic": [],
    // "ghostMode": {
    //     "clicks": true,
    //     "scroll": true,
    //     "forms": {
    //         "submit": true,
    //         "inputs": true,
    //         "toggles": true
    //     }
    // },
    // "logLevel": "info",
    // "logPrefix": "Browsersync",
    // "logConnections": false,
    // "logFileChanges": true,
    // "logSnippet": true,
    // "rewriteRules": false,
    "open": false,
    // "browser": ["google chrome"],
    // "xip": false,
    // "hostnameSuffix": false,
    // "reloadOnRestart": true,
    "notify": false,
    // "scrollProportionally": true,
    // "scrollThrottle": 0,
    // "scrollRestoreTechnique": "window.name",
    // "scrollElements": [],
    // "scrollElementMapping": [],
    // "reloadDelay": 0,
    // "reloadDebounce": 0,
    // "plugins": [],
    // "injectChanges": true,
    // "startPath": null,
    // "minify": true,
    // "host": null,
    // "codeSync": true,
    // "timestamps": true,
    // "clientEvents": [
    //     "scroll",
    //     "scroll:element",
    //     "input:text",
    //     "input:toggles",
    //     "form:submit",
    //     "form:reset",
    //     "click"
    // ],
    // "socket": {
    //     "socketIoOptions": {
    //         "log": false
    //     },
    //     "socketIoClientConfig": {
    //         "reconnectionAttempts": 50
    //     },
    //     "path": "/browser-sync/socket.io",
    //     "clientPath": "/browser-sync",
    //     "namespace": "/browser-sync",
    //     "clients": {
    //         "heartbeatTimeout": 5000
    //     }
    // },
    // "tagNames": {
    //     "less": "link",
    //     "scss": "link",
    //     "css": "link",
    //     "jpg": "img",
    //     "jpeg": "img",
    //     "png": "img",
    //     "svg": "img",
    //     "gif": "img",
    //     "js": "script"
    // }
};