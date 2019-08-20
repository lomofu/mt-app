<template>
  <div class="index">
    <top-bar/>
    <search-bar class="search"/>
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
  @import "@/assets/css/public/header/index.scss";
</style>
