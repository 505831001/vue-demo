<template>
  <div class="login-container">
    <!-- 绑定表单属性传值：v-bind:model="ruleForm"，绑定表单属性校验：v-bind:rules="rules"，绑定表单属性操作DOM：ref="ruleForm" -->
    <el-form label-width="80px" size="mini" v-bind:model="ruleForm" v-bind:rules="rules" ref="ruleForm">
      <el-form-item label="用户账号" prop="name">
        <el-input type="text" autocomplete="off" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="pass">
        <el-input type="password" autocomplete="off" v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" autocomplete="off" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="submitForm('ruleForm')">提交</el-button>
        <el-button v-on:click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {

  },
  data() {
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户'));
      } else {
        callback();
      }
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
      title: '石斑鱼商城（购物车）',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          {validator: checkName, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // TODO -> 关于 ref 被用来给元素或者子组件注册引用信息，$refs 获取所有含有 ref 属性的DOM元素，持有已经注册过 ref 的所有子组件。
          console.log(this.$refs[formName]);
          console.log(this.$refs.ruleForm);
          this.$router.push('/cart');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  margin: 0;
  padding: 20px;
  background-color: aliceblue;
}
</style>
