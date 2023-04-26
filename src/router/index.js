import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard/Index.vue";
import Login from "../views/login/Index.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
