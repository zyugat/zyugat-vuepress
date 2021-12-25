<template><h1 id="flask" tabindex="-1"><a class="header-anchor" href="#flask" aria-hidden="true">#</a> Flask</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<ul>
<li>
<p>输出简单Hello world</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app<span class="token operator">=</span>Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Hello World!'</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>输出页面</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>app<span class="token operator">=</span>Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">,</span>template_folder<span class="token operator">=</span><span class="token string">'app/templates'</span><span class="token punctuation">,</span>static_url_path<span class="token operator">=</span><span class="token string">'/'</span><span class="token punctuation">,</span>static_folder<span class="token operator">=</span><span class="token string">'app/static'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">'index.html'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>template_folder：html位置</p>
<p>static_folder：静态文件</p>
</li>
<li>
<p>在python中返回上上个目录是</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>template_folder<span class="token operator">=</span><span class="token string">'../../front'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>json与字典的相互转换</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
ret <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>字典名<span class="token punctuation">)</span> 字典转json
ret2 <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json数据<span class="token punctuation">)</span> json转字典
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h2 id="进阶使用" tabindex="-1"><a class="header-anchor" href="#进阶使用" aria-hidden="true">#</a> 进阶使用</h2>
<ul>
<li>
<p>蓝图Blueprint的2种使用</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># __init__.py文件，导入目录下的所有文件</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint
main <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> <span class="token operator">**</span><span class="token punctuation">.</span>py <span class="token punctuation">,</span> <span class="token operator">**</span><span class="token punctuation">.</span>py

<span class="token comment"># app目录下init文件</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span>Blueprint
<span class="token keyword">def</span> <span class="token function">create_app</span><span class="token punctuation">(</span>config_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> <span class="token punctuation">.</span>main <span class="token keyword">import</span> main <span class="token keyword">as</span> main_blueprint
    app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>main_blueprint<span class="token punctuation">)</span>
    <span class="token keyword">return</span> app
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#实体文件 views.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint
蓝图名字 <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">'蓝图名字'</span><span class="token punctuation">,</span>__name__<span class="token punctuation">)</span>

<span class="token comment">#调用文件 app.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> 文件夹 <span class="token keyword">import</span> 文件名
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>文件名<span class="token punctuation">.</span>蓝图名<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="数据库的连接及增删改查" tabindex="-1"><a class="header-anchor" href="#数据库的连接及增删改查" aria-hidden="true">#</a> 数据库的连接及增删改查</h3>
<ul>
<li>
<p>数据库的连接</p>
<div class="language-PYTHON ext-PYTHON line-numbers-mode"><pre v-pre class="language-PYTHON"><code>from flask_sqlalchemy import SQLAlchemy
# 设置连接数据库的URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:123456@127.0.0.1:3306/studentsystem'
# 设置每次请求结束后会自动提交数据库中的改动
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# 查询时会显示原始SQL语句
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>定义模型类</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    __tablename__ <span class="token operator">=</span> <span class="token string">'users'</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    email <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">'User:%s'</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>增加数据</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#增加</span>
    Ro <span class="token operator">=</span> Role<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> content<span class="token operator">=</span><span class="token string">'cs'</span><span class="token punctuation">)</span>
    db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>Ro<span class="token punctuation">)</span>
    <span class="token comment">#事务</span>
    db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">'index'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>更改数据</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>obj <span class="token operator">=</span> Role<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>Role<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'2'</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>删除数据</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>obj <span class="token operator">=</span> Role<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>Role<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>delete<span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>使用模型返回数据库数据</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    cs <span class="token operator">=</span> Role<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>Role<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">"ID为：%s 姓名为：%s"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>cs<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span> cs<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    methods: {
      login:function() {
               axios.post('/todo/api/loginApi',{
                   name: this.new_login.name,
                   passwor: this.new_login.passwor
               }).then(function (response) {
                   console.log(response.status)
                   // 其实是应该走后台路由
                   if(parseInt(response.status) === 200){
                   		alert('响应成功，跳转中')
                       	window.location.href= '/cscscs'
                   }
               }).catch(function (error) {
                   console.log(error.response)
               })
			},
				get:function() {
					var self = this;
					//在编译后即调用API接口取得服务器端数据
					self.$http.get('/todo/api/getLoginApi').then(function(res) {
						self.loginN = res.data.loginnName;
				},function(){
	                        console.log('请求失败处理');
	                    });
				}
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>			var self <span class="token operator">=</span> this<span class="token punctuation">;</span>
			self<span class="token punctuation">.</span>$http<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'/todo/api/loginApi'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>then<span class="token punctuation">(</span>function<span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				self<span class="token punctuation">.</span>status <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
				self<span class="token punctuation">.</span>session <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>session<span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>status <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">'ok'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					alert<span class="token punctuation">(</span><span class="token string">'登录成功，你好 '</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>session<span class="token punctuation">)</span>
          	<span class="token punctuation">}</span>
				<span class="token keyword">else</span><span class="token punctuation">{</span>
					alert<span class="token punctuation">(</span><span class="token string">'登录失败'</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      login:function() {
				var self = this;
				self.$http.post('/todo/api/loginApi', {
					name: self.new_login.name,
					passwor: self.new_login.passwor,
				}).then(function(res) {
					self.loginDa = res.data.loginDa;
				alert('123')
				}).then(function(re){

				});
			}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>				var self = this;
				self.$http.post('/todo/api/loginApi', {
					name: self.new_login.name,
					passwor: self.new_login.passwor,
				}).then(function(res) {
					self.loginDa = res.data.loginDa;
				}).then(function(re){
					self.$http.get('/todo/api/loginApi', {
						self.status = res.data.status;
						self.session = res.data.session;
						if(self.status === 'ok'){
							alert('登录成功，你好 ' + self.session)
		            	}
					else{
							alert('登录失败')
					}
					});
				});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li>
<li>
<p>方法1：将SQLAlchemy转换为json，但是只能弄一条</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_schema</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token string">'id'</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
            <span class="token string">'name'</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token string">'password'</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
            <span class="token string">'email'</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 取第一条数据</span>
    data_serialize <span class="token operator">=</span> data<span class="token punctuation">.</span>test_schema<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 通过我们之前在模型类里定义的序列化函数对取得数据进行序列化，此时 data_serialize 的类型是 dict</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>data_serialize<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
<li>
<p>方法2：将SQLAlchemy转换为json，要重写flask.json</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#https://blog.csdn.net/qq_44265217/article/details/103141734</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span>jsonify
<span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy
<span class="token keyword">from</span> flask<span class="token punctuation">.</span>json <span class="token keyword">import</span> JSONEncoder <span class="token keyword">as</span> _JSONEncoder<span class="token comment">#重写flask.json类</span>
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> date
<span class="token keyword">import</span> json


app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token comment"># 配置数据库的地址</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">'SQLALCHEMY_DATABASE_URI'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'mysql+mysqlconnector://root:123456@127.0.0.1:3306/studentsystem'</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">'SQLALCHEMY_COMMIT_TEARDOWN'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">'SQLALCHEMY_TRACK_MODIFICATIONS'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">'SQLALCHEMY_COMMIT_ON_TEARDOWN'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>

db <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span>app<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span>_JSONEncoder<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">default</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">'keys'</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">'__getitem__'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> o<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">'%Y-%m-%d %H:%M:%S'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> json<span class="token punctuation">.</span>JSONEncoder<span class="token punctuation">.</span>default<span class="token punctuation">(</span>self<span class="token punctuation">,</span> o<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Flask</span><span class="token punctuation">(</span>Flask<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_encoder <span class="token operator">=</span> JSONEncoder


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    __tablename__ <span class="token operator">=</span> <span class="token string">'users'</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    email <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">keys</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    test_data <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    data_json <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>test_data<span class="token punctuation">,</span> cls<span class="token operator">=</span>JSONEncoder<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>data_json<span class="token punctuation">)</span>



<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></li>
<li>
<p>使用查询语句返回json格式数据库数据</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">'localhost'</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">'123456'</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                         db<span class="token operator">=</span><span class="token string">'studentsystem'</span><span class="token punctuation">)</span>
    cur <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sql <span class="token operator">=</span> <span class="token string">"SELECT `*` FROM `users` WHERE 1"</span>
    cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    u <span class="token operator">=</span> cur<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
    db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 如果第1个json的第2个的值为管理员则输出管理员</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">"管理员"</span><span class="token operator">==</span>u<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>u<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
</ul>
<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>users <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">'id'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'username'</span><span class="token punctuation">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'password'</span><span class="token punctuation">:</span> <span class="token string">'111111'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">'id'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'username'</span><span class="token punctuation">:</span> <span class="token string">'Michael'</span><span class="token punctuation">,</span> <span class="token string">'password'</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token decorator annotation punctuation">@api<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/cscscs'</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'GET'</span><span class="token punctuation">,</span><span class="token string">'POST'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">query_user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> user <span class="token keyword">in</span> users<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">1</span> <span class="token operator">==</span> user<span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> user<span class="token punctuation">[</span><span class="token string">'username'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="报错解决方案" tabindex="-1"><a class="header-anchor" href="#报错解决方案" aria-hidden="true">#</a> 报错解决方案</h2>
<ul>
<li>
<p>ModuleNotFoundError: No module named 'mysql'
安装插件pip install mysql-connector</p>
</li>
<li>
<p>与v-for括号冲突报错找不到变量</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>app.jinja_env.variable_start_string = '{['
app.jinja_env.variable_end_string = ']}'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
