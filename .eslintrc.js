module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:all",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "capitalized-comments": [
      "error",
      "always",
      {"ignoreConsecutiveComments": true}
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "func-style": [
      "error",
      "declaration"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": [
      "error",
      {"afterBlockComment": false,
        "afterLineComment": false,
        "allowArrayStart": true,
        "allowBlockStart": true,
        "allowClassStart": true,
        "allowObjectStart": true,
        "beforeBlockComment": true,
        "beforeLineComment": true}
    ],
    "max-len": [
      "error",
      {"code": 100,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "tabWidth": 2}
    ],
    "multiline-comment-style": [
      "error",
      "bare-block"
    ],
    "no-alert": "off",
    "no-console": "off",
    "no-magic-numbers": "warn",
    "no-multiple-empty-lines": [
      "error",
      {"max": 1,
        "maxBOF": 0,
        "maxEOF": 1}
    ],
    "no-use-before-define": [
      "error",
      {"classes": true,
        "functions": true,
        "variables": false}
    ],
    "no-var": "off",
    "no-void": [
      "error",
      {"allowAsStatement": true}
    ],
    "one-var": [
      "error",
      "never"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "prefer-const": "off",
    "prefer-named-capture-group": "warn",
    "quotes": [
      "error",
      "double"
    ],
    "require-unicode-regexp": "off",
    "semi": [
      "error",
      "always"
    ],
    "strict": "off",
    "vars-on-top": "off"
  }
};
