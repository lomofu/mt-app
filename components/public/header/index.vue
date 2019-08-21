<template>
  <div class="index">
    <el-row><top-bar/></el-row>
    <el-row><search-bar class="search"/></el-row>
    <el-row :gutter="0">
      <el-col :span="5" class="menu" ><emenu/></el-col>
      <el-col :span="19" style="background-color: #929c87">2</el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="background-color: #35495e">3</el-col>
    </el-row>
  </div>
</template>

<script>
  import TopBar from './topbar.vue';
  import SearchBar from './searchbar.vue'
  import Emenu from '../../index/menu.vue'

  export default {
    name: "index",
    components: {
      TopBar,
      SearchBar,
      Emenu
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
