<template>
    <div class="menu-wrap">
        <div class="menu-item" @click="handleToggle" :ref="menu.id">
            <span
                class="menu-name"
                :style="`padding-left: ${nestedNum * 20}px`"
            >
                {{ menu.name }}
            </span>
        </div>
        <div class="menu-child" v-for="item in menu.children" :key="item.id">
            <MenuItem :menu="item" :nestedNum="nestedNum + 1" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    mounted() {},
    props: {
        menu: {
            default: () => [],
        },
        nestedNum: {
            default: 0,
        },
    },

    methods: {
        handleToggle() {
            if (this.$refs[this.menu.id].classList.value.includes("expand")) {
                this.$refs[this.menu.id].classList.remove("expand");
            } else {
                this.$refs[this.menu.id].classList.add("expand");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.menu-wrap {
    display: block;
}

.menu-wrap:not(:has(> .expand)) {
    height: 35px;
    overflow: hidden;
}

.menu-wrap:has(> .expand) div:not(:first-child) {
    background-color: rgb(31, 45, 61);
}

.menu-item {
    height: 35px;
    line-height: 35px;
    text-align: left;
    color: rgb(191, 203, 217);
    margin-left: 10px;

    &:hover {
        background-color: rgba(80, 74, 74, 0.884);
    }
}

.menu-child {
}
.menu-name {
    padding-left: 20px;
}
</style>
