import request from "../request";

export function getActivities(params) {
    return request({
        url: "/activity/all",
        method: "get",
        params,
    });
}
