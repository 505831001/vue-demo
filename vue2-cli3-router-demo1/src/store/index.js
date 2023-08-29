// 第00步：下载第三方模块插件依赖包vuex
// npm install vuex@3.6.2

/**
 * 在2022年02月07日，vue3成为了默认版本。
 * 如果手动npm install vue，则安装的直接就是vue3版本。
 * 当vue3成为默认版本的同时，vuex也更新到了vuex4版本。
 * 而vuex4版本，只能在vue3版本中使用。
 * vue2中，使用vuex3版本。
 * vue3中，使用vuex4版本。
 * vuex 核心函数：
 *     (0).state:{} 材料对象。
 *         1).attribute 数据。注意：mutate()函数来跟State对象对话。
 *     (1).mutations:{} 后厨对象。
 *         1).commit(state, value) 函数调用。注意：commit()函数是跟mutations对象对话。注意：devTools开发者工具是跟Mutations对象对话。
 *     (2).actions:{} 迎宾对象。
 *         1).dispatch(context, value) 函数调用。注意：dispatch()函数是跟actions对象对话。
 *     (3).getters:{} 加工对象。
 *     (4).modules:{} 模块对象。
 * 注意：mutate()函数来跟State对象对话。
 * 注意：commit()函数是跟Mutations对象对话。
 * 注意：devTools开发者工具是跟Mutations对象对话。
 * 注意：dispatch()函数是跟Actions对象对话。
 * vuex 操作流程：
 *     (1).迎宾：准备actions——用于响应组件中的动作。
 *     (2).后厨：准备mutations——用于操作数据（state）。
 *     (3).材料：准备state——用于存储数据（state）。
 * vuex 加工：
 *     // 加工：准备getters——用于将state中的数据进行加工
 *     getters: {
 *         dataProcessing(state) {
 *             return state.sum * 10;
 *         }
 *     },
 * Vuex中的四个map函数基本使用：
 *     (1) ...mapState({ 对象形式 })
 *     (1) ...mapState([ 数组形式 ])
 *     (2) ...mapGetters({ 对象形式 })
 *     (2) ...mapGetters([ 数组形式 ])
 *     // 渲染：
 *     <!-- Vuex.$store.mapState()或者Vuex.$store.mapGetters() -->
 *     <button v-on:click="increment()">递增+1</button>
 *     <button v-on:click="decrement()">递减-1</button>
 *     <button v-on:click="incrementOdd()">当前求和为奇数再加</button>
 *     <button v-on:click="incrementWait()">等一等再加</button>
 *     <h4>通过Vuex插件mapState()函数获取state中的数据：{{key1}}，{{key2}}，{{key3}}</h4>
 *     <h4>通过Vuex插件mapState()函数获取state中的数据：{{sum}}，{{message}}，{{status}}</h4>
 *     <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{bigSum}}</h4>
 *     <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{dataProcessing}}</h4>
 *     // 获取：
 *     computed: {
 *         // 借助mapState生成计算属性，从state中读取数据。（对象写法）
 *         ...mapState({key1: 'sum', key2: 'message', key3: 'status'}),
 *         // 借助mapState生成计算属性，从state中读取数据。（数组写法）
 *         ...mapState(['sum', 'message', 'status']),
 *
 *         // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
 *         ...mapGetters({bigSum: 'dataProcessing'}),
 *         // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
 *         ...mapGetters(['dataProcessing']),
 *     },
 *     (3) ...mapMutations({ 对象形式 })
 *     (3) ...mapMutations([ 数组形式 ])
 *     (4) ...mapActions({ 对象形式 })
 *     (4) ...mapActions([ 数组形式 ])
 *     <!-- Vuex.$store.mapMutations()或者Vuex.$store.mapActions() -->
 *     <button v-on:click="increment(n)">递增+1</button>
 *     <button v-on:click="decrement(n)">递减-1</button>
 *     <button v-on:click="incrementOdd(n)">当前求和为奇数再加</button>
 *     <button v-on:click="incrementWait(n)">等一等再加</button>
 *     methods: {
 *         // 靠mapActions生成：increment、decrement（对象形式）
 *         ...mapMutations({increment:'ADD', decrement:'SUB'}),
 *         // 靠mapMutations生成：ADD、SUB（对象形式）
 *         ...mapMutations(['ADD', 'SUB']),
 *
 *         // 靠mapActions生成：incrementOdd、incrementWait（对象形式）
 *         ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
 *         // 靠mapActions生成：incrementOdd、incrementWait（数组形式）
 *         ...mapActions(['addOdd', 'addWait']),
 *     },
 * Vuex模块化+命名空间基本使用：
 *    (1).目的：让代码更好维护，让多种数据分类更加明确。
 *     (2).修改：@/store/index.js。
 *         // 统计命名空间一
 *         const countAbout = {
 *             // 开启命名空间
 *             namespaced:true,
 *             state:{},
 *             getters: {}
 *             mutations: {},
 *             actions: {}
 *         }
 *         // 职工命名空间二
 *         const personAbout = {
 *             // 开启命名空间
 *             namespaced:true,
 *             state:{},
 *             getters:{},
 *             mutations: {},
 *             actions: {}
 *         }
 *         // 创建状态管理实例对象
 *         const store = new Vuex.Store({
 *             modules: {
 *                 countAbout,
 *                 personAbout
 *             }
 *         });
 *         // 向外共享状态管理实例对象
 *         export default store;
 *     提示：或者创建两个不同的JS文件，比如：@/store/count-store.js和@/store/person-store.js，然后在@/store/index.js中引入。
 *     (3).开启命名空间后，组件中读取state数据：
 *         // 方式一：自己直接读取
 *         this.$store.state.personAbout.list;
 *         // 方式二：借助mapState读取：
 *         ...mapState('countAbout',['sum', 'school', 'subject']),
 *     （4）.开启命名空间后，组件中读取getters数据：
 *         // 方式一：自己直接读取
 *         this.$store.getters['personAbout/firstPersonName'];
 *         // 方式二：借助mapGetters读取：
 *         ...mapGetters('countAbout', ['bigSum']);
 *     （5）.开启命名空间后，组件中调用dispatch
 *         // 方式一：自己直接dispatch
 *         this.$store.dispatch('personAbout/addPersonWang', person);
 *         // 方式二：借助mapActions：
 *         ...mapActions('countAbout', {incrementOdd:'jiaOdd', incrementWait:'jiaWait'});
 *     （6）.开启命名空间后，组件中调用commit
 *         //方式一：自己直接commit
 *         this.$store.commit('personAbout/ADD_PERSON', person);
 *         //方式二：借助mapMutations：
 *         ...mapMutations('countAbout',{increment:'ADD', decrement:'SUB'}),
 *
 */

import Vue from 'vue';
// 第01步：引入第三方模块插件依赖包vuex
import Vuex from 'vuex';
import countStore from "@/store/count-store.js";
import personStore from "@/store/person-store.js";

// 第02步：使用第三方模块插件vuex
Vue.use(Vuex);

// 第03步：创建状态管理的实例对象
const store = new Vuex.Store({
    // 材料：准备state——用于存储数据（state）
    state: {
        // 当前的和
        sum: 1,
        message: 'Hello World',
        status: 200,
        list: [
            {id: 10086, nickname: '中国移动', state: 0, isDelete: false},
            {id: 10010, nickname: '中国联通', state: 1, isDelete: true},
            {id: 10000, nickname: '中国电信', state: 1, isDelete: true},
            {id: 12306, nickname: '中国铁路', state: 0, isDelete: false}
        ]
    },
    // 加工：准备getters——用于将state中的数据进行加工
    getters: {
        dataProcessing(state) {
            return state.sum * 10;
        }
    },
    // 后厨：准备mutations——用于操作数据（state）
    mutations: {
        ADD(state, value) {
            console.log(`Vuex.Store.mutations().ADD()函数被调用了呀！！！`);
            state.sum += value;
        },
        SUB(state, value) {
            console.log(`Vuex.Store.mutations().SUB()函数被调用了呀！！！`);
            state.sum -= value;
        },
        ADD_LIST(state, value) {
            console.log(`Vuex.Store.mutations().ADD_LIST()函数被调用了呀！！！`);
            state.list.unshift(value);
        }
    },
    // 迎宾：准备actions——用于响应组件中的动作
    actions: {
        addOdd(context, value) {
            console.log(`Vuex.Store.actions().addOdd()函数被调用了呀！！！`);
            if (context.state.sum % 2) {
                context.commit('ADD', value);
            }
        },
        addWait(context, value) {
            console.log(`Vuex.Store.actions().addWait()函数被调用了呀！！！`);
            setTimeout(() => {
                context.commit('ADD', value);
            }, 1000);
        }
    },
    // 解释：模块化。命名空间namespaced。
    modules: {
        countStore: countStore,
        personStore: personStore
    }
});

// 第04步：向外共享状态管理的实例对象
export default store;



