# webpack5

- 五个概念
  - Entry：入口文件
  - Output：输出
  - Loader：处理非JS文件
  - Plugins：插件
  - Mode：
    - `development`：能让代码本地调试 运行的环境
    - `production`：能让代码优化上线 运行的环境



安装步骤分两步

全局安装

```SHELL
npm i webpack webpack-cli -g
```

进入项目目录，将webpack配置文件添加进去

```SHELL
npm i webpack webpack-cli -D
```



新建入口文件：`src/index.js`



- 运行指令

```SHELL
开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
```



## 开发环境

创建文件`webpack.config.js`

`html-webpack-plugin`插件会自动引入js文件，无需自己手动引入

```JS
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js', 
  mode: 'development',
  // 输出配置
  output: {
    filename: 'built.js', // 输出文件名
    // __dirname 代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build') // 输出文件路径配置
  },
  // Loader配置
  module: {
  	rules: [
      // 打包css文件
      {
        test: /\.css$/, // 正则匹配文件名
        // use数组中loader执行顺序：从下到上 依次执行
        use: [
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      // 打包less文件
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      },
      // 打包图片文件
      {
        test: /\.(jpg|png|gif)$/i,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  // 图片大小小于8kb，就会被base64处理
              // 关闭url-loader的es6模块化，使用commonjs解析
              esModule: false,
              // 给图片进行重命名
              // [hash:10]取图片的hash的前10位
              // [ext]取文件原来扩展名
              name: '[hash:10].[ext]'
            }
          }
        ],
        type: 'javascript/auto'
      },
      // 打包HTML文件
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-withimg-loader'
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      },
    ]
  },
  plugins: [
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // debServer，自动编译
  // npx webpack server
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
};
```



安装依赖

`-d`：该包只应用于开发环境

`-s`：只应用于生产环境

```SHELL
npm i -d style-loader css-loader less-loader less html-webpack-plugin html-loader file-loader webpack-dev-server
```



终端输入`webpack`自动打包









## css兼容性处理



```SHELL
npm i -d postcss-loader postcss-preset-env
```



