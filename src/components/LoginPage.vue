<template>
    <div>
        <b-form @submit="onSubmit" class="login-form">
            <b-form-group id="username-group" label="Username:" label-for="username">
                <b-form-input id="username-input" v-model="form.username" type="text" placeholder="Username" required>
                </b-form-input>
            </b-form-group>
            <b-form-group class="mt-3" id="password-group" label="Password:" label-for="password">
                <b-form-input id="password-input" v-model="form.password" type="password" placeholder="Password" required>
                </b-form-input>
            </b-form-group>
            <b-container class="mt-3">
                <b-row align-h="around">
                    <b-col cols="4">
                        <b-button type="submit" variant="primary">Login</b-button>
                    </b-col>
                    <b-col cols="4">
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-col>
                </b-row>
            </b-container>


        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.login-form {
    max-width: 300px;
    margin: auto;
}
</style>
