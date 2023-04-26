<template>
    <div class="menu-item">
        <div @click="handleToggle" :ref="menu.id">{{ menu.name }}</div>
        <div v-for="item in menu.children" :key="item.id">
            <MenuItem :menu="item" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        menu: {
            default: () => []
        },
    },

    methods: {
        handleToggle() {
            if (this.$refs[this.menu.id].classList.value.includes("collapsed")) {
                this.$refs[this.menu.id].classList.remove('collapsed');
            }
            else {
                this.$refs[this.menu.id].classList.add('collapsed');

            }

        },
    }
}
</script>

<style lang="scss" scoped>
.menu-item {
    margin-left: 12px;
}

.menu-item :not(.collapsed) {
    background-color: black;
}
</style>