<template>
  <div class="tagbar">
    <el-tabs type="border-card" @tab-click="handleClick">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-guide"/>全部</span>
      </el-tab-pane>
      <template>
        <el-tab-pane v-for="(item,index) in list"
                     :key="item"
                     :label="item.label"
        >{{item.value}}</el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: "tagbar",
    data(){
      return{
        lab:'',
        list:[]
      }
    },
    methods:{
      handleClick(tab) {
      this.lab = tab.label;
  }
    },
    async mounted() {
        let promise = await axios.get('/api/tagbar');
        if (promise.status===200){
          this.list = promise.data;
        }
    }
  }
</script>

<style>

</style>
