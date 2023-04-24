import { getUserInfo } from "../../api/dashboard/index";
const SET_USER_INFO = "SET_USER_INFO";

const state = {
  userInfo: null,
};

const mutations = {
  [SET_USER_INFO](state, payload) {
    state.userInfo = payload;
  },
};

const actions = {
  async getUserInfo({ commit }) {
    let res;
    try {
      res = await getUserInfo();
    } catch (error) {
      console.error(error);
    }
    if (res && res.code == 200) {
      commit(SET_USER_INFO, res.data);
    }
  },
};
const getters = {
  userInfo: (state) => state.userInfo,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
