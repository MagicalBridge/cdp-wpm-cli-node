# example

this id first egg project

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 快速初始化egg项目
按照官方文档的说明，初始化egg其实非常简单概括为三个步骤:
```bash
# 创建 egg-example 目录 并且进入目录
$ mkdir egg-example && cd egg-example
# 执行脚手架的初始化
$ npm init egg --type=simple
# 安装依赖
$ npm install 
```

### 启动项目
安装完成依赖之后，执行:
```bash
npm run dev 
```

控制台出现如下信息说明启动成功，项目默认监听的端口是`7001`
```bash
node version v8.15.1
egg version 2.26.0
agent_worker#1:31919 started (1172ms)
egg started on http://127.0.0.1:7001 (2385ms)
```

浏览器窗口输入`http://127.0.0.1:7001` 看到页面输出 `hi, egg` 说明项目启动成功


[egg]: https://eggjs.org

## egg中如何获取get请求的参数？
和koa非常类似，使用query 参数 现在有一个场景,有一个新闻详情页面需要根据url的参数渲染不同的内容，实现这个需求。
这就是典型的 ?xxx=yyy&xxx=yyy 这种参数的传递场景。

使用
this.ctx.query 能够拿到参数列表

## egg 处理动态路由处理
这里的动态路由和很多前端框架是一样的，需要做相应的配置工作。
使用ctx.params.xxx 来获取动态路由传值

## egg 使用模板引擎
egg有对应的模板引擎 egg-view-ejs github 上有对应的介绍。
这算是一个插件 如果想要使用插件需要在 config 文件目录下进行配置。

遇到了部分的问题, 无法正确的读取文件的路径:
经过排查发现:在config 的配置中将.ejs后缀名称修改为html，相应的view下面的改成html后缀

## egg 读取静态资源
需要在资源前面添加 public 目录前缀。

## egg 服务如何使用
服务其实也是一个类，按照react的那种写法。
一个服务中可以暴露多个方法,并且一个服务可以为多个ctl 提供服务。
这里有一个疑问，这样的设计不会不容易维护吗 我们希望还是 一个服务只为一个ctl
提供服务

## egg 中全局变量的使用
egg 框架封装的特别好,我们在 config 中定义的变量在全局环境下都是可以使用的。
例如 我们在全局环境下 定义 一个api  这全局的变量既可以子服务中使用 也可以在
service 中使用。

## egg 中的服务的相互调用
egg 中服务也是可以相互进行调用的。











