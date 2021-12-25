# MongoDB

| SQL术语/概念 | MongoDB术语/概念                    | 解释/说明                           |
| ------------ | ----------------------------------- | ----------------------------------- |
| database     | database                            | 数据库                              |
| table        | collection                          | 数据库表/集合                       |
| row          | document                            | 数据记录行/文档                     |
| column       | field                               | 数据字段/域                         |
| index        | index                               | 索引                                |
| table joins  | 表连接,MongoDB不支持                |                                     |
| 嵌入文档     | MongoDB通过嵌入式文档来替代多表连接 |                                     |
| primary key  | primary key                         | 主键,MongoDB自动将_id字段设置为主键 |

## 一、常用命令

> mongoDB储存分为两个部分，上部分为内存，下部分为磁盘，当使用use创建的时候，存放的是内存还没有持久化的储存到磁盘的位置(直到该database里面有集合/数据的时候才会被储存到磁盘中)，而show出来的是磁盘的位置，所以use创建后直接show是无法直接看到刚刚创建的database

> - 数据库创建的规范
>   - 不能是空字符串（"")。
>   - 不得含有' '（空格)、.、$、/、\和\0 (空字符)。
>   - 应全部小写。
>   - 最多64字节。  
>   - admin： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特
>     定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
>   - local: 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
>   - config: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。  

- **数据库操作**
  - `mongo --host XX --port XX`：启动
  - `use 数据库名称`：选择和创建数据库
  - `show dbs`：查看现有库
  - `db`：查看当前正在使用的数据库
  - `db.dropDatabase()`：删除库，需先进入该库



> - 集合创建的规范
>   - 集合名不能是空字符串""。
>   - 集合名不能含有\0字符（空字符)，这个字符表示集合名的结尾。
>   - 集合名不能以"system."开头，这是为系统集合保留的前缀。
>   - 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。  

- **集合操作（表）**
  - `show tables`：查看现有集合
  - 显式创建：
    - `db.createCollection(表名)`：创建集合
    - `db.集合名.drop()`：删除集合
  - 隐式创建的意思是创建文档的时候，如果集合不存在就自动创建集合。



> - comment集合如果不存在，则会隐式创建
> - mongo中的数字，默认情况下是double类型，如果要存整型，必须使用函数NumberInt(整型数字)，否则取出来就有问题了。
> - 插入当前日期使用 new Date()
> - 插入的数据没有指定` _id `，会自动生成主键值
> - 如果某字段没值，可以赋值为null，或不写该字段。
> - 规范：
>   - 键不能含有\0 (空字符)。这个字符用来表示键的结尾。
>   - .和$有特别的意义，只有在特定环境下才能使用。
>   - 以下划线"_"开头的键是保留的(不是严格要求的)。    



### 文档

- **文档基本CRUD**

- 添加文档

  - 文档(document)的数据结构和`JSON`基本一样

  - `db.集合名.方法`

  - 使用`insertOne()`向集合插入文档

    - ```sql
      db.集合名.insertOne({键:值, 键:值, 键:值})
      ```

  - `insertMany([{键:值, 键:值}, {键:值}, {键:值}])`：批量插入


一定要记得添加主键：`_id`，如果忘记添加会自动生成



- 查询文档

  - `find(<query>, [projection])`：查询文档
  - `findOne()`：返回第一条数据
  - `find({条件}, {键:1})`：**投影查询**，查询结果返回部分字段
    - **只显示键**，1表示真，只显示。默认`_id`会自动显示，如果想隐藏需`_id: 0`




- 捕获错误

  - 在进行插入文档的时候，如果出错将终止插入，已经插入成功的不会回滚，需要使用`try catch`

    - ```json
      try{
      	插入语句
      }catch(e){
      	print(e);
      }
      ```



  - **文档更新**：`updateone(query, update, options)`

    - **覆盖修改**：其他数据全部没有，**只剩下id和name**

    - ```sql
      db.test.update({_id:"1", {name:"myname"}})
      ```

    - **局部修改**：`$set`，只修改name，其他不管

    - ```sql
      db.test.update({_id:"1", {$set:{name:"myname"}}})
      ```

    - **批量修改**：使用`updateMany`或使用可选参数`{multi:true}  `

    - **列值增长的修改**：`$inc`每次增加1（对3号数据的点赞数，每次递增1 ）

    - ```sql
      db.comment.update({_id:"3"},{$inc:{likenum:1}})
      ```

  - `deleteOne(条件)`：删除文档

  - `deleteMany`，同上





- **文档的更多查询**
  - `count(query, options)`：统计查询，返回数字
  - `find().skip(number).limit(number)`：分页查询，使用ship跳过指定数量的数据，通过limit读取指定数量的数据
  

**意思是，跳过第一条数据，查询后面两条数据**

```sql
b.stu.count({class: '610'})
db.stu.find().skip(1).limit(2)
```



> 操作符技巧：大`g`great，小`l`less，于`t`than，等于`e`equal，不`n`not

- 排序
  
  - `find().sort(key:1)`：排序查询，1和-1代表升序和降序，可以和`sort>ship>limit`一起连用，执行顺序。
  - `find({字段:/正则表达式/})  `：正则表达式搜索
  - `find({字段名1: {$操作符: 值}})`：比较查询
    - 操作符：gt、lt、gte、lte、ne（大于、小于、大于等于、小于等于、不等于）
    - 字段1大于字段2就是`字段1 : {$gt: 字段2}`
  

```sql
db.stu.find({_id: {$gt: 2}})
```



> tips
>
> 查询评论集合中likenum大于等于700 并且小于2000的文档
>
> 1. 初始
>
> `find({})`
>
> 2. 当有多个条件判断时，第一步先判断是**与**还是**或**。写下**操作符**和**方括号**
>
> `find({$and: []})`
>
> 3. 在方括号里面添加判断语句。根据条件添加适量的**花括号**用逗号隔开
>
> `find({$and: [{},{}]})`
>
> `find({$and: [{$gt: 700},{$lt: 2000}]})`

- **包含查询**：``find(字段名1 : {$操作符: [ { },{ },{ } ]})``

  - 操作符：in和nin（包含和不包含），and、or（与或）

    - 查询评论集合中likenum大于等于700 并且小于2000的文档：  

    - ```sql
      db.comment.find({$and:[{likenum:{$gte:700}},{likenum:{$lt:2000}}]})
      ```

    - 查询评论集合中userid为1003，或者点赞数小于1000的文档记录  

    - ```sql
      db.comment.find({$or:[ {userid:"1003"} ,{likenum:{$lt:1000} }]})
      ```




### 小结

```
选择切换数据库：use articledb
插入数据：db.comment.insert({bson数据})
查询所有数据：db.comment.find();
条件查询数据：db.comment.find({条件})
查询符合条件的第一条记录：db.comment.findOne({条件})
查询符合条件的前几条记录：db.comment.find({条件}).limit(条数)
查询符合条件的跳过的记录：db.comment.find({条件}).skip(条数)
修改数据：db.comment.update({条件},{修改后的数据}) 或db.comment.update({条件},{$set:{要修改部分的字段:数据})
修改数据并自增某字段值：db.comment.update({条件},{$inc:{自增的字段:步进值}})
删除数据：db.comment.remove({条件})
统计查询：db.comment.count({条件})
模糊查询：db.comment.find({字段名:/正则表达式/})
条件比较运算：db.comment.find({字段名:{$gt:值}})
包含查询：db.comment.find({字段名:{$in:[值1，值2]}})或db.comment.find({字段名:{$nin:[值1，值2]}})
条件连接查询：db.comment.find({$and:[{条件1},{条件2}]})或db.comment.find({$or:[{条件1},{条件2}]})
```



## 二、索引

- 单字段索引
  - 根据一个字段上**进行排序**的索引，和数据结构中的**二分探测法**差不多
- 复合索引
  - 由多个字段组成的排序
- 地理空间索引、文本索引、哈希索引



- 索引的管理操作

  - `db.集合名.getIndexes()`：索引查看

    - ```sql
      //返回一个集合中的所有索引的数组 "_id"是默认创建索引
      > db.class.getIndexes()
      [
      	{
      		"v" : 2,            //版本号
      		"key" : {           //索引的key  1是升序
      			"_id" : 1
      		},
      		"name" : "_id_",    //索引名称
      		"ns" : "Rainbow.class"  //索引所在的表的绝对路径
      	}
      ]
      
      ```




  > 复合索引->如果查询2个则会命中索引，单独查询第一个(userid)也会命中，但是如果是**单独查询第二个(nickname)**就不会命中索引。

  - `createIndex(keys, options)`：创建索引

  - `createIndex({userid:1, nickname:-1}, options)`：复合索引

    - 根据`userid`进行升序，然后在根据`nickname`进行降序


  options：唯一索引`{"unique": true}`

  

  - `dropIndex("索引名称")`：删除索引

    - `dropIndex({userid: 1})`

  - `dropIndexes()`：删除全部索引

- **索引的使用**

  - `find(query, options).explan("executionStats")`：分析查询性能
    - `"stage" : "COLLSCAN"` ，表示全集合扫描还没用索引
    - `"stage" : "IXSCAN"`，基于索引的扫描用上了索引
  - 涵盖的查询：例如索引字段是id，然后我就是查id那么他就直接从索引中返回结果，而不扫描任何文档或将文档带入内存。 这些覆盖的查询可以
    非常有效。  



## 三、账户权限

> **roles角色：**
>
> 1. 数据库用户角色：read、readWrite;
> 2. 数据库管理角色：dbAdmin、**dbOwner**、userAdmin；
>
> 3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
>
> 4. 备份恢复角色：backup、restore；
>
> 5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
>
> 6. 超级用户角色：**root **
>
> Read：允许用户读取指定数据库
> readWrite：允许用户读写指定数据库
> **dbOwner**：允许用户在指定数据库中执行全部操作
> dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
> userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
> clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
> readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
> readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
> userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
> dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
> root：只在admin数据库中可用。超级账号，超级权限

创建超级管理员

```sql
use admin
db.createUser({
    user: 'root',
    pwd: '123456',
    roles: [{role: 'root', db:'admin'}]
})
```



进入配置文件添加点东西

`\MongoDB\Server\4.4\bin\mongod.cfg`

```sql
security:
  authorization: enabled
```



登陆账户

```sql
mongo admin -u 用户名 -p 密码
mongo IP地址:27017/test -u 用户名 -p 密码
```



连接stu库，然后登陆

```sql
mongo stu
db.auto("用户名": "密码")
```





查看用户：`show users`

删除用户：`db.dropUser()`



## 四、聚合管道

`$project`：mysql中的select

设置别名、加法（**$add**）、减法（**$subtract**）、乘法（**$multipy**）、除法（**$divide**）、求模（**$mod**）

```sql
// 重命名字段class
// 通过 "$class" 来表示操作的字段
db.stu.aggregate([
  {
    $project: {_id:-1, class: 1, myclass: "$class"}
  }
])
```



`$match`：条件匹配。只满足条件的文档从能进入下一阶段

显示id大于2的

```sql
db.stu.aggregate([
  {
    $project: {_id:-1, class: 1, myclass: "$class"}
  },
  {
    $match: {_id: {$gt: 2}}
  }
])
```



`$limit`：限制结果数量

`$skip`：跳过文档数量

`$sort`：条件排序

`$group`：条件组合结果

统计class类别，每个类别的数量

```sql
db.stu.aggregate([
  {
    $group: {_id: "$class", count: {$sum: 1}}
  }
])
```



`$lookup`：引入其他集合的数据











