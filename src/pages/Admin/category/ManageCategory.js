import * as React from 'react';
import { Typography, Box, TextField } from '@mui/material';
import TextSkeleton from '../../../components/skeleton/TextSkeleton';
import {
   getCategory,
   putRequest,
   deleteRequest
} from "../../../helper/apiHelper";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtonMain from '../../../components/buttons/Button-main';
import { isAuth } from '../../../helper/authHelper';
import LineProgress from "../../../components/lineProgress/LineProgress";

const ManageCategory = () => {
   const [isLoading, setIsLoading] = React.useState(false)
   const [isError, setIsError] = React.useState(false)
   const [categories, setCategories] = React.useState([])
   const [isEdit, setIsEdit] = React.useState(false);
   const [editCtg, setEditCtg] = React.useState("");
   const [editLoading, setEditLoading] = React.useState(false);
   const [editError, setEditError] = React.useState(null);

   const getCtg = () => {
      getCategory("api/categories", setIsLoading, setIsError, setCategories);
   }
   React.useEffect(() => {
      getCtg()
   }, [])

   const editHandler = (ctgName) => {
      setIsEdit(true);
      setEditCtg(ctgName)
   }

   const submitEditHandler = (e, id) => {
      const editedData = {
         name: editCtg,
      }
      e.preventDefault();
      putRequest(
         `/category/edit/${id}/${isAuth()?.userInfo?._id}`,
         setEditLoading,
         setEditError,
         editedData
      )
   }

   const deleteHandler = async (id) => {
      console.log(id)
      await deleteRequest(`/category/remove/${id}/${isAuth()?.userInfo?._id}`);
      getCtg()
   }

   return (
      <Box>
         {categories.map((cate) => (
            <Box sx={{ width: "100%", mb: 2 }}
               key={cate._id}>

               {isEdit ? (<Box
                  component="form"
                  sx={{
                     '& .MuiTextField-root': { mb: 2 },
                  }}
                  autoComplete="off"
                  onSubmit={(e) => { submitEditHandler(e, cate._id) }}
               >
                  {editLoading &&
                     <LineProgress />
                  }
                  <TextField
                     error={editError ? true : false}
                     helperText={editError}
                     required
                     type="text"
                     value={editCtg}
                     onChange={(e) => {
                        setEditCtg(e.target.value)
                     }}
                  />
                  <ButtonMain width={"6rem"}>Submit</ButtonMain>
               </Box>) : (
                  <Box sx={{
                     border: "1px solid #d3d3d3",
                     padding: "1rem",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     borderRadius: "8px",
                  }}
                  >
                     <Typography variant='h6'>{cate.name}</Typography>
                     <span>
                        <EditIcon sx={{
                           color: "#5679ff",
                           mr: ".5rem",
                           cursor: "pointer"
                        }} onClick={() => { editHandler(cate.name) }} />
                        <DeleteForeverIcon sx={{
                           color: "#ff5a47",
                           cursor: "pointer"
                        }} onClick={() => { deleteHandler(cate._id) }} />
                     </span>
                  </Box>
               )}
               {isLoading && <TextSkeleton />}
            </Box>
         ))}
         {isError &&
            <Typography variant='h4'>Something went wrong</Typography>
         }
      </Box>
   )
}

export default ManageCategory