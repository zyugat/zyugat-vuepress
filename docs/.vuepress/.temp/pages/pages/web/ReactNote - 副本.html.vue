<template><h1 id="reactnote" tabindex="-1"><a class="header-anchor" href="#reactnote" aria-hidden="true">#</a> ReactNote</h1>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<div class="language-HTML ext-HTML line-numbers-mode"><pre v-pre class="language-HTML"><code>&lt;div id=&quot;test&quot;&gt;&lt;/div&gt;
&lt;!-- 引入react核心库 --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.staticfile.org/react/16.4.0/umd/react.development.j&quot; &gt;&lt;/script&gt;
&lt;!-- 引入react-dom,用以支持react操作DOM --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js&quot; &gt;&lt;/script&gt;
&lt;!-- 引入balel，将jsx转为js --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js&quot; &gt;&lt;/script&gt;
&lt;script type=&quot;text/babel&quot; &gt;
&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>
<h3 id="创建虚拟dom" tabindex="-1"><a class="header-anchor" href="#创建虚拟dom" aria-hidden="true">#</a> 创建虚拟DOM</h3>
<ul>
<li>
<p>采用：<code>jsx</code>创建</p>
<ul>
<li>
<p>第一步：创建虚拟DOM</p>
<ul>
<li>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">Hello,React</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
</li>
<li>
<p>第二步：渲染DOM到页面，使用<code>ReactDOM.render(虚拟DOM, 标签)</code></p>
<ul>
<li>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>采用：<code>js</code>创建</p>
<ul>
<li>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 创建虚拟DOM</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token string">'title'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Hello'</span><span class="token punctuation">)</span>
<span class="token comment">// 渲染DOM到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</li>
</ul>
<hr>
<h3 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例-&gt;1</h3>
<p>遍历数据，在列表标签中。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//模拟一些数据</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Angular'</span><span class="token punctuation">,</span><span class="token string">'React'</span><span class="token punctuation">,</span><span class="token string">'Vue'</span><span class="token punctuation">]</span>
<span class="token comment">//1.创建虚拟DOM</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">前端js框架列表</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
<span class="token comment">//2.渲染虚拟DOM到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<ul>
<li>
<p>使用jsx比js要好，JSX可以简化创建虚拟DOM</p>
</li>
<li>
<p><strong>balel.JS的作用</strong></p>
<ul>
<li>
<ol>
<li>浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行</li>
</ol>
</li>
<li>
<ol start="2">
<li>只要用了JSX，都要加上type=&quot;text/babel&quot;, 声明需要babel来处理</li>
</ol>
</li>
</ul>
</li>
<li>
<p><strong>关于虚拟DOM：</strong></p>
<ul>
<li>1）本质是Object类型的对象**（一般对象）**</li>
<li>2）虚拟DOM比较“<strong>轻</strong>”，真实DOM比较“<strong>重</strong>”，因为虚拟DOM是React<strong>内部在用</strong>，无需真实DOM上那么多的属性。</li>
<li>3）虚拟DOM最终会被React转化为真实DOM，呈现在页面上。</li>
</ul>
</li>
<li>
<p><strong>jsx语法规则：</strong></p>
<ul>
<li>
<p>1）定义虚拟DOM时，<strong>不要写引号</strong>。</p>
</li>
<li>
<p>2）标签中混入JS表达式时要用<code>{}</code>。</p>
</li>
<li>
<p>3）样式的类名指定不要用class，<code>要用className</code>。</p>
</li>
<li>
<p>4）内联样式，<code>要用style={{</code>key:value<code>}}</code>的形式去写。</p>
</li>
<li>
<p>5）只有一个<strong>根标签</strong></p>
</li>
<li>
<p>6）标签必须闭合</p>
</li>
<li>
<p>7）标签首字母</p>
<ul>
<li>(1)若<strong>小写字母开头</strong>，则将该标签转为<strong>html中同名元素</strong>，若html中无该标签对应的同名元素，则报错。</li>
<li>(2)若<strong>大写字母开头</strong>，react就去渲染对应的<strong>组件</strong>，若组件没有定义，则报错。</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> myId <span class="token operator">=</span> <span class="token string">'aTgUiGu'</span>
<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token string">'HeLlo,rEaCt'</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myId<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token operator">:</span><span class="token string">'white'</span><span class="token punctuation">,</span>fontSize<span class="token operator">:</span><span class="token string">'29px'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>myData<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myId<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token operator">:</span><span class="token string">'white'</span><span class="token punctuation">,</span>fontSize<span class="token operator">:</span><span class="token string">'29px'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>myData<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr>
<h3 id="组件-props" tabindex="-1"><a class="header-anchor" href="#组件-props" aria-hidden="true">#</a> 组件 &amp; Props</h3>
<blockquote>
<p><strong>TIP：</strong></p>
<ul>
<li>
<p>注意</p>
<ul>
<li>组件名必须首字母大写</li>
<li>虚拟DOM元素只能有一个根元素</li>
<li>虚拟DOM元素必须有结束标签</li>
</ul>
</li>
<li>
<p>渲染类组件标签的基本流程</p>
<ul>
<li>React内部会创建组件实例对象</li>
<li>调用render()得到虚拟DOM, 并解析为真实DOM</li>
<li>插入到指定的页面元素内部</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li><strong>1-&gt;函数式组件</strong>
<ul>
<li><strong>包含：function、return</strong></li>
<li>React解析组件标签，找到组件，发现组件是函数定义的，<strong>调用函数</strong>，将return返回的虚拟DOM转为真实DOM，随后呈现在页面中。</li>
<li>return使用：<code>()</code></li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 1.创建函数式组件</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 此处的this是undefined，因为babel编译后开启了严格模式</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">我是用函数定义的组件(适用于【简单组件】的定义)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li><strong>2-&gt;类式组件</strong>
<ul>
<li><strong>包含：class、render()、return</strong></li>
<li>React解析组件标签，找到组件，发现组件是类定义的，<strong>将类实例化，通过实例调用原型render方法</strong>，将return返回的虚拟DOM转为真实DOM，随后呈现在页面中。</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//1.创建类式组件</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// constructor可以不写，默认就有。</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// render是放在哪里的？—— MyComponent的原型对象上，供实例使用。</span>
    <span class="token comment">// render中的this是谁？—— MyComponent的实例对象 &lt;=> MyComponent组件实例对象。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'render中的this:'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">我是用类定义的组件(适用于【复杂组件】的定义)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><hr>
<blockquote>
<p>TIP：</p>
<ul>
<li>
<p>理解</p>
<ul>
<li>1）每个组件对象都会有props(properties的简写)属性</li>
<li>2）<strong>组件标签</strong>的所有属性都保存在props中</li>
</ul>
</li>
<li>
<p>作用</p>
<ul>
<li>1）通过标签属性从组件外向组件内传递变化的数据</li>
<li>2） 注意: 组件内部不要修改props数据</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li><strong>3-&gt;</strong><code>Props</code>
<ul>
<li>通过<strong>属性传递数据</strong></li>
<li>React调用<code>Welcome</code>组件，将<code>name=&quot;Sara&quot;</code>作为props传入</li>
<li>组件在将<code>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code> 元素作为返回值。</li>
<li>最后更新DOM。</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">// 添加属性</span>
  test <span class="token operator">=</span> <span class="token number">100</span>	<span class="token comment">// 这样是给Car的实例添加，是错误的</span>
	<span class="token keyword">static</span> test <span class="token operator">=</span> <span class="token number">100</span>	<span class="token comment">// 给Car本身添加属性</span>
  
  <span class="token comment">// 对标签属性进行类型、必要性的限制</span>
  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 指定默认标签属性值</span>
  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">姓名：</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">年龄：</span><span class="token punctuation">{</span>age<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 对标签属性进行类型、必要性的限制</span>
Person<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span> <span class="token comment">//限制name必传，且为字符串</span>
  sex<span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span> <span class="token comment">//限制sex为字符串</span>
  age<span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span> <span class="token comment">//限制age为数值</span>
  speak<span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span> <span class="token comment">//限制speak为函数</span>
<span class="token punctuation">}</span>
<span class="token comment">// 指定默认标签属性值</span>
Person<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token string">'jack'</span><span class="token punctuation">,</span><span class="token comment">//sex默认值为男</span>
  age<span class="token operator">:</span><span class="token number">18</span> <span class="token comment">//age默认值为18</span>
<span class="token punctuation">}</span>

<span class="token comment">//渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jerry<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">}</span></span>  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul>
<li><strong>4-&gt;提取组件</strong>
<ul>
<li>将组件拆分为若干个部分</li>
<li>组件1将用户信息传递给组件2，组件2将图片信息传递给组件3，组件3获取到图片信息去展示。</li>
<li>提高组件可复用性，更好的维护组件。</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 组件1</span>
<span class="token keyword">function</span> <span class="token function">Comment</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Comment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span></span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Comment-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Comment-date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token function">formatDate</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件2</span>
<span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UserInfo-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件3</span>
<span class="token keyword">function</span> <span class="token function">Avatar</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Avatar<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span>
      <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><hr>
<h3 id="state-生命周期" tabindex="-1"><a class="header-anchor" href="#state-生命周期" aria-hidden="true">#</a> State &amp; 生命周期</h3>
<blockquote>
<p>TIP：</p>
<ul>
<li>
<p>理解</p>
<ul>
<li>1）state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)</li>
<li>2）组件被称为&quot;状态机&quot;, 通过更新组件的state来更新对应的页面显示(重新渲染组件)</li>
</ul>
</li>
<li>
<p>注意</p>
<ul>
<li>组件中render方法中的this为组件实例对象</li>
<li>组件自定义的方法中this为undefined，如何解决？a)   强制绑定this: 通过函数对象的bind()或。b)   箭头函数</li>
<li>状态数据，不能直接修改或更新，需用<code>setState</code></li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li><code>State</code>
<ul>
<li>问题
<ul>
<li>1）构造器调用1次</li>
<li>2）render调用1+n次</li>
</ul>
</li>
<li>通过setState进行更新，且更新是一种浅合并，依然可以通过<code>this.state.isHot</code>调用。</li>
<li>class的方法默认不绑定<code>this</code></li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//1.创建组件</span>
<span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">//构造器调用几次？ ———— 1次</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'constructor'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>isHot<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>wind<span class="token operator">:</span><span class="token string">'微风'</span><span class="token punctuation">}</span>
    <span class="token comment">//解决changeWeather中this指向问题</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeWeather</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'render'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//读取状态</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>isHot<span class="token punctuation">,</span>wind<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">今天天气很</span><span class="token punctuation">{</span>isHot <span class="token operator">?</span> <span class="token string">'炎热'</span> <span class="token operator">:</span> <span class="token string">'凉爽'</span><span class="token punctuation">}</span><span class="token plain-text">，</span><span class="token punctuation">{</span>wind<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>

  <span class="token comment">//changeWeather调用几次？ ———— 点几次调几次</span>
  <span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用</span>
    <span class="token comment">//由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用</span>
    <span class="token comment">//类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'changeWeather'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取原来的isHot值</span>
    <span class="token keyword">const</span> isHot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isHot
    <span class="token comment">//严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isHot<span class="token operator">:</span><span class="token operator">!</span>isHot<span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！</span>
    <span class="token comment">//this.state.isHot = !isHot //这是错误的写法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Weather</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><blockquote>
<p>TIP：另外一种写法</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">//初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>isHot<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>wind<span class="token operator">:</span><span class="token string">'微风'</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>isHot<span class="token punctuation">,</span>wind<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">今天天气很</span><span class="token punctuation">{</span>isHot <span class="token operator">?</span> <span class="token string">'炎热'</span> <span class="token operator">:</span> <span class="token string">'凉爽'</span><span class="token punctuation">}</span><span class="token plain-text">，</span><span class="token punctuation">{</span>wind<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>

  <span class="token comment">//自定义方法————要用赋值语句的形式+箭头函数</span>
  <span class="token function-variable function">changeWeather</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> isHot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isHot
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isHot<span class="token operator">:</span><span class="token operator">!</span>isHot<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Weather</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr>
<ul>
<li>
<p><strong>生命周期</strong></p>
<ul>
<li>旧版生命周期：<img src="http://img.zyugat.cn/zyuimg/react生命周期旧_arZ0HyVa.png" alt="react生命周期旧"></li>
</ul>
</li>
<li>
<p>新版生命周期</p>
</li>
</ul>
<p><img src="http://img.zyugat.cn/zyuimg/react生命周期新_kVIgnj3H.png" alt="react生命周期新"></p>
<ul>
<li>挂载时：
<ul>
<li>由<code>ReactDOM.render()</code>触发---初次渲染</li>
<li><code>getDerivedStateFromProps</code>：返回的一个状态对象，状态其实就是<code>state</code>。同时也可以获得props和state</li>
<li><code>componentDidMount</code>：组件挂载完毕的钩子</li>
</ul>
</li>
<li>更新时：
<ul>
<li>由组件内部<code>this.setSate()</code>或父组件重新<code>render</code>触发</li>
<li><code>shouldComponentUpdate</code>：组件更新前调用</li>
<li><code>getSnapshotBeforeUpdate</code>：在准备渲染输出(提交给DOM节点)前调用，其任何返回值都会作为参数传递给<code>componentDidUpdate</code></li>
<li><code>componentDidUpdate</code>：他里面的props和state都是上一次的状态，不是最新的。而snapshotValue是刚刚<code>getSnapshotBeforeUpdate</code>传递给来的参数</li>
</ul>
</li>
<li>卸载时：
<ul>
<li>由<code>ReactDOM.unmountComponentAtNode()</code>触发</li>
<li><code>componentWillUpdate</code>：组件将要卸载的钩子</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 卸载组件按钮的回调</span>
<span class="token function-variable function">death</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>  
  ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 强制更新按钮的回调</span>
<span class="token function-variable function">force</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ——————挂载时——————</span>
<span class="token comment">// 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromPropsstatic </span>
<span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'getDerivedStateFromProps'</span><span class="token punctuation">,</span>props<span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token comment">// return {count: 100}	// 这样设置那么count一直都是100  return null}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件挂载完毕的钩子</span>
<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Count---componentDidMount'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ——————更新时——————</span>
<span class="token comment">// 组件更新前调用</span>
<span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Count---shouldComponentUpdate'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// 更新前，准备交给DOM节点前，返回值交给</span>
<span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 	
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'getSnapshotBeforeUpdate'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token keyword">return</span> <span class="token string">'atguigu'</span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件更新完毕的钩子</span>
<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">preProps<span class="token punctuation">,</span>preState<span class="token punctuation">,</span>snapshotValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Count---componentDidUpdate'</span><span class="token punctuation">,</span>preProps<span class="token punctuation">,</span>preState<span class="token punctuation">,</span>snapshotValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ——————卸载时——————</span>
<span class="token comment">// 组件将要卸载的钩子</span>
<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Count---componentWillUnmount'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><hr>
<h3 id="refs-事件处理" tabindex="-1"><a class="header-anchor" href="#refs-事件处理" aria-hidden="true">#</a> refs &amp; 事件处理</h3>
<ul>
<li><code>refs</code>
<ul>
<li>通过给组件标签<strong>定义ref属性</strong>来标识标签（真实DOM），可以直接对标签进行操作。</li>
<li>字符串形式的ref已经是过时的，不推荐使用，存在效率问题，尽可能使用回调形式的。</li>
</ul>
</li>
</ul>
<p><strong>字符串形式</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 字符串形式</span>
<span class="token comment">// 展示输入框的数据</span>
<span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs
  <span class="token function">alert</span><span class="token punctuation">(</span>inputRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    	// 定义ref属性
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputRef<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点击按钮提示数据<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showData<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点我提示左侧的数据</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>TIP：refs回调函数如果以内联函数的方式调用，那么在更新的过程中会执行两次，第一次传入参数null第二次才有值。过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题。</p>
</blockquote>
<blockquote>
<p>Pro：内联回调是将 <strong><code>元素属性</code></strong> 添加到<strong>组件属性</strong>中（<code>this.inputRef = c</code>），其中c保存的就是 <strong><code>元素属性</code></strong>。</p>
<p>回调：而回调形式需要另写一行代码将 <strong><code>元素属性</code></strong> 添加到 <strong>组件属性</strong>中。（<code>saveInput</code>）</p>
</blockquote>
<p><strong>下面是通过回调形式</strong></p>
<p>要注意，这里的不从<code>this.refs</code>上取，而从<code>this</code>上取。因为组件采用<strong>箭头函数</strong>，因此他没有自己的<code>this</code>，而往上找<code>this</code>就找到<code>render</code><strong>（render的this就是实例对象）</strong>。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 这里不从this.refs上取，而从this上取</span>
  <span class="token comment">// 因为采用回调形式的this的挂载到实例上</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>inputRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 内联函数回调形式，更新的时候会执行两次</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> c <span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点击按钮提示数据<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  
<span class="token comment">// 回调形式</span>
<span class="token function-variable function">saveInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>input1 <span class="token operator">=</span> c<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveInput<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><hr>
<blockquote>
<p>TIP：</p>
<ul>
<li>
<p>React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —— 为了更好的兼容性</p>
</li>
<li>
<p>React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —为了的高效</p>
</li>
<li>
<p>通过event.target得到发生事件的DOM元素对象 ———————不要过度使用ref</p>
</li>
</ul>
</blockquote>
<ul>
<li><strong>事件处理</strong>
<ul>
<li><code>e</code> 是一个合成事件。React 根据 <a href="https://www.w3.org/TR/DOM-Level-3-Events/" target="_blank" rel="noopener noreferrer">W3C 规范<ExternalLinkIcon/></a>来定义这些合成事件。</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ActionLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 阻止默认事件</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The link was clicked.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
      Click me</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li><strong>事件处理程序传递参数</strong>
<ul>
<li>下面两种方式是等价的，传递参数id</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Delete Row</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Delete Row</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>
<h3 id="条件渲染-表单" tabindex="-1"><a class="header-anchor" href="#条件渲染-表单" aria-hidden="true">#</a> 条件渲染 &amp; 表单</h3>
<ul>
<li><code>if</code></li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> props<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserGreeting</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">GuestGreeting</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面例子中，通过获取登陆状态从而判断采用什么组件。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token comment">// 获取登陆状态</span>
  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>
  <span class="token keyword">let</span> button<span class="token punctuation">;</span>
  <span class="token comment">// 判断登陆状态</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    button <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogoutButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    button <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoginButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token comment">// 最后返回</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Greeting</span></span> <span class="token attr-name">isLoggedIn</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span>button<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoginControl</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul>
<li>运算符<code>&amp;&amp;</code>
<ul>
<li>如果unreadMessages存在数据，那么就显示数据长度</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"> You have </span><span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token plain-text"> unread messages. </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>三目运算符</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
    The user is </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token string">'currently'</span> <span class="token operator">:</span> <span class="token string">'not'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token plain-text"> logged in.</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>阻止组件渲染，当warn的值为false，那么组件就不会渲染</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">WarningBanner</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>warn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"> Warning! </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr>
<blockquote>
<p>TIP：表单可以通过<code>event.target.value</code>获取值</p>
</blockquote>
<ul>
<li><strong>表单</strong>
<ul>
<li>受控组件：输入类的DOM随着你的输入，就会维护到状态(state)中</li>
<li>非受控组件：输入组件如果现用现取就是非受控组件</li>
</ul>
</li>
</ul>
<p>下面的例子就是受控组件，当输入框的值发生改变的时候就会调用<code>handleChange</code>方法，<code>handleChange</code>方法会实时的修改状态中的值。</p>
<p>下面使用了计算属性，<code>[name]</code>，如果不使用他会直接把值给一个叫name的键。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>inputValue<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 受控组件</span>
<span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>name<span class="token punctuation">;</span>  
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleSubmit</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> 
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'提交的名字: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
      名字:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">      
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">    
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>  
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><hr>
<h3 id="高阶函数和函数柯里化" tabindex="-1"><a class="header-anchor" href="#高阶函数和函数柯里化" aria-hidden="true">#</a> 高阶函数和函数柯里化</h3>
<ul>
<li>
<p>高阶函数</p>
<ul>
<li>需要满足其中一个条件
<ul>
<li>1）若A函数，<strong>接收的参数</strong>是一个函数，那么A就可以称之为高阶函数。</li>
<li>2）若A函数，调用的<strong>返回值</strong>依然是一个函数，那么A就可以称之为高阶函数。</li>
</ul>
</li>
<li>若<code>input</code>输入框中，<code>onChange</code>是带参数的**saveFormData(参数)**则表示将返回值交给onChange</li>
<li>若<code>input</code>输入框中，<code>onChange</code>是个方法的<strong>this.saveFormData</strong>则表示将该函数交给onChange回调</li>
</ul>
<p>下面案例中，<code>saveFormData</code>方法获取到input组件传递来的参数<code>username</code>，通过<code>setState</code>设置<code>username</code>的值为输入框的值（通过event事件获取），最后将该行为作为一个方法<code>return</code>给<strong>input的onChange</strong>。</p>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">// 初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span><span class="token string">''</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 保存表单数据到状态中</span>
  <span class="token function-variable function">saveFormData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dataType</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 这样要注意的[dataType]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 表单提交的回调</span>
  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止表单提交</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你输入的用户名是：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        用户名：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveFormData</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><hr>
<ul>
<li><strong>函数柯里化</strong>
<ul>
<li>特性：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">b</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> Key</h3>
<ul>
<li><strong>Key</strong>
<ul>
<li>首先要清楚，更新页面的时候，DOM会将新的虚拟DOM与旧的虚拟DOM<strong>相比较</strong>，如果相同则直接<strong>复用</strong>，若不相同则<strong>更新</strong>。</li>
<li>比较的时候<code>diffng</code>是<strong>逐层对比</strong>，每个标签(节点)算一层</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">hello</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/*只有span标签内会更新，而span标签内的input是不会更新的。*/</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
          现在是：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">toTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>1）react/vue中的key有什么作用？（key的内部原理是什么？）</li>
<li>2）为什么遍历列表时，key最好不要用index?</li>
</ul>
<blockquote>
<ol>
<li>key的作用</li>
</ol>
<p>a。找到相同的key，若内容没变则复用，若内容变了则生成新真实DOM。</p>
<p>b。若找不到相同的key，则生成新真实DOM</p>
</blockquote>
<ul>
<li>
<ol>
<li><strong>虚拟DOM中key的作用：</strong></li>
</ol>
<ul>
<li>1）简单的说：<strong>key是虚拟DOM对象的标识</strong>, 在更新显示时key起着极其重要的作用。</li>
<li>2）详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
<ul>
<li>a. 旧虚拟DOM中找到了与新虚拟DOM<strong>相同的key</strong>：
<ul>
<li>(1).若虚拟DOM中<strong>内容没变</strong>, 直接使用之前的真实DOM</li>
<li>(2).若虚拟DOM中<strong>内容变了</strong>, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM</li>
</ul>
</li>
<li>b. <strong>旧虚拟DOM中未找到与新虚拟DOM相同的key</strong>：根据数据创建新的真实DOM，随后渲染到到页面</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<ol start="2">
<li>index作为Key的问题</li>
</ol>
<p>若对数据进行：逆序添加、逆序删除等破坏顺序操作会产生没有必要的真实DOM更新 ==&gt; 界面效果没问题, 但效率低。</p>
<p>含输入类DOM会产生错误DOM更新 ==&gt; 界面有问题。</p>
</blockquote>
<ul>
<li>
<ol start="2">
<li><strong>用index作为key可能会引发的问题：</strong></li>
</ol>
<ul>
<li>1）若对数据进行：逆序添加、逆序删除等破坏顺序操作，会产生没有必要的真实DOM更新 ==&gt; 界面效果没问题, 但效率低。</li>
<li>2）如果结构中还包含输入类的DOM：会产生错误DOM更新 ==&gt; 界面有问题。</li>
<li>3）注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。</li>
</ul>
</li>
<li>
<ol start="3">
<li><strong>开发中如何选择key：</strong>
<ol>
<li>1）最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。</li>
<li>2）如果确定只是简单的展示数据，用index也是可以的。</li>
</ol>
</li>
</ol>
<ul>
<li>实例中，li节点发生改变，但input框复用了，因此导致信息错乱。</li>
</ul>
</li>
</ul>
<h2 id="脚手架" tabindex="-1"><a class="header-anchor" href="#脚手架" aria-hidden="true">#</a> 脚手架</h2>
<p><code>yarn add prop-types</code></p>
<p><code>yarn add axios</code></p>
<p><code>yarn add http-proxy-middleware</code></p>
<p><code>yarn add pubsub-js</code></p>
<p><code>yarn add redux</code></p>
<p><code>yarn add redux-thunk</code></p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>安装：npm i -g create-react-app
创建项目：create-react-app hello-react
进入目录：cd hello-react
启动：yarn start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>目录结构：</p>
<blockquote>
<p>​	public ---- 静态资源文件夹</p>
<p>​		favicon.icon ------ 网站页签图标</p>
<p>​		index.html -------- 主页面</p>
<p>​		logo192.png ------- logo图</p>
<p>​		logo512.png ------- logo图</p>
<p>​		manifest.json ----- 应用加壳的配置文件</p>
<p>​		robots.txt -------- 爬虫协议文件</p>
<p>src ---- 源码文件夹</p>
<p>​		App.css -------- App组件的样式</p>
<p>​		App.js --------- App组件</p>
<p>​		App.test.js ---- 用于给App做测试</p>
<p>​		index.css ------ 样式</p>
<p>​		index.js ------- 入口文件</p>
<p>​		logo.svg ------- logo图</p>
<p>​		reportWebVitals.js			--- 页面性能分析文件(需要web-vitals库的支持)</p>
<p>​		setupTests.js			---- 组件单元测试的文件(需要jest-dom库的支持)</p>
</blockquote>
<h3 id="todolist案例" tabindex="-1"><a class="header-anchor" href="#todolist案例" aria-hidden="true">#</a> TodoList案例</h3>
<p><code>如果样式错误，则请注释index中的bootstrap样式</code></p>
<p>功能：列表，插入删除数据，全选数据，删除选择项数据。</p>
<ul>
<li>添加数据
<ul>
<li>父组件通过<code>props</code>给子组件<strong>传递一个函数</strong>，子组件将数据<strong>放在参数</strong>中</li>
</ul>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// ————添加数据————</span>
<span class="token comment">// 父组件</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">addNewList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>addNewList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">// 子组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">addNewList</span><span class="token punctuation">(</span>todoNew<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>要注意，如果：<code>onChange={this.handleCheck(id)}</code>，给按钮绑定了个事件，并且<strong>传参</strong>了，那么函数就必须要使用高阶函数。<strong>(返回值是一个函数)</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">handleCheck</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>技巧</strong></p>
<p>当数据放在父组件state中（官方称此操作为：状态提升）</p>
<p><code>map</code>：返回项</p>
<p><code>filter</code>：如果该项为true则返回该项</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 1.插入数据，让新数据在前面</span>
<span class="token keyword">const</span> newTodos <span class="token operator">=</span> <span class="token punctuation">[</span>todoNew<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todos<span class="token punctuation">]</span>
<span class="token comment">// 2.修改局部数据※※※</span>
c<span class="token operator">=</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token number">3</span>
c<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>c<span class="token punctuation">,</span> b<span class="token punctuation">}</span> 
<span class="token comment">// a:1, b:3</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span> done<span class="token punctuation">}</span>
<span class="token comment">// 3.获取键盘按键数字</span>
e<span class="token punctuation">.</span>keyCode	
<span class="token comment">// 13代表回车</span>
<span class="token comment">// 4.提示框，带确认取消</span>
window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'确定删除吗？'</span><span class="token punctuation">)</span>
<span class="token comment">// 5.Key的绑定，先绑定id然后绑定其他</span>
key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr>
<h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h3>
<p>解决跨域的两个方案</p>
<ul>
<li>
<p>方案1：</p>
<ul>
<li>
<p>先在本地3000端口找(找public文件夹)，如果没有，那么就会去5000端口的地址找</p>
</li>
<li>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// package.json</span>
<span class="token string">"proxy"</span><span class="token operator">:</span> <span class="token string">"http://localhost:5000"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</li>
<li>
<p>方案2</p>
<ul>
<li>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>createProxyMiddleware<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http-proxy-middleware'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 带有该前缀的请求(stu)，全部转发给端口5000</span>
	app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
			<span class="token comment">// api1前缀的请求，就会触发代理</span>
			<span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token string">'/api1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token comment">// 请求转发给谁</span>
				target<span class="token operator">:</span> <span class="token string">'http://localhost:5000'</span><span class="token punctuation">,</span>
				<span class="token comment">// 控制服务器收到的请求头的Host字段的值</span>
				changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token comment">// 重写请求路径</span>
				pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">'^/api1'</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token string">'/api2'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				target<span class="token operator">:</span> <span class="token string">'http://localhost:5001'</span><span class="token punctuation">,</span>
				changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">'^/api2'</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li>
</ul>
</li>
</ul>
<hr>
<h3 id="searchgithub案例" tabindex="-1"><a class="header-anchor" href="#searchgithub案例" aria-hidden="true">#</a> SearchGithub案例</h3>
<p>功能：GITHUB搜索用户名</p>
<p><code>avatar_url</code>：用户头像</p>
<p><strong>技巧</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 1.解构赋值</span>
<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyWordElement<span class="token punctuation">.</span>value
<span class="token keyword">const</span> <span class="token punctuation">{</span>value<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyWordElement
<span class="token punctuation">{</span>keyWordElement<span class="token operator">:</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>

<span class="token comment">// 2.连续解构赋值</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>	
<span class="token comment">// 1</span>

<span class="token comment">// 2.5连续解构赋值重命名</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token operator">:</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>	
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><hr>
<h3 id="pubsub订阅机制" tabindex="-1"><a class="header-anchor" href="#pubsub订阅机制" aria-hidden="true">#</a> PubSub订阅机制</h3>
<p><code>yarn add pubsub-js</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token number">1</span><span class="token punctuation">)</span>	<span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span> <span class="token comment">// 引入</span>
<span class="token number">2</span><span class="token punctuation">)</span>	<span class="token keyword">var</span> token <span class="token operator">=</span> PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 订阅</span>
<span class="token number">3</span><span class="token punctuation">)</span>	PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">// 发布消息,组件挂载时 componentDidMount </span>
<span class="token number">4</span><span class="token punctuation">)</span>  PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>	<span class="token comment">// 取消订阅,组件卸载时 componentWillUnmount</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>折叠技巧</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// #region</span>
<span class="token comment">// #endregion</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h3>
<p><strong>SPA理解</strong></p>
<ol>
<li>
<p>单页Web应用（single page web application，SPA）。</p>
</li>
<li>
<p>整个应用只有<strong>一个完整的页面</strong>。</p>
</li>
<li>
<p>点击页面中的链接<strong>不会刷新</strong>页面，只会做页面的<strong>局部更新。</strong></p>
</li>
<li>
<p>数据都需要通过ajax请求获取, 并在前端异步展现。</p>
</li>
</ol>
<p><strong>路由的理解</strong></p>
<ul>
<li>什么是路由?
<ul>
<li>一个路由就是一个映射关系(key:value)</li>
<li>key为路径, value可能是function或component</li>
</ul>
</li>
<li>后端路由
<ul>
<li>
<ol>
<li>理解： value是function, 用来处理客户端提交的请求。</li>
</ol>
</li>
<li>
<ol start="2">
<li>注册路由： <code>router.get(path, function(req, res))</code></li>
</ol>
</li>
<li>
<ol start="3">
<li>工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据</li>
</ol>
</li>
</ul>
</li>
<li>前端路由
<ul>
<li>
<ol>
<li>浏览器端路由，value是component，用于展示页面内容。</li>
</ol>
</li>
<li>
<ol start="2">
<li>注册路由: <code>&lt;Route path=&quot;/home&quot; component={Home}&gt;</code></li>
</ol>
</li>
<li>
<ol start="3">
<li>工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件</li>
</ol>
</li>
</ul>
</li>
</ul>
<p>路由组件放<code>pages</code>，一般组件放<code>components</code></p>
<p>两个组件的区别是在于<code>props</code>，路由组件会收到<code>三个固定</code>属性</p>
<p><strong>路由组件简单使用</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.导航区的a标签改为Link标签
      &lt;Link to="/xxxxx">Demo&lt;/Link>
2.展示区写Route标签进行路径的匹配
      &lt;Route path='/xxxx' component={Demo}/>
3.&lt;App>的最外侧包裹了一个&lt;BrowserRouter>或&lt;HashRouter>
路由组件：
history:
      go: ƒ go(n)
      goBack: ƒ goBack()
      goForward: ƒ goForward()
      push: ƒ push(path, state)
      replace: ƒ replace(path, state)
location:
      pathname: "/about"
      search: ""
      state: undefined
match:
      params: {}
      path: "/about"
      url: "/about"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>NavLink：点击会有效果，追加一个active</p>
<p>activeClassName：更改点击的样式</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// index.html</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token plain-text">
  .demo {
    background-color: red !important;
    color: white !important;
  }
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token comment">// index.jsx</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-group-item<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"/Home"</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>封装NavLink</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-group-item<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyNavLink</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>About<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/About<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyNavLink</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>Swtich</strong></p>
<p>只会显示一个<strong>我是Home的内容</strong>，不会显示2个。</p>
<p>Switch的特性就是匹配中一个，就不会往下继续匹配</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/About<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/Home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/Home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>解决多级路径刷新页面样式丢失的问题</strong></p>
<ul>
<li>引入样式时不写 ./ 写 / （常用）</li>
<li>引入样式时不写 ./ 写 %PUBLIC_URL% （常用）</li>
<li>使用HashRouter</li>
</ul>
<p><strong>路由的严格匹配与模糊匹配</strong></p>
<ul>
<li>默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）</li>
<li>开启严格匹配：<code>&lt;Route exact={true} path=&quot;/about&quot; component={About}/&gt;</code></li>
<li>严格匹配不要随便开启，需要再开，有些时候开启会导致<strong>无法继续匹配二级路由</strong></li>
</ul>
<p><strong>Redirect</strong></p>
<p>一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由</p>
<div class="language-HTML ext-HTML line-numbers-mode"><pre v-pre class="language-HTML"><code>&lt;Redirect to=&quot;/About&quot;/&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>嵌套路由</strong></p>
<p>也就是二级路由，路由地址需要接一级路由home然后往后写</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/news<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">News</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/news<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>News<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>路由传参</strong></p>
<ul>
<li>第一种是用<code>params</code></li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 第一步：传递参数</span>
<span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">'/demo/test/tom/18'</span><span class="token punctuation">}</span><span class="token operator">></span>详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>

<span class="token comment">// 第二步：声明接受</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/demo/test/:name/:age<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Test<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>

<span class="token comment">// 第三步：接收参数</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>params
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>第二种是用<code>search</code></li>
</ul>
<p>格式：<code>?key=value&amp;key2=value2</code></p>
<p>备注：获取到的search是urlencoded编码字符串，需要借助querystring解析</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 第一步：传递参数</span>
<span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">'/demo/test?name=tom&amp;age=18'</span><span class="token punctuation">}</span><span class="token operator">></span>详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>
<span class="token comment">// 第二步：无需声明接受，直接使用</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">'querystring'</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>第三种是<code>state</code></li>
</ul>
<p>优点是路径没有任何东西</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 第一步：传递参数</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>pathname<span class="token operator">:</span><span class="token string">'/demo/test'</span><span class="token punctuation">,</span>state<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">'tom'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">详情</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>
<span class="token comment">// 第二步：无需声明接受，直接使用</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span> title<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>state
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>将默认的路由跳转改为替换</strong></p>
<p>默认是跳转是push，压栈的方式。改为替换就要用<code>replace</code></p>
<p>给<code>Link</code>加一个<code>replace</code>就可以</p>
<p><code>&lt;MyNavLink replace to=&quot;/home/news&quot;&gt;News&lt;/MyNavLink&gt;</code></p>
<p><strong>编程式路由导航</strong></p>
<p>借助<code>this.props.history</code>对象上的API对操作路由跳转、前进、后退</p>
<p>如果要传state则需要看回上面路由组件的<code>history</code>属性，只有push和replace的第二参数是传state</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>在一般组件上使用路由功能</strong></p>
<p>一般组件是没有<code>history</code>属性的，只有路由组件才有。</p>
<p>那么就需要使用<code>withRouter</code>，加工一般组件，使一般组件具备具有组件所特有的API</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>
<span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Header<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>BrowserRouter与HashRouter的区别</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token number">1.</span>底层原理不一样：
      BrowserRouter使用的是<span class="token constant">H5</span>的history <span class="token constant">API</span>，不兼容<span class="token constant">IE9</span>及以下版本。
      HashRouter使用的是<span class="token constant">URL</span>的哈希值。
<span class="token number">2.</span>path表现形式不一样
      BrowserRouter的路径中没有#<span class="token punctuation">,</span>例如：localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>demo<span class="token operator">/</span>test
      HashRouter的路径包含#<span class="token punctuation">,</span>例如：localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>#<span class="token operator">/</span>demo<span class="token operator">/</span>test
<span class="token number">3.</span><span class="token function">刷新后对路由state参数的影响</span>
      <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BrowserRouter没有任何影响，因为state保存在history对象中。</span>
      <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>HashRouter刷新后会导致路由state参数的丢失！！！
<span class="token number">4.</span>备注：HashRouter可以用于解决一些路径错误相关的问题。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="ui组件库" tabindex="-1"><a class="header-anchor" href="#ui组件库" aria-hidden="true">#</a> UI组件库</h3>
<p>安装ant-design：<code>yarn add antd</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.修改package.json
    ....
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },
    ....
3.根目录下创建config-overrides.js
    //配置具体的修改规则
    const { override, fixBabelImports,addLessLoader} = require('customize-cra');
    module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
        lessOptions:{
          javascriptEnabled: true,
          modifyVars: { '@primary-color': 'green' },
        }
      }),
    );
  4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h3>
<p><img src="http://img.zyugat.cn/zyuimg/redux原理图_KBCdbp8C.png" alt="redux原理图"></p>
<p>安装：<code>yarn add redux</code></p>
<p>首先要清楚，Redux可以分为四个文件：</p>
<p><code>constant.js</code>：定义action对象中type类型的常量值</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">INCREMENT</span> <span class="token operator">=</span> <span class="token string">'increment'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DECREMENT</span> <span class="token operator">=</span> <span class="token string">'decrement'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>count_action.js</code>：为组件生成Action对象，对应上图的Redux原理图。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INCREMENT</span><span class="token punctuation">,</span> <span class="token constant">DECREMENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constant'</span>
<span class="token comment">// 同步action，就是指action的值为Object类型的一般对象</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createIncrementAction</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token constant">INCREMENT</span><span class="token punctuation">,</span> data<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>count_reducer.js</code>：为组件服务的Reducer函数，具体作用是对数据进行操作。有两个参数之前的状态(preState)，动作对象(action)</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> initState <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//初始化状态</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">countReducer</span><span class="token punctuation">(</span><span class="token parameter">preState <span class="token operator">=</span> initState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//从action对象中获取：type、data</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span>type<span class="token punctuation">,</span> data<span class="token punctuation">}</span> <span class="token operator">=</span> action
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>store.js</code>：保存状态，专门暴露一个store对象</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 引入createStore，专门用于创建redux中最为核心的store对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">// 引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> countReducer <span class="token keyword">from</span> <span class="token string">'./count_reducer'</span>
<span class="token comment">// 引入redux-thunk，用于支持异步action</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>
<span class="token comment">// 暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>countReducer<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>
<p>使用<code>Redux</code>分三步</p>
</li>
<li>
<p>第一步：创建<code>store.js</code></p>
</li>
<li>
<p>第二步：创建<code>count_reducer.js</code>，用来操作数据</p>
</li>
<li>
<p>第三步：发出操作指令。有两种方式编写</p>
</li>
</ul>
<p>第一种：简单版，直接在组件上写<strong>状态</strong>和<strong>动作对象</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// count/index.js</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'../../redux/store'</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span><span class="token string">'increment'</span><span class="token punctuation">,</span>data<span class="token operator">:</span>value<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第二种：完整版，通过调用<code>count_action.js</code>的对象操作</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// redux/count_action.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createIncrementAction</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span><span class="token string">'increment'</span><span class="token punctuation">,</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createDecrementAction</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span><span class="token string">'decrement'</span><span class="token punctuation">,</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// count/index.js</span>
<span class="token comment">// 直接传值就可以了</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">createIncrementAction</span><span class="token punctuation">(</span>value<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>同步action，就是指action的值为Object类型的一般对象</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createIncrementAction</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span><span class="token constant">INCREMENT</span><span class="token punctuation">,</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。</p>
<p>需要安装<code>yarn add redux-thunk</code>用以支持异步action</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// redux/count_action.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createIncrementAsyncAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>time</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数是store调用的，同时也会传一个dipatch，所以可以直接用。</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
			<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">createIncrementAction</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>time<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// redux/store.js</span>
<span class="token comment">//引入createStore，专门用于创建redux中最为核心的store对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span>applyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">//引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> countReducer <span class="token keyword">from</span> <span class="token string">'./count_reducer'</span>
<span class="token comment">//引入redux-thunk，用于支持异步action</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>
<span class="token comment">//暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>countReducer<span class="token punctuation">,</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h3>
<p><img src="http://img.zyugat.cn/zyuimg/react-redux模型图_tnW9nOXv.png" alt="react-redux模型图"></p>
<ul>
<li>两个概念
<ul>
<li>UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。</li>
<li>容器组件：负责和redux通信，将结果交给UI组件。</li>
</ul>
</li>
</ul>
<p><strong>如何创建一个容器组件？</strong></p>
<p>安装：<code>yarn add react-redux</code></p>
<p>导入：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建容器组件依靠<code>connect</code>函数，其拥有两个参数：</p>
<p><code>mapStateToProps</code>：映射状态，返回值是一个对象，在组件中可以通过<code>count:state</code>获取到状态。</p>
<p><code>mapDispatchToProps</code>：映射操作状态的方法，返回值是一个对象</p>
<p>使用<code>connect</code>：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">connect</span><span class="token punctuation">(</span>
  <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>key<span class="token operator">:</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>	<span class="token comment">// 映射状态mapStateToProps</span>
  <span class="token punctuation">{</span>key<span class="token operator">:</span>xxxxxAction<span class="token punctuation">}</span>	<span class="token comment">// 映射操作状态的方法</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token constant">UI</span>组件<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>容器组件的store如何传递？</strong></p>
<p>使用<code>props</code>传递，传递有两种方式，方式一：给组件一个一个传递store</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// ReactRedux/index.js</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./Redux/store'</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Count</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>方式二：在外面<code>index.js</code>通过<code>Provider</code>给所有容器对象传递store</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./components/ReactRedux/Redux/store'</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>UI组件如何读取和操作状态？</strong></p>
<p>通过：<code>this.props.xxxx</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 在使用connent函数的时候就定义了</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>总结</strong></p>
<p>第一步：引入各种包</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// 引入connect用于连接UI组件与redux</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>
<span class="token comment">// 引入action</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	createIncrementAction<span class="token punctuation">,</span>
	createDecrementAction<span class="token punctuation">,</span>
	createIncrementAsyncAction
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../Redux/count_action'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>第二步：编写UI组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>第三步：使用connent函数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>
		<span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token operator">:</span> state<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token comment">// mapDispatchToProps的简写</span>
		<span class="token punctuation">{</span>
			jia<span class="token operator">:</span> createIncrementAction<span class="token punctuation">,</span>
			jian<span class="token operator">:</span> createDecrementAction<span class="token punctuation">,</span>
			jiaAsync<span class="token operator">:</span> createIncrementAsyncAction
		<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span>Count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="共享数据案例" tabindex="-1"><a class="header-anchor" href="#共享数据案例" aria-hidden="true">#</a> 共享数据案例</h3>
<p>当需要引入2个及2个以上的<code>Reducers</code>时，需要使用<code>combineReducers</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//引入createStore，专门用于创建redux中最为核心的store对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span>applyMiddleware<span class="token punctuation">,</span>combineReducers<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">//引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> countReducer <span class="token keyword">from</span> <span class="token string">'./reducers/count'</span>
<span class="token comment">//引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> personReducer <span class="token keyword">from</span> <span class="token string">'./reducers/person'</span>
<span class="token comment">//引入redux-thunk，用于支持异步action</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>

<span class="token comment">//汇总所有的reducer变为一个总的reducer</span>
<span class="token keyword">const</span> allReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	he<span class="token operator">:</span>countReducer<span class="token punctuation">,</span>
	rens<span class="token operator">:</span>personReducer
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>allReducer<span class="token punctuation">,</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="redux调试工具" tabindex="-1"><a class="header-anchor" href="#redux调试工具" aria-hidden="true">#</a> Redux调试工具</h3>
<p>浏览器安装：<code>Redux DevTools</code></p>
<p>下载包：<code>npm install --save-dev redux-devtools-extension</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// store.js</span>
<span class="token comment">//引入redux-devtools-extension</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>composeWithDevTools<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-devtools-extension'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>allReducer<span class="token punctuation">,</span><span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p><strong>setState</strong></p>
<p>更新状态是异步的操作，因此第三行输出0</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>a<span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>a<span class="token punctuation">)</span>	<span class="token comment">//a:0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>因此，setState有两种方式：</p>
<p><strong>对象式</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">setState</span><span class="token punctuation">(</span>stateChange<span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">1.</span><span class="token function">stateChange为状态改变对象</span><span class="token punctuation">(</span>该对象可以体现出状态的更改<span class="token punctuation">)</span>
<span class="token number">2.</span>callback是可选的回调函数<span class="token punctuation">,</span> <span class="token function">它在状态更新完毕、界面也更新后</span><span class="token punctuation">(</span>render调用后<span class="token punctuation">)</span>才被调用
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>函数式</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">setState</span><span class="token punctuation">(</span>updater<span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">1.</span>updater为返回stateChange对象的函数<span class="token punctuation">,</span>改变后的结果
<span class="token number">2.</span>updater可以接收到state和props
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token operator">=></span><span class="token punctuation">{</span>count<span class="token operator">:</span> state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用原则：</p>
<p>1）如果新状态不依赖于原状态 ===&gt; 使用对象方式</p>
<p>2）如果新状态依赖于原状态 ===&gt; 使用函数方式</p>
<p>3）如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取</p>
<hr>
<p><strong>lazyLoad</strong></p>
<p>懒加载，必须用<code>Suspense</code>将所有组件包含进来，<code>fallback</code>的意思是，在加载的过程种显示一个界面</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包</span>
<span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Login'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//2.通过&lt;Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">loading.....</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/xxx<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Xxxx<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr>
<h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h3>
<p>Hook是React 16.8.0版本增加的新特性/新语法，可以让你在函数组件中使用 state 以及其他的 React 特性。</p>
<p>三个最常用的Hook</p>
<p>(1).<code>State Hook: React.useState()</code>
(2).<code>Effect Hook: React.useEffect()</code>
(3).<code> Ref Hook: React.useRef()</code></p>
<p><strong>State Hook</strong></p>
<p>让函数组件也可以有state状态, 并进行状态数据的读写操作</p>
<p>语法：<code>const [data, setData] = React.useState(initValue)</code></p>
<p><code>useState()</code>：第一个参数是初始化值，第二个参数是更新状态的函数</p>
<p><code>setData()</code>：参数可以是非函数，也可以是函数。</p>
<p><strong>Effect Hook</strong></p>
<p>在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)</p>
<p>语法：</p>
<p>第二个参数如果加了<code>[]</code>，就表示只会在第一次render()时调用。（componentDidMount()）</p>
<p>同时如果往第二参数的<code>[]</code>里面填写<code>data</code>就表示当data值发生改变的时候就会调用。（componentDidUpdate()）</p>
<p>如果第一个参数的函数有<code>return</code>则表示卸载前执行。（componentWillUnmount()）</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
  <span class="token comment">// 在此可以执行任何带副作用操作</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 在组件卸载前执行</span>
    <span class="token comment">// 在此做一些收尾工作, 比如清除定时器/取消订阅等</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>stateValue<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 如果指定的是[], 回调函数只会在第一次render()后执行</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Ref Hook</strong></p>
<p>语法：<code>const refContainer = useRef()</code></p>
<hr>
<p><strong>Fragment</strong></p>
<p>作用：可以不用必须有一个真实的DOM根标签了，类似Vue的<code>template</code></p>
<p>只能拥有一个<code>key</code>属性</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<p><strong>Context</strong></p>
<p>组件间的通信，常用于【祖组件】与【后代组件】间通信</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token number">1</span><span class="token punctuation">)</span> 创建Context容器对象：
	<span class="token keyword">const</span> Context <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
	
<span class="token number">2</span><span class="token punctuation">)</span> 渲染子组时，外面包裹Context<span class="token punctuation">.</span>Provider<span class="token punctuation">,</span> 通过value属性给后代组件传递数据：
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
		子组件
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Provider</span></span><span class="token punctuation">></span></span>
    
<span class="token number">3</span><span class="token punctuation">)</span> 后代组件读取数据：

	<span class="token comment">//第一种方式:仅适用于类组件 </span>
	  <span class="token keyword">static</span> contextType <span class="token operator">=</span> Context  <span class="token comment">// 声明接收context</span>
	  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token comment">// 读取context中的value数据</span>
	  
	<span class="token comment">//第二种方式: 函数组件与类组件都可以</span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Consumer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
	    </span><span class="token punctuation">{</span>
	      <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">(</span> <span class="token comment">// value就是context中的value数据</span>
	        要显示的内容
	      <span class="token punctuation">)</span>
	    <span class="token punctuation">}</span><span class="token plain-text">
	  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xxxContext.Consumer</span><span class="token punctuation">></span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><hr>
<p><strong>组件优化</strong></p>
<p>目前Component有两个问题</p>
<p>1）只要执行setState(),即使不改变状态数据, 组件也会重新render() ==&gt; 效率低</p>
<p>2）只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==&gt; 效率低</p>
<p><strong>问题所在</strong>：Component中的shouldComponentUpdate()总是返回true</p>
<p>解决办法：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>办法<span class="token number">1</span><span class="token operator">:</span> 
	<span class="token function">重写shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span>nextState<span class="token punctuation">)</span>方法
	比较新旧state或props数据<span class="token punctuation">,</span> 如果有变化才返回<span class="token boolean">true</span><span class="token punctuation">,</span> 如果没有返回<span class="token boolean">false</span>
办法<span class="token number">2</span><span class="token operator">:</span>  
	使用PureComponent
	<span class="token function">PureComponent重写了shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 只有state或props数据有变化才返回<span class="token boolean">true</span>
	注意<span class="token operator">:</span> 
		只是进行state和props数据的浅比较<span class="token punctuation">,</span> 如果只是数据对象内部数据变了<span class="token punctuation">,</span> 返回<span class="token boolean">false</span>  
		不要直接修改state数据<span class="token punctuation">,</span> 而是要产生新数据
项目中一般使用PureComponent来优化
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr>
<p><strong>render props</strong></p>
<p>向组件内部动态传入带内容的结构(标签)</p>
<p>类似Vue的slot插槽</p>
<p><strong>children props</strong></p>
<pre><code>&lt;A&gt;
  &lt;B&gt;xxxx&lt;/B&gt;
&lt;/A&gt;
{this.props.children}
问题: 如果B组件需要A组件内的数据, ==&gt; 做不到 
</code></pre>
<p><strong>render props</strong></p>
<pre><code>&lt;A render={(data) =&gt; &lt;C data={data}&gt;&lt;/C&gt;}&gt;&lt;/A&gt;
A组件: {this.props.render(内部state数据)}
C组件: 读取A组件传入的数据显示 {this.props.data} 
</code></pre>
<hr>
<p><strong>错误边界</strong></p>
<p>只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误</p>
<p>使用方式：</p>
<p>getDerivedStateFromError配合componentDidCatch</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 生命周期函数，一旦后台组件报错，就会触发</span>
<span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 在render之前触发</span>
    <span class="token comment">// 返回新的state</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        hasError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 统计页面的错误。发送请求发送到后台去</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr>
<p><strong>组件通信总结</strong></p>
<p>组件间的关系：</p>
<ul>
<li>父子组件</li>
<li>兄弟组件（非嵌套组件）</li>
<li>祖孙组件（跨级组件）</li>
</ul>
<p>几种通信方式：</p>
<pre><code>	1.props：
		(1).children props
		(2).render props
	2.消息订阅-发布：
		pubs-sub、event等等
	3.集中式管理：
		redux、dva等等
	4.conText:
		生产者-消费者模式
</code></pre>
<p>比较好的搭配方式：</p>
<pre><code>	父子组件：props
	兄弟组件：消息订阅-发布、集中式管理
	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
</code></pre>
</template>
