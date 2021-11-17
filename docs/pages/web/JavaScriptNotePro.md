# JavaScriptNotePro

## 基础

### 一、数据类型

1. undefined与null有区别吗？

- undefined：代表定义未赋值
- null：定义赋了值，值为Null



小知识：用完的对象给null就会被垃圾对象回收

****



2. 什么时候给变量赋值Null

- 初始赋值，表明将要赋值为对象
- 结束前，让对象成为垃圾对象被回收

```javascript
// 初始赋值
let a = null
a = ['x']
// 用完以后，结束前让对象被回收
a = null
```

****



3. 变量类型与数据类型的区别

- 数据的类型
  - 基本类型
    - String、Number、boolean、undefined、null
    - 这些都是数据基本类型
  - 对象类型（和引用类型有点像）
    - Object、Function、Array
    - 这些都是对象类型
- 变量的类型
  - 基本类型：保存就是基本类型的数据
    - 例如我们`var c`，他没有类型，是基本类型的数据
  - 引用类型：保存的是地址值（可以理解为保存的是对象地址）

```javascript
var c = {}
```

- {}：是一个对象
- c：不过只是保存了` {} `这个对象的地址



****



### 二、数据&变量&内存

1. 什么是数据

存储在内存中代表特定信息

特点：可传递，可运算

```javascript
// 可传递，可互相传递
let a = 3
let b = a
// 可运算，可以运算
let b = a +2
```

****



2. 什么是内存

内存是内存条通电后产生的可存储数据的空间（临时）

**内存有2个数据**

- 内部存储的数据
- 地址值

**内存的分类**

- 栈：全局变量、局部变量
- 堆：对象



****



3. 什么是变量

常量是与变量相对于，常量不可改变，而变量可以改变。

- 变量由变量名与变量值组成。
- 每个变量对应一块小内存。
- 变量名用来查找对应的**内存地址**，变量值就是**内存存储的数据**。
- 要分清楚：内存有哪两个数据

```javascript
// 18就是数据，age是变量
// 或：18是变量值，age是变量名
let age = 18
// 通过age（变量名），找到对应的内存
// 通过对应的内存，输出内存中保存的数据
console.log(age)
```

****



4. 赋值的概念

- 对象`{ name:'Tom' }`的地址值是：`0x123`
- 第一行：将对象`{ name:'Tom' }`的地址值 **保存** 到obj里面（内存存储数据的地方）（`obj：0x123`，obj存储着对象的地址值）
- 第二行：a存储的是对象`{ name:'Tom' }`的地址值`（a：0x123）`
- 第三行：
  - 找到obj存储的值
  - 发现是地址值
  - 根据地址值找到对应的内存
  - 扩展：只有变量存储的是地址值才可以 `.`
  - 在内存里面找到`name`，



```javascript
let obj = { name:'Tom' }
let a = obj
console.log(obj.name)
```

****



5. 存储，数据，变量三者关系

- 内存用来存储数据的空间
- 变量是内存的标识（靠这个去查找内存空间）



须知：

在赋值的时候

- 只有是对象的时候，内存才会赋地址值。
- 否则，那么就会拷贝一份值

```javascript
let a = obj
```

![P](http://img.zyugat.cn/zyuimg/js赋值拷贝_JOshPjtC.png)

- 当赋值的是对象，就直接赋对象的内存地址

```javascript
let obj = { name:'Tom' }
```

![对象赋值](http://img.zyugat.cn/zyuimg/js对象赋值_spsF30ut.png)

****



**小问题**

- let a = xxx，a内存保存的是什么？
  - 如果xxx是基本数据：保存的就是这个数据
  - 如果xxx是对象：保存的是对象的地址值
  - 如果xxx是一个变量：保存的xxx的内存内容(可能是基本数据, 也可能是地址值)



****



5. 赋值的扩展

- 第一步：`obj1`和`obj2`保存的内容，都是对象地址，都是指向同一个对象
- 第二步：通过`obj1`修改的是对象内部数据
- 第三步：所以`obj2.name`看到的是，修改后的数据

```javascript
let obj1 = { name:'Tom' }
// 第一步
let obj2 = obj1
// 第二步
obj1.name = 'Mao'
// 第三步
console.log(obj2.name) // 'Mao'
```



****



6. 引用变量赋值问题

- 第一步：在第四行中给`obj`存储的地址，是一个新对象地址。
- 第二步：所以最后打印的是13
- 附：`{age:15}`，保存这个对象的变量，是obj。

```javascript
let a = { age: 13 }
funcition fn (obj) {
  // 第一步：obj保存的地址是新对象的地址
  obj = {age:15}
}
fn(a)
// 第二步
console.log(a.age) // 13
```

对比：

- 第一步：是对地址存储的对象内容进行操作

```javascript
let a = { age: 13 }
funcition fn (obj) {
  // 第一步
  obj.age = 15
}
fn(a)
// 第二步
console.log(a.age) // 15
```

****



7. 值传递

`js`在调用函数时传递变量参数时，是值传递还是引用传递

**是值传递**

- 第三行：前面的 a 是一个新变量 a 。后面的 a 是 3 + 1。
- 他们将4传给`新a`，是不会改变原本的久a=3的。
- 附：不要把值传递和引用传递搞混了

```javascript
let a = 3
funciton fn(a) {
	a = a + 1
}
fn(a)
consolo.log(a)	// 3
```



****



8. JS引擎如何管理内存

内存生命周期

- 分配小内存空间，得到它的使用权
- 存储数据，可以反复进行操作
- 释放小内存空间

释放内存

- 局部变量：函数执行完自动释放
- 对象：首先成为垃圾对象=>然后由垃圾回收器回收



****



### 三、对象

1. 什么是对象

- 多个数据的封装体
- 保存多个数据的容器
- 一个对象代表现实中的一个事物



2. 为什么要用对象

- 统一管理多个数据



3. 对象的组成

- 属性
  - 代表现实事物的**状态**数据
  - 属性名（字符串）和属性值（任意）组成
- 方法
  - 代表现实事物的**行为**数据
  - 一种特别的属性（属性值是函数）



4. 如何访问对象内部数据

- `.属性名`
- `['属性名']`



****



### 四、函数&回调函数

1. 什么是函数?

- 具有特定功能的n条语句的封装体

- 只有函数是可执行的, 其它类型的数据是不可执行的

- 函数也是对象



2. 为什么要用函数?

- 提高代码复用

- 便于阅读和交流



3. 如何定义函数?

- 函数声明

- 表达式



4. 如何调用(执行)函数?

- test()

- new test()

- obj.test()

- test.call/apply(obj)



5. 什么函数是回调函数

- 定义了
- 没有调用
- 最终他执行了



6. 常见的回调函数

- dom事件回调函数
- 定时器回调函数
- ajax请求回调函数
- 生命周期回调函数

```javascript
//1. DOM事件函数
var btn = document.getElementById('btn')
btn.onclick = function () {
  alert(this.innerHTML)
}

//2. 定时器函数
setInterval(function () {
  alert('到点啦!')
}, 2000)
```



****



### 五、IIEF&this

1. IIEF理解

- 全称: Immediately-Invoked Function Expression 立即调用函数表达式
- 别名: 匿名函数自调用



2. 作用

- 隐藏内部实现

- 不污染外部命名空间

```javascript
    (function () {
      let a = 1

      function test() {
        console.log(++a);
      }
      window.$ = function () { // 向外暴露一个全局函数
        return {
          test: test
        }
      }
    })()

    $().test() // $是一个函数，执行返回后一个对象
  </script>
```



3. this是什么?

- 一个关键字, 一个内置的引用变量

- 在函数中都可以直接使用this

- this代表调用函数的当前对象

- 在定义函数时, this还没有确定, 只有在执行时才动态确定(绑定)的



4. 如何确定this的值?

- test()：window

- obj.test()：p

- new test()：新创建的对象

- test.call(obj)：obj

```javascript
  function Person(color) {
    console.log(this)
    this.color = color;
    this.getColor = function () {
      console.log(this)
      return this.color;
    };
    this.setColor = function (color) {
      console.log(this)
      this.color = color;
    };
  }

  Person("red"); //this是谁?
  var p = new Person("yello"); //this是谁?
  p.getColor(); //this是谁?

  var obj = {};
  p.setColor.call(obj, "black"); //this是谁?

  var test = p.setColor;
  test(); //this是谁?

  function fun1() {
    function fun2() {
      console.log(this);
    }
    fun2(); //this是谁?
  }
  fun1();
```



## 函数高级

### 一、原型属性

1. 函数的prototype属性

* 每个函数都有一个prototype属性, 它默认指向一个Object**空对象**(即称为: **原型对象**)
* 原型对象中有一个属性constructor, 它指向函数对象



2. 给原型对象添加属性(一般都是方法)

* 作用: 函数的**所有实例对象**自动拥有原型中的属性(方法)

当在创建每一个函数时，解析器会向函数添加一个属性`prototype`（这就是所谓的原型对象）



****



3. 显示原型与隐式原型

`函数=>构造函数`

`对象=>实例对象`

1）每个函数function都有一个`prototype`，即**显式原型**

```javascript
Fn.prototype
```

2）每个实例对象都有一个`__proto__`，可称为**隐式原型**

```javascript
let fn =new Fn()
fn.__proto__
```

3）**对象的隐式原型的值**对应**构造函数的显式原型的值**

```javascript
fn.__proto__ = Fn.prototype
fn.__proto__ === Fn.prototype
```



4）在定义函数的时候，会自动添加一个`prototype`属性，默认值是一个空Object对象

```javascript
function Fn() {}
this.prototype = {}
```



5）当创建**实例对象**的时候，会自动添加`__proto__`属性，默认值是=>**prototype属性值**

```javascript
function Fn() {}
// 创建一个实例对象
var fn = new Fn()
fn.__proto__ = Fn.prototype	// 默认值是=> prototype的值
```



6）程序员能直接操作显式原型, 但不能直接**操作隐式原型**(ES6之前)

```javascript
	// 定义构造函数
	function Fn() {
    // 内部语句：this.prototype = {}
	}
  var fn = new Fn()	// 内部语句：fn.__proto__ = Fn.prototype
	// 给prototype添加test方法
  Fn.prototype.test = function () {
    console.log('test()')
  }
	// 通过实例调用原型的方法
  fn.test()
```

![显示与隐式原型](http://img.zyugat.cn/zyuimg/js显示与隐式原型_j9WKAKdR.png)



****



### 二、原型链

1. 原型链(图解)

* 访问一个对象的属性时，

* 先在自身属性**(实例对象属性)**中查找，找到返回

* 如果没有, 再沿着`__proto__`这条链向上查找, 找到返回

* 如果最终没找到, 返回undefined

* 别名: 隐式原型链

* 作用: 查找对象的属性(方法)

```javascript
	function Fn() {// 内部语句：this.prototype = {}
		this.test1 = function () {
      console.log('test1()')
    }
  }
  Fn.prototype.test2 = function () {
    console.log('test2()')
  }
  var fn = new Fn()	// 内部语句：fn.__proto__ = Fn.prototype
	// 通过实例调用原型的方法
  fn.test1()
  fn.test2()
  fn.test3()
```

![原型链分析](http://img.zyugat.cn/zyuimg/js原型链分析_OIfAPCKn.png)



总结：

- 在`Object空对象`里同样也有一个`隐式原型`，在找下去就会找到`Object原型对象`，而`Object原型对象`同样也有一个隐式原型，只不过他的值为null



****



2. 构造函数/原型/实体对象的关系(图解)

- o1，o1：有一个隐式原型属性（`__ proto __`）他指向Object的原型对象（`Object.prototype`）



```javascript
var o1 = new Object();
var o2 = {};
```



![构造函数与原型与实体对象的关系小](http://img.zyugat.cn/zyuimg/js构造函数与原型与实体对象的关系小_6UYZkpdf.png)



****



3. 构造函数/原型/实体对象的关系2(图解)

- 1）首先创建一个函数，他有一个显示原型属性（`Foo.prototype`），默认是空的Object对象
  - **此时是构造函数**
  - `function Foo(){  }`
  - ![构造函数与原型与实体对象的关系小图2](http://img.zyugat.cn/zyuimg/js构造函数与原型与实体对象的关系小图2_xh05PJOX.png)



- 2）为什么`Foo`**构造函数**的隐式原型指向`Function`的显示原型？
  - `let Foo = new Function()`
  - `Foo`函数是`Function()`的实例对象，因此`Foo`的`__proto__`指向`Function`的显示原型属性。
  - 根据定义=>当创建实例对象时，**实例对象的隐式原型**对应**构造函数的显示原型**



- **TIP：**所有函数都有一个**隐式原型属性（`__ proto __`）**指向大写**Funcion的显示原型属性（`Funcion.prototype`）**具体为什么？看下面。



- 3）为什么`Function`的隐式原型指向自身的显示原型？
  - `Function = new Function()`
  - 因为`Function`是`Function()`的实例对象，那么**隐式原型**必定指向**显示原型**
  - ![构造函数与原型与实体对象的关系小图1](http://img.zyugat.cn/zyuimg/js构造函数与原型与实体对象的关系小图1_PE3ZyVQN.png)



- 4）我们继续看图：
  - `let Object = new Function()`
  - 我创建了一个新的函数名为Object，他的隐式原型同样也会指向`Function`的显示原型，因为他也是`New Function`产生的
  - ![构造函数与原型与实体对象的关系小图3](http://img.zyugat.cn/zyuimg/js构造函数与原型与实体对象的关系小图3_PxgeZ4G4.png)



> 最关键是要掌握一点：
>
> **构造函数隐式原型**指向Function的显示原型（也可以说指向Function的构造函数的显示原型）
>
> 而构造函数实例化后：**实例对象隐式原型**=>构造函数的显示原型
>
> **实例对象的隐式原型=构造函数的显示原型**

- 5）总结：

  - 所有**构造函数**都是通过`new Function`产生
  - 所有函数的**构造函数**的`__proto__`都是指向`Function`的显示原型，因为都是由`new Function`产生
  - 这里做个小总结：所有的**函数对象**都是`Function`函数的**实例对象**，因此函数的**隐性原型属性**都是**一样**的。然后这些函数都有**各自自己的显性原型属性**，他们自己创建的实例对象，与其隐性原型属性地址值相等。

  

```javascript
function Foo(){  }
let Foo = new Function()
Function = new Function()
```



![构造函数与原型与实体对象的关系](http://img.zyugat.cn/zyuimg/js构造函数与原型与实体对象的关系_Bgng2pKD.png)



****



4）函数的显示原型指向的对象默认是空Object实例对象(但Object不满足)

```javascript
console.log(Fn.prototype instanceof Object) // true
console.log(Object.prototype instanceof Object) // false
console.log(Function.prototype instanceof Object) // true
```



5）所有函数都是Function的实例(包含Function)

```javascript
console.log(Function.__proto__===Function.prototype)
```



6）Object的原型对象是原型链尽头

```javascript
console.log(Object.prototype.__proto__) // null
```



****



### 三、instanceof

表达式：`A instanceof B`

判断B函数的显示原型对象是否在A对象的原型链上（A原型链**是否存在**B的显示原型）

A是一个实例对象

B是一个构造函数对象



1. 例一

- ```javascript
  function Foo() {  }
  var f1 = new Foo();
  console.log(f1 instanceof Foo);// true
  console.log(f1 instanceof Object); // true
  ```

- `f1`是实例对象，而`Foo`是构造函数对象

- 函数的实例对象默认是一个空的Object对象，然后又因为（**实例对象的隐式原型=构造函数的显示原型**），所以：如图

  - ![instanceof2](http://img.zyugat.cn/zyuimg/instanceof2_GeZQo7JS.png)

- ![instanceof](http://img.zyugat.cn/zyuimg/instanceof_Go0uFDxc.png)



****



2. 例二

```javascript
console.log(Object instanceof Function);// true
console.log(Object instanceof Object);// true
console.log(Function instanceof Function);// true
console.log(Function instanceof Object);// true

function Foo() {}
console.log(Object instanceof  Foo);// false
```



1）Function作为构造函数看显示原型，Object作为实例对象看隐式原型，其他就没什么好说了，自行看图。

![instanceof3](http://img.zyugat.cn/zyuimg/instanceof3_Bnh21bpk.png)



```javascript
function Foo() {  }
var f1 = new Foo();
let o1 = new Object()
console.log(f1 instanceof Foo);// true
console.log(f1 instanceof Object); // true
```

![instanceof4](http://img.zyugat.cn/zyuimg/instanceof4_iiRaxo3s.png)



****



### 原型链的总结

- **显示原型与隐式原型**
  - 显示原型：`prototype`
  - 隐式原型：`__proto__`
  - 构造函数有：**显示原型**
    - 构造函数隐式原型永远指向Function显示原型
  - 实例对象有：**隐式原型**
- 访问属性
  - 访问一个属性的时候，是先在自身属性找，找不到就沿着**隐式原型**向上找，最终找不到会返回undefined
  - **小提示**：我们是在沿着**实例对象**上找。
- 定理1：`Object`的原型对象是**原型链的尽头**。
- 定理2：实例对象的隐式原型**永远等于**构造函数显示原型。
  - 红线是**显示原型**，**显示原型**指向显示原型属性。
  - 紫线是**隐式原型**，而显示原型指向哪里，**隐式原型**就会跟着指向哪里。
  - ![原型总结1](http://img.zyugat.cn/zyuimg/js原型总结1_dhPefQ8O.png)
- **定理3**：构造函数的**显示原型属性**默认是**空的Object实例对象**。（除了Object）
- **定理4**：所有**函数对象**都是`Function`的**实例对象**。（包括Function）
- **定理4**：所有**构造函数**的隐式原型必定指向`Function`的显示原型。
- **定理5**：`Object`隐式原型指向`Function`的显示原型。



****



###  四、执行上下文

- 1）代码可以分为两类：
  - 全局代码和局部代码

- 2）全局执行上下文

  - 第一步：在执行全局代码前将`window`确定为**全局执行上下文**
  - 第二步：对全局数据进行预处理
    - var定义的全局变量==>undefined, 添加为window的属性
    - function声明的全局函数==>赋值(fun), 添加为window的方法
    - this==>赋值(window)
  - 第三步：开始执行全局代码

  - 全局执行上下文：我们找a1，其实就是去`window`里面找

  ```javascript
  console.log(a1, window.a1)
  var a1 = 3
  ```

  

- 3）函数执行上下文
  - 第一步：在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象
  - 第二步：对局部数据进行预处理
    - 形参变量==>赋值(实参),添加为执行上下文的属性
    - arguments==>赋值(实参列表), 添加为执行上下文的属性
    - var定义的局部变量==>undefined, 添加为执行上下文的属性
    - function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
    - this==>赋值(调用函数的对象)
  - 第三步：开始执行函数体代码

```javascript
function a2() {
  console.log('a2()')
}
console.log(a2)
```



4）具体流程

在全局代码执行前，JS会创建一个**栈**来管理所有的**执行上下文对象**

在全局执行上下文(window)确定后, 将其添加到栈中(压栈)

在函数执行上下文创建后, 将其添加到栈中(压栈)

在当前函数执行完后,将栈顶的对象移除(出栈)

当所有的代码执行完后, 栈中只剩下window

```javascript
var a = 10
var bar = function(x) {
  var b = 5
  fn(x + b)
}

var fn = function(y) {
  var c = 5
  fn(a + c + y)
}

bar(10)
```

![执行上下文](http://img.zyugat.cn/zyuimg/js执行上下文_4BSkV4Lf.png)



5）实例

问题1：输出什么？

答：1 2 3 3 2 1

解：i从1开始，输出`1 2 3`，当i为4时结束函数。因此后半段是`3 2 1`



问题2：一共产生了几个执行上下文？

答：5个，一共调用了4次函数和一个window

解：当i为4时，执行上下文栈中是这样的：

`f(4)=>f(3)=>f(2)=>f(1)=>window`

从栈顶`f(4)`开始移除



```javascript
foo(1)
function foo(i) {
  if(i === 4){
    return
  }
  console.log('start' + i)
  foo(i + 1)
  console.log('end' + i)
}
```



****



### 五、作用域

1. 是什么？

- 作用域是一块区域，代码段所在的区域
- 它是静态的（相对于上下文对象），在编写代码的时候就确定了

2. 分类

- 全局作用域
- 函数作用域
- 块作用域

3. 作用

- 隔离变量



4. 作用域与执行上下文的区别

- 区别1：
  - 全局作用域之外，每个函数都会**创建自己的作用域**，作用域在函数定义时就已经确定了。而**不是在函数调用时**
  - 全局执行上下文环境是在**全局作用域确定之后**, js代码马上执行之前创建
  - 函数执行上下文环境是在**调用函数时**, 函数体代码执行之前创建
- 区别2：
  - 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化
  - 上下文环境是动态的, 调用函数时创建, 函数调用结束时上下文环境就会被释放
- 联系
  - 上下文环境(对象)是从属于所在的作用域
  - 全局上下文环境==>全局作用域
  - 函数上下文环境==>对应的函数使用域



作用域链：![作用域链](http://img.zyugat.cn/zyuimg/js作用域链_G7muSMFA.png)



****



### 六、闭包

1. 如何产生闭包

- 当一个嵌套的**内部(子)函数引用**了嵌套的**外部(父)函数的变量**(函数)时, 就产生了闭包

```javascript
function a1() {
  var a = 1
  function a2() {
    console.log(a)
  }
  return a2
}
a1()
```



2. 闭包是什么？

- 使用chrome调试查看
- 理解一：闭包是嵌套的内部函数(绝大部分人)
- 理解二：包含被引用变量(函数)的**对象**(极少数人)
- 注意: 闭包存在于嵌套的内部函数中
- 有一个嵌套的函数，内部函数与外部函数，内部函数引用外部函数的局部变量/函数
- 闭包是一个对象，保存在内部函数的对象，对象内包含被引用的变量



3. 常见的闭包

- 将函数作为另一个函数的返回值
- 将函数作为实参传递给另一个函数调用



4. 产生闭包的条件

- 函数嵌套
- **内部函数引用了外部函数的数据(变量/函数)**



5. 闭包的作用

- 使用函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)
- 让函数外部可以操作(读写)到函数内部的数据(变量/函数)



6. 在函数外部能直接访问函数内部的局部变量吗?

- 一般不能，但是可以通过闭包让外部操作它

```javascript
  function fn1() {
    var a = 2
    function fn2() {
      a++
      console.log(a)
      // return a
    }
    function fn3() {
      a--
      console.log(a)
    }
    return fn3
  }
  var f = fn1()
  f() // 1
  f() // 0
```



7. 闭包的生命周期

- 产生：在嵌套内部函数定义执行完时就产生了(不是在调用)

  - ```javascript
    var f = fn1()
    ```

    

- 死亡：在嵌套的内部函数成为垃圾对象时

  - ```javascript
    f = null
    ```



8. 闭包的缺点

- 函数执行完后, 函数内的局部变量没有释放, 占用内存时间会变长
- 容易造成内存泄露

解决办法：

- 能不用闭包就不用
- 及时释放



面试题1

首先我们执行了`object.getNameFunc()`然后执行执行函数`()`，所以这里的this是window

```javascript
// 代码片段一
var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    return function(){
      return this.name;
    };
  }
};
alert(object.getNameFunc()());  //?  the window

// 代码片段二
var name2 = "The Window";
var object2 = {
  name2 : "My Object",
  getNameFunc : function(){
    var that = this;
    return function(){
      return that.name2;
    };
  }
};
alert(object2.getNameFunc()()); //?  my object
```



面试题2

- 如果用同一个闭包，值不会变
- 如果创建了一个新闭包，值就用新的闭包

```javascript
  function fun(n,o) {
    console.log(o)
    return {
      fun:function(m){
        return fun(m,n)
      }
    }
  }
  var a = fun(0)
  a.fun(1)
  a.fun(2)
  a.fun(3)//undefined,0,0,0

  var b = fun(0).fun(1).fun(2).fun(3)//undefined,0,1,2

  var c = fun(0).fun(1)
  c.fun(2)
  c.fun(3)//undefined,0,1,1
```



****



### 函数高级补充

1. 变量与函数提升

- 1）变量声明提升
  - 通过var定义（声明）的比那里，在定义语句之前就可以访问到
  - 值：undefined

- 2）函数声明提升
  - 通过function声明的函数，在之前就可以直接调用
  - 值：函数定义（对象）



2. 内存溢出

- 当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误



3. 内存泄露

- 用的内存没有及时释放
- 内存泄露积累多了就容易导致内存溢出
- 常见的内存泄露:
  - 意外的全局变量
  - 没有及时清理的计时器或回调函数
  - 闭包



****



## 面向对象

### 一、对象创建模式

> 1. 方法一：Object构造函数模式
> 2. 方式二: 对象字面量模式
> 3. 方式三: 工厂模式
> 4. 方式四: 自定义构造函数模式
> 5. 方式五: 构造函数+原型的组合模式

1. 方法一：Object构造函数模式

- 套路: 先创建空Object对象, 再动态添加属性/方法
- 适用场景: 起始时不确定对象内部数据
- 问题: 语句太多

```javascript
/*
一个人: name:"Tom", age: 12
 */
// 先创建空Object对象
var p = new Object()
p = {} //此时内部数据是不确定的
// 再动态添加属性/方法
p.name = 'Tom'
p.age = 12
p.setName = function (name) {
  this.name = name
}

//测试
console.log(p.name, p.age)
p.setName('Bob')
console.log(p.name, p.age)
```



2. 方式二: 对象字面量模式

- 套路: 使用{}创建对象, 同时指定属性/方法
- 适用场景: 起始时对象内部数据是确定的
- 问题: 如果创建多个对象, 有重复代码

```javascript
var p = {
  name: 'Tom',
  age: 12,
  setName: function (name) {
    this.name = name
  }
}

//测试
console.log(p.name, p.age)
p.setName('JACK')
console.log(p.name, p.age)

var p2 = {  //如果创建多个对象代码很重复
  name: 'Bob',
  age: 13,
  setName: function (name) {
    this.name = name
  }
}
```



3. 方式三: 工厂模式

- 套路: 通过工厂函数动态创建对象并返回
- 适用场景: 需要创建多个对象
- 问题: 对象没有一个具体的类型, 都是Object类型

```javascript
  function createPerson(name, age) { //返回一个对象的函数===>工厂函数
    var obj = {
      name: name,
      age: age,
      setName: function (name) {
        this.name = name
      }
    }

    return obj
  }

  // 创建2个人
  var p1 = createPerson('Tom', 12)
  var p2 = createPerson('Bob', 13)

  // p1/p2是Object类型

  function createStudent(name, price) {
    var obj = {
      name: name,
      price: price
    }
    return obj
  }
  var s = createStudent('张三', 12000)
  // s也是Object
```



4. 方式四: 自定义构造函数模式

- 套路: 自定义构造函数, 通过new创建对象
- 适用场景: 需要创建多个类型确定的对象
- 问题: 每个对象都有相同的数据, 浪费内存

```javascript
  //定义类型
  function Person(name, age) {
    this.name = name
    this.age = age
    this.setName = function (name) {
      this.name = name
    }
  }
  var p1 = new Person('Tom', 12)
  p1.setName('Jack')
  console.log(p1.name, p1.age)
  console.log(p1 instanceof Person)

  function Student (name, price) {
    this.name = name
    this.price = price
  }
  var s = new Student('Bob', 13000)
  console.log(s instanceof Student)

  var p2 = new Person('JACK', 23)
  console.log(p1, p2)
```



5. 方式五: 构造函数+原型的组合模式

- 套路: 自定义构造函数, 属性在函数中初始化, 方法添加到原型上
- 适用场景: 需要创建多个类型确定的对象

```javascript
  function Person(name, age) { //在构造函数中只初始化一般函数
    this.name = name
    this.age = age
  }
  Person.prototype.setName = function (name) {
    this.name = name
  }

  var p1 = new Person('Tom', 23)
  var p2 = new Person('Jack', 24)
  console.log(p1, p2)
```



****



### 二、继承模式

1. 原型链的继承

- 定义父类型构造函数

  - ```javascript
    //父类型
    function Supper() {
      this.supProp = 'Supper property'
    }
    ```

- 给父类型的原型添加方法

  - ```javascript
    Supper.prototype.showSupperProp = function () {
      console.log(this.supProp)
    }
    ```

- 定义子类型的构造函数

  - ```javascript
    //子类型
    function Sub() {
      this.subProp = 'Sub property'
    }
    ```

- 创建父类型的对象赋值给子类型的原型

  - ```javascript
    // 子类型的原型为父类型的一个实例对象
    Sub.prototype = new Supper()
    ```

- 将子类型原型的构造属性设置为子类型

  - ```javascript
    // 让子类型的原型的constructor指向子类型
    Sub.prototype.constructor = Sub
    ```

- 给子类型原型添加方法

  - ```javascript
    Sub.prototype.showSubProp = function () {
      console.log(this.subProp)
    }
    ```

- 创建子类型的对象: 可以调用父类型的方法

  - ```javascript
    var sub = new Sub()
    sub.showSupperProp()
    // sub.toString()
    sub.showSubProp()
    ```

- 最后：

```javascript
//父类型
function Supper() {
  this.supProp = 'Supper property'
}
Supper.prototype.showSupperProp = function () {
  console.log(this.supProp)
}

//子类型
function Sub() {
  this.subProp = 'Sub property'
}

// 子类型的原型为父类型的一个实例对象
Sub.prototype = new Supper()
// 让子类型的原型的constructor指向子类型
Sub.prototype.constructor = Sub
Sub.prototype.showSubProp = function () {
  console.log(this.subProp)
}

var sub = new Sub()
sub.showSupperProp()
// sub.toString()
sub.showSubProp()

console.log(sub)  // Sub
```



****



2. 借用构造函数继承(假的)

- 定义父类型构造函数

  - ```javascript
    function Person(name, age) {
      this.name = name
      this.age = age
    }
    ```

- 定义子类型构造函数

  - ```javascript
    function Student(name, age, price) {
      /*this.name = name
      this.age = age*/
      this.price = price
    }
    ```

- 在子类型构造函数中调用父类型构造

  - ```javascript
    Person.call(this, name, age)  // 相当于: this.Person(name, age)
    ```

- 关键：在子类型构造函数中通用call()调用父类型构造函数

```javascript
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  function Student(name, age, price) {
    Person.call(this, name, age)  // 相当于: this.Person(name, age)
    /*this.name = name
    this.age = age*/
    this.price = price
  }

  var s = new Student('Tom', 20, 14000)
  console.log(s.name, s.age, s.price)
```



3. 组成继承

- 利用原型链实现对父类型对象的方法继承
  - `Student.prototype = new Person()` // 为了能看到父类型的方法
- 最后修正下
  - `Student.prototype.constructor = Student` //修正constructor属性



作用域的作用是 隔离变量，可以在不同的作用域定义相同名称是变量 不冲突

`a.b`是沿着a的原型链找b，找不到返回`underfind`

`window.a`，找不到返回`underfind`

`a`，找不到报错。



- NEW一个对象背后做了什么？

- 创建一个空对象

- 给对象设置`__ proto __`，值为构造函数对象的prototype属性值

  - ```javascript
    this.__proto__ = Fn,protytype
    ```

- 执行构造函数体（给对象添加属性/方法）







## 线程机制与事件机制

### 一、进程与线程

1. 什么是进程？

- 程序的一次执行, 它占有一片独有的内存空间



2. 什么是线程？

- CPU的基本调度单位, 是程序执行的一个完整流程



3. 进程与线程补充

- 一个进程中一般至少有一个运行的线程: **主线程**，进程启动后自动创建
- 一个进程中也可以**同时运行多个线程**, 我们会说程序是**多线程运行**的
- 一个进程内的**数据**可以供其中的多个线程**直接共享**
- 多个进程之间的数据是**不能直接共享**的

- 线程池(thread pool): 保存多个线程对象的容器, 实现线程对象的反复利用

![线程](http://img.zyugat.cn/zyuimg/js线程_liWzMQlJ.png)



4. 什么是**多进程**与**多线程**？

- 一应用程序可以同时启动多个实例运行
- 在一个进程内, 同时有多个线程运行



5. 单线程与多线程的的区别

- 多线程
  - 优点：
    - 能有效提升CPU的利用率
  - 缺点：
    - 创建多线程开销
    - 线程间切换开销
    - 死锁与状态同步问题
- 单线程
  - 优点
    - 顺序编程简单易懂
  - 缺点
    - 效率低





6. JS是单线程还是多线程?

- js是单线程运行的
- 但使用H5中的 Web Workers可以多线程运行



7. 浏览器运行是单线程还是多线程?

- 都是多线程运行的



****



### 二、定时器与JS单线程

1. 定时器真是定时执行的吗?

- 定时器并不能保证真正定时执行
- 一般会延迟一丁点(可以接受), 也有可能延迟很长时间(不能接受)



2. 定时器回调函数是在分线程执行的吗?

- 在主线程执行的,**js是单线程的**
- 当弹窗弹出来的时候，主线程执行会暂停，所以计时器也会暂停。

```javascript
  setTimeout(function () {
    console.log('timeout 2222')
  }, 2000)
  function fn() {
    console.log('fn()')
  }
  fn()

  console.log('alert()之前')
  alert('------') //暂停当前主线程的执行, 同时暂停计时, 点击确定后, 恢复程序执行和计时
  console.log('alert()之后')
```



3. 定时器如何实现？

- 事件循环模型(后面讲)

4. js代码的分类

- 初始化代码
- 回调代码

5. js引擎执行代码的基本流程

- 第一步：先执行初始化代码: 包含一些特别的代码 回调函数(异步执行)
  - 设置定时器
  - 绑定事件监听
  - 发送ajax请求
- 第二步：后面在某个时刻才会执行回调代码



****



### 三、浏览器内核&事件循环模型

1. 浏览器内核由很多模块组成

- 主线程：
  - js引擎模块 : 负责js程序的编译与运行
  - html,css文档解析模块 : 负责页面文本的解析
  - dom/css模块 : 负责dom/css在内存中的相关处理
  - 布局和渲染模块 : 负责页面的布局和效果的绘制
- 分线程：
  - 定时器模块 : 负责定时器的管理
  - 网络请求模块 : 负责服务器请求(常规/Ajax)
  - 事件响应模块 : 负责事件的管理



2. 事件循环模型

![事件循环模型](http://img.zyugat.cn/zyuimg/js事件循环模型_SCNoDzPg.png)

- 所有代码分类
  - 初始化执行代码(同步代码): 包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
  - 回调执行代码(异步代码): 处理回调逻辑
- js引擎执行代码的基本流程:
  - 初始化代码===>回调代码
- 模型的2个重要组成部分:
  - 事件(定时器/DOM事件/Ajax)管理模块
  - 回调队列
- 模型的运转流程
  - 执行初始化代码, 将事件回调函数交给对应模块管理
  - 当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中
  - 只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行



相关重要概念

1. 执行栈
   execution stack
   所有的代码都是在此空间中执行的

2. 浏览器内核
   browser core
   js引擎模块(在主线程处理)
   其它模块(在主/分线程处理)

3. 任务队列
   task queue

4. 消息队列
   message queue

5. 事件队列
   event queue

6. 事件轮询
   event loop
   从任务队列中循环取出回调函数放入执行栈中处理(一个接一个)

7. 事件驱动模型
   event-driven interaction model

8. 请求响应模型
   request-response model
   同一个: callback queue



