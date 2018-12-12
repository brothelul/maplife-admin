<template>
  <el-row class="loginForm" v-loading="loading">
    <el-col :span="4" :offset="2">
      <el-card shadow="always">
        <el-form :model="loginForm" class="demo-dynamic" label-width="50px">
          <el-form-item label="账号" prop="username">
            <el-input v-model.number="loginForm.username" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(loginForm)" size="small" style="width: 100%;" round>提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import {mapState} from 'vuex'

export default{
  name: 'Login',
  computed: {
    ...mapState({
      loginForm: state => state.login.loginForm,
      loading: state => state.login.loading
    })
  },
  methods: {
    submitForm (loginForm) {
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
