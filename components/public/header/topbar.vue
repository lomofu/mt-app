<template>
  <el-row
    :gutter="0"
    class="m-header">
    <el-col :span="4">
      <goe/>
    </el-col>
    <el-col :span="4">
      <user/>
    </el-col>
    <el-col :span="8">
      <img src="../../../assets/img/logo.png" alt="logo" class="logo">
    </el-col>
    <el-col :span="8">
      <Nav/>
    </el-col>
  </el-row>
</template>

<script>
  import Goe from './goe.vue'
  import User from './user.vue'
  import Nav from './nav.vue'

  export default {
    components: {
      Goe,
      User,
      Nav
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
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
  .logo{
    width: 35px;
    height: auto;
    margin-top: 15px;
  }
</style>
