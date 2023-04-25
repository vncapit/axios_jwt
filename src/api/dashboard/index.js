import request from "../request";

export function getUserInfo(params) {
    return request({
        url: "/auth/info",
        method: "get",
        params,
    });
}

export function getActivities(params) {
    return request({
        url: "/activity/all",
        method: "get",
        params,
    });
}
