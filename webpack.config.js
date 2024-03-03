const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        mode: argv.mode,
        devtool: argv.mode === 'development' ? 'inline-source-map' : false,
        entry: './src/App.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public', 'dist'),
            clean: true,
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css"
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./public/index.html",
                minify: argv.mode === 'production'
            })
        ],
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
    }

    if (argv.mode === 'development') {
        config.devServer = {
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname, 'public')
            },
            compress: true,
            hot: true
        }
    }

    return config;
};
