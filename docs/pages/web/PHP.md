# PHP

## BASE

```php
<?php
$a = 'hello world';
echo $a;
?>
```



1、注释

```php
// 123
/* 321 */
# 脚本注释
```



2、参考数据

- `echo`：输出
- `var_dump()`：打印出来

区别：echo 是直接输出，var_dump 输出和带有变量类型

```php
```



3、引用赋值

- `&`：内存地址指向

```php
$B = &$A;
```



4、可变变量

用A的变量值，作为B的变量名

```php
$a = 'hello';  //普通变量
$$a = 'world';  //可变变量 相当于：$hello = ‘world’;
echo "${$a}"; //输出：world
echo "$hello";//输出：world
```



5、全局变量

| 变量      | 说明                        |
| --------- | --------------------------- |
| $_GET     | 地址栏 GET 提交             |
| $_POST    | 表单 POST 提交              |
| $_FILES   | 文件上传变量                |
| $_SESSION | 会话变量                    |
| $_COOKIE  | cookie 值变量               |
| $_GLOBALS | 全局变量                    |
| $_REQUEST | 包含$_GET、$_POST、$_COOKIE |
| $_SERVER  | 服务器环境变量              |







