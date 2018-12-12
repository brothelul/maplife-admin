<template>
  <div>
    <div style="text-align: center">
      <el-button icon="el-icon-menu" type="text" @click="collapse"></el-button>
    </div>
    <el-menu class="el-menu-vertical el-menu" router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="/dashboard" :collapse="isCollapse">
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">总览</span>
      </el-menu-item>
      <el-menu-item index="/log">
        <i class="el-icon-document"></i>
        <span slot="title">日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import children from '../router/children'

  export default {
    name: 'mainSide',
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      collapse: function () {
        let isCollapse = !this.isCollapse;
        console.log(isCollapse)
        this.isCollapse = isCollapse
      }
    }
  }
</script>
<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
  }

  .el-menu{
    border-right: 1px solid #545c64;
  }
</style>
