<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5 mx-auto">
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
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="form.password"
                                />
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
                    <strong class="mr-auto">xxxx</strong>
                    <small>11 mins ago</small>
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
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
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
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.showToast();
            // this.login();
        },

        async login() {
            this.isLoading = true;
            try {
                const res = await axios.post(
                    "http://oa.pbe.com/api/v1/auth/login",
                    this.form
                );

                this.loginData.isLoading = false;
                if (res.status == 200) {
                    const data = res.data;
                    if (data.code == 200) {
                        this.loginData.success = true;
                        this.loginData.token = data.data;
                        this.showToast("success", 200);
                        return;
                    }
                    this.loginData.success = false;
                    this.loginData.token = "";
                    this.showToast("fail", data.code);
                }
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
.login-form {
    max-width: 300px;
    margin: auto;
}
</style>
