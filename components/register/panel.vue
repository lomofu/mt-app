<template xmlns:e-col="http://www.w3.org/1999/html">
  <div class="res-panel">
    <div class="res-panel-step">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="res-panel-form">
      <el-row>
        <el-col :span="10" :push="10">
          <h1 class="res-panel-title">{{title}}</h1>
        </el-col>
      </el-row>
      <br><br>
      <el-row>
        <el-col>
          <el-form ref="form" :model="form" label-width="80px" :rules="rules" label-position="left" size="big">
            <transition name="el-fade-in-linear">
              <div class="step1" v-show="show1">
                <el-row :gutter="130">
                  <el-col :span="13">
                    <el-tooltip class="item" effect="dark" content="姓名不得包含特殊字符(如#./~)" placement="right">
                      <el-form-item label="用户名" prop="name">
                        <el-input v-model="form.name"></el-input>
                      </el-form-item>
                    </el-tooltip>
                    <el-form-item label="性别" prop="gender">
                      <el-radio-group v-model="form.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                        <el-radio label="保密"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="date">
                      <el-date-picker type="date" placeholder="选择你的出生年月" v-model="form.birth" value-format="yyyy-MM-dd" style="width: 100%">
                      </el-date-picker>
                    </el-form-item>
                    <el-tooltip class="item" effect="dark" content="手机号暂时只支持大陆手机号码" placement="right">
                      <el-form-item label="手机号" prop="phone">
                        <el-input v-model.number="form.phone"></el-input>
                      </el-form-item>
                    </el-tooltip>
                    <el-form-item label="邮箱" prop="email">
                      <el-input v-model="form.email"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <div class="step1-info">
                      这很重要，这是为您服务的基本保障,请花一点时间填写
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <el-button type="primary" @click="next" style="margin-left: 80px">下一步</el-button>
                  <el-button type="danger" @click="resetForm('form')" style="margin-left: 10px">重 制</el-button>
                </el-row>
              </div>
            </transition>

            <transition name="el-zoom-in-center">
              <div class="step2" v-show="show2">
                <i class="el-icon-arrow-left" @click="handleBack"></i>
                <upload class="step2-upload" style="margin-left: 42%;margin-right: 42%;margin-bottom: 30px"></upload>
                <el-row>
                  <el-col :push="11" :span="5">
                    <el-button type="primary" @click="next">下一步</el-button>
                  </el-col>
                </el-row>
              </div>
            </transition>

            <div class="step3" v-show="show3">
              <el-col>
                <i class="el-icon-arrow-left" @click="handleBack"></i>
              </el-col>
              <el-col :span="8" :push="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image">
                  <div style="padding: 14px;">
                    <p>姓名： {{form.name}}</p>
                    <p>出生日： {{form.birth}}</p>
                    <p>性别： {{form.gender}}</p>
                    <p>邮箱： {{form.email}}</p>
                    <p>电话： {{form.phone}}</p>
                    <div class="bottom clearfix">
                      <el-button type="primary" @click="drawer = true">确认</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </div>

    <el-drawer
      :visible.sync="drawer"
      direction="btt"
    >
      <span>确认信息无误?!</span>
    </el-drawer>


  </div>

</template>

<script>

  import upload from '../register/uploate.vue'

  export default {
    name: 'reg-panel',
    components: {
      upload
    },
    data() {
      return {
        active: 0,
        title: '完整你的信息！',
        show1: true,
        show2: false,
        show3: false,
        drawer: false,
        form: {
          name: '',
          gender: '',
          birth: '',
          phone: '',
          email: ''
        },
        rules: {
          name: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
            {type: 'string', message: '请输入正确的用户名', trigger: 'blur'}],
          phone: [
            {required: true, message: '电话号码不能为空', trigger: 'blur'},
            {required: true, type: 'number', message: '请输入正确的电话号码', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
          ]
        },
      };
    },
    methods: {
      next() {
        this.active++;
        console.log(this.active)
        if (this.active === 1) {
          this.show1 = false;
          this.show2 = true;
        } else if (this.active === 2) {
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
          this.title = '确认你的信息';
        }

      },
      resetForm(form) {
        //利用this.$nextTick()将赋值操作放到dom渲染结束之后
        this.$nextTick(() => {
          this.$refs[form].resetFields();
        })
      },
      handleBack() {
        this.active--;
        if (this.active === 0) {
          this.show2 = false;
          this.show1 = true;
        } else if (this.active === 1) {
          this.show1 = false;
          this.show3 = false;
          this.show2 = true;
        }
      },
      handleRegister() {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    }

  };
</script>

<style scoped>
  .el-icon-arrow-left {
    cursor: pointer;
    font-size: 24px;
  }

  .bottom {
    text-align: center;
    margin-top: 24px;
  }

  img {
    width: 100%;
  }
</style>
