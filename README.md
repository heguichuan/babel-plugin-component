# babel-plugin-component-adaptor

> forked from [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)
> 用于对组件库的降级适配

安装

```bash
npm i -D babel-plugin-component-adaptor
```

配置

```javascript
// .babelrc
{
    "plugins": [
        [
            "component-adaptor",
            {
                "libraryName" : "onenet-ui",
                "fallbackLibraryName" : "element-ui",
                "styleLibraryName": "theme-chalk",
                "componentsFilePath": "onenet-ui/components.json"
            }
        ]
    ]
}
```

注意事项

1. 目前`componentsFilePath`配置项只支持`json`格式。
