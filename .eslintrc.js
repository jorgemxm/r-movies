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
            "impliedStrict": true
        }
    },

    "extends": "eslint:recommended",

    /**
     * ERROR Level: Severity should be one of the following:
     *  0 = off
     *  1 = warn
     *  2 = error
    */
    "rules": {
        "camelcase": [2, { "properties": "never" }], // require camelCase for var and property names, disallowing underscore notation
        "no-console": 0
    },

    "globals": { }
}
