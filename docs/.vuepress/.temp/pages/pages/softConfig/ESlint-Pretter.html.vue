<template><h1 id="eslint-pretter" tabindex="-1"><a class="header-anchor" href="#eslint-pretter" aria-hidden="true">#</a> ESlint-Pretter</h1>
<p>https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN</p>
<p>https://cn.eslint.org/docs/rules/</p>
<p>https://prettier.io/docs/en/options.html</p>
<h2 id="eslintrc-js" tabindex="-1"><a class="header-anchor" href="#eslintrc-js" aria-hidden="true">#</a> .eslintrc.js</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  root<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> <span class="token punctuation">{</span>
    node<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'plugin:vue/vue3-essential'</span><span class="token punctuation">,</span> <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span> <span class="token string">'@vue/prettier'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  parserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    parser<span class="token operator">:</span> <span class="token string">"babel-eslint"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">'no-unused-vars'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// 有默认值的参数必须放在最后</span>
    <span class="token string">'default-param-last'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止方向错误的 for 循环</span>
    <span class="token string">'for-direction'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token comment">// const 禁止重新赋值</span>
    <span class="token string">'no-const-assign'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token comment">// 不使用debugger</span>
    <span class="token string">'no-debugger'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'warm'</span> <span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 if else 的条件判断中出现重复的条件</span>
    <span class="token string">'no-dupe-else-if'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止重复导入模块</span>
    <span class="token string">'no-duplicate-imports'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token comment">// 注释的斜线或 * 后必须有空格</span>
    <span class="token string">'spaced-comment'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'always'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 行尾分号是否加分号,默认加 always,不加never</span>
    semi<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'never'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'prettier/prettier'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 缩进长度，默认2</span>
        tabWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">// 行尾是否需要有分号，默认true</span>
        semi<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否使用单引号, 默认false</span>
        singleQuote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 给箭头函数的参数加括号，即使一个也加, 默认加括号->always,不加->avoid</span>
        arrowParens<span class="token operator">:</span> <span class="token string">'avoid'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="prettierrc" tabindex="-1"><a class="header-anchor" href="#prettierrc" aria-hidden="true">#</a> .prettierrc</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"semi"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"arrowParens"</span><span class="token operator">:</span> <span class="token string">"avoid"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
