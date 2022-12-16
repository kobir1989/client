import axios from "axios";
import { toast } from "react-hot-toast";

//Save user in localStorage
export const authenticate = (data, next) => {
    if (window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next()
    }
}

//Get user data form localstorage
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

//POST Signup data to server
export const authPostRequest = async (
    url,
    data,
    setIsLoading,
    setIsError,
    next
) => {
    setIsLoading(true)
    try {
        const response = await axios.post(
            `http://localhost:5000/api/${url}`,
            { data });

        console.log(response)
        if (response.status === 200) {
            authenticate(response.data, () => {
                setIsLoading(false);
                toast.success("Successfull");
                next()
            })

        }
    } catch (err) {
        setIsError(err.response.data.message);
        console.log(err.response.data.userInfo);
        setIsLoading(false)
    }
}

//Signout
export const signOut = async () => {
    try {
        if (typeof window !== "undefined") {
            localStorage.removeItem("jwt");
            const response = await axios.get(`http://localhost:5000/api/auth/logout`);
            if (response.status === 200) {
                toast.success("You are logged out")
            }
        }
    } catch (err) {
        console.log(err)
    }
}
