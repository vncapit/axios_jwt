import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./modules/dashboard";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,
  modules: {
    dashboard,
  },
});

export default store;
