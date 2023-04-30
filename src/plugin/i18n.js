import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const messages = {
    vn: {
        dashboard: "Trang chủ",
    },
    en: {
        dashboard: "Dashboard",
    },
    cn: {
        dashboard: "首页",
    },
};

const i18n = new VueI18n({
    fallbackLocale: "vi",
    messages,
});

export default i18n;
