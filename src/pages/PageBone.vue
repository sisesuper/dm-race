<template>
  <div class="PageBone">
    <el-container>
      <el-header>
        <CommonHead/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <CommonAside/>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHead from "@/components/CommonHead";
export default {
  name: "pageBone",
  components:{
    CommonAside,CommonHead

  }
}
</script>

<style lang="scss">
.PageBone{
  color: #333;
  text-align: center;
  .el-header {
    background-color: #B3C0D1;
    line-height: 60px;
  }
  .el-container{
    height: 100vh;
    .el-aside{
      line-height: 200px;
      .el-menu{
        height: 100%;
      }
    }
    .el-main {
      line-height: 160px;
    }
  }
}


</style>