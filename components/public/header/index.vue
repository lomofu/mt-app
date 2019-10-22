<template>
  <div class="index">
    <el-row><top-bar/></el-row>
    <el-row><search-bar class="search"/></el-row>
  </div>
</template>

<script>
  import TopBar from './topbar.vue';
  import SearchBar from './searchbar.vue'

  export default {
    name: "index",
    components: {
      TopBar,
        SearchBar
    }
  }
</script>

<style lang="scss">
</style>
