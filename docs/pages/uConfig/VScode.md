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



- 主题
  - Atom One Dark Theme
- Base
  - C/C++
  - Maven for Java
  - Debugger for Java
  - Test Runner for Java
  - Extension Pack for Java
  - Project Manager for Java
  - Language Support for Java(TM) by Red Hat
  - Python
  - Pylance
- HTML
  - HTML CSS Support：代码提示
  - Auto Close Tag：自动添加HTML/XML关闭标签
  - Auto Rename Tag：自动重命名配对的HTML/XML标签
  - IntelliSense for CSS class names in HTML：根据引入CSS类文件提示class
  - Live Server：动态页面
  - Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more
- CLI Base
  - Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets for Visual studio code
  - SASS
  - ESLint
  - TSLint
- CLI
  - ES7 React/Redux/GraphQL/React-Native snippets：React代码提示补全
  - JavaScript (ES6) code snippets：代码提示
  - Prettier - Code formatter：格式化代码
  - Vetur：对Vue的格式化代码，语法高亮显示
  - Vue Language Features (Volar)：对setup的支持
  - Vue 3 Snippets
- 附录
  - Visual Studio IntelliCode
  - vscode-icons：图标
  - Code Runner
  - Code Spell Checker：拼写检查
  - Partial Diff：文档比较
  - Settings Sync：同步
  - npm
  - Jupyter
  - Jupyter Keymap
  - Jupyter Notebook Renderers







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
  "editor.fontSize": 20,
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
  // 启用ESLint作为已验证文件的格式化程序
  "eslint.format.enable": true,

  // 对 .vue 文件的格式化
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
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
  // 对 .scss 文件的格式化
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // eslint配置
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "vue",
    "html",
    "typescript",
    "javascript",
    "javascriptreact",
    "jsonc",
    "css",
    "scss"
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
  // "java.home": "D:\\winSoftware\\program\\RedHat\\java-11-openjdk-11.0.12-1",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,

  "liveServer.settings.donotShowInfoMsg": true,

  // 80字符换行
  "prettier.printWidth": 80,
  // 箭头函数的参数只有一个括号时，去除括号
  "prettier.arrowParens": "avoid",
  // 使用单引号
  "prettier.singleQuote": true,
  // 取消尾分号
  "prettier.semi": false,
  // 尾随逗号
  "prettier.trailingComma": "es5",

  // sync同步
  "sync.quietSync": false,
  "sync.gist": "a2091874af8368dda2d422faae3e7e2a",
  "sync.autoUpload": true,

  // 终端
  "terminal.integrated.fontFamily": "'CascadiaCode', monospace",
  // 终端字体大小
  "terminal.integrated.fontSize": 18,

  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  // 关闭vetur的模板修正，避免跟eslint的代码修正冲突。
  "vetur.validation.template": false,
  //格式化.vue中html
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.options.tabSize": 2,
  // 设置是否使用tab键缩进 默认false，即不使用，该配置将被所有格式化器继承
  "vetur.format.options.useTabs": false,
  "vetur.ignoreProjectWarning": true,
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      // 是否加分号
      "semi": false,
      // 是否用单引号
      "singleQuote": true,
      "trailingComma": "es5"
    }
  },

  // 主题颜色
  "workbench.colorTheme": "Atom One Dark",
  // 图标
  "workbench.iconTheme": "vscode-icons",

  "vsicons.dontShowNewVersionMessage": true
}

```





















