import Vue from 'vue';
import App from './App2.vue';
// 第五步：导入路由模块
import router from "@/router/index.js";

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css';
// 全局样式
import '@/assets/global.css';

Vue.config.productionTip = false;

// 第六步：挂载router路由模块
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');



