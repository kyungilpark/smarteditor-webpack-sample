const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            "smarteditor2/lib": "smarteditor2/dist/js/lib",
            "smarteditor2/service": "smarteditor2/dist/js/service"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            "node_modules/smarteditor2/dist"
        ]),
        new HtmlWebpackPlugin({
            title: "smarteditor2 sample",
            template: "./src/index.html"
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};