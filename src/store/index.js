import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
});
