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
        // 配置路由模式（两种：hash，history）
        mode: 'history',
        // 应用的基路径
        base: process.env.BASE_URL,
        // 配置路由规则
        routes: [
            {
                path: '/',
                redirect: '/login'
            },
            {
                path: '/login',
                component: MyLogin,
                meta: {
                    isAuth: true,
                    title: '登录页面'
                }
            },
            {
                path: '/home',
                component: MyHome,
                redirect: '/home/users',
                children: [
                    {
                        path: 'users',
                        component: MyUsers,
                        meta: {
                            isAuth: true,
                            title: '用户中心'
                        }
                    },
                    {
                        path: 'rights',
                        component: MyRights,
                        meta: {
                            isAuth: true,
                            title: '饿了么库'
                        }
                    },
                    {
                        path: 'goods',
                        component: MyGoods,
                        meta: {
                            isAuth: true,
                            title: '商品中心'
                        }
                    },
                    {
                        path: 'orders',
                        component: MyOrders,
                        meta: {
                            isAuth: true,
                            title: '订单管理'
                        }
                    },
                    {
                        path: 'settings',
                        component: MySettings,
                        meta: {
                            isAuth: true,
                            title: '设置中心'
                        }
                    },
                    {
                        path: 'userinfo/:id',
                        component: MyUserDetail,
                        props: true,
                        meta: {
                            isAuth: true,
                            title: '用户详情'
                        }
                    }
                ]
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/AboutView.vue'),
                meta: {
                    isAuth: true,
                    title: '关于我们'
                }
            }
        ]
    }
);

// 第03步：全局前置守卫（全局前置监听器）
// 第03步：全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach(function (to, from, next) {
    // to     参数是将要访问的路由的信息对象。去哪里的路由规则。
    // from   参数是将要离开的路由的信息对象。从哪来的路由规则。
    // next() 函数表示放行，允许这次路由导航。放行函数。
    // 当前用户拥有后台主页的访问权限，直接放行：next()
    // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
    // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
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

// 第03步：全局后置守卫（全局后置监听器）
// 第03步：全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach(function (to, from) {
    console.log('After Each: ', to.name, from.name);
    console.log('After Each: ', to.path, from.path);
    console.log('After Each: ', to.fullPath, from.fullPath);
    document.title = to.meta.title || '如果Meta没有标题就用我吧';
});

// 第04步：向外共享路由模块实例对象
export default router;



