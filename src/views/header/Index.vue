<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="user d-flex justify-content-end" @click="showSubMenu()">
                <img :src="avatarPath" alt="" class="avatar" />
                <span class="username">{{ userInfo?.name }}</span>
                <div v-show="isShowSubMenu" class="sub-menu">
                    <div class="arrow"></div>
                    <div @click="handleLogout">Log out</div>
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
    data() {
        return {
            isShowSubMenu: false,
        };
    },
    computed: {
        avatarPath() {
            return "http://172.18.0.246:90/" + this.userInfo?.avatar;
        },
    },
    methods: {
        ...mapActions("userBase", ["setLoggedIn"]),
        showSubMenu() {
            this.isShowSubMenu = !this.isShowSubMenu;
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
</style>
