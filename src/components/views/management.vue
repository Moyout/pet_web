<template>
  <div id="management">
    <!-- <h1>2231</h1> -->
    <v-login v-if="!isLogin" />
    <v-mgCenter v-if="isLogin" />
  </div>
</template>

<script>
import login from "@/components/views/login";
import mgCenter from "@/components/views/mgCenter";
export default {
  name: "management",
  components: {
    "v-login": login,
    "v-mgCenter": mgCenter
  },
  provide() {
    return {
      reloadLoginState: this.reloadLoginState
    };
  },
  created() {
    this.reloadLoginState();
  },
  data() {
    return {
      isLogin: false
      // user: { username: "", password: "" }
    };
  },
  methods: {
    reloadLoginState() {
      this.isLogin = this.Global.isLogin;
    }
  }
};
</script>
<style scoped>
</style>