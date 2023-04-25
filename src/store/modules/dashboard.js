import { getUserInfo, getActivities } from "../../api/dashboard/index";
const SET_USER_INFO = "SET_USER_INFO";
const SET_TOP_10_ACTIVITIES = "SET_TOP_10_ACTIVITIES";

const state = {
    userInfo: null,
    top10Activities: null,
};

const mutations = {
    [SET_USER_INFO](state, payload) {
        state.userInfo = payload;
    },
    [SET_TOP_10_ACTIVITIES](state, payload) {
        state.top10Activities = payload;
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
};
const getters = {
    userInfo: (state) => state.userInfo,
    top10Activities: (state) => state.top10Activities,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
