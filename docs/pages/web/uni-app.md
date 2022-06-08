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



## 全局配置pages.json

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



### pages

`pages`：页面配置。

```json
"pages": [
  {
    // 路径
    "path": "pages/list/message",
    // 页面窗口表现
    "style": {
      // 标题
      "navigationBarTitleText": "信息页",
      // 标题图片地址,用于替换标题文字
      "titleImage":'string',
      // 标题透明设置
      "transparentTitle":'always 一直透明 / auto 滑动自适应 / none 不透明',
      // 标题背景颜色
      "navigationBarBackgroundColor": "#007AFF",
      // 上下滚动,为true时不能滚动,默认false
      "disableScroll":'false',
      
      // 是否开启下拉刷新
      "enablePullDownRefresh": false,
      // 下拉刷新样式颜色
      "backgroundTextStyle": "dark/light",
      
      // 页面上拉触底事件的触发距离
      "onReachBottomDistance": 200,
      
      // 是否禁用滑动返回
      "disableSwipeBack": false
      // 编译到H5时的样式
      "h5": {
        "pullToRefresh": {
          "color": "#7D26CD"
        }
      }
    }
  }
]
```



### globalStyle

`globalStyle`：全局CSS配置，可以修改**导航栏**的 背景颜色、文字内容和样式、导航栏图片、**下拉窗口背景颜色和样式和 loading 样式**、是否开启下拉刷新、页面上拉事件、窗口显示的动画效果等。

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





### tabbar

list中最多只能配置5个tab。

```json
"tabBar": {
  // 文字颜色
  "color": "#A0522D",
  // tab 上的文字选中时的颜色
  "selectedColor": "#B3EE3A",
  // 背景颜色
  "backgroundColor": "#007AFF",
  // 边框颜色
  "borderStyle": "white",
  // 导航栏的位置
  // 可选值 bottom、top
  "position": "bottom",
  // 字体大小
  "fontSize":"10px",
  "iconWidth":"24px",
  // 图标和文字的间距
  "spacing":"3px",
  // tabBar 默认高度
  "height":"50px",
  "list": [{
    "text": "首页",
    "pagePath": "pages/index/index",
    "iconPath": "static/tabs/home.png",
    "selectedIconPath": "static/tabs/home-active.png",
    // 是否显示
    "visible": true
  },
}
```



## 组件

### 基础内容

- ` progress`
  - 进度条
  - `percent`：0-100，Number
  - `show-info`：右边显示百分比数字，默认false
  - `font-size`：右边百分比字体大小，默认16
  - `stroke-width`：进度条宽度，默认6
  - `activeColor`：已选的颜色。`backgroundColor`：未选的颜色
    - 左边是已选，右边是未选。
    - ![image-20220421150839461](http://img.zyugat.cn/zyuimg/2022-04-21_407bd0844b9a5.png)
  - `active`：进度条动画，默认false
  - `active-mode`：backwards: 动画从头播；forwards：动画从上次结束点接着播
  - `duration`：每增加1%所需的毫秒，默认30
  - `@activeend`：完成事件,微信小程序、京东小程序

```html
<view class="progress-box">
  <progress percent="80" activeColor="red" active stroke-width="8" />
</view>
```





- **`text`**
  - 文本组件
  - 支持 `\n` 方式换行。
  - 如果使用 `<span>` 组件编译时会被转换为 `<text>`。


|    属性     |  类型   | 默认值 | 必填 |                             说明                             |                     |
| :---------: | :-----: | :----: | :--: | :----------------------------------------------------------: | ------------------- |
| selectable  | boolean | false  |  否  |                         文本是否可选                         | App、H5、快手小程序 |
| user-select | boolean | false  |  否  |                         文本是否可选                         | 微信小程序          |
|    space    | string  |   .    |  否  | 显示连续空格，可选参数：`ensp`中文字符空格一半大小、`emsp`中文字符空格大小、`nbsp`根据字体设置的空格大小 | App、H5、微信小程序 |
|   decode    | boolean | false  |  否  |                           是否解码                           | App、H5、微信小程序 |

```html
<text selectable='true'>长安文本复制</text>
<text space='ensp'>显示  空格</text>
<text decode='true'>&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;</text>
```

- **`rich-text`**
  - 富文本，支持默认事件，包括：click、touchstart、touchmove、touchcancel、touchend、longpress。
  - `nodes`：节点列表，Array/String，[]，数组
    - name：标签名称
    - attrs：属性，Object
      - 全局支持 class 和 style 属性，**不支持 id 属性**。
    - children：子节点列表。
  - `space`：显示连续空格，string
  - `selectable`：是否可以长安选中，默认true
  - `@itemclick`：点击事件,只支持a、img标签。返回当前node信息 `event.detail={node}`

```html
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				数组类型
				<text>\nnodes属性为Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
		</view>
	</view>
</template>
```

```js
data() {
  return {
    title: 'Hello',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div-class',
        style: 'line-height: 60px; color: red; text-align:center;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;uni-app!'
      }]
    }],
  }
},
```

![image-20220421145602031](http://img.zyugat.cn/zyuimg/2022-04-21_b60a3ebb3bf63.png)



### 视图

- **`view`**
  - 

| 属性名                 | 类型    | 默认值 | 说明                                                         |
| :--------------------- | :------ | :----- | :----------------------------------------------------------- |
| hover-class            | String  | none   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
| hover-stop-propagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持） |
| hover-start-time       | Number  | 50     | 按住后多久出现点击态，单位毫秒                               |
| hover-stay-time        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                           |

```html
<view class='box1' hover-class='active' hover-stop-propagation :hover-start-time="2000" :hover-stay-time='2000'>
```

- `scroll-view`
  - 区域滚动
  - `scroll-x`、`scroll-y`：允许横向/纵向滚动（必须要设置的
  - `@scrolltoupper`和`@scrolltolower`：滚动到顶部或底部时触发。
  - `@scroll`：滚动时触发
  - `upper-threshold`和`lower-threshold`：距离顶部或右边多少时触发`scrolltoupper `/`scrolltolower`事件



### 表单

- form
  - `@submit`、`@reset`
    - 携带 form 中的数据触发 submit 事件，`event.detail = {value : {'name': 'value'} , formId: ''}`
    - report-submit 为 true 时才会返回 formId

```html
<form @submit="formSubmit" @reset="formReset">
  <view class="uni-form-item uni-column">
    <view class="title">Form</view>
    <radio-group name="radio">
      <label>
        <radio value="radio1" /><text>选项一</text>
      </label>
      <label>
        <radio value="radio2" /><text>选项二</text>
      </label>
    </radio-group>
  </view>
  <view class="uni-btn-v">
    <button form-type="submit">Submit</button>
    <button type="default" form-type="reset">Reset</button>
  </view>
</form>
```

```js
formSubmit: function(e) {
  console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
  var formdata = e.detail.value
  uni.showModal({
    content: '表单数据内容：' + JSON.stringify(formdata),
    showCancel: false
  });
},
formReset: function(e) {
  console.log('清空数据')
}
```

![image-20220421165654277](http://img.zyugat.cn/zyuimg/2022-04-21_6acdb4b707a04.png)



- `textarea`：多行输入，自己看文档
- Button
  - 默认独占一行，设置 `size` 为 `mini` 时可以在一行显示多个

|  属性名   |  类型   | 默认值  |                             说明                             |
| :-------: | :-----: | :-----: | :----------------------------------------------------------: |
|   size    | String  | default |                          按钮的大小                          |
|   type    | String  | default |                        按钮的样式类型                        |
|   plain   | Boolean |  false  |                   按钮是否镂空，背景色透明                   |
| disabled  | Boolean |  false  |                           是否按钮                           |
|  loading  | Boolean |  false  |                   名称是否带 loading t图标                   |
| form-type | String  |         | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 submit/reset 事件 |

- checkbox
  - 多选

```html
<view>
  <checkbox-group>
    <label>
      <checkbox value="cb" checked="true" />选中
    </label>
    <label>
      <checkbox value="cb" />未选中
    </label>
  </checkbox-group>
</view>
```

- input

  - 他只是一个输入框，如果需要其他功能uni-app有单独的组件或API：[radio组件 (opens new window)](https://uniapp.dcloud.io/component/radio)、[checkbox组件 (opens new window)](https://uniapp.dcloud.io/component/checkbox)、[时间选择 (opens new window)](https://uniapp.dcloud.io/component/picker?id=时间选择器)、[日期选择 (opens new window)](https://uniapp.dcloud.io/component/picker?id=日期选择器)、[图片选择 (opens new window)](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择 (opens new window)](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频) (opens new window)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择 (opens new window)](https://uniapp.dcloud.io/api/media/file?id=choosefile)。

- label

  - ```html
    <checkbox-group class="uni-list" @change="checkboxChange">
      <label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
        <view>
          <checkbox :value="item.name" :checked="item.checked"></checkbox>
        </view>
        <view>{{item.value}}</view>
      </label>
    </checkbox-group>
    ```

- slider
  - 滑动选择器
  - min、start、step：最小、最大、步长
  - value：当前取值
  - show-value：是否隐藏，默认false
  - `block-size`：大小，默认28
  - `block-color`：块颜色
  - `@change`、`@changing`：拖动后、拖动时
  - `activeColor`：左侧颜色、`backgroundColor`：右侧颜色

![image-20220421172905275](http://img.zyugat.cn/zyuimg/2022-04-21_292999eccf659.png)

- switch
  - 开关
  - checked：是否选中，默认false
  - disabled：是否禁用，默认false
  - type：样式，switch/checkbox
  - `color`、`@change`





- picker
  - 从底部弹起的滚动选择器。支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。

- 普通选择器
- `mode = selector`
  - `range`：值
  - `value`：当前选择第几个（index就可以，下标从0开始
  - `disabled`：是否禁用
  - `@change`：发生改变时
  - `@cancel`：取消选择时触发
  - `disabled`：是否禁用

```html
<view class="uni-list-cell-db">
  <picker @change="bindPickerChange" :value="index" :range="array">
    <view class="uni-input">{{array[index]}}</view>
  </picker>
</view>
```

<img src="http://img.zyugat.cn/zyuimg/2022-04-21_9e41be616539f.png" alt="image-20220421171054418" style="zoom:67%;" />

- 多列选择器
- `mode = multiSelector`
  - `@columnchange`：当某一列触发时，就会返回`event.detail = {column: column, value: value}`
  - 其余和普通一样



![image-20220421171412706](http://img.zyugat.cn/zyuimg/2022-04-21_d3458867086c3.png)

- 时间选择器
- `mode = time`
  - `value`：选中的时间，格式`hh:mm`
  - `start`、`end`：开始和结束时间格式均为`hh:mm`
  - `@change`：发生改变时
  - `@cancel`：取消选择时触发
  - `disabled`：是否禁用

```html
<view class="uni-list-cell-db">
  <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
    <view class="uni-input">{{time}}</view>
  </picker>
</view>
```

- 日期选择器
- `mode = date`
  - value、start、end：字符串格式为"YYYY-MM-DD"
  - fields：日期粒度，默认day
  - `@change`：发生改变时
  - `@cancel`：取消选择时触发
  - `disabled`：是否禁用

```html
<view class="uni-title uni-common-pl">时间选择器</view>
<view class="uni-list">
  <view class="uni-list-cell">
    <view class="uni-list-cell-left">
      当前选择
    </view>
    <view class="uni-list-cell-db">
      <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
        <view class="uni-input">{{time}}</view>
      </picker>
    </view>
  </view>
</view>
```

```js
export default {
  data() {
    const currentDate = this.getDate({
      format: true
    })
    return {
      date: currentDate,
      time: '12:01'
    }
  },
  computed: {
    startDate() {
      return this.getDate('start');
    },
    endDate() {
      return this.getDate('end');
    }
  },
  methods: {
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
          year = year - 60;
      } else if (type === 'end') {
          year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    }
  }
}
```



- 省市区选择器
- `mode = region`



### 页面跳转

- `navigator`

  - 理解成A标签即可
  - `url`：地址

  - `open-type`：跳转方式

  - `hover-class`：点击时样式类

```html
<navigator url="/pages/list/list" open-type="navigate" hover-class="navigator-hover">
  <button type="default">跳转到list</button>
</navigator>
```



### Vue组件

> component、template、transition、transition-group、keep-alive、slot

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



### 页面通信

> `uni.$emit`、 `uni.$on` 、 `uni.$once` 、`uni.$off`

- 监听事件
  - `uni.$on`
- 移除监听
  - `uni.$off`
- 触发监听
  - `uni.$emit`
- 一次性的事件，直接使用 `uni.$once` 监听，不需要移除。

- 1、
  - **假设场景：进入一个app需要在页面登录，登陆完后就返回到页面。**

```js
// 我的页面  
onLoad(){  
  // 进入页面,监听事件  
  uni.$on('login',(usnerinfo)=>{  
    this.usnerinfo = usnerinfo;  
  })  
},  
onUnload() {  
  // 离开页面后,移除监听事件  
  uni.$off('login');  
},
```

- 2、
  - 进入登陆页面，触发事件
  - 使用 `uni.$emit` 触发事件后，对应的 `uni.$on` 就会监听到事件触发，在回调中去执行相关的逻辑。

```js
// 登陆页面  
uni.$emit('login', {  
                avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',  
                token: 'user123456',  
                userName: 'unier',  
                login: true  
            });
```



## uni的特性

### 生命周期

**应用生命周期**：只能在App.vue里监听应用的生命周期

| 函数名               | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| onLaunch             | 当`uni-app` 初始化完成时触发（全局只触发一次）               |
| onShow               | 当 `uni-app` 启动，或从后台进入前台显示                      |
| onHide               | 当 `uni-app` 从前台进入后台                                  |
| onError              | 当 `uni-app` 报错时触发                                      |
| onUniNViewMessage    | 对 `nvue` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯(opens new window)](https://uniapp.dcloud.io/tutorial/nvue-api?id=communication) |
| onUnhandledRejection | 对未处理的 Promise 拒绝事件监听函数（2.8.1+）                |
| onPageNotFound       | 页面不存在监听函数                                           |
| onThemeChange        | 监听系统主题变化                                             |

**页面生命周期**：

| 函数名            | 说明                                                         | 平台差异说明                | 最低版本 |
| ----------------- | ------------------------------------------------------------ | --------------------------- | -------- |
| onInit            | 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad | 百度小程序                  | 3.1.0+   |
| onLoad            | 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router#navigateto) |                             |          |
| onShow            | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 |                             |          |
| onReady           | 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发 |                             |          |
| onHide            | 监听页面隐藏                                                 |                             |          |
| onResize          | 监听窗口尺寸变化                                             | App、微信小程序、快手小程序 |          |
| onPullDownRefresh | 监听用户下拉动作，一般用于下拉刷新，参考[示例](https://uniapp.dcloud.io/api/ui/pulldown) |                             |          |
| onReachBottom     | 页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项 |                             |          |
| onPageScroll      | 监听页面滚动，参数为Object                                   | nvue暂不支持                |          |

- `onPageScroll` （监听滚动、滚动监听、滚动事件）参数说明：

  | 属性      | 类型   | 说明                                 |
  | --------- | ------ | ------------------------------------ |
  | scrollTop | Number | 页面在垂直方向已滚动的距离（单位px） |





****



### 路由跳转

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
    url: 'http://localhost:3000',
    success(res) {
      console.log(res)
    }
  })
}
```



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





