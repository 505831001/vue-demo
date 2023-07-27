import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue';

// 第05步：导入自定义路由模块实例对象
import router from "@/router/index.js";

// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

// 第06步：挂载路由模块实例对象
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');



