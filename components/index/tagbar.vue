<template>
  <div class="tagbar">
    <el-tabs type="border-card" @tab-click="handleClick">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-guide"/>全部</span>
      </el-tab-pane>
      <template>
        <el-tab-pane v-for="(item,index) in list"
                     :key="index"
                     :label="item.label"
        >
          <el-row :gutter="240">
            <template>
              <el-col :span="5"
                      v-for="(val,index) in item.value"
                      :key="index"
                      class="animated fadeInUp" style="animation-duration: 400ms"
              >

                <el-card class="card hvr-grow-shadow">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div>
                    <span>  {{val}}</span>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
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
    async created() {
        let promise = await axios.get('/api/tagbar');
        if (promise.status===200){
          this.list = promise.data;
        }
    }
  }
</script>

<style>
.card{
  width:270px;
  margin-bottom: 40px;;
}
</style>
