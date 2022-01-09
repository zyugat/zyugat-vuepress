# vite

```sh
yarn create vite

# or

yarn create vite my-vue-app --template vue
```



即 Vite 的 3 大核心功能：Static Server  + HMR + Compile

**因为 Webpack Dev Server 在启动时，需要先 build—遍，而 build 的过程是需要耗费很多时间的。**

![img](https://img-blog.csdnimg.cn/img_convert/cd8d7f279b0994e171c910ca4f94f4ed.png)



**而 Vite 则完全不同，当我们执行 Vite serve 时（\**npm run dev\**），内部直接启动了 Web Server，并不会先编译所有的代码文件。**

![img](https://img-blog.csdnimg.cn/img_convert/5799097c6431742307530e3cb986899a.png)



即时的热模块更新：Vite 只需要立即编译当前所修改的文件



按需编译：需要开发者自行在代码中引入其他插件 `impor('xx.js')` 实现 dynamic-import；如`@babel/plugin-syntax-dynamic-import`

但是像 Webpack 这类工具的做法是将所有模块提前编译、打包进 bundle 里，换句话说，不管模块是否会被执行，都要被编译和打包到 bundle 里。随着项目越来越大打包后的 bundle 也越来越大，打包的速度自然也就越来越慢。



CSS引入

```html
<style>
@import ''
</style>
```



找不到 path：`yarn add -D @types/node`

```ts
```

