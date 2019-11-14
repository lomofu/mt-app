<template>
  <div class="res-panel">
    <div class="res-title">注册</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="cppassword">
        <el-input type="password" v-model="ruleForm.cppassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
        ruleForm: {
          name: '',
          email: '',
          code: '',
          phone: '',
          password: '',
          cppassword: ''
        },
        rules: {
          email: [
            {required: true, type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'},
          ],
          name: [
            {required: true, type: 'string', message: '请输入用户名', trigger: 'blur'},
            {max: 10, message: '长度不要超过10个字符!', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {type: 'number', message: '请输入正确的手机号码', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value.toString().length !== 11) {
                  callback(new Error('请输入正确的手机长度'));
                } else {
                  callback();
                }
              },
              trigger:'blur'
            }
          ],
          password: [
            {type: 'string', required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 16, message: '密码长度控制在6到16个字符之间', trigger: 'blur'}
          ],
          cppassword: [
            {type: 'string', required: true, message: '请再次输入密码', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.ruleForm.password) {
                  callback(new Error('两次密码不一致,请重新输入'))
                } else {
                  callback();
                }
              },
              trigger:'blur'
            }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
