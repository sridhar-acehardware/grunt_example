const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: './compiled/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    // "module": {
    //     rules: [
    //       {
    //         "exclude": "/node_modules/",
    //         "include": path.resolve('./react'),
    //         "loader": "babel-loader",
    //         "options": {
    //           "presets": ["es2015", "react"]
    //         },
    //         "test": /\.jsx?$/
    //       }
    //     ]
    //   }
    // module: {
    //     rules: [{
    //             test: /\.js$/,
    //             exclude: ['/node_modules'],
    //             use: [{
    //                 loader: 'babel-loader'
    //             }],
    //         }
    //     ]
    // },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: 'index.html'
    //     }),
    //     new CleanWebpackPlugin(),
    // ]
}