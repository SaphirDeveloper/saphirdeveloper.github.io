// Standard cookie actions

export function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

export function getCookie(name) {
    // Get all cookies as string
    let decodedCookie = decodeURIComponent(document.cookie);

    // Get cookie position in string
    let valueName = name + "=";
    let position = decodedCookie.indexOf(valueName);

    // Is cookie in string
    if (position >= 0) {
        // Cookie found, get and return cookie value
        return decodedCookie.substring(valueName.length + position).split(";")[0];
    } else {
        // Cookie not found, return empty string
        return "";
    }
}

export function deleteCookie(name) {
    setCookie(name, "");
}
