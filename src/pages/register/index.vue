<template>
    <div class="login-wrapper">
      <div class="bg-wrapper">
        <div class="right-wrapper">
          <el-form :model="loginForm" :rules="loginRules" ref="loginRef">
            <div class="login-title">立即注册</div>
            <el-form-item style="margin-top: 20px" prop="username">
              <el-input
                v-model="loginForm.username"
                size="large"
                style="width: 300px"
                placeholder="用户名"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 20px" prop="password">
              <el-input
                show-password
                v-model="loginForm.password"
                size="large"
                style="width: 300px"
                type="password"
                placeholder="密码"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 30px">
              <el-button type="primary" style="width: 100%" size="large" @click="handleRegister">注册</el-button>
            </el-form-item>
            <div style="position: relative;">
              <el-button @click="$router.push('/login')" style="right: 0;position: absolute;" type="small">返回登录</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchRegister } from "../../api/index.js";
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: "",
          password: "",
        },
        loginRules: {
          username: [
            { required: true, message: "用户名不能为空", trigger: "blur" },
          ],
          password: [
            { required: true, message: "密码不能为空", trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      // 登录请求
      handleRegister() {
        this.$refs["loginRef"].validate((valid) => {
          if (!valid) {
            return;
          } else {
            let params = {
              username: this.loginForm.username,
              password: this.loginForm.password,
            };
            fetchRegister(params).then((res) => {
              if (res.code === 200) {
                this.$message.success('注册成功');
                this.$router.push("/login");
              } else {
                this.$message.error(res.message);
                return;
              }
            });
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/login.jpg");
    background-size: cover;
    display: flex;
    flex-direction: row;
    z-index: 1;
    justify-content: center;
    align-items: center;
  }
  
  .bg-wrapper {
    width: 50%;
    height: 65%;
    z-index: 9999;
    opacity: 0.95;
    display: flex;
    flex-direction: row;
  }
  
  .left-wrapper {
    display: flex;
    flex: 1;
    background-color: #6190e8;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .title {
    color: white;
    font-size: 30px;
    margin-top: 30px;
  }
  
  .right-wrapper {
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  .login-title {
    width: 300px;
    text-align: center;
    font-size: 30px;
    margin-bottom: 40px;
  }
  </style>../../api