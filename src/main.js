import Vue from "vue";
import App from "./App.vue";
// import { BootstrapVue } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project

// Vue.use(BootstrapVue);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    render: (h) => h(App),
}).$mount("#app");
