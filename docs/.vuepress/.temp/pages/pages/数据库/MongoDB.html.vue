<template><h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1>
<table>
<thead>
<tr>
<th>SQL术语/概念</th>
<th>MongoDB术语/概念</th>
<th>解释/说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>database</td>
<td>database</td>
<td>数据库</td>
</tr>
<tr>
<td>table</td>
<td>collection</td>
<td>数据库表/集合</td>
</tr>
<tr>
<td>row</td>
<td>document</td>
<td>数据记录行/文档</td>
</tr>
<tr>
<td>column</td>
<td>field</td>
<td>数据字段/域</td>
</tr>
<tr>
<td>index</td>
<td>index</td>
<td>索引</td>
</tr>
<tr>
<td>table joins</td>
<td>表连接,MongoDB不支持</td>
<td></td>
</tr>
<tr>
<td>嵌入文档</td>
<td>MongoDB通过嵌入式文档来替代多表连接</td>
<td></td>
</tr>
<tr>
<td>primary key</td>
<td>primary key</td>
<td>主键,MongoDB自动将_id字段设置为主键</td>
</tr>
</tbody>
</table>
<h2 id="一、常用命令" tabindex="-1"><a class="header-anchor" href="#一、常用命令" aria-hidden="true">#</a> 一、常用命令</h2>
<blockquote>
<p>mongoDB储存分为两个部分，上部分为内存，下部分为磁盘，当使用use创建的时候，存放的是内存还没有持久化的储存到磁盘的位置(直到该database里面有集合/数据的时候才会被储存到磁盘中)，而show出来的是磁盘的位置，所以use创建后直接show是无法直接看到刚刚创建的database</p>
</blockquote>
<blockquote>
<ul>
<li>数据库创建的规范
<ul>
<li>不能是空字符串（&quot;&quot;)。</li>
<li>不得含有' '（空格)、.、$、/、\和\0 (空字符)。</li>
<li>应全部小写。</li>
<li>最多64字节。</li>
<li>admin： 从权限的角度来看，这是&quot;root&quot;数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特
定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。</li>
<li>local: 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合</li>
<li>config: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li><strong>数据库操作</strong>
<ul>
<li><code>mongo --host XX --port XX</code>：启动</li>
<li><code>use 数据库名称</code>：选择和创建数据库</li>
<li><code>show dbs</code>：查看现有库</li>
<li><code>db</code>：查看当前正在使用的数据库</li>
<li><code>db.dropDatabase()</code>：删除库，需先进入该库</li>
</ul>
</li>
</ul>
<blockquote>
<ul>
<li>集合创建的规范
<ul>
<li>集合名不能是空字符串&quot;&quot;。</li>
<li>集合名不能含有\0字符（空字符)，这个字符表示集合名的结尾。</li>
<li>集合名不能以&quot;system.&quot;开头，这是为系统集合保留的前缀。</li>
<li>用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li><strong>集合操作（表）</strong>
<ul>
<li><code>show tables</code>：查看现有集合</li>
<li>显式创建：
<ul>
<li><code>db.createCollection(表名)</code>：创建集合</li>
<li><code>db.集合名.drop()</code>：删除集合</li>
</ul>
</li>
<li>隐式创建的意思是创建文档的时候，如果集合不存在就自动创建集合。</li>
</ul>
</li>
</ul>
<blockquote>
<ul>
<li>comment集合如果不存在，则会隐式创建</li>
<li>mongo中的数字，默认情况下是double类型，如果要存整型，必须使用函数NumberInt(整型数字)，否则取出来就有问题了。</li>
<li>插入当前日期使用 new Date()</li>
<li>插入的数据没有指定<code>_id</code>，会自动生成主键值</li>
<li>如果某字段没值，可以赋值为null，或不写该字段。</li>
<li>规范：
<ul>
<li>键不能含有\0 (空字符)。这个字符用来表示键的结尾。</li>
<li>.和$有特别的意义，只有在特定环境下才能使用。</li>
<li>以下划线&quot;_&quot;开头的键是保留的(不是严格要求的)。</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3>
<ul>
<li>
<p><strong>文档基本CRUD</strong></p>
</li>
<li>
<p>添加文档</p>
<ul>
<li>
<p>文档(document)的数据结构和<code>JSON</code>基本一样</p>
</li>
<li>
<p><code>db.集合名.方法</code></p>
</li>
<li>
<p>使用<code>insertOne()</code>向集合插入文档</p>
<ul>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>集合名<span class="token punctuation">.</span>insertOne<span class="token punctuation">(</span>{键:值<span class="token punctuation">,</span> 键:值<span class="token punctuation">,</span> 键:值}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>insertMany([{键:值, 键:值}, {键:值}, {键:值}])</code>：批量插入</p>
</li>
</ul>
</li>
</ul>
<p>一定要记得添加主键：<code>_id</code>，如果忘记添加会自动生成</p>
<ul>
<li>
<p>查询文档</p>
<ul>
<li><code>find(&lt;query&gt;, [projection])</code>：查询文档</li>
<li><code>findOne()</code>：返回第一条数据</li>
<li><code>find({条件}, {键:1})</code>：<strong>投影查询</strong>，查询结果返回部分字段
<ul>
<li><strong>只显示键</strong>，1表示真，只显示。默认<code>_id</code>会自动显示，如果想隐藏需<code>_id: 0</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>捕获错误</p>
<ul>
<li>
<p>在进行插入文档的时候，如果出错将终止插入，已经插入成功的不会回滚，需要使用<code>try catch</code></p>
<ul>
<li>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>try<span class="token punctuation">{</span>
	插入语句
<span class="token punctuation">}</span>catch(e)<span class="token punctuation">{</span>
	print(e);
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
</li>
<li>
<p><strong>文档更新</strong>：<code>updateone(query, update, options)</code></p>
<ul>
<li>
<p><strong>覆盖修改</strong>：其他数据全部没有，<strong>只剩下id和name</strong></p>
</li>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>{_id:<span class="token string">"1"</span><span class="token punctuation">,</span> {name:<span class="token string">"myname"</span>}}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><strong>局部修改</strong>：<code>$set</code>，只修改name，其他不管</p>
</li>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>{_id:<span class="token string">"1"</span><span class="token punctuation">,</span> {$<span class="token keyword">set</span>:{name:<span class="token string">"myname"</span>}}}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><strong>批量修改</strong>：使用<code>updateMany</code>或使用可选参数<code>{multi:true}  </code></p>
</li>
<li>
<p><strong>列值增长的修改</strong>：<code>$inc</code>每次增加1（对3号数据的点赞数，每次递增1 ）</p>
</li>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span><span class="token keyword">comment</span><span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>{_id:<span class="token string">"3"</span>}<span class="token punctuation">,</span>{$inc:{likenum:<span class="token number">1</span>}}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>deleteOne(条件)</code>：删除文档</p>
</li>
<li>
<p><code>deleteMany</code>，同上</p>
</li>
</ul>
</li>
<li>
<p><strong>文档的更多查询</strong></p>
<ul>
<li><code>count(query, options)</code>：统计查询，返回数字</li>
<li><code>find().skip(number).limit(number)</code>：分页查询，使用ship跳过指定数量的数据，通过limit读取指定数量的数据</li>
</ul>
</li>
</ul>
<p><strong>意思是，跳过第一条数据，查询后面两条数据</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>b<span class="token punctuation">.</span>stu<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>{class: <span class="token string">'610'</span>}<span class="token punctuation">)</span>
db<span class="token punctuation">.</span>stu<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>skip<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">limit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>操作符技巧：大<code>g</code>great，小<code>l</code>less，于<code>t</code>than，等于<code>e</code>equal，不<code>n</code>not</p>
</blockquote>
<ul>
<li>
<p>排序</p>
<ul>
<li><code>find().sort(key:1)</code>：排序查询，1和-1代表升序和降序，可以和<code>sort&gt;ship&gt;limit</code>一起连用，执行顺序。</li>
<li><code>find({字段:/正则表达式/})  </code>：正则表达式搜索</li>
<li><code>find({字段名1: {$操作符: 值}})</code>：比较查询
<ul>
<li>操作符：gt、lt、gte、lte、ne（大于、小于、大于等于、小于等于、不等于）</li>
<li>字段1大于字段2就是<code>字段1 : {$gt: 字段2}</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>stu<span class="token punctuation">.</span>find<span class="token punctuation">(</span>{_id: {$gt: <span class="token number">2</span>}}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>tips</p>
<p>查询评论集合中likenum大于等于700 并且小于2000的文档</p>
<ol>
<li>初始</li>
</ol>
<p><code>find({})</code></p>
<ol start="2">
<li>当有多个条件判断时，第一步先判断是<strong>与</strong>还是<strong>或</strong>。写下<strong>操作符</strong>和<strong>方括号</strong></li>
</ol>
<p><code>find({$and: []})</code></p>
<ol start="3">
<li>在方括号里面添加判断语句。根据条件添加适量的<strong>花括号</strong>用逗号隔开</li>
</ol>
<p><code>find({$and: [{},{}]})</code></p>
<p><code>find({$and: [{$gt: 700},{$lt: 2000}]})</code></p>
</blockquote>
<ul>
<li>
<p><strong>包含查询</strong>：<code>find(字段名1 : {$操作符: [ { },{ },{ } ]})</code></p>
<ul>
<li>
<p>操作符：in和nin（包含和不包含），and、or（与或）</p>
<ul>
<li>
<p>查询评论集合中likenum大于等于700 并且小于2000的文档：</p>
</li>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span><span class="token keyword">comment</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{$<span class="token operator">and</span>:<span class="token punctuation">[</span>{likenum:{$gte:<span class="token number">700</span>}}<span class="token punctuation">,</span>{likenum:{$lt:<span class="token number">2000</span>}}<span class="token punctuation">]</span>}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>查询评论集合中userid为1003，或者点赞数小于1000的文档记录</p>
</li>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span><span class="token keyword">comment</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{$<span class="token operator">or</span>:<span class="token punctuation">[</span> {userid:<span class="token string">"1003"</span>} <span class="token punctuation">,</span>{likenum:{$lt:<span class="token number">1000</span>} }<span class="token punctuation">]</span>}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>选择切换数据库：use articledb
插入数据：db.comment.insert({bson数据})
查询所有数据：db.comment.find();
条件查询数据：db.comment.find({条件})
查询符合条件的第一条记录：db.comment.findOne({条件})
查询符合条件的前几条记录：db.comment.find({条件}).limit(条数)
查询符合条件的跳过的记录：db.comment.find({条件}).skip(条数)
修改数据：db.comment.update({条件},{修改后的数据}) 或db.comment.update({条件},{$set:{要修改部分的字段:数据})
修改数据并自增某字段值：db.comment.update({条件},{$inc:{自增的字段:步进值}})
删除数据：db.comment.remove({条件})
统计查询：db.comment.count({条件})
模糊查询：db.comment.find({字段名:/正则表达式/})
条件比较运算：db.comment.find({字段名:{$gt:值}})
包含查询：db.comment.find({字段名:{$in:[值1，值2]}})或db.comment.find({字段名:{$nin:[值1，值2]}})
条件连接查询：db.comment.find({$and:[{条件1},{条件2}]})或db.comment.find({$or:[{条件1},{条件2}]})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="二、索引" tabindex="-1"><a class="header-anchor" href="#二、索引" aria-hidden="true">#</a> 二、索引</h2>
<ul>
<li>
<p>单字段索引</p>
<ul>
<li>根据一个字段上<strong>进行排序</strong>的索引，和数据结构中的<strong>二分探测法</strong>差不多</li>
</ul>
</li>
<li>
<p>复合索引</p>
<ul>
<li>由多个字段组成的排序</li>
</ul>
</li>
<li>
<p>地理空间索引、文本索引、哈希索引</p>
</li>
<li>
<p>索引的管理操作</p>
<ul>
<li>
<p><code>db.集合名.getIndexes()</code>：索引查看</p>
<ul>
<li>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">//返回一个集合中的所有索引的数组 "_id"是默认创建索引</span>
<span class="token operator">></span> db<span class="token punctuation">.</span>class<span class="token punctuation">.</span>getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>
	{
		<span class="token string">"v"</span> : <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">//版本号</span>
		<span class="token string">"key"</span> : {           <span class="token comment">//索引的key  1是升序</span>
			<span class="token string">"_id"</span> : <span class="token number">1</span>
		}<span class="token punctuation">,</span>
		<span class="token string">"name"</span> : <span class="token string">"_id_"</span><span class="token punctuation">,</span>    <span class="token comment">//索引名称</span>
		<span class="token string">"ns"</span> : <span class="token string">"Rainbow.class"</span>  <span class="token comment">//索引所在的表的绝对路径</span>
	}
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<p>复合索引-&gt;如果查询2个则会命中索引，单独查询第一个(userid)也会命中，但是如果是**单独查询第二个(nickname)**就不会命中索引。</p>
</blockquote>
<ul>
<li>
<p><code>createIndex(keys, options)</code>：创建索引</p>
</li>
<li>
<p><code>createIndex({userid:1, nickname:-1}, options)</code>：复合索引</p>
<ul>
<li>根据<code>userid</code>进行升序，然后在根据<code>nickname</code>进行降序</li>
</ul>
</li>
</ul>
<p>options：唯一索引<code>{&quot;unique&quot;: true}</code></p>
<ul>
<li>
<p><code>dropIndex(&quot;索引名称&quot;)</code>：删除索引</p>
<ul>
<li><code>dropIndex({userid: 1})</code></li>
</ul>
</li>
<li>
<p><code>dropIndexes()</code>：删除全部索引</p>
</li>
</ul>
</li>
<li>
<p><strong>索引的使用</strong></p>
<ul>
<li><code>find(query, options).explan(&quot;executionStats&quot;)</code>：分析查询性能
<ul>
<li><code>&quot;stage&quot; : &quot;COLLSCAN&quot;</code> ，表示全集合扫描还没用索引</li>
<li><code>&quot;stage&quot; : &quot;IXSCAN&quot;</code>，基于索引的扫描用上了索引</li>
</ul>
</li>
<li>涵盖的查询：例如索引字段是id，然后我就是查id那么他就直接从索引中返回结果，而不扫描任何文档或将文档带入内存。 这些覆盖的查询可以
非常有效。</li>
</ul>
</li>
</ul>
<h2 id="三、账户权限" tabindex="-1"><a class="header-anchor" href="#三、账户权限" aria-hidden="true">#</a> 三、账户权限</h2>
<blockquote>
<p><strong>roles角色：</strong></p>
<ol>
<li>
<p>数据库用户角色：read、readWrite;</p>
</li>
<li>
<p>数据库管理角色：dbAdmin、<strong>dbOwner</strong>、userAdmin；</p>
</li>
<li>
<p>集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；</p>
</li>
<li>
<p>备份恢复角色：backup、restore；</p>
</li>
<li>
<p>所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase</p>
</li>
<li>
<p>超级用户角色：**root **</p>
</li>
</ol>
<p>Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
<strong>dbOwner</strong>：允许用户在指定数据库中执行全部操作
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限</p>
</blockquote>
<p>创建超级管理员</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">use</span> admin
db<span class="token punctuation">.</span>createUser<span class="token punctuation">(</span>{
    <span class="token keyword">user</span>: <span class="token string">'root'</span><span class="token punctuation">,</span>
    pwd: <span class="token string">'123456'</span><span class="token punctuation">,</span>
    roles: <span class="token punctuation">[</span>{role: <span class="token string">'root'</span><span class="token punctuation">,</span> db:<span class="token string">'admin'</span>}<span class="token punctuation">]</span>
}<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>进入配置文件添加点东西</p>
<p><code>\MongoDB\Server\4.4\bin\mongod.cfg</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>security:
  <span class="token keyword">authorization</span>: enabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>登陆账户</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mongo admin <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 密码
mongo IP地址:<span class="token number">27017</span><span class="token operator">/</span>test <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 密码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>连接stu库，然后登陆</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mongo stu
db<span class="token punctuation">.</span>auto<span class="token punctuation">(</span><span class="token string">"用户名"</span>: <span class="token string">"密码"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>查看用户：<code>show users</code></p>
<p>删除用户：<code>db.dropUser()</code></p>
<h2 id="四、聚合管道" tabindex="-1"><a class="header-anchor" href="#四、聚合管道" aria-hidden="true">#</a> 四、聚合管道</h2>
<p><code>$project</code>：mysql中的select</p>
<p>设置别名、加法（<strong>$add</strong>）、减法（<strong>$subtract</strong>）、乘法（<strong>$multipy</strong>）、除法（<strong>$divide</strong>）、求模（<strong>$mod</strong>）</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">// 重命名字段class</span>
<span class="token comment">// 通过 "$class" 来表示操作的字段</span>
db<span class="token punctuation">.</span>stu<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
  {
    $project: {_id:<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> class: <span class="token number">1</span><span class="token punctuation">,</span> myclass: <span class="token string">"$class"</span>}
  }
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>$match</code>：条件匹配。只满足条件的文档从能进入下一阶段</p>
<p>显示id大于2的</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>stu<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
  {
    $project: {_id:<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> class: <span class="token number">1</span><span class="token punctuation">,</span> myclass: <span class="token string">"$class"</span>}
  }<span class="token punctuation">,</span>
  {
    $<span class="token keyword">match</span>: {_id: {$gt: <span class="token number">2</span>}}
  }
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>$limit</code>：限制结果数量</p>
<p><code>$skip</code>：跳过文档数量</p>
<p><code>$sort</code>：条件排序</p>
<p><code>$group</code>：条件组合结果</p>
<p>统计class类别，每个类别的数量</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>db<span class="token punctuation">.</span>stu<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
  {
    $<span class="token keyword">group</span>: {_id: <span class="token string">"$class"</span><span class="token punctuation">,</span> count: {$sum: <span class="token number">1</span>}}
  }
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>$lookup</code>：引入其他集合的数据</p>
</template>
