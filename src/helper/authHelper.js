
//Save user in localStorage
export const authenticate = (data, next) => {
    if (window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next()
    }
}

//Check is user is token
export const isAuth = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false;
    }
}