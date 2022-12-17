import * as React from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { getRequest } from "../../../helper/apiHelper";
import TextSkeleton from '../../../components/skeleton/TextSkeleton';
import { isAuth } from '../../../helper/authHelper';
import EditIcon from '@mui/icons-material/Edit';
import { putRequest } from '../../../helper/apiHelper';

const AccountSettings = () => {
   const [isLoading, setIsLoading] = React.useState(false)
   const [isError, setIsError] = React.useState(false)
   const [apiData, setApiData] = React.useState([])
   const [editAccount, setEditAccount] = React.useState(false);
   const [email, setEmail] = React.useState("")
   const [password, setPassword] = React.useState("")
   const [oldPassword, setOldPassword] = React.useState("")
   const { userInfo } = isAuth();

   const getUserProfile = () => {
      getRequest(
         `user/${userInfo._id}`,
         setIsLoading,
         setIsError,
         setApiData
      )
   }

   React.useEffect(() => {
      getUserProfile();
   }, [userInfo._id])

   const editAccountHandler = () => {
      setEditAccount(true)
      setEmail(apiData?.email);
   }

   const submitEditedDataHandler = async (e) => {
      e.preventDefault()
      const data = {
         email,
         password,
         oldPassword
      }
      console.log(data)
      await putRequest(
         `user/${isAuth()?.userInfo?._id}`,
         setIsLoading, setIsError, data, () => {
            setEditAccount(false);
            setEmail("")
            setPassword("")
            setOldPassword("")
         }
      )
      await getUserProfile()

   }
   return (
      <Box sx={{ position: "relative" }}>
         {editAccount ? (
            <Box
               component="form"
               onSubmit={submitEditedDataHandler}
               sx={{
                  "& .MuiTextField-root": { mb: 4, width: "100%" }
               }}>
               <div>
                  <TextField
                     required
                     error={isError ? true : false}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                     label="Email"
                     type="email"
                     value={email}
                     helperText={isError}
                  />
               </div>
               <div>
                  <TextField
                     required
                     error={isError ? true : false}
                     helperText={isError}
                     onChange={(e) => {
                        setOldPassword(e.target.value);
                     }}
                     value={oldPassword}
                     type="password"
                     label="Old Password"
                  />
                  <TextField
                     required
                     error={isError ? true : false}
                     helperText={isError}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                     value={password}
                     type="password"
                     label="New Password"
                  />
               </div>
               <Box sx={{ display: "flex", width: "100%", gap: "2rem" }}>
                  <Button variant="contained" type='submit' color="success">
                     Submit
                  </Button>
                  <Button variant="outlined" color="error"
                     onClick={() => { setEditAccount(false) }}>
                     Cancel
                  </Button>
               </Box>
            </Box>
         ) : (
            <Box>
               <Typography variant='h4'>{apiData?.name}</Typography>
               <Typography variant='p'>{apiData?.email}</Typography>
               {isLoading && <TextSkeleton row={2} />}
               {isError && <p>Something went wrong</p>}
               <Button variant="outlined" sx={{
                  position: "absolute",
                  right: "0",
                  top: "0"
               }} onClick={editAccountHandler}>
                  <EditIcon sx={{
                     color: "#5679ff",
                     cursor: "pointer",
                  }} />
               </Button>
            </Box>
         )}
      </Box>
   )
}

export default AccountSettings