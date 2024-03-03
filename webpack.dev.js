const path = require('path');
const common = require('./webpack.config.js')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        hot: true
    }
});
