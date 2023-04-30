import request from "../request";

export function getActivities(params) {
  return request({
    url: "/activity/all",
    method: "get",
    params,
  });
}

export function getAnnouncement(params) {
  return request({
    url: "/announcement/public",
    method: "get",
    params,
  });
}
