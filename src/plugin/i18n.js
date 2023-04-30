import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const messages = {
    vn: {
        dashboard: "Trang chủ1",
    },
    en: {
        dashboard: "Dashboard1",
    },
    cn: {
        dashboard: "首页1",
    },
};

const i18n = new VueI18n({
    fallbackLocale: "vi",
    messages,
});

export default i18n;
