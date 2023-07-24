import Vue from 'vue';
import App from './App.vue';

// 5. 导入路由模块
import router from "@/router/index.js";

// 导入样式
import './assets/css/bootstrap.css';
import './index.css';

Vue.config.productionTip = false;

// 6. 挂载路由实例对象
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');



