<template>
    <nav class="menu">
        <ul></ul>
    </nav>
</template>

<script>
export default {
    props: {
        myMenu: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        menu() {
            let menu = [...this.myMenu].push({
                path: "/dashboard",
                name: "Dashboard",
            });
            return menu;
        },
    },
};
</script>

<style lang="scss" scoped>
.menu {
    background-color: beige;
    min-height: 100vh;
}
</style>
