import * as React from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { authenticate } from "./authHelper";
// import { CORE_API } from "../utils/coreapicalls";

//TODO:  fix .env issue

export const fetchGetRequest = async (
    url,
    setIsLoading,
    setIsError,
    setApiData,
) => {
    setIsLoading(true)
    try {
        const response = await axios.get(`http://localhost:5000/api/${url}`);
        if (response.status === 200) {

            setApiData(response.data)
            setIsLoading(false)
            console.log(response)


        }
    } catch (err) {
        console.log(err);
        setIsError(true)
    }
}

export const fetchPostRequest = async (
    url,
    data,
    setIsLoading,
    setIsError
) => {
    setIsLoading(true)
    console.log(data)
    try {
        const response = await axios.post(
            `http://localhost:5000/api/auth/${url}`,
            { data });

        console.log(response)
        if (response.status === 200) {
            authenticate(response.data, () => {
                setIsLoading(false);
                toast.success("Successfull")
            })

        }
    } catch (err) {
        setIsError(err.response.data.message);
        console.log(err.response.data.userInfo);
        setIsLoading(false)
    }
}

export const fetchPutRequest = async ({ url }) => {
    const response = axios.put()
}

export const fetchDeleteRequest = async ({ url }) => {
    const response = axios.delete()
}
