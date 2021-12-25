<template><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create vite

<span class="token comment"># or</span>

<span class="token function">yarn</span> create vite my-vue-app --template vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>即 Vite 的 3 大核心功能：Static Server  + HMR + Compile</p>
<p><strong>因为 Webpack Dev Server 在启动时，需要先 build—遍，而 build 的过程是需要耗费很多时间的。</strong></p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/cd8d7f279b0994e171c910ca4f94f4ed.png" alt="img"></p>
<p><strong>而 Vite 则完全不同，当我们执行 Vite serve 时（*<em>npm run dev*</em>），内部直接启动了 Web Server，并不会先编译所有的代码文件。</strong></p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/5799097c6431742307530e3cb986899a.png" alt="img"></p>
<p>即时的热模块更新：Vite 只需要立即编译当前所修改的文件</p>
<p>按需编译：需要开发者自行在代码中引入其他插件 <code>impor('xx.js')</code> 实现 dynamic-import；如<code>@babel/plugin-syntax-dynamic-import</code></p>
<p>但是像 Webpack 这类工具的做法是将所有模块提前编译、打包进 bundle 里，换句话说，不管模块是否会被执行，都要被编译和打包到 bundle 里。随着项目越来越大打包后的 bundle 也越来越大，打包的速度自然也就越来越慢。</p>
<p>CSS引入</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
@import <span class="token string">''</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
