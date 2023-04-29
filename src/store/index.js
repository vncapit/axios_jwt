import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./modules/dashboard";
import userBase from "./modules/userBase";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    modules: {
        dashboard,
        userBase,
    },
});

export default store;
