# ESlint-Pretter

https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN

https://cn.eslint.org/docs/rules/

https://prettier.io/docs/en/options.html

## .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'no-unused-vars': 1,
    // 有默认值的参数必须放在最后
    'default-param-last': 'warn',
    // 禁止方向错误的 for 循环
    'for-direction': 'warn',
    // const 禁止重新赋值
    'no-const-assign': 'warn',
    // 不使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warm' : 'off',
    // 禁止 if else 的条件判断中出现重复的条件
    'no-dupe-else-if': 'warn',
    // 禁止重复导入模块
    'no-duplicate-imports': 'warn',
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 行尾分号是否加分号,默认加 always,不加never
    semi: ['warn', 'never'],
    'prettier/prettier': [
      'error',
      {
        // 缩进长度，默认2
        tabWidth: 2,
        // 行尾是否需要有分号，默认true
        semi: false,
        // 是否使用单引号, 默认false
        singleQuote: true,
        // 给箭头函数的参数加括号，即使一个也加, 默认加括号->always,不加->avoid
        arrowParens: 'avoid',
      }
    ]
  }
};
```



## .prettierrc

```json
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid",
}
```



