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



## 1、params/query

浏览器URL传递参数

后端使用：`query`

```js
// http://localhost:3000/mock/base?id=12345&name=ZS
import axios from 'axios'
axios({
  url: 'http://localhost:3000/mock/base',
  method: 'GET',
  params: {
    id: 12345,
    name: 'ZS',
  },
}).then(response => {
  console.log(response)
})
```



## 2、data请求

- multipart/form-data（文件方式）
  - 传参格式为 formData

```js
var formData = new FormData()
formData.append('user', '123456')
formData.append('pass', '12345678')

axios({
  url: 'http://localhost:3000/mock/base',
  headers: { 'Content-Type': 'multipart/form-data' },
  method: 'POST',
  data: formData,
}).then(response => {
  console.log(response)
})
```





- application/json（JSON方式）

```js
axios({
  url: 'http://localhost:3000/mock/base',
  method: 'POST',
  data: {
    id: '11111',
  },
}).then(response => {
  console.log(response)
})
```



- application/x-www-form-urlencoded（表单方式）

```js
axios({
  url: 'http://localhost:3000/mock/base',
  method: 'POST',
  data: qs.stringify({
    id: '11111',
  }),
}).then(response => {
  console.log(response)
})
```



## VueCli

- network
  - `request.ts`
  - `test.ts`

```ts
// network/request.ts
import axios, { AxiosRequestConfig } from 'axios'

export function request(config: AxiosRequestConfig<any>) {
  const instance = axios.create({
    // 后端数据地址
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  })
  // 拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      // 如果这里不返回，那么前面main，调用的时候就会显示无
      return config
    },
    err => {
      console.log(err)
    },
  )

  return instance(config)
}
```



```ts
// network/test.ts
import { request } from './request'

export function testBase() {
  return request({
    url: '/test',
    method: 'post',
    data: {
      id: 123,
    },
  })
}
```



