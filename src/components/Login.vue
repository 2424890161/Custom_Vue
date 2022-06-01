<template>
  <div id="div1">
    <el-container>
      <el-main class="el-main">
        <div id="div-login">
          <el-input placeholder="请输入账号" style="width: 300px;height: 40px" v-model="userName"></el-input>
          <el-input placeholder="请输入密码" style="width: 300px;height: 40px" v-model="password" show-password></el-input>
        </div>
      </el-main>
      <el-footer class="el-footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      password: ''
    }
  }
}
</script>

<style scoped>

#div1 {
  height: 100%;
  width: 100%;
}

.el-main {
  background-size: 100% 100%;
  background-image: url("/static/images/login.jpg");
}

#div-login {
  height: 300px;
  width: 450px;
  margin: 100px auto;
  background: rgba(34, 34, 34, 0.5);
  border-radius: 10px;
}

.el-footer {
  background-color: #2c3e50;
}

</style>
