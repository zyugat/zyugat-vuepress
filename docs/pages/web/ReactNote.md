# ReactNote

## 基础



```HTML
<div id="test"></div>
<!-- 引入react核心库 -->
<script type="text/javascript" src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.j" ></script>
<!-- 引入react-dom,用以支持react操作DOM -->
<script type="text/javascript" src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js" ></script>
<!-- 引入balel，将jsx转为js -->
<script type="text/javascript" src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js" ></script>
<script type="text/babel" >
</script>
```



****



### 创建虚拟DOM

- 采用：`jsx`创建

  - 第一步：创建虚拟DOM

    - ```jsx
      const VDOM = (
        <h1 id="title">
          <span>Hello,React</span>
        </h1>
      )
      ```

  - 第二步：渲染DOM到页面，使用`ReactDOM.render(虚拟DOM, 标签)`

    - ```jsx
      ReactDOM.render(VDOM,document.getElementById('test'))
      ```

- 采用：`js`创建

  - ```jsx
    // 创建虚拟DOM
    const VDOM = React.createElement('h1', {id:'title'}, 'Hello')
    // 渲染DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
    ```



****



### 实例->1

遍历数据，在列表标签中。

```jsx
//模拟一些数据
const data = ['Angular','React','Vue']
//1.创建虚拟DOM
const VDOM = (
  <div>
    <h1>前端js框架列表</h1>
    <ul>
      {
        data.map((item,index)=>{
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  </div>
)
//2.渲染虚拟DOM到页面
ReactDOM.render(VDOM,document.getElementById('test'))
```



****



### 小结

- 使用jsx比js要好，JSX可以简化创建虚拟DOM
- **balel.JS的作用**

  - 1)   浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
  - 2)   只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

- **关于虚拟DOM：**

  - 1）本质是Object类型的对象**（一般对象）**
  - 2）虚拟DOM比较“**轻**”，真实DOM比较“**重**”，因为虚拟DOM是React**内部在用**，无需真实DOM上那么多的属性。
  - 3）虚拟DOM最终会被React转化为真实DOM，呈现在页面上。

- **jsx语法规则：**

  - 1）定义虚拟DOM时，**不要写引号**。

  - 2）标签中混入JS表达式时要用`{}`。

  - 3）样式的类名指定不要用class，`要用className`。

  - 4）内联样式，要用以下形式去写。

    - ```
      style={{key:value}}
      ```

  - 5）只有一个**根标签**
  
  - 6）标签必须闭合
  
  - 7）标签首字母
    - (1)若**小写字母开头**，则将该标签转为**html中同名元素**，若html中无该标签对应的同名元素，则报错。
    - (2)若**大写字母开头**，react就去渲染对应的**组件**，若组件没有定义，则报错。

```jsx
const myId = 'aTgUiGu'
const myData = 'HeLlo,rEaCt'
const VDOM = (
  <div>
    <h2 className="title" id={myId.toLowerCase()}>
      <span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
    </h2>
    <h2 className="title" id={myId.toUpperCase()}>
      <span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
    </h2>
    <input type="text"/>
  </div>
)
ReactDOM.render(VDOM,document.getElementById('test'))
```



****



### 组件 & Props

> **TIP：**
>
> - 注意
>   - 组件名必须首字母大写
>   - 虚拟DOM元素只能有一个根元素
>   - 虚拟DOM元素必须有结束标签
> - 渲染类组件标签的基本流程
>
>   - React内部会创建组件实例对象
>   - 调用render()得到虚拟DOM, 并解析为真实DOM
>   - 插入到指定的页面元素内部

- **1->函数式组件**
  - **包含：function、return**
  - React解析组件标签，找到组件，发现组件是函数定义的，**调用函数**，将return返回的虚拟DOM转为真实DOM，随后呈现在页面中。
  - return使用：`()`

```jsx
// 1.创建函数式组件
function MyComponent(){
  // 此处的this是undefined，因为babel编译后开启了严格模式
  console.log(this);
  return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
}
// 2.渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```



- **2->类式组件**
  - **包含：class、render()、return**
  - React解析组件标签，找到组件，发现组件是类定义的，**将类实例化，通过实例调用原型render方法**，将return返回的虚拟DOM转为真实DOM，随后呈现在页面中。

```jsx
//1.创建类式组件
class MyComponent extends React.Component {
  // constructor可以不写，默认就有。
  constructor(props) {
    super(props);
  }
  render(){
    // render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
    // render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
    console.log('render中的this:',this);
    return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
  }
}
// 2.渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```



****



> TIP：
>
> - 理解
>
>   - 1）每个组件对象都会有props(properties的简写)属性
>   - 2）**组件标签**的所有属性都保存在props中
>
> - 作用
>
>   - 1）通过标签属性从组件外向组件内传递变化的数据
>   - 2） 注意: 组件内部不要修改props数据

- **3->**`Props`
  - 通过**属性传递数据**
  - React调用`Welcome`组件，将`name="Sara"`作为props传入
  - 组件在将`<h1>Hello, Sara</h1>` 元素作为返回值。
  - 最后更新DOM。

```jsx
class Person extends React.Component{
  // 添加属性
  test = 100	// 这样是给Car的实例添加，是错误的
	static test = 100	// 给Car本身添加属性
  
  // 对标签属性进行类型、必要性的限制
  static propTypes = {}
  // 指定默认标签属性值
  static defaultProps = {}

  render(){
    const {name,age} = this.props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>年龄：{age+1}</li>
      </ul>
    )
  }
}

// 对标签属性进行类型、必要性的限制
Person.propTypes = {
  name:PropTypes.string.isRequired, //限制name必传，且为字符串
  sex:PropTypes.string, //限制sex为字符串
  age:PropTypes.number, //限制age为数值
  speak:PropTypes.func, //限制speak为函数
}
// 指定默认标签属性值
Person.defaultProps = {
  name:'jack',//sex默认值为男
  age:18 //age默认值为18
}

//渲染组件到页面
ReactDOM.render(<Person name="jerry" age={19}  />,document.getElementById('test'))
```



- **4->提取组件**
  - 将组件拆分为若干个部分
  - 组件1将用户信息传递给组件2，组件2将图片信息传递给组件3，组件3获取到图片信息去展示。
  - 提高组件可复用性，更好的维护组件。

```jsx
// 组件1
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
// 组件2
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
// 组件3
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```



****



### State & 生命周期

> TIP：
>
> - 理解
>   - 1）state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)
>   - 2）组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)
> - 注意
>
>   - 组件中render方法中的this为组件实例对象
>   - 组件自定义的方法中this为undefined，如何解决？a)   强制绑定this: 通过函数对象的bind()或。b)   箭头函数
>   - 状态数据，不能直接修改或更新，需用`setState`

- `State`
  - 问题
    - 1）构造器调用1次
    - 2）render调用1+n次
  - 通过setState进行更新，且更新是一种浅合并，依然可以通过`this.state.isHot`调用。
  - class的方法默认不绑定`this`

```jsx
//1.创建组件
class Weather extends React.Component{
  //构造器调用几次？ ———— 1次
  constructor(props){
    console.log('constructor');
    super(props)
    this.state = {isHot:false,wind:'微风'}
    //解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }

  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render(){
    console.log('render');
    //读取状态
    const {isHot,wind} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
  }

  //changeWeather调用几次？ ———— 点几次调几次
  changeWeather(){
    //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
    //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

    console.log('changeWeather');
    //获取原来的isHot值
    const isHot = this.state.isHot
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({isHot:!isHot})
    console.log(this);

    //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    //this.state.isHot = !isHot //这是错误的写法
  }
}
//2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('test'))
```

> TIP：另外一种写法

```jsx
class Weather extends React.Component{
  //初始化状态
  state = {isHot:false,wind:'微风'}

  render(){
    const {isHot,wind} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
  }

  //自定义方法————要用赋值语句的形式+箭头函数
  changeWeather = ()=>{
    const isHot = this.state.isHot
    this.setState({isHot:!isHot})
  }
}
//2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('test'))
```



****



- **生命周期**
  - 旧版生命周期：![react生命周期旧](http://img.zyugat.cn/zyuimg/react生命周期旧_arZ0HyVa.png)





- 新版生命周期

![react生命周期新](http://img.zyugat.cn/zyuimg/react生命周期新_kVIgnj3H.png)

- 挂载时：
  - 由`ReactDOM.render()`触发---初次渲染
  - `getDerivedStateFromProps`：返回的一个状态对象，状态其实就是`state`。同时也可以获得props和state
  - `componentDidMount`：组件挂载完毕的钩子
- 更新时：
  - 由组件内部`this.setSate()`或父组件重新`render`触发
  - `shouldComponentUpdate`：组件更新前调用
  - `getSnapshotBeforeUpdate`：在准备渲染输出(提交给DOM节点)前调用，其任何返回值都会作为参数传递给`componentDidUpdate`
  - `componentDidUpdate`：他里面的props和state都是上一次的状态，不是最新的。而snapshotValue是刚刚`getSnapshotBeforeUpdate`传递给来的参数
- 卸载时：
  - 由`ReactDOM.unmountComponentAtNode()`触发
  - `componentWillUpdate`：组件将要卸载的钩子

```jsx
// 卸载组件按钮的回调
death = ()=>{  
  ReactDOM.unmountComponentAtNode(document.getElementById('test'))
}
// 强制更新按钮的回调
force = ()=>{
  this.forceUpdate()
}

// ——————挂载时——————
// 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromPropsstatic 
getDerivedStateFromProps(props,state){  
  console.log('getDerivedStateFromProps',props,state);  
  // return {count: 100}	// 这样设置那么count一直都是100  return null}
}
// 组件挂载完毕的钩子
componentDidMount(){  
	console.log('Count---componentDidMount');
}

// ——————更新时——————
// 组件更新前调用
shouldComponentUpdate(){
  console.log('Count---shouldComponentUpdate');
  return true
}
// 更新前，准备交给DOM节点前，返回值交给
getSnapshotBeforeUpdate(){ 	
  console.log('getSnapshotBeforeUpdate');  
	return 'atguigu'
}
// 组件更新完毕的钩子
componentDidUpdate(preProps,preState,snapshotValue){
  console.log('Count---componentDidUpdate',preProps,preState,snapshotValue);
}

// ——————卸载时——————
// 组件将要卸载的钩子
componentWillUnmount(){  
console.log('Count---componentWillUnmount');
}
```



****



### refs & 事件处理

- `refs`
  - 通过给组件标签**定义ref属性**来标识标签（真实DOM），可以直接对标签进行操作。
  - 字符串形式的ref已经是过时的，不推荐使用，存在效率问题，尽可能使用回调形式的。

**字符串形式**

```jsx
// 字符串形式
// 展示输入框的数据
showData = ()=>{
  const {inputRef} = this.refs
  alert(inputRef.value)
}
render(){
  return(
    <div>
    	// 定义ref属性
      <input ref="inputRef" type="text" placeholder="点击按钮提示数据"/>
      <button onClick={this.showData}>点我提示左侧的数据</button>
    </div>
  )
}
```



> TIP：refs回调函数如果以内联函数的方式调用，那么在更新的过程中会执行两次，第一次传入参数null第二次才有值。过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题。

> Pro：内联回调是将 **`元素属性`** 添加到**组件属性**中（`this.inputRef = c`），其中c保存的就是 **`元素属性`**。
>
> 回调：而回调形式需要另写一行代码将 **`元素属性`** 添加到 **组件属性**中。（`saveInput`）

**下面是通过回调形式**

要注意，这里的不从`this.refs`上取，而从`this`上取。因为组件采用**箭头函数**，因此他没有自己的`this`，而往上找`this`就找到`render`**（render的this就是实例对象）**。

```jsx
showData = ()=>{
  // 这里不从this.refs上取，而从this上取
  // 因为采用回调形式的this的挂载到实例上
  const {inputRef} = this
  alert(inputRef.value)
}
// 内联函数回调形式，更新的时候会执行两次
<input ref={c => this.inputRef = c } type="text" placeholder="点击按钮提示数据"/>
  
// 回调形式
saveInput = (c)=>{
  this.input1 = c;
  console.log('@',c);
}
render(){
  return(
    <div>
      <input ref={this.saveInput} type="text"/>
    </div>
  )
}
```



****



>  TIP：
>
>  - React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —— 为了更好的兼容性
>
>  - React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —为了的高效
>
>  - 通过event.target得到发生事件的DOM元素对象 ———————不要过度使用ref

- **事件处理**
  - `e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件。

```jsx
function ActionLink() {
  function handleClick(e) {
    // 阻止默认事件
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      {' '}
      Click me{' '}
    </a>
  );
}
```



- **事件处理程序传递参数**
  - 下面两种方式是等价的，传递参数id

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```



****



### 条件渲染 & 表单

- `if`

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

```



下面例子中，通过获取登陆状态从而判断采用什么组件。

```jsx
render() {  
  // 获取登陆状态
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  // 判断登陆状态
  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;  
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;  
  }  
  // 最后返回
  return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>  );
}
ReactDOM.render(  <LoginControl />,  document.getElementById('root'))
```



- 运算符`&&`
  - 如果unreadMessages存在数据，那么就显示数据长度

```jsx
return (
  <div>
    {' '}
    <h1>Hello!</h1>{' '}
    {unreadMessages.length > 0 && (
      <h2> You have {unreadMessages.length} unread messages. </h2>
    )}{' '}
  </div>
);
```

- 三目运算符

```jsx
return (
  <div>
    {' '}
    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.{' '}
  </div>
);
```



阻止组件渲染，当warn的值为false，那么组件就不会渲染

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning"> Warning! </div>;
}
```



****



> TIP：表单可以通过`event.target.value`获取值

- **表单**
  - 受控组件：输入类的DOM随着你的输入，就会维护到状态(state)中
  - 非受控组件：输入组件如果现用现取就是非受控组件



下面的例子就是受控组件，当输入框的值发生改变的时候就会调用`handleChange`方法，`handleChange`方法会实时的修改状态中的值。

下面使用了计算属性，`[name]`，如果不使用他会直接把值给一个叫name的键。

```jsx
this.state = {inputValue: ''};
// 受控组件
handleChange(event) {

    const value = event.target.value;
    const name = event.target.name;  
    this.setState({[name]: value});
}
handleSubmit(event) 
  alert('提交的名字: ' + this.state.value);  
  event.preventDefault();
}
render() {  
  return (    
    <form onSubmit={this.handleSubmit}>
    <label>
      名字:<input name="inputValue" type="text" onChange={this.handleChange} />      
    </label>
    <input type="submit" value="提交" />    
    </form>  
  );
}
```



****



### 高阶函数和函数柯里化

- 高阶函数

  - 需要满足其中一个条件
    - 1）若A函数，**接收的参数**是一个函数，那么A就可以称之为高阶函数。
    - 2）若A函数，调用的**返回值**依然是一个函数，那么A就可以称之为高阶函数。
  - 若`input`输入框中，`onChange`是带参数的**saveFormData(参数)**则表示将返回值交给onChange
  - 若`input`输入框中，`onChange`是个方法的**this.saveFormData**则表示将该函数交给onChange回调

  下面案例中，`saveFormData`方法获取到input组件传递来的参数`username`，通过`setState`设置`username`的值为输入框的值（通过event事件获取），最后将该行为作为一个方法`return`给**input的onChange**。

```jsx
class Login extends React.Component{
  // 初始化状态
  state = {
    username:''
  }

  // 保存表单数据到状态中
  saveFormData = (dataType)=>{
    return (event) => {
      // 这样要注意的[dataType]
      this.setState({[dataType]: event.target.value})
    }
  }

  // 表单提交的回调
  handleSubmit = (event)=>{
    event.preventDefault() //阻止表单提交
    const {username} = this.state
    alert(`你输入的用户名是：${username}`)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
        <button>登录</button>
      </form>
    )
  }
}
```



****



- **函数柯里化**
  - 特性：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 

```jsx
function sum(a) {
  return b => {
    return c => {
      return a + b + c;
    };
  };
}
const result = sum(1)(2)(3);
```



****



### Key

- **Key**
  - 首先要清楚，更新页面的时候，DOM会将新的虚拟DOM与旧的虚拟DOM**相比较**，如果相同则直接**复用**，若不相同则**更新**。
  - 比较的时候`diffng`是**逐层对比**，每个标签(节点)算一层

```jsx
  render() {
    return (
      <div>
        <h1>hello</h1> <input type="text" />
        {/*只有span标签内会更新，而span标签内的input是不会更新的。*/}
        <span>
          现在是：{this.state.date.toTimeString()} <input type="text" />
        </span>
      </div>
    );
  }
```



- 1）react/vue中的key有什么作用？（key的内部原理是什么？）
- 2）为什么遍历列表时，key最好不要用index?

> 1. key的作用
>
> a。找到相同的key，若内容没变则复用，若内容变了则生成新真实DOM。
>
> b。若找不到相同的key，则生成新真实DOM

- 1. **虚拟DOM中key的作用：**

  - 1）简单的说：**key是虚拟DOM对象的标识**, 在更新显示时key起着极其重要的作用。
  - 2）详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
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





## 脚手架

`yarn add prop-types`

`yarn add axios`

`yarn add http-proxy-middleware`

`yarn add pubsub-js`

`yarn add redux`

`yarn add redux-thunk`

```SHELL
安装：npm i -g create-react-app
创建项目：create-react-app hello-react
进入目录：cd hello-react
启动：yarn start
```

目录结构：

> ​	public ---- 静态资源文件夹
>
> ​		favicon.icon ------ 网站页签图标
>
> ​		index.html -------- 主页面
>
> ​		logo192.png ------- logo图
>
> ​		logo512.png ------- logo图
>
> ​		manifest.json ----- 应用加壳的配置文件
>
> ​		robots.txt -------- 爬虫协议文件
>
> src ---- 源码文件夹
>
> ​		App.css -------- App组件的样式
>
> ​		App.js --------- App组件
>
> ​		App.test.js ---- 用于给App做测试
>
> ​		index.css ------ 样式
>
> ​		index.js ------- 入口文件
>
> ​		logo.svg ------- logo图
>
> ​		reportWebVitals.js			--- 页面性能分析文件(需要web-vitals库的支持)
>
> ​		setupTests.js			---- 组件单元测试的文件(需要jest-dom库的支持)



### TodoList案例

`如果样式错误，则请注释index中的bootstrap样式`

功能：列表，插入删除数据，全选数据，删除选择项数据。

- 添加数据
  - 父组件通过`props`给子组件**传递一个函数**，子组件将数据**放在参数**中

```jsx
// ————添加数据————
// 父组件
<Header addNewList={this.addNewList} />
// 子组件
this.props.addNewList(todoNew)
```



要注意，如果：`onChange={this.handleCheck(id)}`，给按钮绑定了个事件，并且**传参**了，那么函数就必须要使用高阶函数。**(返回值是一个函数)**

```js
handleCheck = id => {
  return e => {}
}
```



**技巧**

当数据放在父组件state中（官方称此操作为：状态提升）

`map`：返回项

`filter`：如果该项为true则返回该项

```jsx
// 1.插入数据，让新数据在前面
const newTodos = [todoNew, ...this.state.todos]
// 2.修改局部数据※※※
c={a:1, b:2}
b = 3
c={...c, b} 
// a:1, b:3
return {...item, done}
// 3.获取键盘按键数字
e.keyCode	
// 13代表回车
// 4.提示框，带确认取消
window.confirm('确定删除吗？')
// 5.Key的绑定，先绑定id然后绑定其他
key={todo.id}
{...todo}
```



****



### Axios

解决跨域的两个方案

- 方案1：

  - 先在本地3000端口找(找public文件夹)，如果没有，那么就会去5000端口的地址找

  - ```jsx
    // package.json
    "proxy": "http://localhost:5000"
    ```

- 方案2

  - ```jsx
    const {createProxyMiddleware} = require('http-proxy-middleware')
    
    module.exports = function (app) {
    	// 带有该前缀的请求(stu)，全部转发给端口5000
    	app.use(
    			// api1前缀的请求，就会触发代理
    			createProxyMiddleware('/api1', {
    				// 请求转发给谁
    				target: 'http://localhost:5000',
    				// 控制服务器收到的请求头的Host字段的值
    				changeOrigin: true,
    				// 重写请求路径
    				pathRewrite: {'^/api1': ''}
    			}),
    			createProxyMiddleware('/api2', {
    				target: 'http://localhost:5001',
    				changeOrigin: true,
    				pathRewrite: {'^/api2': ''}
    			})
    	)
    }
    ```



****



### SearchGithub案例

功能：GITHUB搜索用户名

`avatar_url`：用户头像

**技巧**

```jsx
// 1.解构赋值
const value = this.keyWordElement.value
const {value} = this.keyWordElement
{keyWordElement:{value}} = this

// 2.连续解构赋值
let obj = {a:{b:{c:1}}}
const {a:{b:{c}}} = obj
console.log(c)	
// 1

// 2.5连续解构赋值重命名
const {a:{b:{c:data}}} = obj
console.log(data)	
// 1
```





****



### PubSub订阅机制

`yarn add pubsub-js`

```jsx
1)	import PubSub from 'pubsub-js' // 引入
2)	var token = PubSub.subscribe('delete', function(msg, data){ }); // 订阅
3)	PubSub.publish('delete', data) // 发布消息,组件挂载时 componentDidMount 
4)  PubSub.unsubscribe(token)	// 取消订阅,组件卸载时 componentWillUnmount
```



**折叠技巧**

```jsx
// #region
// #endregion
```



****



### Router

**SPA理解**

1. 单页Web应用（single page web application，SPA）。

2. 整个应用只有**一个完整的页面**。

3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新。**

4. 数据都需要通过ajax请求获取, 并在前端异步展现。



**路由的理解**

- 什么是路由?
  - 一个路由就是一个映射关系(key:value)
  - key为路径, value可能是function或component
- 后端路由
  - 1)   理解： value是function, 用来处理客户端提交的请求。
  - 2)   注册路由： `router.get(path, function(req, res))`
  - 3)   工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
- 前端路由
  - 1)   浏览器端路由，value是component，用于展示页面内容。
  - 2)   注册路由: `<Route path="/home" component={Home}>`
  - 3)   工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件



路由组件放`pages`，一般组件放`components`

两个组件的区别是在于`props`，路由组件会收到`三个固定`属性

**路由组件简单使用**

```
1.导航区的a标签改为Link标签
      <Link to="/xxxxx">Demo</Link>
2.展示区写Route标签进行路径的匹配
      <Route path='/xxxx' component={Demo}/>
3.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
路由组件：
history:
      go: ƒ go(n)
      goBack: ƒ goBack()
      goForward: ƒ goForward()
      push: ƒ push(path, state)
      replace: ƒ replace(path, state)
location:
      pathname: "/about"
      search: ""
      state: undefined
match:
      params: {}
      path: "/about"
      url: "/about"
```



NavLink：点击会有效果，追加一个active

activeClassName：更改点击的样式

```jsx
// index.html
<style>
  .demo {
    background-color: red !important;
    color: white !important;
  }
</style>
// index.jsx
<NavLink activeClassName="demo" className="list-group-item" to={"/Home"}>Home</NavLink>
```



**封装NavLink**

```jsx
<NavLink activeClassName="demo" className="list-group-item" {...this.props}>
  {this.props.children}
</NavLink>
<MyNavLink title="About" to="/About">About</MyNavLink>
```



**Swtich**

只会显示一个**我是Home的内容**，不会显示2个。

Switch的特性就是匹配中一个，就不会往下继续匹配

```jsx
<Switch>
  <Route path="/About" component={About} />
  <Route path="/Home" component={Home} />
  <Route path="/Home" component={Home} />
</Switch>
```



**解决多级路径刷新页面样式丢失的问题**

- 引入样式时不写 ./ 写 / （常用）
- 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
- 使用HashRouter



**路由的严格匹配与模糊匹配**

- 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
- 开启严格匹配：`<Route exact={true} path="/about" component={About}/>`
- 严格匹配不要随便开启，需要再开，有些时候开启会导致**无法继续匹配二级路由**



**Redirect**

一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

```HTML
<Redirect to="/About"/>
```



**嵌套路由**

也就是二级路由，路由地址需要接一级路由home然后往后写

```jsx
<NavLink to="/home/news">News</NavLink>
<Route path="/home/news" component={News} />
```



**路由传参**

- 第一种是用`params`

```jsx
// 第一步：传递参数
<Link to='/demo/test/tom/18'}>详情</Link>

// 第二步：声明接受
<Route path="/demo/test/:name/:age" component={Test}/>

// 第三步：接收参数
const {name, age} = this.props.match.params
```



- 第二种是用`search`

格式：`?key=value&key2=value2`

备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

```jsx
// 第一步：传递参数
<Link to='/demo/test?name=tom&age=18'}>详情</Link>
// 第二步：无需声明接受，直接使用
import qs from 'querystring'
const {id, age} = qs.parse(this.props.location.search.slice(1))
```



- 第三种是`state`

优点是路径没有任何东西

```jsx
// 第一步：传递参数
<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
// 第二步：无需声明接受，直接使用
const {id, title} = this.props.location.state
```



**将默认的路由跳转改为替换**

默认是跳转是push，压栈的方式。改为替换就要用`replace`

给`Link`加一个`replace`就可以

`<MyNavLink replace to="/home/news">News</MyNavLink>`



**编程式路由导航**

借助`this.props.history`对象上的API对操作路由跳转、前进、后退

如果要传state则需要看回上面路由组件的`history`属性，只有push和replace的第二参数是传state

```jsx
-this.props.history.push()
-this.props.history.replace()
-this.props.history.goBack()
-this.props.history.goForward()
-this.props.history.go()
```



**在一般组件上使用路由功能**

一般组件是没有`history`属性的，只有路由组件才有。

那么就需要使用`withRouter`，加工一般组件，使一般组件具备具有组件所特有的API

```jsx
import { withRouter } from 'react-router-dom'
class Header extends Component {...}
export default withRouter(Header);
```



**BrowserRouter与HashRouter的区别**

```jsx
1.底层原理不一样：
      BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
      HashRouter使用的是URL的哈希值。
2.path表现形式不一样
      BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
      HashRouter的路径包含#,例如：localhost:3000/#/demo/test
3.刷新后对路由state参数的影响
      (1).BrowserRouter没有任何影响，因为state保存在history对象中。
      (2).HashRouter刷新后会导致路由state参数的丢失！！！
4.备注：HashRouter可以用于解决一些路径错误相关的问题。
```



### UI组件库

安装ant-design：`yarn add antd`



```
1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.修改package.json
    ....
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },
    ....
3.根目录下创建config-overrides.js
    //配置具体的修改规则
    const { override, fixBabelImports,addLessLoader} = require('customize-cra');
    module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
        lessOptions:{
          javascriptEnabled: true,
          modifyVars: { '@primary-color': 'green' },
        }
      }),
    );
  4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉
```



### Redux

![redux原理图](http://img.zyugat.cn/zyuimg/redux原理图_KBCdbp8C.png)

安装：`yarn add redux`

首先要清楚，Redux可以分为四个文件：

`constant.js`：定义action对象中type类型的常量值

```jsx
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

`count_action.js`：为组件生成Action对象，对应上图的Redux原理图。

```jsx
import { INCREMENT, DECREMENT } from './constant'
// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type: INCREMENT, data})
```

`count_reducer.js`：为组件服务的Reducer函数，具体作用是对数据进行操作。有两个参数之前的状态(preState)，动作对象(action)

```jsx
const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
	//从action对象中获取：type、data
	const {type, data} = action
}
```

`store.js`：保存状态，专门暴露一个store对象

```jsx
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 暴露store
export default createStore(countReducer, applyMiddleware(thunk))
```



- 使用`Redux`分三步

- 第一步：创建`store.js`

- 第二步：创建`count_reducer.js`，用来操作数据

- 第三步：发出操作指令。有两种方式编写

第一种：简单版，直接在组件上写**状态**和**动作对象**

```jsx
// count/index.js
import store from '../../redux/store'

store.dispatch({type:'increment',data:value*1})
```

第二种：完整版，通过调用`count_action.js`的对象操作

```jsx
// redux/count_action.js
export const createIncrementAction = data => ({type:'increment',data})
export const createDecrementAction = data => ({type:'decrement',data})

// count/index.js
// 直接传值就可以了
store.dispatch(createIncrementAction(value*1))
```



同步action，就是指action的值为Object类型的一般对象

```jsx
export const createIncrementAction = data => ({type:INCREMENT,data})
```



异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。

需要安装`yarn add redux-thunk`用以支持异步action

```jsx
// redux/count_action.js
export const createIncrementAsyncAction = (data,time) => {
  // 函数是store调用的，同时也会传一个dipatch，所以可以直接用。
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
	}
}

// redux/store.js
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk))
```



### react-redux

![react-redux模型图](http://img.zyugat.cn/zyuimg/react-redux模型图_tnW9nOXv.png)



- 两个概念
  - UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
  - 容器组件：负责和redux通信，将结果交给UI组件。



**如何创建一个容器组件？**

安装：`yarn add react-redux`

导入：

```jsx
import { connect } from 'react-redux'
```

创建容器组件依靠`connect`函数，其拥有两个参数：

`mapStateToProps`：映射状态，返回值是一个对象，在组件中可以通过`count:state`获取到状态。

`mapDispatchToProps`：映射操作状态的方法，返回值是一个对象

使用`connect`：

```jsx
connect(
  state => ({key:value}),	// 映射状态mapStateToProps
  {key:xxxxxAction}	// 映射操作状态的方法
)(UI组件)
```



**容器组件的store如何传递？**

使用`props`传递，传递有两种方式，方式一：给组件一个一个传递store

```jsx
// ReactRedux/index.js
import store from './Redux/store'

render() {
  return (
      <div>
        <Count store={store} />
      </div>
  );
```

方式二：在外面`index.js`通过`Provider`给所有容器对象传递store

```jsx
import { Provider } from 'react-redux'
import store from './components/ReactRedux/Redux/store'
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
		document.getElementById('root')
);
```



**UI组件如何读取和操作状态？**

通过：`this.props.xxxx`

```jsx
// 在使用connent函数的时候就定义了
this.props.count
```



**总结**

第一步：引入各种包

```jsx
import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../Redux/count_action'
```



第二步：编写UI组件

```jsx
class Count extends Component {...}
```



第三步：使用connent函数

```jsx
export default connect(
		state => ({count: state}),
		// mapDispatchToProps的简写
		{
			jia: createIncrementAction,
			jian: createDecrementAction,
			jiaAsync: createIncrementAsyncAction
		}
)(Count)
```



### 共享数据案例



当需要引入2个及2个以上的`Reducers`时，需要使用`combineReducers`

```jsx
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Count组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	he:countReducer,
	rens:personReducer
})

//暴露store
export default createStore(allReducer,applyMiddleware(thunk))
```



### Redux调试工具

浏览器安装：`Redux DevTools`

下载包：`npm install --save-dev redux-devtools-extension`

```jsx
// store.js
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```



## 扩展

**setState**

更新状态是异步的操作，因此第三行输出0

```jsx
a=0
this.setState({a: a+1})
console.log(this.state.a)	//a:0
```



因此，setState有两种方式：

**对象式**

```jsx
setState(stateChange, [callback])
1.stateChange为状态改变对象(该对象可以体现出状态的更改)
2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
```



**函数式**

```jsx
setState(updater, [callback])
1.updater为返回stateChange对象的函数,改变后的结果
2.updater可以接收到state和props
setState(state=>{count: state.count+1}, [callback])
```



使用原则：

1）如果新状态不依赖于原状态 ===> 使用对象方式

2）如果新状态依赖于原状态 ===> 使用函数方式

3）如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取



****



**lazyLoad**

懒加载，必须用`Suspense`将所有组件包含进来，`fallback`的意思是，在加载的过程种显示一个界面

```jsx
import React, { Component, lazy } from 'react'
//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(()=>import('@/pages/Login'))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading.....</h1>}>
      <Switch>
          <Route path="/xxx" component={Xxxx}/>
          <Redirect to="/login"/>
      </Switch>
  </Suspense>
```



****



### Hooks

Hook是React 16.8.0版本增加的新特性/新语法，可以让你在函数组件中使用 state 以及其他的 React 特性。

三个最常用的Hook

(1).`State Hook: React.useState()`
(2).`Effect Hook: React.useEffect()`
(3).` Ref Hook: React.useRef()`



**State Hook**

让函数组件也可以有state状态, 并进行状态数据的读写操作

语法：`const [data, setData] = React.useState(initValue)`

`useState()`：第一个参数是初始化值，第二个参数是更新状态的函数

`setData()`：参数可以是非函数，也可以是函数。



**Effect Hook**

在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)

语法：

第二个参数如果加了`[]`，就表示只会在第一次render()时调用。（componentDidMount()）

同时如果往第二参数的`[]`里面填写`data`就表示当data值发生改变的时候就会调用。（componentDidUpdate()）

如果第一个参数的函数有`return`则表示卸载前执行。（componentWillUnmount()）

```jsx
useEffect(() => { 
  // 在此可以执行任何带副作用操作
  return () => { // 在组件卸载前执行
    // 在此做一些收尾工作, 比如清除定时器/取消订阅等
  }
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
```



**Ref Hook**

语法：`const refContainer = useRef()`



****



**Fragment**

作用：可以不用必须有一个真实的DOM根标签了，类似Vue的`template`

只能拥有一个`key`属性

```jsx
<Fragment><Fragment>
<></>
```





****



**Context**

组件间的通信，常用于【祖组件】与【后代组件】间通信

```jsx
1) 创建Context容器对象：
	const Context = React.createContext()  
	
2) 渲染子组时，外面包裹Context.Provider, 通过value属性给后代组件传递数据：
	<Context.Provider value={数据}>
		子组件
    </Context.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = Context  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <Context.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```



****



**组件优化**

目前Component有两个问题

1）只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低

2）只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低



**问题所在**：Component中的shouldComponentUpdate()总是返回true



解决办法：

```jsx
办法1: 
	重写shouldComponentUpdate(nextProps,nextState)方法
	比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
办法2:  
	使用PureComponent
	PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
	注意: 
		只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
		不要直接修改state数据, 而是要产生新数据
项目中一般使用PureComponent来优化
```



****



**render props**

向组件内部动态传入带内容的结构(标签)

类似Vue的slot插槽

**children props**

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

**render props**

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 



****



**错误边界**

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

使用方式：

getDerivedStateFromError配合componentDidCatch

```jsx
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```



****



**组件通信总结**

 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

几种通信方式：

		1.props：
			(1).children props
			(2).render props
		2.消息订阅-发布：
			pubs-sub、event等等
		3.集中式管理：
			redux、dva等等
		4.conText:
			生产者-消费者模式

比较好的搭配方式：

		父子组件：props
		兄弟组件：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)









