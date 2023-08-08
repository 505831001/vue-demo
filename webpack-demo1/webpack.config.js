
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
    mode: "development", // mode 用来指定构建模式，可选值有 development 和 production。会被 package.json 中目录 scripts 下打包 build 属性覆盖。
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件的存放路径
        filename: "js/main.js" // 输出文件的名称
    },
    plugins: [htmlPlugin, cleanWebpackPlugin], // 通过 plugins 节点，使 htmlPlugin 插件生效。挂载创建清除插件到 plugins 节点。
    devServer: {
        open: true, // 初次打包完成后，自动打开浏览器
        host: '127.0.0.1', // 实时打包所使用的主机地址
        port: 80 // 实时打包所使用的端口号
    },
    module: { // 所有第三方文件模块的匹配规则
        rules: [ // 文件后缀名的匹配规则
            {
                test: /\.css/, // 表示匹配的文件类型
                use: ['style-loader', 'css-loader'] // 表示对应要调用的加载器
            },
            {
                test: /\.less$/, // 表示文件后缀名的匹配规则
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|gif$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 22228, // 用来指定图片的大小，单位是字节（Byte）
                        outputPath: 'image', // 明确指定要把包生成的图片文件，存储到 dist 目录下的 image 文件夹中
                    }
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}



