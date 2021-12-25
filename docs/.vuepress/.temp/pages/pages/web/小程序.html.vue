<template><h1 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序" aria-hidden="true">#</a> 小程序</h1>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<p>view-&gt;div</p>
<p>text-&gt;span</p>
<ul>
<li>
<p>轮播图：<code>swiper</code></p>
<ul>
<li><code>	&lt;swiper-item&gt;</code></li>
<li><strong>100vw=手机宽度</strong>  <strong>100vh=手机高度</strong></li>
<li>图片拉伸：<code>swiper宽度*原图高度/原图宽度</code></li>
</ul>
</li>
<li>
<p>导航组件：<code>navigator</code></p>
<ul>
<li><code>&lt;navigator url=&quot;&quot;&gt;点击跳转&lt;/navigator&gt;</code></li>
</ul>
</li>
<li>
<p>富文本：<code>rich-text</code></p>
<ul>
<li>1</li>
</ul>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rich-text</span> <span class="token attr-name">nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{html}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rich-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.标签字符串</span>
<span class="token comment">// html: '&lt;div style="color:red">标签字符串&lt;/div>'</span>
<span class="token comment">// 2.对象数组</span>
html<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 通过name属性指定div标签</span>
    name<span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span>
    <span class="token comment">// 标签属性</span>
    attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">"my_div"</span><span class="token punctuation">,</span>
      style<span class="token operator">:</span> <span class="token string">"color:red"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 子节点</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span>
        attrs<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">"对象数组"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul>
<li>图标：<code>icon</code></li>
<li>单选：<code>radio</code>
<ul>
<li>必须和父元素<code>radio-group</code>配合使用</li>
<li><code>bindchange</code>：绑定点击事件</li>
</ul>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-group</span> <span class="token attr-name">bindchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>多选：<code>checkbox</code>
<ul>
<li>父元素：``</li>
</ul>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox-group</span> <span class="token attr-name">bindchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{item.value}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>checkbox</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>数据绑定、列表渲染、事件绑定</p>
</blockquote>
<ul>
<li>
<p><strong>数据绑定</strong></p>
<ul>
<li>
<p>数据绑定和Vue差不多</p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
  	message<span class="token operator">:</span> <span class="token string">'Hello!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>组件属性</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-{{id}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>bool类型</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{MYBOOL}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>checkbox</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>三元运算</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{flag ? true : false}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> Hidden <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>算术运算</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span> {{a + b}} + {{c}} + d <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>逻辑判断</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{length > 5}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>字符串运算</strong></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{"hello" + name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>列表渲染</strong></p>
<ul>
<li>
<p><code>wx:for</code></p>
<ul>
<li>
<p>变量名：<code>wx:for-item</code></p>
</li>
<li>
<p>下标名：<code>wx:for-index</code></p>
</li>
<li>
<p><code>wx:key=&quot;*this&quot;</code>表示绑定item本身</p>
</li>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{array}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	{{index}}: {{item.message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{array}}<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    array<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">'bar'</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>block</code>标签</p>
</li>
<li>
<p><code>wx:if</code></p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{false}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{true}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>hidden</code>：隐藏组件</p>
<ul>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token punctuation">></span></span> false <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{flase}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 显示 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>事件绑定</strong></p>
<ul>
<li>
<p>绑定事件不能带参数，也就是括号。</p>
</li>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">bindinput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleInput<span class="token punctuation">"</span></span> <span class="token attr-name">data-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 绑定的事件</span>
  <span class="token function-variable function">handleInput</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      num <span class="token operator">:</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      num<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<p>改变data值必须使用<code>this.setData</code></p>
<p>获取data值：<code>this.data.值名</code></p>
</blockquote>
<ul>
<li>属性传参</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button bindtap<span class="token operator">=</span><span class="token string">"add"</span> data<span class="token operator">-</span>operation<span class="token operator">=</span><span class="token string">"{{1}}"</span><span class="token operator">></span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>operation<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过给元素一个属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>data<span class="token operator">-</span>自定义属性名<span class="token operator">=</span><span class="token string">"{{要传递的值}}"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<ul>
<li>组件的使用</li>
</ul>
<p>打开<code>index.json</code>，找到<code>&quot;usingComponents&quot;: {}</code>，在里面填写组件路径</p>
<div class="language-javascriptON ext-javascriptON line-numbers-mode"><pre v-pre class="language-javascriptON"><code>// index.json
{
  &quot;usingComponents&quot;: {
    &quot;Tab&quot;: &quot;../../components/Tab/Tab&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>最后在wxml里面添加进入</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>父传子
<ul>
<li>通过标签传递：<code>&lt;Tab mydata=&quot;123&quot; /&gt;</code>，然后子组件在通过<code>properties</code>列表获取。</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Tab.js</span>
properties<span class="token operator">:</span> <span class="token punctuation">{</span>
  mydata<span class="token operator">:</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>子传父
<ul>
<li>流程：子组件发送事件，父组件监听事件，最后父组件进行响应</li>
</ul>
</li>
</ul>
<blockquote>
<p>提示一下：在第二步的时候要注意是<code>bind</code>然后加上<strong>事件名称</strong></p>
<p>例如事件名称叫Updata，那么父组件就需要<code>bindUpdata=&quot;响应函数&quot;</code>进行监听</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Tab.js 子组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">"Updata"</span><span class="token punctuation">,</span> <span class="token string">"更新数据"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.wxml 父组件监听事件 --></span>
<span class="token comment">&lt;!-- bind+事件名称 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">bindUpdata</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newData<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件响应</span>
<span class="token function-variable function">newData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>插槽：<code>slot</code></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>// Tab.wxml
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>

// index.wxml
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">bindUpdata</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>父组件传递过来<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<ul>
<li>应用生命周期
<ul>
<li>在<code>app.js</code>中</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLaunch</td>
<td>监听⼩程序初始化。</td>
</tr>
<tr>
<td>onShow</td>
<td>监听⼩程序启动或切前台</td>
</tr>
<tr>
<td>onHide</td>
<td>监听⼩程序切后台。</td>
</tr>
<tr>
<td>onError</td>
<td>错误监听函数。</td>
</tr>
<tr>
<td>onPageNotFound</td>
<td>⻚⾯不存在监听函数。</td>
</tr>
</tbody>
</table>
<ul>
<li>页面生命周期
<ul>
<li>在每个页面的<code>index.js</code>中</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>Object</td>
<td>页面的初始数据</td>
</tr>
<tr>
<td>onLoad</td>
<td>function</td>
<td>⽣命周期回调—监听⻚⾯加载</td>
</tr>
<tr>
<td>onShow</td>
<td>function</td>
<td>⽣命周期回调—监听⻚⾯显⽰</td>
</tr>
<tr>
<td>onReady</td>
<td>function</td>
<td>⽣命周期回调—监听⻚⾯初次渲染完成</td>
</tr>
<tr>
<td>onHide</td>
<td>function</td>
<td>⽣命周期回调—监听⻚⾯隐藏</td>
</tr>
<tr>
<td>onUnload</td>
<td>function</td>
<td>⽣命周期回调—监听⻚⾯卸载</td>
</tr>
<tr>
<td>----------------</td>
<td>-------</td>
<td>-------------------------------------------</td>
</tr>
<tr>
<td>onPullDownRefresh</td>
<td>function</td>
<td>监听用户下拉动作</td>
</tr>
<tr>
<td>onReachBottom</td>
<td>function</td>
<td>⻚⾯上拉触底事件的处理函数</td>
</tr>
<tr>
<td>onShareAppMessage</td>
<td>function</td>
<td>⽤⼾点击右上⻆转发</td>
</tr>
<tr>
<td>onPageScroll</td>
<td>function</td>
<td>⻚⾯滚动触发事件的处理函数</td>
</tr>
<tr>
<td>onResize</td>
<td>function</td>
<td>⻚⾯尺⼨改变时触发，详⻅响应显⽰区域变化</td>
</tr>
<tr>
<td>onTabItemTap</td>
<td>function</td>
<td>当前是 tab ⻚时，点击 tab 时触发</td>
</tr>
</tbody>
</table>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<blockquote>
<p><strong>关于rpx的计算</strong></p>
<p>设计稿 750px=750rpx，那么就代表：1px=1rpx</p>
<p>如果设计稿宽度是<code>pageSize</code>，存在一个元素宽度为100px那么需要计算</p>
<ul>
<li><code>1 px = 750rpx / pageSize</code></li>
<li><code>100 px = 750rpx * 100 / pageSize</code></li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">view</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>750rpx*100/375<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote>
<blockquote>
<p>样式导入指支持相对路径</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"common.wxss"</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<blockquote>
<p><strong>导入less</strong></p>
<p>使用vscode安装插件<code>easy less</code></p>
<p>给vscode添加设置</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token string">"less.compile"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
	<span class="token string">"outExt"</span><span class="token punctuation">:</span> <span class="token string">".wxss"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote>
</template>
