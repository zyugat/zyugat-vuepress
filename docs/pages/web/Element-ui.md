# Element-ui

## 使用

https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E7%94%A8%E6%B3%95

```shell
# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```



完整导入

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```



按需导入

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```



```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```



## 布局

### container

`<el-container>`：外层容器。 当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。



Container 插槽：Container / Header / Aside / Main / Footer

Container 属性：

- direction：子元素排序方式，`horizontal / vertical`
  - 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal



Header 属性：

- height：默认 60px

Aside 属性：

- width：默认 300px

Footer 属性：

- height：默认 60px



案例1：在 `container` 中在嵌套一层 `container`，使aside和main自成一栏。

```html
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
```

![image-20211230171022826](http://img.zyugat.cn/zyuimg/2021-12-30_acf734ab53b4b.png)

案例2：因为最里面的 `container` 包裹了 footer 因此上下排序。

```html
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
```

![image-20211230171247980](http://img.zyugat.cn/zyuimg/2021-12-30_e1a8e66c58e2a.png)



****



### Layout 布局

使用列创建基础网格布局。**一共24列**



Row属性：

| 属性    | 说明                      | 类型   | 可选值                                      | 默认值 |
| :------ | :------------------------ | :----- | :------------------------------------------ | :----- |
| gutter  | 栅格间隔                  | number | —                                           | 0      |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式 | string | top/middle/bottom                           | top    |
| tag     | 自定义元素标签            | string | *                                           | div    |



Col属性

| 属性   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| :----- | :------------------------------------- | :------------------------------------------ | :----- | :----- |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如 {span: 4, offset: 4})   | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如 {span: 4, offset: 4})   | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4})   | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                         | string                                      | *      | div    |



通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```html
<el-row>
  <el-col :span="12">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :span="12">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
</el-row>
```

![image-20211230174117047](http://img.zyugat.cn/zyuimg/2021-12-30_a52d101d48121.png)

****



分栏间隔：`gutter` 列之间的间距，默认0

```html
<el-row :gutter="20">
  <el-col :span="12">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :span="12">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
</el-row>
```

![image-20211230174313116](http://img.zyugat.cn/zyuimg/2021-12-30_addd006355696.png)

****



列偏移：`offset` 偏移的栏数

```html
<el-row :gutter="20">
  <el-col
    :span="6"
    :offset="6"
  >
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col
    :span="6"
    :offset="6"
  >
    <div class="grid-content bg-purple"></div>
  </el-col>
</el-row>
```



![image-20211230174509817](http://img.zyugat.cn/zyuimg/2021-12-30_bfff7392303d4.png)

****



对齐方式：`justify` 属性来指定 start, center, end, space-between, space-around 其中的值

+ start，起始端对其，**从左到右**
+ end，从尾部开始，**从右到左**
+ center，居中
+ space-around，沿着主轴**均匀分布**
+ space-between，均匀分布，**但首尾两端与父元素相切**



****



响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

断点的隐藏类

```js
import 'element-plus/theme-chalk/display.css'
```

- `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
- 
- `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
- `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
- `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
- 
- `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
- `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
- `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
- 
- `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
- `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
- `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
- 
- `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏



## Base

### Button

```html
<el-button>Default</el-button>
```



type 属性中的 `text` 可选值，文字按钮，**没有边框和背景色的按钮**。

incon 属性，图标按钮，详情看文档。

https://element-plus.gitee.io/zh-CN/component/button.html#%E5%9B%BE%E6%A0%87%E6%8C%89%E9%92%AE

https://element-plus.gitee.io/zh-CN/component/icon

![image-20211230181949544](http://img.zyugat.cn/zyuimg/2021-12-30_70648dfb81edf.png)



plain 属性：淡化背景颜色，并且会重新计算hover和active的值。右边是添加 pain 属性的按钮。

![image-20211230182323874](http://img.zyugat.cn/zyuimg/2021-12-30_5c6a91f2e195c.png)



Button 属性：

| 属性              | 说明                           | 类型               | 可选值                                             | 默认值 |
| :---------------- | :----------------------------- | :----------------- | :------------------------------------------------- | :----- |
| size              | 尺寸                           | string             | medium / small / mini                              | —      |
| type              | 类型                           | string             | primary / success / warning / danger / info / text | —      |
| plain             | 是否为朴素按钮                 | boolean            | —                                                  | false  |
| round             | 是否为圆角按钮                 | boolean            | —                                                  | false  |
| circle            | 是否为圆形按钮                 | boolean            | —                                                  | false  |
| loading           | 是否为加载中状态               | boolean            | —                                                  | false  |
| disabled          | 是否为禁用状态                 | boolean            | —                                                  | false  |
| icon              | 图标组件                       | string / Component | —                                                  | —      |
| autofocus         | 是否默认聚焦                   | boolean            | —                                                  | false  |
| native-type       | 原生 type 属性                 | string             | button / submit / reset                            | button |
| auto-insert-space | 自动在两个中文字符之间插入空格 | boolean            |                                                    | —      |

![image-20211230181838435](http://img.zyugat.cn/zyuimg/2021-12-30_8d6b2a6911678.png)

Button Group属性：

| 属性 | 说明                         | 类型   | 可选值                      | 默认值 |
| :--- | :--------------------------- | :----- | :-------------------------- | :----- |
| size | 用于控制该按钮组内按钮的大小 | string | medium / small / mini       | —      |
| type | 用于控制该按钮组内按钮的类型 | string | primary / success / warning | —      |



```ts
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
```



****



### Border

https://element-plus.gitee.io/zh-CN/component/border.html#border-%E8%BE%B9%E6%A1%86

```html
  <table class="demo-border">
    <tbody>
      <tr>
        <td class="line"></td>
      </tr>
    </tbody>
  </table>
```



**边框样式**

一个直线一个虚线

```css
.demo-border .line div {
  border-top: 1px solid var(--el-border-color-base);
}
.demo-border .line .dashed {
  border-top: 2px dashed var(--el-border-color-base);
}
```

阴影

![image-20211230184505043](http://img.zyugat.cn/zyuimg/2021-12-30_5759472a79575.png)

```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)

box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
```



****



### Link 链接

```html
<template>
  <div>
    <el-link href="https://element.eleme.io" target="_blank">default</el-link>
    <el-link type="primary">primary</el-link>
    <el-link type="success">success</el-link>
    <el-link type="warning">warning</el-link>
    <el-link type="danger">danger</el-link>
    <el-link type="info">info</el-link>
  </div>
</template>
```



![image-20211230184603674](http://img.zyugat.cn/zyuimg/2021-12-30_7a0e46cd0134b.png)

| 属性      | 说明           | 类型               | 可选值                                      | 默认值  |
| :-------- | :------------- | :----------------- | :------------------------------------------ | :------ |
| type      | 类型           | string             | primary / success / warning / danger / info | default |
| underline | 是否下划线     | boolean            | —                                           | true    |
| disabled  | 是否禁用状态   | boolean            | —                                           | false   |
| href      | 原生 href 属性 | string             | —                                           | -       |
| icon      | 图标组件       | string / Component | —                                           | -       |



****



### Scrollbar 滚动条

```html
<el-scrollbar></el-scrollbar>
```



Scrollbar 属性：

| 属性       | 说明                                                         | 类型            | 可选值 | 默认值 |
| :--------- | :----------------------------------------------------------- | :-------------- | :----- | :----- |
| height     | 滚动条高度                                                   | string / number | —      | —      |
| max-height | 滚动条最大高度                                               | string / number | —      | —      |
| native     | 是否使用原生滚动条样式                                       | boolean         | —      | false  |
| wrap-style | 包裹容器的自定义样式                                         | string          | —      | —      |
| wrap-class | 包裹容器的自定义类名                                         | string          | —      | —      |
| view-style | 视图的自定义样式                                             | string          | —      | —      |
| view-class | 视图的自定义类名                                             | string          | —      | —      |
| noresize   | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | boolean         | —      | false  |
| tag        | 视图的元素标签                                               | string          | —      | div    |
| always     | 滚动条总是显示                                               | boolean         | —      | false  |
| min-size   | 滚动条最小尺寸                                               | number          | —      | 20     |

Scrollbar 事件

| 事件名 | 说明             | 参数                               |
| :----- | :--------------- | :--------------------------------- |
| scroll | 滚动时触发的事件 | 滚动距离 { scrollLeft, scrollTop } |

Scrollbar 方法

| 方法名        | 说明                   | 参数                 |
| :------------ | :--------------------- | :------------------- |
| setScrollTop  | 设置滚动条到顶部的距离 | (scrollTop: number)  |
| setScrollLeft | 设置滚动条到左边的距离 | (scrollLeft: number) |
| update        | 手动更新滚动条状态     | —                    |



手动滚动：

通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

```vue
<template>
  <el-scrollbar
    ref="scrollbar"
    height="400px"
    always
    @scroll="scroll"
  >
    <div ref="inner">
      <p
        v-for="item in 20"
        :key="item"
        class="scrollbar-demo-item"
      >
        {{ item }}
      </p>
    </div>
  </el-scrollbar>

  <el-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  ></el-slider>
</template>

<script lang="ts">
export default {
  data() {
    return {
      max: 0,
      value: 0,
    };
  },
  mounted() {
    this.max = this.$refs.inner.clientHeight - 380;
  },
  methods: {
    inputSlider(value) {
      this.$refs.scrollbar.setScrollTop(value);
    },
    scroll({ scrollTop }) {
      this.value = scrollTop;
    },
    formatTooltip(value) {
      return `${value} px`;
    },
  },
};
</script>
```



****



### Space

给组件之间提供统一的间距。

```html
<el-space></el-space>
```



size：控制间距，可供选择的内建的值有 `mini`, `small`, `medium`, `large`, 分别对应 `4px`, `8px`, `12px`, `16px`. 默认的间距大小为 `small`，也就是 `8px`。

alignment：对齐方式，flex-start、center、flex-ends。上中下



Space 属性

| 属性       | 说明                      | 类型                                      | 可选值                                                       | 默认值     |
| :--------- | :------------------------ | :---------------------------------------- | :----------------------------------------------------------- | :--------- |
| alignment  | 对齐的方式                | string                                    | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | 'center'   |
| class      | 类名                      | string / Array<Object \| String> / Object | -                                                            | -          |
| direction  | 排列的方向                | string                                    | vertical/horizontal                                          | horizontal |
| prefix-cls | 给 space-items 的类名前缀 | string                                    | el-space                                                     | -          |
| style      | 额外样式                  | string / Array<Object \| String> / Object | -                                                            | -          |
| spacer     | 间隔符                    | string / number / VNode                   | -                                                            | -          |
| size       | 间隔大小                  | string / number / [number, number]        | -                                                            | 'small'    |
| wrap       | 设置是否自动折行          | boolean                                   | true / false                                                 | false      |
| fill       | 子元素是否填充父容器      | boolean                                   | true / false                                                 | false      |
| fill-ratio | 填充父容器的比例          | number                                    | -                                                            | 100        |



****



## 表单

仅对常用的做展示，详细自行查询文档

https://element-plus.gitee.io/zh-CN/component/cascader.html



- 1、常用表单元素

  - Radio 单选
  - Checkbox 多选
  - Input 输入框
  - InputNumber 计数器
  - Switch 开关
  - Slider 滑块，通过拖动滑块在一个固定区间内进行选择

- 2、选择器

  - Select 选择器
  - Cascader 级联选择器
    - <img src="http://img.zyugat.cn/zyuimg/2022-05-07_430fdddf721a4.png" alt="image-20220507144729396" style="zoom:80%;" />

  

- 3、选择器

  - TimePicker 时间选择器
  - DatePicker 日期选择器
  - DateTimePicker 日期时间选择器
  - ColorPicker 颜色选择器

- 其他

  - Upload 上传
  - Rate 评分
  - Transfer 穿梭框
    - <img src="http://img.zyugat.cn/zyuimg/2022-05-07_9821406e53d74.png" alt="image-20220507145015649" style="zoom:80%;" />

  



### 基础表单-Form

- BASE

  - 1、在每个 `form` 组件中，需要一个 `from-item` 字段作为**输入项的容器**。（理解为一个 label）

  - 2、当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 `<el-form>` 标签上添加 `@submit.native.prevent`。

  - 3、数字类型验证

    - 只能输入数字，输入其他则自动删除。在 `v-model` 处加上 `.number` 的修饰符

  - 4、控制整个表单的展示方式

    - size：大小（large、default、small

    - labelPosition：标签的位置（Left、Right、Top

    - ```HTML
      <el-form  
               :label-position="labelPosition" 
               :size="size"></el-form>
      ```

    - 

- 表示方法

  - 1、变成行内元素：设置 `inline` 属性

    - ```html
      <el-form :inline="true"></el-form>
      ```

  - 2、标签对其方式：设置 `label-position` 属性，可选值为 `top`、`left`、`Right`。

    - **`文字靠左对齐`**
    - <img src="http://img.zyugat.cn/zyuimg/2022-05-07_bbb38685da51a.png" alt="image-20220507145416172" style="zoom:80%;" />

  - 

例如一个简单的输入名字功能

```vue
<template>
  <!-- 表单 -->
  <el-form
    ref="formRef"
    :model="form"
    label-width="120px"
  >
    <!-- form-item 输入项的容器 -->
    <el-form-item label="Activity name">
      <!-- 输入框 -->
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <!-- form-item 输入项的容器 -->
    <el-form-item>
      <!-- 提交按钮 -->
      <el-button
        type="primary"
        @click="onSubmit"
      >Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>

</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
});

const onSubmit = () => {
  console.log("submit!", form.name);
};
</script>
```

![image-20211231172400885](http://img.zyugat.cn/zyuimg/2021-12-31_a8027602a0ac7.png)







top 意思是一个标签为一行。left 是指文字居左对齐，right 相反。

![image-20211231172720131](http://img.zyugat.cn/zyuimg/2021-12-31_833cbcc8a39b7.png)



****



### 表单的其他操作

- 1、表单校验
- 2、动态增减表单项
  - 字面意思，这里就不展示代码了，具体看文档

验证用户的输入是否符合规范。

通过 `rules` 属性传入约定的验证规则，并将 `form-Item` 的 `prop` 属性设置为需 form 绑定值对应的字段名即可。 参考 [async-validator](https://github.com/yiminghe/async-validator)。

在 rules 中编写规则。

```vue
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    :size="formSize"
  >
    <el-form-item
      label="Activity name"
      prop="name"
    >
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

const formSize = ref("");

const ruleFormRef = ref<InstanceType<typeof ElForm>>();
const ruleForm = reactive({
  name: "",
});

const rules = reactive({
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
});
</script>
```

![image-20211231175940442](http://img.zyugat.cn/zyuimg/2021-12-31_49028d501f66e.png)



## Nav 导航

https://element-plus.gitee.io/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7

- 1、导航
  - Munu 菜单
  - Dropdown 下拉菜单
  - Tabs 标签页
  - Breadcrumb 面包屑
- 2、小工具
  - Affix 图钉
  - BackTop 返回顶部
  - Page Header 页头
    - ![image-20220507153848086](http://img.zyugat.cn/zyuimg/2022-05-07_46853f6058ee9.png)
  - Setps 步骤条



### Menu 菜单

- 1、设置el-munu元素
  - **设置属性**
  - `mode`：展示方向，水平/垂直。horizontal / vertical
  - `:default-active`：绑定激活菜单的index
  - `@select`：点击菜单时激活的回调
- 2、设置主页 `el-menu-item`
  - `index`：必须要绑定
- 3、设置一级菜单 `el-sub-menu`
  - `template #title`：该元素是设置**菜单名称**
  - `index`：必须要绑定
- 4、设置菜单内容 `el-menu-item`
  - `index`：必须要绑定
- 5、设置二级菜单和设置一级一样

```vue
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <!-- 主页 -->
    <el-menu-item index="1">Processing Center</el-menu-item>
    <!-- 一级标题 -->
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <!-- 二级标题 -->
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <!-- 三级标题 -->
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item
      index="3"
      disabled
    >Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
```

![image-20211231183801833](http://img.zyugat.cn/zyuimg/2021-12-31_0ef6a8acc1387.png)



### Tabs 标签页

- 属性
  - `v-model`：绑定当前活跃的导航（绑的是name
- 事件
  - `tab-click`：点击触发
  - `tab-change`：`activeName` 改变时触发
  - `tab-remove`、`tab-add`、`edit`：移除增加,点击增加或移除时触发
- 风格
  - 卡片
    - `type="card"`
  - 带有边框的卡片
    - `type="border-card"`
  - 标签位置
    -  `tabPosition="left|right|top|bottom"`
  - 自定义标签页内容，看下面例子
    - ![image-20220507153512756](http://img.zyugat.cn/zyuimg/2022-05-07_0e66f9dfbada1.png)
  - 动态增减标签页

```HTML
<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
  <el-tab-pane label="User" name="first">User</el-tab-pane>
  <el-tab-pane label="Config" name="second">Config</el-tab-pane>
  <el-tab-pane label="Role" name="third">Role</el-tab-pane>
  <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
</el-tabs>
```

**自定义标签页内容**

```html
<el-tab-pane>
  <template #label>
    <span class="custom-tabs-label">
      <el-icon><calendar /></el-icon>
      <span>Route</span>
    </span>
  </template>
  Route
</el-tab-pane>
```

![image-20220507153512756](http://img.zyugat.cn/zyuimg/2022-05-07_0e66f9dfbada1.png)





****



### Affix 固钉

固定页面顶部、固钉始终在容器内,超过范围隐藏、固定位置Top或Bottom

```vue
<template>
  <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
</template>

<template>
  <div class="affix-container">
    <el-affix target=".affix-container" :offset="80">
      <el-button type="primary">Target container</el-button>
    </el-affix>
  </div>
</template>

<template>
  <el-affix position="bottom" :offset="20">
    <el-button type="primary">Offset bottom 20px</el-button>
  </el-affix>
</template>
```



属性

| 属性     | 说明                   | 类型   | 可选值       | 默认值 |
| :------- | :--------------------- | :----- | :----------- | :----- |
| offset   | 偏移距离               | number | —            | 0      |
| position | 固钉位置               | string | top / bottom | top    |
| target   | 指定容器（CSS 选择器） | string | —            | —      |
| z-index  | 固钉层级               | number | —            | 100    |

事件

| 事件名 | 说明                     | 回调参数                 |
| :----- | :----------------------- | :----------------------- |
| change | 固钉状态改变时触发的事件 | (value: boolean)         |
| scroll | 滚动时触发的事件         | scroll top 和 fixed 状态 |

方法

| 方法名 | 说明             | 回调参数 |
| :----- | :--------------- | :------- |
| update | 手动更新固钉状态 | —        |



****



### Steps 步骤条

```HTML
<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>

  <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
```



## Feedback 反馈组件

- **`Drawer 抽屉`**
  - 侧边栏！！！！！！！！侧边栏！！！！！！！！侧边栏！！！！！！！！
- 提示
  - 1、Alert 提示
    - ![image-20220507154820141](http://img.zyugat.cn/zyuimg/2022-05-07_07ea013db894e.png)
  - 2、Loading 加载
  - 3、Dialog 对话框
    - **弹出一个对话框，告知用户并承载相关操作。**
  - 4、Notification 通知
    - 浏览器右侧中弹出：![image-20220507155049585](http://img.zyugat.cn/zyuimg/2022-05-07_a025a1c6189f1.png)
  - 5、Tooltip 文字提示
    - 鼠标放上去提示内容，![image-20220507154953113](http://img.zyugat.cn/zyuimg/2022-05-07_978aa602246c0.png)
  - 6、Popover 气泡卡片
    - 与 `Tooltip` 差不多，但他可以点击后持续显示。
- 确认
  - 1、Message 消息提示
    - 点击后，顶部出现一个对话框，3秒后消失
  - 2、MessageBox 弹框
    - 弹窗，用于消息提示、确认消息和提交内容，类似`Alert`
  - 3、Popconfirm 气泡确认框
    - ![image-20220507155318452](http://img.zyugat.cn/zyuimg/2022-05-07_aa2c02d9d01c7.png)





## Data

这里只对部分做一个展示，不说明用法

- 重要
  - Image 图片
  - **Card 卡片**
    - 可用于展示商品之类的
  - Carousel 走马灯
    - 轮播图
  - Table 表格
  - **`Progress 进度条`**
  - Descriptions 描述列表
    - 用于展示账单
    - ![image-20220507154229817](http://img.zyugat.cn/zyuimg/2022-05-07_a0d3632500ae5.png)

- 1、展示用
  - Avatar 头像
  - Tag 标签
  - Badge 徽章，显示消息的
    - ![image-20220507154024498](http://img.zyugat.cn/zyuimg/2022-05-07_498f0ee5d6cfd.png)
  - Calendar 日历
  - Collapse 折叠面板
  - Empty 空状态
    - 空状态时的占位提示。
    - ![image-20220507154255053](http://img.zyugat.cn/zyuimg/2022-05-07_8547dcec35098.png)
  - Skeleton 骨架屏
    - 等待加载，比Loading好
    - ![image-20220507154533038](http://img.zyugat.cn/zyuimg/2022-05-07_65e7156ca751a.png)
- 3、杂七杂八
  - Infinite Scroll 无限滚动
    - 自动加载底部内容
  - - 
  - Pagination 分页
    - ![image-20220507154407387](http://img.zyugat.cn/zyuimg/2022-05-07_f79936e185e56.png)
  - Result 结果
    - <img src="http://img.zyugat.cn/zyuimg/2022-05-07_964514c8aa07b.png" alt="image-20220507154454198" style="zoom:67%;" />
  - Timeline 时间线
    - ![image-20220507154642951](http://img.zyugat.cn/zyuimg/2022-05-07_b60459fb5ee1c.png)
  - Tree 树形控件
    - ![image-20220507154657597](http://img.zyugat.cn/zyuimg/2022-05-07_1fda01ddf5eab.png)
  - TreeSelect 树形选择
  - 
    - ![image-20220507154709859](http://img.zyugat.cn/zyuimg/2022-05-07_3672c1651806d.png)
