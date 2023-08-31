<template>
  <div>
    <br>
    <h4 v-bind:style="{opacity}">&nbsp;>&nbsp;Home组件&nbsp;>&nbsp;New组件&nbsp;</h4>
    <span>填写列表：</span>
    <ul>
      <li>一级内容：<input type="text"></li>
      <li>二级内容：<input type="text"></li>
      <li>三级内容：<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  /* beforeDestroy() {
    console.log('News组件即将被销毁了')
    clearInterval(this.timer)
  }, */
  /* mounted(){
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  }, */
  beforeDestroy() {
    console.log('Home组件的News组件即将被销毁了呀！');
  },
  destroyed() {
    console.log('Home组件的News组件即将被销毁了呀！！！');
  },
  activated() {
    console.log('Home组件的News组件被激活了呀！！！');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 15);
  },
  deactivated() {
    console.log('Home组件的News组件被缓存了呀！！！');
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
