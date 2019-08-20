<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="search-panel">
    <el-row class="m-header-searchbar" >
      <el-col class="center" justify="center">
        <el-autocomplete
          class="inline-input"
          v-model="input"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
          size="medium"
        ><i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-autocomplete>
        <el-col :offset="9" class="nav list" >
        <ul class="list">
          <li><nuxt-link to="">美团外卖</nuxt-link></li>
          <li><nuxt-link to="">猫眼电影</nuxt-link></li>
          <li><nuxt-link to="">美团酒店</nuxt-link></li>
          <li><nuxt-link to="">美团旅游</nuxt-link></li>
          <li><nuxt-link to="">美团推荐</nuxt-link></li>
        </ul>
        </el-col>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return{
        recommend:[],
        input:''
      }
    },
    methods: {
      //fetch-suggestions 是一个返回输入建议的方法属性
      querySearch(queryString, cb) {
        var recommend = this.recommend;
        var results = queryString ? recommend.filter(this.createFilter(queryString)) : recommend;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (recommend) => {
          return (recommend.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        ];
      },
      handleSelect(item) {
        console.log(item.value+item.address);
      }
    },
    mounted() {
      this.recommend = this.loadAll();
    }
  }
</script>

<style scoped>
  .search-panel{
    box-shadow: 0px 9px 9px 0px rgba(0, 0, 0, 0.03);
  }
  .inline-input{
    width: 30%;
  }
  li{
    list-style: none;
    float: left;
    width: 80px;
    box-sizing:border-box;
    text-align: center;
    font-size: 15px;
    margin-top: auto;

  }

  li:hover {
    font-weight: bold;
    color: #ffde4f!important;
    background-color: #e5ecef;
  }

  .nav{
    margin-top: -15px;
  }

</style>
