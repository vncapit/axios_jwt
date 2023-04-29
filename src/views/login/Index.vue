<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5 mx-auto mt-5">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    class="form-control"
                                    v-model="form.username"
                                />
                                <div
                                    class="hide-invalid"
                                    :class="{
                                        'show-invalid':
                                            !formValidate.validUsername,
                                    }"
                                >
                                    Please provide a valid username.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="form.password"
                                />
                                <div
                                    class="hide-invalid"
                                    :class="{
                                        'show-invalid':
                                            !formValidate.validPassword,
                                    }"
                                >
                                    Please provide a valid password.
                                </div>
                            </div>

                            <button
                                type="submit"
                                @click="onSubmit"
                                class="btn btn-outline-success btn-block mt-4"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="position-fixed bottom-0 right-0 p-3"
            style="z-index: 5; right: 0; top: 0"
        >
            <div
                id="liveToast"
                class="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-delay="2000"
            >
                <div class="toast-header">
                    <strong class="mr-auto">{{ toast.title }}</strong>
                    <button
                        type="button"
                        class="ml-2 mb-1 close"
                        data-dismiss="toast"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    {{ toast.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from "../../api/auth";
import { setToken } from "../../base";
import { mapActions } from "vuex";
import $ from "jquery";
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            loginData: {
                isLoading: false,
                success: false,
                token: "",
            },
            toast: {
                title: "",
                content: "",
            },
            formValidate: {
                validUsername: true,
                validPassword: true,
            },
        };
    },
    methods: {
        ...mapActions("userBase", ["setLoggedIn"]),
        onSubmit(e) {
            e.preventDefault();
            if (this.checkFormValidate()) {
                this.login();
            }
        },

        checkFormValidate() {
            if (this.form.username.length == 0) {
                this.formValidate.validUsername = false;
            } else {
                this.formValidate.validUsername = true;
            }

            if (this.form.password.length == 0) {
                this.formValidate.validPassword = false;
            } else {
                this.formValidate.validPassword = true;
            }

            return (
                this.formValidate.validPassword &&
                this.formValidate.validUsername
            );
        },

        async login() {
            this.isLoading = true;
            try {
                const data = await login(this.form);
                this.loginData.isLoading = false;
                if (data.code == 200) {
                    this.loginData.success = true;
                    this.loginData.token = data.data;
                    this.showToast("success", 200);
                    setToken(data.data);
                    this.setLoggedIn(true);
                    setTimeout(() => {
                        this.$router.push("/dashboard");
                    }, 1000);
                    return;
                }
                this.loginData.success = false;
                this.loginData.token = "";
                this.showToast("fail", data.code);
            } catch (error) {
                console.log(error);
            }
        },

        showToast(title, content) {
            if (title == "success") {
                this.toast.title = "Login success";
                this.toast.content = 200;
            } else {
                this.toast.title = "Login failed";
                this.toast.content = content;
            }
            $(".toast").toast("show");
        },
    },
};
</script>

<style lang="scss" scoped>
.show-invalid {
    color: red;
    display: block !important;
    font-size: 0.8rem;
}

.hide-invalid {
    display: none;
}
</style>
