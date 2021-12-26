<template><h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h1>
<p>LeetCode，算法个人笔记，初级算法，javascript，</p>
<p>js：创建多维数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// dp[n][2]</span>
<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<h3 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/two-sum/" target="_blank" rel="noopener noreferrer">1. 两数之和<ExternalLinkIcon/></a></h3>
<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <em><code>target</code></em> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p>
<blockquote>
<p>输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。</p>
</blockquote>
<ul>
<li>
<p>创建一个 map ，用于保存哈希表</p>
</li>
<li>
<p>遍历到数字 aa 时，用 target 减去 a，就会得到 b，若 b 存在于哈希表中，我们就可以直接返回结果了。若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用。</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>a<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>a<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr>
<h3 id="_26-删除有序数组中的重复项" tabindex="-1"><a class="header-anchor" href="#_26-删除有序数组中的重复项" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener noreferrer">26. 删除有序数组中的重复项<ExternalLinkIcon/></a></h3>
<p>给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。</p>
<p>不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p>
<ul>
<li><strong>数组是有序的，原地删除重复元素，返回删除后数组长度。</strong></li>
<li>定义 fast 和 slow 两个指针，
<ul>
<li>fast指针用于遍历数组。</li>
<li>slow指针用于表示<strong>下一个不同元素填入的位置</strong>。</li>
</ul>
</li>
<li>如果 <code>nums[fast]</code> 与 <code>nums[fast-1]</code> 的值不同，就将 <code>nums[fast]</code> 的值复制到 <code>nums[slow]</code>，然后slow++。</li>
</ul>
<p>案例流程：<code>[0,0,1,1,1,2,2,3,3,4]</code>：一开始索引0和1的值都是0，相同那么就fast++（slow不变，到时候直接覆盖）。索引1和2相比，不相同那么将2 fast覆盖到1 slow。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入：nums = [0,0,1,1,1,2,2,3,3,4]</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fast<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>slow<span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token operator">!==</span>nums<span class="token punctuation">[</span>fast<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
            slow<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        fast<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><hr>
<h3 id="_66-加一" tabindex="-1"><a class="header-anchor" href="#_66-加一" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/plus-one/" target="_blank" rel="noopener noreferrer">66. 加一<ExternalLinkIcon/></a></h3>
<p>给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。</p>
<p>最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。</p>
<p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p>
<blockquote>
<p>输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。</p>
<p>输入：digits = [1,9]
输出：[2,0]</p>
</blockquote>
<ul>
<li><strong>给数组尾部的数，加一，如果是10那么进1。</strong></li>
<li>倒序遍历，给值<strong>加1</strong>，mod 10。判断是否为0，如为0则需要继续循环，<strong>进位</strong>。直到不为0时，返回结果。</li>
<li>最后遍历完还需要进位（999），那么数组长度+1，首部为 1。（1000）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> digits<span class="token punctuation">.</span>length
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
        digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%=</span> <span class="token number">10</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> digits
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span>len<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">_</span><span class="token operator">=></span><span class="token number">0</span><span class="token punctuation">)</span>
    digits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">return</span> digits
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr>
<h3 id="_122-买卖股票的最佳时机-ii" tabindex="-1"><a class="header-anchor" href="#_122-买卖股票的最佳时机-ii" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank" rel="noopener noreferrer">122. 买卖股票的最佳时机 II<ExternalLinkIcon/></a></h3>
<p>给定一个数组 <code>prices</code> ，其中 <code>prices[i]</code> 是一支给定股票第 <code>i</code> 天的价格。</p>
<blockquote>
<p>输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。</p>
</blockquote>
<p>1、动态规划</p>
<ul>
<li>定义状态
<ul>
<li><code>dp[i][0]</code>：第 i 天 手里<strong>没有股票</strong>的利润。</li>
<li><code>dp[i][1]</code>：第 i 天 手里<strong>有股票</strong>的利润。</li>
</ul>
</li>
<li><code>dp[i][0]</code>的转移方程
<ul>
<li>转移状态1：前一天没有股票。
<ul>
<li><code>dp[i-1][0]</code></li>
</ul>
</li>
<li>转移状态2：前一天有股票，然后卖了，那么就需要加上 prices[i] 。
<ul>
<li><code>dp[i-1][1]+prices[i]</code></li>
</ul>
</li>
</ul>
</li>
<li><code>dp[i][1]</code>的转移方程
<ul>
<li>转移状态1：前一天没有股票，然后买入了。需要减上 prices[i] 。
<ul>
<li><code>dp[i-1][1] - price[i]</code></li>
</ul>
</li>
<li>转移状态2：前一天有股票
<ul>
<li><code>dp[i-1][1]</code></li>
</ul>
</li>
</ul>
</li>
<li>根据初始状态，第 0 天时
<ul>
<li><code>dp[0][0]=0</code>、<code>dp[0][1] -= prices[i]</code></li>
</ul>
</li>
<li>结果
<ul>
<li>交易结束，持有股票的收益<strong>一定低于</strong>不持有股票的收益。（<code>dp[n-1][0] &gt; dp[b-1][1]</code>）。</li>
<li>因此 <code>renturn dp[n-1][0]</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>2、贪心</p>
<p>贪心算法只能用于计算最大利润，<strong>计算的过程并不是实际的交易过程</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>prices<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<h3 id="_136-只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#_136-只出现一次的数字" aria-hidden="true">#</a> 136.只出现一次的数字</h3>
<p>给定一个<strong>非空</strong>整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p>
<blockquote>
<p>输入: [2,2,1]</p>
<p>输出: 1</p>
</blockquote>
<p>用 异或 ，只有相同时才是0。（<code>1^1=0。1^0=1。</code>）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">^=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<h3 id="_189-轮转数组" tabindex="-1"><a class="header-anchor" href="#_189-轮转数组" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/rotate-array/" target="_blank" rel="noopener noreferrer">189. 轮转数组<ExternalLinkIcon/></a></h3>
<p>给你一个数组，将数组中的元素向右轮转 <code>k</code> 个位置，其中 <code>k</code> 是非负数。</p>
<blockquote>
<p>输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]</p>
</blockquote>
<p>1、数组翻转</p>
<table>
<thead>
<tr>
<th>操作</th>
<th>结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>原始数组</td>
<td>1 2 3 4 5 6 7</td>
</tr>
<tr>
<td>翻转所有元素</td>
<td><code>7 6 5 4 3 2 1</code></td>
</tr>
<tr>
<td>翻转<code>[0, k mod n-1][0,k mod n−1]</code>区间的元素</td>
<td><code>5 6 7</code> 4 3 2 1</td>
</tr>
<tr>
<td>翻转<code>[k mod n, n-1][k mod n,n−1]</code>区间的元素</td>
<td>5 6 7 <code>1 2 3 4</code></td>
</tr>
</tbody>
</table>
<p>需要注意的是，第 13 行，翻转的是 k-1，因为 start 是从 0 开始的。（如果k=3那么翻转的是 7 6 5，翻转 0到2的索引）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>start<span class="token operator">&lt;</span>end<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span>
        nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span>
        nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> temp
        start<span class="token operator">++</span>
        end<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    k <span class="token operator">%=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr>
<h3 id="_217-存在重复元素" tabindex="-1"><a class="header-anchor" href="#_217-存在重复元素" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">217. 存在重复元素<ExternalLinkIcon/></a></h3>
<p>给定一个整数数组，判断是否存在重复元素。</p>
<p>如果存在一值在数组中出现至少两次，函数返回 <code>true</code> 。如果数组中每个元素都不相同，则返回 <code>false</code> 。</p>
<blockquote>
<p>输入: [1,2,3,1]
输出: true</p>
</blockquote>
<ul>
<li>对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">containsDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr>
<h3 id="_283-移动零" tabindex="-1"><a class="header-anchor" href="#_283-移动零" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/move-zeroes/" target="_blank" rel="noopener noreferrer">283. 移动零<ExternalLinkIcon/></a></h3>
<p>给定一个数组 <code>nums</code>，编写一个函数将所有 <code>0</code> 移动到数组的末尾，同时保持非零元素的相对顺序。</p>
<blockquote>
<p>输入: [0,1,0,3,12]
输出: [1,3,12,0,0]</p>
</blockquote>
<ul>
<li>设置指针 left 和 right，<strong>left指针永远指向 0</strong>。</li>
<li>right 当遍历到不是 0 时，交换 <code>nums[left]</code> 和 <code>nums[right]</code>。因为left一直都是指向0。</li>
<li>每执行一次循环 right 自加 1。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>right<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>right<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token operator">!==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span>
            left<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        right<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span>l<span class="token punctuation">,</span>r</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp<span class="token operator">=</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span>
    nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
    nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token operator">=</span>temp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr>
<h3 id="_350-两个数组的交集-ii" tabindex="-1"><a class="header-anchor" href="#_350-两个数组的交集-ii" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/" target="_blank" rel="noopener noreferrer">350. 两个数组的交集 II<ExternalLinkIcon/></a></h3>
<blockquote>
<p>输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]</p>
</blockquote>
<ul>
<li>先给两个数组进行升序排序，定义一个 arr 数组</li>
<li>定义 i 和 j 指针，对应nums1和nums2</li>
<li>判断两数组值是否相同，如果相同则 入栈</li>
<li>如果值不同，那么判断 <code>nums1[i]</code> 和 <code>nums2[i]</code>，哪个值更小，小的那个则<strong>自加1</strong>，因为数组是按照升序</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">intersect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nums2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>j<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>nums1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;</span>nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            i<span class="token operator">++</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">></span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">?</span> j<span class="token operator">++</span><span class="token operator">:</span>i<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
