# TypeScript

```sh
npm i typescript -g

yarn tsc -v
```



运行

```sh
tsc hello.ts

# 自动监听
tsc hello.ts -w

# 运行js
node hello.js
```



## 基本数据类型

> - 基本类型、类型校验、类型推断：可选值`?`
> - union：联合声明 `|`
> - any：任意类型
> - unknown：未知类型和any一样不同点在于**需要明确类型后赋值**。
> - void & never
>   - 区别点在于 `void` 可用于返回值但返回值必须是 null 或 undefined，而 `never` 不存在返回值。
> - null & undefined
> - 函数
>   - 函数的定义分为 函数声明 和 函数表达式 定义。
>   - 函数定义 需要对输入输出进行约束。
>   - 函数表达式中的 `=>` 不同于ES6的箭头函数，`=>` 的左边是输入类型，右边是输出类型。
>   - 重载、默认参数、可选参数`?`、剩余参数`...rest`。

### 基本类型

- JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object types）。
- 原始数据类型包括：Boolean、Number、String、Array、Tuple元组、Enum枚举、Unknown、Any、Void、Null 和 Undefined、Never。Object表示非原始类型
- 数组和元组的区别在于，元组各元素的类型不必相同。
- 使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以。

当限定对象值类型时，可以声明为对象、数组、原型对象。

```typescript
// 定义基本类型
const num:number = 100
const str:string = 'zyugat'
const boo:boolean = true
let obj:object = {'zyugat', 100}

// 限定对象值类型
let obj:{name: string,year:number}
obj = {} // 使用字面量声明对象
obj = [] // 数组是对象
obj = Object.prototype // 原型对象
obj='zyugat' // 报错，改变了类型为字符串

// 数组
let str:string[] =[]
let arr:Array<string> =[]
let arr = new Array<string>(3).fill('zyugat.com')

// 元组
let arr:[string, number, boolean]
arr = ['zyugat.com', 2090, true]
```



`?` ：可选值

```ts
// 加 ? 代表非必选
let obj:{name: string,year:number,url?:string}
```



**类型校验**

编译时会报错，因为a不为数字

```js
// 类型校验
function sum(a:number,b:number){
	return a+b;
}
console.log(sum('a',3)) 
```



**类型推断**

当没有明确设置类型时，系统会根据值推断变量的类型

```js
// 字符串
let str = 'zyugat';	// let str: string
str = 18;	// 报错
```



****



### union & any

他们两个的区别可以理解为 前者 union 是或运算，而 any 是包含全部。

`union`：联合声明。`|`

```ts
// 1、变量声明字符串或数值类型
let all:string | number = 'zyugat'

// 2、数组声明多种类型
let all:(string | number | boolean)[]  = []
hd.push('zyugat.com',2010,true)

// 3、泛型方式声明
let all:Array<string|number|boolean>  = []
hd.push('zyugat.com',2010,true)
```



`any`：指包含所有值的顶部类型，任意值。

所以any不进行类型检查，等于关闭了 TS 对该变量的严格类型校验。

```ts
let all:any

//以下赋值不会报错
all='zyugat'
all=2010
all=true
all=[]
all={}
all=class{}
```

any的例子中，如果加入了 any 那么调用show 方法就不会报错。这是不好的，所以不要泛用 any。

```ts
class Hd {
    constructor() { }
}
const obj:any = new Hd;	// 没有报错终止，提示没有show方法。×
const obj = new Hd;	// 会报错终止，提示没有show方法。√
obj.show()
```



****







### unknown

`unknown`：类型也是顶部类型这与 any 一样。**unknown 赋值时要求明确类型，unknown 需要明确类型后赋值，any 则不需要。**

> 用于表示未知的类型、unknown 进行 TS 的类型检查、需要 as **类型断言**来转换类型。

```ts
let any: any = '文本'
let unknown: unknown = 'wenben'

let a: string = any
let b: string = unknown // 报错: 'unknown'未知类型不能赋值给'string'类型
let c: string = unknown as string

// 数值转换
let num: string = '99'
let d: number = num as unknown as number
```



****



### void & never

void & never：区别点在于 `void` 可以有返回值但返回值必须是 null 或 undefined，而 `never` 不存在返回值。



`void`：值为 null 或undefined，

如果 TS 配置开启了 `strict` 或 `strictNullChecks`则不允许 void 为null，严格模式下只能是 undefined。。

```ts
function hd(): void {
  console.log('zyugat')
  return null
//  return 'zyugat'	// 会报错
}
```



`never`：是永远不会结束的函数，不存在返回值。



****



### null & undefined

` null & undefined`：用于定义值为 null 或 undefined

当配置项启用 `strictNullChecks` 时，null 与 undefined 只能赋值给 void、null、undefined 类型（`let hd:string =undefined; //配置strictNullChecks=true 时将报错`）

```ts
function getName(): string | null {
  return null
}
console.log(getName())
```



****



### 函数

```ts
let fun:Function
fun = ()=>'Hello World'
console.log(fun());
```



**函数定义**

函数定义有两种方式：函数声明定义 和 函数表达式

```ts
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y
}
// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y
}
```



其中，可以对函数进行**输入输出约束**：

函数声明定义

```ts
// 函数声明定义
function sum(x: number, y: number): number {
    return x + y;
}

```

函数表达式定义

**在TS中 `=>` 是表示函数的定义，左边是输入类型，右边是输出类型。**

`定义1` 中我仅对 **输出类型** 做了约束，没有对 **输入类型** 做约束，所以在 `定义2` 中我进行了补全。

```ts
// 函数表达式定义 1
let mySum = function (x: number, y: number): number {
  return x + y
}
// 函数表达式定义 2
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}

// 对象结构
type mySumFunc = (x: number, y: number) => number
// 函数定义
let mySum: mySumFunc = (x: number, y: number): number => {
  return x + y
}
```



**重载定义**

**输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。**

重复定义了多次函数 `reverse`，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

```ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
```



**参数类型**

c：**默认值参数**可以不传，默认值是0.8。

d：**可选参数**可以不传，没有默认值。

```ts
function sum(a: number, b: number, c: number = 0.8, d?: number) {
  return a + b + c + d
}
console.log(sum(3, 3, 3, 3))
```



**剩余参数**

使用 `...rest` 获取

```ts
function sum(...args: any[]): number {
  return args.reduce((s, n) => s + n, 0)
}

console.log(sum(1, 2, 3, 4, 5))
```



****



## 断言使用

> - as & const：断言 和 只读断言
> - 解构
>   - 函数的返回值是个数组，包含字符串和函数。如果通过解构的方法获取，TS 无法判断他们的类型，所以会报错。
>   - **通过断言的方式，指定类型。**
> - 非空断言：声明该该不为空`!`
> - 枚举：`enum`

### as & const

用户断定这是什么类型，不使用系统推断的类型。

```ts
值 as 类型
// 或
<类型>值

function hd(arg: number) {
  return arg ? 'name' : 2030
}

let f = hd(1) as string //let f: string
let f = <string>hd(1) //let f: string
```



const断言：只读断言

```ts
const hd = 'name' //const hd: "name"
let xj = 'name' //let xj: name

// 对象转换为只读属性
let user = { name: 'name' } as const
```



****



### 解构

函数的返回值是个数组，包含字符串和函数。如果通过解构的方法获取，TS 无法判断他们的类型，所以会报错。

调用时**对返回值断言**、在函数体内声明返回类型、使用 const

```ts
function foo() {
  let a = 'name'
  let b = (x: number, y: number): number => x + y
  return [a, b]
}
let [n, m] = foo()
// 报错：因为类型可能是字符串，所以不允许调用
m(1, 6)

// 断言 Function
console.log((m as Function)(1, 2))
// 断言 对象解构
console.log((m as (x: number, y: number) => number)(1, 5))

// 对 foo 函数的返回值 声明返回类型
let [n, m] = foo() as [string, (x: number, y: number) => number]
console.log(m(9, 19))

// 在函数体内声明返回类型
function foo() {
  let a = 'name'
  let b = (x: number, y: number): number => x + y
	return [a, b] as [typeof a, typeof b]
}

// 使用 as const
function foo() {
  let a = 'name'
  let b = (x: number, y: number): number => x + y
  return [a, b] as const
}
const [x, y] = foo() //变量 y 的类型为 () => void
```



同时也可以使用泛型的方式解决：具体看下面->泛型->解构



****



### 非空断言

获取的值可能是null，那么需要使用 `as` 断言类型或使用 `!` 声明非null

```ts
const el: HTMLDivElement = document.querySelector('.bd') as HTMLDivElement
const el: HTMLDivElement = document.querySelector('.bd')!
```



****



### Enums 枚举

枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射。

```ts
enum Days {
  Sun, // 0
  Mon, // 1
  Tue, // 2
  Wed, // 3
  Thu, // 4
  Fri, // 5
  Sat, // 6
}
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```



当某个字段设置数值类型的值后，**后面的在它基础上递增**。

```ts
enum Days {
  Sun=10, // 10
  Mon, // 11
  Tue, // 12
  Wed, // 13
  Thu, // 14
  Fri, // 15
  Sat, // 16
}
```



常数枚举：使用 `const enum` 定义的枚举类型

区别在于，它会在编译阶段被删除，并且不能包含计算成员。

```ts
const enum Directions {
  Up,
  Down,
}

let directions = [Directions.Up, Directions.Down]

// 编译后:
var directions = [0 /* Up */, 1 /* Down */];
```

外部枚举（Ambient Enums）是使用 `declare enum` 定义的枚举类型：

只会用于编译时的检查，编译结果中会被删除。

```ts
declare enum Directions {
  Up,
  Down,
}
let directions = [Directions.Up, Directions.Down]
// 编译后:
var directions = [0 /* Up */, 1 /* Down */];
```



****



## 类

> - 类的定义
> - 修饰符
> - 类的属性
>   - **`constructor、static、get/set、abstract`**

类的定义

通过约束数组的类型为`User`，使其成员只能是 User 类型对象

```ts
class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  info(): string {
    return `${this.name}的年龄是 ${this.age}`
  }
}

const u2 = new User('name1', 12)
const u1 = new User('name2', 18)

const users: User[] = [u1, u2]
console.log(users)
// [ User { name: 'name2', age: 18 }, User { name: 'name1', age: 12 } ]
```



****



### 修饰符

- public：公开的、类的内部与外部都可以修改和访问

- protected：受保护的、只允许在父类与子类使用
- private：私有的、只能在本类中使用
- readonly：只读、不能修改。类型 const

```ts
class User {
  public name: string
  protected age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  public info(): string {
    return `${this.name}的年龄是 ${this.age}`
  }
}
```



****



### 类的属性

> **`constructor、static、get/set、abstract`**

`constructor`：构造函数，在ts中可用于定义属性，简化代码量。

```ts
class User {
  constructor(public name: string, public age: number) {}

  public info(): string {
    return `${this.name}的年龄是 ${this.age}`
  }
}
```



`static`：定义静态属性，属于构造函数并且所有对象都可以共享。

因为属于构造函数，所以可以直接访问。

```ts
class hello {
  static show(): string {
    return `Hello World`
  }
}
console.log(hello.show())
```

单例模式：当 `constructor` 构造函数定义为非 public 时，无法实例化对象。那么可以通过该特性结合 `static` 实现单例，只实例化一个对象。

```ts
class hello {
  // 受保护的构造函数
  protected constructor() {}
  static show(): string {
    return `Hello World`
  }
}
const h = hello.show()
```



`get/set`

```ts
class User {
  private _name
  constructor(name: string) {
    this._name = name
  }
  public get name() {
    return this._name
  }
  public set name(value) {
    this._name = value
  }
}

const u = new User('name1')
u.name = 'name2'
console.log(u.name)
```



`abstract`：抽象类。

- 抽象方法必须存在于抽象类中。
- 子类必须实现这个抽象方法。
- 不可以直接使用，只能被继承。

```ts
abstract class School {
  // 抽象方法必须存在于抽象类中
  abstract name: string
  abstract move(): void
}
class Student extends School {
  // 子类必须实现抽象方法
  name: string = '学生'
  public move(): void {}
}
// const s = new School() // 报错,不能通过抽象方法创建实例
```



****



## 接口

> **如果尝试添加一个接口中不存在的属将报错，移除接口的属性也将报错。**
>
> - Interface
>   - **同名会继承**
>   - 只读：`readonly`
>   - 额外属性：必须**包含整个接口的全部类型**。`[key: string]: any`
>   - 约束对象、数组、类。约束函数的：函数声明、参数列表、返回值、构造函数的参数
> - Type
>   - 同名不会继承，Interface 可以使用 `extends` 继承 type。Type 继承 Interface 需使用合并运算符 `&`
>   - 合并需要使用 `&`，或运算，满足任意一个。`|`
> - 总结：接口能用Interface就用他。

接口可以使用 `Interface` 或 `type`定义

**其中 interface 会将同名接口进行合并。type不能**

```ts
interface User {
  name: string
}
interface User {
  age: number
}
const hd: User = {
name: 'NAME',
age: 18,
}
```



****



### Interface

**如果尝试添加一个接口中不存在的属将报错，移除接口的属性也将报错。**

`Interface`：接口，

接口和类间结合使用：`implements`

接口和接口间继承使用：`extends`

接口**约束函数/对象/数组**使用：`:`

```ts
interface AnimationInterface {
  name: string
  move(): void
}
```



**只读：`readonly`**

做为变量使用的话用`const`，若做为属性则使用`readonly`。

```ts
interface Person {
	readonly id: number;
}
```



**格外属性：`[key: string]: string`**

如果使用 `string` 有一个问题那就是**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**。什么意思呢？就是额外属性必须**包含整个接口的全部类型**。



例如->下面案例中，任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了。

因此可以使用：`[propName: string]: any;`

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
    // [propName: string]: string | number;
  	// [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```



**约束类**

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function printPoint(p: Point) {
    console.log(p.x, p.y);
}

printPoint(new Point(1, 2));
```



**约束函数的参数列表和返回值**

约束函数的参数列表和返回值。

```ts
interface UserInterface {
  name: string
  age: number
  isLock: boolean
}
function lockUser(user: UserInterface, state: boolean): UserInterface {
  user.isLock = state
  return user
}
let user: UserInterface = {
  name: '我',
  age: 18,
  isLock: false,
}
lockUser(user, true)
console.log(user)
```



**约束函数的声明**

```ts
interface Pay {
  // 参数 price 必须是数字。返回值必须是 boolean
  (price: number): boolean
}
const getUserInfo: Pay = (price: number) => true
```



**约束函数的构造函数**

将 接口 作为**参数**的 约束。

```ts
interface UserInterface {
  name: string
  age: number
}
class User {
  // 公开 info 对象
  info: UserInterface
  constructor(user: UserInterface) {
    this.info = user
  }
}
const u = new User({ name: 'name', age: 18 })
console.log(u)
```



****



### type

type 与 interface 都可以描述一个对象或者函数，使用 type 用于定义类型的别名。

约束对象的方式和接口一样，我这里就不一一赘述了，只对 **不同点** 进行说明。



type可以声明基本类型别名、联合类型、元祖等类型

```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
  wong()
}
interface Cat {
  miao()
}
type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

type语句中还可以使用typeof获取实例的类型进行赋值

```ts
// 当你想要获取一个变量的类型时，使用typeof
let div = document.createElement('div')
type B = typeof div
```

type其他骚操作

```ts
type StringOrNumber = string | number;
type Text = string | { text: string };
type NameLookup = Dictionary<string, Person>;
type Callback<T> = (data: T) => void;
type Pair<T> = [T, T];
type Coordinates = Pair<number>;
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```



声明继承时

- interface 会将同名接口进行合并。**type 同名不会继承。**
- interface 可以 extends 继承 type。**type 继承 interface 需使用 `&`**
- **type 合并需要使用 `&`**
- **type 或运算，满足任意一个。`|`**

```ts
type Name = {
  name: string
}
type Age = {
  age: number
}

// interface 可以 extends 继承 type
interface User1 extends Name {
  age: number
}

// type 继承 interface
type User2 = User1 & {
  key: string
}

// 合并 type
type User3 = Name & Age
// 或运算
type User4 = Name | Age
```



****



## 泛型 Generics

泛型指**使用时才定义类型**，即类型可以像参数一样定义，主要解决类、接口、函数的复用性，让它们可以处理多种类型。

我们在函数名后添加了 `<T>`，其中 `T` 用来指代**任意输入的类型**，在后面的输入 `arg: T` 和输出 `T` 中即可使用了。

```ts
function dump<T>(arg: T): T {
  return arg
}
let g = dump<string>('NAME')
```



### 类型继承

我要设计一个函数，获取长度。

第一步、如果直接，会报错，**类型“T”上不存在属性“length”**

```ts
function getLength<T>(arg: T): number {
    return arg.length;
}
```

第二步：使 T 类型(泛型)继承一个 string。**缺点是只能处理字符串的数据。**

```ts
function getLength<T extends string>(arg: T): number {
  return arg.length
}
```

第三步：使 T 类型(泛型)定义时就包含 length 属性。这样就能处理 字符串和数组 。

```ts
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}

console.log(getLength('baidu.com')) // 9
console.log(getLength(['NAME'])) // 4
// console.log(getLength(18)) // undefined

// 如果只是字符串和数组可以使用联合类型
function getLength<T extends string | any[]>(arg: T): number {}

// 参数是 T[] 就存在 length,缺点是只能处理数组
function getLength<T>(arg: T[]): number{}
```

第四步：返回元组

```ts
function getLength<T extends string>(arg: T): [T, number] {
  return [arg, arg.length]
}
```



**第三步中补充一点，可以使用接口**

```ts
interface Lengthwise {
  length: number
}
function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length
}
```



****



### 类

**泛型复用类**

创建一个 可复用的类。下面案例中，collections对应number类型。userCollection对应对象类型。

```ts
class Collection<T> {
  data: T[] = []
  public push(...items: T[]) {
    this.data.push(...items)
  }
  public shift() {
    return this.data.shift()
  }
}
// 测试 number 类型
const collections = new Collection<number>()
collections.push(1)

// 测试 Object 类型
type User = { name: string; age: number }
const da: User = { name: 'NAME', age: 18 }
const userCollection = new Collection<User>()

userCollection.push(da)
console.log(userCollection.shift())
```



**接口结合泛型**

同上。

```ts
class User<T> {
  constructor(protected _user: T) {}
  public get(): T {
    return this._user
  }
}

interface UserInterface {
  name: string
  age: number
}
const instance = new User<UserInterface>({ name: 'NAME', age: 18 })
console.log(instance.get().age)
```



****



### 接口

接口的 comments 是一个数组，然后评论类型CommentType是一个对象，那么他就是一个*对象数组**。

```ts
// 文章接口
interface articleInterface<T, B> {
  title: string
  isLock: B
  comments: T[]
}

// 评论类型
type CommentType = {
  comment: string
}

// 定义文章数据包含评论内容
const a: articleInterface<CommentType, boolean> = {
  title: '评论标题',
  isLock: true,
  comments: [{ comment: '这是一个评论' }],
}

console.log(a)
```



****



### 解构

通过泛型解决解构，得到具体的值类型，获地更安全的代码，同时会有更好的代码提示。

```ts
function foo() {
  const name: string = 'NAME'
  const age: number = 19
  return fo(name, age)
}
function fo<T extends any[]>(...args: T): T {
  return args
}
const [l, r] = foo()
```



****



## 装饰器

装饰器（Decorators）为我们在类的声明及成员上通过编程语法扩展其功能，装饰器以函数的形式声明。

**通过:`@` 调用**

可用装饰器包括以下几种

| 装饰器             | 说明       |
| ------------------ | ---------- |
| ClassDecorator     | 类装饰器   |
| MethodDecorator    | 方法装饰器 |
| PropertyDecorator  | 属性装饰器 |
| ParameterDecorator | 参数装饰器 |



开启装饰器

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```



如果报错Unable to resolve signature of method decorator when called as an expression.

```sh
tsc 1.ts --target ES5 -w --experimentalDecorators
```



### 类装饰器

首先执行 RoleDecorator 装饰器，然后执行类的构造函数。

语法糖：`NameDecorator(Class)`

- 参数：构造函数

```ts
// 箭头函数
const MoveDecorator: ClassDecorator = (constructor: Function): void => {
  console.log(`装饰器 RoleDecorator `)
}

// function函数
function MoveDecorator(constructor: Function): void {
  console.log(`装饰器 RoleDecorator `)
}

@MoveDecorator
class Tank {
  constructor() {
    console.log('tank 构造函数')
  }
}
new Tank()
// 装饰器 RoleDecorator 
// tank 构造函数

// 语法糖
MoveDecorator(Tank)
```



### 原型对象

我给 `Decorator` 的原型对象上添加方法或属性，在类中我们也需要添加默认属性。

我们可以选择为类添加默认属性解决，也可以在调用时使用断言处理。

```ts
const MoveDecorator: ClassDecorator = (constructor: Function) => {
  constructor.prototype.name = 'NAME'
  constructor.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 100 }
  }
}

@MoveDecorator
class Tank {
  public name: string | undefined
  public getPosition() {}
  constructor() {
    console.log('tank 构造函数')
  }
}

const tank = new Tank()
console.log((tank as any).getPosition());
//或使用以下方式断言
console.log((<any>tank).getPosition());
```



### 消息处理

在 装饰器 中定义一个属性 `message` 类中设置该属性的值，装饰器就会被触发从而打印出该值。

```ts
//消息响应
const MessageDecorator: ClassDecorator = (constructor: Function): void => {
  constructor.prototype.message = (message: string): void => {
    console.log(message)
  }
}

@MessageDecorator
class LoginController {
  public login() {
    console.log('登录逻辑')
    this.message('登录成功')
  }
}
const controller = new LoginController()
controller.login()
// 登录逻辑
// 登录成功
```



### 工厂装饰器

使用 `switch` 根据条件返回不同的装饰器。

```ts
const MusicDecorator = (type: string): ClassDecorator => {
  switch (type) {
    case 'player':
      return (constructor: Function) => {
        constructor.prototype.playMusic = (): void => {
          console.log(`播放音乐 player`)
        }
      }
      break
    default:
      return (constructor: Function) => {
        constructor.prototype.playMusic = (): void => {
          console.log(`播放音乐 default`)
        }
      }
  }
}

@MusicDecorator('tank')
class Tank {
  constructor() {}
}
const tank = new Tank()
;(<any>tank).playMusic()

@MusicDecorator('player')
class Player {}

const player: Player = new Player()
;;(player as any).playMusic()
```



### 方法装饰器

装饰器也可以修改方法，首先介绍装饰器函数参数说明

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 方法名称                                                   |
| 参数三 | 属性描述                                                   |

如果报错Unable to resolve signature of method decorator when called as an expression.则执行下面。

```sh
tsc 1.ts --target ES5 -w --experimentalDecorators
```



**简单使用**

先保存原型方法，然后在描述中调用它。

```ts
/*
const ShowDecorator: MethodDecorator = (...args: any[]) => {
  let target = args[0]
  let propertyKey = args[1]
  let descriptor = args[2]
  const [, , descriptor] = args
}
*/

const ShowDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void => {P
  // 保存原型方法
  let originalMethod = descriptor.value
  descriptor.value = () => {
    // 调用原型方法
    console.log('show', originalMethod())
  }
}

class dec {
  @ShowDecorator
  show() {
    return 'desc'
  }
}

new dec().show()

// show desc
```



**自定义内容**

保存在 装饰器参数 中。

```ts
const ShowDecorator = (message: string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.value = () => {
      console.log(message)
    }
  }
}

class dec {
  @ShowDecorator('自定义内容')
  store() {
    console.log('保存文章')
  }
}
new dec().store()
// 自定义内容
```



**登录验证**

```ts
//用户类型
type userType = { name: string; isLogin: boolean; permissions: string[] }
//用户数据
const user: userType = {
  name: 'NAME',
  isLogin: true,
  permissions: ['store', 'manage'],
}
//权限验证装饰器工厂
const AccessDecorator = (keys: string[]): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value
    const validate = () =>
      // 验证用户权限是否一致
      keys.every(k => {
        return user.permissions.includes(k)
      })
    descriptor.value = () => {
      if (user.isLogin === true && validate()) {
        alert('验证通过')
        return method()
      }
      alert('验证失败')
    }
  }
}

class Article {
  show() {
    console.log('显示文章')
  }
  @AccessDecorator(['store', 'manage'])
  store() {
    console.log('保存文章')
  }
}
new Article().store()
```



****



### 属性装饰器

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 属性名称                                                   |



```ts
const PropDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
): void => {
  console.log(target, propertyKey)
}

class dec {
  @PropDecorator
  public name: string | undefined = 'NAME'
}
```



大写转小写

```ts
const PropDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
): void => {
  let value: string
  const getter = () => {
    return value
  }
  const setter = (v: string) => {
    value = v.toLowerCase()
  }

  Object.defineProperty(target, propertyKey, {
    set: setter,
    get: getter,
  })
}

class dec {
  @PropDecorator
  public name: string | undefined
}

const instance = new dec()
instance.name = 'BAIdU'
console.log(instance.name)
```



### 参数装饰器

可以对方法的参数设置装饰器，参数装饰器的返回值被忽略。

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 方法名称                                                   |
| 参数三 | 参数所在索引位置                                           |

```ts
const ParameterDecorator: ParameterDecorator = (
  target: any,
  propertyKey: string | Symbol,
  parameterIndex: number
): void => {
  console.log(target, propertyKey, parameterIndex)
}

class dec {
  show(name: string, @ParameterDecorator url: string) {}
}
```



**元数据**

```sh
yarn add reflect-metadata
```

为对象中的属性，添加 元数据描述。

`defineMetadata(元数据名, 元数据内容, 对象, 属性)`

`getMetadata(元数据名, 对象, 属性)`

```ts
//引入支持元数据的扩展名
import 'reflect-metadata'
const meta = { name: 'NAME', city: '广州' }
//在对象 meta 的属性 name 上定义元数据 (元数据指对数据的描述)
Reflect.defineMetadata('DESC', 'NAMEDESC', meta, 'name')
let value = Reflect.getMetadata('DESC', meta, 'name')
console.log(value)
```





****



## 模块

> - 导出
>   - 简单的导出，对导出部分重命名。
>   - 重新导出，只导出那个模块的部分内容，使用一个模块包含多个模块一起导出。
> - 导入
>   - 简单的导入，重命名导入。导入到一个变量。

### 导出

任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加`export`关键字来导出

**StringValidator.ts**

```ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

简单的导出，同时还可以对导出的部分重命名。

**ZipCodeValidator.ts**

```ts
import { StringValidator } from "./StringValidator";

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
// 对导出的部分重命名
export { ZipCodeValidator as mainValidator };
```



**重新导出**

只导出那个模块的部分内容。 

**ParseIntBasedZipCodeValidator.ts**

```ts
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// 导出原先的验证器但做了重命名
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
```



使用一个模块包含多个模块，一起导出

**AllValidators.ts**

```ts
export * from "./StringValidator"; // exports 'StringValidator' interface
export * from "./ZipCodeValidator";  // exports 'ZipCodeValidator' and const 'numberRegexp' class
export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
                                                 // and re-exports 'RegExpBasedZipCodeValidator' as alias
                                                 // of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
```



### 导入

使用以下`import`形式之一来导入其它模块中的导出内容。

```ts
import { ZipCodeValidator } from "./ZipCodeValidator";
// 重命名
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
let myValidator = new ZCV();
```



将整个模块导入到一个变量，并通过它来访问模块的导出部分

```ts
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```



### `export =` 和 `import = require()`

若使用`export =`导出一个模块，则必须使用TypeScript的特定语法`import module = require("module")`来导入此模块。

```ts
// ZipCodeValidator.ts
class ZipCodeValidator {
  // ...
}
export = ZipCodeValidator;

// Test.ts
import zip = require("./ZipCodeValidator");
let validator = new zip();
```



`namespace`：数据需要 export 导出才能使用。

```ts
namespace User {
  export let name: string = 'NAME'
}
namespace User2 {
  export let name: string = 'NAME2'
}
console.log(User.name)

namespace User {
  export let name: string = 'NAME'
  export namespace User2 {
    export let name: string = 'NAME2'
  }
}
console.log(User.User2.name)
```



别名

```ts
import else = User.name
```





合并打包1

```sh
tsc --outFile ./dist/app.js user.ts index.ts
```



合并打包2

`reference`：在 index.ts 中引入依赖文件

```ts
/// <reference path="user.ts"/>
console.log(User.name);
```

```sh
tsc --outFile ./dist/app.js index.ts 
```



amd 模块打包

第一步：修改配置项->`"module": "amd" `

第二部：导入 `import { User } from './user.js'`

编译

```sh
tsc --outFile ./dist/app.js index.ts
```

```html
<script src="dist/app.js"></script>
<script>
  require(['App'])
  require(['User'], User => {
    console.log(User.title)
  })
</script>
```



## Pro

### 高级类型

> 交叉类型、联合类型、、

**交叉类型使用范围：我希望一个类型对象同时拥有 多种类型 的成员。**理解为：`&`



第一步：首先 extend 函数有两个泛型参数 First,Second。前者传入 `Person类` ，后者传入 `ConsoleLogger 的属性`。

`Person类` 的作用是通过构造函数设置 name属性。

`ConsoleLogger.prototype` 的作用是 传入log属性 打印 name 值。



第二步：第二行代码，`Partial<Type>` 将它所有的属性设置为 **可选的**。（可以理解为 result 要么是First 要么是 Second）



第三步：3到7行，遍历 对象属性，通过 `hasOwnProperty` 判断 prop 是否是 first 的属性。如果是那就通过断言获取。

```ts
function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }
    return result as First & Second;
}

class Person {
    constructor(public name: string) { }
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name) {
        console.log(`Hello, I'm ${name}.`);
    }
}

const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
```



**联合类型**：传入`number`或`string`类型的参数

```ts
function padLeft(value: string, padding: string | number) {
    // ...
}
```



**类型守卫与类型区分**

对象同时拥有多个类型，我们无法确定 这个类型 是谁的时候。可以通过类型断言。

当把 pet 断言成 Fish，判断是否存在 swim 方法，如果不存在那就说明不是这个类型。

```ts
let pet = getSmallPet();

if ((pet as Fish).swim) {
    (pet as Fish).swim();
} else if ((pet as Bird).fly) {
    (pet as Bird).fly();
}
```



**用户自定义类型守卫**

使用类型判定：`parameterName is Type` 

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
```



使用`in`操作符：其中`n`是字符串字面量或字符串字面量类型且`x`是个联合类型

**通过 in 判断 pet 是否存在 swim**

```ts
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
```



`typeof v === "typename"`类型守卫：判断类型 是否是 原始类型

`"typename"`必须为：`"number"`，`"string"`，`"boolean"`或`"symbol"`

```ts
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
```



`instanceof`：通过构造函数细化类型，左边对象右边函数，沿着原型链查找。

```ts
interface Padder {
  	// ...
}
class SpaceRepeatingPadder implements Padder {
  	// ...
}
class StringPadder implements Padder {
  	// ...
}
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
```





## 注意事项

应该使用`number`，`string`，`boolean`和`symbol`类型。

```ts
/* 正确 */
function reverse(s: string): string;
```



*不要*定义没有使用过类型参数的泛型类型。 



请尽量不要使用`any`类型，除非你正在将 JavaScript 代码迁移到 TypeScript 代码。



回调函数的返回值类型，应该为返回值会被忽略的回调函数设置返回值类型`void`，而不是any：

```ts
/* 错误 */
function fn(x: () => any) {
    x();
}
/* 正确 */
function fn(x: () => void) {
    x();
}
```



*不要*在回调函数里使用可选参数，除非这是你想要的：

```ts
/* 错误 */
interface Fetcher {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}
/* 正确 */
interface Fetcher {
    getObject(done: (data: any, elapsedTime: number) => void): void;
}
```



**函数重载**

*不要*把模糊的重载放在具体的重载前面：

```ts
/* 错误 */
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?

/* 正确 */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```



### 注释

```ts
/**
 * 获取数据类型
 * @param {any} value 需要判断的值
 * @return "String","Object","Array"...
 */
```









配置

| 配置             | 说明                                                      |
| ---------------- | --------------------------------------------------------- |
| noImplicitAny    | 禁止使用隐含的 any 类型，如函数参数没有设置具体类型       |
| strictNullChecks | 开启时不否允许将 null、undefined 赋值给其他类型比如字符串 |
| target           | 转换成JS 的版本                                           |
| strict           | 是否严格模式执行                                          |
| module           | 使用的模块系统                                            |





















