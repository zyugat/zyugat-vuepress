# JavaScriptNote

## BASE

### String字符串

for字符串遍历：`for..of`

```javascript
let text = 'Hello'
for (let i of text) {
  console.log(i);
}
```



`concat()`：将一个或多个字符串拼接起来

`trim()`、`trimStart()`、`trimEnd()`：删除前置和后缀空格

`parseInt()`：字符串转整数

`parseFloat()`：字符串转浮点数

`toLowerCase()` 和 `toUpperCase()`方法可以用于字符串的大小写转换。



`replace()`：用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

```js
let str = "abcdef";
str.replace("c", "z") // 输出结果：abzdef
```

`match()`：检索指定的值，或找到一个或多个`正则表达式的匹配`。一般用于正则表达式。

```js
string.match(regexp)
let str = "abcdef";
console.log(str.match("c")) // ["c", index: 2, input: "abcdef", groups: undefined]
```

`search()`：返回第一个匹配项的索引

```js
string.search(searchvalue)
let str = "abcdef";
str.search(/bcd/)   // 输出结果：1
```





- `split()`：方法用于把一个字符串分割成字符串数组。该方法不会改变原始字符串。

```js
let str = "abcdef";
str.split("c");    // 输出结果：["ab", "def"]
str.split("", 4)   // 输出结果：['a', 'b', 'c', 'd'] 
```



- 截取字符串
  - slice()：返回的子串**包括开始处的字符**，但**不包括结束处的字符**。
  - substr()：方法用于在字符串中抽取从开始下标开始的指定数目的字符。
  - substring()：方法用于提取字符串中介于两个指定下标之间的字符。
    - `如果 from 比 to 大`，那么该方法在提取子串之前会先交换这两个参数。并且该方法不接受负的参数，如果参数是个负数，就会返回这个字符串。

```js
let str = "abcdefg";
str.slice(1,6);   // 输出结果："bcdef" 

string.substr(start,length)
str.substr(1,6); // 输出结果："bcdefg" 

string.substring(from, to)
str.substring(1,6); // 输出结果："bcdef" [1,6)
str.substring(1);   // 输出结果："bcdefg" [1,str.length-1]
str.substring(6,1); // 输出结果 "bcdef" [1,6)
str.substring();  // 输出结果："abcdefg"
```





返回重复n次的新字符串：`reqeat()`

```javascript
'x'.repeat(3) 		// "xxx"
'na'.repeat(2.9) 	// "nana"
```



- `charAt(num)`：返回UTF-16编码的第一个字节，不能识别大于0xFFFF的字符
- `charAt(num)`：返回给定位置的字符，能识别大于0xFFFF的字符（意思是能识别中文）



- `indexOf()`：查找某个字符，**有则返回第一次匹配到的位置**，否则返回-1，其语法如下：
  - searchvalue：必需，规定需检索的字符串值；
  - fromindex：可选的整数参数，规定在字符串中开始检索的位置。
- `lastIndexOf()`：查找某个字符，有则返回最后一次匹配到的位置，否则返回-1
- `includes(string)` ：返回布尔值，字符串是否包含指定的子字符串。
- `startsWith(string)`： 返回布尔值 ， 字符串**是否以指定的子字符串开始**。
- `endsWith(string)`：返回布尔值， 字符串**是否是以指定的子字符串结尾**。

```javascript
var s = 'Hello world!';
s.includes （'。'） // false
s.startsWith ('Hello') // true
s.endsWith ('!') // true
/*
endsWith，带参数是前n个,其他2个是从n开始到结束
*/
var s = 'Hello world!';
s.includes ('Hello', 6) // false
s.startsWith ( 'world', 6) //true
s.endsWith ( 'Hello', 5) // true
```



字符串自动补齐：`padStart()、padEnd()`

如果发现字符串不够指定长度，可以用这个自动补全。

如果不用第二个参数，就会用**空格**补全。

```javascript
'x'.padStart(5, 'ab')	// 'ababx'
'x'.padStart(4, 'ab')	// 'abax'

'x'.padEnd(5, 'ab')	// 'xabab'
'x'.padEnd(4, 'ab')	// 'xaba'

'12'.padStart(10, 'YYYY-MM- DD') // 'YYYY-MM-12'
'09-12'.padStart(10, 'YYYY-MM- DD') // 'YYYY-09-12'
```



#### 模板字符串

模板字符串：`.

```javascript
// 简单引用
function auth(user) {
  return `User：${user.name}`
}

// 进阶引用
const tmpl = addrs => `
<table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
</table>
`;
const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];
console.log(tmpl(data));
```



**标签模板**

其实不是模板，是函数调用的一种特殊形式，标签是指函数，模板是指他的参数。

```javascript
alert('123') = alert `123`
```



****



### Array数组

1）数组简单的操作方式

- pop（删除最后一个元素）
- shift（删除第一个元素）
- push：尾部添加
- unshift(newelementX)：头部添加
- 重排序
  - reverse()：反转数组
  - sort()：升序
- `.join(分隔符)`：数组转字符



2）数组的API方法

- 操作方法

  - `array1.concat(array2)`：在当前数组后面追加新数组
    - 可用扩展运算符解决`[...arr1, ...arr2, ...arr3]`
  - `slice(numStart,numEnd)`：返回开始到结束的所有项**（不改变原数组**
    - **`浅拷贝`**
  - `splice(index, howmany, item1..,itemX)`：删除元素，替换元素**（改变原数组**
    - **`深拷贝`**
    - index：从何处开始添加/删除
    - howmany：删除几个。可选，未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
    - item：添加到数组的新元素。可选
- 位置方法

  -  `indexOf()`：返回索引
  -  `lasIndexOf()`：从队尾开始找
- 迭代方法

  - `every()`：与，所有返回值为**true**时返回**true**
  - `some()`：或，任一项返回**true**时返回**true**
  - `filter()`：返回**true的项**组成的数组
  - `map()`：返回函数**调用结果**组成的数组
  - `forEach()`：没有返回值
  - 这里除了`forEach()`，其他都有`return`



- `Array.prototype.includes`
- 检查数组中是否包含某个元素，返回布尔值
- 指数操作符
- <code>**</code>
- 跟<code>Math.pow</code>是一样的，都是幂运算，计算次方



- `for-in`：返回键名（数字）

- `for-of`：返回键值（值）

- ```javascript
  let arr = ['test1', 'test2']
  for(let value in arr){console.log(value)}
  // 0
  // 1
  for(let value of arr){console.log(value)}
  // test1
  // test2
  ```



- 缩小方法

  - `reduce()`：迭代数组所有项，从头开始
  - `reduceRight()`：迭代数组所有项，从尾开始
  - 四个参数：前一个值、当前值、项、索引

```javascript
var values = [1,2,3,4,5];
let sum = values.reduc(function(prev, cur, index, array){
	return prev + cur
});
alert(sum);	// 15
```



**查找**

`inclides()`

返回一个布尔值，表示某个数组内是否包含给定值。

```javascript
[1, 2, 3].includes(2)	//true
[1, 2, NaN].includes(NaN)	//true
```

第二参数是从某个地方开始，indexOf有2个缺点:

- 第一点不够语义化，其含义是找到参数值第一个出现的位置，所以要判断是否不等于-1，不够直观。
- 第二点由于内部使用===判断，会导致NaN的误判。



`find()`

找出第一个符合条件的数组对象

- 找到返回：true
- 没有找到：undefined

```javascript
[1, 4, -5, 10].find((n) => n<0)
// -5
```



`findIndex()`

便利数组，返回true/false

- 第一个参数，value，当前值
- 第二个参数，index，当前位置
- 第三个参数，arr，原数组

```javascript
[1, 4, -5, 10].findIndex(function(value, index, arr) {
	return value > 9
})
// 10
```



****



- 填充数组->`fill()`
  - 参数1：值
  - 参数2：填充开始位置
  - 参数3：填充结束位置

```javascript
new Array(3).fill(8)
// [8,8,8]
['a', 'b', 'c'].fill(7,1,2)
// ['a', 7, 'c']
```



`copyWithin()`

将数组内部指定的成员复制到其他地方，然后返回当前数组。

```javascript
Array.prototype.copyWithin(target, start = 0, end = this.length)
```



- target，必选，从该位置开始替换数据
- start，可选，从当前位置开始读取数据，默认0，负数就显示倒数
- end，可选，到该位置**前**停止读取数据，负数就显示倒数

```javascript
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]
```



****



`keys()、values()、entries()`

他们三个的区别是：

- keys、对键名的变量
- values()、对键值的遍历
- entries()、对键值对的遍历

```javascript
// keys()
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
//	0
//	1

// values()
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
//	a
//	b

// entries()
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index,elem);
}
//	0 "a"
//	1 "b"

// 手动使用遍历器对象的next方法遍历
let letter = ['a', 'b']
let entries = letter.entries()
console.log(entries.next().value)   // [0,"a"]
console.log(entries.next().value)   // [1,"b"]
```



****



#### 扩展运算符

`...`

可以将一个数组变成一个参数序列。可以将他理解为，可以**返回多个值**，**返回后续值**。

要记住，扩展运算符用于数组赋值，只能放在参数的最后一位，不然会报错。

```javascript
f(...args)
arr1.push(...arr2)
```



数组合并

```javascript
arr1 = [1]
arr2 = [2]
arr3 = [3]
// ES5
arrl.concat(arr2, arr3)

// ES6
[...arr1, ...arr2, ...arr3]
```



与解构赋值结合

```javascript
// ES5
a = list[0], rest = list.slice(1)
// ES6
[a, ...rest] = list

// 举一些例子
const [frist, ...rest] = [1, 2, 3, 4]
frist	// 1
rest	// [2, 3, 4]

const [frist, ...rest] = []
frist	// undefined
rest	// []
```



字符串

```javascript
[...'hello']
// ［ ” h ” ，” e ”，” l ” ， ” l ”，” o ” ］
```



实现Iterator接口对象

```javascript
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let arr = [...arrayLike]
```



****



将两类对象转为真正的数组：`Array.from()`

类型数组的对象（array-like object）和可遍历（iterable）对象（包括ES6新增的Set和Map）

常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。而都可以使用<code>Array.from</code>转为真正的数组

```javascript
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let arr2 = Array.from(arrayLike)

// NodeList对象
console.log("NodeList对象")
let ps = document.querySelectorAll('p')
console.log("将P元素转为数组：", Array.from(ps))
console.log("获取数组第一个元素：", Array.from(ps)[0])
// 只有变成了数组才能用forEach
Array.from(ps).forEach(function (p) {
    console.log(p);
})
```



还可以接受第二参数，类似数组的map方法，对每个元素进行处理然后放入返回的数组中。

```javascript
Array.from(arrayLike, x => x * x)
Array.from(arrayLike).map(x => x * x)

Array.from([1, 2, 3], x => x * x)
// [1, 4, 9]
```



****



将一组值转变为数组，不同于上面的对象转数组，这里是将一组数。：`Array.of()`

```javascript
Array.of(3, 11, 8)	// [3,11,8]
Array()	// []
Array(3)	// [,,,]
Array(3, 11, 8)	// [3,11,8]
```



****



### Object对象

- `JSON.stringify(value [, replacer] [, space)`，将json对象转换成json字符串。
- `JSON.parse(test)`：将json字符串转换成json对象。
- `Object.assign(target, source1, source2)`：将源对象(source)复制到目标对象(target)。
- `Object.fromEntries`
  - 将二维数组转换为对象
- `Object.Entries`
  - 将对象转换为二维数组
- `trimStart`和`trimEnd`
  - 清除字符串，左侧或右侧空白





**注意！**

**属性名表达式如果是一个对象，那么默认情况下会自动将对象转为字符串[object Object]**

```javascript
const keyA = {a: 1}
const keyB = {b: 2}

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
}
console.log(myObject);
```

你会神奇的发现，打印出来只有keyB。这是因为keyA和keyB都是[object Object]，所以keyB将keyA覆盖了，最后myObject就剩下一个[object Object]属性了



#### 属性的可枚举性与遍历

对象每一个属性都有一个描述对象（Description），用以控制该属性的行为。

可以通过：<code>Object.getOwnPropertyDescriptor(obj, 'foo')</code>获取该属性的描述对象

```js
let obj = {foo:123}
Object.getOwnPropertyDescriptor(obj, 'foo')
/*
value: 123,
writable: true,
enumerable: ture,
configurable: ture
/*
```

在这里面，描述对象的<code>enumerable</code>称之为：“可枚举性”。如果为false，那么就表示某些操作可以忽略当前属性。



- 遍历
  - `for...in`：返回键
  - `for...of`：只能遍历数组，需用（key、values、entries等方法将其变成数组。
  - `Object.keys(obj)`：返回键
  - `Object.values(obj)`：值
  - `Object.entries(obj)`：键值对

```javascript
var user = {name:'张三',age:10,sex:'男'}
for(let index in user){
  console.log(index+':'+user[index])
  //"name:张三""age:10""sex:男"
}

var obj = {foo: 'bar', baz: 42}
console.log(Object.entries(obj));
//	[ ["foo", "bar"], ["baz", 42] ]

let {keys, values, entries} = Object
let obj = {a: 1, b: 2, c: 3}
// keys->键名
for (let key of keys(obj)) {
  console.log(key);
  // 'a', 'b', 'c'
}
// values->键值
for (let value of values(obj)) {
  console.log(value);
  // 1, 2, 3
}
// entries->键值对
for (let [key, value] of entries(obj)) {
  console.log([key, value])
  // ["a", 1]
  // ["b", 2]
  // ["c", 3]
}
```



****



- `Object.getOwnPropertyNames(obj)`
  - 返回一个数组，包含自身所有属性（不含Symbol属性，包括不可枚举属性）
- `Object.getOwnPropertySymbols(obj)`
  - 返回一个数组，包含对象自身所有Symbol属性
- `Reflect.ownKeys(obj)`
  - 返回一个数组，包含自身所有属性，不管是什么，不管是否可以枚举，全部。

以上属性均会忽略<code>enumerable</code>为false的属性，只复制对象自身可枚举属性。

```js
Object.getOwnPropertyDescriptor([], 'length').enumerable
// fasle
```



****



`Object.is()`

比较2个值是否严格相等，与<code>===</code>行为基本一致

与<code>===</code>有2点不相同

```javascript
+0 === -0	// true
NaN === NaN	// false

Object.is(+0, -0)	//false
Object.is(NaN, NaN)	// true
```



****



### Function函数

**函数的Length属性**

如果默认值不是**尾参数**，那么也不会计入后面的参数

```javascript
function(a = 0, b, c).length // 0
function(a, b = 1, c).length // 1
```



****



**rest**：`...变量名`

用来获取函数的多余参数，后续参数。

注意：rest参数后面不能有其他参数，只能作为**最后一个参数**，否则会报错

```javascript
// 报错
function f(a, ...b, c)
```



****



**严格模式**

```javascript
function doSomething(a, b) {
	'use strict'
}
```

如果函数参数使用了：默认值、解构赋值、扩展运算符，那么就不能设置严格模式，不然会报错。

原理：函数执行时候是先执行<code>参数</code>在执行<code>函数体</code>，这样就只有<code>函数体</code>才知道是否以严格模式执行，所以这样就不符合严格模式的。

解决办法：

- 设置全局模式的严格模式，在外面写<code>'use strict'</code>

- 把函数包放在无参数的立即执行函数里面：

  ```javascript
  const doSomething = (function () {
    'use strict';
    return function(value = 42){
      return value;
    }
  })
  ```



****



**name属性**：返回该函数名

```javascript
let f1 = function(){}
console.log(f1.name);	// f1
console.log((new Function).name); // anonymous
function foo() {}
console.log(foo.bind({}).name)  // bound foo
console.log((function(){}).bind({}).name) // bound 
```



****



#### 箭头函数

- 无参数： `( ) => { }`
- 有参数： `( 参数 ) => { }`
- 有返回值：`( ) => 返回值`
- 有返回值：`( ) => { return 返回值 }`

```javascript
let f = v => v
// 等价于
let f = function(v) {
	return v
}

let f = () => 5
// 等价于
let f = function() {
	return 5
}

let f = ( num1, num2) => num1 + num2
// 等价于
let f = function(num1, num2) {
	return num1 + num2
}
```



关于箭头函数和函数

```javascript
var obj = {
  fire: () => {
    console.log(this);	//	windows
  },
  fire2: function () {
    console.log(this);	//	obj
  },
};
```





**this指向**：函数体内的this对象就是**定义时所作的对象**，不是使用时所作的对象。

```javascript
// 箭头函数
function foo(){
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
}
var id = 21
foo.call({id: 42})	// id:42

// 使用functuon定义
function foo() {
    setTimeout(function() {
        console.log('id:', this.id)
    }, 100)
}

var id = 21
foo.call({id: 42})	// id:21
```



****



**函数绑定**

函数绑定是用来取代：call、apply、bind，调用的。

函数绑定运算符是：<code>::</code> ，左边是对象，右边是函数，将左边的对象作为上下文环境(this对象)绑定到右边函数上。

```javascript
obj::foo;
// 等同于
foo.bind(obj)

obj::foo(...arguments)
//等同于
foo.apply(obj, arguments)
```

如果双冒号左边为空，右边是对象的方法，那么就是将该方法绑定到该对象上。

```javascript
var method = obj::obj.foo
// 等同于
var method = ::obj.foo

let log = ::console.log
//等同于
var log = console.log.bind(console)
```



****



#### 尾调用优化

什么是尾调用？

在函数的最后一步调用另外一个函数。

```javascript
function f(x){
  // 最后调用例外一个函数
	return g(x)
}
// 尾调用不一定在函数尾部，只要是最后一步调用即可
function f(x){
	if(true){
		return m(x)
	}
}
```



**以下均不是尾调用**

```javascript
function f(x){
	let y = g(x)
	return y
}
function f(x){
	return g(x) + 1
}
function f(x){
	g(x)
}
```



**优化**

函数调用的时候会形成一个“<code>调用记录</code>”，又称"<code>调用帧</code>"，用来保存调用位置和内部变量等信息。由于尾调用是函数最后一步，所以不用保留调用帧，所以直接用内层函数的调用帧代替外层函数。

看这：由于<code>函数f</code>在调用完<code>函数g</code>以后就结束了，所以就会<code>删除函数f(x)的调用帧</code>，只<code>保留了g(3)的调用帧</code>，这就是<code>尾调用优化</code>。只保留内层函数的调用帧，这样每次执行时<code>调用帧只有一项</code>，大大节省内层。



```javascript
function f(){
  let m = 1
  let n = 2
	return g(m + n)
}
f()
// 等同于
function f(){
	return g(3)
}
f()
// 等同于
g(3)
```

看着：：注意！！！只有不用<code>外层函数的内部变量</code>，<code>内部函数的调用帧</code>才会取代<code>外层函数的调用帧</code>。



**尾递归**

递归这玩意很消耗内层，需要保存成百上千的调用帧，容易发生<code>栈溢出错误</code>。

如果使用尾递归的话，<code>只存在一个调用帧</code>，就不会发生栈溢出错误。

```javascript
function factorial(n) {
  if (n == 1) return 1
  return n * factorial(n - 1)
}
factorial(5)	// 120
```



**严格模式**

要注意，<code>尾递归调用优化</code>只会在严格模式下调用，因为在正常模式下函数内部有两个变量，可以跟踪函数的调用枝。  

- func.arguments ：返回调用时函数的参数。  
- func.caller ：返回调用当前函数的那个函数。  



尾调用优化发生时，函数的调用战会改写，因此上面两个变量就会失真。严格模式禁用这
两个变量，所以尾调用模式仅在严格模式下生效。



**尾递归的使用**

```javascript
function tco(f) {
    var value
    var active = false
    var accumulated = []

    return function accumulator() {
        accumulated.push(arguments)
        if (!active) {
            active = true
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift())
            }
            active = false
            return value
        }
    }
}

var sum = tco(function (x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    }else {
        return x
    }
})

console.log(sum(1, 10000))
```



****



立即执行函数：`(function(){})()`

- `call()`：两个参数，函数作用域和**参数**

- `apply()`：两个参数，函数作用域和**参数数组**

  - ```javascript
    // 结果都是一样的，看你需求
    function sum(num1, num2){ return num1 + num2 }
    function applySum(num1, num2){
    	return sum.apply(this, arguments)
    }
    function applySum(num1, num2){
    	return sum.apply(this, [num1, num2])
    }
    function callSum(num1, num2){
    	return sum.call(this, num1, num2)
    }
    ```

- call的真正用途在这里

  - 当call的this指向`对象o`的时候，他的`this.color`就是blue

  - ```javascript
    window.color = "red"
    var o = { color: "blue" }
    function sayColor(){
    	alert(this.color)
    }
    sayColor()	// red
    sayColor.call(this)	// red
    sayColor.call(window)	// red
    sayColor.call(o)	// blue
    ```

- `bind()`：绑定函数实例



****



### Symbol唯一值

1）表示独一无二的值，类似于字符串的数据类型

2）Symbol 的值的唯一，解决命名冲突的问题

3）Symbol 不能与其他数据进行运算

4）Symbol 定义的对象属性不能使用 for in 循环变量，但是可以使用`Relect.ownKeys`获取对象的所以键名

`.description`：获取描述字符

- 创建Symbol

```javascript
let t1 = Symbol('test1')
let t2 = Symbol('test1')
console.log(t1 === t2)	// fasle

let t1 = Symbol.for('test1')
let t2 = Symbol.for('test1')
console.log(t1 === t2)	// true
```

- 添加属性和方法

```javascript
//声明一个对象
let methods = {
    up: Symbol(),
    down: Symbol()
};
game[methods.up] = function(){
    console.log("我可以改变形状");
}
let youxi = {
    name:"狼人杀",
    [Symbol('say')]: function(){
        console.log("我可以发言")
    },
    [Symbol('zibao')]: function(){
        console.log('我可以自爆');
    }
}
console.log(youxi)
```



****



### set集合

集合，类似数组，成员值是唯一的，集合了 iterator 接口 可以使用扩展运算符和for of遍历

- 方法：
  - size：返回集合元素个数
  - add：添加新元素
  - delete：删除元素
  - has：检测是否存在元素
  - clear：清空集合

数组去重

```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let result = [...new Set(arr)];
console.log(result);
```

交集

```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let arr2 = [4,5,6,5,6];
let result = [...new Set(arr)].filter(item => {
    let s2 = new Set(arr2);// 4 5 6
    if(s2.has(item)){
        return true;
    }else{
        return false;
    }
});
```

并集

```javascript
let union = [...new Set([...arr, ...arr2])];
console.log(union);
```



****



### Map键值对集合

类似对象，键值对的集合，集合了 iterator 接口。可以理解为是一个升级版的对象，可以用对象作为key

- 方法：

  - size：返回集合元素个数
  - set：添加新元素，返回当前Map
  - get：获取当前元素的
  - has：检测是否存在元素
  - clear：清空集合

```javascript
    //声明 Map
    let m = new Map();
    //添加元素
    m.set('name','尚硅谷');
    m.set('change', function(){
        console.log("我们可以改变你!!");
    });
    let key = {
        school : 'ATGUIGU'
    };
    m.set(key, ['北京','上海','深圳']);
    //size
    // console.log(m.size);
    //删除
    // m.delete('name');
    //获取
    // console.log(m.get('change'));
    // console.log(m.get(key));
    //清空
    // m.clear();
    //遍历
    for(let v of m){
        console.log(v);
    }
    // console.log(m);
```



****



### Class类

`constructor`：构造函数

`extends`：继承父类

`super`：调用父类构造方法

`#`：私有属性

类的继承1=>

```javascript
// 手机
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}

Phone.prototype.call = function(){
    console.log("我可以打电话");
}

// 智能手机
function SmartPhone(brand, price, color, size){
    // 关键是这里，使用call方法初始化
    Phone.call(this, brand, price);
    this.color = color;
    this.size = size;
}

// 设置子级构造函数的原型
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPhone;
```

类的继承2=>

```javascript
class Phone{
    //构造方法
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    //父类的成员属性
    call(){
        console.log("我可以打电话!!");
    }
}

class SmartPhone extends Phone {
    //构造方法
    constructor(brand, price, color, size){
        super(brand, price);// Phone.call(this, brand, price)
        this.color = color;
        this.size = size;
    }

    photo(){
        console.log("拍照");
    }

    call(){
        console.log('我可以进行视频通话');
    }
}
```



## DOM

### 获取元素

class属性：`.`

id属性：`#`



`getElementById`：通过ID获取，**返回对象**，可直接操作。



`getElementsByName`：通过name获取，**返回对象数组**，需遍历。



`getElementsByTagName`：通过标签名获取，**返回对象数组**，需遍历。

```javascript
document.getElementsByTagName("li");
document.getElementsByTagName("li").length;
```



`getElementsByClassName`：通过类名访问，**返回对象数组**，需遍历，如要访问多个类名需加空格。

```javascript
document. getElementsByClassName("sale");
document. getElementsByClassName("important sale");
```

遍历对象数组建议采用：for循环

```javascript
for(let i=0; i<t.length; i++){
  console.log(t[i]);
}
```



`querySelector`：匹配CSS选择器的第一个元素

```javascript
document.querySelector(`[name="username"]`);	// 获取name属性为username的元素
document.querySelector("a[target]");	// 获取文档中有 "target" 属性的第一个 <a> 元素：
```





****



### 获取&修改属性

`attribute`：属性名。

`getAttribute(attribute)`：获取属性值

`setAttribute(attribute, value)`：修改属性值



`parentNode`：获取父元素



`element.childNodes`：获取该元素的所有子元素数组，返回节点集合`NodeList`

```javascript
document.getElementsByTagName("body")[0].childNodes
```



`node.nodeValue`：设置节点值

设置节点值，必须是节点！

```javascript
var c=document.getElementsByTagName("BUTTON")[0];
var x=document.getElementById("demo");  
x.innerHTML=c.childNodes[0].nodeValue;
```

`firstChild与lastChild`：查看第一个和最后一个节点孩子



`element.style.属性名`：获取样式

`getComputedStyle(element,null)`：获取当前生效的属性

这是一个window方法，有2个参数

- 第一个，需要获取样式的元素
- 第二个，可以传递一个伪元素



`clientWidth`&`clientHeight`：获取可见宽度和高度，不带px

`offsetWidth`&`offsetHeight`：获取元素的整个的宽度和高度，包括内容区、内边距和边框



`scrollWidth`&`scrollHeight`：获取元素整个滚动区域的宽度和高度

`scrollLeft`&`scrollTop`：可以获取水平和垂直滚动条滚动的距离

如果`scrollHeight`减`scrollTop`等于`clientHeight`就表示滚动条到底了

如果想做拖拽效果，需要加上滚动条的宽度和高度



`onscroll`：滚动事件

`onmousemove`：事件会在鼠标移动时触发

`onmousedown`：鼠标按下

`onmouseup`：鼠标松开

`clientX`&`clientY`：获取鼠标指针的水平和垂直坐标

`pageX`&`pageY`：获取鼠标相对于当前页面的坐标

`onkeydown`：键盘按下事件

`event.keyCode`：键盘按键

`event.wheelDelta`：滚轮长度



`event.cancelBubble = true;`：取消冒泡（事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发）



事件的委派：指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素从而通过祖先元素的响应函数来处理事件。



`对象.addEventListener('事件',fucntion())`：为一个元素的相同事件同时绑定多个响应函数，如果使用`对象.事件`的方式绑定那么后者会覆盖前者。



****



### BOM

使用<code>window</code>对象的<code>open()</code>方法来创建**新的浏览器窗口**

<code>window.open(url, name, features)</code>

- url，网页URL的地址
- name，新窗口的名字，可以通过该名字与新窗口进行通信
- features，以逗号分隔的字符串，包含新窗口的各种属性：尺寸、工具条、菜单条、初始显示位置，等。

```html
<a href="#" onclick="popUp('https://www.baidu.com/'); return false;">使用onclick：打开新窗口并跳转到百度</a>
<script type="text/javascript" src="javascript/popUp.javascript"></script>
```

```javascript
function popUp(winURL) {
    window.open(winURL, "popup", "window = 320, height = 480")
}
```

如果有些用户禁用的javascript那么这种办法就不太妥当，所以我们可以用另外一个办法

```html
<a href="https://www.baidu.com/" onclick="popUp(this.getAttribute('href')); return false;">使用onclick：打开新窗口并跳转到百度</a>
<a href="https://www.baidu.com/" onclick="popUp(this.href); return false;">使用onclick：打开新窗口并跳转到百度</a>
```



`javacript:`伪协议

**伪协议**：让我们通过连接调用javascript函数

```html
<a href="javascript:popUp('https://www.baidu.com/')">使用伪协议:打开新窗口并跳转到百度</a>
```



`confirm`：带选择提示框

`prompt`：带输入框的提示框

`Navigator`：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器

`Location`：代表当前浏览器的地址栏信息

`History`：代表浏览器的历史记录

`Screen`：用户的屏幕的信息



`setInterval(回调函数, 时间)`：定时调用，一直调用。

`setTimeout`：不会立刻调用，只会调用一次。

`clearInterval()`：关闭定时器



****



### 标记

`document.write()`：打印文本

```javascript
document.write("<p>This is inserted</p>")
```



`innerHTML`：和write差不多，下面输出结果是相同的。

```javascript
console.log(testdiv.innerHTML);
testdiv.innerHTML = "<p>This is <em>emem</em> content.</p>"
```



`document.createElement(nodeName)`：**创建元素**

`parent.appendChild(child)`：插入节点树

`document.createTextNode(text)`：给节点添加文本数据

```javascript
// 第一步：创建节点
let child = document.createElement("p")
// 第二步：获取节点树
let parent = document.getElementById("testdiv")
// 第三步：创建文本数据
let txt = document.createTextNode("Hello world")
// 第四步：给节点追加文本数据
child.appendChild(txt)
// 第五步：将节点插入
parent.appendChild(child)
```



`parentElement.insertBefore(newElement, targetElement)`：在一个现有元素前插入一个新元素

- 父元素：目标元素的父元素（`parentElement`）
- 新元素：你想插入的元素（`newElement`）
- 目标元素：将新元素插入到哪个元素（`targetElement`）前





## Pro

### 正则表达式

采用字面量创建：`var 变量 = /正则表达式/匹配模式`

`RegExp`该类型支持正则表达式，可以创建一个正则表达式

```javascript
console.log(new RegExp('xyz', 'i'));
```



- g：表示匹配所有字符串，应用于所有字符串，不会在匹配到第一个时结束

- i：不区分大小写

- m：多行

  - ```javascript
    // 匹配at
    var pattern1 = /at/g;
    // 匹配第一个是bat或act，不区分大小写
    var pattern2 = /[bc]at/i
    // at结尾的三个字符，不区分大小写
    var pattern3 = /.at/gi
    ```

- 元字符必须转义：`{}[]\^$|()?*+.`

- 转义字符：`\`

  - ```javascript
    // 匹配[bc]at，不区分大小写
    var pattern4 = /\[bc\]at/i
    ```

- 上面是通过**字面量形式**定义的正则表达式，而可以通过RegExp构造函数来创建

  - ```javascript
    // 下面两种方法是等价的
    // 匹配[bc]at，不区分大小写
    var pattern4 = /\[bc\]at/i
    var pattern6 = new RegExp("\\[bc\\]at", "i")
    ```



正则表达式规则：

> 1. `|`：或的意思，例如检查字符串是否存在a或b，`/a|b/`
> 2. `[]`：里的内容也是或的关系，原子表
>
> `[ab] == a|b`；`[a-z]`：任意小写字母；`[A-Z]`任意大写字母；`[A-z]`任意字母；`[0-9]` 任意数字
>
> 3. `[^]`：除了，例如检查字符串是否存在**除了**什么什么以外的东西
> 4. `()`：优先级
> 5. `{n}`：出现n次；`{m,n}`：出现m到n次；`m,`：出现m次以上
> 6. `+`：至少一个，等价于`{1,}`
> 7. `*`：0个或多个，等价于`{0,}`
> 8. `?`：0个或1个，等价于`{0,1}`，`https?`表示s可能会不存在->http
> 9. `^`：匹配开头，例如检查一个字符串中是否以a开头`/^a/`
> 10. `$`：匹配结尾，边界符
> 11. `.`：任意字符
> 12. `\`：转义，例如如果想表示点号则需要`\.`
> 13. `?:`：表示不保留，`(?:com|cn)`意为我匹配这段但是不保留
>
> `\w`：任意字母、数字、_ `[A-z0-9_]`
>
> `\W`：除了字母、数字、_ `[^A-z0-9_]`
>
> `\d`：任意的数字` [0-9]`
>
> `\D`：除了数字` [^0-9]`
>
> `\s`：空格
>
> `\S`：除了空格
>
> `\b`：单词边界=>单词或非单词之间(意思是,该单词前面或后面**不存在内容**)看下面例子
>
> `\B`：除了单词边界
>
> 
>
> 例：创建一个正则表达式检查一个字符串中是否含有单词child=>`/\bchild\b/`--->`'hello child'`
>
> 例：去掉开头和结尾空格=>`/^\s*|\s*$/g`
>
> 匹配任意字符：`(.*?)`



- 采用字面量形式是共享同一个RegExp实例，如果使用构造函数创建则每一个RegExp实例都是一个新的实例。
  - `string.split()`：拆分
  - `string.search()`：搜索指定内容，返回其位置，找不到就-1
  - `string.match()`：将符合条件的内容提取出来
  - `string.replace()`：将字符串中指定内容替换为新的内容，两个参数，替换内容和新内容。
  - **--------------以下都是正则表达式的方法**
  - `test()`：按规则查找，返回true和false
  - `exec()`：返回包含第一个匹配项信息的**数组**，没有匹配项返回null。有两个格外属性：index（匹配项在字符串的位置）和input（字符串）
- 下面的就有点特殊，他们都是RegExp的函数。你需要先运行1+个的正则表达式匹配方法才能使用下面函数。
  - `lastMatch`：最近一次匹配项
  - `lastParen`：最近一次匹配的捕获组
  - `leftContext`：字符串中lastMatch之前的文本
  - `multiline`：布尔值、是否是多行模式
  - `rightContext`：字符串中lastMatch之后的文本
- 小总结
  - test检查指定字符串是否存在
  - exec和match都可以获取值，区别一个是正则表达式的方法，一个是字符串的方法

https://codeplayer.vip/p/j7sl5

> `/<(h[1-6])><\/\1>/`：第一个原子组`()`表示为`\1`
>
> 
>
> 如果你要获取某个地方的东西，那就给他个`()`，例如
>
> `/<h[1-6]>(\w+)<\/h[1-6]>/`：这样那么就可以获取h1标志里面的内容



> 关于原子组的小知识，可以通过`$2`获取到第一个原子组(`(\w+)`)的信息
>
> ```javascript
> let a = '<h1>123</h1>'
> let r = /<(h[1-6])>(\w+)<\/h1>/
> console.log(a.replace(r, '$2'));	// 123
> a.replace(r, (p0, p1, p2) => {
> 	// p0 = <h1>
> 	// p1 = 123
> 	// p2 = </h1>
> })
> ```



> 有个很关键的东西是：`?:`
>
> 这样操作，那么我提取出来的地址就只有bilibili，就不会包含后面的com
>
> ```javascript
> let a = 'https://www.bilibili.cn/'
> let r = /https:\/\/\w+.(\w+).(?:com|cn)+/
> console.log(a.match(r)) // bilibili
> ```



> 密码验证，大小写字母，5到10位
>
> ```javascript
> input.addEventListener("keyup", e=>{
>   const value = e.target.value
>   let r = [/^[a-z0-9]{5,10}$/i, /[A-Z]/]
>   let state = r.every(e => e.test(value))
>   console.log(state ? "yes" : "no");
> })
> ```



> 禁止贪婪：`?`
>
> 贪婪匹配意思是：一个个的去匹配
>
> 禁止贪婪就是直接匹配一个部分。
>
> 下面中，我想匹配100这个数字，如果是贪婪匹配结果是0，禁止贪婪就是100。
>
> ```javascript
> let a = "This is 100 Numbers"
> console.log(a.match(/.*(\d+)/))	// 0
> console.log(a.match(/.*?(\d+)/))	// 100
> ```



> `$&`：代表自己
>
> ```javascript
> main.innerHTML.replace(/替换/g. `<a href="#">已被$&</a>`)
> // 页面会显示为：已被替换
> ```



命名捕获：`?<关键字>`，给组起别名，然后使用`$<关键字>`捕获

```javascript
const reg = /<h1>(?<text>.*)<\/h2>/;
let a = '<h1>baidu</h1>'
console.log(a.replace(reg, "<h2>$<text></h2>"))
```



> tips：
>
> 断言()，是相对于后面
>
> 例如`(?<!oss)\.`，意思是`.`点好的前面不能是oss。

断言匹配：`(?=关键字)`，如果他后面是**关键字**的话。

```javascript
// 正向断言
// 如果数字后面是关键 **啦** 的话，那么提取这段数字
let str = 'javascript5211314你知道么555啦啦啦';
const reg = /\d+(?=啦)/;
const result = reg.exec(str);	// 555
// 反向断言
// 前面第一个字是关键字 "么" ，那么返回这段数字
const reg = /(?<=么)\d+/;
```



断言匹配前面：`(?<=关键字)`，前面是**关键字**



断言匹配：`(?!关键字)`，后面不是**关键字**

> 限制用户关键字
>
> 意思是从开始到后面都不能出现关键字
>
> ```javascript
> let reg = /^(?!.*关键字.*)/i
> ```



断言匹配前面：`(?<!关键字)`，前面不是**关键字**



dotALL模式：

- 元字符：<code>.</code> ，匹配除了换行符以外的任意单个字符

- 模式修正符：<code>s</code>，加了模式修正符，那么 <code>.</code>可以匹配任意字符

- 全局匹配：<code>g</code>，全局匹配

  - \S：是换行符，<code>.*?</code>：通配符/元字符
- `matchAll`：获取正则表达式批量匹配的结果，返回结果是一个可迭代对象，需要遍历或扩展运算符

```javascript
let str = `
<ul>
    <li>
        <a>肖生克的救赎</a>
        <p>上映日期: 1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映日期: 1994-07-06</p>
    </li>
</ul>`;
const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/;
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
let result;
let data = [];
while(result = reg.exec(str)){
    data.push({title: result[1], time: result[2]});
}
//输出结果
console.log(data);
// 获取匹配结果
const result = str.matchAll(reg);
```







## ES6+



`let`：声明遍历，与var不同，他不存在**变量提升**，不影响作用域链。

`const`：定义常量，值不能修改的量，常量一般使用大写，常量所指向的地址没有发生改变，就不会报错。



数组解构赋值：

```javascript
const my = ['test1','test2','test3'];
let [t1] = my
console.log(t1)	// test1
```

对象解构赋值：

```javascript
const my = {
	name: '我的名字',
  age: '18',
  test: function(){
    console.log("我");
  }
};
let {name} = my;
console.log(name)	// 我的名字
```

参数默认值

```javascript
function connect({host="127.0.0.1", username,password, port}){}
```



<code>`</code>：模板字符串，内容中可以直接换行，变量拼接。

```javascript
let name = '名字'
let my = `我的名字是：${name}`
```



### 箭头函数

`=>`：箭头函数，箭头函数的`this`是是静态的，**永远指向**函数声明所在的作用域下的 this 的值，因此使用`call`是无法改变箭头函数的`this`的

```javascript
function getName(){
    console.log(this.name);
}
let getName2 = () => {
    console.log(this.name);
}
window.name = 'WindowName';
const school = {
    name: "schoolName"
}
getName.call(school)	// schoolName
getName2.call(school)	// WindowName
```

1）不能实例化，因为this是静态的。

2）不能使用 arguments 变量（arguments是用来保存参数的）

3）箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调

4）箭头函数不适合与 this 有关的回调. 事件回调, 对象的方法



`...args`：REST参数，用来获取函数的实参，代替`arguments`

```javascript
function date(...args){
    console.log(args);// filter some every map 
}
date('test1','test2','test3');	// ['test1','test2','test3']
```



`...`：spread扩展运算符，将『数组』或『对象』转换为逗号分隔的『参数序列』

```javascript
const my = ['test1','test2','test3'];
function t1(){
    console.log(arguments);
}
t1(...my);// chunwan('test1','test2','test3')
// 对象合并
const skillOne = {q: '天音波'}
const skillTwo = {w: '金钟罩'}
const mangseng = {...skillOne, ...skillTwo};
```



`function * name()`：生成器

是一种异步编程的解决方案。通过next()方法控制向下执行，yield是一个分隔符。

参数传递=>

```javascript
function * gen(arg){
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
}

//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());
//next方法可以传入实参
console.log(iterator.next('BBB'));
// AAA
// {value: 111, done: false}
// BBB
// {value: 222, done: false}
```

异步=>

```javascript
//模拟获取  用户数据  订单数据
function getUsers(){
    setTimeout(()=>{
        let data = '用户数据';
        //调用 next 方法, 并且将数据传入
        iterator.next(data);
    }, 1000);
}
function getOrders(){
    setTimeout(()=>{
        let data = '订单数据';
        iterator.next(data);
    }, 1000)
}
function * gen(){
    let users = yield getUsers();
    let orders = yield getOrders();
}
//调用生成器函数
let iterator = gen();
iterator.next();
```







## Promise

首先，Promise是异步的，其包含`pending`、`fulfilled`、`rejected`三种状态。

- `pending` 指初始等待状态，初始化 `promise` 时的状态
- `resolve` 指已经解决，将 `promise` 状态设置为`fulfilled`
- `reject` 指拒绝处理，将 `promise` 状态设置为`rejected`



Promise的方法

- `.then`：第一个参数是成功、第二个是失败。
- `.catch`：处理错误
- `.finally`：无论结果如何都会执行。
- `.all`：接收promise数组，需要全部状态为`resolve`，有一个为`rej`则返回`rej`
- `.any`：接收promise数组，与all相反，有一个是`reslove`那就是`reslove`。
- `.race`：接收promise数组，race是赛跑，以状态变化最快的那个 `Promise` 实例为准，最快的 `Promise` 成功 `Promise.race` 就成功，最快的 `Promise` 失败 `Promise.race` 就失败。
- `.allSettled`：接收promise数组，返回所有promise的失败/成功的状态数组，下面有例子。



当操作成功时调用 `resolve`，失败时调用 `reject`。

```javascript
new Promise((resolve, reject) => {
  resolve('A')
})
  .then(res => {
    console.log('resolve: ' + res)
  })
  .catch(err => {
    console.log('reject: ' + err)
  })
```



- `allSettled`

```js
let p1 = new Promise(res => {
  setTimeout(() => {
    res('P1')
  }, 1000)
})
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('error')
  }, 1000)
})
Promise.all([p1, p2]).then(res => {
  console.log(res)
}) // Uncaught (in promise) error
Promise.allSettled([p1, p2]).then(res => {
  console.log(res)
})
// [
//   ({ status: 'fulfilled', value: 'P1' },
//   { status: 'rejected', reason: 'error' })
// ]
```





### async和await

`async`函数返回值为`promise`对象

- `await`表达式：
  - 必须写在async函数中
  - await 右侧的表达式一般为 promise 对象
  - await 返回的是 promise 成功的值
  - await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

```javascript
// async 函数
async function fn(){
    // 抛出错误, 返回的结果是一个失败的 Promise
    // throw new Error('出错啦!');
    // 返回的结果如果是一个 Promise 对象
    return new Promise((resolve, reject)=>{
        resolve('成功的数据');
        // reject("失败的错误");
    });
}

const result = fn();

//调用 then 方法
result.then(value => {
    console.log(value);
}, reason => {
    console.warn(reason);
})
```

注意，由于async函数的返回值是一个promist对象，如果想获取值可以通过await表达式获取。

```javascript
//创建 promise 对象
const p = new Promise((resolve, reject) => {
    resolve("用户数据");
    // reject("失败啦!");
})

// await 要放在 async 函数中.
async function main() {
    try {
        let result = await p;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
//调用函数
main();
```



`?`：可选链操作符

```javascript
const dbHost = config?.db?.host;
```



动态import

```javascript
// import * as m1 from "./hello.javascript";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function(){
    import('./hello.javascript').then(module => {
        module.hello();
    });
}
```



BigInt：大整形，在javascript中最大整数是--992，如果想在加1会无法加，所以可以借助于这玩意

```javascript
let n = 123;
console.log(BigInt(n));
let max = Number.MAX_SAFE_INTEGER;
console.log(BigInt(max))
console.log(BigInt(max) + BigInt(1))
console.log(BigInt(max) + BigInt(2))
```



globalThis：永远指向全局对象，Windows对象





## 导入导出

模块化的优势：防止命名冲突、代码复用、高维护性

三种包暴露方式

```javascript
// 第一种：分别暴露
export let school = '尚硅谷';

// 第二种：统一暴露
let school = '尚硅谷';
function findJob(){
    console.log("我们可以帮助你找工作!!");
}
export {school, findJob};

// 第三种：默认暴露
export default {
    school: 'ATGUIGU',
    change: function(){
        console.log("我们可以改变你!!");
    }
}
```

三种包引入方式

```javascript
// 第一种：通用引入
import * as m1 from "./src/javascript/m1.javascript";

// 第二种：解构赋值
import {school, teach} from "./src/javascript/m1.javascript";
import {school as guigu, findJob} from "./src/javascript/m2.javascript";
import {default as m3} from "./src/javascript/m3.javascript";

// 第三种：简便形式针对默认暴露
import m3 from "./src/javascript/m3.javascript";
```



