import Vue from 'vue';

// # npm install element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue';

// 第05步：导入自定义路由模块
import router from "@/router/index.js";

// 导入样式
import '@/assets/css/bootstrap.css';
import '@/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

// 第06步：挂载路由模块实例对象
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');



