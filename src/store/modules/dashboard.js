import {
    getUserInfo,
    getActivities,
    getMyMenu,
} from "../../api/dashboard/index";
const SET_USER_INFO = "SET_USER_INFO";
const SET_TOP_10_ACTIVITIES = "SET_TOP_10_ACTIVITIES";
const SET_MY_MENU = "SET_MY_MENU";

const state = {
    userInfo: null,
    top10Activities: null,
    myMenu: null,
};

const mutations = {
    [SET_USER_INFO](state, payload) {
        state.userInfo = payload;
    },
    [SET_TOP_10_ACTIVITIES](state, payload) {
        state.top10Activities = payload;
    },
    [SET_MY_MENU](state, payload) {
        state.myMenu = payload;
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
    async getTop10Activities({ commit }, payload) {
        let res;
        try {
            res = await getActivities(payload);
        } catch (error) {
            console.error(error);
        }
        if (res && res.code == 200) {
            commit(SET_TOP_10_ACTIVITIES, res.data);
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
};
const getters = {
    userInfo: (state) => state.userInfo,
    top10Activities: (state) => state.top10Activities,
    myMenu: (state) => state.myMenu,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
