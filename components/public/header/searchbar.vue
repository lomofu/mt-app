<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="searchbar">
    <el-row >
      <el-col :span="3" class="left"><img src="../../../assets/img/logo.png" alt="logo" class="logo"></el-col>
      <el-col :span="15" class="center">
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          size="medium"
          :autosize="{ minRows: 2, maxRows: 4}"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          maxlength = "15"
          @select="handleSelect"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-autocomplete>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return{
        resturants:[],
        state1:''
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      }
    }
  }
</script>

<style scoped>
.logo{
  width: 80px;
  height: auto;
}
</style>
