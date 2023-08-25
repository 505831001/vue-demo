// 第00步：安装vue-router路由依赖包
// peer vue@"^2.6.11" from the root project
// peer vue@"^3.2.0" from vue-router@4.2.4

import Vue from "vue";
// 第01步：导入第三方路由模块（依赖包）
import VueRouter from 'vue-router';

import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";
import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";
import ContainerView from "@/components/ContainerView.vue";
import SupportView from "@/components/SupportView.vue";
import Cat1 from "@/components/cats/Cat1.vue";
import Cat2 from "@/components/cats/Cat2.vue";

// 第02步：调用Vue.use()函数，把VueRouter安装为Vue插件
Vue.use(VueRouter);

// 第03步：创建路由模块实例对象
const router = new VueRouter({
    routes: [
        // 第08步：配置路由规则（前面需要加斜杠（/））
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        // 第08步：配置路由规则，开启 props 传递参数，从而获取动态参数（/:mid）的值。
        {path: '/movie/:mid', component: Movie, props: true},
        {
            path: '/about', component: About, children: [
                // 第08步：配置子路由规则（注意：前面不要加斜杠（/）），非默认
                // {path: 'tab1', component: Tab1},
                // 第08步：配置子路由规则（注意：前面不要加斜杠（/）），默认tab1可以省略，对应<router-link to="/about">Table-1</router-link>
                {path: '', component: Tab1},
                {path: 'tab2', component: Tab2}
            ]
        },
        {
            path: '/support', component: SupportView, children: [
                {path: '/', redirect: 'cat1'},
                {path: 'cat1', component: Cat1},
                {path: 'cat2', component: Cat2}
            ]
        },
        {path: '/main', component: Main},
        {path: '/login', component: Login},
        {path: '/contain', component: ContainerView}
    ]
});

// 第03步：全局前置守卫（全局前置监听器）
router.beforeEach(function (to, from, next) {
    // to     参数是将要访问的路由的信息对象
    // from   参数是将要离开的路由的信息对象
    // next() 函数表示放行，允许这次路由导航
    // 当前用户拥有后台主页的访问权限，直接放行：next()
    // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
    // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
    if (to.path === '/main') {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

// 第04步：向外共享路由的实例对象
export default router;



