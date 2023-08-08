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
 * vue 调试工具？
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
 * 组件之间的关系：
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
 * EventBus 的使用步骤：
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
 * 步骤一：通过 <component> 标签，结合 comName 动态渲染组件。示例代码如下：
 *     // 通过 is 属性，指定要展示的组件的名称
 *     <component v-bind:is="componentName"></component>
 *     export default {
 *         name: '#app',
 *         data() {
 *             return {
 *                 comName: 'Home'
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
 *             this.componentName = 'Home';
 *             break;
 *           case '#/movie':
 *             this.componentName = 'Movie';
 *             break;
 *           case '#/about':
 *             this.componentName = 'About';
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
 *     <span>使用 $route.params 对象.参数属性接收：{{ this.$route.params.id }}</span>
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
import Vue from 'vue';

import App from '@/App2.vue';

// 第05步：导入路由模块
import router from "@/router/index.js";

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css';
// 全局样式
import '@/assets/global.css';

Vue.config.productionTip = false;

// 第06步：挂载router路由模块
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');



