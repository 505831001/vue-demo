import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue';

// 第05步：导入自定义路由模块实例对象
import router from "@/router/index.js";
// 第05步：导入第三方模块插件（状态管理：vuex)
import store from "@/store/index.js";

// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

// 第06步：挂载路由模块实例对象
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



