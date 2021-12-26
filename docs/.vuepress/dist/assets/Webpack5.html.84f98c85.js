import{c as n}from"./app.e1cbe8dc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="webpack5" tabindex="-1"><a class="header-anchor" href="#webpack5" aria-hidden="true">#</a> webpack5</h1><ul><li>\u4E94\u4E2A\u6982\u5FF5 <ul><li>Entry\uFF1A\u5165\u53E3\u6587\u4EF6</li><li>Output\uFF1A\u8F93\u51FA</li><li>Loader\uFF1A\u5904\u7406\u975EJS\u6587\u4EF6</li><li>Plugins\uFF1A\u63D2\u4EF6</li><li>Mode\uFF1A <ul><li><code>development</code>\uFF1A\u80FD\u8BA9\u4EE3\u7801\u672C\u5730\u8C03\u8BD5 \u8FD0\u884C\u7684\u73AF\u5883</li><li><code>production</code>\uFF1A\u80FD\u8BA9\u4EE3\u7801\u4F18\u5316\u4E0A\u7EBF \u8FD0\u884C\u7684\u73AF\u5883</li></ul></li></ul></li></ul><p>\u5B89\u88C5\u6B65\u9AA4\u5206\u4E24\u6B65</p><p>\u5168\u5C40\u5B89\u88C5</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>npm i webpack webpack-cli -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FDB\u5165\u9879\u76EE\u76EE\u5F55\uFF0C\u5C06webpack\u914D\u7F6E\u6587\u4EF6\u6DFB\u52A0\u8FDB\u53BB</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>npm i webpack webpack-cli -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u65B0\u5EFA\u5165\u53E3\u6587\u4EF6\uFF1A<code>src/index.js</code></p><ul><li>\u8FD0\u884C\u6307\u4EE4</li></ul><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>\u5F00\u53D1\u73AF\u5883\uFF1Awebpack ./src/index.js -o ./build/built.js --mode=development
\u751F\u4EA7\u73AF\u5883\uFF1Awebpack ./src/index.js -o ./build/built.js --mode=production
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883</h2><p>\u521B\u5EFA\u6587\u4EF6<code>webpack.config.js</code></p><p><code>html-webpack-plugin</code>\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165js\u6587\u4EF6\uFF0C\u65E0\u9700\u81EA\u5DF1\u624B\u52A8\u5F15\u5165</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
module.exports = {
  entry: &#39;./src/index.js&#39;, 
  mode: &#39;development&#39;,
  // \u8F93\u51FA\u914D\u7F6E
  output: {
    filename: &#39;built.js&#39;, // \u8F93\u51FA\u6587\u4EF6\u540D
    // __dirname \u4EE3\u8868\u5F53\u524D\u6587\u4EF6\u7684\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84
    path: resolve(__dirname, &#39;build&#39;) // \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84\u914D\u7F6E
  },
  // Loader\u914D\u7F6E
  module: {
  	rules: [
      // \u6253\u5305css\u6587\u4EF6
      {
        test: /\\.css$/, // \u6B63\u5219\u5339\u914D\u6587\u4EF6\u540D
        // use\u6570\u7EC4\u4E2Dloader\u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u4E0B\u5230\u4E0A \u4F9D\u6B21\u6267\u884C
        use: [
          // \u521B\u5EFAstyle\u6807\u7B7E\uFF0C\u5C06js\u4E2D\u7684\u6837\u5F0F\u8D44\u6E90\u63D2\u5165\u8FDB\u884C\uFF0C\u6DFB\u52A0\u5230head\u4E2D\u751F\u6548
          &#39;style-loader&#39;,
          // \u5C06css\u6587\u4EF6\u53D8\u6210commonjs\u6A21\u5757\u52A0\u8F7Djs\u4E2D\uFF0C\u91CC\u9762\u5185\u5BB9\u662F\u6837\u5F0F\u5B57\u7B26\u4E32
          &#39;css-loader&#39;
        ]
      },
      // \u6253\u5305less\u6587\u4EF6
      {
        test: /\\.less$/,
        use: [
          &#39;style-loader&#39;,
          &#39;css-loader&#39;,
          // \u5C06less\u6587\u4EF6\u7F16\u8BD1\u6210css\u6587\u4EF6
          // \u9700\u8981\u4E0B\u8F7D less-loader\u548Cless
          &#39;less-loader&#39;
        ]
      },
      // \u6253\u5305\u56FE\u7247\u6587\u4EF6
      {
        test: /\\.(jpg|png|gif)$/i,
        use:[
          {
            loader: &#39;url-loader&#39;,
            options: {
              limit: 8192,  // \u56FE\u7247\u5927\u5C0F\u5C0F\u4E8E8kb\uFF0C\u5C31\u4F1A\u88ABbase64\u5904\u7406
              // \u5173\u95EDurl-loader\u7684es6\u6A21\u5757\u5316\uFF0C\u4F7F\u7528commonjs\u89E3\u6790
              esModule: false,
              // \u7ED9\u56FE\u7247\u8FDB\u884C\u91CD\u547D\u540D
              // [hash:10]\u53D6\u56FE\u7247\u7684hash\u7684\u524D10\u4F4D
              // [ext]\u53D6\u6587\u4EF6\u539F\u6765\u6269\u5C55\u540D
              name: &#39;[hash:10].[ext]&#39;
            }
          }
        ],
        type: &#39;javascript/auto&#39;
      },
      // \u6253\u5305HTML\u6587\u4EF6
      {
        test: /\\.html$/,
        // \u5904\u7406html\u6587\u4EF6\u7684img\u56FE\u7247\uFF08\u8D1F\u8D23\u5F15\u5165img\uFF0C\u4ECE\u800C\u80FD\u88ABurl-loader\u8FDB\u884C\u5904\u7406\uFF09
        loader: &#39;html-withimg-loader&#39;
      },
      // \u6253\u5305\u5176\u4ED6\u8D44\u6E90(\u9664\u4E86html/js/css\u8D44\u6E90\u4EE5\u5916\u7684\u8D44\u6E90)
      {
        // \u6392\u9664css/js/html\u8D44\u6E90
        exclude: /\\.(css|js|html|less|jpg|png|gif)$/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;
        }
      },
    ]
  },
  plugins: [
    // \u529F\u80FD\uFF1A\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684HTML\uFF0C\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u6240\u6709\u8D44\u6E90\uFF08JS/CSS\uFF09
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  // debServer\uFF0C\u81EA\u52A8\u7F16\u8BD1
  // npx webpack server
  devServer: {
    // \u9879\u76EE\u6784\u5EFA\u540E\u8DEF\u5F84
    contentBase: resolve(__dirname, &#39;build&#39;),
    // \u542F\u52A8gzip\u538B\u7F29
    compress: true,
    // \u7AEF\u53E3\u53F7
    port: 3000,
    // \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668
    open: true
  }
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56</p><p><code>-d</code>\uFF1A\u8BE5\u5305\u53EA\u5E94\u7528\u4E8E\u5F00\u53D1\u73AF\u5883</p><p><code>-s</code>\uFF1A\u53EA\u5E94\u7528\u4E8E\u751F\u4EA7\u73AF\u5883</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>npm i -d style-loader css-loader less-loader less html-webpack-plugin html-loader file-loader webpack-dev-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7EC8\u7AEF\u8F93\u5165<code>webpack</code>\u81EA\u52A8\u6253\u5305</p><h2 id="css\u517C\u5BB9\u6027\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#css\u517C\u5BB9\u6027\u5904\u7406" aria-hidden="true">#</a> css\u517C\u5BB9\u6027\u5904\u7406</h2><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>npm i -d postcss-loader postcss-preset-env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,21);function l(r,p){return a}var c=s(e,[["render",l]]);export{c as default};
