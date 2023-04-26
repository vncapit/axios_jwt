<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner d-flex" style="justify-content: start">
                <div class="carousel-item active item-style">
                    <img class="d-block mx-auto" :src="`http://172.18.0.246:90/` +
                        top10Activities[0]?.resources[0]?.path
                        " alt="logo.png" />
                    <div class="carousel-caption d-none d-md-block">
                        <span>{{ top10Activities[0]?.title }}</span>
                    </div>
                </div>

                <div class="carousel-item item-style" v-for="activity in top9Activities" :key="activity?.id">
                    <img :src="`http://172.18.0.246:90/` +
                        activity?.resources[0]?.path
                        " class="d-block mx-auto" alt="../assets/logo.png" />
                    <div class="carousel-caption d-none d-md-block">
                        <span>{{ activity?.title }}</span>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Carousel',
    props: {
        top10Activities: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
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
    border-radius: 50%;
}

.carousel-item img {
    max-width: 1000px;
    max-height: 350px;
}

.item-style {
    height: 350px;
    background-color: rgb(235, 230, 234);
}

.carousel-caption span {
    color: rgb(255, 255, 255);
    background-color: rgba($color: #ffffff, $alpha: 0.3);
    max-width: max-content;
    padding: 5px;
    border-radius: 3px;
}
</style>
