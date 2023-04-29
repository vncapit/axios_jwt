import request from "../request";

export function getUserInfo(params) {
    return request({
        url: "/auth/info",
        method: "get",
        params,
    });
}

export function getMyMenu(params) {
    return request({
        url: "/menu/find-all-to-user",
        method: "get",
        params,
    });
}
