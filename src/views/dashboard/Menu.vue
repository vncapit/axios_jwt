<template>
    <nav class="menu">
        <MenuItem v-for="menu in menus" :key="menu.id" :menu="menu" />
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    name: 'Menu',
    components: {
        MenuItem,
    },
    mounted() {

    },
    props: {
        myMenu: {
            type: Array,
            default: () => [''],
        },
    },
    computed: {
        menus() {
            if (this.myMenu) {
                let menus = [...this.myMenu];
                menus.unshift({ name: "Dashboard", path: "/dashboard", id: 0 })
                return menus;
            }
            return [];
        },
    },
};
</script>

<style lang="scss" scoped>
.menu {
    background-color: beige;
    min-height: 100vh;
    max-height: 100vh;
    overflow: scroll;
    margin-left: -12px;
}

.abc {
    background-color: rgb(175, 216, 216);
}
</style>
