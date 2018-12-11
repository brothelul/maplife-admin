<template>
  <el-container class="index-main">
    <el-aside width="300px">
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="switchTab" default-active="active">
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <span slot="title">总览</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">日志</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import router from '../router/index'
  import children from '../router/children'

  export default{
    name: 'Main',
    data () {
        return {
          active: "-1"
        }
    },
    created () {
        const currentPath = router.currentRoute.path;
      console.log(currentPath)
      let indexI;
      children.children.find(function (item, index) {
          if (item.path == currentPath){
            indexI = index
          }
        })
      console.log(indexI)
      this.active = indexI+""
    },
    methods: {
      switchTab: function (index) {
        router.push({path: children.children[index].path})
      }
    }
  }
</script>
<style>
  .index-main{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
