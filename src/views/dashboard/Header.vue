<template>
    <div>
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <font-awesome-icon class="" icon="fa-solid fa-bars" />
            <div class="user d-flex justify-content-end">
                <img :src="avatarPath" alt="" class="avatar" />
                <span class="username">{{ userInfo?.name }}</span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        userInfo: {
            type: Object,
            default: () => { },
        },
    },
    computed: {
        avatarPath() {
            return "http://172.18.0.246:90/" + this.userInfo?.avatar;
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
</style>
