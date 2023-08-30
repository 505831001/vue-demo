<template>
  <div>
    <h2>Movies 组件</h2>
    <!-- 跳转路由并携带【query】参数，to的字符串写法 -->
    <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.name}}</router-link> -->
    <!-- <router-link :to="`/movies/12306/jessica?username=LiuWeiWei&password=123456`">中国铁路</router-link> -->
    <!-- 跳转路由并携带【query】参数，to的对象的写法 -->
    <!-- <router-link :to="{path:'/home/message/detail',query:{id:item.id,title:item.title}}">{{item.name}}</router-link> -->
    <!-- <router-link :to="{path:'/movies/10086/jessica',query:{username:'LiuWeiWei',password:123456}}">中国移动</router-link> -->

    <!-- 跳转路由并携带【params】参数，to的字符串写法 -->
    <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.name}}</router-link> -->
    <!-- <router-link :to="`/movies/12306/jessica`">中国铁路</router-link> -->
    <!-- 跳转路由并携带【params】参数，to的对象的写法 -->
    <!-- <router-link :to="{name:'xiangqing',params:{id:item.id,title:item.title}}">{{item.name}}</router-link> -->
    <!-- <router-link :to="{name:'movies',params:{id:10010,title:'lucy'}}">中国电信</router-link> -->

    <h6>获取VueRouter插件$route对象中的query参数：{{ this.$route.query.username }}，密码：{{ this.$route.query.password }}</h6>
    <h6>获取VueRouter插件$route对象中的params参数：{{ this.$route.params.mid }}，密码：{{ this.$route.params.title }}</h6>
    <h6>编码：{{ mid }}，标题：{{ title }}</h6>
  </div>
</template>

<script>
export default {
  name:'Movies',
  props: [
      'mid',
      'title'
  ],
  mounted() {
    console.log('阿西八', this.$route);
  }
}
</script>
