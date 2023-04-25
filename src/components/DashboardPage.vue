<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="user d-flex justify-content-end">
                <img :src="avatarPath" alt="" class="avatar" />
                <span class="username">{{ userInfo?.name }}</span>
            </div>
        </nav>

        <div class="container">
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div
                    class="carousel-inner d-flex"
                    style="justify-content: start"
                >
                    <div class="carousel-item active">
                        <img
                            class="img d-block mx-auto"
                            :src="
                                `http://172.18.0.246:90/` +
                                top10Activities[0]?.resources[0]?.path
                            "
                            alt="logo.png"
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ top10Activities[0]?.title }}</h5>
                        </div>
                    </div>

                    <div
                        class="carousel-item"
                        v-for="activity in top9Activities"
                        :key="activity?.id"
                    >
                        <img
                            :src="
                                `http://172.18.0.246:90/` +
                                activity?.resources[0]?.path
                            "
                            class="d-block mx-auto img"
                            alt="../assets/logo.png"
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ activity?.title }}</h5>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    mounted() {
        this.getUserInfo();
        this.getTop10Activities({ top: 10, language_enum: 1 });
    },

    data() {
        return {
            key: "value",
        };
    },

    methods: {
        ...mapActions("dashboard", ["getUserInfo", "getTop10Activities"]),
    },

    computed: {
        ...mapGetters("dashboard", ["userInfo", "top10Activities"]),
        avatarPath() {
            return "http://172.18.0.246:90/" + this.userInfo?.avatar;
        },
        top9Activities() {
            if (this.top10Activities) {
                return this.top10Activities.slice(0, 9);
            }
            return [];
        },
    },
};
</script>

<style lang="scss" scoped>
.user img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.img {
    max-width: 1000px;
    max-height: 350px;
}
</style>
