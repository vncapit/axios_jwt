import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "../components/DashboardPage.vue";
import LoginPage from "../components/LoginPage.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: LoginPage, name: "Login" },
  { path: "/login", component: LoginPage, name: "Login" },
  { path: "/dashboard", component: DashboardPage, name: "Dashboard" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
