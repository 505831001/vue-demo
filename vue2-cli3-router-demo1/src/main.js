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
 * 二、vue基础章节：
 * MVVM 工作原理？
 * MVVM是vue实现数据驱动视图和双向数据绑定的核心原理。
 * MVVM是指Model、ViewModel、View。
 * 03.View      表示当前页面所渲染的DOM结构。
 * 02.ViewModel 表示vue的实例，它是MVVM的核心。
 * 01.Model     表示当前页面渲染时所依赖的数据源。
 * ViewModel作为 MVVM 的核心，是它把当前页面的数据源 Model 和页面的结构 View 连接在了一起。
 * 当数据源发生变化时，会被 ViewModel 监听到，VM 会根据最新的数据源自动更新页面的结构。
 * 当表单元素的值发生变化时，也会被 VM 监听到，VM 会把变化过后最新的值自动同步到 Model 数据源中。
 *
 * vue-devtools 调试工具？
 * vue 官方提供的 vue-devtools 调试工具，能够方便开发者对 vue 项目进行调试与开发。
 * Chrome 浏览器在线安装 vue-devtools ：
 * https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/
 * FireFox 浏览器在线安装 vue-devtools ：
 * https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/
 * 点击 Chrome 浏览器右上角的 按钮，选择更多工具 - 扩展程序 - Vue.js devtools 详细信息，并勾选如下的两个选项：
 * 允许此扩展程序读取和更改您在所访问的网站上留存的所有数据。
 * 允许访问文件网址。
 * 在浏览器中访问一个使用了 vue 的页面，打开浏览器的开发者工具，切换到 Vue 面板，即可使用 vue-devtools 调试当前的页面。
 *
 * vue 指令？
 * 第一种创建 Vue 实例对象方式。
 * const vm = new Vue({
 *     // 3.2.指定Model数据源。
 *     data: {
 *         username: 'Jessica'
 *     }
 * });
 * // 3.1.指定当前vm实例对象要控制页面的哪个区域。
 * vm.mount('#app');
 * 第二种创建 Vue 实例对象方式。
 * const vm = new Vue({
 *     // 3.1.el 属性指向的选择器，就是View视图区域。
 *     el: '#app',
 *     // 3.2.data 属性指向的对象，就是Model数据源。
 *     data: {
 *         username: 'Jessica'
 *     }
 * });
 * 第三种创建 Vue 实例对象方式。
 * export default {
 *     data() {
 *         return {
 *             username: 'Jessica'
 *         }
 *     },
 * }
 * import Vue from 'vue';
 * import App from '@/App.vue';
 * import router from "@/router/index.js";
 * new Vue({ render: h => h(App), router: router }).$mount('#app');
 * vue 中的指令按照不同的用途可以划分为如下 6 大类：
 * 01).内容渲染指令（内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下三个：）
 *     {{}}    使用插值表达式，将对应的值渲染到元素的内容节点中。
 *     v-text  指令和插值表达式只能渲染纯文本内容。
 *     v-html  如果需要把包含HTML标签的字符串渲染为页面的HTML元素，则需要用到v-html这个指令。
 * 02).属性绑定指令
 *     v-bind  如果需要为元素的属性动态绑定属性值，则需要用到v-bind属性绑定指令。
 * 03).事件绑定指令
 *     v-on    提供了v-on事件绑定指令，用来辅助程序员为DOM元素绑定事件监听。
 * 04).双向绑定指令
 *     v-model 提供了v-model双向数据绑定指令，用来辅助开发者在不操作DOM的前提下，快速获取表单的数据。
 * 05).条件渲染指令（条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个：）
 *     v-if    指令会动态地创建或移除DOM元素，从而控制元素在页面上的显示与隐藏；
 *     v-show  指令会动态为元素添加或移除style="display:none;"样式，从而控制元素的显示与隐藏；
 * 06).列表渲染指令
 *     v-for   提供了v-for列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。v-for指令需要使用(item in items)形式的特殊语法，其中：items是待循环的数组，item是被循环的每一项。
 *
 * 过滤器？
 * filters 过滤器是vue为开发者提供的功能，常用于文本的格式化。过滤器可以用在两个地方：插值表达式和v-bind属性绑定。
 * 过滤器应该被添加在 JavaScript 表达式的尾部，由【管道符】进行调用，示例代码如下：
 * 01).自定义私有过滤器
 * <!-- 在双大括号中通过【管道符】竖线调用 capitalize 过滤器，对 message 的值进行需求处理。 -->
 * <p>{{ message | capitalize }}</p>
 * export default {
 *   data() {
 *     return {
 *       message: uuid.v4()
 *     };
 *   },
 *   filters: {
 *     capitalize(str) {
 *       return str.toString().replaceAll('-', '').toUpperCase();
 *     }
 *   }
 * }
 * 02).自定义全局过滤器
 * 在 filters 节点下定义的过滤器，称为【私有过滤器】，因为它只能在当前vm实例所控制的el区域内使用。
 * 如果希望在多个vue实例之间共享过滤器，则可以按照如下的格式定义全局过滤器：
 * Vue.filter('capitalize', (str) => { return str.toString().replaceAll('-', '').toUpperCase() });
 * 03).自定义多个私有过滤器
 * <!-- 在双大括号中通过【管道符】竖线调用 capitalize 过滤器，对 message 的值进行需求处理。 -->
 * <p>{{ message | capitalize | other }}</p>
 * export default {
 *   data() {
 *     return {
 *       message: uuid.v4()
 *     };
 *   },
 *   filters: {
 *     // 此过滤器函数处理字符替换需求
 *     capitalize(str) {
 *       return str.toString().replaceAll('-', '');
 *     },
 *     // 此过滤器函数处理字符大写转换需求
 *     other(str) {
 *       return str.toUpperCase();
 *     }
 *   }
 * }
 * 04).自定义多个私有多参数过滤器
 * <!-- 在双大括号中通过【管道符】竖线调用 capitalize 过滤器，对 message 的值进行需求处理。 -->
 * <p>{{ message | capitalize | other | addition(uuid.v4(), '2023') }}</p>
 * export default {
 *   name: 'Home',
 *   data() {
 *     return {
 *       message: uuid.v4(),
 *       uuid: uuid
 *     };
 *   },
 *   filters: {
 *     capitalize(str) {
 *       return str.toString().replaceAll('-', '');
 *     },
 *     other(str) {
 *       return str.toUpperCase();
 *     },
 *     addition(str, arg1, arg2) {
 *       return str + arg1 + arg2;
 *     }
 *   }
 * }
 *
 * 侦听器？
 * watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。
 * 默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 属性选项。
 * 账号：<input type="text" name="username" id="username" v-model="username">
 * <span>侦听用户账号：{{ username }}</span>
 * export default {
 *   data() {
 *     return {
 *       username: ''
 *     };
 *   },
 *   filters: {},
 *   watch: {
 *     // 侦听 username 属性的值的变化
 *     username(newVal, oldVal) {
 *       console.log(`旧值：${newVal}，新值：${oldVal}`);
 *     }
 *   }
 * }
 * 场景：监听 username 值的变化，并使用 axios 发起 Ajax 请求，检测当前输入的用户名是否可用：
 * watch: {
 *     async username(newVal) {
 *         if ('' === newVal) {
 *             return;
 *         }
 *         const { data: res } = await axios.get('http://127.0.0.1:3307/checkAccount/' + newVal);
 *         console.log(res);
 *     }
 * }
 * 默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 属性选项。
 * 示例代码如下：
 * watch: {
 *     username: {
 *         handler: async function(newVal) {
 *             if ('' === newVal) {
 *                 return;
 *             }
 *             const { data: res } = await axios.get('http://127.0.0.1:3307/checkAccount/' + newVal);
 *             console.log(res);
 *         }
 *         // 表示页面初次渲染好之后，就立即触发当前的 watch 监听器。
 *         immediate: true
 *     }
 * }
 * 如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 属性选项，
 * 代码示例如下：
 * watch: {
 *     username: {
 *         handler: async function(newVal) {
 *             if ('' === newVal) {
 *                 return;
 *             }
 *             const { data: res } = await axios.get('http://127.0.0.1:3307/checkAccount/' + newVal);
 *             console.log(res);
 *         }
 *         // 表示页面初次渲染好之后，就立即触发当前的 watch 监听器。
 *         immediate: true,
 *         // 表示侦听的是一个对象，如果对象中的属性的属性值发生变化，则被监听到。
 *         deep: true
 *     }
 * }
 * 如果只想监听对象中单个属性的变化，则可以按照如下的方式定义 watch 侦听器：
 * el: '#app',
 * data: {
 *     userInfo: {
 *         username: 'admin',
 *         password: '12345'
 *     }
 * },
 * watch: {
 *     'userInfo.username': {
 *         handler(newVal) {
 *             console.log(newVal);
 *         }
 *     }
 * }
 *
 * 计算属性？
 * 计算属性指的是通过一系列运算之后，最终得到一个属性值。
 * 这个动态计算出来的属性值可以被模板结构或 methods 方法使用。示例代码如下：
 * const vm = new Vue({
 *     el: '#app',
 *     data: {
 *         r: 0,
 *         g: 0,
 *         b: 0
 *     },
 *     computed: {
 *         rgb() {
 *             return `rgb(${this.r}, ${this.g}, ${this.b})`;
 *         }
 *     },
 *     methods: {
 *         show() {
 *             console.log(this.rgb);
 *         }
 *     }
 * });
 * 特点：
 * 1).虽然计算属性在声明的时候被定义为方法，但是计算属性的本质是一个属性。
 * 2).计算属性会缓存计算的结果，只有计算属性依赖的数据变化时，才会重新进行运算。
 *
 * vue-cli脚手架？
 * 什么是单页面程序？
 * 单页面应用程序（英文名：Single Page Application）简称 SPA，顾名思义，
 * 指的是一个 Web 网站中只有唯一的一个 HTML 页面，所有的功能与交互都在这唯一的一个页面内完成。
 * 什么是vue-cli脚手架工具？
 * vue-cli 是 Vue.js 开发的标准工具。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。
 * 引用自 vue-cli 官网上的一句话：程序员可以专注在撰写应用上，而不必花好几天去纠结 webpack 配置的问题。
 * 中文官网：https://cli.vuejs.org/zh/
 * vue-cli安装：
 * # 查看node版本
 * C:\Users\Administrator>node -v
 * v16.20.1
 * # 查看npm版本
 * C:\Users\Administrator>npm -v
 * 9.7.2
 * # 查看cnpm版本
 * C:\Users\Administrator>cnpm -v
 * cnpm@9.2.0 (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cnpm\lib\parse_argv.js)
 * npm@9.7.2 (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cnpm\node_modules\npm\index.js)
 * node@16.20.1 (C:\Program Files\nodejs\node.exe)
 * npminstall@7.9.0 (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cnpm\node_modules\npminstall\lib\index.js)
 * prefix=C:\Program Files\nodejs
 * registry=https://registry.npmmirror.com
 * # 升级cnpm版本
 * C:\Users\Administrator>npm install cnpm -g
 * # 升级npm版本（不建议：指定版本）
 * C:\Users\Administrator>cnpm install npm@9.7.2 -g
 * # 查看npm详情
 * C:\Users\Administrator>npm config list
 * # 查看nvm版本
 * C:\Users\Administrator>nvm -v
 * # 查看node当前使用版本
 * C:\Users\Administrator>nvm list
 * # 查看node可以安装版本
 * C:\Users\Administrator>nvm list available
 * # 安装vue版本
 * C:\Users\Administrator>cnpm install vue
 * # 安装vue-cli脚手架2版本（基于webpack3打造）
 * C:\Users\Administrator>cnpm install --global vue-cli
 * C:\Users\Administrator>vue init webpack vue2-cli2-demo2
 * # 安装vue-cli脚手架3版本（基于webpack4打造）
 * C:\Users\Administrator>cnpm install --global @vue/cli
 * C:\Users\Administrator>vue create vue2-cli3-demo4
 * # 查看vue-cli脚手架版本
 * C:\Users\Administrator>vue -V
 * @vue/cli 5.0.8
 * # 区别：
 * 1、vue-cli2是基于webpack3打造的。
 * 2、vue-cli3是基于webpack4打造的。
 * 2、vue-cli3的仓库github由原有独立的仓库github迁移到了vue项目下。
 * 2、vue-cli3的项目架构完全抛弃了vue-cli2的原有架构，vue-cli3的设计更加抽象和简洁。
 * 2、vue-cli3提供了vue ui命令，提供了可视化配置，更加人性化。
 * 2、vue-cli3也学习了rollup的零配置思路，所以项目初始化后，没有了以前熟悉的build目录，也就没有了webpack.base.config.js、webpack.dev.config.js、webpack.prod.config.js等配置文件。
 * 2、vue-cli3的设计原则是0配置，移除的配置文件根目录下的build和config等目录。
 * 2、vue-cli3移除了static文件夹，新增public文件夹，并且将index.html文件移动到了public文件夹中。
 * # 安装：
 * C:\Users\Administrator>vue create vue2-cli3-demo4
 * # 选择：
 * Vue CLI v5.0.8
 * ? Please pick a preset:
 *   Default ([Vue 3] babel, eslint)
 *   Default ([Vue 2] babel, eslint)
 * > Manually select features
 * # 选择：
 * Vue CLI v5.0.8
 * ? Please pick a preset: Manually select features
 * ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 * >(1) Babel
 * >( ) TypeScript
 * >( ) Progressive Web App (PWA) Support
 * >(4) Router
 * >(5) Vuex
 * >(6) CSS Pre-processors
 * >(7) Linter / Formatter
 * >( ) Unit Testing
 * >( ) E2E Testing
 * # 选择：
 * Vue CLI v5.0.8
 * ? Please pick a preset: Manually select features
 * ? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter
 * ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
 *   3.x
 * > 2.x
 * # 选择：
 * ? Please pick a preset: Manually select features
 * ? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter
 * ? Choose a version of Vue.js that you want to start the project with 2.x
 * ? Use class-style componet syntax? ( )
 * ? Use Babel alongside TypeScript? ( )
 * ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y)
 * ? Pick a CSS pre-processors: (Less)
 *     Sass/SCSS (with dart-sass)
 *   > Less
 *     Stylus
 * ? Pick a linter / formatter config: (ESLint with error prevention only)
 *   > ESLint with error prevention only
 *     ESLint + Airbnb config
 *     ESLint + Standard config
 *     ESLint + Prettier
 * ? Pick additional lint features: (Lint on save)
 *   > Lint on save
 *     Lint and fix on commit
 * ? Where do you prefer placing config for Babel, ESLint, etc.? (In dedicated config files)
 *   > In dedicated config files
 *     In package.json
 * ? Save this as a preset for future project? (Y)
 * ? Save preset as: (Enter)
 * # 操作：
 * $ cd app
 * $ npm install
 * $ npm run build
 * $ npm run serve
 * # 目录结构：
 * # dist/
 * # node_modules/
 * # public/
 * # ....favicon.ico
 * # ....index.html
 * # src/
 * # ....assets/
 * # ........logo.png
 * # ....components/
 * # ........HelloWorld.vue
 * # ....router/
 * # ........index.js
 * # ....store/
 * # ........index.js
 * # ....views/
 * # ........AboutView.vue
 * # ........HomeView.vue
 * # ....App.vue
 * # ....main.js
 * # .browserslistrc
 * # .eslintrc.js
 * # .gitignore
 * # babel.config.js
 * # jsconfig.json
 * # package.json
 * # package-lock.json
 * # README.md
 * # vue.config.js
 * # 模板结构：
 * 在工程化的项目中，vue要做的事情非常简单，通过 main.js 把 App.vue 渲染到 index.html 的指定区域中。
 * 其中：
 * 1).App.vue    用来编写待渲染的模板结构。
 * 2).index.html 中需要预留一个 el 挂载点区域。
 * 3).main.js    把App.vue渲染到了index.html所预留的挂载点区域中。
 *
 * vue组件？
 * 组件化开发指的是：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护。
 * 组件在被封装好之后，彼此之间是相互独立的，不存在任何关系。
 * 然而，在使用组件的时候，根据彼此的嵌套关系，便形成了父子关系、或者兄弟关系。
 * 【组件关系】
 * 1).在 vue2.x 中，父组件向子组件共享数据需要使用【自定义属性】。
 * 2).在 vue2.x 中，子组件向父组件共享数据使用【自定义事件】。
 * 3).在 vue2.x 中，兄弟组件之间数据共享的方案是【EventBus】。
 * vue 是一个支持组件化开发的前端框架。
 * vue 规定：组件的后缀名是 .vue。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。
 * 每个 .vue 组件都由 3 部分构成，分别是：
 * 【组件结构】
 * 1).template -> 组件的模板结构。
 * 2).script   -> 组件的 JavaScript 行为。
 * 3).style    -> 组件的样式。
 * 其中，每个组件中必须包含 template 模板结构，而 script 行为和 style 样式是可选的组成部分。
 * <template>
 *     // 当前组件的 DOM 结构，需要定义到 template 标签的内部
 * </template>
 * vue 规定：每个组件对应的模板结构，需要定义到 <template> 节点中。
 * 注意：template 是 vue 提供的容器标签，只起到包裹性质的作用，它不会被渲染为真正的 DOM 元素。
 * 注意：template 中只能包含唯一的根节点。
 * <script>
 *     // 从今往后，组件相关的 data 数据、methods 方法等等，都需要定义到 export default 所导出的对象中。
 * </script>
 * vue 规定：开发者可以在 <script> 节点中封装组件的 JavaScript 业务逻辑。
 * vue 规定：.vue 组件中的 data 必须是一个函数，不能直接指向一个数据对象。否则，会导致多个组件实例共用同一份数据的问题，
 * <style>
 *     h4 {
 *         font-weight: normal;
 *     }
 * </style>
 * vue 规定：组件内的 <style> 节点是可选的，开发者可以在 <style> 节点中编写样式美化当前组件的 UI 结构。
 * 让 style 中支持 less 语法，在 <style> 标签上添加 lang="less" 属性，即可使用 less 语法编写组件的样式：
 * 使用组件的三个步骤：
 * 【组件使用】
 * 步骤3：使用 <组件名> 以标签形式使用刚才注册的组件。
 * 步骤1：使用 import 语法导入需要的组件。
 * 步骤2：使用 components 节点注册组件。
 * <div class="home-container">
 *     <ComponentName></ComponentName>
 * </div>
 * import ComponentName from '@/component/ComponentName.vue';
 * export default {
 *     components: {
 *         ComponentName
 *     }
 * }
 * 【私有组件】
 * 通过 components 属性，注册的是私有子组件。
 * 注册全局组件：在 vue 项目的 main.js 入口文件中，通过 Vue.component() 方法，可以注册全局组件。
 * 示例代码如下：
 * 【全局组件】
 * // 导入需要全局注册的组件
 * import ComponentName from '@/component/ComponentName.vue';
 * // 参数一：字符串格式，表示组件的注册名称
 * // 参数二：需要被全局注册的那个组件
 * Vue.component('ComponentName', ComponentName);
 * 组件的 props：props 是组件的自定义属性，在封装通用组件的时候，合理地使用 props 可以极大的提高组件的复用性。
 * 它的语法格式如下：
 * export default {
 *     // 组件的自定义属性
 *     props: [
 *         '自定义属性A',
 *         '自定义属性B',
 *         '自定义属性N'
 *     ],
 *     // 组件的私有数据
 *     data() {
 *         return {
 *             what: ''
 *         }
 *     }
 * }
 * vue 规定：组件中封装的自定义属性是只读的，程序员不能直接修改 props 的值。否则会直接报错：
 * 要想修改 props 的值，可以把 props 的值转存到 data 中，因为 data 中的数据都是可读可写的。
 * 组件的 props 的 default 默认值：在声明自定义属性时，可以通过 default 来定义属性的默认值。
 * 示例代码如下：
 * export default {
 *     props: {
 *         init: {
 *             // 使用 default 属性定义属性的默认值
 *             default: 0
 *         }
 *     }
 * }
 * 组件的 props 的 type 值类型：在声明自定义属性时，可以通过 type 来定义属性的值类型。
 * 示例代码如下：
 * export default {
 *     props: {
 *         init: {
 *             // 使用 default 属性定义属性的默认值
 *             default: 0
 *             // 使用 type 属性定义属性的值类型，如果传递过来的值不符合此类型，则会在终端报错
 *             type: Number
 *         }
 *     }
 * }
 * 组件的 props 的 required 必填项：在声明自定义属性时，可以通过 required 选项，将属性设置为必填项，强制用户必须传递属性的值。
 * 示例代码如下：
 * export default {
 *     props: {
 *         init: {
 *             // 使用 default 属性定义属性的默认值
 *             default: 0
 *             // 使用 required 属性定义属性是必填值
 *             required: true
 *         }
 *     }
 * }
 * 默认情况下，写在 .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题。
 * 导致组件之间样式冲突的根本原因是：
 * 1).单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面进行呈现的。
 * 2).每个组件中的样式，都会影响整个 index.html 页面中的 DOM 元素。
 * 思考：如何解决组件样式冲突的问题？
 * 为每个组件分配唯一的自定义属性，在编写组件样式时，通过属性选择器来控制样式的作用域，示例代码如下：
 * <style>
 *     // 通过中括号【属性选择器】，来防止组件之间的【样式冲突问题】，因为每个组件分配的自定义属性是【唯一的】。
 *     .home-container[data-v-1001] {
 *         color: black;
 *     }
 * </style>
 * style 节点的 scoped 属性：
 * 为了提高开发效率和开发体验，vue 为 style 节点提供了 scoped 属性，从而防止组件之间的样式冲突问题：
 * // style 节点的 scoped 属性，用来自动为每个组件分配唯一的【自定义属性】，并且自动为当前组件的 DOM 标签和 style 样式应用这个自定义属性
 * <style scoped>
 *     .home-container {
 *         color: black;
 *     }
 * </style>
 * /deep/ 样式穿透
 * 如果给当前组件的 style 节点添加了 scoped 属性，则当前组件的样式对其子组件是不生效的。
 * 如果想让某些样式对子组件生效，可以使用 /deep/ 深度选择器。
 * <style lang="less" scoped>
 *     // 不加 /deep/ 时，生成的选择器格式为 .home-container[data-v-1001de]
 *     .home-container {
 *         color: black;
 *     }
 *     // 加上 /deep/ 时，生成的选择器格式为 [data-v-1001de] .home-container
 *     /deep/ .home-container {
 *         color: black;
 *     }
 * </style>
 * 【组件之间的关系】
 * 在项目开发中，组件之间的最常见的关系分为如下两种：
 * 1).父子关系。
 * 2).兄弟关系。
 * 父子组件之间的数据共享又分为：
 * 1).父 -> 子共享数据。
 * 2).子 -> 父共享数据。
 * 父组件向子组件共享数据需要使用自定义属性。
 * 示例代码如下：
 * // Parent.vue
 * <Children v-bind:msg="message" v-bind:user="userInfo"></Children>
 * data() {
 *     return {
 *         message: 'Hello World',
 *         userInfo: {
 *             name: 'King',
 *             age: 28
 *         }
 *     }
 * }
 * // Children.vue
 * <template>
 *     <div>
 *         <span>父组件消息：{{ msg }}，对象：{{ user }}</span>
 *     </div>
 * </template>
 * <script>
 *     export default {
 *         props: [
 *             'msg',
 *             'user'
 *         ]
 *     }
 * </script>
 * 子组件向父组件共享数据使用自定义事件。
 * 示例代码如下：
 * // Children.vue
 * <template>
 *     <div>
 *         <span>子组件统计：{{ count }}</span>
 *     </div>
 * </template>
 * <script>
 *     export default {
 *         data() {
 *             return {
 *                 count: 0
 *             }
 *         },
 *         methods: {
 *             addition() {
 *                 this.count += 1;
 *                 this.$emit('share', this.count);
 *             }
 *         }
 *     }
 * </script>
 * // Parent.vue
 * <Children v-on:share="getChildrenCount()"></Children>
 * export default {
 *     data() {
 *         return {
 *             countX: 0
 *         }
 *     },
 *     methods: {
 *         getChildrenCount(val) {
 *             this.countX = val;
 *         }
 *     }
 * }
 * 兄弟组件之间的数据共享：在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus。
 * 示例代码如下：
 * // eventBus.js
 * import Vue from 'vue';
 * export default new Vue();
 * // LeftView.vue
 * <button type="button" v-on:click="sendMessage()">发送</button>
 * import bus from '@/eventBus.js';
 * export default {
 *     data() {
 *         return {
 *             message: 'Hello World'
 *         }
 *     },
 *     methods: {
 *         sendMessage() {
 *             bus.$emit('share', this.message);
 *         }
 *     }
 * }
 * // RightView.vue
 * <span>{{ msg }}</span>
 * import bus from '@/eventBus.js';
 * export default {
 *     data() {
 *         return {
 *             msg: ''
 *         }
 *     },
 *     bus.$on('share', val => {
 *         this.msg = val;
 *     });
 * }
 * 【EventBus】的使用步骤：
 * 1).创建 eventBus.js 模块，并且向外共享一个 Vue 的实例对象。
 * 2).在数据发送方，调用 bus.$emit('事件名称', 事件数据主体) 方法，触发自定义事件。
 * 3).在数据接收方，调用 bus.$on('事件名称', 事件处理函数) 方法，注册一个自定义事件。
 *
 * ref 引用和 $refs 对象？
 * 什么是ref引用？
 * ref 用来辅助开发者在不依赖于 jQuery 的情况下，获取 DOM 元素或组件的引用。
 * 每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用。
 * 默认情况下，组件的 $refs 指向一个空对象。
 * 使用 ref 引用 DOM 元素：如果想要使用 ref 引用页面上的 DOM 元素，示例代码如下：
 * // 使用 ref 属性，为对应的 DOM 元素添加引用名称
 * <h3 ref="myH3">使用ref引用</h3>
 * <button v-on:click="getRefsObj()">获取$refs对象</button>
 * export default {
 *     method: {
 *         getRefsObj() {
 *             // 通过 vue 实例对象 this 获取引用对象 $refs
 *             console.log(this.$refs);
 *             // 操作DOM元素，把文本颜色设置为黄色
 *             this.$refs.myH3.style.color = 'yellow';
 *         }
 *     }
 * }
 * 使用 ref 引用组件实例：如果想要使用 ref 引用页面上的组件实例，示例代码如下：
 * 让文本框自动获得焦点：
 * 当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 .focus() 方法即可。
 * 示例代码如下：
 * 账号：<input type="text" name="username" id="username" v-model="username" ref="iptUser">
 * 切换：<input type="text" name="visible" id="visible" v-if="iptVisible" ref="iptVsb">
 * export default {
 *   data() {
 *     return {
 *       // 控制文本框和按钮所需切换
 *       iptVisible: false
 *     };
 *   },
 *   computed: {},
 *   filters: {},
 *   watch: {},
 *   methods: {
 *     showIptVisible() {
 *       this.iptVisible = true;
 *       this.$refs.iptUser.focus();
 *     }
 *   }
 * }
 * 组件的 $nextTick(cb) 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。
 * 通俗的理解是：等组件的 DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素。
 * 示例代码如下：
 * 账号：<input type="text" name="username" id="username" v-model="username" ref="iptUser">
 * 切换：<input type="text" name="visible" id="visible" v-if="iptVisible" ref="iptVsb">
 * export default {
 *   data() {
 *     return {
 *       // 控制文本框和按钮所需切换
 *       iptVisible: false
 *     };
 *   },
 *   computed: {},
 *   filters: {},
 *   watch: {},
 *   methods: {
 *     showIptVisible() {
 *       this.iptVisible = true;
 *       // 加载之前就已经创建的DOM元素可以被引用生效。
 *       // this.$refs.iptUser.focus();
 *       // 点击改变之后的DOM元素需要DOM更新完成之后，再执行Callback回调函数可以操作到最新的DOM元素生效。
 *       this.$nextTick(() => {
 *         this.$refs.iptVsb.focus();
 *       });
 *     }
 *   }
 * }
 *
 * 三、生命周期章节：
 * 生命周期（Life Cycle）是指一个组件从创建 -> 运行 -> 销毁的整个阶段，强调的是一个时间段。
 * 生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。
 *     注意：生命周期强调的是【时间段】，
 *     注意：生命周期函数强调的是【时间点】。
 * 组件生命周期的第一个阶段？
 *     组件创建阶段：
 *     new Vue() -> beforeCreate() -> created() -> beforeMount() -> mounted
 * 组件生命周期的第二个阶段？
 *     组件运行阶段：
 *     beforeUpdate() -> updated()
 * 组件生命周期的第三个阶段？
 *     组件销毁阶段：
 *     beforeDestroy() -> destroy()
 * 生命周期图示
 * 可以参考 vue 官方文档给出的【生命周期图示】，进一步理解组件生命周期执行的过程：
 *     https://cn.vuejs.org/v2/guide/instance.html#
 * 什么是生命周期钩子函数？
 * 01.beforeCreate:  在实例初始化之后、数据观测 (data observer) 和 event/watcher 事件配置之前被调用。在这个阶段，组件的选项对象已经合并，但是实例的属性和方法尚未初始化。
 * 02.created:       在实例创建完成后被立即调用。在此阶段，组件实例已经完成以下的配置：数据观测 (data observer)，属性和方法的设置，计算属性和观察者等。然而，挂载阶段还未开始，$el 属性尚不可用。
 * 03.beforeMount:   在挂载开始之前被调用，相关的 render 函数首次被调用。在此阶段，模板编译已完成，但尚未将渲染结果挂载到DOM中。
 * 04.mounted:       在实例挂载到 DOM 后被调用。此时，组件已经在 DOM 中渲染，并且可以进行 DOM 操作。通常在这里发起异步请求、操作 DOM 或与第三方库进行交互。
 * 05.beforeUpdate:  在响应式数据更新时，虚拟 DOM 重新渲染和打补丁之前被调用。可以在此时执行一些更新之前的操作。
 * 06.updated:       在虚拟 DOM 重新渲染和打补丁后被调用。此时，组件已经更新完成，并且可以执行 DOM 操作。注意避免无限循环更新，因为在此钩子中更新数据可能会导致再次触发更新。
 * 07.beforeDestroy: 在实例销毁之前被调用。这是组件销毁前的最后一个机会，可以进行一些清理工作，如清除定时器、取消订阅等。
 * 08.destroyed:     在实例被销毁后调用。此时，组件已经被销毁，事件监听器和子组件也都被移除。
 * 09.activated:     在实例被激活的时候使用，用于重复激活一个组件实例的时候。
 * 10.deactivated:   在实例没有被激活的时候。
 * 11.errorCaptured: 当捕获到一个来自后代组件的错误时被调用。
 * 样例：
 * <script>
 * export default {
 *   // 11.创建之前的钩子（在此生命周期函数执行的时候，Data和Methods中的数据都还没有初始化。）
 *   beforeCreate() {
 *     console.log(`生命周期钩子之创建之前的钩子！`);
 *   },
 *   // 11.创建时候的钩子（在此生命周期函数中，Data和Methods中的数据都已经被初始化，如果调用Methods中的方法，或者操作Data中的数据，最早只能在created()函数中操作。）
 *   created() {
 *     console.log(`生命周期钩子之创建时候的钩子！SettingsView.vue 组件被创建了呀！`);
 *   },
 *   // 12.挂载之前的钩子（在此生命周期函数执行的时候，模板已经在内存中编译，但是尚未挂载到页面中，此时页面还是旧页面。）
 *   beforeMount() {
 *     console.log(`生命周期钩子之挂载之前的钩子！`);
 *   },
 *   // 12.挂载时候的钩子（此时页面和内存中都是新的数据，这个钩子函数是最早可以操作DOM节点的方法。）
 *   mounted() {
 *     console.log(`生命周期钩子之挂载时候的钩子！SettingsView.vue 组件被挂载了呀！`);
 *   },
 *   // 13.更新之前的钩子（此时页面中显示的数据还是旧数据，但是Data中的数据是最新的，并且页面并未和最新的数据同步。）
 *   beforeUpdate() {
 *     console.log(`生命周期钩子之更新之前的钩子！`);
 *   },
 *   // 13.更新时候的钩子（此时页面显示数据和最新的Data数据同步。）
 *   updated() {
 *     console.log(`生命周期钩子之更新时候的钩子！SettingsView.vue 组件被更新了呀！`);
 *   },
 *   // 14.激活时候的钩子（实例被激活的时候使用，用于重复激活一个组件实例的时候。）
 *   activated() {
 *     console.log(`生命周期钩子之重新激活组件实例的钩子！`);
 *   },
 *   // 14.激活之前的钩子（组件实例没有被激活的时候。）
 *   deactivated() {
 *     console.log(`生命周期钩子之重新激活之前组件实例的钩子！SettingsView.vue 组件未被激活呀！`);
 *   },
 *   // 15.销毁之前的钩子（当执行该生命周期函数的时候，实例本身所有Data，所有Methods，以及过滤器等等都处于可用状态，并没有真正执行销毁。）
 *   beforeDestroy() {
 *     console.log(`生命周期钩子之销毁之前的钩子！`);
 *   },
 *   // 15.销毁时候的钩子（此时组件以及被完全销毁，实例中所有的数据、方法、属性、过滤器等等都已经不可用。）
 *   destroyed() {
 *     console.log(`生命周期钩子之销毁时候的钩子！SettingsView.vue 组件被销毁了呀！`);
 *   },
 *   // 16.错误调用的钩子（当捕获到一个来自后代组件的错误时被调用。）
 *   errorCaptured(err, vm, info) {
 *     console.log(`生命周期钩子之错误调用的钩子！`);
 *   },
 * }
 * </script>
 * 四、动态组件章节：
 * 什么是动态组件？
 *     动态组件指的是，动态切换组件的显示与隐藏。
 * 第01种：<component>
 *     vue 内置的<component>组件，专门用来实现动态组件的渲染。
 *     样例：
 *     // 1.当前需要渲染的组件名称
 *     data() { return { componentName: 'Left' } }
 *     // 2.通过 is 属性，动态指定需要渲染的组件。
 *     <component v-bind:is="componentName"></component>
 *     // 3.点击按钮，动态切换组件的名称，实现动态组件的显示与隐藏。
 *     <button v-on:click=" componentName = 'Left' ">展示 Left 组件</component>
 *     <button v-on:click=" componentName = 'Right' ">展示 Right 组件</component>
 * 第02种：<component> + <keep-alive>
 *     vue 内置的<component>组件，专门用来实现动态组件的渲染。
 *     默认情况下，切换动态组件时【无法保持组件的状态】，此时可以使用 vue 内置的<keep-alive>组件，专门保持动态组件的状态。
 *     当组件【被缓存】时，会自动触发组件的【deactivated】生命周期函数。
 *     当组件【被激活】时，会自动触发组件的【activated】生命周期函数。
 *     样例：
 *     // 1.当前需要渲染的组件名称
 *     data()        { return { componentName: 'Left' } },
 *     created()     { console.log(`Left组件被创建了`) },
 *     destroyed()   { console.log(`Left组件被销毁了`) },
 *     activated()   { console.log(`Left组件被激活了`) },
 *     deactivated() { console.log(`Left组件被缓存了`) }
 *     // 2.通过 is 属性，动态指定需要渲染的组件。
 *     <keep-alive>
 *         <component v-bind:is="componentName"></component>
 *     </keep-alive>
 *     // 3.点击按钮，动态切换组件的名称，实现动态组件的显示与隐藏。
 *     <button v-on:click=" componentName = 'Left' ">展示 Left 组件</component>
 *     <button v-on:click=" componentName = 'Right' ">展示 Right 组件</component>
 *     属性：
 *     <keep-alive include="">
 *         <component v-bind:is="componentName"></component>
 *     </keep-alive>
 *     include 属性用来指定，只有名称匹配的组件才会被缓存。多个组件名称之间使用英文逗号（,）分隔。
 *     exclude 属性用来指定，只有指定的组件被排队，即不会被缓存，其余组件则会被缓存。
 * 五、插槽章节：
 * 什么是插槽？
 *     插槽（slot）是vue为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽。
 *     样例：
 *     // 1.定义引用组件的模板组件
 *     <MySlot>
 *         <!-- slot 具名插槽的简写形式 -->
 *         <template #three>
 *             <span>设置中心</span>
 *         </template>
 *         <!-- slot 具名插槽 -->
 *         <template v-slot:one>
 *             <span>关于我们</span>
 *         </template>
 *         <!-- slot 具名插槽 -->
 *         <template v-slot:two>
 *             <span>退出登录</span>
 *         </template>
 *     </MySlot>
 *     // 2.定义组件插槽组件MySlot
 *     <a href="#"><slot name="three"></slot></a>
 *     <button type="button"><slot name="one"></slot></button>
 *     <button type="button"><slot name="two"></slot></button>
 *     面试题：
 *     问题：vue slot和router-view有啥区别？
 *     回答：
 *     slot        是一个抽象元素，有点类似 template，设计思想有点类似面向对象中的多态，用于组件中某一项需要单独定义，那么就应该使用 slot。核心概念是：组件当中某一项，可能是一个元素，也可能只是一个文本。
 *     router-view 是一个 functional 组件，它是一个组件，一个组件，一个组件，重要的事情说三遍，用于渲染路径匹配到的视图组件。核心概念是：路径匹配和渲染视图组件。
 *     slot        是用于父子组件内容分发的，
 *     router-view 是做路由导航的，
 * 六、自定义指令章节：
 * 什么是自定义指令？
 * 官方提供了常用的vue指令，除此之外，vue还允许开发者自定义指令。
 * vue中的自定义指令分为两类，分别是：
 *     全局自定义指令。
 *     私有自定义指令。
 * 1.定义私有自定义指令
 *     export default {
 *       directives: {
 *         color: {
 *           bind(el) {
 *             el.style.color = 'red';
 *           }
 *         }
 *       }
 *     }
 *     // 使用自定义指令
 *     <button type="button" v-color>自定义指令</button>
 *     // 1.定义私有自定义指令
 *     export default {
 *     directives: {
 *       colorOne: {
 *         bind(el) {
 *           el.style.color = this.color;
 *         }
 *       },
 *       colorTwo: {
 *         // 当指令第一次被绑定到DOM元素时被调用
 *         bind(el, binding) {
 *           el.style.color = binding.value;
 *         },
 *         // 每次DOM元素更新时被调用
 *         update(el, binding) {
 *           el.style.color = binding.value;
 *         }
 *       },
 *       // 在insert和update时，会触发相同的业务逻辑
 *       colorThree(el, binding) {
 *         el.style.color = binding.value;
 *       }
 *     }
 *     // 使用自定义指令
 *     <button type="button" v-color>自定义指令</button>
 * 2.定义全局自定义指令
 *     Vue.directive('color', function(el, binding) { el.style.color = binding.value });
 *     // 使用自定义指令
 *     <button type="button" v-color>自定义指令</button>
 * 七、路由章节：
 * 什么是路由？
 *     路由（英文：router）就是对应关系。
 *     SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。
 *     此时，不同组件之间的切换需要通过前端路由来实现。
 *     结论：在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成。
 * 什么是前端路由？
 *     通俗易懂的概念：Hash 地址与组件之间的对应关系。
 * 前端路由的工作方式？
 *     1).用户点击了页面上的路由链接。
 *     2).导致了 URL 地址栏中的 Hash 值发生了变化。
 *     3).前端路由监听了到 Hash 地址的变化。
 *     4).前端路由把当前 Hash 地址对应的组件渲染都浏览器中。
 *     【后者】结论：前端路由指的是 Hash 地址与组件之间的对应关系。
 *     // 通过 component 标签结合 componentName 动态渲染组件。
 *     <component v-bind:is="componentName"></component>
 *     【前生】提示：
 *     // 原生锚点（#）方式为 a 链接添加对应的 hash 值。
 *     <a href="#/home">公司首页</a>
 *     <a href="#/movie">电影界面</a>
 *     <a href="#/about">关于我们</a>
 * 实现简易的前端路由？
 * 步骤一：通过 <component> 标签，结合 compName 动态渲染组件。示例代码如下：
 *     // 通过 is 属性，指定要展示的组件的名称
 *     <component v-bind:is="compName"></component>
 *     export default {
 *         name: '#app',
 *         data() {
 *             return {
 *                 compName: 'Home'
 *             }
 *         }
 *     }
 * 步骤二：在 App.vue 组件中，为 <a> 链接添加对应的 hash 值：
 *     <a href="#/home">公司首页</a>
 *     <a href="#/movie">电影界面</a>
 *     <a href="#/about">关于我们</a>
 * 步骤三：在 created 生命周期函数中，监听浏览器地址栏中 hash 地址的变化，动态切换要展示的组件的名称：
 *     // 在生命周期函数 created() 中监听浏览器地址中 hash 地址的变化，动态切换要展示的组件的名称。
 *     created: function () {
 *       window.onhashchange = () => {
 *         console.log(`通过生命周期函数created()监听到了location对象的哈希属性hash地址的变化`, location.hash);
 *         switch (location.hash) {
 *           case '#/home':
 *             this.compName = 'Home';
 *             break;
 *           case '#/movie':
 *             this.compName = 'Movie';
 *             break;
 *           case '#/about':
 *             this.compName = 'About';
 *             break;
 *           default:
 *             break;
 *         }
 *       }
 *     }
 * 什么是 vue-router 路由？
 * vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目中组件的切换。
 * vue-router 的官方文档地址：https://router.vuejs.org/zh/
 * vue-router 路由安装和配置的步骤？
 *     1).安装 vue-router 包。
 *     2).创建路由模块。
 *     3).导入并挂载路由模块。
 *     4).声明路由链接和占位符。
 * 步骤一：在项目中安装 vue-router：在 vue2 项目中，安装 vue-router 的命令如下：
 *     // 00.下载路由依赖包 vue-router
 *     # npm install vue-router@3.5.2 -S
 * 步骤二：创建路由模板：在 src 源代码目录下，新建 router/index.js 路由模块，并且初始化如下的代码：
 *     // 01.导入 Vue 和 VueRouter 依赖包
 *     import Vue from 'vue';
 *     import VueRouter from 'vue-router';
 *     // 02.调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
 *     Vue.use(VueRouter);
 *     // 03.创建路由的实例对象
 *     const router = new VueRouter();
 *     // 04.向外共享路由的实例对象
 *     export default router;
 * 步骤三：导入并且挂载路由模块：在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：
 *     // 05.导入自定义路径模块
 *     import router from '@/router/index.js';
 *     // 06.挂载路由模块
 *     new Vue(
 *         render: h => h(app),
 *         router: router
 *     ).$mount('#app');
 * 步骤四：声明路由链接和占位符，在 src/App.vue 组件中，使用 vue-router 提供的 <router-link> 和 <router-view> 声明路由链接和占位符：
 *     // 07.定义路由的链接
 *     <router-link to="/home">公司首页</router-link>
 *     <router-link to="/movie">电影专区</router-link>
 *     <router-link to="/about">关于我们</router-link>
 *     // 07.定义路由的点位符
 *     <router-view></router-view>
 * 步骤五：声明路由的匹配规则：在 src/router/index.js 路由模块中，通过 routes 数组声明路由的匹配规则。示例代码如下：
 *     // 03.创建路由的实例对象
 *     const router = new VueRouter(
 *         // 08.在routes数组中，声明路由的匹配规则
 *         routes: [
 *             {path: '/home',  component: HomeView},
 *             {path: '/movie', component: MovieView},
 *             {path: '/about', component: AboutView}
 *         ]
 *     );
 *     // 03.配置全局前置守卫（全局前置监听器）
 *     router.beforeEach(function (to, from, next) {
 *         next();
 *     });
 * vue-router 的常见用法？
 * 1).路由重定向：
 * 路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。
 * 通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：
 *     const router = new VueRouter({
 *         // 08.在routes数组中，声明路由的匹配规则
 *         routes: [
 *             // 08.01.路由重定向，当访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
 *             {path: '/', redirect: '/home'},
 *             {path: '/home', component: HomeView}
 *             {path: '/movie', component: MovieView},
 *             {path: '/about', component: AboutView}
 *         ]
 *     });
 *     <!-- 第07步：定义路由的【链接】router-link -->
 *     <router-link to="/home">公司首页</router-link>
 *     <router-link to="/movie">电影专区</router-link>
 *     <router-link to="/about">关于我们</router-link>
 *     <!-- 第07步：定义路由的【占位符】router-view -->
 *     <router-view></router-view>
 * 2).嵌套路由：
 * 通过路由实现组件的嵌套展示，叫做嵌套路由。
 * 点击父级路由链接显示模板内容：模板内容中又有子级路由链接，点击子级路由链接显示子级模板内容。
 *     const router = new VueRouter({
 *         // 08.在routes数组中，声明路由的匹配规则
 *         routes: [
 *             // 08.01.路由重定向，当访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
 *             {path: '/', redirect: '/home'},
 *             {path: '/home', component: HomeView}
 *             {path: '/movie', component: MovieView},
 *             // 08.02.嵌套路由，通过 children 属性，嵌套声明子级路由规则
 *             {path: '/about', component: AboutView, children: [
 *                 {path: 'tab1', component: TabOne},
 *                 {path: 'tab2', component: TabTwo}
 *             ]}
 *         ]
 *     });
 *     <!-- 第七步：定义路由的【链接】router-link -->
 *     <router-link to="/about/tab1">Table-1</router-link>
 *     <router-link to="/about/tab2">Table-2</router-link>
 *     <!-- 第七步：定义路由的【占位符】router-view -->
 *     <router-view></router-view>
 * 3).动态路由
 * 动态路由指的是：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。
 * 在 vue-router 中使用英文的冒号（:）来定义路由的参数项。
 * 示例代码如下：
 *     const router = new VueRouter({
 *         // 08.在routes数组中，声明路由的匹配规则
 *         routes: [
 *             // 08.01.路由重定向，当访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
 *             {path: '/', redirect: '/home'},
 *             {path: '/home', component: HomeView}
 *             // 08.03.动态路由，路由中的动态参数以冒号 : 进行声明，冒号后面的是动态参数的名称，以及使用 props 属性接收
 *             {path: '/movie/:id', component: MovieView, props: true},
 *             // 08.02.嵌套路由，通过 children 属性，嵌套声明子级路由规则
 *             {path: '/about', component: AboutView, children: [
 *                 {path: 'tab1', component: TabOne},
 *                 {path: 'tab2', component: TabTwo}
 *             ]}
 *         ]
 *     });
 *     <!-- 第07步：定义路由的【链接】router-link -->
 *     <router-link to="/home">公司首页</router-link>
 *     <router-link to="/movie/1001">国产专区</router-link>
 *     <router-link to="/movie/1002">日韩专区</router-link>
 *     <router-link to="/movie/1003">欧美专区</router-link>
 *     <router-link to="/about">关于我们</router-link>
 *     <!-- 第07步：定义路由的【占位符】router-view -->
 *     <router-view></router-view>
 * 4).使用$route对象.params参数接收
 * 在动态路由渲染出来的组件中，可以使用 this.$route.params 对象访问到动态匹配的参数值。
 * 示例代码如下：
 *     // 08.03.动态路由，路由中的动态参数以冒号 : 进行声明，冒号后面的是动态参数的名称
 *     // {path: '/movie/:id', component: MovieView},
 *     <span>使用 $router.params 对象.参数属性接收：{{ this.$router.params.id }}</span>
 * 5).使用props自定义属性接收
 * 为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。
 * 示例代码如下：
 *     // 08.03.动态路由，路由中的动态参数以冒号 : 进行声明，冒号后面的是动态参数的名称，以及使用 props 属性接收
 *     {path: '/movie/:id', component: MovieView, props: true},
 *     <span>使用 props 自定义属性接收：{{ id }}</span>
 *     export default {
 *         props: [
 *             'id'
 *         ]
 *     }
 * 声明式导航与编程式导航的区别？
 * 1).在浏览器中，点击链接实现导航的方式，叫做声明式导航。
 * 例如：普通网页中点击【<a>链接】、或者 VUE 项目中点击【<router-link>】都属于声明式导航。
 * 2).在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。
 * 例如：普通网页中调用【location.href】跳转到新页面的方式，属于编程式导航。
 * 编程式导航中的常见API方法？
 * vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：
 * 1).this.$router.push('hash address')    跳转到指定 hash 地址，并增加一条历史记录。
 * 2).this.$router.replace('hash address') 跳转到指定的 hash 地址，并替换掉当前的历史记录。
 * 3).this.$router.go(Number n)            实现导航历史前进、历史后退。
 * 4).this.$router.back()                  在历史记录中，后退到上一个页面。
 * 5).this.$router.forward()               在历史记录中，前进到下一个页面。
 * vue-router 路由之导航守卫？
 * 导航守卫可以控制路由的访问权限。示意图如下：
 * 1).未登录的情况下，访问后台主页。
 * <router-link to="/main">主页</router-link>
 * 无法控制访问权限，用户可以直接访问后台主页。
 * 2).未登录的情况下，访问后台主页。
 * <router-link to="/main">主页</router-link>
 * 检测到未登录，强制跳转到登录页面。
 * 配置 vue-router 全局前置守卫：
 * 步骤二：创建路由模板：在 src 源代码目录下，新建 router/index.js 路由模块，并且初始化如下的代码：
 *     // 01.导入 Vue 和 VueRouter 依赖包
 *     import Vue from 'vue';
 *     import VueRouter from 'vue-router';
 *     // 02.调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
 *     Vue.use(VueRouter);
 *     // 03.创建路由的实例对象
 *     const router = new VueRouter();
 *     // 03.创建路由的实例对象的全局前置守卫（全局前置监听器）
 *     router.beforeEach(function (to, from, next) {
 *         if (to.path === '/main') {
 *             const token = localStorage.getItem('token');
 *             console.log(token);
 *             if (token) {
 *                 next();
 *             } else {
 *                 next('/login');
 *             }
 *         } else {
 *             next();
 *         }
 *     });
 *     // 04.向外共享路由的实例对象
 *     export default router;
 * 调用路由实例对象的 beforeEach(func()) 方法，即可声明【全局前置守卫】。
 * 每次发生路由导航跳转的时候，都会自动触发 func() 这个【回调函数】。
 * 路由全局前置守卫的三个形式参数解析：
 * // 1).to     参数是将要访问的路由的信息对象。
 * // 2).from   参数是将要离开的路由的信息对象。
 * // 3).next() 函数表示放行，允许这次路由导航。
 * next() 函数的三种调用方式？
 * // 当前用户拥有后台主页的访问权限，直接放行：next()
 * // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
 * // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
 *
 */




/**
 * Vue.js 官网学习教程：https://v2.cn.vuejs.org/v2/guide/
 * 一、基础
 * 01.01.安装
 *     # 兼容性
 *     Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
 *     # 语义化版本控制
 *     Vue 在其所有项目中公布的功能和行为都遵循语义化版本控制。对于未公布的或内部暴露的行为，其变更会描述在发布说明中。
 *     # 更新日志
 *     最新稳定版本：2.7.14
 *     每个版本的更新日志见 GitHub。
 *     # Vue Devtools
 *     在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
 *     # 直接用 <script> 引入
 *     直接下载并用 <script> 标签引入，Vue 会被注册为一个全局变量。
 *     # CDN
 *     对于制作原型或学习，你可以这样使用最新版本：
 *     <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
 *     对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：
 *     <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14"></script>
 *     # NPM
 *     在用 Vue 构建大型应用时推荐使用 NPM 安装[1]。
 *     NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。
 *     同时 Vue 也提供配套工具来开发单文件组件。
 *     # 最新稳定版
 *     $ npm install vue
 *     # 命令行工具 (CLI)
 *     Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了开箱即用的构建设置。
 *     只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。
 *     更多详情可查阅 Vue CLI 的文档。
 *     CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。
 *     如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，在熟悉 Vue 本身之后再使用 CLI。
 *     # 术语
 *     完整版：同时包含编译器和运行时的版本。
 *     编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。
 *     运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
 * 01.02.介绍
 *     # Vue.js 是什么
 *     Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
 *     与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
 *     Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
 *     另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
 *     如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
 *     如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
 *     # 起步
 *     尝试 Vue.js 最简单的方法是使用 Hello World 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。
 *     或者你也可以创建一个 .html 文件，然后通过如下方式引入 Vue：
 *     <!-- 开发环境版本，包含了有帮助的命令行警告 -->
 *     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
 *     或者：
 *     <!-- 生产环境版本，优化了尺寸和速度 -->
 *     <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
 *     安装教程给出了更多安装 Vue 的方式。请注意我们不推荐新手直接使用 vue-cli，尤其是在你还不熟悉基于 Node.js 的构建工具时。
 *     # 声明式渲染
 *     Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：
 *     <div id="app">
 *         {{ message }}
 *     </div>
 *     const vm = new Vue({
 *         el: '#app',
 *         data: {
 *             message: 'hello world'
 *         }
 *     });
 *     我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。
 *     现在数据和 DOM 已经被建立了关联，所有东西都是【响应式的】。
 *     我们要怎么确认呢？
 *     打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改【app.message】的值，你将看到上例相应地更新。
 *     除了文本插值，我们还可以像这样来绑定元素【attribute】：
 *     <div id="app">
 *         <span v-bind:title="message">
 *             鼠标悬停几秒钟查看此处动态绑定的提示信息！！！
 *         </span>
 *     </div>
 *     const vm = new Vue({
 *         el: '#app',
 *         data: {
 *             message: `页面加载于：${new Date().toLocaleString()}`
 *         }
 *     });
 *     这里我们遇到了一点新东西。你看到的 v-bind attribute 被称为指令。
 *     指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute。可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。
 *     在这里，该指令的意思是：将这个元素节点的 title attribute 和 Vue 实例的 message property 保持一致。
 *     # 条件与循环
 *     控制切换一个元素是否显示也相当简单：
 *     <button type="button" v-on:click="switchShow()">显示出来</button>
 *     <span v-if="show">看到我了吧？</span>
 *     <span v-show="show">看到你了吧？</span>
 *     <span v-bind:class="{hide:other}">看到他了吧？</span>
 *     data() {
 *         return {
 *             show: false,
 *             other: true
 *         };
 *     },
 *     methods: {
 *         switchShow() {
 *             // 如何在 vue 中进行切换显示和隐藏（Toggle）三种写法？
 *             // 1.v-if 指令
 *             // 2.v-show 指令
 *             // 3.v-bind:class 指令
 *             // this.show = this.show === true ? false : true;
 *             // this.show = this.show !== true;
 *             this.show = !this.show;
 *             this.other = !this.other;
 *         }
 *     }
 *     这个例子演示了我们不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构。
 *     此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用【过渡效果】。
 *     还有其它很多指令，每个都有特殊的功能。
 *     例如，v-for 指令可以绑定数组的数据来渲染一个项目列表：
 *     <ol>
 *       <li v-for="item in list">
 *         {{item.text}}
 *       </li>
 *     </ol>
 *     data() {
 *         return {
 *             list: [
 *                 {text: 'HTML-5'},
 *                 {text: 'CSS-3'},
 *                 {text: 'ECMAScript-5'},
 *                 {text: 'DOM'},
 *                 {text: 'BOM'},
 *                 {text: 'jQuery'},
 *                 {text: 'Ajax'}
 *             ]
 *         };
 *     }
 *     # 处理用户输入
 *     为了让用户和你的应用进行交互，我们可以用 v-on 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：
 *     <button type="button" v-on:click="reverseMessage()">反转消息</button>
 *     <span>反转之后：{{message}}</span>
 *     methods: {
 *         reverseMessage() {
 *             this.message = this.message.split('').reverse().join();
 *         }
 *     }
 *     注意：在 reverseMessage 方法中，我们更新了应用的状态，但没有触碰 DOM，所有的 DOM 操作都由 Vue 来处理。
 *     Vue 还提供了 v-model 指令，它能轻松实现表单输入和应用状态之间的双向绑定。
 *     <input type="text" style="width: 50%" v-model="message">
 *     data() {
 *         return {
 *             message: 'hello world: ' + new Date().toLocaleString()
 *         };
 *     }
 *     # 组件化应用构建
 *     组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。
 *     仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：
 *     在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。
 *     在 Vue 中注册组件很简单：
 *     <div id="app">
 *         <app-nav></app-nav>
 *         <app-view>
 *             <app-sidebar></app-sidebar>
 *             <app-content></app-content>
 *         </app-view>
 *     </div>
 *     # 与自定义元素的关系
 *     你可能已经注意到 Vue 组件非常类似于自定义元素——它是 Web 组件规范的一部分，这是因为 Vue 的组件语法部分参考了该规范。
 *     例如 Vue 组件实现了 Slot API 与 is attribute。但是，还是有几个关键差别：
 *     Web Components 规范已经完成并通过，但未被所有浏览器原生实现。
 *     目前 Safari 10.1+、Chrome 54+ 和 Firefox 63+ 原生支持 Web Components。
 *     相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。
 *     必要时，Vue 组件也可以包装于原生自定义元素之内。
 *     Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。
 *     虽然 Vue 内部没有使用自定义元素，不过在应用使用自定义元素、或以自定义元素形式发布时，依然有很好的互操作性。
 *     Vue CLI 也支持将 Vue 组件构建成为原生的自定义元素。
 * 01.03.Vue实例
 *     # 创建一个 Vue 实例
 *     每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：
 *     var vm = new Vue({
 *         // 选项
 *     });
 *     虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。
 *     因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。
 *     当创建一个 Vue 实例时，你可以传入一个选项对象。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。
 *     作为参考，你也可以在 API 文档中浏览完整的选项列表。
 *     一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
 *     举个例子，一个 todo 应用的组件树可以是这样的：
 *     根实例：
 *     └─ TodoList
 *       ├─ TodoItem
 *       │  ├─ TodoButtonDelete
 *       │  └─ TodoButtonEdit
 *       └─ TodoListFooter
 *          ├─ TodosButtonClear
 *          └─ TodoListStatistics
 *     我们会在稍后的组件系统章节具体展开。
 *     不过现在，你只需要明白所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。
 *     # 数据与方法
 *     当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的【响应式系统】中。
 *     当这些 property 的值发生改变时，视图将会产生【响应】，即匹配更新为新的值。
 *         // 我们的数据对象
 *         var data = { a: 1 }
 *         // 该对象被加入到一个 Vue 实例中
 *         var vm = new Vue({
 *             data: data
 *         })
 *         // 获得这个实例上的 property
 *         // 返回源数据中对应的字段
 *         // => true
 *         vm.a == data.a
 *         // 设置 property 也会影响到原始数据
 *         // data.a => 2
 *         vm.a = 2
 *         data.a
 *         // 反之亦然
 *         // vm.a => 3
 *         data.a = 3
 *         vm.a
 *     当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
 *     以后你可以在 API 参考中查阅到完整的实例 property 和方法的列表。
 *     # 实例生命周期钩子
 *     每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。
 *     同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
 *     比如 created 钩子可以用来在一个实例被创建之后执行代码：
 *         new Vue({
 *             data: {
 *                 a: 1
 *             },
 *             created: function () {
 *                 // `this` 指向 vm 实例
 *                 console.log('a is: ' + this.a);
 *             }
 *         });
 *         // => "a is: 1"
 *     也有一些其它的钩子，在实例生命周期的不同阶段被调用，如：mounted、updated、destroyed等等。
 *     一共有 13 个生命周期钩子函数，示例代码如下：
 *         beforeCreate() {
 *           console.log(`在实例初始化之后、数据观测和事件配置之前被调用。`);
 *         },
 *         created() {
 *           console.log(`在实例创建完成后被立即调用。`);
 *         },
 *         beforeMount() {
 *           console.log(`在挂载开始之前被调用，相关的函数首次被调用。`);
 *         },
 *         mounted() {
 *           console.log(`在实例挂载到DOM后被调用。`);
 *         },
 *         beforeUpdate() {
 *           console.log(`在响应式数据更新时，虚拟DOM重新渲染和打补丁之前被调用。`);
 *         },
 *         updated() {
 *           console.log(`在虚拟DOM重新渲染和打补丁后被调用。`);
 *         },
 *         beforeDestroy() {
 *           console.log(`在实例销毁之前被调用。`);
 *         },
 *         destroyed() {
 *           console.log(`在实例被销毁后调用。`);
 *         },
 *         activated() {
 *           console.log(`在实例被激活的时候使用，用于重复激活一个组件实例的时候。`);
 *         },
 *         deactivated() {
 *           console.log(`在实例没有被激活的时候。`);
 *         },
 *         errorCaptured(err, vm, info) {
 *           console.log(`当捕获到一个来自后代组件的错误时被调用。`);
 *         }
 *     生命周期钩子的 this 上下文指向调用它的 Vue 实例。
 *     注意：不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。
 *     因为箭头函数并【没有 this】，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致报错：
 *     Uncaught TypeError: Cannot read property of undefined。
 *     或者
 *     Uncaught TypeError: this.myMethod is not a function。
 *     # 生命周期图示
 *     下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。
 * 01.04.模板语法
 *     Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
 *     所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
 *     在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。
 *     结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。
 *     如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。
 *     # 文本 {{}}
 *     数据绑定最常见的形式就是使用【Mustache语法】，双大括号 {{}} 的文本插值：
 *         // 插值表达式
 *         <span>插值表达式：{{ msg }}</span>
 *     使用 Mustache 标签将会被替代为对应数据对象上 msg property 的值。
 *     无论何时，绑定的数据对象上 msg property 发生了改变，插值处的内容都会更新。
 *     # v-once
 *     通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。
 *     但请留心这会影响到该节点上的其它数据绑定：
 *         // 插值表达式
 *         <span>插值表达式：{{ msg }}</span>
 *         <span v-once>插值表达式：{{ msg }}，这个将不会改变</span>
 *     # 原始 HTML v-html
 *     双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
 *         <p>Using mustaches: {{ message }}</p>
 *         <p>Using v-html directive: <span v-html="message"></span></p>
 *     这个 span 的内容将会被替换成为 property 值 rawHtml，直接作为 HTML——会忽略解析 property 值中的数据绑定。
 *     注意，你不能使用 v-html 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。
 *     反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。
 *     你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。
 *     请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。
 *     # Attribute v-bind
 *     使用 Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令：
 *         <div v-bind:id="dynamicId"></div>
 *     对于布尔 attribute (它们只要存在就意味着值为 true)，v-bind 工作起来略有不同，在这个例子中：
 *         <button v-bind:disabled="isButtonDisabled">Button</button>
 *     如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled attribute 甚至不会被包含在渲染出来的 <button> 元素中。
 *     # 使用 JavaScript 表达式
 *     迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
 *         {{ number + 1 }}
 *         {{ ok ? 'YES' : 'NO' }}
 *         {{ message.split('').reverse().join('') }}
 *         <div v-bind:id="'list-' + id"></div>
 *     这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
 *         // 这是语句，不是表达式
 *         {{ var a = 1 }}
 *         // 流控制也不会生效，请使用三元表达式
 *         {{ if (ok) { return message } }}
 *     模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。
 *     你不应该在模板表达式中试图访问用户定义的全局变量。
 *     # 指令 v-if
 *     指令 (Directives) 是带有 v- 前缀的特殊 attribute。
 *     指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。
 *     指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：
 *         <p v-if="seen">现在你看到我了</p>
 *     这里，v-if 指令将根据表达式 seen 的值的真假来插入/移除 <p> 元素。
 *     # 参数
 *     一些指令能够接收一个【参数】，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML attribute：
 *         <a v-bind:href="url">影视专区</a>
 *     在这里 href 是参数，告知 v-bind 指令将该元素的 href attribute 与表达式 url 的值绑定。
 *     另一个例子是 v-on 指令，它用于监听 DOM 事件：
 *         <a v-on:click="doSomething">暂停播放</a>
 *     在这里参数是监听的事件名。我们也会更详细地讨论事件处理。
 *     # 动态参数
 *     从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
 *     // 注意，参数表达式的写法存在一些约束，如之后的【对动态参数表达式的约束】章节所述。
 *     <a v-bind:[attributeName]="url">影视专区</a>
 *     这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。
 *     例如，如果你的 Vue 实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。
 *     同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：
 *     <a v-on:[eventName]="doSomething">影视专区</a>
 *     在这个示例中，当 eventName 的值为 "focus" 时，v-on:[eventName] 将等价于 v-on:focus。
 *     对动态参数的值的约束：
 *     动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
 *     对动态参数表达式的约束：
 *     动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：
 *         // 这会触发一个编译警告
 *         <a v-bind:['foo' + bar]="value">影视专区</a>
 *     变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。
 *     在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：
 *         // 在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someAttr]`。
 *         // 除非在实例中有一个名为 someAttr 的 property，否则代码不会工作。
 *         <a v-bind:[someAttr]="value">影视专区</a>
 *     # 修饰符
 *     修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
 *     例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
 *         <form v-on:submit.prevent="onSubmit">填写表单</form>
 *     在接下来对 v-on 和 v-for 等功能的探索中，你会看到修饰符的其它例子。
 *     # 缩写
 *     使用 v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。
 *     当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。
 *     同时，在构建由 Vue 管理所有模板的单页面应用程序 (SPA - single page application) 时，v- 前缀也变得没那么重要了。
 *     因此，Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：
 *     # v-bind 缩写
 *         // 完整语法
 *         <a v-bind:href="url">...</a>
 *         // 缩写
 *         <a :href="url">...</a>
 *         // 动态参数的缩写 (2.6.0+)
 *         <a :[key]="url"> ... </a>
 *     # v-on 缩写
 *         // 完整语法
 *         <a v-on:click="doSomething">...</a>
 *         // 缩写
 *         <a @click="doSomething">...</a>
 *         // 动态参数的缩写 (2.6.0+)
 *         <a @[event]="doSomething"> ... </a>
 *     它们看起来可能与普通的 HTML 略有不同，但 : 与 @ 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。
 *     而且，它们不会出现在最终渲染的标记中。
 *     缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。
 * 01.05.计算属性和侦听器
 *     # 计算属性 computed
 *     模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
 *         <div id="example">
 *             {{ message.split('').reverse().join('') }}
 *         </div>
 *     在这个地方，模板不再是简单的声明式逻辑。
 *     你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。
 *     所以，对于任何复杂逻辑，你都应当使用计算属性。
 *     基础例子：
 *         <p>Original message: "{{ message }}"</p>
 *         <p>Computed reversed message: "{{ reversedMessage }}"</p>
 *         var vm = new Vue({
 *           el: '#example',
 *           data: {
 *             message: 'Hello'
 *           },
 *           computed: {
 *             // 计算属性的 getter
 *             reversedMessage: function () {
 *               // `this` 指向 vm 实例
 *               return this.message.split('').reverse().join('');
 *             }
 *           }
 *         });
 *     结果：
 *     Original message: "Hello"
 *     Computed reversed message: "olleH"
 *     这里我们声明了一个计算属性 reversedMessage。
 *     我们提供的函数将用作 property vm.reversedMessage 的 getter 函数：
 *     你可以打开浏览器的控制台，自行修改例子中的 vm。
 *     vm.reversedMessage 的值始终取决于 vm.message 的值。
 *     你可以像绑定普通 property 一样在模板中绑定计算属性。
 *     Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
 *     而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
 *     # 计算属性缓存 vs 方法
 *     你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：
 *         <p>Reversed message: "{{ reversedMessage() }}"</p>
 *         // 在组件中
 *         methods: {
 *             reversedMessage: function () {
 *                 return this.message.split('').reverse().join('');
 *             }
 *         }
 *     我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。
 *     然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
 *     这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
 *     这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：
 *         computed: {
 *           now: function () {
 *             return Date.now();
 *           }
 *         }
 *     相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。
 *     我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。
 *     然后我们可能有其他的计算属性依赖于 A。
 *     如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。
 *     # 计算属性 vs 侦听属性
 *     Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
 *     当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch 特别是如果你之前使用过 AngularJS。
 *     然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。
 *     细想一下这个例子：
 *         <div id="demo">{{ fullName }}</div>
 *         var vm = new Vue({
 *           el: '#demo',
 *           data: {
 *             firstName: 'Foo',
 *             lastName: 'Bar',
 *             fullName: 'Foo Bar'
 *           },
 *           watch: {
 *             firstName: function (val) {
 *               this.fullName = val + ' ' + this.lastName;
 *             },
 *             lastName: function (val) {
 *               this.fullName = this.firstName + ' ' + val;
 *             }
 *           }
 *         });
 *     上面代码是命令式且重复的。将它与计算属性的版本进行比较：
 *         var vm = new Vue({
 *           el: '#demo',
 *           data: {
 *             firstName: 'Foo',
 *             lastName: 'Bar'
 *           },
 *           computed: {
 *             fullName: function () {
 *               return this.firstName + ' ' + this.lastName;
 *             }
 *           }
 *         });
 *     # 计算属性的 setter
 *     计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
 *         computed: {
 *           fullName: {
 *             // getter 方法
 *             get: function () {
 *               return this.firstName + ' ' + this.lastName;
 *             },
 *             // setter 方法
 *             set: function (newValue) {
 *               var names = newValue.split(' ');
 *               this.firstName = names[0];
 *               this.lastName = names[names.length - 1];
 *             }
 *           }
 *         }
 *     现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。
 *     # 侦听器 watch
 *     虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
 *     这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
 *     当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
 *     结果：
 *         Ask a yes/no question:
 *         Questions usually contain a question mark.
 *     在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。
 *     这些都是计算属性无法做到的。
 *     除了 watch 选项之外，您还可以使用命令式的 vm.$watch API。
 * 01.06.Class与Style绑定
 *     操作元素的 class 列表和内联样式是数据绑定的一个常见需求。
 *     因为它们都是 attribute，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。
 *     不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。
 *     表达式结果的类型除了字符串之外，还可以是对象或数组。
 *
 * 01.07.条件渲染
 * 01.08.列表渲染
 * 01.09.事件处理
 * 01.10.表单输入绑定
 * 01.11.组件基础
 * 二、深入了解组件
 * 02.01.组件注册
 * 02.02.Prop
 * 02.03.自定义事件
 * 02.04.插槽
 * 02.05.动态组件&异步组件
 * 02.06.处理边界情况
 * 三、过滤&动画
 * 03.01.进入/离开&列表过渡
 * 03.02.状态过渡
 * 四、可复用性&组合
 * 04.01.混入
 * 04.02.自定义指令
 * 04.03.渲染函数&JSX
 * 04.04.插件
 * 04.05.过滤器
 * 五、工具
 * 05.01.单文件组件
 * 05.02.测试
 * 05.03.TypeScript支持
 * 05.04.生产环境部署
 * 六、规模化
 * 06.01.路由
 * 06.02.状态管理
 * 06.03.服务端渲染
 * 06.04.安全
 * 七、内在
 * 07.01.深入响应式原理
 * 八、迁移
 * 08.01.从Vue 1.x迁移
 * 08.02.从Vue Router 0.7.x迁移
 * 08.03.从Vuex 0.6.x迁移到1.0
 * 08.04.迁移至Vue 2.7
 * 九、更多
 * 09.01.对比其他框架
 * 09.02.加入Vue.js社区
 * 09.03.认识团队
 */




/**
 * Vue.js 官方学习教程（https://v2.cn.vuejs.org/v2/guide/）视频讲解版本
 * 一、Vue 核心
 * 1.1 Vue 简介
 *     官网：
 *         (1).英文官网: https://vuejs.org/
 *         (2).中文官网: https://cn.vuejs.org/
 *     介绍：
 *         (1).动态构建用户界面的渐进式 JavaScript 框架
 *         (2).作者: 尤雨溪
 *     特点：
 *         (1).遵循MVVM模式。
 *         (2).编码简洁，体积小，运行效率高，适合移动端或者PC端开发。
 *         (3).它本身只关注UI，也可以引入其它第三方库开发项。
 *     与其它 JS 框架的关联：
 *         (1).借鉴 Angular 的模板和数据绑定技术。
 *         (2).借鉴 React 的组件化和虚拟DOM。
 *     Vue 相关库：
 *         (1).vue-cli      vue 脚手架。
 *         (2).vue-resource 模块发送请求。插件。通过【XMLHttpRequest】或者【JSONP】发起请求并进行处理。
 *         (3).axios        方式发送请求。插件。基于【Promise】用于浏览器和【nodejs】的HTTP客户端。
 *         (4).vue-router   vue 路由。
 *         (5).vuex         vue 状态管理。
 *         (6).element-ui   基于 vue 的 UI 组件库（PC 端）。
 *         (7).……
 * 1.2 Vue 初识
 *     (1).想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
 *     (2).root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
 *     (3).root容器里的代码被称为【Vue模板】；
 *     (4).Vue实例和容器是一一对应的；
 *     (5).真实开发中只有一个Vue实例，并且会配合着组件一起使用；
 *     (6).{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
 *     (7).一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
 *     注意：
 *     区分 js 表达式和 js 代码（语句）？
 *     (1).js表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
 *         (1).a
 *         (2).a+b
 *         (3).demo(1)
 *         (4).x === y ? 'a' : 'b'
 *     (2).js代码（语句）
 *         (1).if() {}
 *         (2).for() {}
 *     样例：
 *     (1).准备好一个容器
 *         <div id="demo"></div>
 *     (2).创建Vue实例
 *         const vm = new Vue({
 *             (3).el挂载用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
 *             el: '#app',
 *             (4).data数据用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
 *             data: {
 *                 name: 'Hello World'
 *             }
 *         });
 *     或者：
 *     (2).创建Vue实例，然后挂载vm实例
 *         // 1.创建vue实例
 *         const vm = new Vue({
 *             data: {
 *                 name: 'Hello World'
 *             }
 *         });
 *         // 2.挂载
 *         vm.$mount('#app');
 *     或者：
 *     (2).使用Vue模板结构
 *         export default {
 *             data() {
 *                 name: 'Hello World'
 *             }
 *         }
 *     data与el的2种写法：
 *     (1).el有2种写法
 *         (1).new Vue时候配置el属性。
 *         (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
 *     (2).data有2种写法
 *         (1).对象式。
 *         (2).函数式。
 *     如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
 *     一个重要的原则：由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。
 * 1.3 模板语法
 *     Vue模板语法有2大类：
 *     (1).插值语法：
 *         功能：用于解析标签体内容。
 *         写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
 *     (2).指令语法：
 *         功能：用于解析标签（包括：标签属性、标签体内容、绑定事件等等）。
 *         举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性。
 *         备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
 *     理解：
 *     html 中包含了一些 JS 语法代码，语法分为两种，分别为：
 *     1. 插值语法（双大括号表达式）。
 *     2. 指令（以 v-开头）。
 *     插值语法：
 *     1. 功能: 用于解析标签体内容。
 *     2. 语法: {{xxx}} ，xxx 会作为 js 表达式解析。
 *     指令语法：
 *     1. 功能: 解析标签属性、解析标签体内容、绑定事件。
 *     2. 举例：v-bind:href = 'xxx'，xxx 会作为 js 表达式被解析。
 *     3. 说明：Vue 中有有很多的指令，此处只是用 v-bind 举个例子。
 * 1.4 数据绑定
 *     Vue中有2种数据绑定的方式：
 *     (1).单向绑定(v-bind)：数据只能从data流向页面。
 *     (2).双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
 *     备注：
 *         (1).双向绑定一般都应用在表单类元素上（如：input、select等）.
 *         (2).v-model:value可以简写为v-model，因为v-model默认收集的就是value值。
 *     单向数据绑定：
 *     1.语法：v-bind:href ="xxx" 或简写为 :href。
 *     2.特点：数据只能从 data 流向页面。
 *     双向数据绑定：
 *     1. 语法：v-mode:value="xxx" 或简写为 v-model="xxx"。
 *     2. 特点：数据不仅能从 data 流向页面，还能从页面流向 data。
 * 1.5 MVVM 模型
 *     MVVM 模型：
 *     (1).【M】模型（Model）：data中的数据。
 *     (2).【V】视图（View）：模板代码。
 *     (3).【VM】视图模型（ViewModel）：Vue实例。
 *     观察发现：
 *     (1).【data】中所有的属性，最后都出现在了vm身上。
 *     (2).【vm】身上所有的属性，及Vue原型上所有属性，在Vue模板中都可以直接使用。
 * 1.6 数据代理
 *     数据代理：
 *         let number = 18
 *         let person = {
 *             name: 'Simon',
 *             sex: 'GG',
 *         }
 *         Object.defineProperty(person, 'age', {
 *             // 当有人读取person的age属性时，get(getter)函数就会被调用，且返回值就是age的值
 *             get() {
 *                 console.log('有人读取age属性了');
 *                 return number;
 *             },
 *             // 当有人修改person的age属性时，set(setter)函数就会被调用，且会收到修改的具体值
 *             set(value) {
 *                 console.log('有人修改了age属性，且值是', value);
 *                 number = value;
 *             }
 *         });
 *     数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）。
 *         let obj1 = { x: 100 };
 *         let obj2 = { y: 200 };
 *         Object.defineProperty(obj2, 'x', {
 *             get() {
 *                 return obj1.x;
 *             },
 *             set(value) {
 *                 obj1.x = value;
 *             }
 *         });
 *     Vue中的数据代理：
 *     (1).Vue中的数据代理。
 *         通过vm对象来代理data对象中属性的操作（读/写）。
 *     (2).Vue中数据代理的好处。
 *         更加方便的操作data中的数据。
 *     (3).基本原理。
 *         通过Object.defineProperty()把data对象中所有属性添加到vm上。
 *         为每一个添加到vm上的属性，都指定一个getter()/setter()方法。
 *         在getter()/setter()内部去操作（读/写）data中对应的属性。
 *         Vue.config.productionTip = false;
 *         const vm = new Vue({
 *             el:'#root',
 *             data:{
 *                 name: 'Jack',
 *                 address: 'Shanghai'
 *             }
 *         });
 *     数据检测：
 *     (1).模拟一个数据检测的例子
 *         let  data = {name: 'Hello', address: 'Shanghai'};
 *         const obs = new Observer(data);
 *         const  vm = {};
 *         vm._data  = data = obs;
 *         function Observer(obj) {
 *             const keys = Object.keys(obj);
 *             keys.forEach((k) => {
 *                 Object.defineProperty(this, k, {
 *                     get() {
 *                         return obj[k];
 *                     },
 *                     set() {
 *                         console.log(`${k}被改变了！现在去解析模板！然后生成虚拟DOM吧！`);
 *                         obj[k] = val;
 *                     }
 *                 });
 *             });
 *         }
 * 1.6 事件处理【$event】
 *     (1).事件的基本使用：
 *         (1).使用 v-on:click 或 @click 绑定事件，其中 click 是事件名。
 *         (2).事件的回调需要配置在 methods 对象中，最终会在 vm 实例对象上。
 *         (3).在 methods 中配置的函数，不要用箭头函数，否则 this 指向就不是 vm 实例对象了，而是 window 对象。
 *         (4).在 methods 中配置的函数，都是被 Vue 所管理的函数，this 的指向是 vm 实例对象或者组件实例对象。
 *         (5).使用 @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参。
 *     (2).Vue中的事件修饰符：
 *         (1).prevent 阻止默认事件（常用）。阻止事件默认行为：event.preventDefault()。
 *         (2).stop    阻止事件冒泡（常用）。停止事件冒泡：event.stopPropagation()。
 *         (3).once    事件只触发一次（常用）。
 *         (4).capture 使用事件的捕获模式。
 *         (5).self    只有 event.target 是当前操作的元素时才触发事件。
 *         (6).passive 事件的默认行为立即执行，无需等待事件回调执行完毕。
 *     (3).Vue中常用的按键别名：
 *         (1).enter  回车键。
 *         (2).delete 删除键。捕获删除和退格键。
 *         (3).esc    回退键。
 *         (4).space  空格键。
 *         (5).tab    换行键。特殊，必须配合keydown去使用。
 *         (1).up     向上键。
 *         (2).down   向下键。
 *         (3).left   向左键。
 *         (4).right  向右键。
 *         Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）。
 *     (4).系统修饰键（用法特殊）：ctrl、alt、shift、meta
 *         (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
 *         (2).配合keydown使用：正常触发事件。
 *         也可以使用keyCode去指定具体的按键（不推荐）。
 *         Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名。
 *     绑定监听：
 *     (1).语法：v-on:click="fun"
 *     (2).参数：@click="fun" 或者 @click="fun(参数)"
 *     (3).事件：默认事件形参: event，隐含属性对象: $event
 *         // 事件的基本使用
 *         <button v-on:click="showInfo">全写点击事件（无参）</button>
 *         <button     @click="showInfo">简写点击事件（无参）</button>
 *         <button     @click="showInfo($event, 60)">简写点击事件（传参）</button>
 *         // vue中的事件修饰符
 *         <a href="https://www.163.com" @click.prevent="showInfo">阻止默认事件（常用）</a>
 *         <div class="demo" @click="showInfo">
 *             <button @click.stop="showInfo">阻止事件冒泡（常用）</button>
 *         </div>
 *         <button @click.once="showInfo">事件只触发一次（常用）</button>
 *         <div class="box1" @click.capture="showMsg(1)">使用事件的捕获模式div1
 *             <div class="box2" @click="showMsg(2)">div2</div>
 *         </div>
 *         // 只有event.target是当前操作的元素时才触发事件
 *         <div class="demo" @click.self="showInfo">
 *             <button @click="showInfo">简写点击事件（无参）</button>
 *         </div>
 *         // 事件的默认行为立即执行，无需等待事件回调执行完毕
 *         <ul @wheel.passive="demo" class="list">
 *             <li>1</li>
 *             <li>2</li>
 *             <li>3</li>
 *             <li>4</li>
 *         </ul>
 *         // 定义了一个别名按键
 *         <input type="text" placeholder="按下回车提示输入" @keydown.spaceX="showInfo">
 *         Vue.config.keyCodes.spaceX = 13;
 * 1.7 计算属性【computed】与侦听属性【watch】
 *     计算属性：
 *     (1).定义：要用的属性不存在，要通过已有属性计算得来。
 *     (2).原理：底层借助了 Object.defineProperty() 方法提供的 getter() 和 setter() 方法。
 *     (3).get() 函数什么时候执行？
 *         (1).初次读取时会执行一次。
 *         (2).当依赖的数据发生改变时会被再次调用。
 *     (4).优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
 *     (5).备注：
 *         (1).计算属性最终会出现在vm上，直接读取使用即可。
 *         (2).如果计算属性要被修改，那必须写set()函数去响应修改，且set()函数中要引起计算时依赖的数据发生改变。
 *         computed: {
 *             // 完整写法
 *             fullName:{
 *                 get() {
 *                     console.log('get()函数被调用了');
 *                     return this.firstName + '-' + this.lastName;
 *                 },
 *                 set(value) {
 *                     console.log('set', value);
 *                     const arr = value.split('-');
 *                     this.firstName = arr[0];
 *                     this.lastName = arr[1];
 *                 }
 *             }
 *             // 简写写法
 *             fullName() {
 *                 console.log('get()函数被调用了');
 *                 return this.firstName + '-' + this.lastName;
 *             }
 *         }
 *     侦听属性：
 *     (1).当被监视的属性变化时，回调函数自动调用，进行相关操作。
 *     (2).监视的属性必须存在，才能进行监视。
 *     (3).可以进行异步操作。
 *     (4).监视的两种写法：
 *         (1).new Vue 时传入 watch 配置。
 *         (2).通过 vm.$watch 监视。
 *         watch: {
 *             // 正常写法：侦听属性isHot
 *             isHot: {
 *                 // 初始化时让handler调用一下
 *                 immediate:true,
 *                 // handler什么时候调用？当isHot发生改变时
 *                 handler(newValue, oldValue){
 *                     console.log('isHot被修改了', newValue, oldValue);
 *                 }
 *             },
 *             // 简写：侦听属性isHot
 *             isHot(newValue, oldValue) {
 *                 console.log('isHot被修改了', newValue, oldValue);
 *             }
 *         }
 *     深度监视：
 *     (1).Vue中的watch默认不监测对象内部值的改变（一层）。
 *     (2).配置deep:true可以监测对象内部值改变（多层）。
 *     备注：
 *     (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以。
 *     (2).使用watch时根据数据的具体结构，决定是否采用深度监视。
 *         watch: {
 *             // 侦听属性isHot
 *             isHot: {
 *                 // 初始化时让handler调用一下
 *                 immediate:true,
 *                 // handler什么时候调用？当isHot发生改变时
 *                 handler(newValue,oldValue){
 *                     console.log('isHot被修改了', newValue, oldValue);
 *                 }
 *             },
 *             // 监视多级结构中所有属性的变化
 *             numbers: {
 *                 deep:true,
 *                 handler() {
 *                     console.log('numbers改变了');
 *                 }
 *             }
 *         }
 *     计算属性 computed：
 *     1).要显示的数据不存在，要通过计算得来。
 *     2).在 computed 对象中定义计算属性。
 *     3).在页面中使用{{方法名}}来显示计算的结果。
 *     侦听属性 watch：
 *     1).通过通过 vm 对象的 $watch() 或 watch 配置来监视指定的属性。
 *     2).当属性变化时，回调函数自动调用，在函数内部进行计算。
 *     计算属性(Computed)与侦听属性(Watch)的区别：
 *         (1).计算属性能完成的功能，侦听属性都可以完成。
 *         (2).侦听属性能完成的功能，计算属性不一定能完成，例如：侦听属性可以进行【异步操作】。
 *     两个重要的小原则：
 *         (1).所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
 *         (2).所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm或者组件实例对象。
 * 1.8 Class与Style绑定
 *     绑定样式：
 *     (1).class样式
 *         :class="xxx"             其中xxx可以是字符串、对象、数组。
 *             字符串写法适用于：类名不确定，要动态获取。
 *             对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
 *             数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
 *     (2).style样式
 *         :style="{fontSize: xxx}" 其中xxx是动态值。
 *         :style="[a,b]"           其中a、b是样式对象。
 *         .dynamic {
 *             background-color: skyblue;
 *         }
 *         .one {
 *             background-color: red;
 *         }
 *         .two {
 *             background-color: green;
 *         }
 *         .three {
 *             background-color: yellow;
 *         }
 *         <div class="basic" :class="first">绑定class样式：字符串写法，适用于：样式的类名不确定，需要动态指定。</div>
 *         <div class="basic" :class="classArr">绑定class样式：数组写法，适用于：要绑定的样式个数不确定、名字也不确定。</div>
 *         <div class="basic" :class="classObj">绑定class样式：对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用。</div>
 *         <div class="basic" :style="styleObj">绑定style样式：对象写法。</div>
 *         <div class="basic" :style="styleArr">绑定style样式：数组写法。</div>
 *         data: {
 *             first: 'dynamic',
 *             classArr: ['one', 'two', 'three'],
 *             classObj: {
 *                 one: false,
 *                 two: false
 *             },
 *             styleObj: {
 *                 backgroundColor:'orange'
 *             },
 *             styleArr:[
 *                 {fontSize: '40px', color: 'blue'},
 *                 {backgroundColor:'gray'}
 *             ]
 *         }
 *         总结：
 *         通俗的讲，绑定Class样式就是通过data属性调用已定义的样式。
 *         通俗的讲，绑定Style样式就是直接data属性直接定义样式。
 *     理解：
 *     1).在应用界面中，某个(些)元素的样式是变化的。
 *     2).class/style 绑定就是专门用来实现动态样式效果的技术。
 *     class 绑定：
 *     1. :class='xxx'
 *     2. 表达式是字符串: 'classA'
 *     3. 表达式是对象: {classA:isA, classB: isB}
 *     4. 表达式是数组: ['classA', 'classB'
 *     style 绑定：
 *     1.:style="{ color: activeColor, fontSize: fontSize + 'px' }"
 *     2.其中 activeColor/fontSize 是 data 属性。
 * 1.9 条件渲染
 *     (1).v-if 指令写法：
 *         (1).v-if="表达式"
 *         (2).v-else-if="表达式"
 *         (3).v-else="表达式"
 *         适用于：切换频率较低的场景。
 *         特点：不展示的DOM元素直接被移除。
 *         注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被"打断"。
 *     (2).v-show 指令写法：
 *         (1).v-show="表达式"
 *         适用于：切换频率较高的场景。
 *         特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
 *     (3).备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。
 *         <h2 v-show="false">欢迎来到{{name}}</h2>
 *         <h2 v-show="1 === 1">欢迎来到{{name}}</h2>
 *         <div v-if="n === 1">Angular</div>
 *         <div v-else-if="n === 2">React</div>
 *         <div v-else-if="n === 3">Vue</div>
 *         <div v-else>ECMAScript</div>
 *     条件渲染指令：
 *         1).v-if 与 v-else。
 *         2).v-show。
 *     比较v-if与v-show指令：
 *         1).如果需要频繁切换 v-show 较好。
 *         2).当条件不成立时，v-if 的所有子节点不会解析（项目中使用）。
 * 1.10 列表渲染
 *     v-for 列表指令:
 *         (1).用于展示列表数据。
 *         (2).语法：
 *             // 遍历数组
 *             v-for="(item, index) in list" v-bind:key="index"
 *             // 遍历对象
 *             v-for="(value, k) of userInfo" v-bind:key="k"
 *             // 遍历字符串
 *             v-for="(char, index) of string" v-bind:key="index"
 *             // 遍历指定次数
 *             v-for="(number, index) of 10" v-bind:key="index"
 *         (3).可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）。
 *     v-for 列表过滤：
 *     实例场景：页面模糊搜索效果？
 *         <h2>人员列表</h2>
 *         <input type="text" placeholder="请输入搜索关键字" v-model="keyWord">
 *         <ul>
 *             <li v-for="(p, index) of newUserInfo" v-bind:key="index">
 *                 姓名：{{p.name}}，年龄：{{p.age}}，性别：{{p.gender}}
 *             </li>
 *         </ul>
 *         data: {
 *             // 模糊搜索关键字
 *             keyWord: '',
 *             userInfo: [
 *                 {id:'001', name:'马冬梅', age:19, gender:'女'},
 *                 {id:'002', name:'周冬雨', age:20, gender:'女'},
 *                 {id:'003', name:'周杰伦', age:21, gender:'男'},
 *                 {id:'004', name:'温兆伦', age:22, gender:'男'}
 *             ]
 *         },
 *         computed: {
 *             newUserInfo() {
 *                 // 根据搜索关键字 keyWord 过滤数组
 *                 return this.userInfo.filter((t) => {
 *                     return t.name.indexOf(this.keyWord) !== -1;
 *                 });
 *             }
 *         }
 *     v-for 列表排序：
 *     实例场景：页面列表实现排序效果？
 *        <h2>人员列表</h2>
 *         <input type="text" placeholder="请输入搜索关键字" v-model="keyWord">
 *         <button v-on:click="sortType = 2">年龄升序</button>
 *         <button v-on:click="sortType = 1">年龄降序</button>
 *         <button v-on:click="sortType = 0">原始顺序</button>
 *         <ul>
 *             <li v-for="(p, index) of newUserInfo" v-bind:key="p.id">
 *                 姓名：{{p.name}}，年龄：{{p.age}}，性别：{{p.gender}}，看看：<input type="text">
 *             </li>
 *         </ul>
 *         data: {
 *             // 模糊搜索关键字
 *             keyWord: '',
 *             // 排序类型关键字
 *             sortType: 0,
 *             userInfo: [
 *                 {id:'1002', name:'马冬梅', age:38, gender:'女'},
 *                 {id:'1001', name:'周冬雨', age:22, gender:'女'},
 *                 {id:'2004', name:'周杰伦', age:46, gender:'男'},
 *                 {id:'2003', name:'温兆伦', age:66, gender:'男'}
 *             ]
 *         },
 *         computed: {
 *             newUserInfo() {
 *                 // 根据搜索关键字 keyWord 过滤数组
 *                 const arr = this.userInfo.filter((t) => {
 *                     return t.name.indexOf(this.keyWord) !== -1;
 *                 });
 *                 // 根据排序类型 sortType 排序数组
 *                 if(this.sortType) {
 *                     arr.sort((p1, p2) => {
 *                         return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age;
 *                     });
 *                 }
 *                 // 返回数组
 *                 return arr;
 *             }
 *         },
 *         methods: {
 *             addUserInfo() {
 *                 this.userInfo.splice(0, 1, {id: '3005', name: '马保国', age: 50, gender: '男'});
 *             }
 *         }
 *     列表显示指令：
 *     1).遍历数组: v-for/index。
 *     2).遍历对象: v-for/key。
 *     面试题：react、vue中的key有什么作用？（key属性的内部原理）
 *         (1).虚拟DOM中key的作用？
 *             key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
 *         (2).对比规则？
 *             (1).旧虚拟DOM中找到了与新虚拟DOM相同的key。
 *                 (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM。
 *                 (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
 *             (2).旧虚拟DOM中未找到与新虚拟DOM相同的key。
 *                 (1).创建新的真实DOM，随后渲染到到页面。
 *         (3).用index作为key可能会引发的问题？
 *             (1).若对数据进行：逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低。
 *             (2).如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。
 *         (4).开发中如何选择key？
 *             (1).最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
 *             (2).如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
 *     Vue监视数据的原理：
 *         (1).vue会监视data中所有层次的数据。
 *         (2).如何监测对象中的数据？通过setter()方法实现监视，且要在new Vue()实例对象时就传入要监测的数据。
 *             (1).实例对象中，后追加的属性，Vue默认不做响应式处理。
 *             (2).如需给后添加的属性做响应式，请使用如下API：
 *                 Vue.set(target, propertyName/index, value);
 *                 或者
 *                 vm.$set(target, propertyName/index, value);
 *         (3).如何监测数组中的数据？通过包裹数组更新元素的方法实现，本质就是做了两件事：
 *             (1).调用原生对应的方法对数组进行更新。
 *             (2).重新解析模板，进而更新页面。
 *         (4).在Vue修改数组中的某个元素一定要用如下方法：
 *             (1).使用API：push()/pop()/shift()/unshift()/splice()/sort()/reverse()。
 *             (2).使用 Vue.set() 或者 vm.$set()。
 *         特别注意：Vue.set()和vm.$set()不能给vm或vm的根数据对象添加属性。
 * 1.11 收集表单数据
 *     收集表单数据：
 *     <input type="text"/>     的时候，则v-model收集的是value值，用户输入的就是value值。
 *     <input type="radio"/>    的时候，则v-model收集的是value值，且要给标签配置value值。
 *     <input type="checkbox"/> 的时候，
 *         (1).没有配置input的value属性，那么收集的就是checked（勾选or未勾选，是布尔值）。
 *         (2).配置input的value属性:
 *             (1).v-model的初始值是非数组，那么收集的就是checked（勾选or未勾选，是布尔值）。
 *             (2).v-model的初始值是数组，那么收集的的就是value组成的数组。
 *     v-model的三个修饰符：
 *         (1).lazy   失去焦点再收集数据。
 *         (2).number 输入字符串转为有效的数字。
 *         (3).trim   输入首尾空格过滤。
 *         <form @submit.prevent="demo">
 *             账号：<input type="text" v-model.trim="userInfo.account">
 *             密码：<input type="password" v-model="userInfo.password">
 *             年龄：<input type="number" v-model.number="userInfo.age">
 *             性别：
 *             男<input type="radio" name="sex" v-model="userInfo.sex" value="1">
 *             女<input type="radio" name="sex" v-model="userInfo.sex" value="0">
 *             爱好：
 *             学习<input type="checkbox" v-model="userInfo.hobby" value="study">
 *             游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
 *             唱歌<input type="checkbox" v-model="userInfo.hobby" value="sing">
 *             跳舞<input type="checkbox" v-model="userInfo.hobby" value="dance">
 *             所属校区：<select v-model="userInfo.city">
 *                 <option value="">请选择校区</option>
 *                 <option value="beijing">北京</option>
 *                 <option value="shanghai">上海</option>
 *                 <option value="shenzhen">深圳</option>
 *                 <option value="wuhan">武汉</option>
 *             </select>
 *             其他信息：<textarea v-model.lazy="userInfo.other"></textarea>
 *             <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.163.com">《用户协议》</a>
 *             <button>提交</button>
 *         </form>
 *         data:{
 *             userInfo:{
 *                 account: '',
 *                 password: '',
 *                 age: 18,
 *                 sex: '0',
 *                 hobby: [],
 *                 city: 'beijing',
 *                 other: '',
 *                 agree: false
 *         },
 *         methods: {
 *             demo() {
 *                 console.log(JSON.stringify(this.userInfo));
 *             }
 *         }
 *         // 打印表单信息
 *         {
 *             "account": "admin",
 *             "password": "123456",
 *             "age": 28,
 *             "sex": "1",
 *             "hobby": [
 *                 "study",
 *                 "game",
 *                 "sing",
 *                 "dance"
 *             ],
 *             "city": "shenzhen",
 *             "other": "01234567890123456789",
 *             "agree": true
 *         }
 * 1.12 过滤器
 *     过滤器：
 *     定义：
 *         对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
 *     语法：
 *         (1).注册过滤器：Vue.filter(name,callback) 或者 new Vue{filters:{}}。
 *         (2).使用过滤器：{{ xxx | 过滤器名 }} 或者 v-bind:属性 = "xxx | 过滤器名"
 *     备注：
 *         (1).过滤器也可以接收额外参数、多个过滤器也可以串联。
 *         (2).并没有改变原本的数据，是产生新的对应的数据。
 *     理解：
 *         (1).功能：对要显示的数据进行特定格式化后再显示。
 *         (2).注意：并没有改变原本的数据，是产生新的对应的数据。
 *     局部过滤器：
 *         <h3>使用【计算属性】实现时间戳格式化日期：{{ compFormat }}</h3>
 *         <h3>使用【函数】实现时间戳格式化日期：{{ getFmtTime() }}</h3>
 *         <h3>使用【过滤器】无参实例时间戳格式化日期：{{ time | timeFormater }}</h3>
 *         <h3>使用【过滤器】带参实现时间戳格式化日期：{{ time | timeFormater('YYYY_MM_DD') | mySlice }}</h3>
 *         data: {
 *             // 时间戳
 *             time: 1621561377603,
 *         },
 *         computed: {
 *             compFormat() {
 *                 return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
 *             }
 *         },
 *         methods: {
 *             funcFormat() {
 *                 return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
 *             }
 *         },
 *         filters: {
 *             timeFormat(value, str='YYYY年MM月DD日 HH:mm:ss') {
 *                 return dayjs(value).format(str);
 *             }
 *         }
 *     全局过滤器：
 *         Vue.filter('mySlice', function(value) {
 *             return value.slice(0, 4);
 *         });
 * 1.13 内置指令与自定义指令
 *     1.常用内置指令
 *         (01).v-text   更新元素的 textContent。
 *         (02).v-html   更新元素的 innerHTML。
 *         (03).v-if     如果为 true，当前标签才会输出到页面。
 *         (04).v-else   如果为 false，当前标签才会输出到页面。
 *         (05).v-show   通过控制 display 样式来控制显示/隐藏。
 *         (06).v-for    遍历数组/对象。
 *         (07).v-on     绑定事件监听，一般简写为@。
 *         (08).v-bind   绑定解析表达式，可以省略 v-bind。
 *         (09).v-model  双向数据绑定。
 *         (10).v-cloak  防止闪现，与 css 配合: [v-cloak] { display: none }。
 *     1.我们学过的指令
 *         (1).v-bind    单向绑定解析表达式，可简写为冒号【:key】。
 *         (1).v-model   双向数据绑定。
 *         (1).v-for     遍历数组/对象/字符串。
 *         (1).v-on      绑定事件监听，可简写为艾特符号【@:click】。
 *         (1).v-if      条件渲染（动态控制节点是否存存在）。
 *         (1).v-else    条件渲染（动态控制节点是否存存在）。
 *         (1).v-show    条件渲染 (动态控制节点是否展示)。
 *     v-text 指令：
 *         (1).作用：向其所在的节点中渲染文本内容。
 *         (2).与插值语法的区别：v-text 会替换掉节点中的内容，插值表达式 {{ xxx }} 则不会。
 *             <div>你好{{ name }}</div>
 *             <div v-text="name"></div>
 *     v-html指令：
 *         (1).作用：向指定节点中渲染包含html结构的内容。
 *         (2).与插值语法的区别：
 *             (1).v-html会替换掉节点中所有的内容，插值表达式 {{ xxx }} 则不会。
 *             (2).v-html可以识别html结构。
 *         (3).严重注意：v-html 有安全性问题。
 *             (1).在网站上动态渲染任意HTML是非常危险的，容易【导致XSS攻击】。
 *             (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上。
 *             <div>你好{{ name }}</div>
 *             <div v-text="name"></div>
 *             <div v-html="addr"></div>
 *             data: {
 *                 name: 'ECMAScript',
 *                 addr: '<a href=javascript:location.href="https://www.163.com?"+document.cookie>网易邮箱</a>'
 *             }
 *     v-cloak 指令（没有值）：
 *         (1).本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
 *         (2).使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
 *             <h2 v-cloak>你好{{name}}</h2>
 *     v-once 指令：
 *         (1).v-once所在节点在初次动态渲染后，就视为静态内容了。
 *         (2).以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
 *             <h2 v-once>初始化N的值是：{{n}}</h2>
 *     v-pre指令：
 *         (1).跳过其所在节点的编译过程。
 *         (2).可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
 *             <h2 v-pre>Vue其实很简单</h2>
 *     2.自定义指令
 *     1).注册全局指令
 *         Vue.directive('my-directive', function(el, binding){
 *             el.innerHTML = binding.value.toUpperCase();
 *         });
 *         // 使用自定义指令
 *         <span v-my-directive="xxx"></span>
 *     2).注册局部指令
 *         directives : {
 *             'my-directive' : {
 *                 bind (el, binding) {
 *                     el.innerHTML = binding.value.toUpperCase();
 *                 }
 *             }
 *         }
 *         // 使用自定义指令
 *         <span v-my-directive="xxx"></span>
 *     自定义指令总结：
 *     (1).定义语法：
 *         (1).局部指令：
 *             new Vue({
 *                 directives: {指令名:配置对象}
 *             });
 *             或者
 *             new Vue({
 *                 directives{指令名:回调函数}
 *             });
 *         (2).全局指令：
 *             Vue.directive(指令名, 配置对象);
 *             或者
 *             Vue.directive(指令名, 回调函数);
 *     (2).配置对象中常用的3个回调：
 *         (1).bind：指令与元素成功绑定时调用。
 *         (2).inserted：指令所在元素被插入页面时调用。
 *         (3).update：指令所在模板结构被重新解析时调用。
 *     (3).备注：
 *         1.指令定义时【不加v-】，但使用时【要加v-】；
 *         2.指令名如果是多个单词，要使用【kebab-case】命名方式，不要用camelCase命名。
 *         <input type="text" v-my-bind:value="n">
 *         <p>放大 2 倍后的值是：<span v-my-big="n"></span></p>
 *         data: {
 *             n: 10
 *         },
 *         directives: {
 *             my-bind: {
 *                 // 指令与元素成功绑定时
 *                 bind(element, binding) {
 *                     element.value = binding.value;
 *                 },
 *                 // 指令所在元素被插入页面时
 *                 inserted(element, binding) {
 *                     element.focus();
 *                 },
 *                 // 指令所在的模板被重新解析时
 *                 update(element, binding) {
 *                     element.value = binding.value;
 *                 }
 *             },
 *             // 放大 2 倍效果指令
 *             my-big(element, binding) {
 *                 element.innerText = binding.value * 2;
 *             }
 *         }
 *     回顾一个DOM操作：
 *         <button id="btn">点击创建一个文本框</button>
 *         <script type="text/javascript">
 *             const btn = document.getElementById('btn');
 *             btn.onclick = () => {
 *                 const input = document.createElement('input');
 *                 input.className = 'demo';
 *                 input.value = '请输入搜索关键字';
 *                 input.onclick = () => {
 *                     alert(200);
 *                 };
 *                 document.body.appendChild(input);
 *                 input.focus();
 *                 console.log(input.parentElement);
 *             };
 *         </script>
 *     自定义指令总结：
 *     一、定义语法：
 *     (1).局部指令：
 *         new Vue({
 *             directives:{指令名:配置对象}
 *             或者
 *             directives{指令名:回调函数}
 *             directives:{
 *                 // 自定义指令：函数式
 * 			       big(element, binding){
 * 			           console.log('big', this);
 * 			           element.innerText = binding.value * 10;
 * 			       },
 *                 // 自定义指令：对象式
 * 			       fbind:{
 * 			           // 指令与元素成功绑定时（一上来）
 * 			           bind(element, binding) {
 * 			           	element.value = binding.value;
 * 			           },
 * 			           // 指令所在元素被插入页面时
 * 			           inserted(element, binding) {
 * 			           	element.focus();
 * 			           },
 * 			           // 指令所在的模板被重新解析时
 * 			           update(element, binding) {
 * 			           	element.value = binding.value;
 * 			           }
 *                 }
 *             }
 *         });
 *     (2).全局指令：
 *         Vue.directive(指令名, 配置对象);
 *         或者
 *         Vue.directive(指令名, 回调函数);
 *     二、配置对象中常用的3个回调：
 *         (1).bind     指令与元素成功绑定时调用。
 *         (2).inserted 指令所在元素被插入页面时调用。
 *         (3).update   指令所在模板结构被重新解析时调用。
 *     三、备注：
 *         (1).指令定义时不加v-，但使用时要加v-；
 *         (2).指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。
 * 1.14 Vue 实例生命周期
 *     生命周期：
 *         (1).又名：生命周期回调函数、生命周期函数、生命周期钩子。
 *         (2).是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
 *         (3).生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
 *         (4).生命周期函数中的 this 指向是 vm 实例对象或组件实例对象。
 *     生命周期流程图：
 *         name: 'MovieView',
 *         el:'#root',
 *         data:{
 *             n:1
 *         },
 *         methods: {
 *             add() {
 *                 console.log('add');
 *                 this.n++;
 *             },
 *             bye() {
 *                 console.log('bye');
 *                 this.$destroy();
 *             }
 *         },
 *         watch:{
 *             n() {
 *                 console.log('改变n变了');
 *             }
 *         },
 *         beforeCreate() {
 *             console.log('beforeCreate');
 *         },
 *         created() {
 *             console.log('created');
 *         },
 *         beforeMount() {
 *             console.log('beforeMount');
 *         },
 *         mounted() {
 *             console.log('mounted');
 *         },
 *         beforeUpdate() {
 *             console.log('beforeUpdate');
 *         },
 *         updated() {
 *             console.log('updated');
 *         },
 *         beforeDestroy() {
 *             console.log('beforeDestroy');
 *         },
 *         destroyed() {
 *             console.log('destroyed');
 *         }
 *     Vue 生命周期分析：
 *         (1).初始化显示。
 *         (2).更新状态。
 *         (3).销毁vue实例。
 *     常用的生命周期方法：
 *         (1).mounted()       发送Ajax请求，启动定时器等异步任务。
 *         (2).beforeDestroy() 做收尾工作，比如：清除定时器。
 *     常用的生命周期钩子：
 *         (1).mounted()       发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
 *         (2).beforeDestroy() 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
 *     关于销毁Vue实例：
 *         (1).销毁后借助Vue开发者工具看不到任何信息。
 *         (2).销毁后自定义事件会失效，但原生DOM事件依然有效。
 *         (3).一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
 *     生命周期总结：
 *         <!-- // 此阶段：挂载阶段 -->
 *         (01).Init Events & Lifecycle                初始化：生命周期、事件、但数据代理还未开始。
 *         (02).beforeCreate()                         此时：无法通过vm访问到data中的数据、methods中的方法。
 *         (03).Init Injections & Reactivity           初始化：数据检测、数据代理。
 *         (04).created()                              此时：可以通过vm访问到data中的数据、methods中配置的方法。
 *         (05).Has "el" option?                       .
 *         (05).YES & NO                               .
 *         (05).Has "template" option?                 .
 *         (05).when vm.$mount(el) is called           .
 *         (05).YES & NO                               .
 *         (05).Compile template into render function  .
 *         (05).Compile el's outerHTML as template     此时：此阶段vue开始解析模板，生成虚拟DOM（内存中），页面不能显示解析好的内容。
 *         (06).beforeMount()                          此时：页面呈现的未经vue编译的DOM结构。所有对DOM的操作，最终都不奏效。
 *         (07).Create vm.$el and replace "el" with it 将内存中的虚拟DOM转为真实DOM插入页面。
 *         (08).mounted()                              此时：页面中呈现的是经过vue编译的DOM。对DOM的操作均有效（尽可能避免）。至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等等初始化操作。
 *         <!-- // 此阶段：更新阶段 -->
 *         (09).Mounted                                .
 *         (09).when data changes                      .
 *         (09).beforeUpdate()                         此时：数据是新的，但页面是旧的，即：页面尚未和数据保持同步。
 *         (09).Virtual DOM re-render and patch        根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即：完成Model->View更新。
 *         (09).updated()                              此时：数据是新的，页面也是新的，即：页面和数据保持同步。
 *         (10).when vm.$destroy() is called           .
 *         <!-- // 此阶段：销毁阶段 -->
 *         (11).beforeDestroy()                        此时：vm中所有的：data、methods、指令等等，都处于可用状态，马上就要执行销毁过程，一般在此阶段：关闭定时器、取消订阅消息、解绑自定义事件等等收尾操作。
 *         (12).Teardown watchers,                     .
 *         (12).child components and event listeners   .
 *         (13).Destroyed                              .
 *         (14).destroyed()                            .
 * 二、Vue 组件化编程
 * 2.1 模块
 *     理解:
 *         向外提供特定功能的 js 程序，一般就是一个 js 文件。
 *     原因：
 *         js 文件很多很复杂。
 *     作用：
 *         复用 js，简化 js 的编写，提高 js 运行效。
 * 2.2 组件
 *     理解:
 *         用来实现局部（特定）功能效果的代码集合（html/css/js/image等等）。
 *     原因：
 *         一个界面的功能很复杂。
 *     作用：
 *         复用编码，简化项目编码，提高运行效率。
 * 2.3 模块化
 *     当应用中的 js 都以模块来编写的，这个应用就是一个模块化的应用。
 * 2.4 Vue中使用组件的三大步骤：
 *         (1).定义组件（创建组件）。
 *         (2).注册组件。
 *         (3).使用组件（写组件标签）。
 *     如何定义一个组件？
 *         使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
 *         区别如下：
 *         (1).el   不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
 *         (2).data 必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
 *         备注：使用template可以配置组件结构。
 *     如何注册组件？
 *         (1).局部注册：创建new Vue()实例对象时候传入components选项。
 *         (2).全局注册：创建Vue.component('组件名', 组件)全局组件。
 *     编写组件标签：
 *         <SchoolView></SchoolView>
 * 2.4 几个注意点：
 *     (1).关于组件名:
 *         一个单词组成：
 *             第一种写法(首字母小写)：school
 *             第二种写法(首字母大写)：School
 *         多个单词组成：
 *             第一种写法(kebab-case命名)：my-school
 *             第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
 *         备注：
 *             (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
 *             (2).可以使用name配置项指定组件在开发者工具中呈现的名字。
 *     (2).关于组件标签:
 *         第一种写法：<school></school>
 *         第二种写法：<school/>
 *         备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
 *     (3).一个简写方式：
 *         const school = Vue.extend(options) 可简写为：const school = options
 * 2.4 关于VueComponent：
 *     (1).school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
 *     (2).我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：new VueComponent(options)。
 *     (3).特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent。
 *     (4).关于this指向：
 *         (1).组件配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
 *         (2).new Vue(options)配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。
 *     (5).【VueComponent的实例对象】，以后【简称vc】（也可称之为：组件实例对象）。
 *         const vc = Vue.extend({
 *             data() {
 *                 return {
 *                     name: 'Hello World'
 *                 }
 *             }
 *         });
 *     (5).【Vue的实例对象】，以后【简称vm】。
 *         const vm = new Vue({
 *             data() {
 *                 return {
 *                     name: 'Hello World'
 *                 }
 *             }
 *         });
 *     总结：【VueComponent】vc和【Vue】vm还是有区别的哈！！！
 * 2.4 分析Vue的实例对象vm与VueComponent的实例对象vc的关系：
 *     (1).一个重要的内置关系：
 *         VueComponent.prototype.__proto__ === Vue.prototype
 *     (2).为什么要有这个关系：
 *         让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法。
 * 2.4 非单文件组件
 *     1.模板编写没有提示。
 *     2.没有构建过程，无法将 ES6 转换成 ES5。
 *     3.不支持组件的 CSS。
 *     4.真正开发中几乎不用。
 *     Vue中使用组件的三大步骤：
 *         (1).定义组件（创建组件）。
 *         (2).注册组件。
 *         (3).使用组件（写组件标签）。
 *     (1).如何定义一个组件？
 *         使用【Vue.extend(options)】创建，其中创建实例对象时传入的那个options参数是什么呢？但也有点区别；
 *         区别如下：
 *             (1).el   不要写，为什么？回答：最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
 *             (2).data 必须写成函数，为什么？回答：避免组件被复用时，数据存在引用关系。
 *         备注：使用<template>可以配置组件结构。
 *     (2).如何注册组件？
 *         (1).局部注册：通过new Vue()实例对象的属性components选项传入。
 *         (2).全局注册：通过Vue.component('组件名', 组件)注册。
 *     (3).如何使用组件？
 *         (1).编写组件标签：<SchoolView></SchoolView>。
 *         // 第一步：创建HeaderView组件
 *         const HeaderView = Vue.extend({
 *             template:`
 *                 <div class="school-container">
 *                     <h2>用户登录：{{Sign in}}</h2>
 *                     <h2>联系我们：{{Sign out}}</h2>
 *                     <button @click="showName">退出</button>
 *                 </div>
 *             `,
 *             data() {
 *                 return {
 *                     schoolName: '深圳大学',
 *                     schoolAddress: '广东省深圳市南山区'
 *                 }
 *             },
 *             methods: {
 *                 showName() {
 *                     alert(this.schoolName);
 *                 }
 *             },
 *         });
 *         // 第一步：创建AsideView组件
 *         const AsideView = Vue.extend({
 *             template:`
 *                 <div class="student-container">
 *                     <h2>导航栏一：{{menuOne}}</h2>
 *                     <h2>导航栏二：{{menuTwo}}</h2>
 *                 </div>
 *             `,
 *             data() {
 *                 return {
 *                     studentName: 'Jack',
 *                     age: 18
 *                 }
 *             }
 *         });
 *         // 第一步：创建MainView组件
 *         const MainView = Vue.extend(options);
 *         // 第一步：创建HomeView组件
 *         const HelloView = Vue.extend({
 *             templates: `
 *                 <div>
 *                     <h2>欢迎你，来到{{schoolName}}学校报到！！！</h2>
 *                 </div>
 *             `,
 *             data() {
 *                 return {
 *                     name: 'Jessica'
 *                 }
 *             },
 *             // 第二步：局部注册组件
 *             components: {
 *                 HeaderView,
 *                 AsideView,
 *                 MainView
 *             }
 *         });
 *         // 第二步：全局注册组件
 *         import HomeView from '@/components/HomeView.vue';
 *         Vue.component('HomeView', HomeView);
 *         <template>
 *             <div class="home-container">
 *                 // 第三步：使用编写组件标签
 *                 <HeaderView></HeaderView>
 *                 // 第三步：使用编写组件标签
 *                 <AsideView></AsideView>
 *                 // 第三步：使用编写组件标签
 *                 <MainView></MainView>
 *             </div>
 *         </template>
 *     几个注意点：
 *     (1).关于组件名:
 *         一个单词组成：
 *             第01种写法(首字母小写)：header/aside/footer
 *             第02种写法(首字母大写)：Header/Aside/Footer
 *         多个单词组成：
 *             第01种写法(kebab-case命名)：my-header。
 *             第02种写法(CamelCase命名)：MyHeader，（需要Vue脚手架支持）。
 *         备注：
 *             (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
 *             (2).可以使用name配置项指定组件在开发者工具中呈现的名字。
 *     (2).关于组件标签:
 *         第一种写法：<school></school>
 *         第二种写法：<school/>
 *         备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
 *     (3).一个简写方式：
 *         const school = Vue.extend(options) 可简写为：const school = options。
 *     关于VueComponent：
 *         (1).school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
 *         (2).我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：new VueComponent(options)。
 *         (3).特别注意：每次调用 Vue.extend 返回的都是一个全新的 VueComponent。
 *         (4).关于this指向：
 *             (1).组件配置中：
 *                 data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
 *             (2).new Vue(options)配置中：
 *                 data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。
 *         (5).VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
 *         Vue的实例对象，以后简称vm。
 *     一个重要的内置关系：
 *         (1).一个重要的内置关系：【VueComponent.prototype.__proto__】 === 【Vue.prototype】。
 *         (2).为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。
 * 2.5 单文件组件
 *     一个.vue 文件的组成 3 个部分：
 *         (1).模板页面。
 *         (2).JS模块对象。
 *         (3).样式。
 *     基本使用：
 *         (1).引入组件。
 *         (2).映射成标签。
 *         (3).使用组件标签。
 *         <template>
 *             <div class="home-container">
 *                 // 使用组件标签
 *                 <SchoolView></SchoolView>
 *                 // 使用组件标签
 *                 <StudentView></StudentView>
 *             </div>
 *         </template>
 *         // 引入组件
 *         import School from '@/components/SchoolView.vue';
 *         import Student from '@/components/StudentView.vue';
 *         // 映射成标签
 *         export default {
 *             components:{
 *                 SchoolView,
 *                 StudentView
 *             }
 *         }
 * 三、使用 Vue-Cli 脚手架
 * 3.1 Vue-Cli 初始化脚手架
 *     (0).翻译：
 *         vue-cli -> Vue - Command Line Interface
 *     (1).说明
 *         (1).Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。
 *         (2).最新的版本是 4.x。
 *         (3).文档: https://cli.vuejs.org/zh/。
 *     (2).具体步骤
 *         第一步（仅第一次执行）：全局安装 @vue/cli 脚手架。
 *             # npm install -g @vue/cli
 *         第二步：切换到你要创建项目的目录，然后使用命令创建项目
 *             # vue create vue2-cli3-demo4
 *         第三步：启动项目
 *             # npm run serve
 *     (3).备注
 *         (1).如出现下载缓慢请配置 npm 淘宝镜像：https://registry.npm.taobao.org。
 *             # npm config set registry
 *         (2).Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpack 配置，请执行：
 *             # vue inspect > output.js
 *     (4).关于不同版本的Vue？
 *         (1).vue.js与vue.runtime.xxx.js的区别：
 *             (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
 *             (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
 *         (2).因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
 *         new Vue({
 *             el:'#app',
 *             render: h => h(App)
 *         });
 * 3.2 Vie-Cli 项目模板结构
 *     ├── node_modules       //
 *     ├── public             //
 *     │ ├── favicon.ico      // 页签图标
 *     │ └── index.html       // 主页面
 *     ├── src                //
 *     │ ├── assets           // 存放静态资源
 *     │ │ └── logo.png       //
 *     │ │── component        // 存放组件
 *     │ │ └── HelloWorld.vue //
 *     │ │── App.vue          // 汇总所有组件
 *     │ │── main.js          // 入口文件
 *     ├── .gitignore         // git 版本管制忽略的配置
 *     ├── babel.config.js    // babel 的配置文件
 *     ├── package.json       // 应用包配置文件
 *     ├── README.md          // 应用描述文件
 *     ├── package-lock.json  // 包版本控制文件
 * 3.2 ref 引用属性与 props 自定义属性
 *     1.ref 引用属性
 *     1).作用：用于给节点打标识。
 *     2).读取方式：
 *         <h1 v-text="msg" ref="title"></h1>
 *         <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
 *         <School ref="sch"/>
 *         // 真实DOM元素
 *         console.log(this.$refs.title);
 *         console.log(this.$refs.btn);
 *         console.log(this.$refs.sch);
 *     2.props 自定义属性
 *         // ParentView.vue
 *         <Student name="李四" sex="女" :age="18"/>
 *         // ChildView.vue
 *         <h1>{{msg}}</h1>
 *         <h2>学生姓名：{{name}}</h2>
 *         <h2>学生性别：{{sex}}</h2>
 *         <h2>学生年龄：{{myAge+1}}</h2>
 *         <button @click="updateAge">尝试修改收到的年龄</button>
 *     1).作用：用于父组件给子组件传递数据。
 *     2).读取方式一: 只指定名称
 *         props: [
 *             'name',
 *             'age',
 *             'setName'
 *         ]
 *     3).读取方式二: 指定名称和类型
 *         props: {
 *             userName: String,
 *             age: Number,
 *             running: Function
 *         }
 *     4).读取方式三: 指定名称/类型/必要性/默认值
 *         props: {
 *             name: {
 *                 type: String,
 *                 required: true,
 *                 default: 'admin'
 *             },
 *             age: {
 *                 type: Number,
 *                 default: 0
 *             }
 *         }
 *     ref属性与props属性：
 *     ref="myH3"
 *     ref="myBtn"
 *     ref="myIpt"
 *     props:['name', 'age', 'sex']
 *     props:{
 *         name: String,
 *         age: Number
 *     }
 *     props:{
 *         name:{
 *             type: String,
 *             required: true,
 *         },
 *         age:{
 *             type: Number,
 *             default: 18
 *         },
 *         sex:{
 *             type: String,
 *             required: true
 *         }
 *     }
 * 3.3 混入
 *     (1).Vue 插件是一个包含 install 方法的对象。
 *     (2).通过 install 方法给 Vue 或 Vue 实例添加方法，定义全局指令。
 *     (3).mixin 混入。
 *     import {hunhe1, hunhe2} from '@/mixin.js';
 *     // 全局混合
 *     Vue.mixin(hunhe1);
 *     Vue.mixin(hunhe2);
 *     // 配置文件混入mixin.js
 *     export const hunhe1 = {
 *         methods: {
 *             showName() {
 *                 alert(this.name);
 *             }
 *         },
 *         mounted() {
 *             console.log('你好啊！');
 *         },
 *     }
 *     export const hunhe2 = {
 *         data() {
 *             return {
 *                 x:100,
 *                 y:200
 *             }
 *         },
 *     }
 * 3.4 插件
 *     (1).Vue 插件是一个包含 install 方法的对象。
 *     (2).通过 install 方法给 Vue 或 Vue 实例添加方法, 定义全局指令等。
 *     (3).插件：
 *     import plugins from '@/plugins.js';
 *     // 配置文件使用插件plugins.js
 *     Vue.use(plugins);
 *     // plugins.js
 *     export default {
 *         install(Vue) {
 *             Vue.filter('mySlice', function(value) {
 *                 return value.slice(0, 4);
 *             });
 *             Vue.directive('fbind', {
 *                 bind(element,binding) {
 *                     element.value = binding.value
 *                 },
 *                 inserted(element,binding){
 *                     element.focus()
 *                 },
 *                 update(element,binding){
 *                     element.value = binding.value
 *                 }
 *             });
 *             Vue.mixin({
 *                 data() {
 *                     return {
 *                         x:100,
 *                         y:200
 *                     }
 *                 },
 *             });
 *         }
 *     }
 * 3.5 ToDoList案例
 *     扩展：
 *     本地存储：SessionStorage与LocalStorage
 *         sessionStorage.setItem('token', JSON.stringify(token));
 *         const result = sessionStorage.getItem('token');
 *         console.log(JSON.parse(result));
 *         sessionStorage.removeItem('token');
 *         sessionStorage.clear();
 *         --
 *         localStorage.setItem('token', JSON.stringify(token));
 *         const result = localStorage.getItem('token');
 *         console.log(JSON.parse(result));
 *         localStorage.removeItem('token');
 *         localStorage.clear();
 *     (1).浏览器本地存储LocalStorage对象：
 *         <button onclick="saveToken()">点我保存一个数据</button>
 *         <button onclick="readToken()">点我读取一个数据</button>
 *         <button onclick="deleteToken()">点我删除一个数据</button>
 *         <button onclick="deleteAll()">点我清空一个数据</button>
 *         function saveToken() {
 *             localStorage.setItem('token', token);
 *         }
 *         function readToken() {
 *             const token = localStorage.getItem('token');
 *             console.log(JSON.parse(token));
 *         }
 *         function deleteToken() {
 *             localStorage.removeItem('token');
 *         }
 *         function deleteAll() {
 *             localStorage.clear();
 *         }
 *     (2).浏览器本地存储SessionStorage对象：
 *         function saveToken() {
 *             sessionStorage.setItem('token', token);
 *         }
 *         function readToken() {
 *             const token = sessionStorage.getItem('token');
 *             console.log(JSON.parse(token));
 *         }
 *         function deleteToken() {
 *             sessionStorage.removeItem('token');
 *         }
 *         function deleteAll() {
 *             sessionStorage.clear();
 *         }
 *     添加：
 *     (01).先从App.vue组件传递给MyHeader.vue组件通过绑定属性v-bind。
 *     <MyList v-bind:list="array"></MyList>
 *     export default {
 *         data() {
 *             return {
 *                 array: [
 *                     {id: '10086', name: '中国移动', state: true},
 *                     {id: '10010', name: '中国联通', state: false},
 *                     {id: '10000', name: '中国电信', state: true},
 *                 ]
 *             }
 *         },
 *         methods: {
 *             // (04).添加obj到array中。【props适用于】子组件===>父组件通信（要求父组件先给子组件一个函数）
 *             array(obj) {
 *                 this.array.unshift(obj);
 *             }
 *         }
 *     }
 *     (02).然后MyHeader.vue组件接收App.vue传递过来的属性。
 *     <input type="text" placeholder="请输入搜索关键字" @keyup.enter="addObj($event)"></input>
 *     export default {
 *         【props适用于】父组件===>子组件通信
 *         props: {
 *             'list'
 *         },
 *         methods: {
 *             // (03).添加obj到list中。【props适用于】子组件===>父组件通信（要求父组件先给子组件一个函数）
 *             addObj(event) {
 *                 const obj = {id: '12306', title: '中国铁路', state: false};
 *                 this.list(obj);
 *             }
 *         }
 *     }
 *     勾选：
 *     (01).先从App.vue父级组件传递给MyList.vue子级组件通过绑定属性v-bind。
 *     <MyList v-bind:list="array" v-bind:check="checked"/>
 *     export default {
 *         data() {
 *             return {
 *                 array: [
 *                     {id: '10086', name: '中国移动', state: true},
 *                     {id: '10010', name: '中国联通', state: false},
 *                     {id: '10000', name: '中国电信', state: true},
 *                 ]
 *             }
 *         },
 *         methods: {
 *             // (04).添加obj到array中。
 *             array(obj) {
 *                 this.array.unshift(obj);
 *             },
 *             // (04).添加到checked中。【props适用于】子组件===>父组件通信（要求父组件先给子组件一个函数）
 *             checked(id) {
 * 				this.array.forEach((t) => {
 * 					if(t.id === id) t.state = !t.state;
 * 				})
 * 			},
 *         }
 *     }
 *     (02).然后MyList.vue子级组件接收App.vue父级组件传递过来的属性。
 *     <MyItem v-for="item in list" :key="item.id" v-bind:check="check"/>
 *     export default {
 *         【props适用于】父组件===>子组件通信
 *         props: {
 *             'list',
 *             'check'
 *         }
 *     }
 *     (02).然后MyItem.vue孙级组件接收MyList.vue子级组件传递过来的属性。
 *     <input type="checkbox" v-bind:checked="list.state" @change="set(list.id)"/>
 *     export default {
 *         【props适用于】父组件===>子组件通信
 *         props: {
 *             'list',
 *             'check'
 *         },
 *         check: {
 *             // (03).添加到check中。【props适用于】子组件===>父组件通信（要求父组件先给子组件一个函数）
 * 			  set(id) {
 * 			    this.check(id);
 * 			  },
 * 		  },
 *     }
 * 3.6 组件化编码流程（通用）
 *     1.实现静态组件：抽取组件，使用组件实现静态页面效果。
 *     2.展示动态数据：
 *         1).数据的类型、名称是什么？
 *         2).数据保存在哪个组件？
 *     3.交互——从绑定事件监听开始。
 * 3.6 Vue 中的自定义事件
 *     (1).组件自定义事件：
 *     // 子级组件
 *     this.$emit('share', value);
 *     // 父级组件
 *     <ChildView v-on:share="getShare">
 *     export default {
 *         methods: {
 *             // 回调函数
 *             getShare(val) {
 *                 console.log(val);
 *             }
 *         }
 *     }
 *     注意：解绑自定义事件。
 *     this.$off();
 *     父子组件相互共享数据场景一：自定义事件v-on
 *         // 父级组件：App.vue
 *         <div id="app">
 *             <!-- 使用v-bind父组件向子组件共享数据，使用v-on子组件向父组件共享数据 -->
 *             <MyHeader v-bind:one="oneAttr" v-bind:wei="weiAttr" v-on:ming="mingAttr">
 *             </MyHeader>
 *         </div>
 *         export default {
 *             components: {
 *                 MyHeader
 *             },
 *             methods: {
 *                 oneAttr(obj) {
 *                   console.log(`添加二个对象吧：${JSON.stringify(obj)}`);
 *                   this.array.unshift(obj);
 *                 },
 *                 weiAttr(val) {
 *                   console.log('10086', val);
 *                 },
 *                 mingAttr(val) {
 *                   console.log('12306', val);
 *                 },
 *             }
 *         }
 *         // 子级组件：MyHeader.vue
 *         <!-- 使用双向数据绑定：v-model="title"，使用事件绑定向父组件传递：v-on:keyup.enter="first()" -->
 *         <input type="text" placeholder="请输入你的搜索关键字" v-model="title" v-on:keyup.enter="first($event)">
 *         export default {
 *             // 父组件向子组件共享数据需要使用【自定义属性】
 *             props: [
 *               'one',
 *               'wei'
 *             ],
 *             methods: {
 *                 first() {
 *                     const obj = {id: nanoid(), title: this.title, state: false};
 *                     console.log(`添加一个对象吧：${JSON.stringify(obj)}`);
 *                     // 子组件向父组件共享数据使用【自定义事件?what?怎么传过去的呀】
 *                     this.one(obj);
 *                     this.wei(obj);
 *                     // 子组件向父组件共享数据使用【自定义事件$emit】
 *                     this.$emit('ming', obj);
 *                 }
 *             },
 *         }
 *     父子组件相互共享数据场景二：自定义事件$emit
 *         // 父级组件：App.vue
 *         <div id="app">
 *             <!-- 使用v-bind父组件向子组件共享数据，使用v-on子组件向父组件共享数据 -->
 *             <MyFooter v-bind:list="array" @twoChecked="oneChecked" @twoClear="oneClear">
 *             </MyFooter>
 *         </div>
 *         methods: {
 *             oneChecked(state) {
 *                 this.array.forEach((t) => {
 *                     t.state = state;
 *                 });
 *             },
 *             oneClear() {
 *                 this.array = this.array.filter((t) => {
 *                     return !t.state;
 *                 });
 *             }
 *         }
 *         // 子级组件：MyHeader.vue
 *         <input type="checkbox" v-model="threeChecked">
 *         <button class="btn btn-danger" @click="threeClear">清除已选清单</button>
 *         computed: {
 *             threeChecked: {
 *                 get() {
 *                     return this.other === this.total && this.total > 0;
 *                 },
 *                 set(value) {
 *                     // 子组件向父组件共享数据使用自定义事件
 *                     this.$emit('twoChecked', value);
 *                 }
 *             }
 *         },
 *         methods: {
 *             threeClear() {
 *                 // 子组件向父组件共享数据使用自定义事件
 *                 this.$emit('twoClear');
 *             }
 *         }
 *     父子组件相互共享数据场景三：全局事件总线$bus
 *         // 入口文件：main.js
 *         new Vue({
 *             router,
 *             store,
 *             render: h => h(App),
 *             // 第一步：安装全局事件总线
 *             beforeCreate() {
 *                 Vue.prototype.$bus = this
 *             }
 *         }).$mount('#app');
 *         // 父级组件：App.vue
 *         components: {
 *             MyList
 *         },
 *         methods: {
 *             oneState(id) {
 *                 console.log(`这里使用【${id}】的状态`);
 *                 this.array.forEach((t) => {
 *                     if (t.id === id) {
 *                         t.state = !t.state;
 *                     }
 *                 });
 *             },
 *             oneDelete(id) {
 *                 console.log(`第一层模块结构中【${id}】编号是`);
 *                 this.array = this.array.filter(t => t.id !== id);
 *             }
 *         },
 *         mounted() {
 *             // 接收数据
 *             this.$bus.$on('threeState', this.oneState);
 *             // 接收数据
 *             this.$bus.$on('threeDelete', this.oneDelete);
 *         },
 *         beforeDestroy() {
 *             // 解绑自定义事件监听
 *             this.$bus.$off('threeState');
 *             // 解绑自定义事件监听
 *             this.$bus.$off('threeDelete');
 *         }
 *         // 子级组件：MyItem.vue
 *         <input type="checkbox" v-bind:checked="obj.state" v-on:change="fourState(obj.id)">
 *         <button class="btn btn-danger" @click="fourDelete(obj.id)">删除</button>
 *         methods: {
 *             fourState(id) {
 *                 console.log(`这里勾选【${id}】的状态`);
 *                 // 子组件向父组件共享数据使用自定义事件
 *                 // this.threeState(id);
 *                 // 子组件向父组件共享数据使用自定义事件
 *                 // 发送数据
 *                 this.$bus.$emit('threeState', id);
 *             },
 *             fourDelete(id) {
 *                 console.log(`第三层模块结构中【${id}】编号是`);
 *                 // 子组件向父组件共享数据使用自定义事件
 *                 // this.threeDelete(id);
 *                 // 子组件向父组件共享数据使用自定义事件
 *                 // 发送数据
 *                 this.$bus.$emit('threeDelete', id);
 *             }
 *         }
 *     1.绑定事件监听
 *         <Header v-on:share="addCustomEvents"/>
 *         或者
 *         <Header ref="header"/>
 *         this.$refs.header.$on('share', this.addCustomEvents);
 *     2.触发事件
 *         this.$emit('share', customEvents);
 * 3.7 全局事件总线
 *     // 全局事件总线，任意组件间通信
 *     (1).一种组件间通信的方式，适用于任意组件间通信。
 *     (2).安装全局事件总结；
 *         new Vue({
 *             beforeCreate() {
 *                 // 安装全局事件总线，$bus就是当前应用的vm
 *                 Vue.prototype.$bus = this
 *             }
 *         });
 *     (3).使用事件总线；
 *         (1).接收数据，A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
 *         (2).提供数据：this.$bus.$emit('share', data)。
 *     (4).最好在beforeDestroy()钩子中，使用$off去解绑当前组件中所用到的事件。
 *     理解：
 *     (1). Vue 原型对象上包含事件处理的方法
 *         1).$on(eventName, listener)   绑定自定义事件监听。
 *         2).$emit(eventName, data)     分发自定义事件。
 *         3).$off(eventName)            解绑自定义事件监听。
 *         4).$once(eventName, listener) 绑定事件监听，但只能处理一次。
 *     (2). 所有组件实例对象的原型对象的原型对象就是 Vue 的原型对象
 *         1).所有组件对象都能看到 Vue 原型对象上的属性和方法。
 *         2).Vue.prototype.$bus = new Vue()，所有的组件对象都能看到 $bus 这个属性对象。
 *     (3). 全局事件总线
 *         1).包含事件处理相关方法的对象(只有一个)。
 *         2).所有的组件都可以得到。
 *     (4).指定事件总线对象：
 *         // 引入依赖创建实例对象方式
 *         const vm = new Vue({
 *             // 使用生命周期钩子函数创建之前，执行挂载全局事件总线对象的操作
 *             beforeCreate() {
 *                 Vue.prototype.$globalEventBus = this;
 *             }
 *         });
 *         vm.$mount('#app');
 *         // vue2-cli3脚手架入口文件方式
 *         new Vue({
 *             router,
 *             store,
 *             render: h => h(App),
 *             // 第一步：安装全局事件总线
 *             beforeCreate() {
 *                 Vue.prototype.$bus = this
 *             }
 *         }).$mount('#app');
 *     (5).绑定事件：
 *         this.$globalEventBus.$on('share', this.addCustomEvents);
 *     (6).分发事件：
 *         this.$globalEventBus.$emit('share', this.index);
 *     (7).解绑事件：
 *         this.$globalEventBus.$off('share');
 *     扩展：$nextTick
 *     (1).语法：this.$nextTick(callback)
 *     (2).作用：在下一次DOM更新结束后，执行其指定的回调函数。
 *     (3).场景：当改变数据后，要基于更新后的新DOM进行某些操作时，要在$nextTick()所指定的回调函数中执行。
 *         handleEdit(array) {
 *             if(array.hasOwnProperty('isEdit')) {
 *                 array.isEdit = true;
 *             }else {
 *                 this.$set(array, 'isEdit', true);
 *             }
 *             this.$nextTick(function() {
 *                 this.$refs.inputTitle.focus();
 *             });
 *         }
 * 3.8 消息订阅与发布
 *     理解：
 *     1.这种方式的思想与全局事件总线很相似
 *     2.它包含以下操作:
 *         1).订阅消息--对应绑定事件监听。
 *         2).发布消息--分发事件。
 *         3).取消消息订阅--解绑事件监听。
 *     3.需要引入一个消息订阅与发布的第三方实现库: PubSubJS
 * 3.9 使用 PubSubJS
 *     (1).在线文档: https://github.com/mroderick/PubSubJS
 *     (2).下载: npm install pubsub-js -S
 *     (3).相关语法
 *         // 引入第三方模块依赖包
 *         import PubSub from 'pubsub-js';
 *         PubSub.subscribe('msgName', function(msgName, data) {
 *            // 执行代码
 *         });
 *         // 发布消息, 触发订阅的回调函数调用
 *         PubSub.publish('msgName', data);
 *         // 取消消息的订阅
 *         PubSub.unsubscribe(token);
 *     (4).使用：
 *         // 接收方模块组件.vue
 *         import pubsub from 'pubsub-js';
 * 	       export default {
 * 		   mounted() {
 *             // 通过全局事件总线接收数据
 *             this.$bus.$on('hello', data});
 *             // 通过消息订阅与发布接收数据
 *             this.data = pubsub.subscribe('hello', (msgName, data) => {
 *                 console.log(this);
 *                 console.log('有人发布了消息，消息的回调执行了', msgName, data);
 *             });
 *             beforeDestroy() {
 *                 // 解绑自定义事件监听
 *                 this.$bus.$off('hello');
 *                 // 同上
 *                 pubsub.unsubscribe(this.data);
 *             }
 *         }
 *         // 发送方模块组件.vue
 *         <button @click="sendData()">把数据发送给接收方组件</button>
 *         import pubsub from 'pubsub-js';
 * 	       export default {
 *         data() {
 *             return {
 *                 name: 'Hello World'
 *             }
 *         },
 *         methods: {
 *             sendData() {
 *                 // 通过全局事件总线发送数据
 *                 this.$bus.$emit('hello', this.name);
 *                 // 同上
 *                 pubsub.publish('hello', this.name);
 *             }
 *         }
 * 3.9 过渡与动画
 *     【动画】
 *     Vue封装的过渡与动画。
 *     (1).作用：在插入、更新或者移除DOM元素时，在合适的时候给元素添加样式类名。
 *     (2).图示：
 *     (3).写法一：
 *         (1).准备好样式；
 *         (2).使用<transition></transition>双标签包裹过渡的元素，并且配置name属性；
 *         (3).备注：若有多个元素需要过渡，则需要使用<transition-group></transition-group>双标签包裹，并且每个元素都需要指定key值。
 *             .hello-enter-active {
 *                 animation: liuweiwei 0.5s linear;
 *             }
 *             .hello-leave-active {
 *                 animation: liuweiwei 0.5s linear reverse;
 *             }
 *             @keyframes liuweiwei {
 *                 from {
 *                     transform: translateX(-100%);
 *                 }
 *                 to {
 *                     transform: translateX(0px);
 *                 }
 *             }
 *     【过渡】
 *     Vue封装的过渡与动画。
 *     (1).作用：在插入、更新或者移除DOM元素时，在合适的时候给元素添加样式类名。
 *     (2).图示：
 *     (3).写法一：
 *         (1).准备好样式；
 *         (2).使用<transition></transition>双标签包裹过渡的元素，并且配置name属性；
 *         (3).备注：若有多个元素需要过渡，则需要使用<transition-group></transition-group>双标签包裹，并且每个元素都需要指定key值。
 *             <transition name="hello" appear>
 *                 <h1 v-show="isShow">你好啊！！！</h1>
 *             </transition>
 *             <transition-group name="hello" appear>
 *                 <h1 v-show="!isShow" key="1">你好啊！！！</h1>
 *                 <h1 v-show="isShow"  key="2">好不好！！！</h1>
 *             </transition-group>
 *             <transition-group name="todo" appear>
 *                 <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
 *             </transition-group>
 *     理解：
 *     1.操作 css 的 transition 或 animation。
 *     2.vue 会给目标元素添加/移除特定的 class。
 *     3.过渡的相关类名：
 *         1).xxx-enter-active       指定显示的 transition。
 *         2).xxx-leave-active       指定隐藏的 transition。
 *         3).xxx-enter/xxx-leave-to 指定隐藏时的样式。
 *     4.图示：
 *         [            Enter          ] [            Leave          ]
 *         [Opacity: 0]---->[Opacity: 1] [Opacity: 1]---->[Opacity: 0]
 *         [   |                |      ] [   |                |      ]
 *         [v-enter          v-enter-to] [v-leave          v-leave-to]
 *         [---------------------------] [---------------------------]
 *         [             |             ] [             |             ]
 *         [      v-enter-active       ] [      v-leave-active       ]
 *     【配置代理】
 *     (1).xhr           new XMLHttpRequest();
 *     (2).jQuery        $.ajax();
 *     (3).axios         .get();
 *     (4).fetch         .
 *     (5).vue-resource  插件库。
 *     # npm install axios
 *     const url = 'http://localhost:8080/api/list'
 *     axios.get(url).then(
 *         response => {
 *             console.log(response.data);
 *         },
 *         error => {
 *             console.log(error.message);
 *         }
 *     );
 *     报错：
 *     Access to XMLHttpRequest at '' from origin '' has been blocked by CORS policy: 'Access-Control-Allow-Origin'
 *     解决方式一：
 *     (1).vue.config.js
 *     (2).开启配置代理服务器
 *     module.exports = {
 *         devServer: {
 *             proxy: 'http://localhost:8080'
 *         }
 *     }
 *     解决方式二：
 *     (1).vue.config.js
 *     (2).开启配置代理服务器
 *     module.exports {
 *         devServer: {
 *             proxy: {
 *                 '/api': {
 *                     target: '<url>',
 *                     ws: true,
 *                     changeOrigin: true
 *                 },
 *                 '/foo': {
 *                     target: '<other_url>'
 *                 }
 *             }
 *         }
 *     }
 *     <!-- vue-resource  插件库 -->
 *     (0).安装第三方模块
 *     # npm install vue-resource
 *     (1).引入插件
 *     import vueResource from 'vue-resource';
 *     (2).使用插件
 *     Vue.use(vueResource);
 *     export default {
 *     name:'SearchView',
 *         data() {
 *             return {
 *                 keyWord: ''
 *             }
 *         },
 *         methods: {
 *             search() {
 *                 this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
 *                     response => {
 *                         console.log(response.data);
 *                         this.$bus.$emit('share', response.data);
 *                     },
 *                     error => {
 *                         this.$bus.$emit('share', 500);
 *                     }
 *                 )
 *             }
 *         },
 * 	    }
 * 3.10 基本过渡动画的编码
 *     1.在目标元素外包裹：<transition name="xxx">
 *     2.定义 class 样式
 *         a).指定过渡样式: transition。
 *         b).指定隐藏时的样式: opacity/其它。
 * 四、Vue 中的 Ajax
 *     (1).场景：
 *         在开发中经常会遇到跨域这个问题。今天想从跨域的原理说起，接着到解决方案，最后到框架对跨域的封装。
 *     (2).原理：
 *         跨域指的是在URL访问地址中的协议、域名、端口任意一个不同，都被称为跨域访问。
 *         先对一个URL进行部分的拆分：
 *             http://carts.shopping:8080/api/index.html
 *             http://192.168.50.168:8080/api/index.html
 *             协议：
 *                 http 或者 https
 *             域名：
 *                 carts.shopping 或者 192.168.50.168
 *             端口号：
 *                 8080
 *             路径：
 *                 api
 *             文件：
 *                 index.html
 *         如果单独针对前端不涉及服务器，那么是无法处理端口、协议不同的情况，要解决这种情况，必须涉及到服务器，使用代理等方法。
 *     (3).CORS
 *         CORS：Cross-Origin Resource Sharing 跨域资源共享。
 *         大家最经常使用的跨域解决方案是：CORS（Cross-Origin Resource Sharing 跨域资源共享）。
 *         注意：需要前后端统一 http 的请求头。
 * 4.0 配置代理
 *     (1).xhr           new XMLHttpRequest();
 *     (2).jQuery-Ajax   $.ajax();
 *     (3).axios         .get();
 *     (4).fetch         .
 *     (5).vue-resource  插件库。
 * 第一种：xhr 原生
 *     const xhr = new XMLHttpRequest();
 *     xhr.open('post', 'url', 'true');
 *     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 *     xhr.send('name' + username);
 * 第二种：jQuery-Ajax
 *     $.ajax({
 *         url: 'http://abc.com/abc.html',
 *         dataType:'jsonp',
 *         jsonp: 'jsonpcallback',
 *         success: function(data) {
 *             // 处理返回函数
 *             console.log('data', data);
 *         },
 *         error: function() {
 *             console.log(500);
 *         }
 *     });
 * 第三种：Axios
 *     # npm install axios
 *     const url = 'http://localhost:8080/api/list'
 *     axios.get(url).then(
 *         response => {
 *             console.log(response.data);
 *         },
 *         error => {
 *             console.log(error.message);
 *         }
 *     );
 *     报错：
 *     Access to XMLHttpRequest at '' from origin '' has been blocked by CORS policy: 'Acess-Control-Allow-Origin'
 *     解决方式一：
 *     (1).vue.config.js
 *     (2).开启配置代理服务器
 *     module.exports = {
 *         devServer: {
 *             proxy: 'http://localhost:8080'
 *         }
 *     }
 *     解决方式二：
 *     (1).vue.config.js
 *     (2).开启配置代理服务器
 *     module.exports {
 *         devServer: {
 *             proxy: {
 *                 '/api': {
 *                     target: '<url>',
 *                     ws: true,
 *                     changeOrigin: true
 *                 },
 *                 '/foo': {
 *                     target: '<other_url>'
 *                 }
 *             }
 *         }
 *     }
 * 第四种：fetch
 *     // 候补
 * 第五种：vue-resource 插件库
 *     (0).安装第三方模块
 *     # npm install vue-resource
 *     (1).引入插件
 *     import vueResource from 'vue-resource';
 *     (2).使用插件
 *     Vue.use(vueResource);
 *     export default {
 *         name:'SearchView',
 *         data() {
 *             return {
 *                 keyWord: ''
 *             }
 *         },
 *         methods: {
 *             search() {
 *                 this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
 *                     response => {
 *                         console.log(response.data);
 *                         this.$bus.$emit('share', response.data);
 *                     },
 *                     error => {
 *                         this.$bus.$emit('share', 500);
 *                     }
 *                 )
 *             }
 *         },
 *     }
 * 4.1 解决开发环境 Ajax 跨域问题
 *     使用代理服务器。
 * 4.2 github 用户搜索案例
 *     效果：
 *     Search Github Users
 *     welcome to use...
 *     接口地址：
 *     https://api.github.com/search/users?q=liuweiwei
 * 4.3 Vue 项目中常用的 2 个 Ajax 库
 *     1).axios
 *     通用的 Ajax 请求库, 官方推荐，使用广泛。
 *     2).vue-resource
 *     vue 插件库，vue1.x 版本使用广泛，官方已不维护。
 * 4.4 slot 插槽
 *     (1).不使用插槽
 *     <template>
 *         <div class="category">
 *             <h3>{{title}}分类</h3>
 *         </div>
 *     </template>
 *     (2).默认插槽
 *     <template>
 *         <div class="category">
 *             <h3>{{title}}分类</h3>
 *             <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
 *             <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
 *         </div>
 *     </template>
 *     (3).具名插槽
 *     // App.vue
 *     <template>
 *         <div class="container">
 *             <Category title="美食" >
 *                 <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
 *                 <a slot="footer" href="http://www.atguigu.com">更多美食</a>
 *             </Category>
 *             <Category title="游戏" >
 *                 <ul slot="center">
 *                     <li v-for="(g,index) in games" :key="index">{{g}}</li>
 *                 </ul>
 *                 <div class="foot" slot="footer">
 *                     <a href="http://www.atguigu.com">单机游戏</a>
 *                     <a href="http://www.atguigu.com">网络游戏</a>
 *                 </div>
 *             </Category>
 *             <Category title="电影">
 *                 <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
 *                 <template v-slot:footer>
 *                     <div class="foot">
 *                         <a href="http://www.atguigu.com">经典</a>
 *                         <a href="http://www.atguigu.com">热门</a>
 *                         <a href="http://www.atguigu.com">推荐</a>
 *                     </div>
 *                     <h4>欢迎前来观影</h4>
 *                 </template>
 *             </Category>
 *         </div>
 *     </template>
 *     // CategoryView.vue
 *     <template>
 *         <div class="category">
 *             <h3>{{title}}分类</h3>
 *             <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
 *             <slot name="center">我是Center插槽，当使用者没有传递具体结构时，我会出现哈！！！</slot>
 *             <slot name="footer">我是Footer插槽，当使用者没有传递具体结构时，我会出现哒！！！</slot>
 *         </div>
 *     </template>
 *     (4).作用域插槽
 *     // App.vue
 *     <Category title="游戏">
 *         <template scope="liuweiwei">
 *             <ul>
 *                 <li v-for="(g, index) in list.games" :key="index">{{g}}</li>
 *             </ul>
 *         </template>
 *     </Category>
 *     <Category title="游戏">
 *         <template scope="{games}">
 *             <ol>
 *                 <li style="color:red" v-for="(g, index) in games" :key="index">{{g}}</li>
 *             </ol>
 *         </template>
 *     </Category>
 *     <Category title="游戏">
 *         <template slot-scope="{games}">
 *             <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
 *         </template>
 *     </Category>
 *     // CategoryView.vue
 *     <div class="category">
 *         <h3>{{title}}分类</h3>
 *         <slot :games="games" msg="hello">我是默认的一些内容</slot>
 *     </div>
 *     理解：
 *         父组件向子组件传递带数据的标签，当一个组件有不确定的结构时，就需要使用 slot 插槽技术，
 *     注意：
 *         插槽内容是在父组件中编译后，再传递给子组件的。
 * 五、Vuex
 * 5.1 Vuex 的理解
 * 概念：
 *     (1).专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
 *     (1).在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
 *     (2).Github 地址: https://github.com/vuejs/vuex
 * 场景：
 *     (1).多个组件需要共享数据时。
 * 搭建环境：
 *     // @/store/index.js
 *     (0).下载第三方模板插件状态管理依赖包
 *         # npm install vuex@3.6.2
 *     (1).引入第三方模板插件状态管理依赖包
 *         import Vuex from 'vuex';
 *     (2).使用第三方模板插件状态管理vuex
 *         Vue.use(Vuex);
 *     (3).创建状态管理实例对象
 *         const store = new Vuex.Store({
 *             state: {},
 *             getters: {},
 *             mutations: {},
 *             actions: {},
 *             modules: {}
 *         });
 *     (4).向外共享状态管理实例对象
 *         export default store;
 *     // @/main.js
 *     (5).导入第三方模块插件状态管理实例对象
 *         import store from "@/store/index.js";
 *     (6).挂载第三方模板插件状态管理实例对象store
 *         new Vue({
 *             // 核心一：路由管理
 *             router: router,
 *             // 核心二：状态管理
 *             store: store,
 *             // 核心三：渲染函数
 *             render: h => h(App)
 *         }).$mount('#app');
 * 基本使用：
 *     (1).初始化数据。配置：actions，配置：mutations，配置：state，均在操作文件：@/store/index.js。
 *         import Vue  from 'vue';
 *         import Vuex from 'vuex';
 *         Vue.use(Vuex);
 *         const store = new Vuex.Store({
 *             state: {
 *                 sum: 0
 *             },
 *             mutations: {
 *                 ADD(state, value) {
 *                     state.sum += value;
 *                 }
 *             },
 *             actions: {
 *                 additionWait(context, value) {
 *                     context.commit('ADD', value);
 *                 }
 *             }
 *         });
 *         export default store;
 *     (2).组件中读取vuex中的数据：$store.state.sum。
 *         <h4>当前求和为：{{ this.$store.state.sum }}</h4>
 *     (3).组件中修改vuex中的数据：$store.dispatch('action中的方法名', 数据)，或者$store.commit('mutations中的方法名', 数据)。
 *         data() {
 *             return {
 *                 n: 1
 *             };
 *         },
 *         methods: {
 *             increment() {
 *                 this.$store.commit('ADD', this.n);
 *             },
 *             incrementWait() {
 *                 this.$store.dispatch('additionWait', this.n);
 *             }
 *         }
 *     备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit。
 * getters基本使用：
 *     (1).概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
 *     (2).在@/store/index.js中追加getters配置。
 *         import Vue  from 'vue';
 *         import Vuex from 'vuex';
 *         Vue.use(Vuex);
 *         const store = new Vuex.Store({
 *             state: {
 *                 sum: 0
 *             },
 *             getters: {
 *                 dataProcessing(state) {
 *                     return state.sum * 10;
 *                 }
 *             },
 *             mutations: {
 *                 ADD(state, value) {
 *                     state.sum += value;
 *                 }
 *             },
 *             actions: {
 *                 additionWait(context, value) {
 *                     context.commit('ADD', value);
 *                 }
 *             }
 *         });
 *         export default store;
 *     (3).组件中读取数据：$store.getters.dataProcessing。
 *         <h4>当前求和翻十倍：{{ this.$store.getters.dataProcessing }}</h4>
 * Vuex提供的四个map方法的使用：
 *         // 引入第三方模板状态管理vuex的什么mapState
 *         import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
 *     (1).使用Vuex中的mapState方法，用于帮助我们映射```state```中的数据为计算属性。
 *         <!-- Vuex.$store.mapState()或者Vuex.$store.mapGetters() -->
 *         <button v-on:click="increment()">递增+1</button>
 *         <button v-on:click="decrement()">递减-1</button>
 *         <button v-on:click="incrementOdd()">当前求和为奇数再加</button>
 *         <button v-on:click="incrementWait()">等一等再加</button>
 *         computed: {
 *             // 借助mapState生成计算属性，从state中读取数据。（对象写法）
 *             ...mapState({key1: 'sum', key2: 'message', key3: 'status'}),
 *             // 借助mapState生成计算属性，从state中读取数据。（数组写法）
 *             ...mapState(['sum', 'message', 'status']),
 *         },
 *         // 获取计算属性的值
 *         <h4>通过Vuex插件mapState()函数获取state中的数据：{{key1}}，{{key2}}，{{key3}}</h4>
 *         <h4>通过Vuex插件mapState()函数获取state中的数据：{{sum}}，{{message}}，{{status}}</h4>
 *     (2).使用Vuex中的mapGetters方法，用于帮助我们映射```getters```中的数据为计算属性。
 *         <!-- Vuex.$store.mapState()或者Vuex.$store.mapGetters() -->
 *         <button v-on:click="increment()">递增+1</button>
 *         <button v-on:click="decrement()">递减-1</button>
 *         <button v-on:click="incrementOdd()">当前求和为奇数再加</button>
 *         <button v-on:click="incrementWait()">等一等再加</button>
 *         computed: {
 *             // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
 *             ...mapGetters({bigSum: 'dataProcessing'}),
 *             // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
 *             ...mapGetters(['dataProcessing']),
 *         },
 *         // 获取计算属性的值
 *         <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{bigSum}}</h4>
 *         <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{dataProcessing}}</h4>
 *     (3).使用Vuex中的mapActions方法，用于帮助我们生成与```actions```对话的方法。即：包含$store.dispatch(xxx)的函数。
 *         <!-- Vuex.$store.mapMutations()或者Vuex.$store.mapActions() -->
 *         <button v-on:click="increment(n)">递增+1</button>
 *         <button v-on:click="decrement(n)">递减-1</button>
 *         <button v-on:click="incrementOdd(n)">当前求和为奇数再加</button>
 *         <button v-on:click="incrementWait(n)">等一等再加</button>
 *         methods:{
 *             // 靠mapActions生成：increment、decrement（对象形式）
 *             ...mapMutations({increment:'ADD', decrement:'SUB'}),
 *             // 靠mapMutations生成：ADD、SUB（对象形式）
 *             ...mapMutations(['ADD', 'SUB']),
 *         }
 *     (4).使用Vuex中的mapMutations方法，用于帮助我们生成与```mutations```对话的方法。即：包含$store.commit(xxx)的函数。
 *         <!-- Vuex.$store.mapMutations()或者Vuex.$store.mapActions() -->
 *         <button v-on:click="increment(n)">递增+1</button>
 *         <button v-on:click="decrement(n)">递减-1</button>
 *         <button v-on:click="incrementOdd(n)">当前求和为奇数再加</button>
 *         <button v-on:click="incrementWait(n)">等一等再加</button>
 *         methods:{
 *             // 靠mapActions生成：incrementOdd、incrementWait（对象形式）
 *             ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
 *             // 靠mapActions生成：incrementOdd、incrementWait（数组形式）
 *             ...mapActions(['addOdd', 'addWait']),
 *         }
 *     备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。
 * Vuex模块化+命名空间基本使用：
 *     (1).目的：让代码更好维护，让多种数据分类更加明确。
 *     (2).修改：@/store/index.js。
 *         // 统计命名空间一
 *         const countAbout = {
 *             // 开启命名空间
 *             namespaced:true,
 *             state:{
 *                 x:200,
 *                 sum:0,
 *                 school:'SZ',
 *                 subject:'Font-End'
 *             },
 *             mutations: {
 *                 ADD(state, value) {
 *                     state.sum += value;
 *                 },
 *                 SUB() {
 *                     state.sum -= value;
 *                 }
 *             },
 *             actions: {
 *                 jiaOdd(context, value) {
 *                     if(context.state.sum % 2) {
 *                         context.commit('ADD', value);
 *                     }
 *                 },
 *                 jiaWait(context, value) {
 *                     setTimeout(() => {
 *                         context.commit('ADD', value);
 *                     }, 1000);
 *                 }
 *             },
 *             getters: {
 *                 bigSum(state){
 *                     return state.sum * 10
 *                 }
 *             }
 *         }
 *         // 职工命名空间二
 *         const personAbout = {
 *             // 开启命名空间
 *             namespaced:true,
 *             state:{
 *                 y:500,
 *                 list:[
 *                     {id:1, name:'a', age:28}
 *                 ]
 *             },
 *             getters:{
 *                 firstPersonName(state){
 *                     return state.personList[0].name
 *                 }
 *             },
 *             mutations: {
 *                 ADD_PERSON(state, value) {
 *                     state.personList.unshift(value);
 *                 }
 *             },
 *             actions: {
 *                 addPersonWang(context, value) {
 *                     if(value.name.indexOf('王') === 0) {
 *                         context.commit('ADD_PERSON', value);
 *                     }
 *                 }
 *             }
 *         }
 *         // 创建状态管理实例对象
 *         const store = new Vuex.Store({
 *             modules: {
 *                 countAbout,
 *                 personAbout
 *             }
 *         });
 *         // 向外共享状态管理实例对象
 *         export default store;
 *     提示：或者创建两个不同的JS文件，比如：@/store/count-store.js和@/store/person-store.js，然后在@/store/index.js中引入。
 *     (3).开启命名空间后，组件中读取state数据：
 *         // 方式一：自己直接读取
 *         this.$store.state.personAbout.list;
 *         // 方式二：借助mapState读取：
 *         ...mapState('countAbout',['sum', 'school', 'subject']),
 *     （4）.开启命名空间后，组件中读取getters数据：
 *         // 方式一：自己直接读取
 *         this.$store.getters['personAbout/firstPersonName'];
 *         // 方式二：借助mapGetters读取：
 *         ...mapGetters('countAbout', ['bigSum']);
 *     （5）.开启命名空间后，组件中调用dispatch
 *         // 方式一：自己直接dispatch
 *         this.$store.dispatch('personAbout/addPersonWang', person);
 *         // 方式二：借助mapActions：
 *         ...mapActions('countAbout', {incrementOdd:'jiaOdd', incrementWait:'jiaWait'});
 *     （6）.开启命名空间后，组件中调用commit
 *         //方式一：自己直接commit
 *         this.$store.commit('personAbout/ADD_PERSON', person);
 *         //方式二：借助mapMutations：
 *         ...mapMutations('countAbout',{increment:'ADD', decrement:'SUB'}),
 *     实例：(命名空间一)count-store.js+(命名空间二)person-store.js+index.js
 *         // PersonView.vue
 *         <h4>通过Vuex插件mapState()函数获取modules中的数据：{{val1}}，{{val2}}，{{val3}}</h4>
 *         <h4>通过Vuex插件mapState()函数获取modules中的数据：{{countSum}}，{{countMessage}}，{{countStatus}}</h4>
 *         <h4>通过Vuex插件mapState()函数获取modules中的数据：{{personSum}}，{{personMessage}}，{{personStatus}}</h4>
 *         import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
 *         computed: {
 *            // mapState()
 *            // 借助mapState生成计算属性，从state中读取数据。（对象写法）
 *            ...mapState({key1: 'sum', key2: 'message', key3: 'status', key4: 'list'}),
 *            // 借助mapState生成计算属性，从state中读取数据。（数组写法）
 *            ...mapState(['sum', 'message', 'status', 'list']),
 *            // mapState()
 *            // 借助mapState()函数生成计算属性，从模块命名空间中读取数据。（对象写法）
 *            ...mapState('countStore', {val1: 'countSum', val2: 'countMessage', val3: 'countStatus'}),
 *            // 借助mapState()函数生成计算属性，从模块命名空间中读取数据。（数组写法）
 *            ...mapState('countStore', ['countSum', 'countMessage', 'countStatus']),
 *            ...mapState('personStore', ['personSum', 'personMessage', 'personStatus']),
 *            // mapGetters()
 *            // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
 *            ...mapGetters({bigSum: 'dataProcessing'}),
 *            // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
 *            ...mapGetters(['dataProcessing']),
 *         },
 *         methods: {
 *            // mapMutations()
 *            // 靠mapActions生成：increment、decrement（对象形式）
 *            ...mapMutations({increment:'ADD', decrement:'SUB'}),
 *            // 靠mapMutations生成：ADD、SUB（对象形式）
 *            ...mapMutations(['ADD', 'SUB']),
 *            // mapActions()
 *            // 靠mapActions生成：incrementOdd、incrementWait（对象形式）
 *            ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
 *            // 靠mapActions生成：incrementOdd、incrementWait（数组形式）
 *            ...mapActions(['addOdd', 'addWait']),
 *         },
 *         // CountView.vue
 *         <h4 style="color: red">当前求和为：{{ this.$store.state.sum }}</h4>
 *         <h4 style="color: red">当前求和翻十倍：{{ this.$store.getters.dataProcessing }}</h4>
 *         <h4 style="color: red">当前总人数是：{{ this.$store.state.list.length }}</h4>
 *         <h4 style="color: red">列表中第一个人的名字是：{{ firstName }}</h4>
 *         <input type="text" placeholder="请输入模糊搜索关键字..." v-model="nickname">&nbsp
 *         <button v-on:click="addPerson()">新增</button>
 *         <input type="text" placeholder="请输入模糊搜索关键字..." v-model="nickname">&nbsp;
 *         <button v-on:click="add()">添加</button>
 *         <ul>
 *             <li v-for="person in list" v-bind:key="person.id">{{ person.nickname }}</li>
 *         </ul>
 *         <ul>
 *             <li v-for="person in personList" v-bind:key="person.id">工号：{{person.id}}，姓名：{{person.name}}，年龄：{{person.age}}</li>
 *         </ul>
 *         // 通过计算属性（Computed）获取状态管理插件中的状态或数据（State）生成属性。
 *         computed: {
 *             list() {
 *                 return this.$store.state.list;
 *             },
 *             sum() {
 *                 return this.$store.state.sum;
 *             },
 *             personList() {
 *               return this.$store.state.personStore.personList;
 *             },
 *             firstName() {
 *                 return this.$store.getters['personStore/firstName'];
 *             }
 *         },
 *         methods: {
 *             // 通过状态管理后厨：用于操作数据（State）的函数添加数据（State）
 *             addPerson() {
 *                 const person = {id: nanoid(), nickname: this.nickname, status: 0, isDelete: false};
 *                 this.$store.commit('ADD_LIST', person);
 *                 this.nickname = '';
 *             },
 *             add() {
 *                 const person = {id: nanoid(), name: this.nickname, age: 44, state: 0};
 *                 this.$store.commit('personStore/ADD_PERSON', person);
 *                 this.nickname = '';
 *             }
 *         }
 * 5.2 Vuex 的使用
 *     1. 多个组件依赖于同一状态。
 *     2. 来自不同组件的行为需要变更同一状态。
 * 5.3 Vuex 案例
 *     当前求和为：0
 * 5.4 Vuex 工作原理图
 *     [ Vuex ]
 *     Vue Components -> Dispatch -> [ Actions -> Commit -> Mutations -> Mutate -> State ] -> Render
 * 5.5 Vuex 核心概念和API
 *     1. state
 *     1).Vuex管理的状态对象。
 *     2).Vuex应该是唯一的。
 *     3).示例代码：
 *         const state = {
 *             xxx: initialValue
 *         }
 *     2. actions
 *     1).值为一个对象，包含多个响应用户动作的回调函数。
 *     2).通过 commit()来触发 mutation 中函数的调用，间接更新 state。
 *     3).如何触发 actions 中的回调？在组件中使用: $store.dispatch('对应的 action 回调名') 触发。
 *     4).可以包含异步代码（定时器，ajax 等等）。
 *     5).示例代码：
 *         const actions = {
 *             zzz ({commit, state}, data1) {
 *                 commit('yyy', {data1});
 *             }
 *         }
 *     3. mutations
 *     1).值是一个对象，包含多个直接更新 state 的方法。
 *     2).谁能调用 mutations 中的方法？如何调用？在 action 中使用：commit('对应的 mutations 方法名') 触发。
 *     3).mutations 中方法的特点：不能写异步代码、只能单纯的操作 state。
 *     4).示例代码：
 *         const mutations = {
 *             yyy (state, {data1}) {
 *                 // 更新state的某个属性
 *             }
 *         }
 *     4. getters
 *     1).值为一个对象，包含多个用于返回数据的函数。
 *     2).如何使用？使用：$store.getters.xxx。
 *     3).示例代码：
 *         const getters = {
 *             mmm (state) {
 *                 return state.msg + '!';
 *             }
 *         }
 *     5. modules
 *     1).包含多个 module。
 *     2).一个 module 是一个 store 的配置对象。
 *     3).与一个组件（包含有共享数据）对应。
 * 六、Vue-Router 路由
 * 6.1 vue-router 的理解
 *     vue 的一个插件库，专门用来实现 SPA 应用。
 * 6.2 对 SPA 应用的理解
 *     1. 单页 Web 应用（Single Page web Application，SPA）。
 *     2. 整个应用只有一个完整的页面。
 *     3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。
 *     4. 数据需要通过 ajax 请求获取。
 * 6.3 什么是路由？
 *     1. 一个路由就是一组映射关系（key - value）。
 *     2. key 为路径, value 可能是 function 或 component。
 * 6.4 路由的分类？
 *     1. 后端路由：
 *     1).理解：value 是 function, 用于处理客户端提交的请求。
 *     2).工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。
 *     2. 前端路由：
 *     1).理解：value 是 component，用于展示页面内容。
 *     2).工作过程：当浏览器的路径改变时, 对应的组件就会显示。
 * 6.5 效果
 *     http://localhost:8080/#/
 * 6.6 总结
 *     编写使用路由的 3 个步骤：
 *     1. 定义路由组件。
 *     2. 注册路由。
 *     3. 使用路由。
 * 6.7 嵌套（多级）路由
 *    http://localhost:8080/#/
 * 6.8 路由传参
 *    http://localhost:8080/#/
 * 6.9 编程式路由导航
 *     声明式导航与编程式导航的区别？
 *         1).在浏览器中，点击链接实现导航的方式，叫做声明式导航。
 *             例如：普通网页中点击【<a>链接】、或者 VUE 项目中点击【<router-link>】都属于声明式导航。
 *         2).在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。
 *             例如：普通网页中调用【location.href】跳转到新页面的方式，属于编程式导航。
 *     vue-router 路由提供了许多编程式导航的 API，其中最常用的导航 API 分别是：
 *     相关 API：
 *     1. this.$router.push(path)    : 相当于点击路由链接(可以返回到当前路由界面)。
 *     2. this.$router.replace(path) : 用新路由替换当前路由(不可以返回到当前路由界面)。
 *     3. this.$router.back()        : 请求(返回)上一个记录路由。
 *     4. this.$router.go(-1)        : 请求(返回)上一个记录路由。
 *     5. this.$router.go(1)         : 请求下一个记录路由。
 * 七、Vue UI 组件库
 * 7.1 Mobile 端常用 UI 组件库
 *     1. Vant：https://youzan.github.io/vant
 *     2. Cube UI：https://didi.github.io/cube-ui
 *     3. Mint UI：http://mint-ui.github.io
 * 7.2 PC 端常用 UI 组件库
 *     1. Element UI：https://element.eleme.cn
 *     2. IView UI：https://www.iviewui.com
 */




/**
 * 总结：
 * 【黑马程序员Vue视频教程目录】
 * 一、webpack 前端工程化
 *     (01).创建 vue-cli 工程。
 *     (02).创建 vite 工程。
 *     (03).打包发布。
 * 二、vue 基础
 *     (01).MVVM 原理
 *     (02).vue-devtools 调试工具
 *     (03).vue 指令
 *         01).内容渲染指令。
 *         02).属性绑定指令。
 *         03).事件绑定指令。
 *         04).双向绑定指令。
 *         05).条件渲染指令。
 *         06).列表渲染指令。
 *     (04).过滤器
 *         01).私有过滤器。
 *         02).全局过滤器。
 *     (05).侦听器
 *         01).侦听 property 变化。
 *     (06).计算属性
 *         01).计算 property 数据。
 * 三、vue-cli 脚手架
 *     (01).单页面应用程序（Single Page Application）
 * 四、vue 组件
 *     (01).组件关系
 *     (02).组件结构
 *     (03).组件使用
 *     (04).私有组件
 *     (05).全局组件
 *     (06).组件之间的关系
 *     (07).EventBus.js 模块
 * 五、引用
 *     (01).ref 引用属性
 *     (02).$refs 引用对象
 * 六、生命周期
 *     (01).生命周期的三个阶段
 *     (02).生命周期的钩子函数
 * 七、动态组件
 *     (01).<component>
 *     (02).<component> + <keep-alive>
 * 八、插槽
 *     (01).抽象元素<slot></slot>
 * 九、自定义指令
 *     (01).私有自定义指令
 *     (02).全局自定义指令
 * 十、路由
 *     (01).前端路由
 *     (02).简易的前端路由
 *     (03).vue-router 路由
 *     (04).vue-router 路由常用方法
 *         01).重定向路由
 *         02).嵌套路由
 *         03).动态路由
 *         04).使用 $router 对象，params 参数接收
 *         05).使用 props 自定义属性接收
 *         06).vue-router 路由常用API
 *         07).vue-router 路由全局守卫
 * 【官网Vue视频教程目录】
 *
 * 【尚硅谷Vue视频教程目录】
 * 一、基础
 *     (01).安装
 *     (02).介绍
 *     (03).vue 实例
 *     (04).模板语法
 *     (01).计算属性与侦听属性
 *     (02).Class与Style绑定
 *     (03).条件渲染
 *     (04).列表渲染
 *     (05).事件处理
 *     (06).表单输入绑定
 *     (07).组件基础
 * 二、深入了解组件
 *     (01).组件注册
 *     (02).Prop
 *     (03).自定义事件
 *     (04).插槽
 *     (05).动态组件与异步组件
 *     (06).处理边界情况
 * 三、过滤与动画
 *     (01).进入与离开&&列表过渡
 *     (02).状态过渡
 * 四、可复用性与组合
 *     (01).混入
 *     (02).自定义指令
 *     (03).渲染函数与JSX
 *     (04).插件
 *     (05).过滤器
 * 五、工具
 *     (01).单文件组件
 *     (02).测试
 *     (03).TypeScript支持
 *     (04).生产环境部署
 * 六、规模化
 *     (01).路由
 *     (02).状态管理
 *     (03).服务端渲染
 *     (04).安全
 * 七、内在
 *     (01).深入响应式原理
 */




// 指定饿了么UI版本下载依赖包
// # npm install element-ui@2.15.9 -S

import Vue from 'vue';
// 导入第三方饿了么UI依赖包
import ElementUI from 'element-ui';

import App from '@/App2.vue';

// 导入第三方饿了么样式文件
import 'element-ui/lib/theme-chalk/index.css';

// 第05步：导入第三方模块插件（路由模块：vue-router）
import router from "@/router/index.js";
// 第05步：导入第三方模块插件（状态管理：vuex)
import store from "@/store/index.js";

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css';
// 全局样式
import '@/assets/global.css';

Vue.config.productionTip = false;

// 实例对象使用饿了么UI插件
Vue.use(ElementUI);

// 第06步：挂载 router 路由模块
// 第06步：挂载 vuex   状态管理
// 第06步：挂载 render 渲染函数
new Vue({
    // 核心一：路由管理
    router: router,
    // 核心二：状态管理
    store: store,
    // 核心三：渲染函数
    render: h => h(App),
    // 核心四：事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app');



