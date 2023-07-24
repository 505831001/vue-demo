<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框：属性绑定v-bind:id="'cb1' + id"和属性绑定v-bind:checked="state"和绑定事件v-on:click="checkGoodsState($event)" -->
        <input type="checkbox" class="custom-control-input" v-bind:id="'cb1' + id" v-bind:checked="state" v-on:click="checkGoodsState($event)"/>
        <!-- label 标签中的 for 属性规定了 label 标签与哪个表单元素绑定。 -->
        <!-- for 属性的值和表单元素的 id 值一样，即可完成该 label 标签与该表单元素的绑定。 -->
        <!-- v-bind:for="'cb1' + id" 绑定 v-bind:id="'cb1' + id" 表示【label标签】与【input表单】元素绑定。 -->
        <!-- 商品的缩略图：属性绑定v-bind:for="'cb1' + id" -->
        <label class="custom-control-label" v-bind:for="'cb1' + id">
          <!-- 商品的缩略图：属性绑定v-bind:src="img" -->
          <img v-bind:src="img" alt=""/>
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题-通过插值表达式{{ title }} -->
      <h6 class="goods-title">商品名称：{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格-通过插值表达式{{ price }} -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量-通过属性绑定v-bind:num="number"和通过属性绑定v-bind:id="id" -->
        <Counter v-bind:id="id" v-bind:num="count"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from "@/components/Counter/Counter.vue";
  export default {
    components: {
      Counter
    },
    props: {
      id: {
        required: true,
        type: Number
      },
      title: {
        default: '',
        type: String
      },
      img: {
        default: '',
        type: String
      },
      price: {
        default: 0,
        type: [Number, String]
      },
      state: {
        default: false,
        type: Boolean
      },
      count: {
        default: 1,
        type: Number
      }
    },
    data() {
      return {

      }
    },
    methods: {
      checkGoodsState(event) {
        const flag = event.target.checked;
        console.log(`${this.id} goods switching state is ${flag}`);
        this.$emit('checked-state', { id: this.id, value: flag });
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-container {
    + .goods-container {
      border-top: 1px solid #efefef;
    }

    padding: 10px;
    display: flex;

    .thumb {
      display: flex;
      align-items: center;

      img {
        width: 100px;
        height: 100px;
        margin: 0 10px;
      }
    }

    .goods-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;

      .goods-title {
        font-weight: bold;
        font-size: 12px;
      }

      .goods-info-bottom {
        display: flex;
        justify-content: space-between;

        .goods-price {
          font-weight: bold;
          color: red;
          font-size: 13px;
        }
      }
    }
  }
</style>
