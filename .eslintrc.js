module.exports = {

  "env": {
    'browser': true,
    'node': true,
    'es6': true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },

  "plugins": ["react"],

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  // "extends": ["airbnb"],


  /**
  * ERROR Level: Severity should be one of the following:
  *  0 = off
  *  1 = warn
  *  2 = error
  */
  "rules": {
    "array-bracket-spacing": [2, "never"], // ES6
    "arrow-parens": [2, "as-needed"], // ES6
    "arrow-spacing": [2, { "before": true, "after": true }], // ES6
    "camelcase": [2, { "properties": "never" }], // require camelCase for var and property names, disallowing underscore notation
    "comma-dangle": [2, "never"], // require or disallow trailing commas
    "indent": [2, 2, { "SwitchCase": 2 }],
    "no-console": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "one-var": [2, { var: "never", let: "never", const: "never" }], // This rule enforces variables to be declared either
    "padded-blocks": [0, "never"],
    "spaced-comment": [2, "always", { "exceptions": ["-", "+", "*"] }],
    "strict": [0, "global"],
    "template-curly-spacing": [2, "always"], // ES6: This rule aims to maintain consistency around the spacing inside of

    /**
    * ESLint - React:
    * https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    */
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2]
  },


  "globals": {  }

}
