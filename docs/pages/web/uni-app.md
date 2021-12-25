# uni-app

**介绍项目目录和文件作用**

`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等

`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。

`App.vue`是我们的跟组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件，可以调用应用的生命周期函数。

`main.js`是我们的项目入口文件，主要作用是初始化`vue`实例并使用需要的插件。

`uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。

```unpackage``` 就是打包目录，在这里有各个平台的打包文件

```pages``` 所有的页面存放目录

```static``` 静态资源目录，例如图片等

```components``` 组件存放目录



> 1、 **rpx**：屏幕自适应的动态单位，以750宽屏幕为标准。
>
> 2、使用`@import`语句导入外联样式表
>
> 3、不能使用 `*` 选择器。
>
> 4、字体文件小于 40kb，`uni-app` 会自动将其转化为 base64 格式；如果大于40kb那么需要自己转换；引用路径推荐使用以 ~@ 开头的绝对路径。
>
> 5、
>
> 6、



## 配置

具体参考：https://uniapp.dcloud.io/collocation/pages

不进行过多赘述，仅仅简要说明。

配置项列表

| 属性                                                         | 类型         | 必填 | 描述                    | 平台兼容   |
| :----------------------------------------------------------- | :----------- | :--- | :---------------------- | :--------- |
| [globalStyle](https://uniapp.dcloud.io/collocation/pages?id=globalstyle) | Object       | 否   | 设置默认页面的窗口表现  |            |
| [pages](https://uniapp.dcloud.io/collocation/pages?id=pages) | Object Array | 是   | 设置页面路径及窗口表现  |            |
| [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) | Object       | 否   | 组件自动引入规则        | 2.5.5+     |
| [tabBar](https://uniapp.dcloud.io/collocation/pages?id=tabbar) | Object       | 否   | 设置底部 tab 的表现     |            |
| [condition](https://uniapp.dcloud.io/collocation/pages?id=condition) | Object       | 否   | 启动模式配置            |            |
| [subPackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages) | Object Array | 否   | 分包加载配置            |            |
| [preloadRule](https://uniapp.dcloud.io/collocation/pages?id=preloadrule) | Object       | 否   | 分包预下载规则          | 微信小程序 |
| [workers](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html) | String       | 否   | `Worker` 代码放置的目录 | 微信小程序 |
| [leftWindow](https://uniapp.dcloud.io/collocation/pages?id=leftwindow) | Object       | 否   | 大屏左侧窗口            | H5         |
| [topWindow](https://uniapp.dcloud.io/collocation/pages?id=topwindow) | Object       | 否   | 大屏顶部窗口            | H5         |
| [rightWindow](https://uniapp.dcloud.io/collocation/pages?id=rightwindow) | Object       | 否   | 大屏右侧窗口            | H5         |



`globalStyle`：全局配置，可以修改**导航栏**的 背景颜色、文字内容和样式、导航栏图片、**下拉窗口背景颜色和样式和 loading 样式**、是否开启下拉刷新、页面上拉事件、窗口显示的动画效果等。

```json
"globalStyle": {
  // 背景颜色
  "navigationBarBackgroundColor": "red",
  // 文字颜色
  "navigationBarTextStyle": "white",
  // 文字内容
  "navigationBarTitleText": "手机端应用",
  // 下拉显示出来的窗口的背景色,仅小程序
  "backgroundColor": "#7CCD7C",
  // 下拉 loading 的样式，仅支持 dark / light
  "backgroundTextStyle": "light"
},
```

![image-20211218141442869](http://img.zyugat.cn/zyuimg/2021-12-18_4c47d99a6d1a0.png)



`pages`：页面配置。

```json
"pages": [
  {
    "path": "pages/list/list",
    "style": {
      // 开启下拉刷新
      "enablePullDownRefresh": true,
      // 页面上拉触底事件触发时距页面底部距离，单位只支持px。
      "onReachBottomDistance": 200
    }
  },
  {
    "path": "pages/message/message",
    "style": {
      // 标题
      "navigationBarTitleText": "信息页",
      // 背景颜色
      "navigationBarBackgroundColor": "#007AFF",
      // 编译到H5时的样式
      "h5": {
        "pullToRefresh": {
          "color": "#7D26CD"
        }
      }
    }
  },
]
```



`tabBar`：导航栏，文字颜色、选中颜色、上边框颜色、列表、文字大小、图片和文字间距、高度。**list中最多只能配置5个tab。**

**如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。**

```json
"tabBar": {
  "color": "#A0522D",
  // tab 上的文字选中时的颜色
  "selectedColor": "#B3EE3A",
  "backgroundColor": "#fff",
  // 边框颜色
  "borderStyle": "white",
  // 可选值 bottom、top
  "position": "bottom",
  "list": [{
      "text": "首页",
      "pagePath": "pages/index/index",
      "iconPath": "static/tabs/home.png",
      // 选中时的图片路径
      "selectedIconPath": "static/tabs/home-active.png"
    }
  ]
}
```





## 组件

和微信小程序一样。

### text

|    属性    |  类型   | 默认值 | 必填 |                      说明                      |
| :--------: | :-----: | :----: | :--: | :--------------------------------------------: |
| selectable | boolean | false  |  否  |                  文本是否可选                  |
|   space    | string  |   .    |  否  | 显示连续空格，可选参数：`ensp`、`emsp`、`nbsp` |
|   decode   | boolean | false  |  否  |                    是否解码                    |

```html
<text selectable='true'>长安文本复制</text>
<text space='ensp'>显示  空格</text>
<text decode='true'>&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;</text>
```



### view

视图容器

| 属性名                 | 类型    | 默认值 | 说明                                                         |
| :--------------------- | :------ | :----- | :----------------------------------------------------------- |
| hover-class            | String  | none   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
| hover-stop-propagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持） |
| hover-start-time       | Number  | 50     | 按住后多久出现点击态，单位毫秒                               |
| hover-stay-time        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                           |

```html
<view class='box1' hover-class='active' hover-stop-propagation :hover-start-time="2000" :hover-stay-time='2000'>
```



### button

|  属性名  |  类型   | 默认值  |           说明           |
| :------: | :-----: | :-----: | :----------------------: |
|   size   | String  | default |        按钮的大小        |
|   type   | String  | default |      按钮的样式类型      |
|  plain   | Boolean |  false  | 按钮是否镂空，背景色透明 |
| disabled | Boolean |  false  |         是否按钮         |
| loading  | Boolean |  false  | 名称是否带 loading t图标 |

`button` 组件默认独占一行，设置 `size` 为 `mini` 时可以在一行显示多个



### image

| 属性名 | 类型   | 默认值        | 说明                 | 平台差异说明 |
| ------ | ------ | ------------- | -------------------- | ------------ |
| src    | String |               | 图片资源地址         |              |
| mode   | String | 'scaleToFill' | 图片裁剪、缩放的模式 |              |

页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。



## uni的特性

### 生命周期

生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。

生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数

**应用生命周期**

| 函数名   | 说明                                           |
| -------- | ---------------------------------------------- |
| onLaunch | 当`uni-app` 初始化完成时触发（全局只触发一次） |
| onShow   | 当 `uni-app` 启动，或从后台进入前台显示        |
| onHide   | 当 `uni-app` 从前台进入后台                    |
| onError  | 当 `uni-app` 报错时触发                        |

**页面生命周期**

| 函数名   | 说明                                                         | 平台差异说明 | 最低版本 |
| -------- | ------------------------------------------------------------ | ------------ | -------- |
| onLoad   | 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router?id=navigateto) |              |          |
| onShow   | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 |              |          |
| onReady  | 监听页面初次渲染完成。                                       |              |          |
| onHide   | 监听页面隐藏                                                 |              |          |
| onUnload | 监听页面卸载                                                 |              |          |

**组件生命周期**

| beforeCreate  | 在实例初始化之后被调用。[详见](https://cn.vuejs.org/v2/api/#beforeCreate) |              |
| ------------- | ------------------------------------------------------------ | ------------ |
| created       | 在实例创建完成后被立即调用。[详见](https://cn.vuejs.org/v2/api/#created) |              |
| beforeMount   | 在挂载开始之前被调用。[详见](https://cn.vuejs.org/v2/api/#beforeMount) |              |
| mounted       | 挂载到实例上去之后调用。[详见](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用`$nextTick`[Vue官方文档](https://cn.vuejs.org/v2/api/#Vue-nextTick) |              |
| beforeUpdate  | 数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://cn.vuejs.org/v2/api/#beforeUpdate) | 仅H5平台支持 |
| updated       | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://cn.vuejs.org/v2/api/#updated) | 仅H5平台支持 |
| beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://cn.vuejs.org/v2/api/#beforeDestroy) |              |
| destroyed     | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://cn.vuejs.org/v2/api/#destroyed) |              |





****



### 路由

https://uniapp.dcloud.io/component/navigator

`navigator`

- `url`：地址

- `open-type`：跳转方式
- `hover-class`：点击时样式类

```html
<navigator url="/pages/list/list" open-type="navigate" hover-class="navigator-hover">
  <button type="default">跳转到list</button>
</navigator>
```



https://uniapp.dcloud.io/api/router?id=navigateto

`uni.navigateTo(OBJECT)`：保留当前页面，跳转。

**保留当前页面意思是，左上角会带一个返回按钮**

`uni.redirectTo(OBJECT)`：关闭当前页面，跳转。

`uni.reLaunch(OBJECT)`：关闭所有页面，跳转。

`uni.switchTab(OBJECT)`：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**这里要说明一下， tabBar 页面是指在 `pages.json` 的 tabBar 中定义的页面。**

`uni.navigateBack(OBJECT)`：关闭当前页面，返回上一页面或多级页面。

`uni.preloadPage(OBJECT)`：预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。

```js
goAbout () {
  uni.navigateTo({
    url: '/pages/about/about',
  })
}
```



**路由传参**

```js
uni.navigateTo({
  url: '/pages/about/about?id=80',
});
```

```js
export default {
  onLoad (options) {
    console.log(options)
  }
}
```

![image-20211218142703068](http://img.zyugat.cn/zyuimg/2021-12-18_f9ac805512c07.png)





****



### 上拉/下拉刷新

第一步：开启下拉刷新；

```json
{
  "path":"pages/list/list",
    "style":{
      "enablePullDownRefresh": true
    }
}
```

第二步：监听下拉刷新的动作；

```js
onPullDownRefresh() {
  console.log('触发下拉刷新了')
}
```

可选：关闭和开始当前页面的下拉刷新；

```js
methods:{
  startPull(){
    uni.startPullDownRefresh()
  },
  stopPull(){
    uni.stopPullDownRefresh()
  }
}
```

**案例，刷新时清空列表，刷新完时显示数据**

![动画](http://img.zyugat.cn/zyuimg/2021-12-16_4e9e91c4a7467.gif)

```js
onPullDownRefresh() {
  this.arr = []
  setTimeout(() => {
    this.arr = ['前端', 'java', 'ui', '大数据']
    uni.stopPullDownRefresh()
  }, 1000);
},
```



**下拉刷新，判断触底**

`onReachBottom`：监听到触底的行为

```js
onReachBottom() {
  console.log('触底了')
},
```



***



### 网络请求

调用uni.request方法进行请求网络请求

```js
sendGet () {
  uni.request({
    url: 'http://localhost:300',
    success(res) {
      console.log(res)
    }
  })
}
```



***



### 数据缓存

`uni.setStorage(OBJECT)`：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个**异步接口**。

```js
uni.setStorage({
  key: 'storage_key',
  data: 'hello',
  success() {
    console.log('存储成功')
  },
  fail() {
    console.log('存储失败')
  },
  complete() {
    console.log('回调结束时调用,无论是否回调成功')
  }
})
```



`uni.setStorageSync(KEY,DATA)`：和上面一样，不过这是一个**同步接口**。

```js
try {
    uni.setStorageSync('storage_key', 'hello');
} catch (e) {
    // error
}
```



`uni.getStorage(OBJECT)`：从本地缓存中**异步获取**指定 key 对应的内容。

```js
uni.getStorage({
  key: 'storage_key',
  success: function (res) {
    // data 是 key 对应的内容
  	console.log(res.data);
  },
  fail() {
    console.log('获取失败')
  },
  complete() {
    console.log('回调结束时调用,无论是否回调成功')
  }
});
```



`uni.getStorageSync(KEY)`：同步获取。

```js
try {
    const value = uni.getStorageSync('storage_key');
    if (value) {
        console.log(value);
    }
} catch (e) {
    // error
}
```



`uni.removeStorage(KEY)`：从本地缓存中异步移除指定 key。

`uni.removeStorageSync(KEY)`：从本地缓存中同步移除指定 key。



****



### 上传/预览图片

`uni.chooseImage(OBEJCT)`：从本地相册选择图片或使用相机拍照。

```html
<view>
  <text>上传图片</text>
  <button @click="chooseImg" type="primary">上传图片</button>
  <view>
    上传的图片：
    <image v-for="item in imgArr" :src="item" :key="index"></image>
  </view>
  <view>
    点击预览图片：
    <image v-for="item in imgArr" :src="item" @click="previewImg(item)" :key="item"></image>
  </view>
</view>
```

```js
chooseImg() {
  uni.chooseImage({
    count: 9,
    success: res => {
      this.imgArr = res.tempFilePaths
    }
  })
},
previewImg(current) {
  uni.previewImage({
    urls: this.imgArr,
    current
  })
}
```

![动画](http://img.zyugat.cn/zyuimg/2021-12-18_92f2674c80193.gif)



****



### 条件注释实现跨段兼容

条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

**写法：**以 #ifdef 加平台标识 开头，以 #endif 结尾。

| 值         | 平台                                                   | 参考文档                                                     |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| APP-PLUS   | 5+App                                                  | [HTML5+ 规范](http://www.html5plus.org/doc/)                 |
| H5         | H5                                                     |                                                              |
| MP-WEIXIN  | 微信小程序                                             | [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/) |
| MP-ALIPAY  | 支付宝小程序                                           | [支付宝小程序](https://docs.alipay.com/mini/developer/getting-started) |
| MP-BAIDU   | 百度小程序                                             | [百度小程序](https://smartprogram.baidu.com/docs/develop/tutorial/codedir/) |
| MP-TOUTIAO | 头条小程序                                             | [头条小程序](https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/introduction) |
| MP-QQ      | QQ小程序                                               | （目前仅cli版支持）                                          |
| MP         | 微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序 |                                                              |

```js
onLoad () {
  //#ifdef MP-WEIXIN
  console.log('微信小程序')
  //#endif
  //#ifdef H5
  console.log('h5页面')
  //#endif
}
```



## 项目说明

第一步先配置 `pages.json` 

一般分为：`pages`、`globalStyle`、`tabBar`





