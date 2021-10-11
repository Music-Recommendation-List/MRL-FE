module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["off"],
    quotes: ["off", "single"],
    semi: ["off"],
    "comma-dangle": ["error", "never"],
  },
};
