# 小程序

> 看前说明：观看该文档需要有一些 Vue 和 uni-app 基础，只对区别项做出解释，不会详细描述用法。

## 配置

### 全局配置

1、根目录有：`app.json`、`app.js`、`app.wxss`

- `app.json`：和Uniapp的`pages.jsn`配置文件差不多，添加页面都需要配置`pages`，也有全局的 `window`，和`tabBar`

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/index",
      "text": "日志"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true
}
```



- `app.js`
  - 初始化、切前台、切后台、错误监听。

```js
// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```



### 页面配置

1、`.json`，目录配置，就是每个页面的同名`.json`配置，在uniapp中是放在`pages.json`的，这里就拿出来单独放了。这里对一些常用的做个归纳

- 布局
  - `navigationBarBackgroundColor`：背景颜色
  - `navigationBarTextStyle`：文字颜色，仅支持 `black` / `white`
  - `navigationBarTitleText`：文字
  - `backgroundColor`：窗口颜色

- `enablePullDownRefresh`：是否开启下拉刷新
- `onReachBottomDistance`：上拉触底事件的底部距离，单位px
- `disableScroll`：不能上下滚动，默认false，无法在app.json中设置
- `usingComponents`：自定义组件设置
- `visualEffectInBackground`：切入后台时隐藏页面内存，支持 `hidden` / `none`



2、`.js`

```js
//index.js
Page({
  data: {
    text: "This is page data."
  },
  behaviors: [],
  onLoad: function(options) {
    // 页面创建时执行
  },
  onShow: function() {
    // 页面出现在前台时执行
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
  },
  onHide: function() {
    // 页面从前台变为后台时执行
  },
  onUnload: function() {
    // 页面销毁时执行
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
  },
  onReachBottom: function() {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function() {
    // 页面滚动时执行
  },
  onResize: function() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件响应函数
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  }
})
```



### 页面路由

可以通过 `this.pageRouter` 或 `this.router` 获得当前页面或自定义组件的路由器对象。

- 打开新页面：`wx.navigateTo`
- 关闭当前页面跳转：`wx.redirectTo`
- 返回：`wx.navigateBack`
- Tab切换：`wx.switchTab`
- 关闭全部页面后打开某个页面：`wx.reLaunch`

说明：如果此时已经跳转到了一个新页面 `pack/index` ，使用普通的`navigateTo`我们则是跳转到 `pack/new-page`，如果是使用`this.pageRouter`，则是`pack/index/new-page`

```js
Page({
  wxNavAction: function () {
    wx.navigateTo({
      url: './new-page'
    })
  },
  routerNavAction: function () {
    this.pageRouter.navigateTo({
      url: './new-page'
    })
  }
})
```





### 模块化

只能通过 [`module.exports`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/module.html) 或者 `exports` 才能对外暴露接口。

导入用：`require()`



## 基础

改变data值必须使用`this.setData`

获取data值：`this.data.值名`

补充：修改数据有两种办法，一是使用`this.data.数据名`修改，这种方法不会显示在页面上，二是需要使用：`this.setData`，实时。

```js
this.setData({
  name: 'MINA',
})

this.setDate({
	'some.field': {}
})
```



### 页面渲染

1、列表渲染，`wx:for`，`item、index`

`wx:key="*this"`表示绑定item本身

```html
<view wx:for="{{array}}" wx:key="id">
	{{index}}: {{item.message}}
</view>
<view wx:for="{{array}}"
      wx:for-item="item"
      wx:for-index="index">
```



2、条件渲染，`wx:if`

```html
<view wx:if="{{false}}">1</view>
```



3、隐藏组件：`hidden`

```html
<view hidden> false </view>
<view hidden="{{flase}}"> 显示 </view>
```



4、模板：`template`

- 1、创建模板
  - 记得给 `name` 属性
- 2、使用模板
  - 通过`is`属性绑定 **模板name**，同时记得绑定 `data` 属性

```html
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>
<!-- staffA: {firstName: 'Hulk', lastName: 'Hu'},-->
<template is="staffName" data="{{...staffA}}"></template>
```



### 数据操作

1、数据绑定，和vue一样

同时这里补充下可以直接在`标签参数`内使用数据绑定，在小程序中不存在`:`这个数据绑定的东西

```html
<view id="item-{{id}}"> </view>
<view>{{"hello" + name}}</view>
<view wx:if="{{length > 5}}"> </view>
```

```js
// index.js
Page({
  data: {
  	message: 'Hello!'
  }
})
```



2、数据双向绑定：`model:`

补充：不能绑定**对象的子**属性`a.b`。这样是不可以的！！

```html
<input model:value="{{value}}" />
```





3、事件绑定，`bindtap`，这个无需多说。

获取输入框值：`e.detail.value`

```html
<button bindtap="changeName"> Click me! </button>
```



4、属性传参

通过给元素一个属性：

```HTML
data-自定义属性名="{{要传递的值}}"
<button bindtap="add" data-operation="{{1}}">+</button>
```

```js
console.log(e.currentTarget.dataset.operation);
```



## 自定义组件

1、在**子组件**的 json文件中，将该文件声明为组件

````json
{
 "component": true
}
````

2、打开父页面的`.json`，找到`"usingComponents": {}`，在里面填写组件路径

```json
// index.json
{
  "usingComponents": {
    "Tab": "../../components/Tab/Tab"
  }
}
```

3、最后在父页面添加

```html
<Tab/>
```



### 构造器与样式

1、只能使用`class`（#id、[a]、button{}、.A>.B）这些都不能使用

2、可以使用``:host` 选择器作为本地所在默认样式。理解为组件内的body而不是全局的Body就可以了。

```js
Component({
  behaviors: [],

  // 理解为 vue 中的 props 即可
  properties: {
    myProperty: {
      // 属性名
      type: String,
      value: '',
    },
    myProperty2: String, // 简化的定义方式
  },

  data: {}, // 私有数据，可用于模板渲染
  
  // 数据监听
  observers: {},

  // 组件生命周期
  lifetimes: {
    created: function () {
      // 在组件实例刚刚被创建时执行
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    ready: function () {
      // 在组件在视图层布局完成后执行
    },
    moved: function () {
      // 在组件实例被移动到节点树另一个位置时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
    error: function (err) {},
  },

  pageLifetimes: {
    // 页面生命周期
    pageLifetimes: {
      show: function () {
        // 页面被展示
      },
      hide: function () {
        // 页面被隐藏
      },
      resize: function (size) {
        // 页面尺寸变化
      },
    },
  },

  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function () {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData',
      })
    },
    _propertyChange: function (newVal, oldVal) {},
  },
})

```



### 数据传递

和vue基本一致，除了子传父那里需要使用`bind`以外。

1、父传子

- 子组件定义好：`properties`属性
- 父组件通过元素传递

```html
<my-component inner-text="Some text"></my-component>
```



2、子传父

- 子组件发送事件：`this.triggerEvent("Updata", "更新数据")`
- 父组件绑定监听事件：`bindUpdata="newData"`

补充：父组件监听事件是：`bind+事件名称`

```javascript
// Tab.js 子组件
this.triggerEvent("Updata", "更新数据")
```

```html
<!-- index.wxml 父组件监听事件 -->
<!-- bind+事件名称 -->
<Tab bindUpdata="newData"/>
```

```javascript
// 父组件响应
newData: function(e) {
  console.log(e);
}
```



### 获取节点

使用：`this.selectComponent()`，选择器

使用说明：只适用于一次传递，例如页面切换的时候需要传递`商品信息`的时候。

```js
// 自定义组件 my-component 内部
Component({
  behaviors: ['wx://component-export'],
  export() {
    return { myField: 'myValue' }
  }
})
```

```html
<!-- 使用自定义组件时 -->
<my-component id="the-id" />
```

```js
// 父组件调用
const child = this.selectComponent('#the-id')
// 等于 { myField: 'myValue' }
```



### behaviors

总结：他包含的所有内容都会**合并到组件**中。组件可以引用多个，behaviors也可以引用其他behaviors。

1、当存在同名属性/方法时，以组件的为准。

2、同名字段：对象就合并、其他就覆盖。覆盖规则为： `引用者 behavior` > `被引用的 behavior` 、 `靠后的 behavior` > `靠前的 behavior`。

```js
// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {},
  data: {},
  created: function () {},
  attached: function () {},
  ready: function () {},
  methods: {}
})
```

```js
// my-component.js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
})
```



### 数据监听

1、监听A或B

2、监听对象

3、监听数组

4、通配符`**`

注意：如果是监听对象，修改了`'some'`是会触发上的obs的，但如果是`'some.aaa'`则不会。

```js
observers: {
  'numberA, numberB': function(numberA, numberB) {
    // 在 numberA 或者 numberB 被设置时，执行这个函数
    this.setData({
      sum: numberA + numberB
    })
  },
  'some.subfield': function(subfield) {
    subfield === this.data.some.subfield
  },
  'arr[12]': function(arr12) {
    arr12 === this.data.arr[12]
  },
  'some.field.**': function(field) {
    field === this.data.some.field
  },
  '**': function() {
    // 每次 setData 都触发
  },
},
attached: function() {
  this.setData({
    numberA: 1,
    numberB: 2,
  })
}
```







## 生命周期

- 应用生命周期
  - 在`app.js`中

| 属性           | 说明                   |
| -------------- | ---------------------- |
| onLaunch       | 监听⼩程序初始化。     |
| onShow         | 监听⼩程序启动或切前台 |
| onHide         | 监听⼩程序切后台。     |
| onError        | 错误监听函数。         |
| onPageNotFound | ⻚⾯不存在监听函数。   |



- 页面生命周期
  - 在每个页面的`index.js`中

| 属性              | 类型     | 说明                                        |
| ----------------- | -------- | ------------------------------------------- |
| data              | Object   | 页面的初始数据                              |
| onLoad            | function | ⽣命周期回调—监听⻚⾯加载                   |
| onShow            | function | ⽣命周期回调—监听⻚⾯显⽰                   |
| onReady           | function | ⽣命周期回调—监听⻚⾯初次渲染完成           |
| onHide            | function | ⽣命周期回调—监听⻚⾯隐藏                   |
| onUnload          | function | ⽣命周期回调—监听⻚⾯卸载                   |
| ----------------  | -------  | ------------------------------------------- |
| onPullDownRefresh | function | 监听用户下拉动作                            |
| onReachBottom     | function | ⻚⾯上拉触底事件的处理函数                  |
| onShareAppMessage | function | ⽤⼾点击右上⻆转发                          |
| onPageScroll      | function | ⻚⾯滚动触发事件的处理函数                  |
| onResize          | function | ⻚⾯尺⼨改变时触发，详⻅响应显⽰区域变化    |
| onTabItemTap      | function | 当前是 tab ⻚时，点击 tab 时触发            |



## API

- `wx.env`：环境变量
- `wx.request`：网络请求
- 数据缓存和Uni一样不过就是把`uni.`换成`wx.`



- `wx.showToast`：消息提示框，和uniapp一样
- `wx.showModal`
- `wx.showLoading`，显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框



- `wx.setNavigationBarTitle`：设置标题，就头顶那个。

- `wx.startPullDownRefresh()`、`wx.stopPullDownRefresh()`：开启和停止下拉刷新动画



- `wx.pageScrollTo()`：滚动到目标位置

```JS
wx.pageScrollTo({
  scrollTop: 0,
  duration: 300
})
```









## 扩展

> **关于rpx的计算**
>
> 设计稿 750px=750rpx，那么就代表：1px=1rpx
>
> 如果设计稿宽度是`pageSize`，存在一个元素宽度为100px那么需要计算
>
> - `1 px = 750rpx / pageSize`
> - `100 px = 750rpx * 100 / pageSize`
>
> ```css
> view {
>   width: calc(750rpx*100/375)
> }
> ```



> 样式导入指支持相对路径
>
> ```css
> @import "common.wxss";
> ```



> **导入less**
>
> 使用vscode安装插件`easy less`
>
> 给vscode添加设置
>
> ```css
> "less.compile": {
> 	"outExt": ".wxss"
> }
> ```
