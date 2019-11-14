<template>
      <el-container>
        <el-header>
            <res-header/>
          </el-header>
        <el-main>
            <res-panel/>
          </el-main>
      </el-container>
</template>

<script>

  import ResHeader from '../components/register/header.vue';
  import ResPanel from '../components/register/register.vue'

    export default {
      name: "register",
      //选择自定义模版
      layout: 'blank',
      components:{
        ResHeader,
        ResPanel
      }
    }
</script>

<style lang="scss">
  @import'@/assets/css/register/style.scss';
</style>
