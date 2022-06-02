<template>
  <div id="div1">
    <el-container style="height: 100%">
      <el-main class="el-main">
        <div id="div-login">
          <table>
            <tr class="div-tr">
              <td style="text-align-last: justify">用户名:</td>
              <td>
                <el-input style="width: 300px;height: 35px"></el-input>
              </td>
            <tr>
            <tr class="div-tr">
              <td style="text-align-last: justify">密码:</td>
              <td>
                <el-input style="width: 300px;height: 35px" show-password></el-input>
              </td>
            </tr>
            <tr class="div-tr">
              <td style="text-align-last: justify">验证码:</td>
              <td>
                <el-input style="width: 200px;height: 35px" show-password></el-input>
              </td>
              <td>
                <el-image style="border-radius: 3px; width: 100px;height: 40px;right: 101px;top: 4px"
                          :src="image_url"></el-image>
              </td>
            </tr>
          </table>
        </div>
      </el-main>
      <el-footer class="el-footer">
        <div id="div2-1">
          <span>热门活动：<span style="width: 100%;height: 50%" @click="hd1">吾儿泰🐕招亲 <span style="color: red">点击参加</span></span></span>
        </div>
        <div id="div2-2">
          <span>Copyright © 2022 泰🐕他爹才涛 版权所有 </span><a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">备案号</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      password: '',
      image_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    hd1() {
      alert("联系QQ:2529788639")
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

.div-tr {
  width: 400px;
  height: 70px;
}

.el-footer {
  background-color: #2c3e50;
}

#div2-1 {
  height: 50%;
  width: 100%;
  align-content: center;
  font-size: 10px;
}

#div2-2 {
  height: 50%;
  width: 100%;
  align-content: center;
  font-size: 10px;
}

</style>
