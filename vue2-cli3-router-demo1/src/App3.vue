<template>
  <div>
    <div class="row">
      <!-- 头部区域：BannerView.vue -->
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 第07步：定义路由的【链接】router-link -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" :to="`/movies/12306/andy?username=${user}&password=${pass}`">中国铁路</router-link>
          <router-link class="list-group-item" active-class="active" :to="{path:'/movies/10086/jack',query:{username:user,password:pass}}">中国移动</router-link>
          <router-link class="list-group-item" active-class="active" :to="{name:'movies',params:{mid:10000,title:'lucy'}}">中国电信</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 第07步：定义路由的【占位符】router-view -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
  name: 'App',
  data() {
    return {
      user: 'LiuWeiWei',
      pass: '123456789'
    }
  },
  components: {
    Banner
  }
}
</script>



