<template>
  <div id="login">
    <div class="box">
      <img class="bgImg" src="/images/bg.png" alt />

      <div class="loginDiv">
        <!-- <div style="clear:both"></div> -->

        <p class="per-title">登录/注册</p>
        <div class="inputDiv">
          <strong style="color:gray">用户：</strong>
          <input class="inputUP" type="text" v-model="user.username" placeholder="请输入用户名" />
          <br />
          <strong style="color:gray">密码：</strong>
          <input class="inputUP" type="password" v-model="user.password" placeholder="请输入密码" />
        </div>
        <div class="bottomDiv">
          <p class="tips">! 未有的账号点击确认自动注册</p>

          <p
            class="confirm"
            @click="login(user)"
            :class="{correctInput:user.username!=''&&user.password!=''?true:false}"
          >确认</p>
        </div>

        <!-- <div style="clear:both"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  inject: ["reloadLoginState"],
  data() {
    return {
      user: { username: "", password: "", level: 2 },
      users: []
    };
  },
  created() {
    this.loadUserInfo();
  },
  methods: {
    loadUserInfo() {
      axios.get("http://localhost:3000/users").then(res => {
        this.users = res.data;
        console.log(this.users);
      });
    },
    login(user) {
      if (user.username == "" || user.password == "") {
        alert("用户或密码不能为空");
      } else {
        var isExist = this.users.some(item => item.username == user.username);
        if (!isExist) {
          console.log("不存在");
          // 注册账号
          this.sign(user);
        } else {
          this.users.find((val, index, arr) => {
            if (
              user.username == val.username &&
              user.password == val.password
            ) {
              alert("登录成功！！！");
              this.setLoginInfo(this.users[index]);
            } else if (
              user.username == val.username &&
              user.password != val.password
            ) {
              alert("登录失败，密码错误！！！");
            }
          });
        }
      }
    },
    sign(user) {
      // console.log(user);
      axios.post("http://localhost:3000/users/", user).then(res => {
        if (res.status == 201) {
          alert("注册成功！正在登录！！！");
          this.setLoginInfo(user);
        }
      }); //新增用户
      this.loadUserInfo();
      // axios.put("http://localhost:3000/users/"+id, user);
    },
    setLoginInfo(user) {
      this.Global.isLogin = true;
      this.Global.user = user;
      this.reloadLoginState();
      console.log(this.Global);
    }
  }
};
</script>
<style scoped>
@import "@/css/views/login.css";
</style>