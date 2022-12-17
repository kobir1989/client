import * as React from 'react';
import {
   getAllProducts,
   deleteRequest,
   putRequest
} from "../../../helper/apiHelper";
import CustomSkeleton from "../../../components/skeleton/CustomSkeleton";
import TextSkeleton from '../../../components/skeleton/TextSkeleton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from "./ManageProducts.module.scss";
import { isAuth } from '../../../helper/authHelper';
import { TextField, Button, Box } from '@mui/material';

const ManageProducts = () => {
   const [isLoading, setIsLoading] = React.useState(false)
   const [isError, setIsError] = React.useState(false)
   const [allProducts, setAllProducts] = React.useState([]);
   const [isEditProduct, setIsEditProduct] = React.useState(null);
   const [title, setTitle] = React.useState("");
   const [description, setDescription] = React.useState("");
   const [price, setPrice] = React.useState("");
   const [editLoading, setEditLoading] = React.useState(false)
   const [editError, setEditError] = React.useState(false)

   const fetchProducts = () => {
      getAllProducts(
         "products",
         setIsLoading,
         setIsError,
         setAllProducts
      )
   }
   React.useEffect(() => {
      fetchProducts()
   }, [])

   const deleteHandler = async (id) => {
      await deleteRequest(`remove/product/${id}/${isAuth().userInfo?._id}`);
      fetchProducts()
   }

   const editProductHandler = (id) => {
      const [edit] = allProducts.filter((item) => id === item._id);
      setIsEditProduct(edit._id);
      setTitle(edit?.title);
      setDescription(edit?.description);
      setPrice(edit?.price)
   }

   const submitHandler = async (e, id) => {
      e.preventDefault();
      const editedData = {
         title,
         description,
         price
      };
      await putRequest(
         `edit/product/${id}/${isAuth()?.userInfo?._id}`,
         setEditLoading,
         setEditError,
         editedData,
         () => {
            fetchProducts();
            setIsEditProduct(null)
         }
      )
   }
   return (
      <div className={styles.card_wrapper}>
         {allProducts.map((item) => (
            <div key={item?._id} className={styles.products_card}>
               <div className={styles.products_card_image}>
                  <img src={item?.imageUrl} alt={item?.title} />
               </div>
               <form className={styles.products_card_text} onSubmit={(e) => { submitHandler(e, item?._id) }}>
                  {isEditProduct === item?._id ? (
                     <TextField
                        error={editError ? true : false}
                        required
                        label="Title"
                        type="text"
                        fullWidth={true}
                        helperText={editError}
                        value={title}
                        sx={{ mt: 2 }}
                        onChange={(e) => { setTitle(e.target.value) }}
                     />
                  ) : (<h2>{item?.title}</h2>)}
                  {isEditProduct === item?._id ? (
                     <TextField
                        error={editError ? true : false}
                        required
                        label="description"
                        type="text"
                        sx={{ mt: 2 }}
                        fullWidth={true}
                        helperText={editError}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                     />
                  ) : (<p>{item?.description}</p>)
                  }
                  {isEditProduct === item?._id ?
                     (<TextField
                        error={editError ? true : false}
                        required
                        label="price"
                        type="text"
                        sx={{ mt: 2 }}
                        fullWidth={true}
                        helperText={editError}
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                     />) :
                     (<p className={styles.products_card_price}>Price: ${item?.price}</p>)
                  }
                  <p>Stock: {item?.stock}</p>
                  {/* <p>Stock: {item?.category}</p> */}

                  {isEditProduct === item._id ?
                     (<Box sx={{
                        display: "flex",
                        width: "100%",
                        gap: "2rem"
                     }}>
                        <Button
                           variant="contained"
                           color="success"
                           type="submit"
                        >
                           Submit
                        </Button>
                        <Button
                           variant="outlined"
                           color="error"
                           onClick={() => { setIsEditProduct(false) }}>
                           Cancel
                        </Button>
                     </Box>) :
                     (<div className={styles.products_card_icons}>
                        <span className={styles.edit} onClick={() => {
                           editProductHandler(item?._id,)
                        }}>
                           <EditIcon sx={{ color: "#5679ff" }} />
                        </span>
                        <span className={styles.delete} onClick={() => { deleteHandler(item?._id) }}>
                           <DeleteForeverIcon sx={{ color: "#ff5a47" }} />
                        </span>
                     </div>)}
               </form>
               {isLoading && <div>
                  <CustomSkeleton variant={"rect"} w={240} h={300} />
                  <TextSkeleton row={2} w={240} />
               </div>}
            </div>
         ))}
      </div>
   )
}

export default ManageProducts;