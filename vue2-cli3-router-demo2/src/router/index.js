// 第00步：下载第三方模块（路由依赖包）
// # npm install vue-router@3.2.0 -S
// # npm install element-ui -S

// 导入第三方模块（依赖包）
import Vue from "vue";

// 第01步：引入第三方模块（路由依赖包）
import VueRouter from "vue-router";

// 导入自定义模块（文件）
import MyLogin from "@/components/MyLogin.vue";
import pathArray from "@/router/pathArray";
import MyHome from "@/components/MyHome.vue";
import MyUsers from "@/components/menus/MyUsers.vue";
import MyRights from "@/components/menus/MyRights.vue";
import MyGoods from "@/components/menus/MyGoods.vue";
import MyOrders from "@/components/menus/MyOrders.vue";
import MySettings from "@/components/menus/MySettings.vue";
import MyUserDetail from "@/components/user/MyUserDetail.vue";

// 第02步：使用路由模块为插件vue
Vue.use(VueRouter);

// 第03步：创建路由模块实例对象
const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                redirect: '/login'
            },
            {
                path: '/login',
                component: MyLogin
            },
            {
                path: '/home',
                component: MyHome,
                redirect: '/home/users',
                children: [
                    {
                        path: 'users',
                        component: MyUsers
                    },
                    {
                        path: 'rights',
                        component: MyRights
                    },
                    {
                        path: 'goods',
                        component: MyGoods
                    },
                    {
                        path: 'orders',
                        component: MyOrders
                    },
                    {
                        path: 'settings',
                        component: MySettings
                    },
                    {
                        path: 'userinfo/:id',
                        component: MyUserDetail,
                        props: true
                    }
                ]
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/AboutView.vue')
            }
        ]
    }
);

// 第03步：创建全局前置守卫
router.beforeEach(function (to, from, next) {
    if (pathArray.indexOf(to.path) !== -1) {
        console.log(pathArray.indexOf(to.path));
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

// 第04步：向外共享路由模块实例对象
export default router;



