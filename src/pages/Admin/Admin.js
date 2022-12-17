import * as React from 'react';
import SideTab from '../../components/tabs/Tab';
import { Typography, Box, Stack } from '@mui/material';
import PageLayout from "../../components/pageLayout/PageLayout";
import AddProducts from './addProducts/AddProducts';
import AccountSettings from './accountSettings/AccountSettings';
import { Toaster } from 'react-hot-toast';
import AddCategory from './category/AddCategory';
import ManageCategory from './category/ManageCategory';
import ManageProducts from "../../pages/Admin/manageProducts/ManageProducts"


const Admin = () => {

   const tabArr = [
      {
         lable: "Account settings",
         component: () => <AccountSettings />
      },
      {
         lable: "Add Products",
         component: () => <AddProducts />
      },
      {
         lable: "Create Category",
         component: () => <AddCategory />
      },
      {
         lable: "Manage Product",
         component: () => <ManageProducts />
      },
      {
         lable: "Manage Category",
         component: () => <ManageCategory />
      },
      {
         lable: "Manage Orders",
         component: () => <div>three</div>
      },
      {
         lable: "inventory",
         component: () => <div>Four</div>
      },
   ]
   return (
      <PageLayout>
         <Box sx={{ width: "60%", m: "auto" }}>

            <SideTab components={tabArr} />

         </Box>
         <Toaster position="top-right" reverseOrder={false} />
      </PageLayout>
   )
}

export default Admin