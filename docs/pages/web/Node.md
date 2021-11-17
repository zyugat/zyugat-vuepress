# Node

## 原生

**包引入**

`let a = require('./路径')`

****



创建第一个Web服务器

```js
let http = require('http')
let server = http.createServer()	// 创建web服务器
server.on('request', function (request, response) {
  console.log('收到了客户端', request.url)
  response.write('hello')
  response.end()	// 记得end()，否则客户端会一直等待
  if (request.url === '/login'){
    console.log('login页面')
  }
})
server.listen(3000, function () {
  console.log('服务器启动成功')
})
```



`response.write(data)`：向客户端发送响应数据

**request**：请求对象

请求对象可以用来**获取客户端**的一些请求数据，如请求路径

**response**：响应对象

响应对象可以给客户端发送响应消息



****



### 多路径相应

获取到用户路径（`req.url`），根据路径做出对应操作

`JSON.stringify(data)`：将数据转换为JSON格式

```js
server.on('request', function (req, res) {
  console.log('收到了客户端', req.url)
  // 获取url
  let url = req.url
  if (url === '/') {
    res.end('index page')
  } else if (url === '/login') {
    let users = [
      {
       	name: 'user1' ,
        psw: 123456
      }
    ]
    // 转换数据
    res.end(JSON.stringify(users))
  } else {
    res.end('404')
  }
})
```



****



### 读取文件

`fs.readFile(url, callback)`：通过fs模块读取文件

```js
let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (req, res) {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/test.html', function (err, data) {
      if (err) {
        res.end('文件读取失败')
      } else {
        res.end(data)
      }
    })
  } else if (url === '/img') {
    fs.readFile('./resource/testimg.png', function (err, data) {
      if (err) {
        res.end('文件读取失败')
      } else {
        res.end(data)
      }
    })
  }
})

server.listen(3000, function () {
  console.log('服务器启动成功')
})
```



****



### 模板

html模板中，通过 `each comments` 与`/each`将我们要遍历的评论包括其中，可以直接通过`$value.属性名`**直接获取值**



```html
<body>
  <div class="header container">
    <div class="page-header">
      <h1>Example page header <small>Subtext for header</small></h1>
      <a class="btn btn-success" href="/post">发表留言</a>
    </div>
  </div>
  <div class="comments container">
    <ul class="list-group">
      {{each comments}}
      <li class="list-group-item">{{ $value.name }}说：{{ $value.message }} <span class="pull-right">{{ $value.dateTime }}</span></li>
      {{/each}}
    </ul>
  </div>
```



解析地址获取url->`pathname`

读取**index.html**文件，向里面传递数据->`template.render`

```js
let http = require('http')
let url = require('url')
let fs = require('fs')
let template = require('art-template')
// 设置数据
let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]
http.createServer(function (req, res) {
  // 解析地址并转换为对象
  let parseObj = url.parse(req.url, true)
  // 获取url
  let pathname = parseObj.pathname
  
  // 主页
  if (pathname === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found')
      }
      // 关键是这里！！！
      // 通过调用template.render将数据传递到模板中
      let htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
    // 提交页面
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
    // 根据路径返回文件
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    // 获取数据
    let comment = parseObj.query
    comment.dataTime = '2021-1-1 11:11:11'
    comments.push(comment)
		
    // 重定向，状态码只要的 302 浏览器就会去找Location
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
  })
	// 监听端口
  .listen(3000, function () {
  console.log('running...')
})
```



## Express

安装express

```shell
npm i express -s
```



**简单的hello world**

通过`app.use(url, 本地路径)`开放静态目录

也可以省略第一参数：`app.use(express.static('./public/'))`

他的路径是：`/a/public/路径名`目录下的具体路径

但是在浏览器中是：`/a/路径名`不用加public

```js
let express = require('express')

let app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

// 开放指定目录
app.use('/public/', express.static('./public/'))

app.listen(3000, function () {
  console.log('app is running at port 3000')
})
```



****



安装nodemon

```shell
npm i nodemon
nodemon app.js
```





****



### 模板

安装 art-template 模板引擎

```shell
npm i art-template
npm i express-art-template
```



获取GET参数：`req.query`

获取POST参数需要下载插件`body-parser`

```shell
npm i body-parser
```



```js
var express = require('express')
// 0. 导包
var bodyParser = require('body-parser')

var app = express()

// 配置body-pareser
// 加入这个配置，则 req 请求对象上会多出一个属性：body
// 可以通过 req.body 获取表单请求体数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```



复刻原生的模板

```js
let express = require('express')
let bodyParser = require('body-parser')
let app = express()

app.use(express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false}))

app.engine('html', require('express-art-template'))
app.use(bodyParser.json())

// 设置数据
let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.get('/', function (req, res) {
  res.render('index.html', {
    comments:comments
  })
})

app.get('/post', function (req, res){
  res.render('post.html')
})

// app.get('/pinglun', function (req, res) {
//   let comment = req.query
//   comment.dataTime = '2017-11-5 10:58:51'
//   comments.unshift(comment)
//   res.redirect('/')
// })

app.post('/post', function (req, res) {
  // req.query只能拿 get 请求参数
  console.log('收到表单请求')
  console.log(JSON.stringify(req.body, null, 2))
})

app.get('/admin', function (req, res) {
  res.render('admin/index.html', {
    title: '管理系统',
  })
})

app.listen('3000', function () {
  console.log('express app is running....')
})
```





## Koa

> await后面必须是一个promise对象。

`Async`：让方法异步

`Await`：等待异步方法执行完成

安装对应模块

```shell
npm i koa koa-router
```



ctx是上行文context，包含request和response等信息

```js
var Koa = require('koa')
var Router = require('koa-router')

var app = new Koa()
var router = new Router()

router.get('/', async(ctx, next) => {
  ctx.body = 'hello world'
})

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(3000)
```



****



**get传值**

可以通过通过request获取，或者上下文(query)获取

`query`：返回格式化好的参数对象

`querystring`：返回请求字符串

`http://localhost:3000/?abc=123`

```js
router.get('/', async(ctx, next) => {
  let url = ctx.url
  // request获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring
  // 上下文获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {
    url,
    request,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})
```



****



**post获取数据**

安装`koa-bodyparser`

```shell
npm i koa-bodyparser
```



```js
var bodyParser = require('koa-bodyparser')
app.use(bodyParser())
router.post('/post', async ctx =>{
  ctx.body = ctx.request.body
})
```



****



**动态路由**

通过`ctx.params`获取

`http://localhost:3000/test/123`

```js
router.get('/test/:id', async (ctx, next)=> {
  ctx.body=ctx.params
})
```



****



### 中间件

**应用级中间件**

2个参数，只写一个参数表示**匹配所有**路由，两个则表示**匹配个别**路由

每匹配一次路由就会打印一次**123**

`	await next()`：先暂停，去执行下一个路由

```js
app.use(async (ctx, next) => {
  console.log('123')
  await next()
})
```



**路由级中间件**

匹配路由成功后继续匹配

```js
router.get('/', async(ctx, next)=>{
	console.log('123')
	next()
})
```



> next()最好加上`await next()`，通过这个调用下一个async函数。

**错误处理中间件**

`next()`必须要放在最上面，流程->例如我访问`/`首页，他先`next()`匹配下一步到首页`router.get('/'`那里，直到执行完`ctx.body`，**最后**在回到**错误中间件**判断页面是否出现404。

要注意，最后才回到这里，因为洋葱模型。

```js
app.use(async (ctx,next)=> {
	next();
	if(ctx.status==404){
    ctx.status = 404;
    ctx.body="这是一个404页面"
  }
});
```



**第三方中间件**

`<link rel="stylesheet" href="/css/basic.css">`

```js
// 第三方中间件
const serve = require('koa-static'); 
app.use(serve(__dirname + '/static'))
```



**洋葱模型流程**

注意执行顺序

```js
app.use(async (ctx,next)=> {
	console.log("1")
  next();
  console.log("5")
});
app.use(async (ctx,next)=> {
	console.log("2")
  next();
  console.log("4")
});
app.get('/', async (ctx, next)=> {
	console.log("3")
  cx.body = "hello"
})
```



### 模板

安装模板引擎ejs

```shell
npm i koa-views ejs
```



绑定数据：`<%=title%>`

```js
const views = require('koa-views')
app.use(views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
}))
router.get('/', async(ctx, next) => {
  await ctx.render('index',{
    title: '我是TITLE'
  })
})
```



模板`art-template`

```shell
npm i art-template koa-art-template
```

https://aui.github.io/art-template/zh-cn/

```js
const render = require('koa-art-template')
const path = require('path')
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
router.get('/', async(ctx, next) => {
  await ctx.render('index')
})
```



### cookie

设置值：`ctx.cookies.set(name, value. [options])`

获取值：`ctx.cookies.get(name)`

```js
ctx.cookies.set('username', '123', {
  maxAge: 10000*5,  // 过期值，多少毫秒后过期
  // expires: '2021-8-8',// 过期值，表示一个具体的时间Date
  path: '/',  // 路径,默认/,设置值后表示只在特定地址有效
  // domain: '',  // 域名
  secure: false,  // 默认false,true代表只有https可以访问 
  httpOnly: true // 默认true表示只有服务端可以访问，false代表客户和服务段都可以访问
})
```

KOA中的cookie无法设置中文，需要转成base64字符

```js
let Value = Buffer.from('中文').toString('base64')
console.log(Buffer.from(ctx.cookies.get('username'), 'base64').toString());
```



### Session

浏览器向服务器发送第一次请求时，服务器会生成session对象（key和value键值对），将key(sookie)返回到浏览器。

安装

```shell
npm i koa-session
```



设置值：`ctx.session.username="123"`

获取值：`ctx.session.username`

```js
const session = require('koa-session')
app.keys = ['some secret hurr'];  // cookie签名
const CONFIG = {
  key: 'koa.sess',  // 签名
  maxAge: 86400000, // 过期时间，毫秒
  autoCommit: true,   
  overwrite: true, 
  httpOnly: true, // 只有服务器端可以获取
  signed: true, // 签名，默认true
  rolling: false, // 每次访问是否重新设置cookie，会重置过期时间
  renew: false, // 当快过期，是否重新设置
  secure: true, 
  sameSite: null,
};
app.use(session(CONFIG, app));
```



### 数据库

```shell
npm i mongodb
```



简单使用：

```js
const url = 'mongodb://root:123456@localhost:27017'
const dbName = 'testmongodb'
MongoClient.connect(url, (err, client)=>{
  const db = client.db(dbName)
  let result = db.collection('stu').find()
  result.toArray((err, docs)=> {
    console.log(docs);
  })
  client.close
})
```



**单例封装**


```js
// db.js
const MongoClient = require('mongodb').MongoClient

// config.js
// const app = {
//   dbUrl: 'mongodb://root:123456@localhost:27017',
//   dbName: 'testmongodb'
// }
// module.exports = app

const config = require('./config.js')
var a = 0
class db {
  // 单例
  static getInstance(){
    // 判断实例对象是否为空
    if(!db.instance){
      db.instance = new db()
    }
    return db.instance
  }

  constructor() {
    // 保存数据库连接
    this.dbClient = ''
  }

  connect() {
    let that = this
    return new Promise((res, rej)=>{
      // 判断是否连接过mongodb
      if(!that.dbClient){
        // 连接mongodb
        MongoClient.connect(config.dbUrl, (err, client)=>{
          if(err){
            rej(err)
          }else{
            // 连接数据库
            that.dbClient = client.db(config.dbName)
            res(that.dbClient)
          }
        })
      }else {
        res(that.dbClient)
      }
    })
  }

  find(name, json) {
    return new Promise((res, rej)=>{
      // 调用connect()获取数据库连接
      this.connect().then(db => {
        // 获取数据
        let dbData = db.collection(name).find(json)
        dbData.toArray((err, docs)=> {
          if(err){
            rej(err)
            return
          }
          res(docs)
        })
      })
    })
  }
}
// const test = db.getInstance()
// test.find('stu', {})
module.exports = db.getInstance()
```



**因为返回的是一个promise，所以可以直接通过await获取。**

```js
// app.js
let dbData = await db.find('stu', {})
console.log(dbData);
```



### 脚手架

```shell
npm i -g koa-generator
koa2 项目名
cd 项目名
npm i
```



****



路由嵌套

```js
// admin.js
const user = require('./admin/user.js')
router.use('/user', user.routes(), user.allowedMethods())
```



父子路由

```js
// routes/admin.js,父

```

