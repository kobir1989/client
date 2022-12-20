import * as React from 'react';
import { Box, TextField } from '@mui/material';
import ButtonMain from '../../components/buttons/Button-main';
import { Outlet, useNavigate } from 'react-router-dom';

const AddressForm = (props) => {
   const [isError, setIsError] = React.useState(false)
   const [city, setCity] = React.useState("")
   const [street, setStreet] = React.useState("")
   const [house, setHouse] = React.useState("")
   const [phone, setPhone] = React.useState("")
   const navigate = useNavigate()
   const submitHandler = (e) => {
      e.preventDefault()
      const data = {
         city,
         street,
         house,
         phone
      }
      console.log(data)
      // props.onSubmitForm(data);
      navigate("/place-order/payment")
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
                  error={isError ? true : false}
                  required
                  label="City"
                  type="text"
                  helperText={isError}
                  defaultValue={city}
                  onChange={(e) => { setCity(e.target.value) }}
               />
               <TextField
                  error={isError ? true : false}
                  required
                  label="Street"
                  type="text"
                  helperText={isError ? true : false}
                  defaultValue={street}
                  onChange={(e) => { setStreet(e.target.value) }}
               />
            </div>
            <div>
               <TextField
                  error={isError ? true : false}
                  required
                  label="House Noumber"
                  type="text"
                  helperText={isError ? true : false}
                  defaultValue={house}
                  onChange={(e) => { setHouse(e.target.value) }}
               />
               <TextField
                  error={isError ? true : false}
                  required
                  label="Phone Number"
                  type="number"
                  helperText={isError ? true : false}
                  defaultValue={phone}
                  onChange={(e) => { setPhone(e.target.value) }}
               />
            </div>
            <ButtonMain width={"100%"}>Submit</ButtonMain>
         </Box>
      </Box>
   )
}

export default AddressForm