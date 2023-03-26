
<template>
  <div id="app">
    <v-nav></v-nav>
  </div>
</template>

<script>
import nav from "@/components/widgets/nav";
export default {
  name: "App",
  components: {
    "v-nav": nav
    // HelloWorl
  },
  mounted() {
    randomBgcolor();
  },
  data() {
    return {
      // isLogin: false,
      // user: { username: "", password: "" }
    };
  },
  methods: {
    // setLogin2(msg) {
    //   this.isLogin = !this.isLogin;
    //   console.log("到App" + msg);
    // }
  }
};

function randomBgcolor() {
  var index = Math.round((Math.random() * 10) / 2);
  var bgcolor = [
    "bisque",
    "skyblue",
    "pink",
    "paleturquoise",
    "lightyellow",
    "plum"
  ];
  var body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = bgcolor[index];
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
