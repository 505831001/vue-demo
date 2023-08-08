/**
 * 一、webpack前端工程化章节：
 * 什么是webpack前端工程化解决方案
 * 功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化等强大的功能。
 * 优点：让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性。
 * 注意：目前 Vue，React 等前端项目，基本上都是基于 webpack 进行工程化开发的。
 * 基本使用：
 * 01.创建空白项目（创建目录，比如：webpack-demo1），并且运行 npm init -y 命令，初始化包管理配置文件 package.json。
 * 02.新建 src 源码目录。
 * 03.新建 src/index.html 首页，和 src/index.js 首页脚本文件。
 * 04.初始化首页的基本结构，说白了就是写点东西哒。
 * 05.运行 npm install jquery -S 命令，安装 jQuery 类库。
 * 06.通过 ES6 模块化的方式导入 jQuery，这种已经通过 npm 方式安装，不必啰嗦。
 * 07.在项目中安装 webpack 前端化工程模块依赖包 webpack 和 webpack-cli。
 * 08.在项目中配置 webpack 前端化工程，根目录下创建文件 webpack.config.js。
 * module.exports = {
 *     mode: 'development' // mode 用来指定构建模式，可选值有 development 和 production。会被 package.json 中目录 scripts 下打包 build 属性覆盖。
 * }
 * 09.在项目中配置 package.json 包文件。
 * "scripts": {
 *     "dev": "webpack" // script 节点下的脚本，可以通过 npm run 执行。例如：npm run dev。
 * }
 * 10.在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建。
 * 11.自定义 webpack 打包的入口（Entry节点）与出口（Output节点）。
 * const path = require('path');
 * module.exports = {
 *     mode: 'development', // mode 用来指定构建模式，可选值有 development 和 production。
 *     entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径。
 *     output: {
 *         path: path.join(__dirname, './dist'), // 输出文件的存放路径。
 *         filename: "main.js" // 输出文件的名称。
 *     },
 * }
 * 12.可以让 webpack 监听项目源码的变化插件 webpack-dev-server，从而进行自动打包构建。
 * 13.在项目中配置 package.json 包文件。
 * "scripts": {
 *     "dev": "webpack serve" // script 节点下的脚本，可以通过 npm run 执行。例如：npm run dev。
 * }
 * 14.两次运行 npm run dev 命令，重新进行项目的打包，在浏览器中访问 http://localhost:8080/ 地址，查看实时打包效果。
 * 15.可以让 webpack 中的 HTML 插件，通过此插件自定制 index.html 页面的内容。
 * # npm init -y
 * # npm install jquery -S
 * # npm install webpack@5.42.1 webpack-cli@4.7.2 -D
 * # npm install webpack-dev-server@3.11.2 -D
 * # npm install html-webpack-plugin@5.3.2 -D
 * 16.自定义 webpack 打包的插件节点plugins，以及开发服务节点devServer。
 * const path = require('path');
 * // 导入HTML插件，得到一个构造函数。
 * const HtmlPlugin = require('html-webpack-plugin');
 * // 创建HTML插件的实例对象。
 * const htmlPlugin = new HtmlPlugin({
 *     template: './src/index.html',
 *     filename: './index.html'
 * });
 * module.exports = {
 *     mode: "development",                            // mode 用来指定构建模式，可选值有 development 和 production。
 *     entry: path.join(__dirname, './src/index.js'),  // 打包入口文件的路径。
 *     output: {
 *         path: path.join(__dirname, './dist'),       // 输出文件的存放路径。
 *         filename: "main.js"                         // 输出文件的名称。
 *     },
 *     plugins: [htmlPlugin],                          // 通过 plugins 节点，使 htmlPlugin 插件生效。
 *     devServer: {
 *         open: true,                                 // 初次打包完成后，自动打开浏览器。
 *         host: '127.0.0.1',                          // 实时打包所使用的主机地址。
 *         port: 80                                    // 实时打包所使用的端口号。
 *     }
 * }
 * 17.使用 webpack 插件加载器 loader 插件，协助 webpack 打包处理特定的文件模块。
 * 比如：css-loader处理.css文件、less-loader处理.less文件、babel-loader处理JS语法。
 * # npm init -y
 * # npm install jquery -S
 * # npm install webpack@5.42.1 webpack-cli@4.7.2 -D
 * # npm install webpack-dev-server@3.11.2 -D
 * # npm install html-webpack-plugin@5.3.2 -D
 * 比如：打包处理 CSS 文件
 * # npm install style-loader@3.0.0 css-loader@5.2.6 -D
 * 比如：打包处理 LESS 文件
 * # npm install less-loader@10.0.1 less@4.1.1 -D
 * 比如：打包处理 URL 路径相关的文件
 * # npm install url-loader@4.1.1 file-loader@6.2.0 -D
 * 比如：打包处理 JS 文件
 * # npm install babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
 * 配置：webpack.config.js
 * const path = require('path');
 * const HtmlPlugin = require('html-webpack-plugin');
 * const htmlPlugin = new HtmlPlugin({
 *     template: './src/index.html',
 *     filename: './index.html'
 * });
 * module.exports = {
 *     mode: "development", // mode 用来指定构建模式，可选值有 development 和 production。会被 package.json 中目录 scripts 下打包 build 属性覆盖。
 *     entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
 *     output: {
 *         path: path.join(__dirname, './dist'), // 输出文件的存放路径
 *         filename: "main.js" // 输出文件的名称
 *     },
 *     plugins: [htmlPlugin], // 通过 plugins 节点，使 htmlPlugin 插件生效
 *     devServer: {
 *         open: true, // 初次打包完成后，自动打开浏览器
 *         host: '127.0.0.1', // 实时打包所使用的主机地址
 *         port: 80 // 实时打包所使用的端口号
 *     },
 *     module: { // 所有第三方文件模块的匹配规则
 *         rules: [ // 文件后缀名的匹配规则
 *             {
 *                 test: /\.css/, // 表示匹配的文件类型
 *                 use: ['style-loader', 'css-loader'] // 表示对应要调用的加载器
 *             },
 *             {
 *                 test: /\.less$/, // 表示文件后缀名的匹配规则
 *                 use: ['style-loader', 'css-loader', 'less-loader']
 *             },
 *             {
 *                 test: /\.jpg|png|gif$/,
 *                 use: 'url-loader?limit=22229' // 用来指定图片的大小，单位是字节（Byte）
 *             },
 *             {
 *                 test: /\.js$/,
 *                 use: 'babel-loader',
 *                 exclude: /node_modules/
 *             }
 *         ]
 *     }
 * }
 * 18.在项目根目录下，创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下：
 * module.exports = {
 *     plugins: [
 *         [
 *             '@babel/plugin-proposal-decorators',
 *             {
 *                 legacy: true
 *             }
 *         ]
 *     ]
 * }
 * 19.打包发布。
 * 在项目中配置 package.json 包文件，新增 build 命令如下：
 * "scripts": {
 *     "test": "echo \"Error: no test specified\" && exit 1",
 *     "dev": "webpack serve", // 开发环境中，运行 dev 命令
 *     "build": "webpack --mode production" // 项目发布时，运行 build 命令
 * },
 * // 通过 --model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件进行代码压缩和性能优化。
 * // 通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。
 * 20.自动清理 dist 目录下的旧文件插件 clean-webpack-plugin。
 * # npm install clean-webpack-plugin@3.0.0 -D
 * 配置：webpack.config.js
 * const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 * const cleanWebpackPlugin = new CleanWebpackPlugin();
 * module.exports = {
 *     plugins: [htmlPlugin, cleanWebpackPlugin], // 通过 plugins 节点，使 htmlPlugin 插件生效。挂载创建清除插件到 plugins 节点。
 * }
 *
 *
 *
 *
 */
