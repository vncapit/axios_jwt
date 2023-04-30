<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="d-flex justify-content-end">
                <div class="lang" @click="showLang">
                    <img class="selected-lang" :src="langPath" alt="" />
                    <ul v-if="isShowLang">
                        <li
                            @click="changeLanguage(lang.lang)"
                            v-for="lang in langList"
                            :key="lang.lang"
                        >
                            <img :src="lang.path" alt="" />
                        </li>
                    </ul>
                </div>

                <div class="user" @click="showSubMenu()">
                    <img :src="avatarPath" alt="" class="avatar" />
                    <span class="username">{{ userInfo?.name }}</span>
                    <div v-show="isShowSubMenu" class="sub-menu">
                        <div class="arrow"></div>
                        <div @click="handleLogout">Log out</div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { logout } from "../../api/auth/index";
import { mapActions } from "vuex";
import { removeToken } from "../../base";
export default {
    name: "Header",
    props: {
        userInfo: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        setTimeout(() => {
            this.$i18n.locale = this.selectedLang;
            console.log(this.$i18n.locale);
        }, 500);
    },
    data() {
        return {
            isShowSubMenu: false,
            isShowLang: false,
            langList: [
                {
                    lang: "vn",
                    path: "/assets/national_flags/vn.svg",
                },
                {
                    lang: "cn",
                    path: "/assets/national_flags/cn.svg",
                },
                {
                    lang: "en",
                    path: "/assets/national_flags/eng.svg",
                },
            ],
            selectedLang: "vn",
        };
    },
    computed: {
        langPath() {
            let langPath = this.langList.filter((item) => {
                return item.lang == this.selectedLang;
            });
            return langPath[0]?.path;
        },
        avatarPath() {
            return "http://172.18.0.246:90/" + this.userInfo?.avatar;
        },
    },
    methods: {
        ...mapActions("userBase", ["setLoggedIn"]),
        changeLanguage(lang) {
            this.$i18n.locale = lang;
            this.selectedLang = lang;
        },
        showSubMenu() {
            this.isShowSubMenu = !this.isShowSubMenu;
        },
        showLang() {
            this.isShowLang = !this.isShowLang;
        },
        async handleLogout() {
            let res = await logout();
            if (res.code === 200) {
                this.setLoggedIn(false);
                removeToken();
                this.$router.push("/login");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.lang {
    position: relative;
    margin-right: 12px;
    .selected-lang {
        width: 35px;
        height: 25px;
    }
    ul {
        position: absolute;
        z-index: 101;
        top: 110%;
        left: -115%;

        li {
            list-style: none;
            width: 35px;
            height: 25px;
            margin-bottom: 5px;
            cursor: pointer;
        }
    }
}
.user {
    position: relative;
    cursor: pointer;
}
.user .sub-menu {
    position: absolute;
    top: 30px;
    z-index: 100;
    padding: 0 5px;
    background-color: rgba($color: #b0b8b5, $alpha: 0.7);
    cursor: pointer;

    .arrow {
        position: absolute;
        top: -10px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid rgba($color: #b0b8b5, $alpha: 0.7);
    }
}
.user img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border-radius: 50%;
}

.language {
    display: block;
    width: 60px;
    height: 60px;
}
.language option {
    display: block;
    width: 60px;
    height: 60px;
}
</style>
