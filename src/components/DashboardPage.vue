<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="user d-flex justify-content-end">
                <img src="../assets/logo.png" alt="" class="avatar">
                <span class="username">Cap-IT</span>
            </div>
        </nav>
        <div></div>
    </div>
</template>

<script>
import { getUserInfo } from '../api/dashboard/index'

export default {
    mounted() {
        this.getLoginUserInfoAsync();
    },

    data() {
        return {
            key: 'value'
        }
    },

    methods: {
        async getLoginUserInfoAsync() {
            let data = await getUserInfo();
        },

    },

    computed: {
        name() {
            return this.data
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