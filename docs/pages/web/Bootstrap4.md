# Bootstrap4

网格系统分为5类：

- `.col`：针对所有设备
- `.col-sm`：平板 - 屏幕宽度等于或大于 576px
- `.col-md`：桌面显示器 - 屏幕宽度等于或大于 768px)
- `.col-lg`：大桌面显示器 - 屏幕宽度等于或大于 992px)
- `.col-xl`：超大桌面显示器 - 屏幕宽度等于或大于 1200px)

![image-20211029213721656](http://img.zyugat.cn/zyuimg/image-20211029213721656_1p4mGNeh.png)

网格规则：

- 网格每一行需要放在设置了 `.container` (固定宽度) 或 `.container-fluid` (全屏宽度) 类的容器中，这样就可以自动设置一些外边距与内边距。
- 使用行来创建水平的列组。
- 内容需要放置在列中，并且只有列可以是行的直接子节点。
- 预定义的类如 **.row** 和 **.col-sm-4** 可用于快速制作网格布局。
- 列通过填充创建列内容之间的间隙。 这个间隙是通过 **.rows** 类上的负边距设置第一行和最后一列的偏移。
- **网格列是通过跨越指定的 12 个列来创建**。 例如，设置三个相等的列，需要使用三个 **.col-sm-4** 来设置。



****



## 布局

`.container`：固定宽度

`.container-fluid`：百分百宽度，用于移动端开发



第一个`*`表示相应的设备。第二个`*`表示一个数字(宽度占比)，同于一行相加为12，若不加则自动布局。

```html
<div class="row">
  <div class="col-*-*"></div>
</div>
```



`offset-*-*`：偏移列。第二个`*`表示一个数字，**距离左边多少格子**。

```html
<div class="container">
    <div class="row">
        <div class="col-md-3">左侧</div>
        <!-- 偏移的份数 就是 12 - 两个盒子的份数 = 6 -->
        <div class="col-md-3 col-md-offset-6">右侧</div>
    </div>
    <div class="row">
        <!-- 如果只有一个盒子 那么就偏移 = (12 - 8) /2 -->
        <div class="col-md-8 col-md-offset-2">中间盒子</div>
    </div>
</div>
```

![image-20211218164227396](http://img.zyugat.cn/zyuimg/2021-12-18_2d2e476bf8574.png)



`col-*-push/pull-*`：列排序

push：距离左边 8 个单位。

pull：距离右边 4 个单位

```html
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-push-8">左侧</div>
        <div class="col-md-8 col-md-pull-4">右侧</div>
    </div>
</div>
```

![image-20211218162409594](http://img.zyugat.cn/zyuimg/2021-12-18_4197b519534f9.png)



**响应式工具**

| 类名       | 超小屏 | 小屏 | 中屏 | 大屏 |
| ---------- | ------ | ---- | ---- | ---- |
| .hidden-xs | 隐藏   | 可见 | 可见 | 可见 |
| .hidden-sm | 可见   | 隐藏 | 可见 | 可见 |
| .hidden-md | 可见   | 可见 | 隐藏 | 可见 |
| .hidden-lg | 可见   | 可见 | 可见 | 隐藏 |

**而 `.visible-*`：是与之相反的！！意思是在什么情况下才会显示。**

- 1：只有在 lg 大屏的情况下才**会显示**
- 3：在md中屏和xs超小屏时**会隐藏**

```html
<div class="container">
  <div class="row">
    <div class="col-xs-3">
      <span class="visible-lg">1</span>
    </div>
    <div class="col-xs-3"><h2>2</h2></div>
    <div class="col-xs-3 hidden-md hidden-xs"><h2>3</h2></div>
    <div class="col-xs-3"><h2>4</h2></div>
  </div>
</div>
```

![动画](http://img.zyugat.cn/zyuimg/2021-12-18_22108beb1458f.gif)



案例：阿里百秀

分析页面：左边导航栏占2，中间内容占7，右边则是3。

- 小屏时将导航栏作为顶部，右侧则变成底部。
- 超小屏时，隐藏导航栏的logo图片

![动画](http://img.zyugat.cn/zyuimg/2021-12-18_09e2f63e6acad.gif)

第一步：修改container的最大宽度为 1280 根据设计稿来走的

```css
@media screen and (min-width: 1280px) {
    .container {
        width: 1280px;
    }
}
```

第二步：当我们进入 小屏幕 还有 超小屏幕的时候 我们 nav 里面的li 浮动起来 并且宽度为 20%

```css
@media screen and (max-width: 991px) {
    .nav li {
        float: left;
        width: 20%;
    }
    article {
        margin-top: 10px;
    }
}
```

![image-20211218165403420](http://img.zyugat.cn/zyuimg/2021-12-18_34c39b4aa5f3d.png)



第三步：超小屏幕的时候 我们 nav 文字会变成14px

```css
@media screen and (max-width: 767px) {
    .nav li a {
        font-size: 14px;
        padding-left: 3px;
    }
    /* 当我们处于超小屏幕 news 第一个li 宽度为 100%  剩下的小li  各 50% */
    .news li:nth-child(1) {
        width: 100%!important;
    }
    .news li {
        width: 50%!important;
    }
    .publish h3 {
        font-size: 14px;
    }
}
```

**当为超小屏的时候，Logo图标隐藏，让文字显示。**

```html
<div class="logo">
    <a href="#">
        <img src="images/logo.png" alt="" class="hidden-xs">
        <span class="visible-xs">阿里百秀</span>
    </a>
</div>
```

![image-20211218165458531](http://img.zyugat.cn/zyuimg/2021-12-18_99aa46c0007d7.png)







## flex

`d-flex`：创建弹性盒子容器

`d-*-flex`：sm、md、lg、xl

`.d-*-inline-flex`：行内

```html
<div class="d-flex p-3 bg-secondary text-white">
  <div class="p-2 bg-info">Flex item 1</div>
  <div class="p-2 bg-warning">Flex item 2</div>
  <div class="p-2 bg-primary">Flex item 3</div>
</div>
```



水平显示方向：向右 `.flex-row-reverse`

垂直显示方向：向右 `.flex-column-reverse`

内容排列：`.justify-content-*`（**start (默认), end, center, between 或 around**:）

强制等宽：`.flex-fill`

填充剩余空间：`.flex-grow-1`

强制排序：`order-*`，num。默认从小到大



## 基本标签

`<display>`：标题类，控制字体大小样式，有1到4

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```



`<small>`：创建字号更小的颜色更浅的文本，HTML元素。

`<mark>`：为黄色背景及有一定的内边距

`<abbr>`：底部虚线

`<blockquote>`：引用内容

`<dl>`：列表，dt标题，dd内容

```HTML
<div class="container">
  <h1>Description Lists</h1>    
  <p>The dl element indicates a description list:</p>
  <dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
  </dl>     
</div>
```

`<code>`：代码

`<kbd>`：内底白字，用于显示按键（ctrl+p这些）

`<pre>`：可以显示空格

`.jumbotron`：创建一个大的灰色背景框，里面可以设置一些特殊的内容和信息。



**颜色**

`text-*`：文本颜色，`*`表示颜色单词

`bg-*`：背景颜色



**图片**

`.rounded`：让图片显示圆角效果

`.rounded-circle`：椭圆形

`.img-thumbnail`：设置图片缩略图(图片有边框)

`.float-*`：对齐方式

- right、left：右对齐、左对齐

`.img-fluid`：响应式图片



**文字样式**

`.font-weight-*`：文字样式，`*`表示需要的样式

- bold、normal、light：加粗、普通、更细

`font-italic`：斜体

`text-*`：文字对齐方式

- left、center、right
- justify、nowrap：超出部分换行、超出部分不换行
- lowercase、uppercase：文本大写、文本小写
- capitalize：单词首字母大写

等



1、清除边框->

```html
<span class="border"></span>
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-right-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-left-0"></span>
```

2、边框颜色->`.border.border-*`

3、圆角边框->`.rounded-*`，方向

4、浮动：->`float-left`、`float-right`、`clearfix`

5、响应式浮动->`.float-*-left|right`

6、居中对齐->`.mx-auto`

7、宽度->`w-*`、`mw-*`。*=数字

8、高度同理



## 表格

**表格：**

`.table`：基本样式

`.table table-*`：表格样式->

- striped：条纹，灰白相间
- bordered：带边框
- hover：鼠标悬停上面有灰色背景

| 类名                 | 描述                             |
| -------------------- | -------------------------------- |
| **.table-primary**   | 蓝色: 指定这是一个重要的操作     |
| **.table-success**   | 绿色: 指定这是一个允许执行的操作 |
| **.table-danger**    | 红色: 指定这是可以危险的操作     |
| **.table-info**      | 浅蓝色: 表示内容已变更           |
| **.table-warning**   | 橘色: 表示需要注意的操作         |
| **.table-active**    | 灰色: 用于鼠标悬停效果           |
| **.table-secondary** | 灰色: 表示内容不怎么重要         |
| **.table-light**     | 浅灰色，可以是表格行的背景       |
| **.table-dark**      | 深灰色，可以是表格行的背景       |

`.table.table-responsive-*`：表格样式2->

- sm：减少内边距来设置较小的表格

`.table-responsive-*`：响应式表格，自动创建滚动条

- sm、md、lg、xl：当大于576 768 992 1200px时创建



`<thread>`：标题

`<tbody>`：内容

```html
<table class="table">
  <thead>
    <tr>
      <th>Firstname</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
    </tr>
  </tbody>
</table>
```

****



## 按钮与下拉菜单

`.btn`：基本按钮

`.btn.btn-*`：->实心不带边框

`.btn.btn-outline-*`->带边框的

| *         | message |
| --------- | ------- |
| primary   | 首选    |
| secondary | 次要的  |
| success   | 成功    |
| info      | 信息    |
| warning   | 警告    |
| danger    | 错误    |
| dark      | 黑色    |
| light     | 浅色    |
| link      | 链接    |

`.btn.btn-*`：设置大小->lg、sm->大号和小号，不填则默认



`.btn-block`：块级按钮

`.active`：点击后的按钮

`.disabled`：不可点击的按钮

 注意 `<a>`元素不支持`disabled`属性，你可以通过添加`.disabled`类来禁止链接的点击。

`.spinner-border` 或 `.spinner-grow`：加载按钮

```html
<button class="btn btn-primary">
  <span class="spinner-border spinner-border-sm"></span>
  <span class="spinner-grow spinner-grow-sm"></span>
</button>
```



`.btn-group`：按钮组

`.btn-group-vertical`：垂直按钮

```HTML
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
</div>
```





**内嵌下拉菜单 与 下拉菜单**

`.dropdown` 或 `.btn-group`：指定下拉菜单

给按钮添加 `.dropdown-toggle` 和 `data-toggle="dropdown`属性

在div元素上添加 `.dropdown-menu` 创建下拉菜单

最后在选项中添加菜单子项 `.dropdown-item`

`.disabled`：禁用项

```HTML
<div class="btn-group">
  <button type="button" class="btn btn-primary">Sony</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Tablet</a>
    <a class="dropdown-item" href="#">Smartphone</a>
  </div>
</div>
```



`.dropdown-divider`：分割线，一个单独的div

`.dropdown-header`：标题，一个单独的div

`.dropdown-item-text`：文本项，不可被点击除了a元素

`dropright`：菜单向右弹出、`dropup`向上弹出、`dropleft`向左弹出

```html
<div class="btn-group dropright">
```

**垂直按钮下拉菜单**:`.btn-group-vertical`





## 表单

**导航栏的表单**

导航栏的表单 form 元素使用 `class="form-inline"` 类来排版输入框与按钮

在输入框前添加小标签：`.input-group-addon`



`.form-group`：堆叠表单->垂直显示

`.form-inline`：内联表单->一行显示

`.form-control`：输入框、选择框（select）

`.form-check-label`：选择框文本

`.form-check-input`：复选框（`.disabled`禁用）

`.radio`：单选

`.btn-primary`：按钮

```html
<form>
  <div class="form-group">
    <label for="sel1">单选下拉菜单:</label>
    <select class="form-control" id="sel1">
      <option>1</option>
      <option>2</option>
    </select>
    <br>
    <label for="sel2">多选下拉菜单(按住 shift 键，可以选取多个选项):</label>
    <select multiple class="form-control" id="sel2">
      <option>1</option>
      <option>2</option>
    </select>
  </div>
</form>
```



在输入框前添加小标签：`.input-group-prepend`、后面添加：`.input-group-append`、最后使用 `.input-group-text` 设置文本样式

```html
<div class="input-group-prepend">
  <span class="input-group-text">One</span>
  <span class="input-group-text">Two</span>
  <span class="input-group-text">Three</span>
</div>
```

点击标签后聚焦输入框->，标签的 for 属性需要与输入框组的 id 对应



****



**自定义表单元素**

自定义复选框：父类div上添加 `.custom-control.custom-checkbox` 类、复选框 `type="checkbox"` 类是 `.custom-control-input`

复选框文本类 `.custom-control-label`



自定义单选框：父类div `.custom-control.custom-radio`、单选框->`type="radio"` 和 `.custom-control-input`



`.custom-control-inline`：同一行显示



自定义选择菜单：`.custom-select-sm`、`.custom-select-lg`

自定义滑动控件：`type="range"`、 `.custom-range`

自定义上传：`type="file"`、`.custom-file-input`

****



## 导航

**导航**

ul 元素上添加 `.nav` 类，在每个 li 选项上添加 `.nav-item` 类，在每个链接上添加 `.nav-link` 类

`.nav.nav-tabs`：选项卡

`.nav-pills`：胶囊形状

`.active`：高亮显示当前类

`.disabled`：不可点击



`.justify-content-center` 类设置导航居中显示

 `.justify-content-end` 类设置导航右对齐。

`.flex-column` 类用于创建垂直导航



`navbar-text`：导航文本

`.fixed-top` 或 `.fixed-bottom`：导航栏固定头尾部



> 链接中`href`指向面板的id

**选项卡下拉菜单**

**动态选项卡**

每个链接上添加 `data-toggle="tab"` 属性。 

然后在每个选项对应的内容的上添加 `.tab-pane` 类

对应选项卡内容的 div 元素使用 `.tab-content` 类 

如果你希望有淡入效果可以在 `.tab-pane` 后添加 `.fade`类:

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
  </li>
</ul>
 
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active container" id="home">...</div>
  <div class="tab-pane container" id="menu1">...</div>
  <div class="tab-pane container" id="menu2">...</div>
</div>
```

**胶囊状动态选项卡**：data-toggle 属性设置为 `data-toggle="pill"`



**标准导航栏**

`.navbar`：垂直导航栏

`.navbar.navbar-expand-xl|lg|md|sm`：水平导航栏

ul 元素上添加 `.navbar` 类，在每个 li 选项上添加 `.nav-item` 类，在每个链接上添加 `.nav-link` 类



`.justify-content-center`：居中对齐

`.bg-*`：颜色

`.navbar-brand`：高亮Loga，同时可以用于设置**图片自适应导航栏**



**折叠导航栏**

1、在父类中添加`.navbar-expand-md`类，导航链接会隐藏，但切换按钮会显示

2、给切换按钮添加类`class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"`，中的data-targer目标是导航选项的id

3、在导航选项类中添加 `.collapse.navbar-collapse`

```html
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>
```



**导航栏使用下拉菜单**

**导航栏的表单**

导航栏的表单 form 元素使用 `class="form-inline"` 类来排版输入框与按钮

在输入框前添加小标签：`.input-group-prepend`



**面包屑导航**

![image-20211030152514477](http://img.zyugat.cn/zyuimg/image-20211030152514477_2SpoZ0QX.png)

`.breadcrumb`、`.breadcrumb-item`、`.action`

可以使用列表形式->ol li a

也可以使用nav a形式

```html
<ol class="breadcrumb">
  <li class="breadcrumb-item active">Home</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
</ol>
```

****



## 轮播图

`.carousel.slide`：创建轮播图、滚动动画

`data-ride="carousel"`：轮播图



添加切换图片->`.carousel-inner`

指定图片内容->`.carousel-item`（`.active`活跃）

指示符->`.carousel-indicators`



切换图片按钮->`.carousel-control-prev` 和 `.carousel-control-next`

设置切换按钮的图标->`.carousel-control-prev-icon` 和 `.carousel-control-next-icon`



```html
<div id="demo" class="carousel slide" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
    </div>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
 
</div>
```



## 提示窗口

![img](http://img.zyugat.cn/zyuimg/21-10-30_Vi3DXxC5.jpg)

**信息提示框**

`.alert.alert-*`：信息提示框

| *         | message |
| --------- | ------- |
| primary   | 首选    |
| secondary | 次要的  |
| success   | 成功    |
| info      | 信息    |
| warning   | 警告    |
| danger    | 错误    |
| dark      | 黑色    |
| light     | 浅色    |

`.alert-link`：给提示框中的**链接标签**添加上，可匹配提示框颜色

`.alert-dismissible`：在提示框div上加上可关闭提示框

```HTML
<div class="alert alert-success alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>成功!</strong> 指定操作成功提示信息。
</div>
```

`.fade`和`.show`类用于设置提示框在关闭时的淡出和淡入效果

****



**徽章**

![img](http://img.zyugat.cn/zyuimg/21-10-30_51924af11c245.jpg)

突出显示新的或未读的项

`.badge.badge-secondary`：灰色渐变色的

`.badge-pill`：药丸形状

`.badge badge-*`：后面跟颜色

| *         | message |
| --------- | ------- |
| primary   | 首选    |
| secondary | 次要的  |
| success   | 成功    |
| info      | 信息    |
| warning   | 警告    |
| danger    | 错误    |
| dark      | 黑色    |
| light     | 浅色    |

****



**模态框**

覆盖在父窗体上的子窗体。

`.modal`

`.modal-dialog`：提示窗

`.modal-content`：内容

`model-header`、`model-body`、`model-footer`

`.modal-dialog.modal-sm` 或 `.modal-dialog.modal-lg`：创建大小模态框

```html
<!-- 按钮：用于打开模态框 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  打开模态框
</button>
 
<!-- 模态框 -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
 
      <!-- 模态框头部 -->
      <div class="modal-header">
        <h4 class="modal-title">模态框头部</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
 
      <!-- 模态框主体 -->
      <div class="modal-body">
        模态框内容..
      </div>
 
      <!-- 模态框底部 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
      </div>
 
    </div>
  </div>
</div>
```

****



**提示框**

向元素添加 **data-toggle="tooltip"** 

使用 **data-placement** 属性来设定提示框显示的方向: top, bottom, left 或 right:

```html
<div class="container">
  <h3>提示框实例</h3><br>
  <a href="#" data-toggle="tooltip" title="我是提示内容!">鼠标移动到我这</a>
</div>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>
```







## 小工具

### 列表组

![列表组](http://img.zyugat.cn/zyuimg/image-20211030134201953_wU1fs2Qr.png)

**div也可以**

在ul的基础上添加：`.list-group` 类

在li的基础上添加：`.list-group-item` 类

`.active`：高亮显示当前类

`.disabled`：不可点击

`.list-group-item-action`：鼠标悬停灰色背景

`.list-group-flush`：移除边框和圆角

`.list-group-horizontal`：水平列表组

`list-group-item-*`：颜色



### 分页

![image-20211030133719650](http://img.zyugat.cn/zyuimg/image-20211030133719650_i9Bc0pNv.png)

在ul的基础上添加：`.pagination` 类

在li的基础上添加：`.page-item` 类

在a的基础上添加：`.page-link` 类

`.active`：高亮显示当前类

`.disabled`：不可点击

`.pagination-lg` 类设置大字体的分页条目，

`.pagination-sm` 类设置小字体的分页条目

对其方式：`justify-content-center` 和 `justify-content-end`



### 卡片

![image-20211030134930215](http://img.zyugat.cn/zyuimg/image-20211030134930215_UKBV2UfK.png)

`.card`：卡片类

`.card-header`：头部

`.card-body`：内容

`.card-footer`：底部

`bg-*` 和 `text-*`：背景颜色和文字颜色

```html
<div class="card">
  <div class="card-header">头部</div>
  <div class="card-body">内容</div> 
  <div class="card-footer">底部</div>
</div>
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some example text. Some example text.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
```

头部元素上使用 `.card-title`类来设置卡片的标题 。

`.card-text`：类用于设置卡片正文的内容。

`.card-link`：类用于给链接设置颜色。

`.card-img-top` 或 `.card-img-bottom`：图片卡片,给img加上

`.card-img-overlay`：图片为背景



****



### 折叠

`.collapse` 类用于指定一个折叠元素

需要在 a 或 button 元素上添加 `data-toggle="collapse"` 属性。 `data-target="#id"` 属性是对应折叠的内容（`div id="demo"`）

`.show`：默认显示内容

```html
<a href="#demo" data-toggle="collapse">Collapsible</a>
<div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>
```

****



### 手风琴

![image-20211030140726208](http://img.zyugat.cn/zyuimg/image-20211030140726208_BQR6fkBG.png)

`data-parent="#id"`：对应父元素

思想：1、设置一个父元素。2、设置一个卡片(card)。3、卡片包含2个部分**标题和内容**(card-header和折叠)。4、给卡片标题设置折叠元素。5、给内容设置折叠信息。最后给内容设置`data-parent`

```html
<div id="accordion">
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        选项一
      </a>
    </div>
    <div id="collapseOne" class="collapse show" data-parent="#accordion">
      <div class="card-body">
        #1 内容
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
      选项二
    </a>
    </div>
    <div id="collapseTwo" class="collapse" data-parent="#accordion">
      <div class="card-body">
        #2 内容
      </div>
    </div>
  </div>
</div>
```



### 进度条

`.progress`：进度条类

`.progress-bar`：进度条

`.bg-*`：颜色

`.progress-bar-striped`：条纹

` .progress-bar-animated`：动画效果

`style="width:num%"`：进度

```html
<div class="progress">
  <div class="progress-bar" style="width:70%"></div>
</div>
<div class="progress" style="height:20px;"></div>
<!--高度-->
```



****



### 加载

`.spinner-border`：加载效果

`.text-*`：颜色

`.spinner-grow`：闪烁加载效果

**使用``.spinner-border-sm` 或 `.spinner-grow-sm` 类来创建加载效果的大小**





### 滚动监听

1、向您想要监听的元素（通常是 body）添加 `data-spy="scroll"` 。

2、然后添加 `data-target` 属性，它的值为导航栏的 id 或 class (`.navbar`)。

3、可滚动项元素上的 id （`<div id="section1">`） 必须匹配导航栏上的链接选项 （`<a href="#section1">`)。

`data-offset`：距离顶部的偏移像素







