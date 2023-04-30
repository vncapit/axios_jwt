<template>
    <nav class="menu">
        <MenuItem
            v-for="menu in menus"
            :key="menu.id"
            :menu="menu"
            :nestedNum="0"
        />
    </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
    name: "Menu",
    components: {
        MenuItem,
    },
    props: {
        myMenu: {
            type: Array,
            default: () => [""],
        },
    },
    computed: {
        menus() {
            if (this.myMenu) {
                let menus = [...this.myMenu];
                menus.unshift({ name: "dashboard", path: "/dashboard", id: 0 });
                return menus;
            }
            return [];
        },
    },
};
</script>

<style lang="scss" scoped>
.menu {
    min-height: 100vh;
    max-height: 100vh;
    overflow: scroll;
    background-color: rgb(48, 65, 86);
}
</style>
