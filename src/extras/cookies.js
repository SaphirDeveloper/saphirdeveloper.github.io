export function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

export function getCookie(name) {
    let valueName = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let position = decodedCookie.indexOf(valueName);

    if (position >= 0) {
        return decodedCookie.substring(valueName.length + position).split(";")[0];
    }

    return "";
}

export function deleteCookie(name) {
    setCookie(name, "");
}
