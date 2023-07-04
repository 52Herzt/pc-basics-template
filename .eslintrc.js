module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // Eslint解析器指定
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Use babel-eslint for JavaScript
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    // With import/export syntax
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vue/no-v-model-argument': 'off',
    'simple-import-sort/imports': 'error', //import exports 自动排序
    'simple-import-sort/exports': 'error',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off', //关闭组件命名规则
    'vue/require-name-property': 'error', //组件必须设定name属性
    'vue/component-definition-name-casing': ['error', 'PascalCase'], //限制组件命名为大驼峰
    'vue/camelcase': 'warn',
    'vue/eqeqeq': 'warn', //template中必须使用 === and !==
    'vue/custom-event-name-casing': 'warn', //自定义事件强制统一大小写
    'vue/html-comment-content-spacing': 'warn', //注释格式限定
    'vue/padding-line-between-blocks': ['error', 'always'], //块级分割
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }], //强制组件顶级标签顺序
    'vue/match-component-file-name': [
      //强制组件名称与文件名一致
      'error',
      {
        extensions: ['jsx', 'tsx', 'vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      //template中使用组件强制统一为大驼峰
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],
    'vue/no-unused-properties': [
      //禁止定义后未使用的属性存在(可注释掉)
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods'],
      },
    ],
    'vue/html-self-closing': [
      //标签自关闭
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
