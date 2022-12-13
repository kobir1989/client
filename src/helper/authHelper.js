
//Save user in localStorage
export const authenticate = (data, next) => {
    if (window !== "undefined") {
        localStorage.setItem("token", JSON.stringify(data));
        next()
    }
}

//Check is user is token
export const isAuth = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"))
    } else {
        return false;
    }
}