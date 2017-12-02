const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        })]
};