<template><h1 id="webpack5" tabindex="-1"><a class="header-anchor" href="#webpack5" aria-hidden="true">#</a> webpack5</h1>
<ul>
<li>五个概念
<ul>
<li>Entry：入口文件</li>
<li>Output：输出</li>
<li>Loader：处理非JS文件</li>
<li>Plugins：插件</li>
<li>Mode：
<ul>
<li><code>development</code>：能让代码本地调试 运行的环境</li>
<li><code>production</code>：能让代码优化上线 运行的环境</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>安装步骤分两步</p>
<p>全局安装</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>npm i webpack webpack-cli -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>进入项目目录，将webpack配置文件添加进去</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>npm i webpack webpack-cli -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>新建入口文件：<code>src/index.js</code></p>
<ul>
<li>运行指令</li>
</ul>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<p>创建文件<code>webpack.config.js</code></p>
<p><code>html-webpack-plugin</code>插件会自动引入js文件，无需自己手动引入</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>const { resolve } = require('path');
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><p>安装依赖</p>
<p><code>-d</code>：该包只应用于开发环境</p>
<p><code>-s</code>：只应用于生产环境</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>npm i -d style-loader css-loader less-loader less html-webpack-plugin html-loader file-loader webpack-dev-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>终端输入<code>webpack</code>自动打包</p>
<h2 id="css兼容性处理" tabindex="-1"><a class="header-anchor" href="#css兼容性处理" aria-hidden="true">#</a> css兼容性处理</h2>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>npm i -d postcss-loader postcss-preset-env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
