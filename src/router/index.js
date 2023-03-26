import Vue from 'vue'
import App from "../App"
import Router from 'vue-router'
import Home from "../components/views/home"
import Community from "../components/views/community"
import Management from "../components/views/management"
// import Login from "../components/views/login"
// import Home from "../components/views/home"

Vue.use(Router)

export const routes = [
    // { path: '/home', component: Home },
    { path: "/", component: Home },
    { path: "/community", component: Community },
    { path: "/management", component: Management },
]

const router = new Router({
    routes: routes
})
export default router