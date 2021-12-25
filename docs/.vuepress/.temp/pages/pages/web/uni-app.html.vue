<template><h1 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app" aria-hidden="true">#</a> uni-app</h1>
<p><strong>介绍项目目录和文件作用</strong></p>
<p><code>pages.json</code> 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等</p>
<p><code>manifest.json</code> 文件是应用的配置文件，用于指定应用的名称、图标、权限等。</p>
<p><code>App.vue</code>是我们的跟组件，所有页面都是在<code>App.vue</code>下进行切换的，是页面入口文件，可以调用应用的生命周期函数。</p>
<p><code>main.js</code>是我们的项目入口文件，主要作用是初始化<code>vue</code>实例并使用需要的插件。</p>
<p><code>uni.scss</code>文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，<code>uni.scss</code>文件里预置了一批scss变量预置。</p>
<p><code>unpackage</code> 就是打包目录，在这里有各个平台的打包文件</p>
<p><code>pages</code> 所有的页面存放目录</p>
<p><code>static</code> 静态资源目录，例如图片等</p>
<p><code>components</code> 组件存放目录</p>
<blockquote>
<p>1、 <strong>rpx</strong>：屏幕自适应的动态单位，以750宽屏幕为标准。</p>
<p>2、使用<code>@import</code>语句导入外联样式表</p>
<p>3、不能使用 <code>*</code> 选择器。</p>
<p>4、字体文件小于 40kb，<code>uni-app</code> 会自动将其转化为 base64 格式；如果大于40kb那么需要自己转换；引用路径推荐使用以 ~@ 开头的绝对路径。</p>
<p>5、</p>
<p>6、</p>
</blockquote>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>具体参考：https://uniapp.dcloud.io/collocation/pages</p>
<p>不进行过多赘述，仅仅简要说明。</p>
<p>配置项列表</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">平台兼容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=globalstyle" target="_blank" rel="noopener noreferrer">globalStyle<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">设置默认页面的窗口表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=pages" target="_blank" rel="noopener noreferrer">pages<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object Array</td>
<td style="text-align:left">是</td>
<td style="text-align:left">设置页面路径及窗口表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=easycom" target="_blank" rel="noopener noreferrer">easycom<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">组件自动引入规则</td>
<td style="text-align:left">2.5.5+</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=tabbar" target="_blank" rel="noopener noreferrer">tabBar<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">设置底部 tab 的表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=condition" target="_blank" rel="noopener noreferrer">condition<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">启动模式配置</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=subpackages" target="_blank" rel="noopener noreferrer">subPackages<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object Array</td>
<td style="text-align:left">否</td>
<td style="text-align:left">分包加载配置</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=preloadrule" target="_blank" rel="noopener noreferrer">preloadRule<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">分包预下载规则</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html" target="_blank" rel="noopener noreferrer">workers<ExternalLinkIcon/></a></td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left"><code>Worker</code> 代码放置的目录</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=leftwindow" target="_blank" rel="noopener noreferrer">leftWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏左侧窗口</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=topwindow" target="_blank" rel="noopener noreferrer">topWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏顶部窗口</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages?id=rightwindow" target="_blank" rel="noopener noreferrer">rightWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏右侧窗口</td>
<td style="text-align:left">H5</td>
</tr>
</tbody>
</table>
<p><code>globalStyle</code>：全局配置，可以修改<strong>导航栏</strong>的 背景颜色、文字内容和样式、导航栏图片、<strong>下拉窗口背景颜色和样式和 loading 样式</strong>、是否开启下拉刷新、页面上拉事件、窗口显示的动画效果等。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 背景颜色</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>
  <span class="token comment">// 文字颜色</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
  <span class="token comment">// 文字内容</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"手机端应用"</span><span class="token punctuation">,</span>
  <span class="token comment">// 下拉显示出来的窗口的背景色,仅小程序</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#7CCD7C"</span><span class="token punctuation">,</span>
  <span class="token comment">// 下拉 loading 的样式，仅支持 dark / light</span>
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"light"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="http://img.zyugat.cn/zyuimg/2021-12-18_4c47d99a6d1a0.png" alt="image-20211218141442869"></p>
<p><code>pages</code>：页面配置。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/list/list"</span><span class="token punctuation">,</span>
    <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 开启下拉刷新</span>
      <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面上拉触底事件触发时距页面底部距离，单位只支持px。</span>
      <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/message/message"</span><span class="token punctuation">,</span>
    <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 标题</span>
      <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"信息页"</span><span class="token punctuation">,</span>
      <span class="token comment">// 背景颜色</span>
      <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#007AFF"</span><span class="token punctuation">,</span>
      <span class="token comment">// 编译到H5时的样式</span>
      <span class="token property">"h5"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"pullToRefresh"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#7D26CD"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>tabBar</code>：导航栏，文字颜色、选中颜色、上边框颜色、列表、文字大小、图片和文字间距、高度。<strong>list中最多只能配置5个tab。</strong></p>
<p><strong>如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#A0522D"</span><span class="token punctuation">,</span>
  <span class="token comment">// tab 上的文字选中时的颜色</span>
  <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#B3EE3A"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
  <span class="token comment">// 边框颜色</span>
  <span class="token property">"borderStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选值 bottom、top</span>
  <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
  <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home.png"</span><span class="token punctuation">,</span>
      <span class="token comment">// 选中时的图片路径</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home-active.png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>和微信小程序一样。</p>
<h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">selectable</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">false</td>
<td style="text-align:center">否</td>
<td style="text-align:center">文本是否可选</td>
</tr>
<tr>
<td style="text-align:center">space</td>
<td style="text-align:center">string</td>
<td style="text-align:center">.</td>
<td style="text-align:center">否</td>
<td style="text-align:center">显示连续空格，可选参数：<code>ensp</code>、<code>emsp</code>、<code>nbsp</code></td>
</tr>
<tr>
<td style="text-align:center">decode</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">false</td>
<td style="text-align:center">否</td>
<td style="text-align:center">是否解码</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">selectable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>true<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>长安文本复制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">space</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ensp<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>显示  空格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">decode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>true<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span> <span class="token entity named-entity" title="&lt;">&amp;lt;</span> <span class="token entity named-entity" title="&gt;">&amp;gt;</span> <span class="token entity named-entity" title="&amp;">&amp;amp;</span> <span class="token entity named-entity" title="&apos;">&amp;apos;</span> <span class="token entity named-entity" title="&ensp;">&amp;ensp;</span> <span class="token entity named-entity" title="&emsp;">&amp;emsp;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h3>
<p>视图容器</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">hover-class</td>
<td style="text-align:left">String</td>
<td style="text-align:left">none</td>
<td style="text-align:left">指定按下去的样式类。当 hover-class=&quot;none&quot; 时，没有点击态效果</td>
</tr>
<tr>
<td style="text-align:left">hover-stop-propagation</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）</td>
</tr>
<tr>
<td style="text-align:left">hover-start-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">50</td>
<td style="text-align:left">按住后多久出现点击态，单位毫秒</td>
</tr>
<tr>
<td style="text-align:left">hover-stay-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">400</td>
<td style="text-align:left">手指松开后点击态保留时间，单位毫秒</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>box1<span class="token punctuation">'</span></span> <span class="token attr-name">hover-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>active<span class="token punctuation">'</span></span> <span class="token attr-name">hover-stop-propagation</span> <span class="token attr-name">:hover-start-time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2000<span class="token punctuation">"</span></span> <span class="token attr-name">:hover-stay-time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>2000<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> button</h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性名</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">size</td>
<td style="text-align:center">String</td>
<td style="text-align:center">default</td>
<td style="text-align:center">按钮的大小</td>
</tr>
<tr>
<td style="text-align:center">type</td>
<td style="text-align:center">String</td>
<td style="text-align:center">default</td>
<td style="text-align:center">按钮的样式类型</td>
</tr>
<tr>
<td style="text-align:center">plain</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
<td style="text-align:center">按钮是否镂空，背景色透明</td>
</tr>
<tr>
<td style="text-align:center">disabled</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
<td style="text-align:center">是否按钮</td>
</tr>
<tr>
<td style="text-align:center">loading</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
<td style="text-align:center">名称是否带 loading t图标</td>
</tr>
</tbody>
</table>
<p><code>button</code> 组件默认独占一行，设置 <code>size</code> 为 <code>mini</code> 时可以在一行显示多个</p>
<h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
<th>平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>String</td>
<td></td>
<td>图片资源地址</td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>String</td>
<td>'scaleToFill'</td>
<td>图片裁剪、缩放的模式</td>
<td></td>
</tr>
</tbody>
</table>
<p>页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 <code>image{will-change: transform}</code> ,可优化此问题。</p>
<h2 id="uni的特性" tabindex="-1"><a class="header-anchor" href="#uni的特性" aria-hidden="true">#</a> uni的特性</h2>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p>
<p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数</p>
<p><strong>应用生命周期</strong></p>
<table>
<thead>
<tr>
<th>函数名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLaunch</td>
<td>当<code>uni-app</code> 初始化完成时触发（全局只触发一次）</td>
</tr>
<tr>
<td>onShow</td>
<td>当 <code>uni-app</code> 启动，或从后台进入前台显示</td>
</tr>
<tr>
<td>onHide</td>
<td>当 <code>uni-app</code> 从前台进入后台</td>
</tr>
<tr>
<td>onError</td>
<td>当 <code>uni-app</code> 报错时触发</td>
</tr>
</tbody>
</table>
<p><strong>页面生命周期</strong></p>
<table>
<thead>
<tr>
<th>函数名</th>
<th>说明</th>
<th>平台差异说明</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLoad</td>
<td>监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考<a href="https://uniapp.dcloud.io/api/router?id=navigateto" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>onShow</td>
<td>监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</td>
<td></td>
<td></td>
</tr>
<tr>
<td>onReady</td>
<td>监听页面初次渲染完成。</td>
<td></td>
<td></td>
</tr>
<tr>
<td>onHide</td>
<td>监听页面隐藏</td>
<td></td>
<td></td>
</tr>
<tr>
<td>onUnload</td>
<td>监听页面卸载</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>组件生命周期</strong></p>
<table>
<thead>
<tr>
<th>beforeCreate</th>
<th>在实例初始化之后被调用。<a href="https://cn.vuejs.org/v2/api/#beforeCreate" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>created</td>
<td>在实例创建完成后被立即调用。<a href="https://cn.vuejs.org/v2/api/#created" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>beforeMount</td>
<td>在挂载开始之前被调用。<a href="https://cn.vuejs.org/v2/api/#beforeMount" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>mounted</td>
<td>挂载到实例上去之后调用。<a href="https://cn.vuejs.org/v2/api/#mounted" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a> 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用<code>$nextTick</code><a href="https://cn.vuejs.org/v2/api/#Vue-nextTick" target="_blank" rel="noopener noreferrer">Vue官方文档<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>beforeUpdate</td>
<td>数据更新时调用，发生在虚拟 DOM 打补丁之前。<a href="https://cn.vuejs.org/v2/api/#beforeUpdate" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td>仅H5平台支持</td>
</tr>
<tr>
<td>updated</td>
<td>由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。<a href="https://cn.vuejs.org/v2/api/#updated" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td>仅H5平台支持</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td>实例销毁之前调用。在这一步，实例仍然完全可用。<a href="https://cn.vuejs.org/v2/api/#beforeDestroy" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>destroyed</td>
<td>Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。<a href="https://cn.vuejs.org/v2/api/#destroyed" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3>
<p>https://uniapp.dcloud.io/component/navigator</p>
<p><code>navigator</code></p>
<ul>
<li>
<p><code>url</code>：地址</p>
</li>
<li>
<p><code>open-type</code>：跳转方式</p>
</li>
<li>
<p><code>hover-class</code>：点击时样式类</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/list/list<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigate<span class="token punctuation">"</span></span> <span class="token attr-name">hover-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigator-hover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>https://uniapp.dcloud.io/api/router?id=navigateto</p>
<p><code>uni.navigateTo(OBJECT)</code>：保留当前页面，跳转。</p>
<p><strong>保留当前页面意思是，左上角会带一个返回按钮</strong></p>
<p><code>uni.redirectTo(OBJECT)</code>：关闭当前页面，跳转。</p>
<p><code>uni.reLaunch(OBJECT)</code>：关闭所有页面，跳转。</p>
<p><code>uni.switchTab(OBJECT)</code>：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</p>
<p><strong>这里要说明一下， tabBar 页面是指在 <code>pages.json</code> 的 tabBar 中定义的页面。</strong></p>
<p><code>uni.navigateBack(OBJECT)</code>：关闭当前页面，返回上一页面或多级页面。</p>
<p><code>uni.preloadPage(OBJECT)</code>：预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goAbout</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'/pages/about/about'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>路由传参</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">'/pages/about/about?id=80'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="http://img.zyugat.cn/zyuimg/2021-12-18_f9ac805512c07.png" alt="image-20211218142703068"></p>
<hr>
<h3 id="上拉-下拉刷新" tabindex="-1"><a class="header-anchor" href="#上拉-下拉刷新" aria-hidden="true">#</a> 上拉/下拉刷新</h3>
<p>第一步：开启下拉刷新；</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"pages/list/list"</span><span class="token punctuation">,</span>
    <span class="token property">"style"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第二步：监听下拉刷新的动作；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'触发下拉刷新了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可选：关闭和开始当前页面的下拉刷新；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>methods<span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">startPull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">startPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">stopPull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>案例，刷新时清空列表，刷新完时显示数据</strong></p>
<p><img src="http://img.zyugat.cn/zyuimg/2021-12-16_4e9e91c4a7467.gif" alt="动画"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'前端'</span><span class="token punctuation">,</span> <span class="token string">'java'</span><span class="token punctuation">,</span> <span class="token string">'ui'</span><span class="token punctuation">,</span> <span class="token string">'大数据'</span><span class="token punctuation">]</span>
    uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>下拉刷新，判断触底</strong></p>
<p><code>onReachBottom</code>：监听到触底的行为</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'触底了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>
<h3 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h3>
<p>调用uni.request方法进行请求网络请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">sendGet</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'http://localhost:300'</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr>
<h3 id="数据缓存" tabindex="-1"><a class="header-anchor" href="#数据缓存" aria-hidden="true">#</a> 数据缓存</h3>
<p><code>uni.setStorage(OBJECT)</code>：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个<strong>异步接口</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">'storage_key'</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'存储成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'存储失败'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'回调结束时调用,无论是否回调成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>uni.setStorageSync(KEY,DATA)</code>：和上面一样，不过这是一个<strong>同步接口</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>uni.getStorage(OBJECT)</code>：从本地缓存中<strong>异步获取</strong>指定 key 对应的内容。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">'storage_key'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// data 是 key 对应的内容</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取失败'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'回调结束时调用,无论是否回调成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>uni.getStorageSync(KEY)</code>：同步获取。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>uni.removeStorage(KEY)</code>：从本地缓存中异步移除指定 key。</p>
<p><code>uni.removeStorageSync(KEY)</code>：从本地缓存中同步移除指定 key。</p>
<hr>
<h3 id="上传-预览图片" tabindex="-1"><a class="header-anchor" href="#上传-预览图片" aria-hidden="true">#</a> 上传/预览图片</h3>
<p><code>uni.chooseImage(OBEJCT)</code>：从本地相册选择图片或使用相机拍照。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>上传图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chooseImg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上传图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    上传的图片：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in imgArr<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    点击预览图片：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in imgArr<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>previewImg(item)<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">chooseImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>imgArr <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePaths
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">previewImg</span><span class="token punctuation">(</span><span class="token parameter">current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    urls<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imgArr<span class="token punctuation">,</span>
    current
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="http://img.zyugat.cn/zyuimg/2021-12-18_92f2674c80193.gif" alt="动画"></p>
<hr>
<h3 id="条件注释实现跨段兼容" tabindex="-1"><a class="header-anchor" href="#条件注释实现跨段兼容" aria-hidden="true">#</a> 条件注释实现跨段兼容</h3>
<p>条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。</p>
<p>**写法：**以 #ifdef 加平台标识 开头，以 #endif 结尾。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>平台</th>
<th>参考文档</th>
</tr>
</thead>
<tbody>
<tr>
<td>APP-PLUS</td>
<td>5+App</td>
<td><a href="http://www.html5plus.org/doc/" target="_blank" rel="noopener noreferrer">HTML5+ 规范<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>H5</td>
<td>H5</td>
<td></td>
</tr>
<tr>
<td>MP-WEIXIN</td>
<td>微信小程序</td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">微信小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-ALIPAY</td>
<td>支付宝小程序</td>
<td><a href="https://docs.alipay.com/mini/developer/getting-started" target="_blank" rel="noopener noreferrer">支付宝小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-BAIDU</td>
<td>百度小程序</td>
<td><a href="https://smartprogram.baidu.com/docs/develop/tutorial/codedir/" target="_blank" rel="noopener noreferrer">百度小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-TOUTIAO</td>
<td>头条小程序</td>
<td><a href="https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/introduction" target="_blank" rel="noopener noreferrer">头条小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-QQ</td>
<td>QQ小程序</td>
<td>（目前仅cli版支持）</td>
</tr>
<tr>
<td>MP</td>
<td>微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//#ifdef MP-WEIXIN</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'微信小程序'</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
  <span class="token comment">//#ifdef H5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'h5页面'</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="项目说明" tabindex="-1"><a class="header-anchor" href="#项目说明" aria-hidden="true">#</a> 项目说明</h2>
<p>第一步先配置 <code>pages.json</code></p>
<p>一般分为：<code>pages</code>、<code>globalStyle</code>、<code>tabBar</code></p>
</template>
