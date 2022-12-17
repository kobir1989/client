import PageLayout from '../../components/pageLayout/PageLayout';
import * as React from 'react';
import { Typography, Stack, Avatar, Box } from '@mui/material';
import { getRequest } from "../../helper/apiHelper";
import { isAuth } from '../../helper/authHelper';
import TextSkeleton from '../../components/skeleton/TextSkeleton';
import CustomSkeleton from "../../components/skeleton/CustomSkeleton";
import SideTab from '../../components/tabs/Tab';
import UserDetailsForm from './userDetailsForm/UserDetailsForm';

const UserProfile = () => {
   const [isLoading, setIsLoading] = React.useState(false)
   const [isError, setIsError] = React.useState(false)
   const [apiData, setApiData] = React.useState([])
   const { userInfo } = isAuth();
   const tabArr = [
      {
         lable: "Shoping Cart",
         component: () => <div>One</div>
      },
      {
         lable: "Wish list",
         component: () => <div>two</div>
      },
      {
         lable: "Order history",
         component: () => <div>three</div>
      },
      {
         lable: "Account settings",
         component: () => <UserDetailsForm />
      },
   ]

   React.useEffect(() => {
      getRequest(
         `user/${userInfo._id}`,
         setIsLoading,
         setIsError,
         setApiData,
      )
   }, [userInfo._id,]);
   console.log(apiData)
   return (
      <PageLayout>
         <Stack sx={{ maxWidth: "900px", m: "auto" }}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', mt: 4, p: 2 }}>
               <Stack direction="row" spacing={2}
                  alignItems="center">
                  {isLoading && <CustomSkeleton />}
                  {isError && <p>Something went wrong</p>}
                  <Avatar
                     alt="Remy Sharp"
                     src="image/man-avatar-icon-free-vector.webp"
                     sx={{ width: 150, height: 150, }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                     {isLoading && <TextSkeleton row={4} />}
                     <Typography variant='h4'>{apiData?.name}</Typography>
                     <Typography variant='p'>Address: Dhaka, Bangladesh</Typography>
                     <Typography variant='p'>Phone: 0174XXXXXXX</Typography>
                     <Typography variant='p'>{apiData?.email}</Typography>
                  </Box>
               </Stack>
            </Box>
            <SideTab components={tabArr} />
         </Stack>
      </PageLayout>
   )
}

export default UserProfile;

