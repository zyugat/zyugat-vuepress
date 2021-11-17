# Mysql

连接数据库

```shell
mysql -uroot -p
```



## 数据库操作

**数据库列表**

使用以下命令可以得到当前服务器中的所有数据库。

```sql
show databases;
```

**创建新库**

下面是创建数据库 `testmysql` 并设置字符集为 utf8。

```sql
create database testmysql CHARSET utf8;
```

**查看数据库**

```sql
show create database testmysql;
```

**删除数据库**

```sql
drop database testmysql;
```

为了防止删除不存在的数据库报错

```sql
drop database if exists testmysql;
```

**选择数据库**

数据库主要是对表操作，选择数据库后可以省掉每次指定数据库的麻烦。

```sql
use testmysql
```



## 表操作

创建表

```sql
create table users(
    uid int primary key auto_increment,
    uname varchar(30) not null,
    utext varchar(100) default null
)
```



添加数据

```sql
insert into users(uname, utext) values ('First', '第一个')
```



复制数据

```sql
# 创建一个`users2`的表，将`users`的数据复制其中
create table users2 like users;

# 复制其他表的数据
insert into users2 select * from users;

# 只复制批定字段
insert into users2 (uname) select uname from users;

# 只复制指定字段，并为不同名字段起别名
create table users2 (id int primary key AUTO_INCREMENT,name varchar(30)) select id,cname as name from users;
```



删除表

```sql
drop table users;
drop temporary table users;
```



**修改表**

```sql
# 修改字段类型
alter table users modify utext varchar(200);

# 修改字段名与字段类型
alter table users change utext newtext varchar(200);

# 添加字段
alter table users add uage int;

# 在id后面添加字段
alter table users add uage int after uid;

# 字段添加在最前
alter table users add uage int first;

# 删除字段
alter table users drop uage;
```



临时表

- 可以与普通表同名，优先级高于普通表
- 连接终端时自动删除

```sql
create temporary TABLE
```



> **执行顺序**
>
> from       -- 查询
>
>  where      -- 限制条件
>
>  group by   -- 分组
>
>  having     -- 过滤条件
>
>  order by   -- 排序
>
>  limit      -- 展示条数
>
>  distinct   -- 去重
>
>  select     -- 查询的结果
>
> 正则：`select * from emp where name regexp '^j.*(n|y)$';`
>
> 集合查询：max 、min 、avg 、sum 、count 、group_concat 。
>
> 内连接：inner join
>
> 左连接：left join
>
> 右连接：right join
>
> 全连接： 左连接 union 右连接
>
> replace 替换



查询数据

```sql
select * from users;

# 合并查询,将数据合并成一个
select CONCAT(uid,uname) as 'class_info' FROM users;

# 通过like语句查询，包含"第一"这一关键字的字段
select * from users where utext like '%第一%';

# 不包含"第一"这一关键字的字段
select * from users where utext not like '%第一%';

# 去重复
select distinct uname from users;

# ID 20到35之间
select * from users where uid between 20 and 35;

# 查询uid为1，2，3的字段
select * FROM users where uid in(1,3,2);
```



排序

```sql
# 从大到小
SELECT * FROM users order by uid desc;

# 随机找一个数据
SELECT * from users order by RAND() limit 1;
```



数据操作

```sql
# 更新数据
update users set uid = 3 where uname = 'third';

# 删除数据
delete from users where uid=3

# 添加数据
insert into users(uname, utext) values ('First', '第一个')
```



## 数据类型补充

**if**

```sql
select uname,if(sex=1,'男','女') from users;
```



**Left&right&mid**

取左或右指定数量的字符

```sql
# left(uname,2)=查询前两位
# left(uname,2,3)查询第二和第三位
select left(uname,2) left(uname,2,3) from users;
```



**substring**

```sql
# 从第二个位置开始向右匹配
select * from users where substring(uname, 2) = 'econd'
```



**char_length**：获取字符串数量



**concat**：连接字符串



**正则表达式**

```sql
# 查找第二个字符为e的字符串
SELECT * FROM users WHERE uname REGEXP '^.e';
```



**like**

匹配任意字符：`%`

匹配一个字符：`_`

匹配关键字：`%关键字%`



**整型**

| MySQL数据类型 | 范围（有符号）                       | 范围（无符号）                  |
| ------------- | ------------------------------------ | ------------------------------- |
| tinyint(m)    | 1个字节 范围(-128~127)               | (0，255)                        |
| smallint(m)   | 2个字节 范围(-32768~32767)           | (0，65 535)                     |
| mediumint(m)  | 3个字节 范围(-8388608~8388607)       | (0，16 777 215)                 |
| int(m)        | 4个字节 范围(-2147483648~2147483647) | (0，4 294 967 295)              |
| bigint(m)     | 8个字节 范围(+-9.22*10的18次方)      | (0，18 446 744 073 709 551 615) |

m代表**显示长度**，如果加上`zerofill`则表示**允许字段的长度**，如果不满5位则在前面填0

**浮点型**

| 类型    | 大小                               | 范围（有符号）                                               | 范围（无符号）                                               |
| :------ | :--------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| FLOAT   | 4 字节                             | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                  |
| DOUBLE  | 8 字节                             | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) |
| DECIMAL | DECIMAL(M,D) ，m<65 是总个数，d<30 | 依赖于M和D的值                                               | 依赖于M和D的值                                               |



**ENUM**

类似单选，只允许在集合种取一个指

```sql
ALTER TABLE users ADD sex ENUM('男','女') DEFAULT NULL;
INSERT INTO users (uname,sex) VALUES('用户1',1);	# 男
SELECT * from users WHERE sex='女';
SELECT * from users WHERE sex=2;
```



**SET**

多选，集合

```sql
ALTER TABLE users ADD flag SET('推荐','置顶','图文','热门');
INSERT INTO users (uname,flag)VALUES('用户','图文,推荐,置顶');
```





## 时间日期

**数据类型**

| 日期时间类型 | 占用空间 | 日期格式            | 最小值              | 最大值              | 零值表示            |
| ------------ | -------- | ------------------- | ------------------- | ------------------- | ------------------- |
| DATETIME     | 8 bytes  | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 | 9999-12-31 23:59:59 | 0000-00-00 00:00:00 |
| TIMESTAMP    | 4 bytes  | YYYY-MM-DD HH:MM:SS | 1970-01-01 08:00:01 | 2038-01-19 03:14:07 | 00000000000000      |
| DATE         | 4 bytes  | YYYY-MM-DD          | 1000-01-01          | 9999-12-31          | 0000-00-00          |
| TIME         | 3 bytes  | HH:MM:SS            | -838:59:59          | 838:59:59           | 00:00:00            |
| YEAR         | 1 bytes  | YYYY                | 1901                | 2155                | 0000                |

- Mysql保存日期格式使用 YYYY-MM-DD HH:MM:SS的ISO 8601标准
- 向数据表储存日期与时间必须使用ISO格式



创建字段

```sql
alter table users add birthday datetime default null;
update users set birthday = "2000-1-1 12:12:12" where uid=1;
```



**参数介绍**

| 格式 | 描述                                           |
| :--- | :--------------------------------------------- |
| %a   | 缩写星期名                                     |
| %b   | 缩写月名                                       |
| %c   | 月，数值                                       |
| %D   | 带有英文前缀的月中的天                         |
| %d   | 月的天，数值(00-31)                            |
| %e   | 月的天，数值(0-31)                             |
| %f   | 微秒                                           |
| %H   | 小时 (00-23)                                   |
| %h   | 小时 (01-12)                                   |
| %I   | 小时 (01-12)                                   |
| %i   | 分钟，数值(00-59)                              |
| %j   | 年的天 (001-366)                               |
| %k   | 小时 (0-23)                                    |
| %l   | 小时 (1-12)                                    |
| %M   | 月名                                           |
| %m   | 月，数值(00-12)                                |
| %p   | AM 或 PM                                       |
| %r   | 时间，12-小时（hh:mm:ss AM 或 PM）             |
| %S   | 秒(00-59)                                      |
| %s   | 秒(00-59)                                      |
| %T   | 时间, 24-小时 (hh:mm:ss)                       |
| %U   | 周 (00-53) 星期日是一周的第一天                |
| %u   | 周 (00-53) 星期一是一周的第一天                |
| %V   | 周 (01-53) 星期日是一周的第一天，与 %X 使用    |
| %v   | 周 (01-53) 星期一是一周的第一天，与 %x 使用    |
| %W   | 星期名                                         |
| %w   | 周的天 （0=星期日, 6=星期六）                  |
| %X   | 年，其中的星期日是周的第一天，4 位，与 %V 使用 |
| %x   | 年，其中的星期一是周的第一天，4 位，与 %v 使用 |
| %Y   | 年，4 位                                       |
| %y   | 年，2 位                                       |



使用`Date_format`格式化日期与时间显示

```sql
select uname, DATE_FORMAT(birthday, '%Y年%m月%d日') from users
```



使用`time_format`格式化输出时间，PM不含年月日，只有时间

```sql
select uname,TIME_FORMAT(birthday,'%r') as birthday from users;
```



**时间戳**

以时间戳格式来记录日期与时间，当数据行发生变化，则时间戳会更新

当前时间：`current_timestamp`

```sql
alter table users add updated_at
timestamp not null default current_timestamp
on update current_timestamp

# 当更新数据的时候会发生变化
insert into users set uname = '小张';
update users set uname = 'ih' where uid = 7;
```



时间处理函数

| 函数           | 说明                                                   |
| -------------- | ------------------------------------------------------ |
| HOUR           | 时（范围从0到23）                                      |
| MINUTE         | 分（范围从0到59）                                      |
| SECOND         | 秒（范围从0到59）                                      |
| YEAR           | 年（范围从1000 到 9999）                               |
| MONTH          | 月（范围从1到12）                                      |
| DAY            | 日（范围从1开始）                                      |
| TIME           | 获取时间                                               |
| WEEK           | 一年中的第几周，从1开始计数                            |
| QUARTER        | 一年中的季度，从1开始计数                              |
| CURRENT_DATE   | 当前日期                                               |
| CURRENT_TIME   | 当前时间                                               |
| NOW            | 当前时间                                               |
| DAYOFYEAR      | 一年中的第几天（从1开始）                              |
| DAYOFMONTH     | 月份中天数（从1开始）                                  |
| DAYOFWEEK      | 星期天（1）到星期六（7）                               |
| WEEKDAY        | 星期一（0）到星期天（6）                               |
| TO_DAYS        | 从元年到现在的天数（忽略时间部分）                     |
| FROM_DAYS      | 根据天数得到日期（忽略时间部分）                       |
| TIME_TO_SEC    | 时间转为秒数（忽略日期部分）                           |
| SEC_TO_TIME    | 根据秒数转为时间（忽略日期部分）                       |
| UNIX_TIMESTAMP | 根据日期返回秒数（包括日期与时间）                     |
| FROM_UNIXTIME  | 根据秒数返回日期与时间（包括日期与时间）               |
| DATEDIFF       | 两个日期相差的天数（忽略时间部分，前面日期减后面日期） |
| TIMEDIFF       | 计算两个时间的间隔（忽略日期部分）                     |
| TIMESTAMPDIFF  | 根据指定单位计算两个日期时间的间隔（包括日期与时间）   |
| LAST_DAY       | 该月的最后一天                                         |



**常用函数**

获取当前时间

日期：`	NOW()`

年月日：`CURRENT_DATE()`

时间：`CURRENT_TIME()`

```sql
select CURRENT_DATE(),CURRENT_TIME(),NOW();
```



```sql
set @time = time(now());
# 获取当前时间，不含年月日
select @time;
# 时间转换成秒
select TIME_TO_SEC(@time);

# 计算两个时间相差的天数
select datediff(now(), birthday) from users;

# 计算两个时间相差，单位可以自定义：second、minute、day、week、month
select timestampdiff(day, birthday,now()) from users
```





**时间计算**

| 函数      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| ADDTIME   | 添加时间（负数为减少），只对时间有效                         |
| TIMESTAMP | 添加时间（负数为减少），只对时间有效                         |
| DATE_ADD  | 根据单位添加时间，支持单位有YEAR/MONTH/DAY/HOUR/MINUTE/SECOND/HOUR_MINUTE/DAY_HOUR/DAY_MINUTE/DAY_SECOND/HOUR_MINUTE/HOUR_SECOND（负数时等于DATE_SUB) |
| DATE_SUB  | DATE_ADD的反函数                                             |
| LAST_DAY  | 指定月最后一天日期                                           |



```sql
# 添加时间
select addtime(now(), '1:0:0');

# 7天后
select date_add(now(), interval 7 day);
# 7天前
select date_add(now(), interval -7 day);
# 3天10小时后
select date_add(now(), interval "3 10" day_hour );

# 获取月尾
select last_day(now());
# 获取月初，dayofmonth获取今天是这个月的第几天，然后减去自己的天数。
select date_sub(now(), interval dayofmonth(now())-1 day);
```



## 排序与聚合

**order**

- desc降序 asc升序

```sql
# 随机获取
SELECT * FROM users ORDER BY RAND() LIMIT 1;
```



自定义排序：`field`

```sql
SELECT * FROM users ORDER BY FIELD(left(uname,1),'S','F');
```



统计：`count`

```sql
SELECT COUNT(*) FROM users;
```



最大最小：`min/max`

```sql
SELECT max(uid) FROM users;
```



总合平均：`sum/avg`



去重：`distinct`



**group**

分组，将相同的分为同一个组

```sql
select *,count(uname) from users group by uname
```



**having**

筛选，对group进行筛选，因此一定在后面

```sql
# 查找超过两个同学的班级
SELECT class_id FROM stu GROUP BY class_id HAVING count(*)>2;
```





## 多表查询

**笛卡尔积**

```sql
SELECT * FROM stu ,class WHERE stu.class_id = class.id;
SELECT * FROM stu as s, class as c WHERE s.class_id = c.id;
```



**INNER JOIN**

语义更加清晰

```sql
SELECT * FROM stu INNER JOIN class
ON stu.class_id = class.id
```



**OUTER JOIN**

外链接包括`LEFT JOIN` 与 `RIGHT JOIN` ，可以简单理解为 `LEFT JOIN`会包含左侧所有表记录，`RIGHT JOIN` 会包含右侧表全部记录。

以左侧的表（stu）为基准不做删改，将右侧的表（user_info）数据添加其中。

意思是就算`id`与`stu_id`有不对应的数据，先显示`id`的数据。

```sql
SELECT s.sname FROM stu AS s LEFT JOIN user_info as i
ON s.id = i.stu_id
WHERE i.qq is null;
```



**SELF JOIN**

自连接即表与自身进行关联。虽然自连接的两张表都是同一张表，但也把它按两张表对待，这样理解就会容易些。



**UNION**

 用于连接多个查询结果，要保证每个查询返回的列的数量与顺序要一样。

- UNION会过滤重复的结果
- UNION ALL 不过滤重复结果
- 列表字段由是第一个查询的字段

**查询年龄最大与最小的同学**

```sql
(SELECT sname,birthday FROM stu ORDER BY birthday DESC LIMIT 1)
UNION
(SELECT sname,birthday from stu ORDER BY birthday ASC LIMIT 1)
ORDER BY birthday DESC;
```



**多表删除**

```sql
DELETE s FROM stu as s 
LEFT JOIN user_lesson as ul
ON s.id = ul.stu_id
WHERE ul.lesson_id IS NULL;
```



```sql
DELETE FROM stu WHERE id IN(
  SELECT id FROM
    (SELECT s.id FROM stu as s
    LEFT JOIN user_lesson as ul
    ON s.id = ul.stu_id
    WHERE ul.lesson_id IS NULL) 
  AS s
);
```







## 事务处理

**事务单独开启**

- `BEGIN`或`START TRANSACTION`：开始事务
- `COMMIT`：提交事务
- `ROLLBACK`：回滚事务

```sql
begin;
insert into users(uname, utext) values ('xxx', '1231x')
commit;
```



**全局事务**

 `SET AUTOCOMMIT=0` 关闭自动提交来开启事务机制

```sql
-- 关闭自动提交
SET AUTOCOMMIT = 0;

insert into users(uname, utext) values ('xxx', '1231x')
COMMIT;

-- 开启自动提交
SET AUTOCOMMIT = 1;
```





**隔离级别**

| 事务隔离级别                 | 脏读 | 不可重复读 | 幻读 | 说明                                                         |
| ---------------------------- | ---- | ---------- | ---- | ------------------------------------------------------------ |
| 读未提交（read-uncommitted） | 是   | 是         | 是   | 最低的事务隔离级别，一个事务还没提交时，它做的变更就能被别的事务看到 |
| 不可重复读（read-committed） | 否   | 是         | 是   | 保证一个事物提交后才能被另外一个事务读取。另外一个事务不能读取该事物未提交的数据。 |
| 可重复读（repeatable-read）  | 否   | 否         | 是   | 多次读取同一范围的数据会返回第一次查询的快照，即使其他事务对该数据做了更新修改。事务在执行期间看到的数据前后必须是一致的。 |
| 串行化（serializable）       | 否   | 否         | 否   | 事务 100% 隔离，可避免脏读、不可重复读、幻读的发生。花费最高代价但最可靠的事务隔离级别。 |

**查询级别**

mysql8 版本查询隔离级别

```text
select @@global.transaction_isolation,@@transaction_isolation;
```

mysql8 以下版本查询隔离级别

```text
select @@tx_isolation;
```



**设置级别**

设置会话隔离级别，影响当前连接

```text
set session transaction isolation level read uncommitted;
```

设置全局隔离级别，影响全局连接

```text
set global transaction isolation level read uncommitted;
```



**脏读**

将隔离级别设置为最低级 `read uncommitted`。

脏读是一个事务没有提交时可被其他事务读取到。

事务B在事务A没有提交时就可以看到更新的数据，如果事务A执行`ROLLBACK` 事务B的读到的数据就为**脏数据**。

将隔离级别设置为除 `read uncommitted`以外的，再重复上面的例子，都可以有效避免脏读的问题



**不可重复读**

不可重复读指在事务中多次读取的数据出现不一致的情况，我们希望读取的数据在本事务中是一致的。

- 事务A在执行过程中更新数据，事务B同时读取的数据没有脏数据。
- 但当事务A提交了事务后，事务B再读取时得到了最新的数据，这种情况为不可重复读。
- 所以要保证事务过程中的数据重复操作是一致的，不受其他事务影响，即避免不可重复读的产生。



**幻读**

幻读和不可重复读都是读取了另一条已经提交的事务（这点就脏读不同），所不同的是不可重复读查询的都是同一个数据项，而幻读针对的是一批数据整体。

事务A执行查询，假如查询结果是6条

事务B执行添加新数据

事务A执行更新，发现更新了7条（刚才查询时6条，但更新了七条，感觉像出现了幻觉）

换隔离级别为 **SERIALIZABLE** 后，在事务A没有提交时，事务B是不能插入数据的（表现形式为等待）。



## 锁

- 行锁开销大，锁表慢
- 行锁高并发下可并行处理，性能更高
- 行锁是针对索引加的锁，在通过索引检索时才会应用行锁，否则使用表锁
- 在事务执行过程中，随时都可以执行锁定，锁在执行 COMMIT或者ROLLBACK的时候释放



**非索引阻塞**

使用**非索引字段筛选**时，将造成全表锁定即表级锁

事务A：

```sql
BEGIN;
UPDATE users SET uname = 'First' WHERE uname ='更新';
```



事务B：

```sql
BEGIN;
update users set uname="yyy" where id=4
# 阻塞中---
```



**范围锁**

查询没有指定明确范围时也会造成大量记录的锁定

事务B将不能修改表中的ID大于2的记录，但可以更改ID为1的记录

```sql
BEGIN;
UPDATE users SET utext='123456' WHERE id>1; 
```



**悲观锁**

非观锁指对数据被外界修改持保守态度，在整个数据处理过程中，将数据处于锁定状态，可以很好地解决并发事务的更新丢失问题。

`FOR UPDATE`，事务A执行悲观锁操作后，事务B就无法查询库存了

```sql
BEGIN;
SELECT * FROM goods WHERE id=1 FOR UPDATE;
UPDATE goods SET num=num-2 WHERE id=1; 
```



**乐观锁**

在每次去拿数据的时候认为别人不会修改，不对数据上锁，但是在提交更新的时候会判断在此期间数据是否被更改，如果被更改则提交失败。

通过设置`version`，事务A提交后`version`为1，那么事务B就更改不到数据了。

```sql
BEGIN;
UPDATE goods SET num=num-10,VERSION =VERSION+1 WHERE VERSION=0;
```



**读锁**

为表设置读锁后，当前会话和其他会话都不可以修改数据，但可以读取表数据。

`LOCK~READ`：读锁

`UNLOCK`：解除锁

```sql
LOCK TABLE goods READ;
UNLOCK TABLES;
```



**写锁**

为表设置了写锁后，**当前会话**可以修改，查询表，其他会话将无法操作。

```sql
LOCK TABLE goods WRITE;
UNLOCK TABLES;
```





## 外键约束

父表的操作会影响到子表

| 选项        | 说明                                          |
| ----------- | --------------------------------------------- |
| CONSTRAINT  | 为外键约束定义名称（唯一的）（子表名+父表名） |
| FOREIGN KEY | 子表与父表关联的列                            |
| REFERENCES  | 子表关联的父表字段                            |
| ON DELETE   | 父表删除时的处理方式                          |
| ON UPDATE   | 父表更新时的处理方式                          |

```sql
# 学生表
CREATE TABLE stu (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sname varchar(30) DEFAULT NULL,
  class_id int(11) DEFAULT NULL,
  CONSTRAINT stu_class
  FOREIGN KEY (class_id) 
  REFERENCES class (id) 
  ON DELETE CASCADE 
  ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8
```



给已存在的表添加外键约束

```sql
ALTER TABLE stu ADD 
CONSTRAINT stu_class
FOREIGN KEY (class_id) 
REFERENCES class(id) 
ON DELETE SET NULL
ON UPDATE CASCADE;
```



删除

```sql
ALTER TABLE stu DROP FOREIGN KEY stu_class;
```



**ON DELETE**

指在删除时的处理方式，常用的处理方式包括以下几种。

| 选项                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| ON DELETE CASCADE   | 删除父表记录时，子表记录同时删除                             |
| ON DELETE SET NULL  | 删除父表记录时，子表记录设置为NULL（子表字段要允许NULL）     |
| ON DELETE NO ACTION | 删除父表记录时，子表不做任何处理，必须把子表处理完才可以删除主表 |

**ON UPDATE**

指在更新时的处理方式，常用的处理方式包括以下几种。

| 选项                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| ON UPDATE CASCADE   | 更新父表记录时，比如更改主表的主键时，子表记录同时更新       |
| ON UPDATE SET NULL  | 更新父表记录时，比如更改主表的主键时，子表记录设置为NULL     |
| ON UPDATE NO ACTION | 更新父表记录时，子表不做任何处理，必须把子表处理完才可以更新主表 |
