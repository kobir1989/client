import * as React from 'react';
import { Box, TextField } from '@mui/material';
import ButtonMain from '../../components/buttons/Button-main';


const Payment = (props) => {
   const [cardNumber, setCardNumber] = React.useState("")
   const [expDate, setExpDate] = React.useState("")
   const [pin, setPin] = React.useState("")
   const [isLoading, setIsLoading] = React.useState(false);
   const [isError, setIsError] = React.useState(false)
   const submitHandler = (e) => {
      e.preventDefault()
      const paymentData = {
         cardNumber,
         expDate,
         pin
      }
      props.onSubmitPayment(paymentData)
   }
   return (
      <Box sx={{ m: "auto", width: "50%" }}>
         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { mb: 4, width: "100%" },
               '& .MuiTextField-root:not(:last-child)': { mr: 2 },
            }}
            autoComplete="off"
            onSubmit={submitHandler}
         >
            <div>
               <TextField
                  //   error={isError ? true : false}
                  required
                  label="Card Number"
                  type="text"
                  //   helperText={isError}
                  defaultValue={cardNumber}
                  onChange={(e) => { setCardNumber(e.target.value) }}
               />
            </div>
            <div>
               <TextField
                  //   error={isError ? true : false}
                  required
                  label="Expire Date"
                  type="text"
                  //   helperText={isError ? true : false}
                  defaultValue={expDate}
                  onChange={(e) => { setExpDate(e.target.value) }}
               />
               <TextField
                  //   error={isError ? true : false}
                  required
                  label="Pin"
                  type="text"
                  //   helperText={isError ? true : false}
                  defaultValue={pin}
                  onChange={(e) => { setPin(e.target.value) }}
               />
            </div>
            <ButtonMain width={"100%"}>Submit</ButtonMain>
         </Box>
      </Box>
   )
}

export default Payment