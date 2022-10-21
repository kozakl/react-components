module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-color-mod-function': {
            importFrom: './src/style.css'
        }
    }
};
