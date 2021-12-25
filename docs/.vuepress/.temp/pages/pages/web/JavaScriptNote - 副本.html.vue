<template><h1 id="javascriptnote" tabindex="-1"><a class="header-anchor" href="#javascriptnote" aria-hidden="true">#</a> JavaScriptNote</h1>
<h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> BASE</h2>
<h3 id="string字符串" tabindex="-1"><a class="header-anchor" href="#string字符串" aria-hidden="true">#</a> String字符串</h3>
<p>for字符串遍历：<code>for..of</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">'Hello'</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>
<p><code>concat()</code>：将一个或多个字符串拼接起来</p>
<p><code>trim()</code>：删除前置和后缀空格</p>
<p><code>match()</code>：字符串正则表达式匹配</p>
<p><code>search()</code>：返回第一个匹配项的索引</p>
<p><code>parseInt()</code>：字符串转整数</p>
<p><code>parseFloat()</code>：字符串转浮点数</p>
<hr>
<ul>
<li>
<p><code>charAt(num)</code>：返回UTF-16编码的第一个字节，不能识别大于0xFFFF的字符</p>
</li>
<li>
<p><code>charAt(num)</code>：返回给定位置的字符，能识别大于0xFFFF的字符（意思是能识别中文）</p>
</li>
<li>
<p><code>includes(string)</code> ：返回布尔值，表示是否找到了参数字符串 。</p>
</li>
<li>
<p><code>startsWith(string)</code>： 返回布尔值 ， 表示参数字符串是否在源字符串的头部 。</p>
</li>
<li>
<p><code>endsWith(string)</code>：返回布尔值， 表示参数字符串是否在源字符串的尾部 。</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">'Hello world!'</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span>includes （<span class="token string">'。'</span>） <span class="token comment">// false</span>
s<span class="token punctuation">.</span><span class="token function">startsWith</span> <span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">endsWith</span> <span class="token punctuation">(</span><span class="token string">'!'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">/*
endsWith，带参数是前n个,其他2个是从n开始到结束
*/</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">'Hello world!'</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">includes</span> <span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
s<span class="token punctuation">.</span><span class="token function">startsWith</span> <span class="token punctuation">(</span> <span class="token string">'world'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
s<span class="token punctuation">.</span><span class="token function">endsWith</span> <span class="token punctuation">(</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr>
<p>返回重复n次的新字符串：<code>reqeat()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 		<span class="token comment">// "xxx"</span>
<span class="token string">'na'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2.9</span><span class="token punctuation">)</span> 	<span class="token comment">// "nana"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<p>字符串自动补齐：<code>padStart()、padEnd()</code></p>
<p>如果发现字符串不够指定长度，可以用这个自动补全。</p>
<p>如果不用第二个参数，就会用<strong>空格</strong>补全。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span>	<span class="token comment">// 'ababx'</span>
<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span>	<span class="token comment">// 'abax'</span>

<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span>	<span class="token comment">// 'xabab'</span>
<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span>	<span class="token comment">// 'xaba'</span>

<span class="token string">'12'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM- DD'</span><span class="token punctuation">)</span> <span class="token comment">// 'YYYY-MM-12'</span>
<span class="token string">'09-12'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM- DD'</span><span class="token punctuation">)</span> <span class="token comment">// 'YYYY-09-12'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr>
<h4 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h4>
<p>模板字符串：`.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单引用</span>
<span class="token keyword">function</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">User：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// 进阶引用</span>
<span class="token keyword">const</span> <span class="token function-variable function">tmpl</span> <span class="token operator">=</span> <span class="token parameter">addrs</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
&lt;table>
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addrs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">addr</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;tr>&lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addr<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>&lt;/tr>
    &lt;tr>&lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addr<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>&lt;/tr>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
&lt;/table>
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>first<span class="token operator">:</span> <span class="token string">'&lt;Jane>'</span><span class="token punctuation">,</span> last<span class="token operator">:</span> <span class="token string">'Bond'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>first<span class="token operator">:</span> <span class="token string">'Lars'</span><span class="token punctuation">,</span> last<span class="token operator">:</span> <span class="token string">'&lt;Croft>'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">tmpl</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>标签模板</strong></p>
<p>其实不是模板，是函数调用的一种特殊形式，标签是指函数，模板是指他的参数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token operator">=</span> alert <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">123</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>
<h3 id="array数组" tabindex="-1"><a class="header-anchor" href="#array数组" aria-hidden="true">#</a> Array数组</h3>
<p>1）数组简单的操作方式</p>
<ul>
<li>
<p>栈</p>
<ul>
<li>push、pop（删除最后一个元素）</li>
</ul>
</li>
<li>
<p>队列</p>
<ul>
<li>push、shift（删除第一个元素）</li>
<li>unshift(newelementX)，向数组添加的第一个元素。</li>
</ul>
</li>
<li>
<p>重排序</p>
<ul>
<li>reverse()：反转数组</li>
<li>sort()：升序</li>
</ul>
</li>
</ul>
<hr>
<p>2）数组的API方法</p>
<ul>
<li>
<p>操作方法</p>
<ul>
<li><code>array1.concat(array2)</code>：在当前数组后面追加新数组
<ul>
<li>可用扩展运算符解决<code>[...arr1, ...arr2, ...arr3]</code></li>
</ul>
</li>
<li><code>slice(numStart,numEnd)</code>：返回开始到结束的所有项</li>
</ul>
</li>
<li>
<p>位置方法</p>
<ul>
<li><code>indexOf()</code>：返回索引</li>
<li><code>lasIndexOf()</code>：从队尾开始找</li>
</ul>
</li>
<li>
<p>迭代方法</p>
<ul>
<li><code>every()</code>：与，所有返回值为<strong>true</strong>时返回<strong>true</strong></li>
<li><code>some()</code>：或，任一项返回<strong>true</strong>时返回<strong>true</strong></li>
<li><code>filter()</code>：返回<strong>true的项</strong>组成的数组</li>
<li><code>map()</code>：返回函数<strong>调用结果</strong>组成的数组</li>
<li><code>forEach()</code>：没有返回值</li>
<li>这里除了<code>forEach()</code>，其他都有<code>return</code></li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p><code>for-in</code>：返回键名（数字）</p>
</li>
<li>
<p><code>for-of</code>：返回键值（值）</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'test1'</span><span class="token punctuation">,</span> <span class="token string">'test2'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">in</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token comment">// test1</span>
<span class="token comment">// test2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<hr>
<ul>
<li>
<p>缩小方法</p>
<ul>
<li><code>reduce()</code>：迭代数组所有项，从头开始</li>
<li><code>reduceRight()</code>：迭代数组所有项，从尾开始</li>
<li>四个参数：前一个值、当前值、项、索引</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">reduc</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> prev <span class="token operator">+</span> cur
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 15</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<p><code>inclides()</code></p>
<p>返回一个布尔值，表示某个数组内是否包含给定值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>	<span class="token comment">//true</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>	<span class="token comment">//true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第二参数是从某个地方开始，indexOf有2个缺点:</p>
<ul>
<li>第一点不够语义化，其含义是找到参数值第一个出现的位置，所以要判断是否不等于-1，不够直观。</li>
<li>第二点由于内部使用===判断，会导致NaN的误判。</li>
</ul>
<hr>
<p><code>find()</code></p>
<p>找出第一个符合条件的数组对象</p>
<ul>
<li>找到返回：true</li>
<li>没有找到：undefined</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=></span> n<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// -5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<p><code>findIndex()</code></p>
<p>便利数组，返回true/false</p>
<ul>
<li>第一个参数，value，当前值</li>
<li>第二个参数，index，当前位置</li>
<li>第三个参数，arr，原数组</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> value <span class="token operator">></span> <span class="token number">9</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 10</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>
<p><code>fill()</code></p>
<p>给定值填充一个数组，一般用来给空数据初始化，接受第二个和第三个参数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment">// [8,8,8]</span>
<span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// ['a', 7, 'c']</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>
<p><code>copyWithin()</code></p>
<p>将数组内部指定的成员复制到其他地方，然后返回当前数组。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>target，必选，从该位置开始替换数据</li>
<li>start，可选，从当前位置开始读取数据，默认0，负数就显示倒数</li>
<li>end，可选，到该位置<strong>前</strong>停止读取数据，负数就显示倒数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 将3号位复制到0号位</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// [4, 2, 3, 4, 5]</span>

<span class="token comment">// -2相当于3号位，-1相当于4号位</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// [4, 2, 3, 4, 5]</span>

<span class="token comment">// 将3号位复制到0号位</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>length<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// {0: 1, 3: 1, length: 5}</span>

<span class="token comment">// 将2号位到数组结束，复制到0号位</span>
<span class="token keyword">let</span> i32a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int32Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
i32a<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Int32Array [3, 4, 5, 4, 5]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr>
<p><code>keys()、values()、entries()</code></p>
<p>他们三个的区别是：</p>
<ul>
<li>keys、对键名的变量</li>
<li>values()、对键值的遍历</li>
<li>entries()、对键值对的遍历</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// keys()</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//	0</span>
<span class="token comment">//	1</span>

<span class="token comment">// values()</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> elem <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//	a</span>
<span class="token comment">//	b</span>

<span class="token comment">// entries()</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> elem<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//	0 "a"</span>
<span class="token comment">//	1 "b"</span>

<span class="token comment">// 手动使用遍历器对象的next方法遍历</span>
<span class="token keyword">let</span> letter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> entries <span class="token operator">=</span> letter<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>   <span class="token comment">// [0,"a"]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>   <span class="token comment">// [1,"b"]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr>
<h4 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h4>
<p><code>...</code></p>
<p>可以将一个数组变成一个参数序列。可以将他理解为，可以<strong>返回多个值</strong>，<strong>返回后续值</strong>。</p>
<font color=red>要记住，扩展运算符用于数组赋值，只能放在参数的最后一位，不然会报错。</font>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>数组合并</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">// ES5</span>
arrl<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">)</span>

<span class="token comment">// ES6</span>
<span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">,</span> <span class="token operator">...</span>arr3<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>与解构赋值结合</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ES5</span>
a <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rest <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// ES6</span>
<span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> list

<span class="token comment">// 举一些例子</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>frist<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
frist	<span class="token comment">// 1</span>
rest	<span class="token comment">// [2, 3, 4]</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>frist<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
frist	<span class="token comment">// undefined</span>
rest	<span class="token comment">// []</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">'hello'</span><span class="token punctuation">]</span>
<span class="token comment">// ［ ” h ” ，” e ”，” l ” ， ” l ”，” o ” ］</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>实现Iterator接口对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'0'</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span>
  <span class="token string">'1'</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span>
  <span class="token string">'2'</span><span class="token operator">:</span> <span class="token string">'c'</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arrayLike<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<p>将两类对象转为真正的数组：<code>Array.from()</code></p>
<p>类型数组的对象（array-like object）和可遍历（iterable）对象（包括ES6新增的Set和Map）</p>
<p>常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。而都可以使用<code>Array.from</code>转为真正的数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'0'</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span>
  <span class="token string">'1'</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span>
  <span class="token string">'2'</span><span class="token operator">:</span> <span class="token string">'c'</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span>

<span class="token comment">// NodeList对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"NodeList对象"</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> ps <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"将P元素转为数组："</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"获取数组第一个元素："</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 只有变成了数组才能用forEach</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>还可以接受第二参数，类似数组的map方法，对每个元素进行处理然后放入返回的数组中。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">,</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>

Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>
<span class="token comment">// [1, 4, 9]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<p>将一组值转变为数组，不同于上面的对象转数组，这里是将一组数。：<code>Array.of()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>	<span class="token comment">// [3,11,8]</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// []</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>	<span class="token comment">// [,,,]</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>	<span class="token comment">// [3,11,8]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>
<h3 id="object对象" tabindex="-1"><a class="header-anchor" href="#object对象" aria-hidden="true">#</a> Object对象</h3>
<p>对象扩展</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span>
<span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span>
baz <span class="token comment">// {foo: "bar"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>
<p>属性值=属性名所代表的的变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> x<span class="token punctuation">,</span> y<span class="token operator">:</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<p><strong>对象字面量</strong></p>
<p>表达式作为对象的属性名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> propKey <span class="token operator">=</span> <span class="token string">'foo'</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>propKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'a'</span> <span class="token operator">+</span> <span class="token string">'bc'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>定义方法名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token string">'h'</span> <span class="token operator">+</span> <span class="token string">'ello'</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hi'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>注意！</strong></p>
<p><strong>属性名表达式如果是一个对象，那么默认情况下会自动将对象转为字符串[object Object]</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keyA <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> keyB <span class="token operator">=</span> <span class="token punctuation">{</span>b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>keyA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueA'</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>keyB<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueB'</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>你会神奇的发现，打印出来只有keyB。这是因为keyA和keyB都是[object Object]，所以keyB将keyA覆盖了，最后myObject就剩下一个[object Object]属性了</p>
<hr>
<h4 id="属性的可枚举性与遍历" tabindex="-1"><a class="header-anchor" href="#属性的可枚举性与遍历" aria-hidden="true">#</a> 属性的可枚举性与遍历</h4>
<p>对象每一个属性都有一个描述对象（Description），用以控制该属性的行为。</p>
<p>可以通过：<code>Object.getOwnPropertyDescriptor(obj, 'foo')</code>获取该属性的描述对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span>
<span class="token comment">/*
value: 123,
writable: true,
enumerable: ture,
configurable: ture
/*
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在这里面，描述对象的<code>enumerable</code>称之为：“可枚举性”。如果为false，那么就表示某些操作可以忽略当前属性。</p>
<p><strong>属性的遍历</strong></p>
<p><code>for...in</code>与<code>for...of</code></p>
<p>循环遍历自身的和继承的可枚举属性（不含Symbol属性）</p>
<p><code>for-of</code>只能遍历数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>sex<span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">in</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token string">':'</span><span class="token operator">+</span>user<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">//"name:张三""age:10""sex:男"</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token string">':'</span><span class="token operator">+</span>user<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token comment">//"name:张三""age:10""sex:男"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>Object.keys(obj)</code></p>
<p>返回一个数组，成员是参数对象自身的所有可遍历（enumerable）属性的<strong>键名</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> baz<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">//	["foo", "baz"]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Object.values</code></p>
<p>返回一个数组，成员是参数对象自身的所有可遍历（enumerable）属性的<strong>键值</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1,2,3]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Object.entries</code></p>
<p>返回一个数组，成员是参数对象自身的所有可遍历（enumerable）属性的<strong>键值对</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> baz<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	[ ["foo", "bar"], ["baz", 42] ]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>keys<span class="token punctuation">,</span> values<span class="token punctuation">,</span> entries<span class="token punctuation">}</span> <span class="token operator">=</span> Object
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token comment">// keys->键名</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> <span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 'a', 'b', 'c'</span>
<span class="token punctuation">}</span>
<span class="token comment">// values->键值</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> <span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 1, 2, 3</span>
<span class="token punctuation">}</span>
<span class="token comment">// entries->键值对</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">// ["a", 1]</span>
  <span class="token comment">// ["b", 2]</span>
  <span class="token comment">// ["c", 3]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><hr>
<ul>
<li><code>JSON.stringify(value [, replacer] [, space)</code>，将json对象转换成json字符串。</li>
<li><code>JSON.parse(test)</code>：将json字符串转换成json对象。</li>
</ul>
<hr>
<ul>
<li><code>Object.getOwnPropertyNames(obj)</code>
<ul>
<li>返回一个数组，包含自身所有属性（不含Symbol属性，包括不可枚举属性）</li>
</ul>
</li>
<li><code>Object.getOwnPropertySymbols(obj)</code>
<ul>
<li>返回一个数组，包含对象自身所有Symbol属性</li>
</ul>
</li>
<li><code>Reflect.ownKeys(obj)</code>
<ul>
<li>返回一个数组，包含自身所有属性，不管是什么，不管是否可以枚举，全部。</li>
</ul>
</li>
</ul>
<p>以上属性均会忽略<code>enumerable</code>为false的属性，只复制对象自身可枚举属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'length'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enumerable
<span class="token comment">// fasle</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><code>Object.fromEntries</code>
<ul>
<li>将二维数组转换为对象</li>
</ul>
</li>
<li><code>Object.Entries</code>
<ul>
<li>将对象转换为二维数组</li>
</ul>
</li>
<li><code>trimStart</code>和<code>trimEnd</code>
<ul>
<li>清除字符串，左侧或右侧空白</li>
</ul>
</li>
</ul>
<hr>
<p><code>Object.is()</code></p>
<p>比较2个值是否严格相等，与<code>===</code>行为基本一致</p>
<p>与<code>===</code>有2点不相同</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span>	<span class="token comment">// true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span>	<span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span>	<span class="token comment">//false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span>	<span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<p><code>Object.assign()</code></p>
<p>将源对象（source）的所有可枚举属性复制到目标对象（target）。</p>
<p>第一个参数是目标对象，后面的参数都是源对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span>b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span>c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span>
target	<span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果后续有多个同名属性，那么后面会<strong>覆盖前一个</strong>。</p>
<p>而且如果第一个参数不是对象，那么会转成对象，</p>
<p>如果是非对象参数出现在→源对象的位置，那么会将该参数转为对象，如果无法转变就会跳过，这就意味着<code>undefined</code>和<code>null</code>不在首参数就不会报错。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>	<span class="token comment">// 报错</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>	<span class="token comment">// 报错</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>	<span class="token operator">===</span> obj	<span class="token comment">//ture</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>
<h3 id="function函数" tabindex="-1"><a class="header-anchor" href="#function函数" aria-hidden="true">#</a> Function函数</h3>
<p><strong>函数的Length属性</strong></p>
<p>如果默认值不是<strong>尾参数</strong>，那么也不会计入后面的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<p><strong>rest</strong>：<code>...变量名</code></p>
<p>用来获取函数的多余参数，后续参数。</p>
<p>注意：rest参数后面不能有其他参数，只能作为<strong>最后一个参数</strong>，否则会报错</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<p><strong>严格模式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token string">'use strict'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果函数参数使用了：默认值、解构赋值、扩展运算符，那么就不能设置严格模式，不然会报错。</p>
<p>原理：函数执行时候是先执行<code>参数</code>在执行<code>函数体</code>，这样就只有<code>函数体</code>才知道是否以严格模式执行，所以这样就不符合严格模式的。</p>
<p>解决办法：</p>
<ul>
<li>
<p>设置全局模式的严格模式，在外面写<code>'use strict'</code></p>
</li>
<li>
<p>把函数包放在无参数的立即执行函数里面：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> doSomething <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">'use strict'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value <span class="token operator">=</span> <span class="token number">42</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<hr>
<p><strong>name属性</strong>：返回该函数名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// f1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// anonymous</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment">// bound foo</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// bound </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr>
<h4 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h4>
<ul>
<li>无参数： <code>( ) =&gt; { }</code></li>
<li>有参数： <code>( 参数 ) =&gt; { }</code></li>
<li>有返回值：<code>( ) =&gt; 返回值</code></li>
<li>有返回值：<code>( ) =&gt; { return 返回值 }</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=></span> v
<span class="token comment">// 等价于</span>
<span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> v
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">5</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> num1 <span class="token operator">+</span> num2
<span class="token comment">// 等价于</span>
<span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>关于箭头函数和函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fire</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//	windows</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fire2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//	obj</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>this指向</strong>：函数体内的this对象就是<strong>定义时所作的对象</strong>，不是使用时所作的对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 箭头函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'id:'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">21</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">)</span>	<span class="token comment">// id:42</span>

<span class="token comment">// 使用functuon定义</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'id:'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">21</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">)</span>	<span class="token comment">// id:21</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr>
<p><strong>函数绑定</strong></p>
<p>函数绑定是用来取代：call、apply、bind，调用的。</p>
<p>函数绑定运算符是：<code>::</code> ，左边是对象，右边是函数，将左边的对象作为上下文环境(this对象)绑定到右边函数上。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>obj<span class="token operator">:</span><span class="token operator">:</span>foo<span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

obj<span class="token operator">:</span><span class="token operator">:</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
<span class="token comment">//等同于</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果双冒号左边为空，右边是对象的方法，那么就是将该方法绑定到该对象上。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> method <span class="token operator">=</span> obj<span class="token operator">:</span><span class="token operator">:</span>obj<span class="token punctuation">.</span>foo
<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> method <span class="token operator">=</span> <span class="token operator">:</span><span class="token operator">:</span>obj<span class="token punctuation">.</span>foo

<span class="token keyword">let</span> log <span class="token operator">=</span> <span class="token operator">:</span><span class="token operator">:</span>console<span class="token punctuation">.</span>log
<span class="token comment">//等同于</span>
<span class="token keyword">var</span> log <span class="token operator">=</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>console<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<h4 id="尾调用优化" tabindex="-1"><a class="header-anchor" href="#尾调用优化" aria-hidden="true">#</a> 尾调用优化</h4>
<p>什么是尾调用？</p>
<p>在函数的最后一步调用另外一个函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 最后调用例外一个函数</span>
	<span class="token keyword">return</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 尾调用不一定在函数尾部，只要是最后一步调用即可</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">m</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>以下均不是尾调用</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	<span class="token keyword">return</span> y
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>优化</strong></p>
<p>函数调用的时候会形成一个“<code>调用记录</code>”，又称&quot;<code>调用帧</code>&quot;，用来保存调用位置和内部变量等信息。由于尾调用是函数最后一步，所以不用保留调用帧，所以直接用内层函数的调用帧代替外层函数。</p>
<p>看这：由于<code>函数f</code>在调用完<code>函数g</code>以后就结束了，所以就会<code>删除函数f(x)的调用帧</code>，只<code>保留了g(3)的调用帧</code>，这就是<code>尾调用优化</code>。只保留内层函数的调用帧，这样每次执行时<code>调用帧只有一项</code>，大大节省内层。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">2</span>
	<span class="token keyword">return</span> <span class="token function">g</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 等同于</span>
<span class="token function">g</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>看着：：注意！！！只有不用<code>外层函数的内部变量</code>，<code>内部函数的调用帧</code>才会取代<code>外层函数的调用帧</code>。</p>
<p><strong>尾递归</strong></p>
<p>递归这玩意很消耗内层，需要保存成百上千的调用帧，容易发生<code>栈溢出错误</code>。</p>
<p>如果使用尾递归的话，<code>只存在一个调用帧</code>，就不会发生栈溢出错误。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>	<span class="token comment">// 120</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>严格模式</strong></p>
<p>要注意，<code>尾递归调用优化</code>只会在严格模式下调用，因为在正常模式下函数内部有两个变量，可以跟踪函数的调用枝。</p>
<ul>
<li>func.arguments ：返回调用时函数的参数。</li>
<li>func.caller ：返回调用当前函数的那个函数。</li>
</ul>
<p>尾调用优化发生时，函数的调用战会改写，因此上面两个变量就会失真。严格模式禁用这
两个变量，所以尾调用模式仅在严格模式下生效。</p>
<p><strong>尾递归的使用</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tco</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value
    <span class="token keyword">var</span> active <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">var</span> accumulated <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">accumulator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        accumulated<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            active <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>accumulated<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> accumulated<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            active <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token function">tco</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><hr>
<p>立即执行函数：<code>(function(){})()</code></p>
<ul>
<li>
<p><code>call()</code>：两个参数，函数作用域和<strong>参数</strong></p>
</li>
<li>
<p><code>apply()</code>：两个参数，函数作用域和<strong>参数数组</strong></p>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 结果都是一样的，看你需求</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2 <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">applySum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">applySum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">callSum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
</li>
<li>
<p>call的真正用途在这里</p>
<ul>
<li>
<p>当call的this指向<code>对象o</code>的时候，他的<code>this.color</code>就是blue</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"red"</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">"blue"</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">sayColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">sayColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// red</span>
<span class="token function">sayColor</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>	<span class="token comment">// red</span>
<span class="token function">sayColor</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>	<span class="token comment">// red</span>
<span class="token function">sayColor</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>	<span class="token comment">// blue</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>bind()</code>：绑定函数实例</p>
</li>
</ul>
<hr>
<h3 id="symbol唯一值" tabindex="-1"><a class="header-anchor" href="#symbol唯一值" aria-hidden="true">#</a> Symbol唯一值</h3>
<p>1）表示独一无二的值，类似于字符串的数据类型</p>
<p>2）Symbol 的值的唯一，解决命名冲突的问题</p>
<p>3）Symbol 不能与其他数据进行运算</p>
<p>4）Symbol 定义的对象属性不能使用 for in 循环变量，但是可以使用<code>Relect.ownKeys</code>获取对象的所以键名</p>
<p><code>.description</code>：获取描述字符</p>
<ul>
<li>创建Symbol</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> t1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> t2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t1 <span class="token operator">===</span> t2<span class="token punctuation">)</span>	<span class="token comment">// fasle</span>

<span class="token keyword">let</span> t1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> t2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t1 <span class="token operator">===</span> t2<span class="token punctuation">)</span>	<span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>添加属性和方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//声明一个对象</span>
<span class="token keyword">let</span> methods <span class="token operator">=</span> <span class="token punctuation">{</span>
    up<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    down<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
game<span class="token punctuation">[</span>methods<span class="token punctuation">.</span>up<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以改变形状"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> youxi <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">"狼人杀"</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'say'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以发言"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'zibao'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我可以自爆'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>youxi<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr>
<h3 id="set集合" tabindex="-1"><a class="header-anchor" href="#set集合" aria-hidden="true">#</a> set集合</h3>
<p>集合，类似数组，成员值是唯一的，集合了 iterator 接口 可以使用扩展运算符和for of遍历</p>
<ul>
<li>方法：
<ul>
<li>size：返回集合元素个数</li>
<li>add：添加新元素</li>
<li>delete：删除元素</li>
<li>has：检测是否存在元素</li>
<li>clear：清空集合</li>
</ul>
</li>
</ul>
<p>数组去重</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>交集</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 4 5 6</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>并集</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> union <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>union<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<h3 id="map键值对集合" tabindex="-1"><a class="header-anchor" href="#map键值对集合" aria-hidden="true">#</a> Map键值对集合</h3>
<p>类似对象，键值对的集合，集合了 iterator 接口。可以理解为是一个升级版的对象，可以用对象作为key</p>
<ul>
<li>
<p>方法：</p>
<ul>
<li>size：返回集合元素个数</li>
<li>set：添加新元素，返回当前Map</li>
<li>get：获取当前元素的</li>
<li>has：检测是否存在元素</li>
<li>clear：清空集合</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">//声明 Map</span>
    <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//添加元素</span>
    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token string">'尚硅谷'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以改变你!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token punctuation">{</span>
        school <span class="token operator">:</span> <span class="token string">'ATGUIGU'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//size</span>
    <span class="token comment">// console.log(m.size);</span>
    <span class="token comment">//删除</span>
    <span class="token comment">// m.delete('name');</span>
    <span class="token comment">//获取</span>
    <span class="token comment">// console.log(m.get('change'));</span>
    <span class="token comment">// console.log(m.get(key));</span>
    <span class="token comment">//清空</span>
    <span class="token comment">// m.clear();</span>
    <span class="token comment">//遍历</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(m);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><hr>
<h3 id="class类" tabindex="-1"><a class="header-anchor" href="#class类" aria-hidden="true">#</a> Class类</h3>
<p><code>constructor</code>：构造函数</p>
<p><code>extends</code>：继承父类</p>
<p><code>super</code>：调用父类构造方法</p>
<p><code>#</code>：私有属性</p>
<p>类的继承1=&gt;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 手机</span>
<span class="token keyword">function</span> <span class="token function">Phone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Phone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以打电话"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 智能手机</span>
<span class="token keyword">function</span> <span class="token function">SmartPhone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price<span class="token punctuation">,</span> color<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 关键是这里，使用call方法初始化</span>
    <span class="token function">Phone</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> brand<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置子级构造函数的原型</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">;</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> SmartPhone<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>类的继承2=&gt;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    <span class="token comment">//构造方法</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//父类的成员属性</span>
    <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以打电话!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">extends</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
    <span class="token comment">//构造方法</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price<span class="token punctuation">,</span> color<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Phone.call(this, brand, price)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"拍照"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我可以进行视频通话'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2>
<h3 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素" aria-hidden="true">#</a> 获取元素</h3>
<p>class属性：<code>.</code></p>
<p>id属性：<code>#</code></p>
<p><code>getElementById</code>：通过ID获取，<strong>返回对象</strong>，可直接操作。</p>
<p><code>getElementsByName</code>：通过name获取，<strong>返回对象数组</strong>，需遍历。</p>
<p><code>getElementsByTagName</code>：通过标签名获取，<strong>返回对象数组</strong>，需遍历。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>getElementsByClassName</code>：通过类名访问，<strong>返回对象数组</strong>，需遍历，如要访问多个类名需加空格。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span> <span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"sale"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span> <span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"important sale"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>遍历对象数组建议采用：for循环</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>t<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>querySelector</code>：匹配CSS选择器的第一个元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name="username"]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 获取name属性为username的元素</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"a[target]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 获取文档中有 "target" 属性的第一个 &lt;a> 元素：</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<h3 id="获取-修改属性" tabindex="-1"><a class="header-anchor" href="#获取-修改属性" aria-hidden="true">#</a> 获取&amp;修改属性</h3>
<p><code>attribute</code>：属性名。</p>
<p><code>getAttribute(attribute)</code>：获取属性值</p>
<p><code>setAttribute(attribute, value)</code>：修改属性值</p>
<p><code>parentNode</code>：获取父元素</p>
<p><code>element.childNodes</code>：获取该元素的所有子元素数组，返回节点集合<code>NodeList</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>childNodes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>node.nodeValue</code>：设置节点值</p>
<p>设置节点值，必须是节点！</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> c<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"BUTTON"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> x<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
x<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>c<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>firstChild与lastChild</code>：查看第一个和最后一个节点孩子</p>
<p><code>element.style.属性名</code>：获取样式</p>
<p><code>getComputedStyle(element,null)</code>：获取当前生效的属性</p>
<p>这是一个window方法，有2个参数</p>
<ul>
<li>第一个，需要获取样式的元素</li>
<li>第二个，可以传递一个伪元素</li>
</ul>
<p><code>clientWidth</code>&amp;<code>clientHeight</code>：获取可见宽度和高度，不带px</p>
<p><code>offsetWidth</code>&amp;<code>offsetHeight</code>：获取元素的整个的宽度和高度，包括内容区、内边距和边框</p>
<p><code>scrollWidth</code>&amp;<code>scrollHeight</code>：获取元素整个滚动区域的宽度和高度</p>
<p><code>scrollLeft</code>&amp;<code>scrollTop</code>：可以获取水平和垂直滚动条滚动的距离</p>
<p>如果<code>scrollHeight</code>减<code>scrollTop</code>等于<code>clientHeight</code>就表示滚动条到底了</p>
<p>如果想做拖拽效果，需要加上滚动条的宽度和高度</p>
<p><code>onscroll</code>：滚动事件</p>
<p><code>onmousemove</code>：事件会在鼠标移动时触发</p>
<p><code>onmousedown</code>：鼠标按下</p>
<p><code>onmouseup</code>：鼠标松开</p>
<p><code>clientX</code>&amp;<code>clientY</code>：获取鼠标指针的水平和垂直坐标</p>
<p><code>pageX</code>&amp;<code>pageY</code>：获取鼠标相对于当前页面的坐标</p>
<p><code>onkeydown</code>：键盘按下事件</p>
<p><code>event.keyCode</code>：键盘按键</p>
<p><code>event.wheelDelta</code>：滚轮长度</p>
<p><code>event.cancelBubble = true;</code>：取消冒泡（事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发）</p>
<p>事件的委派：指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素从而通过祖先元素的响应函数来处理事件。</p>
<p><code>对象.addEventListener('事件',fucntion())</code>：为一个元素的相同事件同时绑定多个响应函数，如果使用<code>对象.事件</code>的方式绑定那么后者会覆盖前者。</p>
<hr>
<h3 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h3>
<p>使用<code>window</code>对象的<code>open()</code>方法来创建<strong>新的浏览器窗口</strong></p>
<font size=6><code>window.open(url, name, features)</code></font>
<ul>
<li>url，网页URL的地址</li>
<li>name，新窗口的名字，可以通过该名字与新窗口进行通信</li>
<li>features，以逗号分隔的字符串，包含新窗口的各种属性：尺寸、工具条、菜单条、初始显示位置，等。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">popUp</span><span class="token punctuation">(</span><span class="token string">'https://www.baidu.com/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>使用onclick：打开新窗口并跳转到百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript/popUp.javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">popUp</span><span class="token punctuation">(</span><span class="token parameter">winURL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>winURL<span class="token punctuation">,</span> <span class="token string">"popup"</span><span class="token punctuation">,</span> <span class="token string">"window = 320, height = 480"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果有些用户禁用的javascript那么这种办法就不太妥当，所以我们可以用另外一个办法</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">popUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'href'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>使用onclick：打开新窗口并跳转到百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">popUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>使用onclick：打开新窗口并跳转到百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>javacript:</code>伪协议</p>
<p><strong>伪协议</strong>：让我们通过连接调用javascript函数</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:popUp(<span class="token punctuation">'</span>https://www.baidu.com/<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>使用伪协议:打开新窗口并跳转到百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>confirm</code>：带选择提示框</p>
<p><code>prompt</code>：带输入框的提示框</p>
<p><code>Navigator</code>：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器</p>
<p><code>Location</code>：代表当前浏览器的地址栏信息</p>
<p><code>History</code>：代表浏览器的历史记录</p>
<p><code>Screen</code>：用户的屏幕的信息</p>
<p><code>setInterval(回调函数, 时间)</code>：定时调用，一直调用。</p>
<p><code>setTimeout</code>：不会立刻调用，只会调用一次。</p>
<p><code>clearInterval()</code>：关闭定时器</p>
<hr>
<h3 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h3>
<p><code>document.write()</code>：打印文本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;p>This is inserted&lt;/p>"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>innerHTML</code>：和write差不多，下面输出结果是相同的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testdiv<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
testdiv<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"&lt;p>This is &lt;em>emem&lt;/em> content.&lt;/p>"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>document.createElement(nodeName)</code>：<strong>创建元素</strong></p>
<p><code>parent.appendChild(child)</code>：插入节点树</p>
<p><code>document.createTextNode(text)</code>：给节点添加文本数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一步：创建节点</span>
<span class="token keyword">let</span> child <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span>
<span class="token comment">// 第二步：获取节点树</span>
<span class="token keyword">let</span> parent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testdiv"</span><span class="token punctuation">)</span>
<span class="token comment">// 第三步：创建文本数据</span>
<span class="token keyword">let</span> txt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">"Hello world"</span><span class="token punctuation">)</span>
<span class="token comment">// 第四步：给节点追加文本数据</span>
child<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
<span class="token comment">// 第五步：将节点插入</span>
parent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>parentElement.insertBefore(newElement, targetElement)</code>：在一个现有元素前插入一个新元素</p>
<ul>
<li>父元素：目标元素的父元素（<code>parentElement</code>）</li>
<li>新元素：你想插入的元素（<code>newElement</code>）</li>
<li>目标元素：将新元素插入到哪个元素（<code>targetElement</code>）前</li>
</ul>
<h2 id="pro" tabindex="-1"><a class="header-anchor" href="#pro" aria-hidden="true">#</a> Pro</h2>
<h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3>
<p>采用字面量创建：<code>var 变量 = /正则表达式/匹配模式</code></p>
<p><code>RegExp</code>该类型支持正则表达式，可以创建一个正则表达式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'xyz'</span><span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>g：表示匹配所有字符串，应用于所有字符串，不会在匹配到第一个时结束</p>
</li>
<li>
<p>i：不区分大小写</p>
</li>
<li>
<p>m：多行</p>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 匹配at</span>
<span class="token keyword">var</span> pattern1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token comment">// 匹配第一个是bat或act，不区分大小写</span>
<span class="token keyword">var</span> pattern2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[bc]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
<span class="token comment">// at结尾的三个字符，不区分大小写</span>
<span class="token keyword">var</span> pattern3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
</li>
<li>
<p>元字符必须转义：<code>{}[]\^$|()?*+.</code></p>
</li>
<li>
<p>转义字符：<code>\</code></p>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 匹配[bc]at，不区分大小写</span>
<span class="token keyword">var</span> pattern4 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\[bc\]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</li>
<li>
<p>上面是通过<strong>字面量形式</strong>定义的正则表达式，而可以通过RegExp构造函数来创建</p>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 下面两种方法是等价的</span>
<span class="token comment">// 匹配[bc]at，不区分大小写</span>
<span class="token keyword">var</span> pattern4 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\[bc\]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
<span class="token keyword">var</span> pattern6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"\\[bc\\]at"</span><span class="token punctuation">,</span> <span class="token string">"i"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</li>
</ul>
<p>正则表达式规则：</p>
<blockquote>
<ol>
<li><code>|</code>：或的意思，例如检查字符串是否存在a或b，<code>/a|b/</code></li>
<li><code>[]</code>：里的内容也是或的关系，原子表</li>
</ol>
<p><code>[ab] == a|b</code>；<code>[a-z]</code>：任意小写字母；<code>[A-Z]</code>任意大写字母；<code>[A-z]</code>任意字母；<code>[0-9]</code> 任意数字</p>
<ol start="3">
<li><code>[^]</code>：除了，例如检查字符串是否存在<strong>除了</strong>什么什么以外的东西</li>
<li><code>()</code>：优先级</li>
<li><code>{n}</code>：出现n次；<code>{m,n}</code>：出现m到n次；<code>m,</code>：出现m次以上</li>
<li><code>+</code>：至少一个，等价于<code>{1,}</code></li>
<li><code>*</code>：0个或多个，等价于<code>{0,}</code></li>
<li><code>?</code>：0个或1个，等价于<code>{0,1}</code>，<code>https?</code>表示s可能会不存在-&gt;http</li>
<li><code>^</code>：匹配开头，例如检查一个字符串中是否以a开头<code>/^a/</code></li>
<li><code>$</code>：匹配结尾，边界符</li>
<li><code>.</code>：任意字符</li>
<li><code>\</code>：转义，例如如果想表示点号则需要<code>\.</code></li>
<li><code>?:</code>：表示不保留，<code>(?:com|cn)</code>意为我匹配这段但是不保留</li>
</ol>
<p><code>\w</code>：任意字母、数字、_ <code>[A-z0-9_]</code></p>
<p><code>\W</code>：除了字母、数字、_ <code>[^A-z0-9_]</code></p>
<p><code>\d</code>：任意的数字<code> [0-9]</code></p>
<p><code>\D</code>：除了数字<code> [^0-9]</code></p>
<p><code>\s</code>：空格</p>
<p><code>\S</code>：除了空格</p>
<p><code>\b</code>：单词边界=&gt;单词或非单词之间</p>
<p><code>\B</code>：除了单词边界</p>
<p>例：创建一个正则表达式检查一个字符串中是否含有单词child=&gt;<code>/\bchild\b/</code></p>
<p>例：去掉开头和结尾空格=&gt;<code>/^\s*|\s*$/g</code></p>
<p>匹配任意字符：<code>(.*?)</code></p>
</blockquote>
<ul>
<li>采用字面量形式是共享同一个RegExp实例，如果使用构造函数创建则每一个RegExp实例都是一个新的实例。
<ul>
<li><code>string.split()</code>：根据任意字母来将字符串拆分</li>
<li><code>string.search()</code>：搜索字符串中是否含有指定内容，只会搜索一个，返回位置。</li>
<li><code>string.match()</code>：查询数组</li>
<li><code>string.replace()</code>：将字符串中指定内容替换为新的内容，两个参数，替换内容和新内容。</li>
<li><strong>--------------以下都是正则表达式的方法</strong></li>
<li><code>test()</code>：返回true和false</li>
<li><code>exec()</code>：返回包含第一个匹配项信息的<strong>数组</strong>，没有匹配项返回null。有两个格外属性：index（匹配项在字符串的位置）和input（字符串）</li>
</ul>
</li>
<li>下面的就有点特殊，他们都是RegExp的函数。你需要先运行1+个的正则表达式匹配方法才能使用下面函数。
<ul>
<li><code>lastMatch</code>：最近一次匹配项</li>
<li><code>lastParen</code>：最近一次匹配的捕获组</li>
<li><code>leftContext</code>：字符串中lastMatch之前的文本</li>
<li><code>multiline</code>：布尔值、是否是多行模式</li>
<li><code>rightContext</code>：字符串中lastMatch之后的文本</li>
</ul>
</li>
<li>小总结
<ul>
<li>test检查指定字符串是否存在</li>
<li>exec和match都可以获取值，区别一个是正则表达式的方法，一个是字符串的方法</li>
</ul>
</li>
</ul>
<p>https://codeplayer.vip/p/j7sl5</p>
<blockquote>
<p><code>/&lt;(h[1-6])&gt;&lt;\/\1&gt;/</code>：第一个原子组<code>()</code>表示为<code>\1</code></p>
<p>如果你要获取某个地方的东西，那就给他个<code>()</code>，例如</p>
<p><code>/&lt;h[1-6]&gt;(\w+)&lt;\/h[1-6]&gt;/</code>：这样那么就可以获取h1标志里面的内容</p>
</blockquote>
<blockquote>
<p>关于原子组的小知识，可以通过<code>$2</code>获取到第一个原子组(<code>(\w+)</code>)的信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'&lt;h1>123&lt;/h1>'</span>
<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(h[1-6])>(\w+)&lt;\/h1></span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token string">'$2'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 123</span>
a<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">// p0 = &lt;h1></span>
	<span class="token comment">// p1 = 123</span>
	<span class="token comment">// p2 = &lt;/h1></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></blockquote>
<blockquote>
<p>有个很关键的东西是：<code>?:</code></p>
<p>这样操作，那么我提取出来的地址就只有bilibili，就不会包含后面的com</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'https://www.bilibili.cn/'</span>
<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https:\/\/\w+.(\w+).(?:com|cn)+</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<blockquote>
<p>密码验证，大小写字母，5到10位</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token parameter">e</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z0-9]{5,10}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> state <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state <span class="token operator">?</span> <span class="token string">"yes"</span> <span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote>
<blockquote>
<p>禁止贪婪：<code>?</code></p>
<p>贪婪匹配意思是：一个个的去匹配</p>
<p>禁止贪婪就是直接匹配一个部分。</p>
<p>下面中，我想匹配100这个数字，如果是贪婪匹配结果是0，禁止贪婪就是100。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"This is 100 Numbers"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*(\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*?(\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 100</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote>
<blockquote>
<p><code>$&amp;</code>：代表自己</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>main<span class="token punctuation">.</span>innerHTML<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">替换</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;a href="#">已被$&amp;&lt;/a></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token comment">// 页面会显示为：已被替换</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<p>命名捕获：<code>?&lt;关键字&gt;</code>，给组起别名，然后使用<code>$&lt;关键字&gt;</code>捕获</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;h1>(?&lt;text>.*)&lt;\/h2></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'&lt;h1>baidu&lt;/h1>'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">"&lt;h2>$&lt;text>&lt;/h2>"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>tips：</p>
<p>断言()，是相对于后面</p>
<p>例如<code>(?&lt;!oss)\.</code>，意思是<code>.</code>点好的前面不能是oss。</p>
</blockquote>
<p>断言匹配：<code>(?=关键字)</code>，如果他后面是<strong>关键字</strong>的话。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 正向断言</span>
<span class="token comment">// 如果数字后面是关键 **啦** 的话，那么提取这段数字</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'javascript5211314你知道么555啦啦啦'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+(?=啦)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 555</span>
<span class="token comment">// 反向断言</span>
<span class="token comment">// 前面第一个字是关键字 "么" ，那么返回这段数字</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=么)\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>断言匹配前面：<code>(?&lt;=关键字)</code>，前面是<strong>关键字</strong></p>
<p>断言匹配：<code>(?!关键字)</code>，后面不是<strong>关键字</strong></p>
<blockquote>
<p>限制用户关键字</p>
<p>意思是从开始到后面都不能出现关键字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!.*关键字.*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<p>断言匹配前面：<code>(?&lt;!关键字)</code>，前面不是<strong>关键字</strong></p>
<p>dotALL模式：</p>
<ul>
<li>
<p>元字符：<code>.</code> ，匹配除了换行符以外的任意单个字符</p>
</li>
<li>
<p>模式修正符：<code>s</code>，加了模式修正符，那么 <code>.</code>可以匹配任意字符</p>
</li>
<li>
<p>全局匹配：<code>g</code>，全局匹配</p>
<ul>
<li>\S：是换行符，<code>.*?</code>：通配符/元字符</li>
</ul>
</li>
<li>
<p><code>matchAll</code>：获取正则表达式批量匹配的结果，返回结果是一个可迭代对象，需要遍历或扩展运算符</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
&lt;ul>
    &lt;li>
        &lt;a>肖生克的救赎&lt;/a>
        &lt;p>上映日期: 1994-09-10&lt;/p>
    &lt;/li>
    &lt;li>
        &lt;a>阿甘正传&lt;/a>
        &lt;p>上映日期: 1994-07-06&lt;/p>
    &lt;/li>
&lt;/ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li>\s+&lt;a>(.*?)&lt;\/a>\s+&lt;p>(.*?)&lt;\/p></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li>.*?&lt;a>(.*?)&lt;\/a>.*?&lt;p>(.*?)&lt;\/p></span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result<span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token operator">:</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> time<span class="token operator">:</span> result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取匹配结果</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6+</h2>
<p><code>let</code>：声明遍历，与var不同，他不存在<strong>变量提升</strong>，不影响作用域链。</p>
<p><code>const</code>：定义常量，值不能修改的量，常量一般使用大写，常量所指向的地址没有发生改变，就不会报错。</p>
<p>数组解构赋值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> my <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'test1'</span><span class="token punctuation">,</span><span class="token string">'test2'</span><span class="token punctuation">,</span><span class="token string">'test3'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>t1<span class="token punctuation">]</span> <span class="token operator">=</span> my
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>	<span class="token comment">// test1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>对象解构赋值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> my <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">'我的名字'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token string">'18'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">=</span> my<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>	<span class="token comment">// 我的名字</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>参数默认值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>host<span class="token operator">=</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span>password<span class="token punctuation">,</span> port<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>`</code>：模板字符串，内容中可以直接换行，变量拼接。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'名字'</span>
<span class="token keyword">let</span> my <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字是：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="箭头函数-1" tabindex="-1"><a class="header-anchor" href="#箭头函数-1" aria-hidden="true">#</a> 箭头函数</h3>
<p><code>=&gt;</code>：箭头函数，箭头函数的<code>this</code>是是静态的，<strong>永远指向</strong>函数声明所在的作用域下的 this 的值，因此使用<code>call</code>是无法改变箭头函数的<code>this</code>的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">getName2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'WindowName'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"schoolName"</span>
<span class="token punctuation">}</span>
<span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span>	<span class="token comment">// schoolName</span>
<span class="token function">getName2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span>	<span class="token comment">// WindowName</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>1）不能实例化，因为this是静态的。</p>
<p>2）不能使用 arguments 变量（arguments是用来保存参数的）</p>
<p>3）箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调</p>
<p>4）箭头函数不适合与 this 有关的回调. 事件回调, 对象的方法</p>
<p><code>...args</code>：REST参数，用来获取函数的实参，代替<code>arguments</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// filter some every map </span>
<span class="token punctuation">}</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">,</span><span class="token string">'test2'</span><span class="token punctuation">,</span><span class="token string">'test3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// ['test1','test2','test3']</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>...</code>：spread扩展运算符，将『数组』或『对象』转换为逗号分隔的『参数序列』</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> my <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'test1'</span><span class="token punctuation">,</span><span class="token string">'test2'</span><span class="token punctuation">,</span><span class="token string">'test3'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">t1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">t1</span><span class="token punctuation">(</span><span class="token operator">...</span>my<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// chunwan('test1','test2','test3')</span>
<span class="token comment">// 对象合并</span>
<span class="token keyword">const</span> skillOne <span class="token operator">=</span> <span class="token punctuation">{</span>q<span class="token operator">:</span> <span class="token string">'天音波'</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> skillTwo <span class="token operator">=</span> <span class="token punctuation">{</span>w<span class="token operator">:</span> <span class="token string">'金钟罩'</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mangseng <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>skillOne<span class="token punctuation">,</span> <span class="token operator">...</span>skillTwo<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>function * name()</code>：生成器</p>
<p>是一种异步编程的解决方案。通过next()方法控制向下执行，yield是一个分隔符。</p>
<p>参数传递=&gt;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> one <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">111</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> two <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">222</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//执行获取迭代器对象</span>
<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token string">'AAA'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//next方法可以传入实参</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'BBB'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// AAA</span>
<span class="token comment">// {value: 111, done: false}</span>
<span class="token comment">// BBB</span>
<span class="token comment">// {value: 222, done: false}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>异步=&gt;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//模拟获取  用户数据  订单数据</span>
<span class="token keyword">function</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">'用户数据'</span><span class="token punctuation">;</span>
        <span class="token comment">//调用 next 方法, 并且将数据传入</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">'订单数据'</span><span class="token punctuation">;</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> orders <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//调用生成器函数</span>
<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>Promise</strong></p>
<ul>
<li>语法上 Promise 是一个构造函数</li>
<li><code>Promise 构造函数:Promise (excutor)()</code></li>
<li><code>Promise.prototype.then</code></li>
<li><code>Promise.prototype.catch</code></li>
<li><code>Promise.allSettled</code>：不管数组中的 Promise 是否成功或失败 都会执行完全部</li>
</ul>
<p>成功就调用<code>resolve</code>，失败调用<code>reject</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">//实例化 Promise 对象</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//</span>
            <span class="token comment">// let data = '数据库中的用户数据';</span>
            <span class="token comment">// resolve</span>
            <span class="token comment">// resolve(data);</span>
            <span class="token keyword">let</span> err <span class="token operator">=</span> <span class="token string">'数据读取失败'</span><span class="token punctuation">;</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">//调用 promise 对象的 then 方法</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>模块化的优势：防止命名冲突、代码复用、高维护性</p>
<p>三种包暴露方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一种：分别暴露</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">'尚硅谷'</span><span class="token punctuation">;</span>

<span class="token comment">// 第二种：统一暴露</span>
<span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">'尚硅谷'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">findJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以帮助你找工作!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span> findJob<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 第三种：默认暴露</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    school<span class="token operator">:</span> <span class="token string">'ATGUIGU'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以改变你!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>三种包引入方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一种：通用引入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m1 <span class="token keyword">from</span> <span class="token string">"./src/javascript/m1.javascript"</span><span class="token punctuation">;</span>

<span class="token comment">// 第二种：解构赋值</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span> teach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./src/javascript/m1.javascript"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>school <span class="token keyword">as</span> guigu<span class="token punctuation">,</span> findJob<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./src/javascript/m2.javascript"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> m3<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./src/javascript/m3.javascript"</span><span class="token punctuation">;</span>

<span class="token comment">// 第三种：简便形式针对默认暴露</span>
<span class="token keyword">import</span> m3 <span class="token keyword">from</span> <span class="token string">"./src/javascript/m3.javascript"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li><code>Array.prototype.includes</code></li>
<li>检查数组中是否包含某个元素，返回布尔值</li>
<li>指数操作符</li>
<li><code>**</code></li>
<li>跟<code>Math.pow</code>是一样的，都是幂运算，计算次方</li>
</ul>
<h3 id="async和await" tabindex="-1"><a class="header-anchor" href="#async和await" aria-hidden="true">#</a> async和await</h3>
<p><code>async</code>函数返回值为<code>promist</code>对象</p>
<ul>
<li><code>await</code>表达式：
<ul>
<li>必须写在async函数中</li>
<li>await 右侧的表达式一般为 promise 对象</li>
<li>await 返回的是 promise 成功的值</li>
<li>await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// async 函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 抛出错误, 返回的结果是一个失败的 Promise</span>
    <span class="token comment">// throw new Error('出错啦!');</span>
    <span class="token comment">// 返回的结果如果是一个 Promise 对象</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'成功的数据'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// reject("失败的错误");</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 then 方法</span>
result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>注意，由于async函数的返回值是一个promist对象，如果想获取值可以通过await表达式获取。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//创建 promise 对象</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"用户数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// reject("失败啦!");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// await 要放在 async 函数中.</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//调用函数</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>?</code>：可选链操作符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dbHost <span class="token operator">=</span> config<span class="token operator">?.</span>db<span class="token operator">?.</span>host<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>动态import</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// import * as m1 from "./hello.javascript";</span>
<span class="token comment">//获取元素</span>
<span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./hello.javascript'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        module<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>BigInt：大整形，在javascript中最大整数是--992，如果想在加1会无法加，所以可以借助于这玩意</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> max <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>globalThis：永远指向全局对象，Windows对象</p>
<h2 id="补" tabindex="-1"><a class="header-anchor" href="#补" aria-hidden="true">#</a> 补</h2>
</template>
