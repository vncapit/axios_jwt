import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./plugin/i18n";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

import router from "./router/index";
import store from "./store/index";

/* add icons to the library */
library.add(fas);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    i18n,
    router,
    render: (h) => h(App),
    store,
}).$mount("#app");
