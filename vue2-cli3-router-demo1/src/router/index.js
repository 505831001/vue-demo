// 第00步：安装vue-router路由依赖包
// peer vue@"^2.6.11" from the root project
// peer vue@"^3.2.0" from vue-router@4.2.4

import Vue from "vue";
// 第01步：导入第三方路由模块（依赖包）
import VueRouter from 'vue-router';

// import Home from "@/components/Home.vue";
// import Movie from "@/components/Movie.vue";
// import About from "@/components/VueRouterView.vue";
// import Tab1 from "@/components/tabs/Tab1.vue";
// import Tab2 from "@/components/tabs/Tab2.vue";
// import Main from "@/components/Main.vue";
// import Login from "@/components/Login.vue";
// import ContainerView from "@/components/ElementUIView.vue";
// import SupportView from "@/components/VuexStoreView.vue";
// import Cat1 from "@/components/cats/VuexStoreCountView1.vue";
// import Cat2 from "@/components/cats/VuexStorePersonView2.vue";

import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";
import Movies from "@/pages/Movies.vue";

// 第02步：调用Vue.use()函数，把VueRouter安装为Vue插件
Vue.use(VueRouter);

// 第03步：创建路由模块实例对象
const router = new VueRouter({
    routes: [
        // 第08步：配置路由规则（前面需要加斜杠（/））
        {
            path: '/',
            redirect: '/about'
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'details',
                            path: 'detail',
                            component: Detail,
                            // 第一种写法：值为对象。该对象中的所有key-value都会以props的形式传给组件。
                            // props:{a: 12306, b: '中国铁路'}
                            // 第二种写法：值为布尔值。若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给组件。
                            // props:true
                            // 第三种写法：值为函数。
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 12306,
                                    b: '中国铁路'
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'movies',
            path: '/movies/:mid/:title',
            component: Movies,
            props: true
        }
        // 第08步：配置路由规则，开启 props 传递参数，从而获取动态参数（/:mid）的值。
        // {
        //     name: 'alias',
        //     path: '/movie/:mid',
        //     component: Movie,
        //     props: true
        // },
        // {
        //     name: 'about',
        //     path: '/about',
        //     component: About,
        //     children: [
        //         // 第08步：配置子路由规则（注意：前面不要加斜杠（/）），非默认
        //         // {path: 'tab1', component: Tab1},
        //         // 第08步：配置子路由规则（注意：前面不要加斜杠（/）），默认tab1可以省略，对应<router-link to="/about">Table-1</router-link>
        //         {
        //             path: '',
        //             component: Tab1},
        //         {
        //             name: 'tab2',
        //             path: 'tab2',
        //             component: Tab2
        //         }
        //     ]
        // },
        // {
        //     path: '/support',
        //     component: SupportView,
        //     children: [
        //         {
        //             path: '/',
        //             redirect: 'cat1'
        //         },
        //         {
        //             name: 'cat1',
        //             path: 'cat1',
        //             component: Cat1
        //         },
        //         {
        //             name: 'cat2',
        //             path: 'cat2',
        //             component: Cat2
        //         }
        //     ]
        // },
        // {name: 'main', path: '/main', component: Main},
        // {name: 'login', path: '/login', component: Login},
        // {name: 'contain', path: '/contain', component: ContainerView}
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



