const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


module.exports = {
    mode: 'production',
    //入口文件的路径
    // entry: "./src/index.tsx",
    entry: {
        login: path.resolve(__dirname, 'src/login.tsx'),
        index: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        //打包的输出路径
        // path: "dist",
        
        path: path.resolve(__dirname, 'dist'),
        // filename: "bundle.js"
        
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    // 添加需要解析的文件格式
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors', 
        //     chunks: ['login','index'], 
        //     minChunks: 2 
        // }),
        new HtmlWebpackPlugin({ 
            filename: './login.html', 
            template: './src/login.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'login']
        }),
        new HtmlWebpackPlugin({ 
            filename: './index.html', 
            template: './src/index.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'index']            
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8081/index.html' })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    }
}