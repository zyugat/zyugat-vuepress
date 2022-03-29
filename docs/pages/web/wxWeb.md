# 小程序

## 基础

view->div

text->span

- 轮播图：`swiper`
  - `	<swiper-item>`
  - **100vw=手机宽度**  **100vh=手机高度**
  - 图片拉伸：`swiper宽度*原图高度/原图宽度`



- 导航组件：`navigator`
  - `<navigator url="">点击跳转</navigator>`



- 富文本：`rich-text`
  - 1

```html
<rich-text nodes="{{html}}"></rich-text>
```

```javascript
// 1.标签字符串
// html: '<div style="color:red">标签字符串</div>'
// 2.对象数组
html: [
  {
    // 通过name属性指定div标签
    name: "div",
    // 标签属性
    attrs: {
      class: "my_div",
      style: "color:red"
    },
    // 子节点
    children: [
      {
        name: "p",
        attrs: {},
        // 文本
        children: [
          {
            type: "text",
            text: "对象数组"
          }
        ]
      }
    ]
  }
]
```



- 图标：`icon`
- 单选：`radio`
  - 必须和父元素`radio-group`配合使用
  - `bindchange`：绑定点击事件

```html
<radio-group bindchange="handleChange">
  <radio value="male">男</radio>
  <radio value="female">女</radio>
</radio-group>
```



- 多选：`checkbox`
  - 父元素：``

```html
<checkbox-group bindchange="handleChange">
  <checkbox value="{{item.value}}" wx:for="{{list}}" wx:key="id">{{item.name}}</checkbox>
```





> 数据绑定、列表渲染、事件绑定

- **数据绑定**

  - 数据绑定和Vue差不多

    - ```html
      <view>{{message}}</view>
      ```

    - ```javascript
      // index.js
      Page({
        data: {
        	message: 'Hello!'
        }
      })
      ```

  - **组件属性**

    - ```html
      <view id="item-{{id}}"> </view>
      ```

  - **bool类型**

    - ```html
      <checkbox checked="{{MYBOOL}}"> </checkbox>
      ```

  - **三元运算**

    - ```html
      <view hidden="{{flag ? true : false}}"> Hidden </view>
      ```

  - **算术运算**

    - ```html
      <view> {{a + b}} + {{c}} + d </view>
      ```

  - **逻辑判断**

    - ```html
      <view wx:if="{{length > 5}}"> </view>
      ```

  - **字符串运算**

    - ```html
      <view>{{"hello" + name}}</view>
      ```

- **列表渲染**

  - `wx:for`

    - 变量名：`wx:for-item`

    - 下标名：`wx:for-index`

    - `wx:key="*this"`表示绑定item本身

    - ```html
      <view wx:for="{{array}}" wx:key="id">
      	{{index}}: {{item.message}}
      </view>
      <view wx:for="{{array}}"
            wx:for-item="item"
            wx:for-index="index">
      ```

    - ```javascript
      Page({
        data: {
          array: [{
            id:0,
            message: 'foo',
          }, {
            id:1,
            message: 'bar'
          }]
        }
      })
      ```

  - `block`标签

  - `wx:if`

    - ```html
      <view wx:if="{{false}}">1</view>
      <view wx:elif="{{true}}">2</view>
      <view wx:else>3</view>
      ```

  - `hidden`：隐藏组件

    - ```html
      <view hidden> false </view>
      <view hidden="{{flase}}"> 显示 </view>
      ```



- **事件绑定**

  - 绑定事件不能带参数，也就是括号。

  - ```html
    <input bindinput="handleInput" data-item="100" />
    <button bindtap="add">+</button>
    ```
    
  - ```javascript
    Page({
      // 绑定的事件
      handleInput: function(e) {
        this.setData({
          num : e.detail.value
        })
      },
      add: function() {
        this.setData({
          num: this.data.num + 1
        })
      }
    })
    ```
    

> 改变data值必须使用`this.setData`
>
> 获取data值：`this.data.值名`



- 属性传参

```javascript
<button bindtap="add" data-operation="{{1}}">+</button>
```

```javascript
console.log(e.currentTarget.dataset.operation);
```



通过给元素一个属性：

```js
data-自定义属性名="{{要传递的值}}"
```





## 组件

- 组件的使用

在子组件的 json文件中，将该文件声明为组件

````
{
 "component": true
}
````



打开`index.json`，找到`"usingComponents": {}`，在里面填写组件路径

```javascriptON
// index.json
{
  "usingComponents": {
    "Tab": "../../components/Tab/Tab"
  }
}
```

最后在wxml里面添加进入

```html
<Tab/>
```



- 父传子
  - 通过标签传递：`<Tab mydata="123" />`，然后子组件在通过`properties`列表获取。

```javascript
// Tab.js
properties: {
  mydata:{
    type: Number,
    value: 0
  }
},
```



- 子传父
  - 流程：子组件发送事件，父组件监听事件，最后父组件进行响应

> 提示一下：在第二步的时候要注意是`bind`然后加上**事件名称**
>
> 例如事件名称叫Updata，那么父组件就需要`bindUpdata="响应函数"`进行监听

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



- 插槽：`slot`

```html
// Tab.wxml
<slot></slot>

// index.wxml
<Tab bindUpdata="newData">
  <view>父组件传递过来</view>
</Tab>
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