# VScode

## 系统配置

## 常用快捷键

### 	注释代码

#### 		Ctrl + /

### HTML代码实时调试

#### alt+L加alt+O

#### 		alt+L,加alt+C

### 同步环境

#### 	Shift + Alt + U上传到云端

####		Shift + Alt + D下载云端的配置

## 插件

Partial Diff：文档比较

选中一代码，右键**Select Text for Compare**，选中另外一部分代码，右键**Compare Text with Previous Selection**即可。



Settings Sync

同步环境

`Shift + Alt + U`上传到云端

`Shift + Alt + D`下载云端的配置



Monokai Pro：主题

Beautify：格式化代码，保存就行

prettier：格式化代码

ESLint：自动修复代码

Auto Close Tag：自动添加HTML/XML关闭标签

Auto Rename Tag：自动重命名配对的HTML/XML标签



Tabnine：智能提示代码

HTML CSS Support：htmlAndCSS代码提示

Vetur：对Vue的格式化代码，语法高亮显示

Code Spell Checker ：拼写检查



Code Runner自动搭建语言环境，右键Run code

Live Server：HTML代码实时调试

Remote-SSH：远程SSH

Remote Development：远程调试



> **自己看情况装**
>
> eslint-config-prettier
>
> 这是一个ESLint配置，它包含规则的配置（某些规则是打开，关闭还是特殊配置） . 此配置允许您通过关闭可能与Prettier冲突的格式相关规则，将Prettier与其他ESLint配置（如[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)）一起使用 . 使用此配置，您不需要使用 `prettier-eslint` ，因为在Prettier格式化代码后，ESLint不会抱怨 . 但是，您需要单独运行 `prettier` 命令 .
>
> eslint-plugin-prettier
>
> 这是一个ESLint插件，意味着它包含ESLint将检查的其他规则的实现 . 这个插件使用了Prettier，当你的代码与Prettier的预期输出不同时会引发问题 . 这些问题可以通过 `--fix` 自动修复 . 使用此插件，您无需单独运行 `prettier` 命令，该命令将作为插件的一部分运行 . 此插件不会关闭与格式相关的规则，如果您手动或通过 `eslint-config-prettier` 看到此类规则的冲突，则需要将其关闭 .

### 配置

```json
{
  "C_Cpp.updateChannel": "Insiders",
  // CodeRunner在终端运行
  "code-runner.runInTerminal": true,

  "diffEditor.ignoreTrimWhitespace": false,
  // 代码编辑配置
  "editor.fontSize": 22,
  // 是否启用字体连字
  "editor.fontLigatures": true,
  // 字体
  "editor.fontFamily": "'JetBrains Mono', '思源黑体', Consolas, 'Courier New', monospace",
  // 最后一行是否换行
  "editor.formatOnType": false,
  "editor.formatOnPaste": true,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "editor.suggestSelection": "first",
  // 保存时按eslint格式自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // 对 .vue 文件的格式化
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // 对 .html 文件格式化
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 对 .ts 文件的格式化
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 对 .js 文件的格式化
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 对 .json 文件的格式化
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 对 .css 文件的格式化
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // eslint配置
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "html",
    "vue",
    "typescript",
    "javascript",
    "javascriptreact",
    "jsonc",
    "css"
  ],

  // 资源管理器对文件操作的设置
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,

  // 自动保存
  "files.autoSave": "afterDelay",
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },

  // github同步设置
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,

  // htpp设置
  "http.proxy": "http://127.0.0.1:2334",
  "http.proxyAuthorization": null,
  "http.proxyStrictSSL": false,

  // java配置
  "java.home": "D:\\winSoftware\\program\\RedHat\\java-11-openjdk-11.0.12-1",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,

  "liveServer.settings.donotShowInfoMsg": true,

  // 80字符换行
  "prettier.printWidth": 80,
  // 箭头函数的参数只有一个括号时，去除括号
  "prettier.arrowParens": "avoid",
  // 使用单引号
  "prettier.singleQuote": true,
  // 是否保留末尾分号
  "prettier.semi": false,
  //
  "prettier.trailingComma": "es5",

  // sync同步
  "sync.quietSync": false,
  "sync.autoUpload": true,

  // 终端
  "terminal.integrated.fontFamily": "'CascadiaCode', monospace",
  // 终端字体大小
  "terminal.integrated.fontSize": 18,

  // 关闭vetur的模板修正，避免跟eslint的代码修正冲突。
  "vetur.validation.template": false,
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  //格式化.vue中html
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      //属性强制折行对齐
      // "wrap_attributes": "force-aligned"
    }
  },
  "vetur.ignoreProjectWarning": true,

  // 主题颜色
  "workbench.colorTheme": "Atom One Dark",
  // 图标
  "workbench.iconTheme": "vscode-icons",
  "vsicons.dontShowNewVersionMessage": true
}
```





















