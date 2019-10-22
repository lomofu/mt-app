<template>
<div class="showcard">
  <el-row>
    <el-col :span="24">
      <div class="playcard">
        <el-carousel indicator-position="none">
          <el-carousel-item
            v-for="(item,index) in src"
            :key="index"
          >
            <el-image :src="item"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="140">
    <el-col :span="7"  v-for="(o,index) in 3" :key="o" :offset="index > 0 ? 1:0">
      <div class="staticard">
        <el-card class="box-card">
          <div   v-for="(item,index) in src"
                 :key="index"
                 class="text item">
            <el-image :src="item"/>
          </div>
        </el-card>

      </div>
    </el-col>
  </el-row>

</div>
</template>
<script>
    export default {
        name: 'showcard',
        data() {
            return {
                src: []
            }
        },
        methods:{
            loadAll(){
                return [
                    require('../../assets/img/showcard/2.jpg'),
                    require('../../assets/img/showcard/3.jpg')
                ];
            }
        },
        mounted() {
            this.src = this.loadAll();
        }
    }
</script>
<style>

  .el-carousel{
    width: 920px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .staticard{
    margin-top: 10px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
    height: 145px;

  }
</style>
