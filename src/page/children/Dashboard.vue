<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="always">人数</el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">评论数</el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">正家属</el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Dashboard'
  }
</script>
