<template>
  <el-menu
      :router="true"
      default-active="dataDetail">
    <el-menu-item index="dataDetail">
      <i class="el-icon-setting"></i>
      <span slot="title">数据概览</span>
    </el-menu-item>
    <el-menu-item index="manageData">
      <i class="el-icon-menu"></i>
      <span slot="title">管理数据</span>
    </el-menu-item>
    <el-menu-item index="governanceData">
      <i class="el-icon-menu"></i>
      <span slot="title">数据治理</span>
    </el-menu-item>
    <el-menu-item index="apiService">
      <i class="el-icon-document"></i>
      <span slot="title">API服务</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  methods: {


  }
}
</script>

<style scoped>

</style>