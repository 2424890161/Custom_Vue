<template>
  <div id="login">
    <div id="login_div">
      <p>用户登录</p>
      <div style="margin-top: 20px">
        <el-form label-position="left" label-width="80px" :model="loginForm">
          <el-form-item label="账号">
            <el-input id="userName" @blur="userNameBlur(loginForm.userName)" v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input id="password" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login" plain round>登录</el-button>
        &nbsp;&nbsp;&nbsp;
        <el-link type="info" @click="forget">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      let userName = this.loginForm.userName;
      let password = this.loginForm.password;
      if (userName==''||password==''){
        this.$notify({
          title: '警告',
          message: '账号密码不能为空！！！',
          type: 'warning'
        });
        return;
      }

      // let phone=/^1[3456789]\d{9}$/; //手机号验证
      let mail=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //邮箱验证
      if (!mail.test(userName)){
        this.$message({
          message: '请输入正确的邮箱！！！',
          type: 'warning'
        });
        return;
      }
    },

    forget() {
      this.$notify({
        title: '管理员QQ：2254574435',
        message: '请联系管理员（密码无法解析，只能重置！！！）',
        duration: 0
      });
    },

    // userNameBlur(even){
    //   // let phone=/^1[3456789]\d{9}$/; //手机号验证
    //   let mail=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //邮箱验证
    //   if (!mail.test(even)){
    //     this.$message({
    //       message: '请输入正确的邮箱！！！',
    //       type: 'warning'
    //     });
    //     return;
    //   }
    // }
  }
}
</script>

<style scoped>

#login {
  background-image: url("../assets/images/loginImage2.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
}

#login_div {
  border: 1px solid #dccfcf;
  width: 400px;
  height: 250px;
  margin: 180px auto;
  padding: 5px 80px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

#login_div p {
  font-size: 25px;
  font-family: '华文宋体';
}

</style>
