<template>
  <div id="nav">
    <router-link to="/">
      <img id="logo" :src="require('@/assets/images/logo.png')" width="80px" height="80px" />
    </router-link>
    <ul>
      <li v-for="(item,index) in navs" :key="index">
        <router-link :to="item.path" class="routeLink">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navs: [
        { title: "首页", path: "/", actived: true },
        { title: "社区", path: "/community", actived: false },
        { title: "管理", path: "/management", actived: false }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
@import "@/css/widgets/nav.css";
</style>