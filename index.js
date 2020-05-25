module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "never",
      },
    ],
    "no-else-return": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-delete-var": "error",
    "no-undef": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
      },
    ],
    "handle-callback-err": "error",
    "no-path-concat": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
  },
};
