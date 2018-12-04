module.exports = {
    plugins: {
        'postcss-import': {
            root: __dirname
        },
        'postcss-each': {},
        'postcss-for': {},
        'postcss-extend': {},
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            features: {
                'custom-properties': {
                    preserve: false
                }
            }
        },
        'postcss-color-function': {}
    }
};
