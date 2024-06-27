const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports={
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new ReactRefreshWebpackPlugin()
    ],
    module: {
        rules: [
            {                
                test: /\.css$/i,                
                use: [          
                    "style-loader",        
                    "css-loader"
                ]
            },              
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{ targets: "defaults", "debug":true, "useBuiltIns":"usage", "corejs":3 }], ['@babel/preset-react',{runtime:"automatic"}]],
                        plugins: [require.resolve('react-refresh/babel')]
                    }
                }
            },
        ]
    },
    devServer: {
        hot: true,
        port: 3000,
        open:true,
        historyApiFallback: true, 
        historyApiFallback: {
          disableDotRule: true
        }
    }
}