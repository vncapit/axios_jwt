import request from "../request";

export function getUserInfo(data) {
  return request({
    url: "/auth/info",
    method: "get",
    data: data,
  });
}
