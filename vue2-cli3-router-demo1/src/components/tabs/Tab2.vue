<template>
  <div class="tab2-container">
    <h4>声明式渲染：</h4>
    <span title="这是个span标签哒">
      插值表达式：{{ message }}
    </span>
    <br>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！！！
    </span>
    <hr>
    <h4>条件与循环：</h4>
    <button type="button" v-on:click="switchShow()">显示出来</button>
    <span v-if="show">
      看到我了吧？
    </span>
    <span v-show="show">
      看到你了吧？
    </span>
    <span v-bind:class="{hide:other}">
      看到他了吧？
    </span>
    <hr>
    <ol>
      <li v-for="todo in list">
        {{todo.text}}
      </li>
    </ol>
    <hr>
    <h4>处理用户输入：</h4>
    <button type="button" v-on:click="reverseMessage()">反转消息</button>
    <br>
    <span># {{}}</span>
    <br>
    <span>反转之后：{{message}}</span>
    <br>
    <span># v-once</span>
    <br>
    <span v-once>无法改变：{{message}}</span>
    <br>
    <span># v-model</span>
    <br>
    <input type="text" style="width: 50%" v-model="message">
    <br>
    <span># v-html</span>
    <p>Using mustaches: {{ message }}</p>
    <p>Using v-html directive: <span v-html="message"></span></p>
    <span># v-bind</span>
    <span v-bind:id="dynamicID"></span>
    <br>
    <span>JavaScript 表达式：{{ number + 100 }}</span>
    <br>
    <span>JavaScript 三元表达式：{{ number < 1000 ? number + 1900 : number }}</span>
    <br>
    <span>JavaScript 表达式：{{ message.split('').reverse().join('') }}</span>
    <br>
    <span>菜单列表：<a href="http://localhost:8080" title="喜欢看什么片吧">影视专区</a></span>
    <hr>
    <h4>侦听器：</h4>
    <input type="text" v-model="question">
    <br>
    <span>回答：{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tab2',
  data() {
    return {
      number: 100,
      message: 'hello world: ' + new Date().toLocaleString(),
      show: false,
      other: true,
      list: [
        {text: 'HTML-5'},
        {text: 'CSS-3'},
        {text: 'ECMAScript-5'},
        {text: 'DOM'},
        {text: 'BOM'},
        {text: 'jQuery'},
        {text: 'Ajax'}
      ],
      dynamicID: '10086',
      question: '',
      answer: '除非你提出问题，否则我无法给你答案！'
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
    }
  },
  methods: {
    switchShow() {
      // 如何在 vue 中进行切换显示和隐藏（Toggle）三种写法？
      // 1.v-if 指令
      // 2.v-show 指令
      // 3.v-bind:class 指令
      // this.show = this.show === true ? false : true;
      // this.show = this.show !== true;
      this.show = !this.show;
      this.other = !this.other;
    },
    reverseMessage() {
      this.message = this.message.split('').reverse().join();
    }
  },
  beforeCreate() {
    console.log(`在实例初始化之后、数据观测和事件配置之前被调用。`);
  },
  created() {
    console.log(`在实例创建完成后被立即调用。`);
  },
  beforeMount() {
    console.log(`在挂载开始之前被调用，相关的函数首次被调用。`);
  },
  mounted() {
    console.log(`在实例挂载到DOM后被调用。`);
  },
  beforeUpdate() {
    console.log(`在响应式数据更新时，虚拟DOM重新渲染和打补丁之前被调用。`);
  },
  updated() {
    console.log(`在虚拟DOM重新渲染和打补丁后被调用。`);
  },
  beforeDestroy() {
    console.log(`在实例销毁之前被调用。`);
  },
  destroyed() {
    console.log(`在实例被销毁后调用。`);
  },
  activated() {
    console.log(`在实例被激活的时候使用，用于重复激活一个组件实例的时候。`);
  },
  deactivated() {
    console.log(`在实例没有被激活的时候。`);
  },
  errorCaptured(err, vm, info) {
    console.log(`当捕获到一个来自后代组件的错误时被调用。`);
  }
}
</script>

<style lang="less" scoped>
.tab2-container {
  min-height: 150px;
  background-color: plum;
}
.hide {
  display: none;
}
</style>
