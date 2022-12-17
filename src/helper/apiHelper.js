// import * as React from "react";
import axios from "axios";
import toast from 'react-hot-toast';
// import { CORE_API } from "../utils/coreapicalls";

//TODO:  fix .env issue

export const getRequest = async (
   url,
   setIsLoading,
   setIsError,
   setApiData,
) => {
   setIsLoading(true)
   try {
      const response = await axios.get(`http://localhost:5000/api/${url}`);
      if (response.status === 200) {
         setApiData(response.data.products)
         setIsLoading(false)
         console.log(response)
      }
   } catch (err) {
      console.log(err);
      setIsError(true)
   }
}

export const postRequest = async (
   url,
   data,
   setIsLoading,
   setIsError,
) => {
   setIsLoading(true)
   console.log(data, "PUTREQ")
   try {
      const response = await axios.post(
         `http://localhost:5000/api/${url}`,
         { data });

      console.log(response)
      if (response.status === 200) {
         setIsLoading(false);
         toast.success("Successfull");
      }
   } catch (err) {
      // setIsError(err.response?.data?.message);
      console.log(err);
      setIsLoading(false)
   }
}

export const putRequest = async (
   url,
   setEditLoading,
   setEditError,
   editedData,
   next
) => {
   setEditLoading(true)
   try {
      const response = await axios.put(`http://localhost:5000/api/${url}`, { editedData });
      if (response.status === 200) {
         toast.success("Successfull");
         setEditLoading(false);
         console.log(response)
         next()
      }
   } catch (err) {
      setEditError(err?.response?.data?.message)
      setEditLoading(false)
      console.log(err)
   }
}

export const deleteRequest = async (url) => {
   try {
      const response = await axios.delete(`http://localhost:5000/api/${url}`);
      if (response.status === 200) {
         toast.success("Deleted");
      }

   } catch (err) {
      console.log(err)
   }
}


export const getCategory = async (url, setIsLoading, setIsError, setCategories) => {
   try {
      setIsLoading(true)
      const response = await axios.get(`http://localhost:5000/${url}`)
      if (response.status === 200) {
         setIsLoading(false);
         setCategories(response.data.categories)
      }
   } catch (err) {
      setIsError(err.response.data.message)
      setIsLoading(false)
   }

}

//Admin Page
export const getAllProducts = async (
   url,
   setIsLoading,
   setIsError,
   setAllProducts,
) => {
   setIsLoading(true)
   try {
      const response = await axios.get(`http://localhost:5000/api/${url}`);
      if (response.status === 200) {
         setAllProducts(response.data.products)
         setIsLoading(false)
         console.log(response)
      }
   } catch (err) {
      console.log(err);
      setIsLoading(false)
   }
}