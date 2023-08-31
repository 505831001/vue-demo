// 第00步：下载第三方模块插件依赖包vuex
// npm install vuex@3.6.2

import Vue from 'vue';
// 第01步：引入第三方模块插件依赖包vuex
import Vuex from 'vuex';

// 第02步：使用第三方模块插件vuex
Vue.use(Vuex);

// 第03步：创建状态管理的实例对象
const store = new Vuex.Store({
    // 解释：准备状态管理（State）用于存储数据。
    state: {
        // 当前的和
        sum: 0
    },
    // 加工：准备getters——用于将state中的数据进行加工
    getters: {
        dataProcessing(state) {
            return state.sum * 10;
        }
    },
    // 解释：准备改变状态管理（State）用于操作存储数据。
    mutations: {
        addition(state, value) {
            console.log(`Vuex.Store.mutations().addition()函数被调用了呀！！！`);
            state.sum += value;
        },
        subtraction(state, value) {
            console.log(`Vuex.Store.mutations().subtraction()函数被调用了呀！！！`);
            state.sum -= value;
        }
    },
    // 解释：准备异步请求状态管理（State）获取存储数据。
    actions: {
        additionOddNumber(context, value) {
            console.log(`Vuex.Store.actions().additionOddNumber()函数被调用了呀！！！`);
            if (context.state.sum % 2) {
                context.commit('addition', value);
            }
        },
        additionWait(context, value) {
            console.log(`Vuex.Store.actions().additionWait()函数被调用了呀！！！`);
            setTimeout(() => {
                context.commit('addition', value);
            }, 1000);
        }
    },
    // 解释：模块化。命名空间namespaced。
    modules: {

    }
});

// 第04步：向外共享状态管理的实例对象
export default store;



