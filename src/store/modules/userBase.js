import {
    getUserInfo,
    getMyMenu,
    getTranslation,
} from "../../api/user_base/index";
const SET_USER_INFO = "SET_USER_INFO";
const SET_MY_MENU = "SET_MY_MENU";
const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_TRANSLATIONS = "SET_TRANSLATIONS";

const langMap = [
    { lang: "vn", language_enum: 2 },
    { lang: "en", language_enum: 0 },
    { lang: "cn", language_enum: 1 },
];

const state = {
    userInfo: null,
    myMenu: null,
    isLoggedIn: false,
    translations: null,
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
    [SET_TRANSLATIONS](state, payload) {
        const lang = payload.lang;
        const trans = payload.data.reduce((acc, cur) => {
            acc[cur.key] = cur.value;
            return acc;
        }, {});

        let translations = { [lang]: trans };
        state.translations = translations;
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
    async getTranslations({ commit }, lang) {
        try {
            let language_enum = langMap.find((item) => {
                return item.lang == lang;
            }).language_enum;
            let res;
            res = await getTranslation({ language_enum });
            commit(SET_TRANSLATIONS, { data: res.data, lang });
        } catch (error) {
            console.error(error);
        }
    },
};
const getters = {
    userInfo: (state) => state.userInfo,
    myMenu: (state) => state.myMenu,
    isLoggedIn: (state) => state.isLoggedIn,
    translations: (state) => state.translations,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
