<template>
  <el-container class="index-main">
    <el-aside width="auto">
      <main-side></main-side>
    </el-aside>
    <el-container>
      <el-header height="auto">
        <main-top></main-top>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import router from '../router/index'
  import mainTop from '../component/mainTop'
  import mainSide from '../component/mainSide'

  export default{
    name: 'Main',
    data () {
        return {
        }
    },
    components: {
      mainTop,
      mainSide
    }
  }
</script>
<style>

  .index-main{
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 16px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 16px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
