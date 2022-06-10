# VueNote

`<script src="https://unpkg.com/vue@next"></script>`

## base

- **指令**

- `v-text`
  - 向其所在的节点中渲染文本内容、**替换掉节点中的内容**，意思是不管div中有什么内容，直接覆盖。
- `v-html`
  - 向指定节点中渲染包含html结构的内容
- `v-once`
  - 初次渲染后，变成静态内容。
- `v-pre`
  - 跳过其所在节点的编译过程，用于**加快编译**(没有使用指令语法、没有使用插值语法的节点)

```html
<!-- str:'<h3>你好啊！</h3>' -->
<div v-text="str"></div>	<!-- <h3>你好啊！</h3> -->
<div v-html="str"></div>	<!-- 你好啊！ --> <!-- h2标签大小的你好啊 -->
<h2 v-once>初始化的a值是:{{a}}</h2>
```

![image-20211116172030660](http://img.zyugat.cn/zyuimg/2021-11-16_9bcfbf1989f56.png)



### 数据绑定

- `v-bind`
  - 简写：`:`
  - 一般绑定属性值、对象和数组。



- 可以使用 JS 表达式

```html
<div :id="`list-${id}`"></div>
```





- 绑定class样式时
  - 一般用于动态控制 **样式**
  - 动态参数：`<a :[attributeName]="url">`



```html
<h2 :class="active">Hello World</h2> 
<h2 :class="['active', 'line']">Hello World</h2> 
<!-- 通过控制 yesActive 选择是否显示样式 -->
<h2 :class="{active: yesActive}">{{message}}</h2>
```

![image-20211116160801284](https://img-blog.csdnimg.cn/img_convert/0fdad588eebbc5affe10e1f7d52feda9.png)

- style样式


对象绑定：**一组动态样式**。`:style="{fontSize: size + 'px'}"`，size是动态值。

数组绑定：**多组样式对象**。

```html
<div id="app">
  <h2 :style="[myColor, mySize]">Hello</h2>
	<div :style="{ fontSize: size + 'px'}">我的大小为30</div>
</div>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      size: 30,
      myColor: {
        color: 'red'
      },
      mySize: {
        fontSize: '30px'
      }
    }
  })
</script>
```

![image-20211116161117010](https://img-blog.csdnimg.cn/img_convert/6a0c174882ec61ae34911c7a685263e1.png)

- 双向绑定：`v-model`

  - 双向绑定，绑定了value和input

  - 传递了 `modelValue` prop 并接收抛出的 `update:modelValue` 事件：

  - 下面两行代码是等价的，功能都是一样的
  
  - ```HTML
    <input type="text" :value="message" @input="valueChange">
    <input type="text" v-model="message">
    ```

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```



单选框如何判断被选中：

```html
<input type="radio" v-model="pick" :value="a" />
// 当选中时
vm.pick === vm.a
```



修饰符

```
V-model.lazy，修饰符，当敲回车或者失去焦点的时候才绑定
V-model.number，一般返回的是字符，强转为数字
V.model.trim，过滤掉头尾的空格
```




****



### 事件处理

- 事件监听：`v-on`

  - 简写：`@`

  - `$event`：是一个事件，可以获取很多参数。


```html
<button @click="btn2Click(message, $event)">按钮3</button>
```

```js
btn2Click(message, event) {
  console.log('按钮2被点击了', message, event);
}
```



**修饰符**

修饰符的使用

```html
  <div id="app">
    <!--1. .stop修饰符的使用-->
    <div @click="divClick">
      aaaaaaa
      <button @click.stop="btnClick">按钮</button>
    </div>

    <!--2. .prevent修饰符的使用-->
    <br>
    <form action="baidu">
      <input type="submit" value="提交" @click.prevent="submitClick">
    </form>

    <!--3. .监听某个键盘的键帽-->
    <input type="text" @keyup.enter="keyUp">

    <!--4. .once修饰符的使用-->
    <button @click.once="btn2Click">按钮2</button>
  </div>
```

```
.stop - 阻止事件冒泡。
.prevent - 阻止默认事件。
.once - 只触发一次回调。
.capture - 使用事件的捕获模式。
.self - 只有event.target是当前操作的元素时才触发事件。
.passive - 事件的默认行为立即执行，无需等待事件回调执行完毕。

.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。
```

键盘按键

```
keyup.*
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
-----------系统修饰键
.ctrl
.alt
.shift
.meta
```



****



### 条件与列表渲染

- `v-if、v-else-if、v-else`
  - 用于切换频率较低的场景、不展示的DOM元素**直接被移除**。

- `v-show`
  - 切换频率较高的场景、不展示的DOM元素**使用样式隐藏掉**。

![image-20211116165601947](https://img-blog.csdnimg.cn/img_convert/5a5cb2044047e60281daba453662d6fe.png)



Vue 包装了一批侦听数组的变更方法，以至于这些方法可以触发视图更新。被包装的变更方法如下：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`



- `v-for`
- 当遍历数组时--->**值、索引**
- 当遍历对象时->**值、键**——————**值、键、索引**
- 当遍历字符串时--->**值、索引**

```html
<li v-for="value in arr"></li>
<li v-for="(value, index) in arr"></li>

<li v-for="(value, key) in object"></li>
<li v-for="(value, key, index) in object"></li>

<li v-for="(char, index) in string"></li>
```

![image-20211116165554876](https://img-blog.csdnimg.cn/img_convert/1d478d66eebfd2065ef910411909a225.png)



- 使用**替换数组**的方式（filter、concat、slice）的好处！
  - 它们不会变更原始数组，而**总是返回一个新数组**。
  - 那么Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以**用一个含有相同元素的数组**去替换原来的数组是非常高效的操作。

**显示过滤/排序后的结果**：通过使用计算属性自动过滤数组。如果是二维数组，那么可以使用嵌套for循环。

```js
<li v-for="n in evenNumbers" :key="n">{{ n }}</li>
computed: {
  evenNumbers() {
    return this.numbers.filter(number => number % 2 === 0)
  }
}
```



****



### Key的作用

> 1. key的作用
>
> a。找到相同的key，若内容没变则复用，若内容变了则生成新真实DOM。
>
> b。若找不到相同的key，则生成新真实DOM

- 1. **虚拟DOM中key的作用：**

  - 1）简单的说：**key是虚拟DOM对象的标识**, 在更新显示时key起着极其重要的作用。
  - 2）详细的说：当状态中的数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
    -  a. 旧虚拟DOM中找到了与新虚拟DOM**相同的key**：
       - (1).若虚拟DOM中**内容没变**, 直接使用之前的真实DOM
       - (2).若虚拟DOM中**内容变了**, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
    -  b. **旧虚拟DOM中未找到与新虚拟DOM相同的key**：根据数据创建新的真实DOM，随后渲染到到页面

> 2. index作为Key的问题
>
> 若对数据进行：逆序添加、逆序删除等破坏顺序操作会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
>
> 含输入类DOM会产生错误DOM更新 ==> 界面有问题。

- 2. **用index作为key可能会引发的问题：**

  - 1）若对数据进行：逆序添加、逆序删除等破坏顺序操作，会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
  - 2）如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。
  - 3）注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

- 3. **开发中如何选择key：**
     1. 1）最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
     2. 2）如果确定只是简单的展示数据，用index也是可以的。

  - 实例中，li节点发生改变，但input框复用了，因此导致信息错乱。



****



### Watch

用于监听属性，响应数据的变化，可以进行**异步操作**。

方法名是**属性名**，前一个参数代表 **新值**，后一个参数代表 **旧值**

下列案例中，当 `question` 的值发生改变时，判断是否存在 `?` 问号，如果存在就调用 `getAnswer()`

```js
const watchExampleVM = Vue.createApp({
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          this.answer = response.data.answer
        })
        .catch(error => {
          this.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}).mount('#watch-example')
```



`$watch`

监听有三种情况：

1、顶层名，那就直接用 `''`就可以。

2、嵌套，用箭头函数返回。

3、表达式，和嵌套一样。

```js
// 顶层property 名
this.$watch('a', (newValue, oldValue) => {
  // 做点什么
})

// 用于监视单个嵌套property 的函数
this.$watch(
  () => this.c.d,
  (newValue, oldValue) => {
    // 做点什么
  }
)
// 用于监视复杂表达式的函数
this.$watch(
  // 表达式 `this.a + this.b` 每次得出一个不同的结果时
  // 处理函数都会被调用。
  // 这就像监听一个未被定义的计算属性
  () => this.a + this.b,
  (newValue, oldValue) => {
    // 做点什么
  }
)
```

**如果是监听对象和数组**，仅仅修改其内容则不会触发监听，因为地址没有发生改变。



`deep:true`：如果想监听内部值的变化，那么就需要选择参数了。

```js
vm.$watch('someObject', callback, {
  deep: true
})
```



`immediate:true`：Watch在最初绑定时会被调用，如果想开始就调用则加上该参数。

在回调内部调用取消监听函数，需检查其函数的可用性

```js
let unwatch = null

unwatch = vm.$watch(
  'value',
  function() {
    doSomething()
    if (unwatch) {
      unwatch()
    }
  },
  { immediate: true }
)
```



`unwatch()`：注销监听，一般在离开页面时调用



## 生命周期

![img](https://staging-cn.vuejs.org/assets/lifecycle.16e4c08e.png)

`beforeCreate`：实例初始化后

`created`：实例创建完成后

`beforeMount`：挂载前

`mounted`：挂载后

`beforeUpdate`：数据更新前

`updated`：更新完数据时

`beforeUnmount`：卸载组件实例前

`unmounted`：卸载完组件实例后调用



## Component

> - props：对象，包含组件外部传递过来的数据，以及内部声明接收的属性。
> - context：上下文对象
>   - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
>   - slots: 收到的插槽内容, 相当于 ```this.$slots```。
>   - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。

- **注册组件的三步骤**

  - 第一步：Vue.createApp()方法**创建Vue应用**
  - 第二步：app.component()方法**注册组件**
  - 第三步：**挂载**
- 第四步：使用
- **全局组件：在不同实例中可以使用**

data函数：让每一个组件都**返回一个新的对象**，如果用同一个对象，那么他们数据**会互相影响**，意思就是会共享数据。因此就需要`return{}`

```js
// 第一步、创建Vue应用
const app = Vue.createApp({})
// 第二步、定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})
// 第三步、挂载
app.mount('#app')
```

```html
<button-counter></button-counter>
```



****



### 数据传递

有三种方式：props、emit、ref

children

- **父传子**→`props`
- props两种实现：一种是以**字符串数组**，一种是以**对象**实现。

1、父组件传入`:chello="hello"`属性

2、子组件声明接收`props: ['chello']`

```html
<div id="app">
  <cpn :chello="hello"></cpn>
</div>
<!--<template id="cpn">-->
<!--  <h2>{{ chello }}</h2>-->
<!--</template>-->
<script>
  const App = {
    data() {
      return {
        hello: 'Hello',
      }
    }
  }
  const app = Vue.createApp(App)
  app.component('cpn', {
    // template: '#cpn',
    template: `
      <h2>{{ chello }}</h2>
    `,
    // 创建props
    props: ['chello'],
  })
  app.mount('#app')
</script>
```

- 对象绑定：**类型、默认值、必传值**
  - **类型是对象或者数组时, 默认值必须是一个函数**

```js
props: {
  // 1.类型限制
  // cmessage: Array,
  // chello: String,
  // 2.提供一些默认值, 以及必传值
  chello: {
    type: String,
    default: 'aaaaaaaa',
    required: true
  },
  // 类型是对象或者数组时, 默认值必须是一个函数
  cmessage: {
    type: Array,
    default () {
      return []
    }
  }
},
```



****



> **驼峰问题**：HTML标签不能使用驼峰，必须在大写前面加上`-`

- **子传父→**`$emit`

第一步：子组件创建事件。第二步：按钮监听子组件事件。最后一步：获取信息。

**更多扩展看下面->自定义事件与v-model**


```html
<div id="app">
  <cpn2 @item-click="cpn2Click"></cpn2>
</div>
```

```javascript
// 子组件
methods: {
  btnClick(event) {
    // 第一步：发射自定义事件
    this.$emit('item-click', event)
  },
},
// 父组件
methods: {
  // 第三步：将按钮信息发送到控制台
  cpn2Click(item) {
    console.log('cpnClick', item)
  },
},
```



****



- **父访问子→**`$refs`
  - 给组件绑定一个ID，然后使用`this.$refs.ID`调用。

```html
<cpn ref="test"></cpn>
```

```javascript
btnClick() {
  // 2.$refs => 对象类型
  console.log(this.$refs.test.name);
}
```



****



### v-model参数

> 作用：双向绑定 **父子组件**的值，好处是节约空间不用多写一个方法
>
> 补充下 V-model的修饰符：`.trim`，`.number` 和 `.lazy`。

- 父组件
  - 用v-model绑定一个 `value`
- 子组件
  - 声明事件：`props`、`emits`
  - 绑定`@input`事件，前面的`update:`是固定的。

- 当然你可选择在子组件上用**计算属性实现**。

```html
<div id="app">
  <!-- 第一步 -->
  <user-name v-model:my-name="myName1"></user-name>
  <p>myName: {{ myName1 }}</p>
</div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      myName1: '123',
    }
  },
})
app.component('user-name', {
  // 第二步
  props: ['myName'],
  // 声明自定义事件
  emits: ['update:myName'],
  // 第三步
  template: `
  <input
    type="text"
    :value="myName"
    @input="$emit('update:myName', $event.target.value)">
`,
})
app.mount('#app')
```

> 计算属性

```html
<!-- CustomInput.vue -->
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <input v-model="value" />
</template>
```



****



### 动态异步组件

> 在动态组件上使用`keep-alive`可以使**组件实例被缓存**。

- 说明
  - 1、通过使用 `component` 组件的 `is` 属性动态控制组件
  - 2、`tabs` 数组保存组件名称，`currentTab` 保存当前组件名称
  - 3、点击按钮时修改 `currentTab` 属性，触发计算属性`currentTabComponent`从而切换组件。

```html
<div id="dynamic-component-demo" class="demo">
  <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
  >
    {{ tab }}
  </button>

  <!-- Inactive components will be cached! -->
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</div>
<script>
  const app = Vue.createApp({
    data() {
      return {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive'],
      }
    },
    computed: {
      currentTabComponent() {
        return 'tab-' + this.currentTab.toLowerCase()
      },
    },
  })

  app.component('tab-home', {
    template: `<div class="demo-tab">Home component</div>`,
  })
  app.component('tab-posts', {
    template: `<div class="demo-tab">Posts component</div>`,
  })
  app.component('tab-archive', {
    template: `<div class="demo-tab">Archive component</div>`,
  })

  app.mount('#dynamic-component-demo')
</script>
```



**异步**

`defineAsyncComponent()`，返回值可以是一个Promise的工厂函数。

```js
const { createApp, defineAsyncComponent } = Vue

const app = createApp({})

const AsyncComp = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        template: '<div>I am async!</div>'
      })
    })
)
const AsyncComp = defineAsyncComponent(() =>
  import('./components/AsyncComponent.vue')
)


app.component('async-example', AsyncComp)
```



****



### Slot插槽

- 插槽：`slot`

**具名插槽**

- 缩写：下面两个都是等效的

```html
<template #header>
<template slot="header">
```



- 子组件：通过使用 `name` 属性命名
- 父组件：通过使用 `slot` 属性插入对应插槽

```html
<div id="app">
  <cpn3><span slot="center">标题  </span></cpn3>
  <cpn3><span slot="left">中间  </span></cpn3>
</div>
<!-- 模板 -->>
<template id="cpn3">
  <div>
    <slot name="left"><span>左边</span></slot>
    <slot name="center"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
  </div>
</template>
```



**作用域插槽**

总结：可以在父组件中使用子组件的数据。

1、`v-slot:default=""`或`v-slot=""`，不带参数的 `v-slot` 被假定对应默认插槽。**默认插槽不能和具名插槽混用**

- 子组件
  - 遍历 items
  - 在插槽中绑定：`item`、`index`、`anotherAttribute`。绑定完毕后父组件就可以直接使用了。

```html
<!-- 子组件 -->
template: `
  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item" :index="index" :another-attribute="anotherAttribute"></slot>
    </li>
  </ul>
`
```

```html
<cpnslot>
  <template v-slot:default="slotProps">
    <span>{{ slotProps.item }}</span>
    <span>-----{{ slotProps.anotherAttribute }}</span>
  </template>
</cpnslot>
```

![image-20211116181117133](http://img.zyugat.cn/zyuimg/2021-11-16_981fdcff59028.png)



因为作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里，所以可以在里面使用JS表达式，如重命名：

将item重命名为todo

```html
<cpnslot v-slot="{ item: todo }">
```



**动态插槽名**

```html
<template v-slot:[dynamicSlotName]>
```



实例

- 父组件
  - 第4行：参考上面作用于插槽，`{...}`相当于解构赋值
  - 剩下就是去实现数据了
- 子组件
  - js 没什么好说的
  - 23行：当获取到数据的时候，就遍历
  - 24行：直接使用 `v-bind` 绑定数据，**这样父组件就能找得到数据了**。

```HTML
<!-- 父 -->
<template>
  <FancyList :api-url="url" :per-page="10">
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>
</template>
```

```html
<!-- 子 -->
<script setup>
import { ref } from 'vue'

const props = defineProps(['api-url', 'per-page'])

const items = ref([])

// mock remote data fetching
setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
	  { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
  ]
}, 1000)
</script>

<template>
  <ul>
    <li v-if="!items.length">
      Loading...
    </li>
    <li v-for="item in items">
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>
```

![image-20220610134840090](http://img.zyugat.cn/zyuimg/2022-06-10_040e3494cb678.png)



****



### Provide / Inject

1、祖与组件间通信。

父组件使用 `provide` 选项来发送数据

后代组件使用 `inject` 选项来获取数据

```js
app.component('grandfather', {
  provide: {
    user: 'John Doe',
  },
  template: `
    <father />`,
  components: {
    'father': {
      template: `
        <son />`,
      components: {
        'son': {
          inject: ['user'],
          template: `son：{{user}}`,
        },
      },
    },
  },
})
```

![image-20211116221339750](http://img.zyugat.cn/zyuimg/2021-11-16_4d24f318f700f.png)

2、如果想在 `provide` 中使用组件的实例 `property`属性，则需要将 `provide` 转换为返回对象的函数。

```js
provide() {
    return {
      user: this.num,
    }
  },
```

3、 `provide/inject` 的绑定不是响应式的，如果想修改todos的长度，则需要绑定组合式API `computed` 属性。

```js
provide() {
  return {
    user: Vue.computed(() => this.num),
  }
},
```



### Attribute 继承

我直接上结论，将 **属性** 或 **V-on** 事件监听器传递给组件，就像 class style id 这些。



1、禁用属性基础

- `inheritAttrs: false`
- 禁用继承后，想给子组件**某一个子元素**使用继承，可以使用：`v-bind="$attrs"`

```html
<!-- 如果不关闭则会变成这样, 根元素继承所有属性 -->
<div mydata="test" class="my-class" id="custom-layout">
<h2>father</h2>
</div>

<!-- 当关闭后,给h2标签绑定 $attrs -->
<h2 v-bind="$attrs">father</h2>
<div>
<h2 mydata="test" class="my-class" id="custom-layout">father</h2>
</div>
```



- 问题1、`$attrs`包含什么？包含所有父作用域的绑定。（包含父作用域中不作为组件 props 或自定义事件的 attribute 绑定和事件）



- 问题2、当存在父组件传递 Props 后
  - 当组件**没有接收** Props，那么Props 会存在于 `$attrs` 中。
  - 当组件**接收** Props，那么 Props 不会存在于 `$attrs` 中，而存在于 `$props`中。



- 问题3、如果我传递的属性中存在 **方法的调用**
  - 例如我给父组件绑定了点击事件 `@click="show"`，虽然没有在attrs中显示，**但是他是存在的。**
  - 例如：下面案例中，我点击 `father` `child` `text`，是会触发控制台输出的。然而点击`$attrs`、`$props`是不会有反应的，因为我没有给他们绑定  `v-bind="$attrs"`。

```js
app.component('grandfather', {
  // inheritAttrs: false,
  data() {
    return {
      test: 'test',
    }
  },
  methods: {
    show() {
      console.log('1111')
    },
  },
  template: `
    <div>
    <h2>grandfather</h2>
    <father :myData="test" class="my-class" id="custom-layout"
            @click="show"></father>
    </div>
  `,
  // father组件
  components: {
    father: {
      inheritAttrs: false,
      template: `
        <div>
        <h2 v-bind="$attrs">father</h2>
        <p>$attrs: {{ $attrs }}</p>
        <p>$props：{{ $props }}</p>

        <child v-bind="$attrs"></child>
        </div>
      `,
      // child组件
      components: {
        child: {
          props: ['myData'],
          template: `
            <div>
            <h2>child</h2>
            <p>{{ myData }}</p>
            </div>
          `,
        },
      },
    },
  },
})
```

![image-20211113142923778](http://img.zyugat.cn/zyuimg/2021-11-13_6af9a18484f1f.png)



## 总结与补充

1、M：模型(Model) ：对应 data 中的数据
2、V：视图(View) ：模板
3、VM：视图模型(ViewModel) ： Vue 实例对象  



```html
<div id="app"></div>
<script>
const App = {}
Vue.createApp(App).mount('#app')
</script>
```



1、应用API：`component`注册组件、`directive`生命周期、`mount`挂载

2、Data选项：`data、props、computed、methods、watch、emits、expose`

```js
// expose
export default {
  // increment 将被暴露，
  // 但 count 只能被内部访问
  expose: ['increment'],

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  }
}
```

3、在定义 `methods` 时应避免使用箭头函数，因为这会阻止 Vue 绑定恰当的 `this` 指向。

4、`computed(){}`计算属性，return，计算属性与方法的不同点在与，计算属性**基于响应依赖关系缓存**，如值发生改变那才会重新求值。



`$forceUpdate`：强制更新



### 实例 property

`$data`：正在监听的数据对象

`$props`：当前组件接收到的props对象

`$el`：正在使用的根 DOM 元素

`$options`：用于当前组件实例的初始化选项。当你需要在选项中包含自定义 property 时会有用处

`$parent`：父实例

`$root`：根组件实例

`$slots`：用来以编程方式访问通过**插槽分发**的内容。

```js
<template v-slot:default>
h('header', this.$slots.header()),
```

`$refs`

`$attrs`：包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。**调用目标组件绑定$attrs，可直接获取根组件所传递参数**，详细参考上面->Attribute 继承



### 防抖和节流

 [Lodash](https://lodash.com/)

第一种方法：直接调用 Lodash 的防抖函数

```js
Vue.createApp({
  methods: {
    // 用 Lodash 的防抖函数
    click: _.debounce(function() {
      // ... 响应点击 ...
    }, 500)
  }
}).mount('#app')
```

有一个缺点，它们都共享相同的防抖函数。如果想组件实例彼此独立可以使用 `created` 生命周期。

```js
app.component('save-button', {
  created() {
    // 用 Lodash 的防抖函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 响应点击 ...
    }
  },
  template: `
    <button @click="debouncedClick">
      Save
    </button>
  `
})
```



### 过度动画

**按钮动画效果**

```css
.button {
  background: #1b8f5a;
  /* 应用于初始状态，因此此转换将应用于返回状态 */
  transition: background 0.25s ease-in;
}

.button:hover {
  background: #3eaf7c;
  /* 应用于悬停状态，因此在触发悬停时将应用此过渡 */
  transition: background 0.35s ease-out;
}
```



`<transition>`组件

> 六种class切换：进度过度的**开始生效结束**，离开过度的**开始生效结束**。

![Transition Diagram](https://v3.cn.vuejs.org/images/transitions.svg)

- 须知
  - `in-out`： 新元素先进行进入过渡，完成之后当前元素过渡离开。
  - `out-in`：当前元素先进行离开过渡，完成之后新元素过渡进入。

- 我这里直接上总结
  - 下面两个是必须要设置的，设置动画的过程，例如：`属性、持续时间、运动曲线`，需用`transition`或`animation`
  - `v-enter-active`：进入过渡生效时的状态。
  - `v-leave-active`：离开过渡生效时的状态。
- 接下来就是**定义动作**
  - `v-leave-from`：离开过度，原地
  - `v-leave-to`：离开过渡，目的地
  - 
  - `v-enter-from`：进入过渡，原地
  - `v-enter-to`：进入过度，目的地
- 有点懵？没事看下面实例
  - 我们拿案例1过来说明，我们希望文字向**右移动消失**
  - ![动画](http://img.zyugat.cn/zyuimg/2022-05-06_31574d9f0e57d.gif)
  - 1、当点击按钮触发，离开过度，`v-leave-from/to`
    - `from`：我们没有设置。故动画位置是`0`，原地不动
    - `to`：`translateX(20px)`目的地是右移20像素。此时动画位置是`20`
  - 2、当消失以后，我们在点一次，文字就会出现，`v-enter-from/to`
    - `from`：刚刚动画位置是`20`，我们希望能从20的位置上出现。
    - `to`：我们需要他归位，故无需设置。
- 实例2
  - ![动画2](http://img.zyugat.cn/zyuimg/2022-05-06_fc3938666eff4.gif)
- 钩子
  - ![动画](http://img.zyugat.cn/zyuimg/2022-05-06_2b385b9df4df3.gif)

- 左右切换
  - ![动画](http://img.zyugat.cn/zyuimg/2022-05-06_b821fe01f54fb.gif)




如果不带 `name` ，那么会使用 `v-`作为默认前缀。

显示控制过度持续时间：`:duration="1000"`，声明钩子，在 **`enter` 和 `leave` 钩中必须使用 `done` 进行回调**。

```html
<!-- 设置持续时间 -->
<transition :duration="1000">...</transition>
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false"
>
  <!-- ... -->
</transition>
```

```js
methods: {
  beforeEnter(el) {
		alert('beforeEnter 进入过渡状态 开始 前')
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter(el, done) {
    alert('enter 进入过渡状态 开始')
    // 方法1： 这里不调用，但参数done必须传，不传或调用done的话由于会立即删除元素导致动画不执行
    // 过渡动画会执行，且style 里  display 不为none，不隐藏
    // done();
    // 方法2:
    // setTimeout(done,5000)
    // 方法3:
    //   el.addEventListener('transitionend', function () {
    //     done()
    //   })
    // },
  },
  afterEnter(el) {
    alert('afterEnter 进入过渡状态 结束')
  },
  enterCancelled(el) {
    alert('enterCancelled 进入过渡状态 被打断')
  },

  // --------
  // 离开时
  // --------

  beforeLeave(el) {
    alert('beforeLeave 离开过渡状态 开始 前')
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave(el, done) {
    alert('leave 离开过渡状态 开始')
    done()
  },
  afterLeave(el) {
    alert('afterLeave 离开过渡状态 结束')
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled(el) {
    alert('leaveCancelled 离开过渡状态 被打断')
  }
}
```





案例1,设置进入和离开动画

- 进入动画则是使用 ease-out。
- `enter-from` 和 `leave-to` ：之所以写在一起，是因为需要**离开和进入方向的相同**

```html
<button @click="show = !show">Toggle render</button>

<transition name="slide-fade">
  <p v-if="show">hello</p>
</transition>
```

```css
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
```

![动画](http://img.zyugat.cn/zyuimg/2022-05-06_31574d9f0e57d.gif)

案例2,设置进入和离开动画

- `reverse`：反向播放动画
- `bounce-in {}`：
  - 进入动画时：`scale(0)`，不显示
  - 进入动画中：`scale(1.25)`，放大1.25倍
  - 结束动画：`scale(1)`，恢复原样

```html
<button @click="show = !show">Toggle show</button>
<transition name="bounce">
  <p v-if="show">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</transition>
```

```css
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
```

![动画2](http://img.zyugat.cn/zyuimg/2022-05-06_fc3938666eff4.gif)

**组件的过度**

使用动态组件：`:is`

```html
<input v-model="view" type="radio" value="aView" id="a" /><label for="a"
  >A</label
>
<input v-model="view" type="radio" value="bView" id="b" /><label for="b"
  >B</label
>
<transition name="component-fade" mode="out-in">
  <component :is="view"></component>
</transition>
```

```css
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
```



### 例-过渡动画钩子流程

![动画](http://img.zyugat.cn/zyuimg/2022-05-06_2b385b9df4df3.gif)

```html
<button @click="flag = !flag">显示/隐藏</button><br />
<transition
  name="fade"
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
>
  <div v-show="flag" class="mybtn"></div>
</transition>
```

```ts
methods: {
  beforeEnter() {
    alert('beforeEnter 进入过渡状态 开始 前')
  },
  enter(el: any) {
    alert('enter 进入过渡状态 开始')
    setTimeout(() => {
      el.style.backgroundColor = 'green'
    }, 1000)
  },
  afterEnter() {
    alert('afterEnter 进入过渡状态 结束')
  },
  enterCancelled() {
    alert('enterCancelled 进入过渡状态 被打断')
  },

  beforeLeave() {
    alert('beforeLeave 离开过渡状态 开始 前')
  },
  leave(el: any) {
    alert('leave 离开过渡状态 开始')
    el.style.backgroundColor = 'red'
  },
  afterLeave() {
    alert('afterLeave 离开过渡状态 结束')
  },
  leaveCancelled() {
    alert('leaveCancelled 离开过渡状态 被打断')
  },
},
```

```css
.mybtn {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: translateX(20px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(20px);
}
```



### 例-左右切换组件

![动画](http://img.zyugat.cn/zyuimg/2022-05-06_b821fe01f54fb.gif)

```html
<h2>TRANSITION 5</h2>
<span>左右切换：</span>
<input
  v-model="view2"
  type="radio"
  value="aView"
  id="a"
  @click="view2Toggle"
/><label for="a2">A</label>
<input
  v-model="view2"
  type="radio"
  value="bView"
  id="b"
  @click="view2Toggle"
/><label for="b2">B</label>
<transition :name="transitionName" mode="out-in">
  <component :is="view2"></component>
</transition>
```

```ts
import { defineComponent } from 'vue'
import aView from './aView.vue'
import bView from './bView.vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      view2: 'aView',
      transitionName: 'transitionRight',
    }
  },
  components: {
    aView,
    bView,
  },
  methods: {
    view2Toggle() {
      this.transitionName =
        this.transitionName === 'transitionRight'
          ? 'transitionLeft'
          : 'transitionRight'
    },
})
```

```css
.transitionLeft-enter-from,
.transitionRight-leave-active {
  /* -webkit-transform: translate(100%, 0); */
  transform: translate(100%, 0);
}
.transitionLeft-leave-active,
.transitionRight-enter-from {
  /* -webkit-transform: translate(-100%, 0); */
  transform: translate(-100%, 0);
}

.transitionLeft-leave-active,
.transitionRight-leave-active,
.transitionLeft-enter-active,
.transitionRight-enter-active {
  transition: all 0.4s ease-out;
}
```



## script setup

### Props Emits

1、用来声明 `props` 和 `emits` 。

```js
import {defineProps,defineEmits} from 'vue'
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
```



2、类型声明 Props

```js
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```



### 导出属性

如果通过模板 ref 或者 `$parent` 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。

因此需要使用 `defineExpose` 明确暴露出去的属性。

```js
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
```



### Slots Attrs

```js
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
```



### Style 特性

- 如果添加 `scoped` attribute 的时候，它的 CSS 只会应用到当前组件的元素上。

1、深度选择器，影响到子组件，可以使用 `:deep()` 这个伪类：

```html
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```



2、插槽选择器，

默认情况下作用域样式不会影响到 `<slot/>` 渲染出来的内容，使用 `:slotted` 伪类以确切地将插槽内容作为选择器的目标：

```HTML
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```





3、全局选择器：使用 `:global` 伪类

```HTML
<style scoped>
:global(.red) {
  color: red;
}
</style>
```



3、状态驱动---动态CSS

```HTML
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```





## 组合式API

将界面中重复的部分连同功能都提取为可重用的代码段

> 1、在 `setup` 中你应该避免使用 `this`，因为它不会找到组件实例。
>
> 2、`setup`在beforeCreate之前执行一次，this是undefined。
>
> 3、`setup` 的调用发生在 `data` property、`computed` property 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取。
>
> 4、**data、methos、computed...）当与setup某个属性重名时，setup优先。**



### 定义数据

总结：

- 普通数据用`ref`。
- 对象用：`reactive`。



1、**ref**

作用: 定义一个响应式的数据

- 语法: ```const xxx = ref(initValue)``` 
  - 如果要操作数据需要：`.value`。读取数据就不需要。
  - ref通过``Object.defineProperty()``的```get```与```set```实现响应式。
  - 也可以定义对象和数组，但会自动通过`reactive`转为Proxy对象。

```js
import { ref } from 'vue'

const counter = ref(0)

console.log(counter) // { value: 0 }
console.log(counter.value) // 0

counter.value++
console.log(counter.value) // 1
```



2、**reactive**

定义一个**对象或数组类型**的响应式数据

`const 代理对象= reactive(源对象)`

内部基于 ES6 的 Proxy 实现，通过`Relfect`操作**源对象**内部的数据。

```js
import {reactive} from 'vue'
const object = reactive({
  id:0,
  name: 'myname'
})

console.log(object)	// {id:0,name:'myname'}
```



### 计算属性

变成了一个函数：`computed(()=>...)`

1、简写

**缺点是 只读，如果与input双向绑定那么就会报错。**

```js
import { ref, computed } from 'vue'
const counter = ref(0)
const twiceTheCounter = computed(() => counter.value * 2)
```

2、完整

这种写法考虑到了修改和读取。

```js
person.fullName = computed({
  get(){
    return person.firstName + '-' + person.lastName
  },
  set(value){
    const nameArr = value.split('-')
    person.firstName = nameArr[0]
    person.lastName = nameArr[1]
  }
})
```



### Watch

监听ref：

```js
import { watch } from 'vue'
watch([attribute],(newValue, oldValue)=>{},{option})
```

监听reactive的getter：

```JS
import { watch } from 'vue'
watch([()=>attribute],(newValue, oldValue)=>{},{option})
```



**watchEffect**

`watch()` 是懒执行的：仅在侦听源变化时，才会执行回调。而`watchEffect`会在创建的时候就执行一次。

监视的回调中用到的个属性。什么意思？下面例子中我们监听的是 `sum.value` 属性。

```js
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
})
```

实例

- 立即执行，自动跟踪`url.value`，当发送变化的时候就执行回调。

```js
watchEffect(async () => {
  const response = await fetch(url.value)
  data.value = await response.json()
})
```



如果想在侦听器回调中能访问被 Vue 更新**之后**的DOM，你需要指明 `flush: 'post'` 选项：

```js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})
```

后置刷新的 `watchEffect()` 有个更方便的别名 `watchPostEffect()`：

```js
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```



### Provide / Inject

- 如果你想确保从 `provide` 传过来的数据不能被 `injector` 的组件更改，你可以使用[`readonly()`](https://staging-cn.vuejs.org/api/reactivity-core.html#readonly) 来包装提供的值。

```js
import { provide, inject } from 'vue'

provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
const message = inject('message', /* 默认值 */'world')

provide('read-only-count', readonly(count))
```

- 如果需要修改数据，建议在 `Provide` 内部就提供方法。

```js
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
```



### 生命周期

- `beforeCreate`===>`setup()`
- `created`====>`setup()`
- `beforeMount` ===>`onBeforeMount`
- `mounted`====>`onMounted`
- `beforeUpdate`===>`onBeforeUpdate`
- `updated` ====>`onUpdated`
- `beforeUnmount` ==>`onBeforeUnmount`
- `unmounted` ====>`onUnmounted`

| `errorCaptured`   | `onErrorCaptured`   |
| ----------------- | ------------------- |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |



****



### Router和Vuex

1、因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter()` 或  `useStore()` 函数：

```js
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useStore()
```

2、导航守卫只有更新和离开：`onBeforeRouteLeave`、`onBeforeRouteUpdate`

3、**访问 Mutation 和 Action**

`this.$store` 和 `useStore()` 是等效的

```js
import { useStore } from 'vuex'
const store = useStore()
let increment = () => store.commit('increment')
let asyncIncrement = () => store.dispatch('asyncIncrement')
```



### Pro进阶

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。（例子->只处理name、age、但不会处理job里面的）
- shallowRef：只处理基本数据类型的响应式, **不进行对象的响应式处理**。

```js
let person = shallowReactive({})
let x = shallowRef({})
```



- readonly: 让一个响应式数据变为只读的（深只读）。
- shallowReadonly：让一个响应式数据变为只读的（浅只读）。

```js
// 只读,所有数据不会变化。
person = readonly(person)
// 只读,表面数据不变,但内部会变,意思是对象中的对象会变->person.job.xx会变
person = shallowReadonly(person)
```



- toRaw：
  - 作用：将一个由```reactive```生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>。
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw：
  - 作用：标记一个对象，使其永远不会再成为响应式对象。
  - 应用场景:
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

```js
const p = toRaw(person)
person.car = markRaw(car)
```



**customRef**

> 每次更新数据时，自定义执行的操作

创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

下面的案例需求是：等待0.5秒才更新hello的数据。

1、`myRef(value, delay)`：值、等待的时间

2、`myRef()return`：返回值必须是->`customRef()`

3、`customRef((track,trigger)=>{})`：箭头函数，

track()：通知Vue跟踪value的变化

trigger()：更新界面

4、`customRef()`：函数中必须返回`get()`和`set(newValue)`

```js
setup(){
  function myRef(value,delay){
    let timer
    //通过customRef去实现自定义
    return customRef((track,trigger)=>{
      return{
        get(){
          track() // 通知Vue跟踪value的变化
          return value
        },
        set(newValue){
          clearTimeout(timer)
          timer = setTimeout(()=>{
            value = newValue
            trigger() //更新界面
          },delay)
        }
      }
    })
  }
  let keyword = myRef('hello',500)
  return {
    keyword
  }
}
```



- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理



## axios

```js
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })
  // 拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    // 如果这里不返回，那么前面main，调用的时候就会显示无
    return config
  },err =>{
    console.log(err);
  })

  return instance(config)
}
```





## 新组件

**Fragment**

- 在Vue2中: 组件必须有一个根标签
- 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
- 好处: 减少标签层级, 减小内存占用

不用在加一层 div 包裹

```html
<template>
	<h1>
    标题
  </h1>
</template>
```



**Teleport**

什么是Teleport？—— `Teleport` 是一种能够将我们的**组件html结构**移动到指定位置的技术。

```html
<teleport to="移动位置"></teleport>
<teleport to="body"></teleport>
<teleport to="#id名"></teleport>
```



**Suspense**

等待异步组件时渲染一些额外内容，让应用有更好的用户体验

**异步引入组件：**、动态引入

app组件先显示，然后Child在显示。谁先编译好谁先展示，而不是等全部编译好在出来。

```js
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
```



使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback```

```html
<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>加载中.....</h3>
			</template>
		</Suspense>
	</div>
</template>
```

子组件可以返回一个Promise实例，但需要Suspense和异步组件的配合。

```js
// ./components/Child.vue
async setup(){
  let sum = ref(0)
  let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({sum})
    },3000)
  })
  return await p
}
```



## 新问题

Vue2.x中，使用Vue注册全局组件、注册全局指令等。现在用 app

| 2.x 全局 API（```Vue```） | 3.x 实例 API (`app`)                        |
| ------------------------- | ------------------------------------------- |
| Vue.config.xxxx           | app.config.xxxx                             |
| Vue.config.productionTip  | <strong style="color:#DD5145">移除</strong> |
| Vue.component             | app.component                               |
| Vue.directive             | app.directive                               |
| Vue.mixin                 | app.mixin                                   |
| Vue.use                   | app.use                                     |
| Vue.prototype             | app.config.globalProperties                 |

**移除**keyCode作为 v-on 的修饰符，同时也不再支持```config.keyCodes```

**移除**```v-on.native```修饰符

```html
<!-- 父组件绑定 -->
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
<!-- 子组件声明 -->
<script>
  export default {
    emits: ['close']
  }
</script>
```

**移除**过滤器（filter）
