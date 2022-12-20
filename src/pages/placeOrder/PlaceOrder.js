import * as React from 'react';
import PageLayout from "../../components/pageLayout/PageLayout";
import Box from '@mui/material/Box';
import { Context } from '../../store/context';
import { postRequest } from "../../helper/apiHelper";
import { isAuth } from '../../helper/authHelper';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const PlaceOrder = () => {
   const [address, setAddress] = React.useState("")
   const [payment, setPayment] = React.useState("")
   const [isLoading, setIsLoading] = React.useState(false)
   const [isError, setIsError] = React.useState(false)
   const ctx = React.useContext(Context);
   const products = ctx.items.map((item) => {
      return {
         _id: item.id,
         quantity: item.qntt,
         price: item.price,
      }
   });

   const submitForm = (data) => {
      setAddress(data)
   }

   const submitPayment = (paymentData) => {
      setPayment(paymentData);
   }

   const data = {
      address: address,
      phoneNumber: address.phone,
      transactionId: "215784a5d4fd54d",
      products: products,
      amount: ctx.totalPrice
   }
   const postOrderHandler = () => {
      postRequest(
         `order/create/${isAuth().userInfo?._id}`,
         data,
         setIsLoading,
         setIsError,)
   }

   return (
      <PageLayout>
         <Box sx={{ width: "50%", m: "auto" }}>
            <Link to={"/place-order/address"}>
               Address
            </Link>
            <Link to={"/place-order/payment"}>
               Payment
            </Link>
            <Link to={"/place-order/"}>
               Confirm
            </Link>
            <Outlet />
         </Box>
      </PageLayout>
   )
}

export default PlaceOrder;