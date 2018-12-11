<template>
  <div class="loginForm">
    <el-form :model="loginForm" class="demo-dynamic" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="loginForm.username" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(loginForm)" size="small" style="width: 100%;" round>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default{
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    submitForm (loginForm) {
      console.log(loginForm)
      this.$store.dispatch('login', loginForm)

    },
    resetForm (loginForm) {
      loginForm.username = null
      loginForm.password = null
    }
  }
}
</script>
<style>
  .loginForm{
    justify-content: center;
    display: flex;
    margin-top: 400px;
  }
</style>
