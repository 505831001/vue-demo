export default {
    // 模板：开启命名空间
    namespaced: true,
    // 材料：准备state——用于存储数据（state）
    state: {
        personSum: 5,
        personMessage: 'Hello World - Person',
        personStatus: 500,
        personList: [
            {id: 10001, name: 'Jack', age: 28, state: 1},
            {id: 10008, name: 'Lucy', age: 38, state: 0},
            {id: 10004, name: 'Lisa', age: 48, state: 0},
            {id: 10002, name: 'Andy', age: 54, state: 1}
        ]
    },
    // 加工：准备getters——用于将state中的数据进行加工
    getters: {
        firstName(state) {
            return state.personList[0].name;
        }
    },
    // 后厨：准备mutations——用于操作数据（state）
    mutations: {
        ADD_PERSON(state, value) {
            console.log(`Vuex.Store.person-store.mutations().ADD_PERSON()函数被调用了呀！！！`);
            state.personList.unshift(value);
        }
    },
    // 迎宾：准备actions——用于响应组件中的动作
    actions: {

    }
}
