const path = require('path');

module.exports = {
    "plugins": [
        [
            "./src/index.js",
            {
                "libraryName" : "@cmiot/onenet-ui",
                "fallbackLibraryName" : "element-ui",
                "styleLibraryName": "theme-chalk",
                "componentsFilePath": path.resolve(__dirname, "./test/components.json")
            }
        ]
    ]
}