const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/App.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public','dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.m?js$/,
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
                        loader: MiniCssExtractPlugin.loader
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
                    },
                    {
                        loader: "postcss-loader",
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
            filename: "styles.css",
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './public/index.html'
        })
    ]
};
