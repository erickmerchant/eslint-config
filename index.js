module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': 'error',

    // imports and exports
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',

    // control
    'default-case-last': 'error',
    'no-else-return': 'error',
    'no-lonely-if': 'error',

    // comparison
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'never'
      }
    ],
    // 'no-mixed-operators': 'error',

    // numbers
    'no-floating-decimal': 'error',
    'no-loss-of-precision': 'error',
    'radix': 'error',

    // strings
    'no-multi-str': 'error',
    'no-octal-escape': 'error',
    'no-template-curly-in-string': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',

    // regex
    'no-useless-backreference': 'error',
    'prefer-regex-literals': 'error',

    // array
    'array-callback-return': 'error',
    'no-array-constructor': 'error',

    // functions
    'no-loop-func': 'error',
    'prefer-arrow-callback': 'error',

    // parameters
    'default-param-last': 'error',

    // return
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-useless-return': 'error',

    // errors
    'no-throw-literal': 'error',

    // promises
    'no-await-in-loop': 'error',
    'prefer-promise-reject-errors': 'error',

    // vars
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ],

    // misc
    'require-atomic-updates': 'error',
    'symbol-description': 'error',

    // old school
    'no-caller': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',

    // deprecated (node)
    'handle-callback-err': 'error',
    'no-path-concat': 'error'
  }
}
