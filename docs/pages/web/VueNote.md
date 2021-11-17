# VueNote

`<script src="https://unpkg.com/vue@next"></script>`

## base

### 数据绑定

- `v-bind`
  - 简写：`:`
  - 一般绑定属性值、对象和数组。



- class样式


字符串和数组：**用于绑定多个样式**。

对象：用于**控制是否显示样式**。


```html
<style>
.active {
  color: red;
}
</style>

<h2 :class="active">Hello World</h2> 
<h2 :class="['active', 'line']">Hello World</h2> 
<!-- 通过控制 yesActive 选择是否显示样式 -->
<h2 :class="{active: yesActive}">{{message}}</h2>
```

- 动态参数
  - `<a :[attributeName]="url">`

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
<input type="radio" v-model="pick" v-bin:value="a" />
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

`v-for 与 v-if `一同使用：因if优先级比for高，故无法访问for中变量。



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



`immediate:true`：Watch在最初绑定时不会被调用，如果想开始就调用则加上该参数。

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



****



### 指令

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
<h2 v-once>初始化的n值是:{{n}}</h2>
```

![image-20211116172030660](http://img.zyugat.cn/zyuimg/2021-11-16_9bcfbf1989f56.png)

## 生命周期

![lifecycle](http://img.zyugat.cn/zyuimg/2021-11-04_4ac4594b73f24.png)

`beforeCreate`：实例创建前

`created`：实例创建后

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

> 需求：通过props将数据传递给**子组件**，保持数据的响应性。
>
> 思路：通过`v-model`绑定Props值传递给子组件，子组件通过自定义事件`emit`修改。

默认情况下，组件上的 `v-model` 使用 `modelValue` 作为 prop 和 `update:modelValue` 作为事件。我们可以通过向 `v-model` 传递参数来修改这些名称：

绑定的方法：`v-model:propname="xxx"`

抛出的事件名 `update:propname`结构，前面uptede是固定是。

1、父组件通过v-model绑定props：`v-model:my-name="myName1"`

2、子组件中接受 props 值 `myName`。

3、组件输入框 input 发送自定义事件。当值被改变时把值发出去。

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
  props: {
    myName: String,
  },
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



****



### 动态异步组件

在动态组件上使用`keep-alive`可以使**组件实例被缓存**。

1、新建三个组件：`tab-home、tab-posts、tab-archive`

2、通过计算属性**拼接属性名**：`currentTabComponent() {}`

3、通过点击按钮**切换组件名**

4、通过`:is=""`选择显示的组件

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



### 插槽

- 插槽：`slot`


**具名插槽**

缩写：`<template #header>`

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

> 可以理解为：将外部内容放在**子组件slot中**。
>
> ```html
> <slot :item="item" :index="index"
>               :another-attribute="anotherAttribute">
>       <span>{{ item }}</span>
>       <span>-----{{ anotherAttribute }}</span>
> </slot>
> ```
>
> 这样看懂了把？

自定义项目的渲染方式。**默认插槽不能和具名插槽混用**

1、`v-slot:default=""`或`v-slot=""`，不带参数的 `v-slot` 被假定对应默认插槽。

2、在插槽中，绑定了item、index、anotherAttribute，如果需要用到某个属性则可以使用 `slotProps.属性名`，进行调用。

**slotProps可以替换为任何名字。**

```html
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



### Mixin

不推荐用，要用就用setup

```js
// 定义一个 mixin 对象
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用此 mixin 对象的应用
const app = Vue.createApp({
  mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"
```



****



### Attribute 继承

> 效果：组件数据不使用props接收，将这些数据将作为属性绑定到HTML元素中。

- 问题1、`inheritAttrs: false` ：如果你**不**希望组件的根元素继承 attribute，就在选项中设置。
  - 当你关闭继承后，如果想要将所有 prop attribute 应用于别的元素，而不是根元素，可以使用：`v-bind="$attrs"`

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



- 问题2、`$attrs`包含什么？
  - 包含父作用域中不作为组件 props 或自定义事件的 attribute 绑定和事件，包括 `class` 和 `style`。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定。`v-bind="$attrs"`



- 问题3、当存在父组件传递 Props 后
  - 当组件**没有接收** Props，那么Props 会存在于 `$attrs` 中。
  - 当组件**接收** Props，那么 Props 不会存在于 `$attrs` 中，而存在于 `$props`中。



- 问题4、如果我传递的属性中存在 **方法的调用**
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



### 补

模块系统

```js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  }
  // ...
}
```



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

`transition`组件

> 六种class切换：进度过度的**开始生效结束**，离开过度的**开始生效结束**。

1. `v-enter-from`：进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter-from` 被移除)，在过渡/动画完成之后移除。
4. `v-leave-from`：离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave-from` 被删除)，在过渡/动画完成之后移除。

```html
<transition name="fade">
  <p v-if="show">hello</p>
</transition>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

如果不带 `name` ，那么会使用 `v-`作为默认前缀。







## CLI

### 安装

```bash
npm install -g @vue/cli
vue create vue-test
vue create vue-test
cd vue-test
npm run serve
```



Vite

```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

```bash
yarn create vite <project-name> --template vue
cd <project-name>
yarn
yarn dev
```







## vue-router

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>
```

```shell
yarn add vue-router@4
```



router目录：`router/index.js`、页面：`views`

当切换页面时，是直接销毁页面

创建router流程：创建`router/index.js`文件编写配置，创建`router-link`标签用于跳转页面，创建`router-view`用于显示对应组件。



> 目录：
>
> - **base**
>   - router-link：链接；router-view：显示URL对应组件；children：嵌套路由
>
> - **路由传参**
>   - params、query
> - **路由匹配正则**
>   - 匹配所有内容、匹配xxx开头内容、可重复次数、可选参数
> - **命名路由与视图**
>   - 命名路由：`name`属性；命名视图：同时/同级展示多个视图
> - **重定向和别名和props**
>   - 重定向：`redirect`、别名：`alias`
>   - props四种模式：布尔模式、命名视图、对象模式、函数模式
> - **导航守卫**
>   - 全局前置守卫、全局解析守卫、全局后置守卫、路由独享守卫
>   - 渲染组件前守卫、组件复用时守卫、离开组件时守卫
> - **元信息**
>   - 获取meta字段：`$router.meta`（过渡名称、谁可以访问路由）
> - **滚动行为**
>   - `scrollBehavior(to, from, savedPosition){return{}}`
>   - `el`传递CSS选择器或DOM元素、返回`savedPosition`视为像原生浏览器前进后退、滚动到锚点、延迟滚动
> - **补**
>   - router和route区别、懒加载
>   - 路由跳转命令、Hash模式、HTML5模式
>   - 数据获取：导航完成后获取数据、在导航完成前获取数据
>   - 组件内容传递：必须使用 `v-slot` API 将其传递给 `<component>`



**router-link**

创建一个链接

`tag`：指定渲染成任意组件
`replace`：页面跳转的时候禁止返回
`active-class`：对应的路由匹配成功时, 会自动给当前元素设置class

```html
<router-link to="/test1" tag="button" replace active-class="my-active">test1</router-link>
```

```javascript
// router/index.js
  const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'my-active'
})
```



**router-view**

显示与url对应的组件。

```html
<router-view></router-view>
```



**`router/index.js`**

```js
// 1. 定义路由组件.
// 也可以从其他文件导入
// import Home from '../components/Home'
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
```



**嵌套路由**：使用：`children:[{...},{...}]`

```javascript
{
  path: '/test1',
  name: 'test1',
  component: () => import('../components/home'),
  children: [
    {
      path: '',
      // 重定向
      redirect: '/test1/children1'
    },
    {
      path: 'children1',
      component: () => import('../components/children1')
    },
    {
      path: 'children2',
      component: () => import('../components/children2')
    }
  ]
}
```



****



### 路由传参

如果使用带参数的路由，从`api/123`到`api/321`，因为使用相同的组件实例所以会被复用。意味着生命周期钩子不会被调用。

`params`：修改路由地址：`path:'/params/:abc'`

`query`：修改跳转链接：`:to="{ path: '/api', query: { name: '我是query数据' } }"`

```html
<template>
  <h2>Api</h2>
  <p>路由传参 params：{{ $route.params.abc }}</p>
  <p>路由传参 query：{{ $route.query.name }}</p>
</template>
```

```html
<div id="router">
  <router-link to="/api/我是params数据">Api-路由传参params</router-link
  ><br />
  <router-link :to="{ path: '/api', query: { name: '我是query数据' } }">
    Api-query
  </router-link>
</div>
```

```js
const routes = [
  { path: '/api', component: () => import('../views/api') },
  { path: '/api/:abc', component: () => import('../views/api') },
]
```

![image-20211113175341514](http://img.zyugat.cn/zyuimg/2021-11-13_aed8ecba88435.png)

![image-20211113175356984](http://img.zyugat.cn/zyuimg/2021-11-13_f42711a41bf18.png)



****



### 路由匹配正则

在**括号**中加入正则表达式

1、将匹配所有内容：`path: '/:pathMatch(.*)'`，并将其放在 `$route.params.pathMatch` 下

![image-20211113175257422](http://img.zyugat.cn/zyuimg/2021-11-13_d77b0b7f989d4.png)

2、匹配user-开头的路由：`path: '/user-:afterUser(.*)'`，并将匹配内容放在`$route.params.afterUser` 下

![image-20211113175612451](http://img.zyugat.cn/zyuimg/2021-11-13_1c01f0d3be4b4.png)

3、可重复参数：`path: '/user-:afterUser(.*)*'`，最后面加了一个`*`，意思是会匹配后续所有->`user-123456/123/456`，返回值是**数组**。（`*`->0个或多个。`+`->1个或多个）

![image-20211113180256087](http://img.zyugat.cn/zyuimg/2021-11-13_a7f31c8389969.png)

4、可选：`?`，0个或1个

```js
{ path: '/:pathMatch(.*)', component: () => import('../views/api') },
{ path: '/user-:afterUser(.*)', component: () => import('../views/api') },
{ path: '/user-:afterUser(.*)*', component: () => import('../views/api') },
```

```html
<p>路由匹配正则表达式 /:pathMatch(.*)：{{ $route.params.pathMatch }}</p>
<p>路由匹配正则表达式 /user-:afterUser(.*)：{{ $route.params.afterUser }}</p>
```



****



### 命名路由与视图

命名路由：`name`

- 没有硬编码的 URL
- `params` 的自动编码/解码。
- 防止你在 url 中出现打字错误。
- 绕过路径排序（如显示一个）

`router.push({ name: 'user', params: { username: 'erina' } })`

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```



**命名视图**

同时/同级展示多个视图。不是嵌套。

例子中：我希望main组件一直都在中间，切换路由时我希望Left与Right交换位置。

```js
{
  path: '/nameLeft',
  components: {
    default: left,
    main,
    change: right,
  },
},
{
  path: '/nameRight',
  components: {
    default: right,
    main,
    change: left,
  },
},
```

```html
<router-link to="/nameLeft">left</router-link>——————
<router-link to="/nameRight">Right</router-link>

<router-view />
<router-view name="main" />
<router-view name="change" />
```

![image-20211113183439347](http://img.zyugat.cn/zyuimg/2021-11-13_21c9b0ce676fa.png)

![image-20211113183504238](http://img.zyugat.cn/zyuimg/2021-11-13_c6140f1068082.png)





****



### 重定向和别名和props

重定向：`redirect`

```js
const routes = [{ path: '/home', redirect: '/' }]
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
{
  // /search/screens -> /search?q=screens
  path: '/search/:searchText',
  redirect: to => {
    // 方法接收目标路由作为参数
    // return 重定向的字符串路径/路径对象
    return { path: '/search', query: { q: to.params.searchText } }
  },
},
```

别名：`alias:''`

当访问/home时也是访问/页面。

```js
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
```



开启Props：`props: true`

**props分为四种模式：布尔模式、命名视图、对象模式、函数模式**

在路由组件中我们一般是：`$route.params.id`，获取到属性。现在我们只需要使用`props`即可。

1、布尔模式

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```

2、**命名视图**：则需要为每个命名视图定义一个`props`配置

```js
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false }
  }
]
```

3、对象模式：

```js
props: { newsletterPopup: false }
```

4、函数模式：用于将参数转换为其他类型

例如：URL`/search?q=vue`将传递`{query: 'vue'}`作为props传为组件。

```js
props: route => ({ query: route.query.q })
```



****



### 导航守卫

> 要注意，全局守卫是写在vue-router文件里面
>
> **守卫有next，钩子没有。**
>
> 全局守卫有三个：`router.beforeEach`全局前置守卫、`router.beforeResolve`全局解析守卫、`router.afterEach`全局后置钩子
>
> 1. 导航被触发。
> 2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
> 3. 调用**全局**的 `router.beforeEach` 守卫。
> 4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
> 5. 在路由配置里调用 `beforeEnter`。
> 6. 解析异步路由组件。
> 7. 在被激活的组件里调用 `beforeRouteEnter`。
> 8. 调用**全局**的 `router.beforeResolve` 守卫 (2.5+)。
> 9. 导航被确认。
> 10. 调用**全局**的 `router.afterEach` 钩子。
> 11. 触发 DOM 更新。
> 12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

- `to: Route`: 即将要进入的目标**路由对象**
- `from: Route`: 当前导航正要离开的路由
- `next: Function`: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - `next()`：执行下一个钩子
  - `next(false)`：中断当前的导航
  - `next('/')`或`next({path: '/'})`：跳转不同导航
  - `next(error)`：传入一个Error的实例，导航会被中断且传递错误给`router.onError()`注册过的回调

**路由流程：**



`router.beforeEach(to, from, next)`：全局前置守卫

跳转路由之前都会调用这个回调。

`router.beforeResolve(to, from, next)`：全局解析守卫

是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

`router.afterEach(to, from)`：全局后置钩子

**路由跳转后的回调**。没有next就无法改变导航本身，故用于分析、更改页面标题、声明页面等辅助功能。

`beforeEnter(to, from, next)`：路由独享的守卫

**只在进入路由时触发**，不会在 `params`、`query` 或 `hash` 改变时触发，在路由配置上直接定义。

```js
{
  path: '/foo',
  component: Foo,
  beforeEnter: (to, from, next) => {
    // ...
  }
}
```



**组件内部守卫：**

`beforeRouteEnter(to, from, next)`：渲染组件前。

不能访问组件实例 `this`，因为实例还未创建

`beforeRouteUpdate(to, from, next)`：组件复用时。

可以访问组件实例 `this`

`beforeRouteLeave(to, from, next)`：离开组件时。

可以访问组件实例 `this`



### 元信息

过渡名称、谁可以访问路由等，可以使用`meta`属性实现。

```js
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail,
        // 任何人都可以阅读文章
        meta: { requiresAuth: false }
      }
    ]
  }
]
```

1、首先 `routers` 配置中每个路由对象为 **路由记录**，根据上面的路由配置，`/foo/bar` 这个 URL 将会匹配父路由记录以及子路由记录。

2、路由匹配到的所有路由记录会暴露为：`$route` 对象的 `$route.matched` 数组。（第四行）

3、通过遍历数组检测路由记录的 `meta` 字段。但是Vue Router中可以使用 `$route.meta`，非递归合并所有 meta 字段的（从父字段到子字段）的方法。

**总结：通过`$router.meta`获取meta字段**

```js
// to: 即将进入的路由对象
router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})
```



### 滚动行为

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})
```

2、通过 `el`传递CSS选择器或DOM元素，top和left视为偏移量

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终在元素 #main 上方滚动 10px
    return {
      // 也可以这么写
      // el: document.getElementById('main'),
      el: '#main',
      top: -10,
    }
  },
})
```

3、返回false值或空对象则不变化，返回 `savedPosition`，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
```

4、滚动到锚点：

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})
```

5、延迟滚动，返回一个Promise

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})
```



****



### 补

**router与route区别**

router是**指向Vue实例**的router，而route他永远是**指向当前活跃的对象**，当按钮被点击时（此时按钮正处于活跃），就返回按钮信息。

懒加载，把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件：`const home = () => import('../components/home')`



同时`component` (和 `components`) 配置接收一个返回 Promise 组件的函数，Vue Router **只会在第一次进入页面时才会获取这个函数**，然后使用缓存数据。

```js
const UserDetails = () =>
  Promise.resolve({
    /* 组件定义 */
  })
```



**路由跳转**：`this.$router.push('/')`



Hash模式：`history: createWebHashHistory(),`

HTML5模式：`history: createWebHistory(),`



**数据获取**

1、导航完成后获取数据：在`created`钩子中创建`watch`监听`this.$route.params`路由属性。当发送改变时获取数据。

2、在导航完成前获取数据：在`beforeRouteEnter`守卫(渲染组件前调用)，中获取数据。

```js
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
```



**组件内容传递**

你必须使用 `v-slot` API 将其传递给 `<component>`

```html
<router-view v-slot="{ Component }">
  <component :is="Component">
    <p>In Vue Router 3, I render inside the route component</p>
  </component>
</router-view>
```





## Vuex

![vuex](https://next.vuex.vuejs.org/vuex.png)

**如果想更新Store状态，必须要先commit然后让vuex里面的mutations去改**



```shell
yarn add vuex@next
```



> 目录：
>
> - State
>   - 创建实例：`const store = createStore({})`
>   - 获取数据：`this.$store.state.count`
> - Getters
>   - 获取：`$store.getters.powerCounter`
> - Mutations
>   - 调用：`this.$store.commit('方法名', 参数)`
> - Action
>   - `checkout ({ commit, state }, products) {}`
>   - 调用：`this.$store.dispatch('方法名', 参数).then(res=>{})`
> - 模块
>   - 定义常量
> - 命名空间
>   - 开启命名空间：`namespaced: true`
>   - 组件中获取命名空间的State、Getters、Mutations、Action值
>   - 组件中使用 `mapState`、`mapGetters`、`mapActions` 和 `mapMutations` 
>   - 创建命名空间辅助函数：`createNamespacedHelpers`
>   - 在命名空间的模块中**访问全局内容**
>   - 在命名空间的模块中**注册全局 action**
>   - **动态注册模块**



### State

创建一个store实例

```js
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

获取数据：`this.$store.state.count`

获取多个状态：`mapState`

第一种：计算属性名称与 state 子节点名称不相同

```js
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + 10
    }
  })
}
```

第二种：计算属性名称和 `state` 节点名称相同

```js
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])
```

第三种：与局部计算属性混用

`mapState` 函数返回的是一个对象。通过 **对象展开运算符** 将多个对象合并为一个。

```js
computed: {
  localComputed () { /* ... */ },
  ...mapState([
  	// 映射 this.count 为 store.state.count
  	'count'
	]) 
}
```



### Getters

计算属性，必须含有`return`

获取：`$store.getters.powerCounter`

用法：简单的计算属性、遍历对象、访问计算属性的方法、返回函数实现传参

```js
const store = createStore({
  state: {
    count: 1,
    todos: [
      { id: 1, text: 'todosText1', done: true },
      { id: 2, text: 'todosText2', done: false },
      { id: 3, text: 'todosText3', done: true },
    ],
  },
  getters: {
    // 1、简单的计算属性
    powerCount: state => {
      return state.count * 2
    },
    // 2、遍历对象
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // 3、访问计算属性的方法
    doneTodosLength: (state, getters) => {
      return getters.doneTodos.length
    },
    // 4、返回函数实现传参
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
})
```

`mapGetters `：将 store 中的 getter 映射到局部计算属性

```js
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    ...mapGetters(['powerCounter', 'doneTodos', 'doneTodosLength']),
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      getId: 'getTodoById',
    }),
  }
}
```



### Mutations

对State数据进行操作

定义一个方法，在主页commit调用该方法。

`this.$store.commit('方法名', 参数)`

```js
// vuex，定义方法
state: {
  students: [
    { id: 1, text: 'wahaha', age: 18 },
    { id: 2, text: 'zhangsan', age: 25 },
  ],
}
mutations: {
  addStudent: (state, stu) => {
    state.students.push(stu)
  },
},
  
// vue.vue，提交操作
addStudent() {
  const stu = {id:114, name:'alan', age: 30}
  // 普通参数传递
  this.$store.commit('addStudent', stu)
  // 使用对象传递
  this.$store.commit({
    type: 'addStudent',
    stu
  })
}
```

`mapMutations`

```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```



### Action

1、包含任意异步操作，提交的是 mutation，而不是直接变更状态，一般`Action`是带参数的`context`与`payload`。

2、context具有store实例相同的方法和属性，可以通过`context.commit`提交一个mulation，或者`context.state`和`context.getters`获取state和geteers。

3、使用：` this.$store.dispatch('方法名', 参数).then(res=>{})`



**Action用于判断某个状态是什么，从而执行对应 mutations 方法**

```js
mutations: {
  updateInfo(state) {
    state.info.name = 'TETETE '
  }
},
actions: {
  // payload 是那边传来的参数
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateActionInfo')
        console.log(payload)
        resolve('OK')
      }, 1000)
    })
  },
  // 通过参数解构简化代码
  checkout ({ commit, state }, products) {}
},
```

Action同样也有：`mapActions`

```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

**组合式**

`store.dispatch` 可以处理被触发的 action 的处理函数返回的 Promise，并且 `store.dispatch` 仍旧返回 Promise：

```js
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```



### 模块

> 目录：
>
> store
> 	modules
> 		moduleA.js
> 	actions.js	异步操作
> 	getters.js	计算属性
> 	index.js
> 	mutations.js	方法
> 	mutations-types.js	常量模块

通过利用`export default {}`将内容导出，

获取 module 里面的 state：`state.b.str`

模块内部的 action 和 mutation 和 Getter 仍然是注册在**全局命名空间**的。

```javascript
import moduleA from "./modules/moduleA";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = () => {
  return {
    count: 0,
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: {
        state:{str:'mystr'},
        mutations:{},
        actions:{},
        getters:{}
    }
  }
})
```



**定义常量**

`mutations-types.js`

```js
// 1. 导出常量
export const INCREMENT = 'increment'

// 2. 导入常量
import {
  INCREMENT
} from "@/store/mutations-types";

// 3. 使用常量
[INCREMENT](state) {
   state.counter++
 },
```



### 命名空间

1、默认情况下，模块内部的 action 和 mutation 和 Getter 仍然是注册在**全局命名空间**的。如果你不希望这样，可以开启命名空间`namespaced: true,`。

```js
export default createStore({
  modules: {
    a: moduleA,
    b: {
      state: { str: 'mystr' },
      mutations: {
        changeStr(state) {
          state.str = 'changeStr'
        },
      },
      actions: {},
      getters: {},
    },
    // 命名空间
    // 模块 account
    account: {
      namespaced: true,
      state: () => {},
      getters: {
        isAdmin() {}, // -> getters['account/isAdmin']
      },
      actions: {
        login() {}, // -> dispatch('account/login')
      },
      mutations: {
        login() {
          alert("commit('account/login')")
        }, // -> commit('account/login')
      },
      modules: {
        page: {
          mutations: {
            showPage() {
              alert("commit('account/showPage')")
            }, // -> commit['account/showPage']
          },
        },
        // 进一步嵌套命名空间
        posts: {
          namespaced: true,
          mutations: {
            popular() {
              alert("commit('account/posts/popular')")
            }, // -> commit['account/posts/popular']
          },
        },
      },
    },
  },
})
```

2、组件中获取命名空间的State、Getters、Mutations、Action：`this.$store.state.moduleA.countA`

```js
computed: {
  commonState(){
    return this.$store.state.moduleA.countA
  },
  commonGetter(){
    return this.$store.getters('moduleA/moduleAGetter')
  },
    
    
  // 2 此处的moduleA，不是以前缀的形式出现！！！
  ...mapGetters('moduleA',['moduleAGetter']),
  // 3 别名状态下
  ...mapGetters({
      paramGetter:'moduleA/moduleAGetter'
  }),

},
methods: {

}
```

3、当使用 `mapState`、`mapGetters`、`mapActions` 和 `mapMutations` 这些函数来绑定带命名空间的模块时。

第二种方法：将模块的**空间名称字符串**作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文。

```js
computed: {
  // 第一种方法
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  }),
  // 第二种方法
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
  
  // 2 此处的moduleA，不是以前缀的形式出现！！！
  ...mapGetters('moduleA',['moduleAGetter']),
  // 3 别名状态下
  ...mapGetters({
      paramGetter:'moduleA/moduleAGetter'
  }),

},
methods: {
  commonAction(){
      this.$store.dispatch('moduleA/moduleAAction')
  },
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ]),
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
```

4、创建命名空间辅助函数：`createNamespacedHelpers`

```js
const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
```



在命名空间的模块中**访问全局内容**

`rootState` 和 `rootGetters` 会作为第三和第四参数传入 getter，也会通过 `context` 对象的属性传入 action。

```js
getters: {
  // 在这个模块的 getter 中，`getters` 被局部化了
  // 你可以使用 getter 的第四个参数来调用 `rootGetters`
  someGetter (state, getters, rootState, rootGetters) {
    getters.someOtherGetter // -> 'foo/someOtherGetter'
    rootGetters.someOtherGetter // -> 'someOtherGetter'
  },
  someOtherGetter: state => { ... }
},
```



在命名空间的模块中**注册全局 action**

`root: true`，放在函数下。

```js
actions: {
  someAction: {
    root: true,
    handler (namespacedContext, payload) { ... } // -> 'someAction'
  }
}
```



**动态注册模块**

`store.registerModule` 方法注册模块

`store.unregisterModule(moduleName)` 来动态卸载模块

```js
import { createStore } from 'vuex'

const store = createStore({ /* 选项 */ })

// 注册模块 `myModule`
store.registerModule('myModule', {
  // ...
})
// 注册嵌套模块 `nested/myModule`
store.registerModule(['nested', 'myModule'], {
  // ...
})
```



****



## 组合式API-setup

将界面中重复的部分连同功能都提取为可重用的代码段

> 在 `setup` 中你应该避免使用 `this`，因为它不会找到组件实例。
>
> `setup`在beforeCreate之前执行一次，this是undefined。
>
> `setup` 的调用发生在 `data` property、`computed` property 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取。

**data、methos、computed...）当与setup某个属性重名时，setup优先。**

setup内部无法通过this获取值，所以只能在参数传入props，不然setup内部无法获取外面传来的值



> 1、setup简单使用

- 返回值：
  - 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
  - 若返回一个渲染函数：则可以自定义渲染内容。（了解）

返回值是一个 `promise` 。

```js
setup(){
  let name = '张三'
  let age = 18

  // 方法
  function sayHello() {
    alert(`Hello`)
  }

  // 返回一个对象（常用）
  return {
    name,
    age,
    sayHello,
  }
  // 返回一个函数（渲染函数）
  // return ()=> h('h1','setup')
}
```



> 2、setup的参数

`setup`：选项是一个接收 `props` 和 `context` 的函数。

- props：对象，包含组件外部传递过来的数据，以及内部声明接收的属性。
- context：上下文对象
  - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
  - slots: 收到的插槽内容, 相当于 ```this.$slots```。
  - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。

**emit**

当在setup中使用`emit`时，需先在子组件中声明。

```js
emits:['hello']
```



### 定义响应式的数据

1、**ref**

作用: 定义一个响应式的数据

- 语法: ```const xxx = ref(initValue)``` 
  - 如果要操作数据需要：`.value`。读取数据就不需要。
  - 因为接收参数并将其包裹在一个带有 `value` property 的对象中返回。

  - ref通过``Object.defineProperty()``的```get```与```set```实现响应式。也可以定义对象和数组，但会自动通过`reactive`转为Proxy对象。

```js
import { ref } from 'vue'

const counter = ref(0)

console.log(counter) // { value: 0 }
console.log(counter.value) // 0

counter.value++
console.log(counter.value) // 1
```



2、**toRef**

解构，将响应式对象中的某个属性**单独提供给外部使用**。

`toRef(Object, attribute)`

`toRefs(Object)`：处理一个对象的多个属性。

```js
setup(){
  //数据
  let person = reactive({
    name:'张三',
    age:18,
    job:{
      j1:{
        salary:20
      }
    }
  })
  // const name2 = toRef(person,'name')
  const x = toRefs(person)
  return {
    person,
    // salary:toRef(person.job.j1,'salary'),
    ...toRefs(person)
  }
}
```



3、**reactive**

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



****



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

3、总结

如果需要用到修改的，还是推荐用回Vue2的  



### Watch

监听ref：`	Watch([attribute],(newValue, oldValue)=>{},{option})`

监听reactive的getter：`	Watch([()=>attribute],(newValue, oldValue)=>{},{option})`

```js
const counter = ref(1)
let person = reactive({
  name:'张三',
  age:18,
  job:{
    j1:{
      salary:20
    }
  }
})
```

1、ref定义

```js
import { ref, watch } from 'vue'
// watch([sum,msg] 多个
watch(counter,(newValue,oldValue)=>{
	console.log('counter变化了',newValue,oldValue)
},{immediate:true})
```

2、监视reactive定义的响应式数据

**无法正确获得oldValue、强制开启了深度监视。**

```js
watch(person,(newValue,oldValue)=>{...
```

3、监视reactive定义的响应式数据中的**某个属性**

**需要使用箭头函数。**

```js
watch(()=>person.name,(newValue,oldValue)=>{...
```

4、监视reactive定义的响应式数据中的**某些属性**

```js
watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
```

5、如果监听reactive的某个属性的值是**对象**

```js
watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
},{deep:true})
//此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
```



> 附：如果监听的是ref定义的**对象**，而对象里面还有对象！那么我监听的不在是ref的数据，而是ref通过`reactive`转变的数据。（监听办法。1:person.value，2:开启深度监听keep:true）
>
> 为什么监听ref定义的sum，不能是`sum.value`？因为sum里面存的是基本数据类型。
>
> ```js
> watch(person...
> watch(person.value...
> watch(sum...
> watch(sum.value...
> ```



**watchEffect**

监视的回调中用到的个属性。

```js
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
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



### Router和Vuex

1、因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter` 函数：

```js
const router = useRouter()
const route = useRoute()
```

2、导航守卫只有更新和离开：`onBeforeRouteLeave`、`onBeforeRouteUpdate`

3、RouterLink 内部行为作为组合API函数公开：

```js
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',

  props: {
    // 如果使用 TypeScript，请添加 @ts-ignore
    ...RouterLink.props,
    inactiveClass: String,
  },

  setup(props) {
    const { route, href, isActive, isExactActive, navigate } = useLink(props)

    const isExternalLink = computed(
      () => typeof props.to === 'string' && props.to.startsWith('http')
    )

    return { isExternalLink, href, navigate, isActive }
  },
}
```



`this.$store` 和 `useStore()` 是等效的

```js
setup () {
  const store = useStore()

  return {
    // 在 computed 函数中访问 state
    count: computed(() => store.state.count),

    // 在 computed 函数中访问 getter
    double: computed(() => store.getters.double)

    // 使用 mutation
    increment: () => store.commit('increment'),

    // 使用 action
    asyncIncrement: () => store.dispatch('asyncIncrement')
  }
}
```



****



### Hook

把setup函数中使用的Composition API进行了封装。复用代码。

```js
// hooks/Test.js
import {onMounted} from 'vue'
export default function (){
	...
	return ...
}
```

```js
// index.vue
import useTest from '../hooks/Test'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let test = useTest()
    return {sum,test}
  }
}
```



### 其他

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



### 问题

1、使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。太多太杂了。

2、Composition API 的优势：相关功能的代码更加有序的组织在一起。



****



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
