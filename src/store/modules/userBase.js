import { getUserInfo, getMyMenu } from "../../api/user_base/index";
const SET_USER_INFO = "SET_USER_INFO";
const SET_MY_MENU = "SET_MY_MENU";
const SET_LOGGED_IN = "SET_LOGGED_IN";

const state = {
    userInfo: null,
    myMenu: null,
    isLoggedIn: false,
};

const mutations = {
    [SET_USER_INFO](state, payload) {
        state.userInfo = payload;
    },
    [SET_MY_MENU](state, payload) {
        state.myMenu = payload;
    },
    [SET_LOGGED_IN](state, payload) {
        state.isLoggedIn = payload;
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
    async getMyMenu({ commit }, payload) {
        let res;
        try {
            res = await getMyMenu(payload);
        } catch (error) {
            console.error(error);
        }
        if (res && res.code == 200) {
            commit(SET_MY_MENU, res.data);
        }
    },
    async setLoggedIn({ commit }, payload) {
        try {
            commit(SET_LOGGED_IN, payload);
        } catch (error) {
            console.error(error);
        }
    },
};
const getters = {
    userInfo: (state) => state.userInfo,
    myMenu: (state) => state.myMenu,
    isLoggedIn: (state) => state.isLoggedIn,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
