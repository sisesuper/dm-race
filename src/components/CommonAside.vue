<template>
  <el-menu
      :router="true"
      default-active="dataDetail">
    <el-menu-item index="dataDetail">
      <i class="el-icon-setting"></i>
      <span slot="title">数据概览</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="addDataSource">录入数据源</el-menu-item>
        <el-menu-item index="delDataSource">删除数据源</el-menu-item>
        <el-menu-item index="updateDataSource">修改数据源</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
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