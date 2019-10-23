<template>
  <el-container>
    <el-header class="header">
      <my-header></my-header>
    </el-header>
    <el-main class="main">
      <nuxt/>
    </el-main>
    <el-footer class="footer">
      <el-divider class="diver"/>
      <my-footer/>
    </el-footer>
  </el-container>
</template>
<script>
  import MyHeader from '@/components/public/header/index.vue'
  import MyFooter from '@/components/public/footer/index.vue'
  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
<style scoped>
  .main{
    margin-top: 120px;
  }
  .footer{
    margin-top: 30px;
  }
  .diver{
    max-width: 97.5%;
  }
</style>
