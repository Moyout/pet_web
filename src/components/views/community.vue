<template>
  <div id="community">
    <table>
      <!-- leftBox -->
      <div class="leftBox">
        <ul>
          <li
            class="menuLi"
            v-for="(item,index) in menu"
            :key="index"
            @click="swidchMenu(item.id)"
            :class="{activeMenu:item.id==currMenuId?true:false}"
          >
            {{item.title}}
            <p>{{item.num}}</p>
            <hr />
          </li>
        </ul>
      </div>
      <!-- mainBox -->
      <div class="mainBox">
        <ul>
          <li v-for="(item,index) in content.data" :key="index">
            <img class="headImg" src="/images/head.webp" />
            <div class="text">
              <strong class="userName">{{item.userName}}</strong>
              <br />
              <strong class="time">{{item.time}}</strong>
            </div>
            <!-- 取消浮动 -->
            <div style="clear:both"></div>
            <h3 class="title">{{item.title}}</h3>
            <p class="content">{{item.content}}</p>
            <ul class="photoUl">
              <li v-for="(item,index) in item.pictures" :key="index">
                <img :src="item" alt />
                <!-- aa -->
              </li>
            </ul>
          </li>
          <li class="noData" v-if="content.data.length==undefined?true:false">暂无</li>
        </ul>
      </div>
      <div class="rightBox">
        <p>推荐内容</p>
        <br />
        <hr />
        <br />

        <p>暂无</p>
      </div>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "community",
  mounted() {
    this.loadData();
    // console.log(this.content);
  },
  data() {
    return {
      currMenuId: 0,
      menu: [
        // { id: 0, title: "全部", num: 0 },
        { id: 0, title: "推荐", num: 0 },
        { id: 1, title: "宠物领养", num: 0 },
        { id: 2, title: "打卡交流", num: 0 },
        { id: 3, title: "悬赏问答", num: 0 },
        { id: 4, title: "宠物咨询", num: 0 }
      ],
      content: {
        data: []
      },
      data: [],
      recommend: []
    };
  },
  methods: {
    swidchMenu(id) {
      this.currMenuId = id;
      this.content = this.data[id];

      // console.log(this.content.data.length);
    },
    loadData() {
      axios.get("http://localhost:3000/communityContent").then(res => {
        // console.log(this.content);
        this.data = res.data;
        this.content = this.data[0];
        this.data.forEach(item => {
          // console.log(item);
          this.menu.forEach(item2 => {
            if (item2.id == item.id) {
              item2.num = item.data.length != undefined ? item.data.length : 0;
            }
          });
        });

        // console.log(this.content);
      });
    }
  }
};
</script>
<style   scoped>
@import "@/css/views/community.css";
</style>