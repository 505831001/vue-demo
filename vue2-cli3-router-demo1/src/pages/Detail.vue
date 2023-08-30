<template>
  <div>
    <h4>Details 详情组件</h4>
    <ul>
      <li>获取VueRouter插件$route对象query参数：{{ id }}</li>
      <li>获取VueRouter插件$route对象query参数：{{ title }}</li>
      <li>获取VueRouter插件$route对象query参数：{{ a }}</li>
      <li>获取VueRouter插件$route对象query参数：{{ b }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: [
    'id',
    'title',
    'a',
    'b'
  ],
  computed: {
    // id(){
    // 	return this.$route.query.id
    // },
    // title(){
    // 	return this.$route.query.title
    // },
  },
  mounted() {
    // console.log(this.$route)
  },
}
</script>
