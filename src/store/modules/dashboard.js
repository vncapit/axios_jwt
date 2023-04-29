import { getActivities } from "../../api/dashboard/index";
const SET_TOP_10_ACTIVITIES = "SET_TOP_10_ACTIVITIES";

const state = {
    top10Activities: null,
};

const mutations = {
    [SET_TOP_10_ACTIVITIES](state, payload) {
        state.top10Activities = payload;
    },
};

const actions = {
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
    top10Activities: (state) => state.top10Activities,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
