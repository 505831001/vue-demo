// 第00步：下载第三方路由模块（依赖包）
// # npm install vue-router@3.5.3 -S

import Vue from "vue";

// 第01步：导入第三方路由模块（依赖包）
import VueRouter from "vue-router";

import LoginView from "@/view/LoginView.vue";
import CartView from "@/components/CartView.vue";

// 第02步：使用路由模块为插件vue
Vue.use(VueRouter);

// 第03步：创建路由模块实例对象
const router = new VueRouter({
    routes: [
        {
            path: '/', redirect: '/login'
        },
        {
            path: '/login', component: LoginView
        },
        {
            path: '/cart', component: CartView
        }
    ]
});

// 第03步：创建全局前置守卫
router.beforeEach(function (to, from, next) {
    next();
});

// 第04步：向外共享路由模块实例对象
export default router;



