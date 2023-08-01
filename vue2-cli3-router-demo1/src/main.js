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
 * vue指令？
 *
 * vue调试工具？
 *
 * 过滤器？
 *
 * 侦听器？
 *
 * 计算属性？
 *
 * vue-cli脚手架？
 *
 * vue组件？
 *
 * ref和$refs对象？
 *
 * 三、生命周期章节：
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
 *     <keep-alive include=""></keep-alive>
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
 *     官方提供了常用的vue指令，除此之外，vue还允许开发者自定义指令。
 *     vue中的自定义指令分为两类，分别是：
 *     全局自定义指令。
 *     私有自定义指令。
 *     // 1.定义私有自定义指令
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
 *     // 2.定义全局自定义指令
 *     Vue.directive('color', function(el, binding) { el.style.color = binding.value });
 *     // 使用自定义指令
 *     <button type="button" v-color>自定义指令</button>
 * 七、路由章节：
 *
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



