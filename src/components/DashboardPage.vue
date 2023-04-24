<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="user d-flex justify-content-end">
                <img :src="avatarPath" alt="" class="avatar">
                <span class="username">{{ userInfo?.name }}</span>
            </div>
        </nav>
        <div></div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    mounted() {
        this.getUserInfo();
    },

    data() {
        return {
            key: 'value'
        }
    },

    methods: {
        ...mapActions('dashboard', ['getUserInfo']),
    },

    computed: {
        ...mapGetters('dashboard', ['userInfo']),
        avatarPath() {
            return 'http://172.18.0.246:90/' + (this.userInfo?.avatar);
        }
    },


}
</script>

<style lang="scss" scoped>
.user img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
</style>