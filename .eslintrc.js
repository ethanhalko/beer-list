module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    commonjs: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint', 'vitest'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  overrides: [
    // covered by ts linting
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'max-classes-per-file': 1,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none'
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'comma-dangle': [2, 'only-multiline'],
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'object-shorthand': [
      2,
      'always',
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true
      }
    ],
    'computed-property-spacing': [2, 'never'],
    'eol-last': 2,
    'max-depth': [1, 3],
    'no-else-return': 2,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-unreachable': 2,
    'no-unexpected-multiline': 2,
    'no-constant-condition': 0,
    'no-var': 2,
    'padding-line-between-statements': [1, { blankLine: 'always', prev: '*', next: 'return' }],
    quotes: [1, 'single', 'avoid-escape'],
    'quote-props': [1, 'as-needed'],
    semi: [2, 'always'],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'space-unary-ops': 2,
    'space-in-parens': [1, 'never'],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-blocks': 2,
    'no-unused-labels': 1,
    // Vue rules:
    'vue/order-in-components': 0,
    'vue/require-name-property': 2,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-useless-v-bind': 2,
    'vue/no-useless-mustaches': [
      2,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-v-model-argument': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/no-setup-props-destructure': 0,
    'vue/no-v-for-template-key': 0,
    'vue/require-explicit-emits': 0
  }
};
