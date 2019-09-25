# my-project

> vue-cli

## Build Setup

``` bash
#全局安装脚手架vue-cli
npm install --global vue-cli

#创建一个基于webpack模板的项目
vue init webpack my-project

# 切换路径，安装依赖（install dependencies）
cd my-project
npm install

# 部署运行开发环境（serve with hot reload at localhost:8080）
npm run dev

# 打包(build for production with minification)
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


`理解步骤： index.html--> main.js --> App.vue -->`
```html
说明：
assets目录：
在项目编译的过程中会被webpack处理解析为模块依赖，只支持相对路径的形式，如< img src=”./logo.png”>和background:url(./logo.png),”./logo.png”是相对资源路径，将有webpack解析为模块依赖

static目录：
在这个目录下文件不会被webpack处理,简单就是说存放第三方文件的地方，不会被webpack解析。他会直接被复制到最终的打包目录(默认是dist/static)下。必须使用绝对路径引用这些文件，这是通过config.js文件中的build.assetsPublic和build.assertsSubDirectory链接来确定的。任何放在static/中文件需要以绝对路径的形式引用：/static[filename]
　根据webpack的特性，总的来说就是static放不会变动的，第三档的文件，asserts放可能会变动的文件
```
