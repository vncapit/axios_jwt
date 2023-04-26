<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <Menu :my-menu="myMenu" />
            </div>
            <div class="col-md-10">
                <Header :user-info="userInfo" />
                <Carousel :top10-activities="top10Activities" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./Header-cpn.vue";
import Carousel from "./Carousel-cpn.vue";
import Menu from "./Menu-cpn.vue";

export default {
    components: {
        Header,
        Carousel,
        Menu,
    },
    mounted() {
        this.getUserInfo();
        this.getTop10Activities({ top: 10, language_enum: 1 });
    },

    methods: {
        ...mapActions("dashboard", [
            "getUserInfo",
            "getTop10Activities",
            "getMyMenu",
        ]),
    },

    computed: {
        ...mapGetters("dashboard", ["userInfo", "top10Activities", "myMenu"]),
    },
    watch: {
        userInfo(userInfo) {
            if (userInfo) {
                this.getMyMenu({ username: userInfo.username });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
