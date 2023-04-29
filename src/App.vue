<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div v-show="loggedIn" class="col-md-2">
                    <Menu :my-menu="myMenu" />
                </div>
                <div class="col-md-10" :class="{ 'col-md-12': !loggedIn }">
                    <Header v-show="loggedIn" :user-info="userInfo" />
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./views/header/Index.vue";
import Menu from "./views/menu/Index.vue";
import { getToken } from "./base";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "App",
    components: {
        Menu,
        Header,
    },
    data() {
        return {
            loggedIn: false,
        };
    },

    mounted() {
        const token = getToken();
        if (token) {
            this.getUserInfo();
        }
    },
    methods: {
        ...mapActions("userBase", ["getUserInfo", "getMyMenu"]),
    },
    computed: {
        ...mapGetters("userBase", ["userInfo", "isLoggedIn", "myMenu"]),
    },
    watch: {
        userInfo(userInfo) {
            if (userInfo) {
                this.getMyMenu({ username: userInfo.username });
                this.loggedIn = true;
            }
        },
        isLoggedIn(loggedIn) {
            if (loggedIn) {
                this.getUserInfo();
                this.loggedIn = true;
            }
            this.loggedIn = false;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
