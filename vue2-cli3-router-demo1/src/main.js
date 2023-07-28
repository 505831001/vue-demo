/**
 * 生命周期章节：
 * 什么是生命周期钩子函数？
 * 01.beforeCreate： 在实例初始化之后、数据观测 (data observer) 和 event/watcher 事件配置之前被调用。在这个阶段，组件的选项对象已经合并，但是实例的属性和方法尚未初始化。
 * 02.created：      在实例创建完成后被立即调用。在此阶段，组件实例已经完成以下的配置：数据观测 (data observer)，属性和方法的设置，计算属性和观察者等。然而，挂载阶段还未开始，$el 属性尚不可用。
 * 03.beforeMount：  在挂载开始之前被调用，相关的 render 函数首次被调用。在此阶段，模板编译已完成，但尚未将渲染结果挂载到DOM中。
 * 04.mounted：      在实例挂载到 DOM 后被调用。此时，组件已经在 DOM 中渲染，并且可以进行 DOM 操作。通常在这里发起异步请求、操作 DOM 或与第三方库进行交互。
 * 05.beforeUpdate： 在响应式数据更新时，虚拟 DOM 重新渲染和打补丁之前被调用。可以在此时执行一些更新之前的操作。
 * 06.updated：      在虚拟 DOM 重新渲染和打补丁后被调用。此时，组件已经更新完成，并且可以执行 DOM 操作。注意避免无限循环更新，因为在此钩子中更新数据可能会导致再次触发更新。
 * 07.beforeDestroy：在实例销毁之前被调用。这是组件销毁前的最后一个机会，可以进行一些清理工作，如清除定时器、取消订阅等。
 * 08.destroyed：    在实例被销毁后调用。此时，组件已经被销毁，事件监听器和子组件也都被移除。
 * 09.activated:     在实例被激活的时候使用，用于重复激活一个组件实例的时候。
 * 10.deactivated:   在实例没有被激活的时候。
 * 11.errorCaptured: 当捕获到一个来自后代组件的错误时被调用。
 * 动态组件章节：
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
 * 第03种：
 *
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



