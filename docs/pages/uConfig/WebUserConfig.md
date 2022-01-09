# 前端自用配置

https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN

https://cn.eslint.org/docs/rules/

https://prettier.io/docs/en/options.html

## .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 行尾分号是否加分号,默认加 always,不加never
    semi: ['warn', 'never'],
  },
}
```



## .prettierrc

```json
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```



## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "importHelpers": true,
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules"]
}
```



## vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      apis: path.resolve(__dirname, 'src/apis'),
      components: path.resolve(__dirname, 'src/components'),
      dirs: path.resolve(__dirname, 'src/directives'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      styles: path.resolve(__dirname, 'src/styles'),
      typings: path.resolve(__dirname, 'src/typings'),
      utils: path.resolve(__dirname, 'src/utils'),
      views: path.resolve(__dirname, 'src/views'),
    },
  },
})
```



## package.json

### vite

```sh
yarn add eslint prettier-eslint eslint-config-prettier eslint-plugin-prettier @types/node vuex@next vue-router@4 -D
```

```json
{
  "name": "vite-ts-todo",
  "version": "0.0.0",
  "license": "ISC",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "auto": "prettier --write src/**/*.{html,js,jsx,ts,tsx,json,css,scss,less} & eslint --fix --ext src/**/*.{html,js,jsx,ts,tsx,json,css,scss,less}"
  },
  "dependencies": {
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@types/node": "^17.0.8",
    "@vitejs/plugin-vue": "^2.0.0",
    "eslint": "^8.6.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier-eslint": "^13.0.0",
    "typescript": "^4.4.4",
    "vite": "^2.7.2",
    "vue-router": "4",
    "vue-tsc": "^0.29.8",
    "vuex": "^4.0.2"
  }
}
```

