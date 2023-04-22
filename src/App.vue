<template>
    <div id="app">
        <div class="">

        </div>
        <LoginPage></LoginPage>
        <!-- <DashboardPage /> -->
    </div>
</template>

<script>
// import DashboardPage from "./components/DashboardPage.vue";
import LoginPage from "./components/LoginPage.vue";
export default {
    name: "App",
    components: {
        LoginPage,
        // DashboardPage
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
