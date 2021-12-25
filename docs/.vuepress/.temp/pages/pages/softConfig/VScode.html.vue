<template><h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VScode</h1>
<h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置" aria-hidden="true">#</a> 系统配置</h2>
<h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a> 常用快捷键</h2>
<h3 id="注释代码" tabindex="-1"><a class="header-anchor" href="#注释代码" aria-hidden="true">#</a> 注释代码</h3>
<h4 id="ctrl" tabindex="-1"><a class="header-anchor" href="#ctrl" aria-hidden="true">#</a> Ctrl + /</h4>
<h3 id="html代码实时调试" tabindex="-1"><a class="header-anchor" href="#html代码实时调试" aria-hidden="true">#</a> HTML代码实时调试</h3>
<h4 id="alt-l加alt-o" tabindex="-1"><a class="header-anchor" href="#alt-l加alt-o" aria-hidden="true">#</a> alt+L加alt+O</h4>
<h4 id="alt-l-加alt-c" tabindex="-1"><a class="header-anchor" href="#alt-l-加alt-c" aria-hidden="true">#</a> alt+L,加alt+C</h4>
<h3 id="同步环境" tabindex="-1"><a class="header-anchor" href="#同步环境" aria-hidden="true">#</a> 同步环境</h3>
<h4 id="shift-alt-u上传到云端" tabindex="-1"><a class="header-anchor" href="#shift-alt-u上传到云端" aria-hidden="true">#</a> Shift + Alt + U上传到云端</h4>
<h4 id="shift-alt-d下载云端的配置" tabindex="-1"><a class="header-anchor" href="#shift-alt-d下载云端的配置" aria-hidden="true">#</a> Shift + Alt + D下载云端的配置</h4>
<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<p>Partial Diff：文档比较</p>
<p>选中一代码，右键<strong>Select Text for Compare</strong>，选中另外一部分代码，右键<strong>Compare Text with Previous Selection</strong>即可。</p>
<p>Settings Sync</p>
<p>同步环境</p>
<p><code>Shift + Alt + U</code>上传到云端</p>
<p><code>Shift + Alt + D</code>下载云端的配置</p>
<p>Monokai Pro：主题</p>
<p>Beautify：格式化代码，保存就行</p>
<p>prettier：格式化代码</p>
<p>ESLint：自动修复代码</p>
<p>Auto Close Tag：自动添加HTML/XML关闭标签</p>
<p>Auto Rename Tag：自动重命名配对的HTML/XML标签</p>
<p>Tabnine：智能提示代码</p>
<p>HTML CSS Support：htmlAndCSS代码提示</p>
<p>Vetur：对Vue的格式化代码，语法高亮显示</p>
<p>Code Spell Checker ：拼写检查</p>
<p>Code Runner自动搭建语言环境，右键Run code</p>
<p>Live Server：HTML代码实时调试</p>
<p>Remote-SSH：远程SSH</p>
<p>Remote Development：远程调试</p>
<blockquote>
<p><strong>自己看情况装</strong></p>
<p>eslint-config-prettier</p>
<p>这是一个ESLint配置，它包含规则的配置（某些规则是打开，关闭还是特殊配置） . 此配置允许您通过关闭可能与Prettier冲突的格式相关规则，将Prettier与其他ESLint配置（如<a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank" rel="noopener noreferrer">eslint-config-airbnb<ExternalLinkIcon/></a>）一起使用 . 使用此配置，您不需要使用 <code>prettier-eslint</code> ，因为在Prettier格式化代码后，ESLint不会抱怨 . 但是，您需要单独运行 <code>prettier</code> 命令 .</p>
<p>eslint-plugin-prettier</p>
<p>这是一个ESLint插件，意味着它包含ESLint将检查的其他规则的实现 . 这个插件使用了Prettier，当你的代码与Prettier的预期输出不同时会引发问题 . 这些问题可以通过 <code>--fix</code> 自动修复 . 使用此插件，您无需单独运行 <code>prettier</code> 命令，该命令将作为插件的一部分运行 . 此插件不会关闭与格式相关的规则，如果您手动或通过 <code>eslint-config-prettier</code> 看到此类规则的冲突，则需要将其关闭 .</p>
</blockquote>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"C_Cpp.updateChannel"</span><span class="token operator">:</span> <span class="token string">"Insiders"</span><span class="token punctuation">,</span>
  <span class="token comment">// CodeRunner在终端运行</span>
  <span class="token property">"code-runner.runInTerminal"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token property">"diffEditor.ignoreTrimWhitespace"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 代码编辑配置</span>
  <span class="token property">"editor.fontSize"</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否启用字体连字</span>
  <span class="token property">"editor.fontLigatures"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 字体</span>
  <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"'JetBrains Mono', '思源黑体', Consolas, 'Courier New', monospace"</span><span class="token punctuation">,</span>
  <span class="token comment">// 最后一行是否换行</span>
  <span class="token property">"editor.formatOnType"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 重新设定tabsize</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 每次保存的时候自动格式化</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"first"</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存时按eslint格式自动修复</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 对 .vue 文件的格式化</span>
  <span class="token property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"octref.vetur"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对 .html 文件格式化</span>
  <span class="token property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对 .ts 文件的格式化</span>
  <span class="token property">"[typescript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对 .js 文件的格式化</span>
  <span class="token property">"[javascript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[javascriptreact]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对 .json 文件的格式化</span>
  <span class="token property">"[jsonc]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对 .css 文件的格式化</span>
  <span class="token property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// eslint配置</span>
  <span class="token property">"eslint.alwaysShowStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token string">"typescript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
    <span class="token string">"jsonc"</span><span class="token punctuation">,</span>
    <span class="token string">"css"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 资源管理器对文件操作的设置</span>
  <span class="token property">"explorer.confirmDragAndDrop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.confirmDelete"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// 自动保存</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"afterDelay"</span><span class="token punctuation">,</span>
  <span class="token property">"files.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/.classpath"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.project"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.settings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.factorypath"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// github同步设置</span>
  <span class="token property">"git.autofetch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.confirmSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"git.enableSmartCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// htpp设置</span>
  <span class="token property">"http.proxy"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:2334"</span><span class="token punctuation">,</span>
  <span class="token property">"http.proxyAuthorization"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"http.proxyStrictSSL"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// java配置</span>
  <span class="token property">"java.home"</span><span class="token operator">:</span> <span class="token string">"D:\\winSoftware\\program\\RedHat\\java-11-openjdk-11.0.12-1"</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.format.insertSpaceBeforeFunctionParenthesis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token property">"liveServer.settings.donotShowInfoMsg"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 80字符换行</span>
  <span class="token property">"prettier.printWidth"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头函数的参数只有一个括号时，去除括号</span>
  <span class="token property">"prettier.arrowParens"</span><span class="token operator">:</span> <span class="token string">"avoid"</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token property">"prettier.singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否保留末尾分号</span>
  <span class="token property">"prettier.semi"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">//</span>
  <span class="token property">"prettier.trailingComma"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>

  <span class="token comment">// sync同步</span>
  <span class="token property">"sync.quietSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"sync.autoUpload"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 终端</span>
  <span class="token property">"terminal.integrated.fontFamily"</span><span class="token operator">:</span> <span class="token string">"'CascadiaCode', monospace"</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端字体大小</span>
  <span class="token property">"terminal.integrated.fontSize"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>

  <span class="token comment">// 关闭vetur的模板修正，避免跟eslint的代码修正冲突。</span>
  <span class="token property">"vetur.validation.template"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"vsintellicode.modify.editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"automaticallyOverrodeDefaultValue"</span><span class="token punctuation">,</span>
  <span class="token comment">//格式化.vue中html</span>
  <span class="token property">"vetur.format.defaultFormatter.html"</span><span class="token operator">:</span> <span class="token string">"js-beautify-html"</span><span class="token punctuation">,</span>
  <span class="token property">"vetur.format.defaultFormatterOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"js-beautify-html"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//属性强制折行对齐</span>
      <span class="token comment">// "wrap_attributes": "force-aligned"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"vetur.ignoreProjectWarning"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 主题颜色</span>
  <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"Atom One Dark"</span><span class="token punctuation">,</span>
  <span class="token comment">// 图标</span>
  <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"vscode-icons"</span><span class="token punctuation">,</span>
  <span class="token property">"vsicons.dontShowNewVersionMessage"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br></div></div></template>
