<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5" class="menu" ><emenu/></el-col>
      <el-col :span="16" class="showcard"><show-card/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><tag-bar/></el-col>
    </el-row>
  </div>
</template>

<script>
    import Emenu from '../components/index/menu.vue';
    import ShowCard from '../components/index/showcard.vue';
    import TagBar from '../components/index/tagbar.vue'

  export default {
    name: "index",
    components: {
      Emenu, ShowCard,TagBar

    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
