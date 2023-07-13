<template>
  <div class="commonHead">
    <h1 class="title">物流信息数据中台系统</h1>
  </div>
</template>

<script>
export default {
  name: "commonHead",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.commonHead{
  .title{
    text-align: left;
    padding-left: 300px;
  }
}
</style>