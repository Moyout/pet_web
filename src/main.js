import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueRouter from 'vue-router'
import Global from './Global'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(axios)
Vue.prototype.axios = axios
Vue.prototype.Global = Global


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
