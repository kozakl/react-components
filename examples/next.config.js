const withTM = require('next-transpile-modules')([
    '@kozakl/components',
    '@kozakl/date-fns',
    '@kozakl/hooks',
    '@kozakl/states',
    '@kozakl/transitions',
    '@kozakl/utils'
]);

module.exports = withTM({});
