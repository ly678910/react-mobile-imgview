const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            use: 'url-loader?limit=8192'
        },
        {
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: [__dirname, path.resolve(__dirname, './../src')]
        }
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
}
