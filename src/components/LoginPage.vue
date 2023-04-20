<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group
                id="username-group"
                label="Username:"
                label-for="username"
                description="Please input OA username."
            >
                <b-form-input
                    id="username-input"
                    v-model="form.username"
                    type="text"
                    placeholder="Username"
                    required
                >
                </b-form-input>
            </b-form-group>
            <b-form-group
                id="password-group"
                label="Password:"
                label-for="password"
                description="Please input OA password."
            >
                <b-form-input
                    id="password-input"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    required
                >
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
            <b-button type="button" variant="danger">Cancel</b-button>
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

<style lang="scss" scoped></style>
