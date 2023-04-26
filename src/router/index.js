import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "../views/dashboard/DashboardIndex.vue";
import LoginPage from "../views/login/LoginIndex.vue";

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
