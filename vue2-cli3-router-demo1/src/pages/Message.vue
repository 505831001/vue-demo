<template>
  <div>
    <br>
    <h4 v-bind:style="{opacity}">&nbsp;>&nbsp;Home组件&nbsp;>&nbsp;Message组件&nbsp;</h4>
    <span>填写列表：</span>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{name:'details',query:{id:m.id,title:m.title}}">{{ m.title }}</router-link>&nbsp;

        <button type="button" class="btn btn-default" @click="pushShow(m)">push查看</button>&nbsp;
        <button type="button" class="btn btn-default" @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <!-- 第07步：定义路由的【占位符】router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      opacity: 1,
      messageList: [
        {id: 10000, title: '中国电信'},
        {id: 10010, title: '中国联通'},
        {id: 10086, title: '中国移动'}
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'details',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'details',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
  beforeDestroy() {
    console.log('Home组件的Message组件即将被销毁了呀！！！');
  },
  activated() {
    console.log('Home组件的Message组件被激活了呀！！！');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 15);
  },
  deactivated() {
    console.log('Home组件的Message组件被缓存了呀！！！');
    clearInterval(this.timer);
  },
}
</script>

<style lang="less" scoped>
h4 {
  color: darkblue;
}
li {
  list-style-type: none;
}
</style>
