<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar" type="flex" justify="center">
      <el-col class="center">
          <el-autocomplete
            class="inline-input"
            v-model="input"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ><i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-autocomplete>
        <el-button type="primary" icon="el-icon-search" class="button" @click="handleClick">
        </el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <ul class=" nav list">
        <li>
          <nuxt-link to="">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">猫眼电影</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">美团酒店</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">美团旅游</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">美团推荐</nuxt-link>
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: "search",
    data() {
      return {
        recommend: [],
        input: '',
      }
    },
    methods: {
      //fetch-suggestions 是一个返回输入建议的方法属性
      querySearch(queryString, cb) {
        const recommend = this.recommend;
        let results = queryString ? recommend.filter(this.createFilter(queryString)) : recommend;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (recommend) => {
          return (recommend.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item.value + item.address);
      },
      handleClick() {
        this.show = !this.show;
      }
    },
    async created() {
          let response = await axios.get('/api/search');
          if (response.status === 200) {
              this.recommend = response.data;
          } else {
              window.alert('服务器异常');
          }
      },
      //TODO
      // async asyncData(){
      //     debugger
      //     //let {data} = await axios.get('http://localhost:3000/api/search');
      //     console.log(await axios.get('http://localhost:3000/api/search'))
      //   // let {status,data:{list}} = await axios.get('/api/search');
      //   // if (status === 200) {
      //   //   return {
      //   //     recommend:list
      //   //   };
      //   // } else {
      //   //   window.alert('服务器异常');
      //   // }
      // },
  };
</script>

<style scoped>
  .search-panel {
    box-shadow: 0px 9px 9px 0px rgba(0, 0, 0, 0.12);
  }

  li {
    list-style: none;
    float: left;
    width: 80px;
    box-sizing: border-box;
    text-align: center;
    font-size: 15px;
    margin-top: auto;

  }

  li:hover {
    font-weight: bold;
    background-color: #dee8f5;
  }

  a:hover {
    color: #df9a9d;
  }

  .button {
    background-color: #efaaad;
    border: 0px;
  }

  .button:hover {
    background-color: #c88b8e;
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s;
  }

  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateX(20px);
    opacity: 0;
  }


</style>
