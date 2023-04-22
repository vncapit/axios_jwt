import axios from "axios";

import Cookies from "js-cookie";

const TOKEN_KEY = "TOKEN_KEY";

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
    const res = response.data;
    if (response.status === 200) {
      return res;
    }

    return Promise.reject(res);
  },
  (error) => {
    console.error(`(${error.code}) ${error.message}`);
    Promise.reject(error);
  }
);

function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  Cookies.set(TOKEN_KEY, token, { expires: 6000 });
}

export default service;
