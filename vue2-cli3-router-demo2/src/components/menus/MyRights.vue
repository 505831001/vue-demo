<template>
  <div class="rights">
    <h4 class="text-center" ref="h4Ref">权限管理</h4>
    <hr>
    <h4>Bootstrap UI 表单：</h4>
    <button v-on:click="getRefs()">获取 $refs 引用</button>
    <br>
    <br>
    <button v-on:click="getFocus()">获取 $refs 引用</button>
    <br>
    <input type="text" name="other" id="other" ref="getFocus" v-model="message">
    <br>
    <span>绑定数据：{{ message }}</span>
    <hr>
    <h4>Element UI 表单：</h4>
    <button v-on:click="setRefs()">获取 $refs 引用</button>
    <el-form status-icon label-width="100px" class="demo-ruleForm" v-bind:model="ruleForm" ref="elPassRef">
      <el-form-item label="员工工号" prop="name">
        <el-input type="text" v-model.number="ruleForm.name" ref="elNameRef"></el-input>
      </el-form-item>
      <el-form-item label="员工密码" prop="pass">
        <el-input type="password" autocomplete="off" v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" autocomplete="off" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
    </el-form>
    <hr>
    <h4>slot 插槽：</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyRights',
  data() {
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入工号'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
      }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      message: '',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      }
    }
  },
  // 11.创建之前的钩子（在此生命周期函数执行的时候，Data和Methods中的数据都还没有初始化。）
  beforeCreate() {
    console.log(`生命周期钩子之创建之前的钩子！`);
  },
  // 11.创建时候的钩子（在此生命周期函数中，Data和Methods中的数据都已经被初始化，如果调用Methods中的方法，或者操作Data中的数据，最早只能在created()函数中操作。）
  created() {
    console.log(`生命周期钩子之创建时候的钩子！RightsView.vue 组件被创建了呀！`);
  },
  // 12.挂载之前的钩子（在此生命周期函数执行的时候，模板已经在内存中编译，但是尚未挂载到页面中，此时页面还是旧页面。）
  beforeMount() {
    console.log(`生命周期钩子之挂载之前的钩子！`);
  },
  // 12.挂载时候的钩子（此时页面和内存中都是新的数据，这个钩子函数是最早可以操作DOM节点的方法。）
  mounted() {
    console.log(`生命周期钩子之挂载时候的钩子！RightsView.vue 组件被挂载了呀！`);
  },
  // 13.更新之前的钩子（此时页面中显示的数据还是旧数据，但是Data中的数据是最新的，并且页面并未和最新的数据同步。）
  beforeUpdate() {
    console.log(`生命周期钩子之更新之前的钩子！`);
  },
  // 13.更新时候的钩子（此时页面显示数据和最新的Data数据同步。）
  updated() {
    console.log(`生命周期钩子之更新时候的钩子！RightsView.vue 组件被更新了呀！`);
  },
  // 14.激活时候的钩子（实例被激活的时候使用，用于重复激活一个组件实例的时候。）
  activated() {
    console.log(`生命周期钩子之重新激活组件实例的钩子！`);
  },
  // 14.激活之前的钩子（组件实例没有被激活的时候。）
  deactivated() {
    console.log(`生命周期钩子之重新激活之前组件实例的钩子！RightsView.vue 组件未被激活呀！`);
  },
  // 15.销毁之前的钩子（当执行该生命周期函数的时候，实例本身所有Data，所有Methods，以及过滤器等等都处于可用状态，并没有真正执行销毁。）
  beforeDestroy() {
    console.log(`生命周期钩子之销毁之前的钩子！`);
  },
  // 15.销毁时候的钩子（此时组件以及被完全销毁，实例中所有的数据、方法、属性、过滤器等等都已经不可用。）
  destroyed() {
    console.log(`生命周期钩子之销毁时候的钩子！RightsView.vue 组件被销毁了呀！`);
  },
  // 16.错误调用的钩子（当捕获到一个来自后代组件的错误时被调用。）
  errorCaptured(err, vm, info) {
    console.log(`生命周期钩子之错误调用的钩子！`);
  },
  methods: {
    getRefs() {
      console.log(this.$refs.h4Ref);
      // 操作DOM设置样式
      this.$refs.h4Ref.style.color = 'red';
    },
    setRefs() {
      console.log(this.$refs.elPassRef.$el);
      // 组件的 $nextTick(cb) 方法，会把 cb 回调推迟到下一个DOM更新周期之后执行。
      this.$nextTick(() => {
        this.$refs.elNameRef.focus();
      });
    },
    getFocus() {
      // 调用原生DOM对象的焦点事件
      this.$refs.getFocus.focus();
    }
  }
}
</script>

<style lang="less" scoped>

</style>
