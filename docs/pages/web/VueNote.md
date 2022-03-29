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



****



### 模块系统

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

1. `v-enter-from`：进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter-from` 被移除)，在过渡/动画完成之后移除。
4. `v-leave-from`：离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave-from` 被删除)，在过渡/动画完成之后移除。



如果不带 `name` ，那么会使用 `v-`作为默认前缀。

显示控制过度持续时间：`:duration="1000"`，声明钩子，在 **`enter` 和 `leave` 钩中必须使用 `done` 进行回调**。

```html
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
  // --------
  // ENTERING
  // --------

  beforeEnter(el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter(el, done) {
    // ...
    done()
  },
  afterEnter(el) {
    // ...
  },
  enterCancelled(el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave(el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave(el, done) {
    // ...
    done()
  },
  afterLeave(el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled(el) {
    // ...
  }
}
```





案例1,设置进入和离开动画

- 进入动画则是使用 ease-out。
- `*-enter-active` 和 `*-leave-active` ：是必需定义 transition 属性，因为他是定义动画的显示速度和时间。
- `enter-from` 和 `leave-to` ：
  - 之所以写在一起，是因为需要**离开和进入方向的相同**
  -  `leave-to` ：从右边离开
  - `enter-from`：从右边进入

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



案例1,设置进入和离开动画

- `reverse`：反向播放动画
- `bounce-in {}`：
  - 进入动画时：`scale(0)`，不显示
  - 进入动画中：`scale(1.25)`，放大1.25倍
  - 结束动画：`scale(1)`，恢复原样

```html
<button @click="show = !show">Toggle show</button>
<transition name="bounce">
  <p v-if="show">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
    facilisis enim libero, at lacinia diam fermentum id. Pellentesque
    habitant morbi tristique senectus et netus.
  </p>
</transition>
```

```css
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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



**组件的过度**

使用动态组件：`:is`

```html
<input v-model="view" type="radio" value="home" id="home" /><label for="home"
  >Home</label
>
<input v-model="view" type="radio" value="about" id="about" /><label
  for="about"
  >About</label
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



**列表渲染**

使用：`<transition-group>`

- 他不会包含整个组件，需要使用 `tag` 指定渲染一个元素。
- 列表的平滑移动过度效果：`v-move` 类

```html
<div id="list-demo">
  <button @click="shuffle">Shuffle</button>
  <button @click="add">Add</button>
  <button @click="remove">Remove</button>
  <transition-group name="list" tag="p">
    <span v-for="item in items" :key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</div>
```

```js
// import _ from 'lodash'

data() {
  return {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  }
},
methods: {
  randomIndex() {
    return Math.floor(Math.random() * this.items.length)
  },
  add() {
    this.items.splice(this.randomIndex(), 0, this.nextNum++)
  },
  remove() {
    this.items.splice(this.randomIndex(), 1)
  },
  shuffle() {
    this.items = _.shuffle(this.items)
  },
},
```

```css
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.8s ease;
}
```



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



****



### Router和Vuex

1、因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter()` 或  `useStore()` 函数：

```js
const router = useRouter()
const route = useRoute()
const store = useStore()
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



**访问 Mutation 和 Action**

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
