# Axios

环境是：axios+node

# 简单的请求



```js
  axios({
    url:'http://127.0.0.1:3000/',
    method: 'get'
  }).then(res => {
    console.log(res)
  })
```



```js
  axios({
    url:'http://127.0.0.1:3000/',
    method: 'post',
    data: {
      name: '张三'
    }
  }).then(res => {
    console.log(res)
  })
//------------------------------------------
  axios({
    url:'http://127.0.0.1:3000/',
    method: 'post',
    params: {
      name: '张三'
    }
  }).then(res => {
    console.log(res)
  })
```



## 别名

快速请求

```js
  axios.get('http://127.0.0.1:3000').then(res => {
    console.log(res)
  })
```

