<template>
    <Carousel :top10-activities="top10Activities" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Carousel from "./Carousel.vue";

export default {
    name: "Dashboard",
    components: {
        Carousel,
    },
    mounted() {
        this.getTop10Activities({ top: 10, language_enum: 1 });
    },

    methods: {
        ...mapActions("dashboard", ["getTop10Activities"]),
    },

    computed: {
        ...mapGetters("dashboard", ["top10Activities"]),
    },
};
</script>

<style lang="scss" scoped></style>
