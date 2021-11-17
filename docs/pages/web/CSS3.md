# CSS3

## 基础复习

1. table

- tr：行
- td：单元格

```html
<table>
  <tr>
    <td></td>
  </tr>
</table>
```



| 属性名      | 属性值              | 描述                     |
| ----------- | ------------------- | ------------------------ |
| align       | left、center、right | 对齐方式                 |
| border      | 1或""               | 是否拥有边框             |
| cellpadding | *px                 | 单元边沿其内容之间的空白 |
| cellspacing | *px                 | 单元格之间的空白         |

合并单元格：

- rowspan="合并个数"、跨行
- colspan="合并个数"、跨列



****



2. 列表

- ul：无序、li
- ol：有序、li
- dl：自定义、dt、dd



****



3. 表单

- form

```html
<form action="url地址" method="提交方式" name="表单域名称"></form>
```



input->type：输入框

| 属性值   | 表示                                                         |
| -------- | ------------------------------------------------------------ |
| button   | 定义可点击按钮(多数情况下，用于通过JavaScript启动脚本)。     |
| checkbox | 定义复选框。                                                 |
| file     | 定义输入字段和“浏览"按钮，供文件上传。                       |
| hidden   | 定义隐藏的输入字段。                                         |
| image    | 定义图像形式的提交按钮。                                     |
| password | 定义密码字段。该字段中的字符被掩码。                         |
| radio    | 定义单选按钮。                                               |
| reset    | 定义重置按钮。重置按钮会清除表单中的所有数据。               |
| submit   | 定义提交按钮。提交按钮会把表单数据发送到服务器。             |
| text     | 定义单行的输入字段，用户可在其中输入文本。默认宽度为20个字符。 |

其他属性：

| 属性      | 属性值   | 描述             |
| --------- | -------- | ---------------- |
| name      | 用户定义 | 元素名称         |
| value     | 用户定义 | 值               |
| checked   | checked  | 首次加载时被选中 |
| maxlength | 正整数   | 最大长度         |



还有一个是：label标签

这样label就和Input绑定在一起了

```html
<label for="text">用户名</label>
<input type="text" id="text">
```



****



4. select

下拉表单元素

在option中定义selected="selected"，就默认选中

```html
test1
<select>
  <option>X1</option>
  <option>X2</option>
</select>
```



****



5. textarea

文本域，多行输入

```html
  test1
  <textarea>
    x
  </textarea>
```



****



6. 字体属性

- font-family、字体
- font-size、字体大小
- font-weight、字体粗细
  normal 默认值。定义标准的字符。 
  bold 定义粗体字符。 
  bolder 定义更粗的字符。 
  lighter 定义更细的字符。 
  100 - 900 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 
  inherit 规定应该从父元素继承字体的粗细。 
- font-style、文本风格
  normal、正常，默认
  italic、斜体



****



7. 文本属性

- color、文字颜色
- text-align、水平对齐方式
- text-decoration、给文字加修饰、上下删除线
- text-indent、给文字首行加缩进
- line-height、行间距、行与行的高度



****



8. 背景

- `background-repeat`，图片平铺方式
  - repeat，平铺
  - no-repeat，不平铺
  - repeat-x，沿着x轴
  - repeat-y，沿着y轴

- `background-position`，有2个参，数，x y
  x和y坐标都可以使用`方位名词`或`精确单位`
  如果你省略掉第二参数，就会默认居中
  - 方位名词：top|center|left|center|right

- `background-attachment`，背景固定
  - scroll，随着内容滚动
  - fixed，图像固定

- 半透明：`background: rgba(0, 0, 0, 0.3)`

复合属性：background: 背景颜色 图片地址 平铺 图像滚动 图片位置



****



### 选择器

- 标签选择器

```css
p {}
```

类选择器

- class

```
.类名 {}
```

id选择器

- id

```css
#id名 {}
```



```html
<div class="nav">
  <a>我是儿子</a>
  <div>
    <a>我是孙子</a>
  </div>
</div>
```



1. 后代选择器：`.nav a`

**nav下的所有a标签都会变化**



2. 子选择器：`.nav>a`

**最靠近nav的a元素会变化（只有一个）**



3. 并集选择器：`div,p`

并集



4. 伪类选择器

```CSS
a:link，选择所有未访问的链接
a:visited，选择所有已访问的链接
a:focus，获得焦点时
a:hover，选择鼠标指针位于上方=
a:active，选择活动链接，鼠标按下未弹起
```



****



### 盒子

- 一、border，盒子边框
- 二、content，内容，里面的数据文本
- 三、padding，内边距，负责边框与内容的距离
- 四，margin，盒子与盒子的距离



1. border边框

- border-width，边框粗细
- border-style，样式
- border-color，颜色

复合：`border: 边框粗细 样式 颜色`



表格边框合并在一起：

`border-collapse:collapse`



| Border-  Top  Bottom  Left  right | 应用于  上  下  左  右                                       |
| --------------------------------- | ------------------------------------------------------------ |
| Top  Border:1 2 3                 | 1 大小px/em/em是相对于元素字体大小<br/> 2→<br/> dotted 点线<br/> dashed 虚线<br/> solid 实线<br/> double 双线<br/> groove 槽线<br/> ridge 脊线<br/> inset 凹线<br/> outset 凸线<br/> 3 颜色 |



◎ 表格

 border-collapse（用于控制表格相邻单元格的边框是否合并为单一边框）

 border-spacing（用于指定表格边框之间的空隙大小）

 caption-side（用于设置表格标题的位置）

 empty-cells（用于设置是否显示表格中的空单元格）



2. padding内边距

内容与边框的距离

| Padding         | 内边距        |
| --------------- | ------------- |
| Padding:1 2 3 4 | 上右下左      |
| Padding:1 2 3   | 上左右        |
| Padding:1 2     | 1:上下 2:左右 |



3. marrgin外边距

| marrgin         | 内边距        |
| --------------- | ------------- |
| marrgin:1 2 3 4 | 上右下左      |
| marrgin:1 2 3   | 上左右        |
| marrgin:1 2     | 1:上下 2:左右 |





4. 圆角边框

`border-radius: length;`

- border-radius: 左上 右上 右下  左下。顺时针

- 圆形：半径=高度
- 圆角矩形：高度的一半





4. 阴影

- `box-shadow: h-shadow v-shadow blur spread color inset`
- h-shadow，必须，水平阴影的位置
- v-shadow，必须，垂直阴影的位置，
- blur ，模糊程度
- spread，阴影尺寸
- color，阴影的颜色
- inset，将外部阴影（outset）改为内部

```css
box-shadow: 10px 10px 10px 10px rgba(0,0,0 .3)
```

- test-shadow，文字阴影
- h-shadow，必须，水平阴影的位置
- v-shadow，必须，垂直阴影的位置，
- blur ，模糊距离
- color，阴影的颜色





## 元素操作

### 浮动

不管元素是什么模式的元素，添加浮动之后都具有行内块元素的特点

`float: 属性值`

- none，不浮动
- left，左浮动
- right，右浮动



**清除浮动**

概念：

- 如果父元素没有设置高度，而他2个子元素又是浮动状态的，那么就会脱离标准流
- 那么就需要清除浮动，让他**占着个位置那个高度**，懂？浮动是没空间-浮在半空中的，所以就会脱离标准流。
- 清除浮动的方法：
  - 额外标签法，也称隔墙法。（在浮动元素最后添加一个标签，当一堵墙，撑起高度）
  - 父元素添加 overflow 属性
  - 父元素添加 after 伪属性
  - 父元素添加双伪元素



1. 格外标签法

在最后添加一个标签，给标签添加一个  `clear` 样式

`clear: `

- left，不允许左侧浮动
- right，不允许右侧浮动
- both，同时清除两侧



2. overflow

- hidden
- auto
- scroll



3. after

在盒子的后面插入一个空盒子

```css
.clearfix:after {
	content: "";
  display: block;
  height :0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom:1;
}
```



4. 双伪元素

前后都插入一个空盒子

```css
.clearfix: before,.clearfix:after {
  content: "",
    display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom:1;
}
```



### 定位

定位通过 `position` 属性来设置

- static，静态定位
- relative，相对定位
- absolute，绝对定位
- fixed，固定定位
- sticky，粘性定位

定位 = 定位模式 + 边偏移

定位如果想移动位置需要修改`边偏移`

- top
- bottom
- left
- right



1. static，静态定位

默认定位方式，无定位，是按照标准流的特性摆放，无边偏移，很少使用。



2. relative，相对定位

相对定位，**占有原先位置**

当元素在移动位置的时候，是相对于他原本的位置

- 相对于自己原本的位置移动。
- 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待。



3. absolute，绝对定位

绝对定位，**不占有原先位置**，可以理解为他飘起来了

当元素在移动位置的时候，是相对于祖先元素定位（前提祖先元素有定位）。

- 当祖先元素有定位，就会相对于 祖先元素 而定位，否则会根据浏览器定位。
- 而 祖先元素 ≠ 父亲元素 如果上2级都有定位，而以最上的那位为准



4. fixed，固定定位

不保留原本位置，固定于浏览器中的可视窗口。

如果想贴着 版心 ，意思是 随着版心 放大缩小，可以设置 %

```CSS
position: fixed;
left:50%;
margin-left: -版心盒子宽度的一半
```





5. sticky，粘性定位

占有原先位置，可以认为是相对定位和固定定位的混合

- 以浏览器的可视窗口为参照点移动元素
- 占有原先位置
- 必须添加 top left right bottom 其中一个才有效



6. z-index，定位的叠放顺序





### 显示和隐藏

- display，显示隐藏
- visibility，显示隐藏
- overflow，溢出显示隐藏



1. display，显示隐藏

隐藏后不在占有原来位置

- display:none，隐藏对象
- display:block，转为块元素然后显示元素





2. visibility，显示隐藏

占有原来位置

- visibility: visible，元素可视
- visibility: hidden，元素隐藏



3. overflow，溢出显示隐藏

对多出来的部分进行操作

- visible，显示多出来的
- auto，在需要的时候添加滚动条
- hidden，不显示多出来的
- scroll，总是有滚动条



## CSS3新特性

1. 元素选择

- 不用类或ID选择器：`[属性名]`

  ```html
  <input type="text" value="输入用户名">
  /* 如果他具有 value 属性 就选择这个元素 */
  input[value] {}
  ```

  

- 选择属性=值的某些元素

  ```css
  /* 如果他的属性的值与之相同 就选择这个元素 */
  input[type=text]{}
  input[name=""] {}
  ```

  

- 选择属性值开头的那些元素

  ```css
  /* 如果他的属性开头的值与之相同 就选择这个元素 */
  input[class^=icon]{}
  ```

  

- 选择属性值结尾的某些元素

  ```css
  /* 如果他的属性结尾的值与之相同 就选择这个元素 */
  input[class$=icon]{}
  ```

  

- 选择属性值中含有val的某些元素

  ```css
  input[class*=icon]{}
  ```



2. **结构伪类选择器**

  - E:frist-child，父元素中第一个子元素
  - E:last-child，父元素中最后一个子元素
  - E:nth-child(n)，父元素中第n个子元素
    - 这个 n 可以是 数字、关键字、公式
    - 关键字：even 偶数， odd 奇数
    - 2n，偶数。
    - 2n+1，奇数。
    - 5n，5 10 15。
    - n+5，从第五个开始。
    - -n+5，前5个。
- E:first-of-type，指定类型E第一个

+ E:last-of-type，指定类型E的最后一个
+ E:nth-of-type(n)，指定类型E的第n个



关于`nth-child`和`nth-of-type`的区别

`nth-child`：会给每个盒子添加序号

`nth-of-type`：只会给指定盒子的排列序号

例如：`section div:nth-of-child(1){color:red}`，因为`序号1`不是div，所以不会变成红色。

```html
<section>
  <p>
    nth-child：序号1
    nth-of-type：没有序号因此不渲染
  </p>
  <div>
    序号2
  </div>
	<div>
    序号3
  </div>
</section>
```



****



3. **伪元素选择器**

- ::before，在元素内部的前面插入
- ::after，在元素内部的后面插入

- 属于行内元素
- 在文档树种找不到
- element::before{}
- 必须content属性
- 权重1

遮罩层，当鼠标移动过去就会显示

```css
.tudou:hover::before {
  display: block;
}
```



****





4. **盒子模型**

通过`box-sizing`知道盒模型，有2个值，可以指定为：

- content-box，盒子的大小为：width+padding+border。以前默认的，会撑开盒子。
- border-box，盒子大小为width，就不会撑开盒子了！！！

```css
p {
  box-sizing:content-box;
  box-sizing:border-box;
}
```





5. **filter，图片模糊**

`filter: 函数();`

- blur(5px)，模糊函数，数值越大越模糊。



6. **calc函数**

`width:calc(100% -80px);`

在括号内我们可以做一些简单运算

```css
/* 子盒子大小永远比父盒子小30像素 */
.son {
  /* 100% 是指父盒子的100% */
  width: calc(100% - 30px)
}
```



7. **过渡动画**

`transition: 过渡的属性 花费的时间 运动曲线 何时开始;`

最后2个属性可以省略

- 属性，宽度高度 背景颜色 内外边距都可以，如果想所有的属性都要过渡，写个all就可以
- 花费时间，单位是秒 0.5s
- 运动曲线，默认ease
- 何时开始，单位是秒，默认0s

```css
div {
  width: 200px;
  height: 100px;
  background-color: red;
  transition: width .5s, height .5s;
  transition: all .5s;
}
div:hover {
  width: 400px;
  height: 400px;
}
```



简单的进度条

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>进度条</title>
  <style>
      .bar {
          width: 150px;
          height: 15px;
          border: 1px solid red;
          border-radius: 7px;
      }
      .bar_in {
          width: 50%;
          height: 100%;
          background-color: red;
          transition: width .5s;
      }

      .bar:hover .bar_in {
          width: 100%;
      }
  </style>
</head>
<body>
<div class="bar">
  <div class="bar_in"></div>
</div>
</body>
</html>
```





**HTML5新特性**

1. 语义化标签

- hearder，头部
- nav，导航
- article，内容
- section，定义文档某个区域
- aside，侧边栏
- footer，尾部

2. 多媒体标签

- audio，音频
- video，视频

3. input类型

- type="search"，这是一个搜索框
- 

4. 表单属性

- required，内容不能为空
- placeholder，提示文本
- autofocus，
- autocomplete，
- multiple，







## flex

```css
display: flex;
```

基本概念：容器和轴

容器包括：父容器和子容器

轴包括：主轴和交叉轴





### 轴

1. 设置主轴方向：`flex-direction`

- row，默认从左到有
- row-reverse，从右到左
- column，从上到下
- column-reverse，从下到上



### 父容器

> 主轴是指X轴
>
> 交叉轴是指Y轴

1. 设置子容器沿主轴排列：`justify-content`

**设置X轴的对齐方式**

+ flex-start，起始端对其，**从左到右**
+ flex-end，从尾部开始，**从右到左**
+ center，居中
+ space-around，沿着主轴**均匀分布**
+ space-between，均匀分布，**但首尾两端与父元素相切**



2. 设置子容器如何沿交叉轴排列：`align-items`

**设置Y轴的对齐方式**

- flex-start，顶部对齐
- flex-end，底部对齐
- center，居中
- baseline，基线对其，指首行文字
- stretch，拉伸（就是与父容器同高度）



3. PRO->设置子容器换行方式：`flex-wrap`

+ nowarp，默认不换行
+ wrap，换行
+ wrap-reverse，反向换行（沿着交叉轴的反方向换行）



4. PRO->子容器沿着哪个方向流向，终点是否换行：`flex-flow`

是个符合属性，相当于 `flex-direction` 与 `flex-wrap` 的组合

- 主轴方向：row、column
- 换行方式：warp、nowrap

```CSS
flex-flow: coulumn wrap;
```



5. PRO->**多行时**对齐方式：`align-content`

+ flex-start，顶部对齐
+ flex-end，底部对齐
+ center，居中
+ space-around，等边距均匀分布
+ space-between：等间距均匀分布
+ stretch，拉伸（就是与父容器同高度）





### 子容器

> align-items作用于父元素。align-self作用于子元素可以覆盖align-items的影响。

1. **单独设置**子容器如何沿交叉轴排列：`align-self`

**设置子容器Y轴对齐方式**

- flex-start，顶部对齐
- flex-end，底部对齐
- center，居中
- baseline，基线对其，指首行文字
- stretch，拉伸（就是与父容器同高度）



2. PRO->设置子容器基准大小：`flex-basis`

如果主轴为`row`，则代表其宽度

如果主轴为`column`，则代表其高度



3. PRO->子容器**弹性伸展**的比例：`flex-grow`

A为1，B为2，则B的宽度是A的两倍



4. PRO->子容器**弹性收缩**的比例：`flex-shrink`

如果A和B的宽度**超过父容器的宽度**，则会按照比例收缩。

比例计算是，例如本身容器宽度是200，有两个子容器一个比例是2一个是3。我想得到3的长度就是：`200/(200*2+200*3)*3`



5. PRO->排列顺序：`order`

默认值为0，可以负指，**值越小越靠前**。



## LESS

- 定义变量
  - LESS：`@`
- 插值
  - LESS：`@{}`

```LESS
// LESS
@number: 100px;
@key: margin;
@i:2;
.box@{i} {
	width: @number;
  height: @number;
  @{key}: 20px
}
```



> less有作用域有变量提升，SASS没有
>
> less：在box外的`num`是全局变量，而在box里面的是**局部变量**，因less有作用域有变量提升因此宽度均为`200px`

```LESS
// LESS
@num: 100px;	// 全局变量
.box {
	width: @num;	// 200px
  @num: 200px;	// 局部变量
	height: @num;	// 200px
}
```



- 选择器嵌套
  - 嵌套不建议超过4个
  - 选择父元素：`&`

```LESS
.box {
  ul{
    li{
    }
    &:hover{	// 伪类选择器
    
    }
  }
}
```



- 运算
  - less单位不同可以进行运算

```LESS
// LESS
@num: 100px;	// 全局变量
.box {
	width: @num * 3;	// 600px
  height: @num * 3em;	// 600px，以前面为准
  font: 20px / 1.5
  padding: ~"20px / 1.5";
}
```



- 函数
  - `round`：四舍五入
  - `percenta`： 百分比
  - `random`：随机数，less无法使用
  - `sqrt`：开方， SASS无法使用
  - `function`：less无法使用



- 混入
  - 带括号，定义的部分**不会被**单独解析（仅限LESS）
  - 不带括号，定义的部分**会被**解析（仅限LESS）

！！！如果不带括号，那么编译后的css文件就会包含`.show{}`这个选择器！！！

```LESS
// LESS
.show(@color){
	color: @color;
}
.box {
	.show(blue);
}
```



- 命名空间
  - 只有less有，SASS没有 

```LESS
// less
#space(){
  .show{
  	color: red;
  }
}
.box{
	#space.show;
}
```



- 继承

```LESS
// LESS
.show{
	color: red;
}
.box {
	&:extend(.show);
}
```



- 条件判断循环

```LESS
// LESS
.show(@num) when (@num > 5){
	width: 100px + @num;
}
.box {
	.show(10);	// 105px
}
```



- 导入
  - less和SASS相同

```LESS
@import '.reset.less';
```



## SCSS

`a.scss`

[安装Ruby](https://www.ruby-lang.org/zh_cn/downloads/)

使用

```shell
# 1.单文件
# 前者编译文件，后者编译后的
sass a.scss b.css

# 2.多文件
sass --watch 原有文件目录:生成css的文件目录

# 3.文件监听
sass --watch 原有文件目录:生成css的文件目录
sass -w -c --no-source-map scss:css
```



- 定义变量
  - SCSS：`$`
- 插值
  - SCSS：`#{$}`

```scss
// SASS
$number: 100px;
$key: margin;
$i:2;
.box#{$i} {
	width: $number;
  height: $number;
  #{$key}: 20px
}
```



> SASS没有作用域有变量提升，
>
> SASS：因为没有作用域有变量提升因此box宽度为100高度为200

```SCSS
// SASS
$num: 100px;	// 全局变量
.box {
	width: $num;	// 100px
  $num: 200px;	// 全局变量
	height: $num;	// 200px
}
```



- 选择器嵌套
  - 嵌套不建议超过4个
  - 选择父元素：`&`

```SCSS
.box {
  &:hover{}	// 伪类选择器，指定父元素
  div{}  
}
```



- 运算
  - less单位不同可以进行运算，但是SASS就不可以

```SCSS
// SASS
$num: 100px;	// 全局变量
.box {
	width: $num * 3;	// 600px
  // height: $num * 3em;	// 单位不同不能运算
  font: 20px / 1.5
  padding: (20px / 1.5);
}
```



- 函数
  - `round`：四舍五入
  - `percenta`： 百分比
  - `random`：随机数，less无法使用
  - `sqrt`：开方， SASS无法使用
  - `function`：less无法使用



- 混合
  - 1）定义可重复使用的代码块
  - 2）需要加上`@mixin`和`@include`
  - 3）可以指定参数和缺省值

```SCSS
// SASS
@mixin show{
	color: red;
}
@mixin show($value: red){
	color: $value;
}
.box {
	@include show;  // 不指定则默认红色
  @include show(blue);  // 指定颜色为蓝色
}
```



- 继承
  - 在SASS中如果使用`%`定义，那么就不会被单独解析
  - 通过`@extend`继承

```SCSS
// SASS
.show{	// 会被单独解析出来
	color: red;
}
%show{	// 不会被单独解析出来
	color: green;
}
.box {
	@extend .show;
}
```



- 条件与循环
  - `@if`
  - `@for`
  - `@while`
  - `@each`

```SCSS
// for
@for $i from 1 to 10 {
  .border-#{$i} {
    border: #{$i}px solid blue;
  }
}
// while
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
// each
@each $member in a, b, c, d {
  .#{$member} {
    background-image: url("/image/#{$member}.jpg");
  }
}
```



- 导入
  - less和SASS相同

```LESS
@import '.reset.less';
```



- 自定义函数
  - `@function`

```SCSS
@function double($n){
  @return $n * 2;
}
.box{
  width: double(10);
}
```





## 小知识

去除列表的圆点：

list-style: none

**如果想让块级盒子水平居中：**

- 盒子必须要有宽度(width)
- 盒子左右边距设置为auto(margin:0 auto)

如果想让行内元素，或者行内块元素水平居中：

- 给父元素添加:text-align:center

行内元素尽量只设置左右的内外边距，因为你设置上下他是没反应的



**绝对定位的盒子居中**

是**不能**通过 `margin: 0 auto` 水平居中

只能通过那几个个属性

- 如果宽度和高度都是200px那么：
- `left:50%`，水平居中
- `margin-left: -100px`，自己盒子的一半



**方案：图片底部有一个空白细缝**

这是因为那个行内块元素和文字基线对齐

- 解决方案是加vertical-alin
- 第二种是转为块级元素：display:block





## 补

### 精灵图

针对于背景图片的使用，，把多个小的背景图片整合在一张大图里面，通过移动背景图片的位置`background-position`的 目标图片 x 和 y 坐标。



`他的坐标是从左上角开始。`

- 往右走正，往左走负
- 往下走正，往上走负



```html
  <style>
      .box {
          height: 25px;
          width: 27px;

          margin: 100px auto;
          background: url("imeges/sprites.png") no-repeat -155px -106px;
      }
  </style>
```



### CSS三角

长和宽为0，通过`border-上下左右-color`属性获取三角形，如果为`top`那么就是倒三角。

```css
.box {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-top-color: pink;
}
.box1 {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: pink;
    margin: 100px auto;
}
.box2 {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: red;
}
```

```CSS
    .box {
        width: 0;
        height: 0;
        border-top: 100px solid pink;
        border-right: 50px solid skyblue;
        border-bottom: 0 solid blue;
        border-left: 50px solid green;
    }
```

```CSS
    .box2 {
        width: 0;
        height: 0;
        border-top: 100px solid pink;
        border-right: 50px solid skyblue;
        border-bottom: 0 solid blue;
        border-left: 0 solid green;
    }
```

```CSS
    .price {
        width: 160px;
        height: 24px;
        border: 1px solid red;
        margin: 0 auto;
        line-height: 24px;
        text-align: center;
    }

    .price .miaosha {
        float: left;
        width: 90px;
        height: 100%;
        color: white;
        background-color: red;
    }

    .price .miaosha i {
        width: 0;
        height: 0;
        float: right;
        border-color: transparent white transparent transparent;
        border-style: solid;
        border-width: 24px 10px 0 0;
    }
```





### 用户界面

1. cursor，鼠标样式

- default，默认
- pointer，小手
- move，移动
- text，文本
- not-allowed，禁止



2. outline，表单轮廓线

设置0或者none，就可以取消表单的蓝色边框了



3. resize，防止拖拽文本域

`textarea`

设置none，就可以防止拖拽文本域



4. vertical-alin，图片或表单和文字垂直对齐

只针对 行内元素 或行内内块元素有效

- baseline，默认
- top，`元素顶端`对齐`最高元素顶线`
- middle，中部对齐
- bottom，`元素顶端`对齐`最低元素底线`





5. 文本溢出使用省略号显示

- 单行：

```css
/*1.强制一行显示文本，默认 normal 自动换行*/
white-space: nowrap;
/*2.超出部分隐藏*/
overflow: hidden;
/*3.文字用省略号代替*/
text-overflow: ellipsis;
```



- 多行：

```css
/*1.超出部分隐藏*/
overflow: hidden;
/*2.文字用省略号代替*/
text-overflow: ellipsis;
/*弹性伸缩盒子模型*/
display: -webkit-box;
/*几行*/
-webkit-line-clamp: 2;
/*排列方式*/
-webkit-box-orient: vertical;
```



6. 2个盒子边框如何重叠

通过`margin-left: -1px;`这样后一个样式就会压住前一个

```css
    ul li {
        float: left;
        list-style: none;
        width: 150px;
        height: 200px;
        border: 1px solid red;
        margin-left: -1px;
    }
```

如果想做鼠标移动到边框就高亮，可以这么做：

```css
ul li:hover {
  position: relative;
	border: 1px solid blue;
}
```

或者可以用 `z-index`也是可以的
