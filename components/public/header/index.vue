<template>
  <div class="index">
    <top-bar/>
    <search-bar/>
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
