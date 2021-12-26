# TypeScript

```sh
npm i typescript -g

yarn tsc -v
```



运行

```sh
tsc 文件名

# 自动监听
tsc 文件名 -w

# 运行js
node 文件.js
```



## 基本数据类型



### 类型校验

编译时会报错，因为a不为数字

```js
// 类型校验
function sum(a:number,b:number){
	return a+b;
}
console.log(sum('a',3)) 
```



### 类型推断

当没有明确设置类型时，系统会根据值推断变量的类型

```js
// 字符串
let str = 'zyugat';	// let str: string
str = 18;	// 报错
```



### 基本类型

> `number、string、boolean、object、、数组[]、元组、、、、`
>
> 对象：声明对象类型但不限制值类型。看下面例子。属性后面跟上`?` 用来指定 url 为可选值，这样的属性是非必填项

```ts
const num:number = 100

const str:string = 'zyugat'

const boo:boolean = true

// 对象
let obj:object = {'zyugat', 100}
// 限定对象值类型
let obj:{name: string,year:number}
// 加 ? 代表非必选
let obj:{name: string,year:number,url?:string}
obj = {} //使用字面量声明对象
obj = [] //数组是对象
obj = Object.prototype //原型对象
obj='zyugat' //报错，改变了类型为字符串

// 数组
let str:string[] =[]
let arr:Array<string> =[]
let arr = new Array<string>(3).fill('zyugat.com')

// 元组
let arr:[string, number, boolean]
arr = ['zyugat.com', 2090, true]
```



****



### union

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



****



### any

`any`：指包含所有值的顶部类型

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



### void

`void`：值为 null 或undefined，常用于对函数返回值类型定义

void 类型的值可以是 null 或 undefined，但如果 TS 配置开启了 `strict` 或 `strictNullChecks`则不允许 void 为null

> 严格模式下只能是 undefined、如果函数没有返回值请使用 void 类型、对返回 null或undefined的函数返回值声明。
>
> 会使用代码更易读，并可对不小心造成的函数返回内容进行校验

```ts
function hd(): void {
  console.log('zyugat')
//  return 'zyugat'	// 会报错
}
```



****



### never

`never`：是永远不会结束的函数，所以也不会有返回值。相比 void 是有null 或undefined 值的。



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



### Funtion

```ts
let fun:Function
fun = ()=>'Hello World'
console.log(fun());
```



**参数类型**

c：参数可以不传，默认值是0.8。

d：参数可以不传，没有默认值。

```ts
function sum(a: number, b: number, c: number = 0.8, d?: number) {
  return a + b + c + d
}
console.log(sum(3, 3, 3, 3))
```



**返回值类型**

```ts
function sum(a: number, b: number): string {
    return `计算结果是：${a + b}`;
}
console.log(sum(3, 3));
```



**参数声明**

```ts
let addUser = (user: { name: string; age: number }): void => {
  console.log('addUser')
}
type userType = { name: string; age: number }
let addUser = (user: userType): void => {
  console.log('addUser')
}
addUser({ name: 'myname', age: 18 })
```



**函数定义**

对没有返回值函数的定义，下面实例中我分三步分解。

- 第一个案例中我们定义了 `foo` 函数，函数定义中声明的变量 `a`，在具体实现中可以改为其他名称。
- 第二个案例中，我们分为三个部分，参数描述、对象结构、函数定义

```ts
// 1、函数定义
let foo: (a: number, b: number) => number
foo = (x: number, y: number): number => {
  return x + y
}
let foo: (a: number, b: number) => number = (x: number, y: number): number => {
    return x + y;
}

// 2、参数是对象结构的函数定义
// 参数描述
type userType = { name: string; age: number }
// 对象结构
// let addUser: (user: userType) => boolean
type addUserFunc = (user: userType) => boolean
// 函数定义
let addUser: addUserFunc = (u: userType): boolean => {
  console.log('addUser')
  return true
}
addUser({ name: 'myname', age: 12 })
```



**剩余参数**

```ts
function sum(...args: any[]): number {
  return args.reduce((s, n) => s + n, 0)
}

console.log(sum(1, 2, 3, 4, 5))
```



**Tuple元组**

元组要为每个值进行类型声明。

```ts
const arr: (number | string)[] = ['name', 2030]
arr[1] = 'MYNAME' // 不会报错
arr[2] = true // 报错
```



****



## 断言使用

### Enums 枚举

不设置值时，值以0开始递增。常用于程序语言及mysql 等数据库中。

- 当某个字段设置数值类型的值后，**后面的在它基础上递增**。

```ts
enum SexType {
  BOY,
  GIRL,
}
const hd = {
  num: SexType.GIRL,
}
console.log(hd) //{ num: 1 }

// 字段设置的数值类型其他的前面
enum SexType {
  BOY=1,
  GIRL,
}
console.log(hd) //{ num: 2 }

// 字段设置的数值类型其他的后面
enum SexType {
  BOY,
  GIRL,
  TEST=1
}
console.log(hd) //{ num: 1 }
```



****



### as断言

用户断定这是什么类型，不使用系统推断的类型。

```ts
function hd(arg: number) {
  return arg ? 'name' : 2030
}

let f = hd(1) as string //let f: string
let f = <string>hd(1) //let f: string
```



****



### const断言

- 字符串、布尔类型转换为具体值
- 对象转换为只读属性
- 数组转换成为只读元组

```ts
const hd = 'name' //const hd: "name"
let xj = 'name' //let xj: name

// 对象转换为只读属性
let user = { name: 'name' } as const
```



**解构**

下面案例中，变量类型不是具体类型，他包含 `string | (() => void)`。如果直接调用会报错，因此使用断言。

```ts
function foo() {
  let a = 'name'
  let b = (x: number, y: number): number => x + y
  return [a, b]
}
let [n, m] = foo()
// 报错：因为类型可能是字符串，所以不允许调用
m(1, 6)

// 正常运行
console.log((m as Function)(1, 2))
//使用以下类型声明都是可以的
console.log((m as (x: number, y: number) => number)(1, 5))

// 调用时对返回值断言类型
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



### null/undefined

```ts
// 默认情况下 null 与undefined 可以赋值给其他类型
let name: string = 'name'
name = null
name = undefined
```

当我们修改 tsconfig.json 配置文件的strictNullChecks 字段为 true（默认即为 true） 时，则不能将 null、undefined 赋值给其他类型

```ts
// 除非向下面一样明确指定类型
let name: string |undefiend|null = 'name'
```



### 非空断言

获取的值可能是null，那么需要使用 `as` 断言类型或使用 `!` 声明非null

```ts
const el: HTMLDivElement = document.querySelector('.bd') as HTMLDivElement
const el: HTMLDivElement = document.querySelector('.bd')!
```



****



## 类与接口

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



### Interface

`Interface`：接口，

接口和类间结合使用：`implements`

接口和接口间继承使用：`extends`

接口**约束函数/对象/数组**使用：`:`

> **约束对象、数组、函数、构造函数的参数、枚举**

```ts
interface AnimationInterface {
  name: string
  move(): void
}
```



> 附：interface 会将同名接口进行合并。type不能
>
> ```ts
> interface User {
>   name: string
> }
> interface User {
>   age: number
> }
> const hd: User = {
>   name: 'NAME',
>   age: 18,
> }
> ```



**1、约束对象**

如果尝试添加一个接口中不存在的属将报错，移除接口的属性也将报错。

如果要添加额外属性可使用：`[key:string]:any`

```ts
interface UserInterface {
  name: string
  age: number
  info(other: string): string
  // 允许添加格外属性
  [key: string]: any
}
const hd: UserInterface = {
  name: '我',
  age: 18,
  // num: 11	// 报错,因为添加接口不存在的属性
  info(o: string) {
    return `${this.name}已经${this.age}岁了,${o}`
  },
}
console.log(hd.info('123'))	// 我已经18岁了,123
```



**2、约束数组**

可以不定义值，让其为空。

```ts
interface UserInterface {
  name: string
  age: number
}
const hd: UserInterface = {
  name: 'name',
  age: 18,
}
const users: UserInterface[] = []
users.push(hd)
console.log(users)
```



**3、约束函数**

约束函数，约束函数声明

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

// 约束函数声明
interface Pay {
  // 参数 price 必须是数字。返回值必须是 boolean
  (price: number): boolean
}
const getUserInfo: Pay = (price: number) => true
```



**4、约束构造函数**

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



**5、枚举**

```ts
enum SexType {
    BOY, GIRL
}
interface UserInterface {
    name: string,
    sex: SexType
}
```



****



### type

type 与 interface 都可以描述一个对象或者函数，使用 type 用于定义类型的别名。

- type 与 interface 都是可以进行扩展、使用 type 相比 interface 更灵活
- 使用类(class) 时建议使用接口，这可以与其他编程语言保持统一

约束对象的方式和接口一样

**约束函数**

```ts
type Pay = (price: number) => boolean
const wepay: Pay = (price: number) => {
  console.log(`微信支付${price}`)
  return true
}
wepay(100)
```



约束对象、定义索引类型，和 接口 是一样的

```ts
interface User {
  [key: string]: any
}
type UserTYpe = {
  [key: string]: any
}
```



**声明继承**

- interface 会将同名接口进行合并。
- interface 可以 extends 继承 type
- type 合并需要使用 `&`，而 interface 不能。
- type 或运算，满足任意一个。`|`
- class 继承 type。`implements`

```ts
interface Name {
  name: string
}
// interface 可以 extends 继承 type
interface User1 extends Name {
  age: number
}
interface Age {
  age: number
}
// 合并 type
type User2 = Name & Age
// 或运算
type User3 = Name | Age

// class 继承 type
class User4 implements Name {
  name: string = 'NAME'
}
```



****



## 泛型 Generics

泛型指使用时才定义类型，即类型可以像参数一样定义，主要解决类、接口、函数的复用性，让它们可以处理多种类型。



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

// 参数是 T[] 存在 length 只能处理数组
function getLength<T>(arg: T[]): number{}
```

第四步：返回元组

```ts
function getLength<T extends string>(arg: T): [T, number] {
  return [arg, arg.length]
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
const hd: User = { name: 'NAME', age: 18 }
const userCollection = new Collection<User>()

userCollection.push(hd)
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



### 值类型

下面解构得到的变量类型不是具体类型，面是数组类型，比如变量 y 的类型是` string | (() => void)`

这在写项目时是不安全的，因为可以将 y 随时修改为字符串，同时也不会有友好的代码提示

```ts
function hd() {
    let a = '后盾人'
    let b = (x: number, y: number): number => x + y
    return [a, b]
}

const [x, y] = hd() //变量 y 的类型为 string | (() => void)
```

使用 as const 就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同时会有更好的代码提示

```ts
function hd() {
  let a = '后盾人'
  let b = (): void => {}
  return [a, b] as const
}

const [x, y] = hd() //变量 y 的类型为 () => void
```

也可以使用泛型来得到具体的值类型

```ts
function hd() {
    const a: string = '后盾人'
    const b: number = 2090
    return f(a, b)
}
function f<T extends any[]>(...args: T): T {
    return args;
}
const [r, e] = hd()
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
): void => {
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



合并打包1

```sh
tsc --outFile ./dist/app.js user.ts index.js
```



合并打包2

`reference`：在 index.js 中引入依赖文件

```ts
/// <reference path="user.ts"/>
console.log(User.name);
```

```sh
tsc --outFile ./dist/app.js index.js 
```



amd 模块打包

第一步：修改配置项->`"module": "amd" `

第二部：导入 `import { User } from './user.js'`

编译

```sh
tsc --outFile ./dist/app.js index.js
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







配置

| 配置             | 说明                                                      |
| ---------------- | --------------------------------------------------------- |
| noImplicitAny    | 禁止使用隐含的 any 类型，如函数参数没有设置具体类型       |
| strictNullChecks | 开启时不否允许将 null、undefined 赋值给其他类型比如字符串 |
| target           | 转换成JS 的版本                                           |
| strict           | 是否严格模式执行                                          |
| module           | 使用的模块系统                                            |





















