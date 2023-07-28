<template>
  <div class="rights">
    <button v-on:click="getRefs()">获取 $refs 引用</button>
    <br>
    <h4 class="text-center" ref="h4Ref">权限管理</h4>
    <br>
    <button v-on:click="getFocus()">获取 $refs 引用</button>
    <br>
    <input type="text" name="other" id="other" ref="getFocus">
    <hr>
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
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      }
    }
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
