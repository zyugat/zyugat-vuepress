# VueCLI&TypeScript

## CLI

### 安装

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue create vue-test
vue create vue-test
cd vue-test
npm run serve
```



```sh
Vue CLI v5.0.4
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N)
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
yarn create vite <project-name> --template vue-ts
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
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
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

规则：`:paramsName(正则表达式)`

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



### 补充

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



### TypeScript

如果要在 vuex 中使用TypeScirpt，需要声明自定义的模块补充。

为此，需要在项目文件夹中添加一个声明文件来声明 Vue 的自定义类型 `ComponentCustomProperties`

```ts
// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```



`useStore` 组合式函数类型声明，（这是简化后的，未简化的自行查看官方文档）

1. 定义类型化的 `InjectionKey`。
2. 将 store 安装到 Vue 应用时提供类型化的 `InjectionKey` 。
3. 将类型化的 `InjectionKey` 传给 `useStore` 方法。

使用 Vue 的 `InjectionKey` 接口和自己的 store 类型定义来定义 key ：

```ts
// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
```

最后，将上述 injection key 传入 `useStore` 方法可以获取类型化的 store。

```ts
// vue 组件
import { useStore } from './store'

export default {
  setup () {
    const store = useStore()

    store.state.count // 类型为 number
  }
}
```

本质上，Vuex 将store 安装到 Vue 应用中使用了 Vue 的 [Provide/Inject](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject) 特性，这就是 injection key 是很重要的因素的原因。



## TS支持

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```



定义全局属性：``globalProperties``

```ts
import axios from 'axios'
const app = Vue.createApp({})
app.config.globalProperties.foo = 'bar'

app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})
```





### 定义组件

使用 `defineComponent` 全局方法定义组件：

```ts
import { defineComponent } from 'vue'

const Component = defineComponent({
  // 已启用类型推断
})
```



### 计算属性

在使用 计算属性 时，TS可能难以推断他的类型，因此需要自己注解。

```ts
import { defineComponent } from 'vue'

const Component = defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // 需要注解
    greeting(): string {
      return this.message + '!'
    },

    // 在使用 setter 进行计算时，需要对 getter 进行注解
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  }
})
```



### Props

使用 `PropType` 指明构造函数：

```ts
import { defineComponent, PropType } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

const Component = defineComponent({
  props: {
    name: String,
    id: [Number, String],
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    book: {
      type: Object as PropType<Book>,
      required: true
    },
    metadata: {
      type: null // metadata 的类型是 any
    }
  }
})
```

如果涉及到对函数表达式的类型推断，要注意对象和数组的 `validator` 和 `default` 值。

必须使用箭头函数，如果使用函数则需要指定明确是 this 参数。

```ts
import { defineComponent, PropType } from 'vue'

interface Book {
  title: string
  year?: number
}

const Component = defineComponent({
  props: {
    bookA: {
      type: Object as PropType<Book>,
      // 请务必使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    bookB: {
      type: Object as PropType<Book>,
      // 或者提供一个明确的 this 参数
      default(this: void) {
        return {
          title: 'Function Expression'
        }
      },
      validator(this: void, book: Book) {
        return !!book.title
      }
    }
  }
})
```



### emite

```ts
const Component = defineComponent({
  emits: {
    addBook(payload: { bookName: string }) {
      // perform runtime 验证
      return payload.bookName.length > 0
    }
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', {
        bookName: 123 // 类型错误！
      })
      this.$emit('non-declared-event') // 类型错误！
    }
  }
})
```



****



### 组合式API

refs

```ts
import { defineComponent, ref } from 'vue'

const Component = defineComponent({
  setup() {
    const year = ref<string | number>('2020') 
    // year's type: Ref<string | number>

    year.value = 2020 // ok!
    
    return year
  }
})
```



**给模板引用定义类型**

我想在 父模板 中调用 子模板 的公共方法。需要在创建引用时使用 `InstanceType`：

```ts
import { defineComponent, ref } from 'vue'
const MyModal = defineComponent({
  setup() {
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)
    return {
      isContentShown,
      open
    }
  }
})
const app = defineComponent({
  components: {
    MyModal
  },
  template: `
    <button @click="openModal">Open from parent</button>
    <my-modal ref="modal" />
  `,
  setup() {
    // const modal = ref()
    const modal = ref<InstanceType<typeof MyModal>>()
    const openModal = () => {
      modal.value?.open()
    }
    return { modal, openModal }
  }
})
```



reactive

没什么变化，和原本一样。

```ts
import { defineComponent, reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const book = reactive<Book>({ title: 'Vue 3 Guide' })
    // or
    const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    const book = reactive({ title: 'Vue 3 Guide' }) as Book
  }
})
```



computed，和原本一样，不做展示了。



处理原生DOM事件，记得使用断言 Event

```ts
const handleChange = (evt: Event) => {
  console.log((evt.target as HTMLInputElement).value)
}
```



## 项目

> 目录：
>
> - src
>   - api
>   - assets
>     - fonts
>     - scss
>   - components 组件
>   - store Vuex
>   - typings 声明
>   - hooks 封装的方法
>   - views 视图
>
> 



- 第一步
  - 初始化项目文件：
    - `vue.config.js`：添加自定义路径
    - 添加 `.eslintrc.js` 和 `.prettierrc` 文件
    - 修改 `tsconfig.json` 文件
    - 在 `package.json` 中添加自己常用的命令
- 第二步
  - 确定项目的数据结构，`typings/index.ts`
- 第三步
  - 编写操作方法，`hooks/XXX.ts`
- 第四步
  - 编写vue文件。







utils：

方法 useTodo 保存所有操作数据的方法、设置了 Watch 监听数据变化，如果发生变化则 保存至缓存。

```ts
/**
 * 获取数据类型
 * @param value
 * @return "String","Object","Array"...
 */
```

