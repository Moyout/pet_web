<template>
  <div id="mgCenter">
    <h1 class="tips2">{{user.username}} 您好！您是{{getLevel()}}</h1>
    <button @click="signOut">退出登录</button>

    <div class="list-panel">
      <h1>社区内容管理</h1>
      <br />
      <ul class="comType">
        分类：
        <li
          v-for="(item,index) in communityContentList"
          :key="index"
          @click="selectType(index)"
          :class="{activedType:currType==index?true:false}"
        >{{item.type}}</li>
      </ul>
      <table border="1">
        <thead>
          <tr>
            <th>用户名</th>
            <th>标题</th>
            <th>内容</th>
            <th>发布时间</th>
            <th>图片</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in communityContentList[currType].data" :key="index">
            <td>{{item.userName}}</td>
            <td>
              <h4>{{item.title}}</h4>
            </td>
            <td
              style="max-width:500px;text-align:start;  text-indent: 2rem;  letter-spacing: 3px;"
            >{{item.content}}</td>
            <td>{{item.time}}</td>
            <td>(暂不显示)</td>
            <td>
              <button @click="deleteContent(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 v-if="communityContentList[currType].data.length==0?true:false">无内容</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "mgCenter",
  inject: ["reloadLoginState"],
  created() {
    this.user = this.Global.user;
    // console.log(this.Global.user);
    this.getPetInfo();
  },
  data() {
    return {
      currType: 0,
      user: {},
      communityContentList: []
    };
  },
  methods: {
    signOut() {
      this.Global.isLogin = false;
      this.Global.user = {};
      this.reloadLoginState();
      //   console.log(this.Global);
    },
    getLevel() {
      switch (this.user.level) {
        case 0:
          return "超级管理员";
        case 1:
          return "管理员";
        case 2:
        default:
          return "普通用户";
      }
    },
    getPetInfo() {
      axios.get("http://localhost:3000/communityContent/").then(res => {
        this.communityContentList = res.data;

        console.log(res.data);
      });
      //   console.log(this.communityContentList);
      //   console.log(this.communityContentList[0]);
    },
    selectType(index) {
      this.currType = index;
    },
    deleteContent(index) {
      if (this.user.level == 0) {
        this.communityContentList[this.currType].data.splice(index, 1);
        axios.put(
          "http://localhost:3000/communityContent/" + this.currType,
          this.communityContentList[this.currType]
        );
      } else {
        alert("你不是管理员，无权操作");
      }
    }
  }
};
</script>
<style scoped>
.list-panel {
  /* width: 400px; */
  /* background-color: aqua; */
  text-align: center;
  margin: 0 40px;
}
.comType {
  list-style: none;
  background-color: transparent;
}
.comType > li {
  cursor: pointer;
  margin: 10px;
  display: inline-block;
}

.activedType {
  color: red;
}

table th {
  min-width: 100px;
}
.tips2 {
  display: inline-block;
  position: relative;
}
</style>