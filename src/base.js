import Cookies from "js-cookie";

const TOKEN_KEY = "TOKEN_KEY";
const LANG_KEY = "LANG_KEY";

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  Cookies.set(TOKEN_KEY, token, { expires: 10000 });
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}

export function getLang() {
  return Cookies.get(LANG_KEY);
}

export function setLang(lang) {
  Cookies.set(LANG_KEY, lang);
}
