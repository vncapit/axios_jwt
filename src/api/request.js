import axios from "axios";
import { getToken } from "../base";

import router from "../router/index";

const service = axios.create({
    baseURL: "http://172.18.0.246:88/api/v1",
    timeout: 6000,
});

service.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        console.log(response);
        const res = response.data;
        if (response.status === 200) {
            if (res.code !== 401) {
                return res;
            }
            router.push("/login");
        }

        return Promise.reject(res);
    },
    (error) => {
        console.error(`(${error.code}) ${error.message}`);
        Promise.reject(error);
    }
);

export default service;
