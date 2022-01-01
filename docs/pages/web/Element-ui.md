



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
- `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
- `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
- `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
- `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
- `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
- `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
- `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
- `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
- `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
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



### Link

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



### Scrollbar

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



### 基础表单

在每个 `form` 组件中，需要一个 `from-item` 字段作为**输入项的容器**。（理解为一个 label）

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



行内表单：一行显示，`inline` 属性为 `true`

```html
<el-form :inline="true" :model="formInline"></el-form>
```



标签对其方式：设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`Right`。

top 意思是一个标签为一行。left 是指文字居左对齐，right 相反。

![image-20211231172720131](http://img.zyugat.cn/zyuimg/2021-12-31_833cbcc8a39b7.png)



****



### 表单校验

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



例子：数字类型验证。`v-model` 处加上 `.number` 的修饰符，将绑定值转化为数字类型。因此无法输入其他字符只能输入数字。

```vue
<el-form-item
  label="age"
  prop="age"
  :rules="[
    { required: true, message: 'age is required' },
    { type: 'number', message: 'age must be a number' },
  ]"
>
  <el-input
    v-model.number="numberValidateForm.age"
    type="text"
    autocomplete="off"
  ></el-input>
</el-form-item>
```



## Nav 导航



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



### Menu 菜单

属性和方法过多这里就不作搬运，自行查看文档。

https://element-plus.gitee.io/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7



主页：`el-menu-item`

标题名称：`template #title`，如果**存在二级标题**则需要该标签

一级标题：`el-sub-menu`，通过属性 `index` 标识。

菜单：`el-menu-item`

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

