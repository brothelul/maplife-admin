<template>
  <el-row class="main-header">
    <el-col :span="4" :offset="20" style="text-align: right; padding-right: 16px;">
      <el-dropdown :hide-on-click="false">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
          <img style="height: 35px; width: 35px; border-radius: 50%; background-color: #888; flex: 1;" src="https://wx.qlogo.cn/mmopen/vi_32/GC41VEcIzuRd1t6vDiaiahREGZv0VNJmkB4qVzbGQ96ibRaiaEkvcst9ibyicGLm7PM6uDufbBAx61pNFGG9cJ3ibedpA/132"></img>
          <div style="flex: 1; margin-left: 8px;">
            Ok
          </div>
          <div style="flex: 1;">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="el-icon-bell" style="margin-right: 2px;"></i>个人中心
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-delete"  style="margin-right: 2px;"></i>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
  export default {
      name:'mainTop',
  }
</script>
<style>
  .main-header{
    margin: 4px 0;
    cursor: pointer;
  }
</style>
