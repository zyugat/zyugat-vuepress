# CSS3

## 基础复习

strong 或 b：加粗

em 或 i：倾斜

del 或 s：删除线

ins 或 u：下划线



1. table

- tr：行
- th：表头
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



表单属性

- required，内容不能为空
- placeholder，提示文本
- autofocus，
- autocomplete，
- multiple，



取消表单轮廓线：`outline: none;`



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

禁止拖拽：`resize: none;`

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
  - 用于文字垂直居中



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

> 权重：
>
> 内联样式：1,0,0,0
>
> ID：0,1,0,0
>
> calss | 伪类 | 属性选择器：0,0,1,0
>
> 标签 | 伪元素选择器：0,0,0,1

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



1、后代选择器：`.nav a`

**nav下的所有a标签都会变化**

2、子选择器：`.nav>a`

**最靠近nav的a元素会变化（只有一个）**

3、并集选择器：`div,p`

并集



4、元素选择

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



5、**结构伪类选择器**

> first-child和first-of-child，区别在于前者**必须符合指定类型**（如果不符合就不渲染），后者是**符合指定类型的元素**（只渲染符合的元素）。
>
> 前者是选择同级的第一个元素。后者是选择当前类型的同级第一个元素。
>
> 区别是后者判断了类型，前者不管类型。

  - E:frist-child，父元素的第一个子元素且必须**符合指定类型**
  - E:last-child，父元素中最后一个子元素且必须**符合指定类型**
  - E:nth-child(n)，父元素中第n个子元素（n>=0）
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
</section>
```



6、伪类选择器

```CSS
a:link，选择所有未访问的链接
a:visited，选择所有已访问的链接
a:focus，获得焦点时
a:hover，选择鼠标指针位于上方=
a:active，选择活动链接，鼠标按下未弹起
```

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



### 盒子

- 一、border，盒子边框
- 二、content，内容，里面的数据文本
- 三、padding，内边距，负责边框与内容的距离
- 四，margin，盒子与盒子的距离



**盒子的大小是设置的宽高：`box-sizing:border-box;`，不会因为内外边距撑开盒子**



1. border边框

- border-width，边框粗细
- border-style，样式
- border-color，颜色

复合：`border: 边框粗细 样式 颜色`



**合并相邻的边框**：`border-collapse:collapse`



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



`test-shadow`：文字阴影

- h-shadow，必须，水平阴影的位置
- v-shadow，必须，垂直阴影的位置，
- blur ，模糊距离
- color，阴影的颜色



****



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

**在最后浮动元素的最后面添加一个标签**，给标签添加一个  `clear` 样式

- left，不允许左侧浮动
- right，不允许右侧浮动
- both，同时清除两侧



2. overflow：给父元素添加

- hidden（超出部分隐藏）
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
  /* 不可见 */
  visibility: hidden;
}
```



4. 双伪元素

前后都插入一个空盒子

```css
.clearfix: before,.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
```



****



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



1. static，静态定位：默认定位方式。

2. relative，相对定位，**占有原先位置**，当元素在移动位置的时候，是相对于他原本的位置。

3. absolute，绝对定位，**不占有原先位置**，可以理解为他飘起来了。当元素在移动位置的时候，是相对于祖先元素定位（前提祖先元素有定位）。```设置后可以拥有长宽```

- 当祖先元素有定位，就会相对于 祖先元素 而定位，否则会根据浏览器定位。
- 而 祖先元素 ≠ 父亲元素 **如果上2级都有定位，而以最上的那位为准**。

```css
/* 垂直居中 */
.box{
  position: absolute;
  /* 自己盒子宽度的一半 */
  top: 50%;
  margin-top: -100px;
}
```



4. fixed，固定定位

不保留原本位置，固定于浏览器中的可视窗口。

如果想贴着 版心 ，意思是 随着版心 放大缩小，可以设置 %

```CSS
position: fixed;
left:50%;
margin-left: -版心盒子宽度的一半
```



5. sticky，粘性定位，占有原先位置。

- 以浏览器的可视窗口为参照点移动元素
- 必须添加 top left right bottom 其中一个才有效

![chrome-capture](http://img.zyugat.cn/zyuimg/2021-11-29_75e8bf992155f.gif)



6. z-index，定位的叠放顺序





### 显示和隐藏

- display，显示隐藏
- visibility，显示隐藏
- overflow，溢出显示隐藏



1. display，显示隐藏

隐藏后不在占有原来位置

- display:none，隐藏对象
- display:block，转为块元素然后显示元素

- display：inline-block，行内元素



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



****



## flex

```css
display: flex;
```

基本概念：容器和轴

容器包括：父容器和子容器

轴包括：主轴和交叉轴



### 父容器

> 主轴是指X轴
>
> 交叉轴是指Y轴

1. 设置**主轴方向**：`flex-direction`

- row，默认从左到右
- row-reverse，从右到左
- column，从上到下
- column-reverse，从下到上



2. 设置子容器沿**主轴排列**：`justify-content`

**设置X轴的对齐方式**

+ flex-start，起始端对其，**从左到右**
+ flex-end，从尾部开始，**从右到左**
+ center，居中
+ space-around，沿着主轴**均匀分布**
+ space-between，均匀分布，**但首尾两端与父元素相切**

`justify-content:space-around`

![image-20211129173031862](http://img.zyugat.cn/zyuimg/2021-11-29_2a89c375dca1a.png)





3. **单行时**子容器沿**交叉轴排列**：`align-items`

**设置Y轴的对齐方式**

- flex-start，顶部对齐
- flex-end，底部对齐
- center，居中
- baseline，基线对其，指首行文字
- stretch，拉伸（就是与父容器同高度）

`align-items: center`：垂直居中

![image-20211129173923477](http://img.zyugat.cn/zyuimg/2021-11-29_a47a307f3e5a5.png)



4. **多行时**子容器沿**交叉轴排列**：`align-content`

+ flex-start，顶部对齐。flex-end，底部对齐。center，居中
  + 上面三个都是以整体为单位。

+ space-around：以行为单位，平均分布
+ space-between：以行为单位，**先对齐顶部和底部**，平均分布
+ stretch，拉伸（就是与父容器同高度）需要将**子项目高度改为 auto **



5. 设置子容器**换行方式**：`flex-wrap`

+ nowarp，默认不换行
+ wrap，换行
+ wrap-reverse，反向换行（沿着交叉轴的反方向换行）



6. 子容器沿着哪个方向流向，**终点是否换行**：`flex-flow`

是个符合属性，相当于 `flex-direction` 与 `flex-wrap` 的组合

- 主轴方向：row、column
- 换行方式：warp、nowrap

```CSS
flex-flow: coulumn wrap;
```





### 子容器

`flex`：分配子容器剩余空间，值为数字或百分比

- 怎么用？
- 例如我们有10个元素，想要每行显示5个，那么只需要设置`flex:20%`，意思是每个元素占`20%`，5个元素就100%了，那就一行了。

![image-20211129174903453](http://img.zyugat.cn/zyuimg/2021-11-29_1ba78363843ef.png)

**2号元素占用2份。**吧

```css
p {
    display: flex;
    width: 60%;
    height: 150px;
    background-color: pink;
    margin: 100px auto;
}

p span {
    flex: 1;
}

p span:nth-child(2) {
    flex: 2;
    background-color: purple;
}
```



> align-items作用于父元素。align-self作用于子元素可以覆盖align-items的影响。

1. **单独设置**子容器如何沿交叉轴排列：`align-self`

**设置子容器Y轴对齐方式**

- flex-start，顶部对齐
- flex-end，底部对齐
- center，居中
- baseline，基线对其，指首行文字
- stretch，拉伸（就是与父容器同高度）



2. PRO->设置子容器基准大小：`flex-basis`，值为百分比

如果主轴为`row`，则代表其宽度

如果主轴为`column`，则代表其高度



3. PRO->子容器**弹性伸展**的比例：`flex-grow`，值为数字

A为1，B为2，则B的宽度是A的两倍



4. PRO->子容器**弹性收缩**的比例：`flex-shrink`，值为数字

如果A和B的宽度**超过父容器的宽度**，则会按照比例收缩。

比例计算是，例如本身容器宽度是200，有两个子容器一个比例是2一个是3。我想得到3的长度就是：`200/(200*2+200*3)*3`



5. PRO->排列顺序：`order`

默认值为0，可以负指，**值越小越靠前**。



**案例1**

![image-20211129180803710](http://img.zyugat.cn/zyuimg/2021-11-29_6991b3d4e8eba.png)

思路：

- `subnav-entry`是父盒子
- `.subnav-entry li`：设置每个盒子的宽
- `.subnav-entry a`：设置flex布局以垂直方向进行。
  - ![image-20211129181006600](http://img.zyugat.cn/zyuimg/2021-11-29_35c52d157972e.png)
  - **图片在上，文字在下。垂直方向！！**

```css
.subnav-entry {
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    margin: 0 4px;
    flex-wrap: wrap;
    padding: 5px 0;
}

.subnav-entry li {
    /* 里面的子盒子可以写 % 相对于父级来说的 */
    flex: 20%;
}

.subnav-entry a {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subnav-entry-icon {
    width: 28px;
    height: 28px;
    background-color: pink;
    margin-top: 4px;
    background: url(../images/subnav-bg.png) no-repeat;
    background-size: 28px auto;
}
```



**案例2**

![image-20211129181119713](http://img.zyugat.cn/zyuimg/2021-11-29_f2197dd6efd36.png)



- `.nav-common`：是每个容器，其内部分成3块
  - ![image-20211129181408738](http://img.zyugat.cn/zyuimg/2021-11-29_39a526d5b22a7.png)
- `.nav-items`：内部的容器，以垂直进行排序
  - ![image-20211129181635217](http://img.zyugat.cn/zyuimg/2021-11-29_b27ab1841659a.png)
- `.nav-items a`：内部的a标签以1等份进行分配。**如果有2个a标签那么就划分成2等份。**
  - ![image-20211129181635217](http://img.zyugat.cn/zyuimg/2021-11-29_b27ab1841659a.png)
- `.nav-items a:nth-child(1)`：第一个元素下边框的白线
  - ![image-20211129182158287](http://img.zyugat.cn/zyuimg/2021-11-29_93f2355097c30.png)
- `.nav-items:nth-child(-n+2)`：前2个元素右边框的白线
  - ![image-20211129182103102](http://img.zyugat.cn/zyuimg/2021-11-29_77c56f39c3020.png)

```css
nav {
  overflow: hidden;
  border-radius: 8px;
  margin: 0 4px 3px;
}

.nav-common {
  display: flex;
  height: 88px;
  background-color: pink;
}

.nav-common:nth-child(2) {
  margin: 3px 0;
}

.nav-items {
  /* 不冲突的 */
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-items a {
  flex: 1;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 14px;
  /* 文字阴影 */
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.nav-items a:nth-child(1) {
  border-bottom: 1px solid #fff;
}

.nav-items:nth-child(1) a {
  border: 0;
  background: url(../images/hotel.png) no-repeat bottom center;
  background-size: 121px auto;
}

/* -n+2就是选择前面两个元素 */

.nav-items:nth-child(-n + 2) {
  border-right: 1px solid #fff;
}

.nav-common:nth-child(1) {
  background: -webkit-linear-gradient(left, #fa5a55, #fa994d);
}

.nav-common:nth-child(2) {
  background: -webkit-linear-gradient(left, #4b90ed, #53bced);
}

.nav-common:nth-child(3) {
  background: -webkit-linear-gradient(left, #34c2a9, #6cd559);
}
```

```html
<nav>
    <div class="nav-common">
        <div class="nav-items">
            <a href="#">海外酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
    </div>
    <div class="nav-common">
        <div class="nav-items">
            <a href="#">海外酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
    </div>
    <div class="nav-common">
        <div class="nav-items">
            <a href="#">海外酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
        <div class="nav-items">
            <a href="#">海外酒店</a>
            <a href="#">特价酒店</a>
        </div>
    </div>

</nav>
```





****



## 过渡动画

`transition: 过渡的属性 花费的时间 运动曲线 何时开始;`

最后2个属性可以省略

- 属性：none、all、property（颜色属性、取值为数值的属性、转换属性、渐变属性、阴影属性）
- 花费时间，单位是秒 0.5s
- 运动曲线，默认ease先慢后快最后慢、linear匀速、ease-in先慢后快、ease-out先快后慢、ease-in-out慢快慢先加速后减速
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



第二种：

```css
transition-property: ;
transition-duration: ;
text-combine-upright: ;
transition-delay: ;
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



- transform：2D
  - **x和y的值是px，x向右是正，向左是负数。**
  - `translate(x,y)`：移动
  - `scale(num1,num2)`：缩放(num<=1)，num1是水平，num2是垂直
  - `rotate(num deg)`：顺时针旋转，deg是角度单位
  - `skew(num1,num2)`：翻转，num1是水平，num2是垂直**(单位deg)**

图片放大效果：

```css
div {
  overflow: hidden;
  float: left;
  margin: 10px;
}
div img {
  transition: all 0.5s;
}
div img:hover {
  transform: scale(1.3);
}
```



> 翻转方向：
>
> 如果以X轴进行选择，那边方向就是手指弯曲的方向。
>
> ![image-20211129154428476](http://img.zyugat.cn/zyuimg/2021-11-29_223300166645a.png)
>
> Z轴：可以看下面案例旋转木马理解

- transform：3D
  - Z坐标：可以理解为缩放，因为如果是负值那么就放远点，那就小了。
  - 必须给父类添加：`perspective: numpx`，透视，伪3D
  - Z轴：**距离中心**的px。X轴：上下（翻滚 ）。Y轴：左右
  - `translate3d(x,y,z)`
  - `scale3d(x,y,z)`
  - `rotate3d(x,y,z)`：rotateXYZ，沿着XYZ其中一轴旋转。单位deg。Z轴旋转=2D的旋转。

- `transfrom-style：preserve-3d`：子元素开启立体空间，默认flat不开启。写给父级

```css
div{
	transform: translate3D();
	transform: translateX();
	transform: translateY();
	transform: translateZ();
}
```



鼠标移动到son正方形上，有一个放大动画

**关键：子元素必须有父元素，并且长宽必须是100%。**

```css
#parent {
  width: 200px;
  height: 200px;
  background: pink;
  margin: 100px auto;
  /* 必须存在,如果不存在就看不到 Z 轴的变化 */
  perspective: 400px;
}
#son {
  width: 100%;
  height: 100%;
  background: blue;
  /* 缩小 */
  transform: translateZ(-100px);
  transition: all 2s;
}
#son:hover {
  transform: scale(1);
}
```



- `animation：动画名字 完成时间 速度曲线 延时执行时间 延迟 执行次数 是否反向播放`
- 模拟动画效果，通过关键帧控制动画的每一步
- `@keyframes`：声明动画，指定关键帧
- `animation-duration`：执行时间
- `animation-timing-function`：速度曲线，`setps(nums)`步长
- `animation-delay`：延时执行时间
- `animation-iteration-count`：执行次数：infinite无限次 或 Num
- `animation-direction`：动画播放方向
  - animation-direction: normal 正序播放
    animation-direction: reverse 倒序播放
    animation-direction: alternate 交替播放
    animation-direction: alternate-reverse 反向交替播放
- `animation-fill-mode: forwards;`：停在最后一帧，默认backwards
- `animation-play-state`：动画停止还是运行，paused默认 | running

```css
@keyframes myname{
  35%{
    margin-left: -2100px;
  }
  70%{
    margin-left: -4200px;
  }
  100%{
    margin-left: -6300px;
  }
}
```



### 案例 

**热点图**

![chrome-capture](http://img.zyugat.cn/zyuimg/2021-11-29_a0e0cee41fb01.gif)

思路：

- html
  - map放背景图、city定义位置、dotted定义热点的样式、pulse定义3个圈圈作为外放的样式圈
- css
  - city：定义圈圈的位置
  - dotted：定义样式，长宽是8像素，圆形`border-radius: 50%;`
  - pulse：必须定义top、left、treansform，意义在于**放大之后就会中心向四周发散**
  - 下面分别定义了 pulse2和 pulse3 的延迟时间。

```html
<style>
  body {
    background-color: #333;
  }
  .map {
    position: relative;
    width: 747px;
    height: 616px;
    margin: 0 auto;
  }
  .city {
    position: absolute;
    top: 227px;
    right: 193px;
    color: #fff;
  }
  .dotted {
    width: 8px;
    height: 8px;
    background-color: #09f;
    border-radius: 50%;
  }
  .city div[class^='pulse'] {
    /* 保证我们小波纹在父盒子里面水平垂直居中 放大之后就会中心向四周发散 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 8px;
    height: 8px;
    box-shadow: 0 0 12px #009dfd;
    border-radius: 50%;
    animation: pulse 1.2s linear infinite;
  }
  .city div.pulse2 {
    animation-delay: 0.4s;
  }
  .city div.pulse3 {
    animation-delay: 0.8s;
  }
  @keyframes pulse {
    0% {
    }
    70% {
      /* transform: scale(5);  我们不要用scale 因为他会让 阴影变大*/
      width: 40px;
      height: 40px;
      opacity: 1;
    }
    100% {
      width: 70px;
      height: 70px;
      opacity: 0;
    }
  }
</style>
<div class="map">
  <div class="city">
    <div class="dotted"></div>
    <div class="pulse1"></div>
    <div class="pulse2"></div>
    <div class="pulse3"></div>
  </div>
</div>
```



**小熊奔跑**

思路：

- 这是一个长图片，分为8个动作，因此`steps(8)`
- xiong设置长宽为熊一个动作的大小
- `bear`：是小熊奔跑的动作，`infinite`无限循环
- `move`：从屏幕的左边移动到中间，`forwards`结束，`translateX(-50%)`居中（减与自身长度的一半）如果是使用margin那么假如`width: 200px;`发生变化那就还要改一次。

```html
<style>
.xiong {
  position: relative;
  width: 200px;
  height: 100px;
  background: url(bear.png) no-repeat;
  animation: bear 0.4s steps(8) infinite, move 3s forwards;
}

@keyframes bear {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1600px 0;
  }
}

@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
    /* margin-left: -100px; */
    transform: translateX(-50%);
  }
}
</style>
<div class="xiong"></div>
```



**两个面翻转盒子**

思路：

- 给front和back同时添加相同样式，作为盒子样式
- 给front单独添加背景颜色，设置`z-index`让他第一个显示
- back单独添加背景颜色，沿着Y轴旋转180度，作为背面。

```html
<style>
.box {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 100px auto;
  transition: all 0.4s;
  /* 让背面的紫色盒子保留立体空间 给父级添加的 */
  transform-style: preserve-3d;
}

.box:hover {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 300px;
}

.front {
  background-color: pink;
  z-index: 1;
}

.back {
  background-color: purple;
  /* 像手机一样 背靠背 旋转 */
  transform: rotateY(180deg);
}
</style>
    <div class="box">
      <div class="front">test1</div>
      <div class="back">test2</div>
    </div>
```





**3D导航栏**

![chrome-capture](http://img.zyugat.cn/zyuimg/2021-11-29_a0e0cee41fb01.gif)

**思路：**

- ul 和 li ：作为盒子的大小
- box：作为翻转盒子的父元素，添加动画和`transform-style`
- front和bottom 两个盒子初始时，是同一个平面。当给bottom设置`rotateX(-90deg)`时，**字是在下面的**。此时是这样的形状

![image-20211129162114064](http://img.zyugat.cn/zyuimg/2021-11-29_0bf3e14cf906d.png)



- 将front向前移动 `translateZ(17.5px)` ，Z轴代表向前移动放大

- 将bottom向下移动 `translateY(17.5px)` 。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 100px;
  }

  ul li {
    float: left;
    margin: 0 5px;
    width: 120px;
    height: 35px;
    list-style: none;
    /* 一会我们需要给box 旋转 也需要透视 干脆给li加 里面的子盒子都有透视效果 */
    perspective: 500px;
  }

  .box {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.4s;
  }

  .box:hover {
    transform: rotateX(90deg);
  }

  .front,
  .bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .front {
    background-color: pink;
    z-index: 1;
    transform: translateZ(17.5px);
  }

  .bottom {
    background-color: purple;
    /* 这个x轴一定是负值 */
    /* 我们如果有移动 或者其他样式，必须先写我们的移动 */
    transform: translateY(17.5px) rotateX(-90deg);
  }
</style>
<ul>
  <li>
    <div class="box">
      <div class="front">test1</div>
      <div class="bottom">test2</div>
    </div>
  </li>
</ul>
```



**旋转木马**

思路：

- 6张图片沿着Y轴旋转一定角度（`rotateY(0)`）全部在原地旋转，现在我们需要他们距离中心一定距离，那么就改变 Z轴的方向

![image-20211129163357325](http://img.zyugat.cn/zyuimg/2021-11-29_c919308ea594e.png)

- `translateZ(300px)`：距离中心300px

![image-20211129163438239](http://img.zyugat.cn/zyuimg/2021-11-29_703c4b3c1a187.png)



```html
    <style>
        body {
            perspective: 1000px;
        }
        
        section {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 150px auto;
            transform-style: preserve-3d;
            /* 添加动画效果 */
            animation: rotate 10s linear infinite;
            background: url(pig.jpg) no-repeat;
        }
        
        section:hover {
            /* 鼠标放入section 停止动画 */
            animation-play-state: paused;
        }
        
        @keyframes rotate {
            0% {
                transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
            }
        }
        
        section div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(dog.jpg) no-repeat;
        }
        
        section div:nth-child(1) {
            transform: rotateY(0) translateZ(300px);
        }
        
        section div:nth-child(2) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(60deg) translateZ(300px);
        }
        
        section div:nth-child(3) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(120deg) translateZ(300px);
        }
        
        section div:nth-child(4) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(180deg) translateZ(300px);
        }
        
        section div:nth-child(5) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(240deg) translateZ(300px);
        }
        
        section div:nth-child(6) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(300deg) translateZ(300px);
        }
    </style>
    <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
```



****



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

```css
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 992px) {}
@media only screen and (min-width: 1200px) {}
@media only screen and (min-width: 1920px) {}

@media only screen and (min-width: 1920px) {
  .el-col-xl-4-8 {
    max-width: 20%;
    background-color: red !important ;
  }
  .el-col-xl-offset-4-8 {
    margin-left: 20%;
  }
  .el-col-xl-pull-4-8 {
    position: relative;
    right: 20%;
  }
  .el-col-xl-push-4-8 {
    position: relative;
    left: 20%;
  }
}
```





- 单位

  - em：相对于父元素字体大小

  * rem：相对于html字体大小

  * **什么意思？例如父元素字体大小是10，10em=100px**



1、如果图片和文字有缝隙可以使用：`vertical-align:top`（给图片添加）

![image-20211129172113568](http://img.zyugat.cn/zyuimg/2021-11-29_34f764e9b1fc1.png)



2、文字垂直居中：`line-height: 元素高度`

3、按钮边框：`border: 0;`

4、按钮取消选中效果：`outline:none`

5、盒子的大小是设置的宽高：`box-sizing:border-box;`

6、半透明：`background:rgba(0,0,0,0.3)`

7、背景图片缩放大小：`background-size: 长px 宽px`

8、去除列表的圆点：`list-style: none`

9、表单轮廓线：`outline` 设置0或者none，就可以取消表单的蓝色边框了

10、文字间距：`letter-spacing`



vertical-alin，图片或表单和文字垂直对齐

只针对 行内元素 或行内内块元素有效

- baseline，默认
- top，`元素顶端`对齐`最高元素顶线`
- middle，中部对齐
- bottom，`元素顶端`对齐`最低元素底线`



**图片大小跟随父元素**：`width: 100%;`

```css
.pic {
  float: left;
  width: 120px;
  height: 60px;
  margin-right: 5px;
}
.pic img {
  width: 100%;
}
```

![image-20211129135819309](http://img.zyugat.cn/zyuimg/2021-11-29_3f7080da56257.png)

如果没有w100%这个属性，那么就会变成

![image-20211129135828207](http://img.zyugat.cn/zyuimg/2021-11-29_1e0b6f4a67998.png)



10、**如果想让块级盒子水平居中：**

- 盒子必须要有宽度(width)
- 盒子左右边距设置为auto(margin:0 auto)

如果想让行内元素，或者行内块元素水平居中：

- 给父元素添加:text-align:center

行内元素尽量只设置左右的内外边距，因为你设置上下他是没反应的



11、**绝对定位的盒子居中**

是**不能**通过 `margin: 0 auto` 水平居中

只能通过那几个个属性

- 如果宽度和高度都是200px那么：
- `left:50%`，水平居中
- `margin-left: -100px`，自己盒子的一半



**方案：图片底部有一个空白细缝**

这是因为那个行内块元素和文字基线对齐

- 解决方案是加vertical-alin
- 第二种是转为块级元素：display:block



```
  空格符 &nbsp;
< 小于号 &lt;
> 大于号 &gt;
& 和号 &amp;
± 正负号 &plusmn;
× 乘号 &times;
÷ 除号 &divide;
² 上标2 &sup2;
₂ 下标2 &sub2;
```



12、**filter，图片模糊**

`filter: 函数();`

- blur(5px)，高斯模糊，数值越大越模糊。



13、**calc函数**

`width:calc(100% -80px);`

在括号内我们可以做一些简单运算

```css
/* 子盒子大小永远比父盒子小30像素 */
.son {
  /* 100% 是指父盒子的100% */
  width: calc(100% - 30px)
}
```



14、**鼠标样式**

```html
<ul>
    <li style="cursor: default;">我是默认的小白鼠标样式</li>
    <li style="cursor: pointer;">我是鼠标小手样式</li>
    <li style="cursor: move;">我是鼠标移动样式</li>
    <li style="cursor: text;">我是鼠标文本样式</li>
    <li style="cursor: not-allowed;">我是鼠标禁止样式</li>
</ul>
```



图片文字垂直居中：`vertical-align: middle;`

![image-20211129135310080](http://img.zyugat.cn/zyuimg/2021-11-29_b7edbb86bef25.png)



15、单行溢出显示省略号：

```css
div {
    width: 150px;
    height: 80px;
    background-color: pink;
    margin: 100px auto;
    /* 这个单词的意思是如果文字显示不开自动换行 */
    /* white-space: normal; */
    /* 1.这个单词的意思是如果文字显示不开也必须强制一行内显示 */
    white-space: nowrap;
    /* 2.溢出的部分隐藏起来 */
    overflow: hidden;
    /* 3. 文字溢出的时候用省略号来显示 */
    text-overflow: ellipsis;
}
```

![image-20211129135525737](http://img.zyugat.cn/zyuimg/2021-11-29_d5258e6734391.png)



16、文本溢出使用省略号显示

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





### 布局

```css
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: '微软雅黑', 'Source Han Sans', sans-serif;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  select,
  input,
  label,
  button {
    vertical-align: middle;
  }
}
```



```
类命名规则：

头：header 
  内容：content/container
  尾：footer
  导航：nav    
  侧栏：sidebar
  栏目：column
  页面外围控制整体布局宽度：wrapper
  左右中：left right center
  登录条：loginbar
  标志：logo
  广告：banner
  页面主体：main
  热点：hot
  新闻：news
  下载：download
  子导航：subnav
  菜单：menu
  子菜单：submenu
  搜索：search
  友情链接：friendlink
  页脚：footer
  版权：copyright
  滚动：scroll
  内容：content
  标签页：tab
  文章列表：list
  提示信息：msg
  小技巧：tips
  栏目标题：title
  加入：joinus
  指南：guild
  服务：service
  注册：regsiter
  状态：status
  投票：vote
  合作伙伴：partner
(二)注释的写法:
  /* Footer */
  内容区
  /* End Footer */
(三)id的命名:
  (1)页面结构
  容器: container
  页头：header
  内容：content/container
  页面主体：main
  页尾：footer
  导航：nav
  侧栏：sidebar
  栏目：column
  页面外围控制整体布局宽度：wrapper
  左右中：left right center

  (2)导航
  导航：nav
  主导航：mainbav
  子导航：subnav
  顶导航：topnav
  边导航：sidebar
  左导航：leftsidebar
  右导航：rightsidebar
  菜单：menu
  子菜单：submenu
  标题: title
  摘要: summary

  (3)功能
  标志：logo
  广告：banner
  登陆：login
  登录条：loginbar
  注册：regsiter
  搜索：search
  功能区：shop
  标题：title
  加入：joinus
  状态：status
  按钮：btn
  滚动：scroll
  标签页：tab
  文章列表：list
  提示信息：msg
  当前的: current
  小技巧：tips
  图标: icon
  注释：note
  指南：guild
  服务：service
  热点：hot
  新闻：news
  下载：download
  投票：vote
  合作伙伴：partner
  友情链接：link
  版权：copyright\
```

| ClassName              | 含义                                     |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |













## 补充

### 精灵图

针对于背景图片的使用，，把多个小的背景图片整合在一张大图里面，通过移动背景图片的位置`background-position`的 目标图片 x 和 y 坐标。

```css
.box {
    height: 25px;
    width: 27px;

    margin: 100px auto;
    background: url("imeges/sprites.png") no-repeat -155px -106px;
}
```

二倍精灵图：先等比例缩小，然后在移动

```css
.sou {
  background: url(../images/jd-sprites.png) no-repeat -81px 0;
  background-size: 200px auto;
}
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





