import * as React from 'react';
import {
    Box,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from '@mui/material';
import ButtonMain from "../../../components/buttons/Button-main";
import { postRequest, getCategory } from "../../../helper/apiHelper";
import { isAuth } from '../../../helper/authHelper';
import LineProgress from "../../../components/lineProgress/LineProgress";

const AddProducts = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(null);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [selectCategory, setSelecttCategory] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const [stock, setStock] = React.useState("");
    const [categories, setCategories] = React.useState([])

    React.useEffect(() => {
        getCategory("api/categories", setIsLoading, setIsError, setCategories)
    }, [])

    const addProductHandler = (e) => {
        e.preventDefault()
        const data = {
            title,
            description,
            price,
            category: selectCategory,
            imageUrl,
            stock
        }
        postRequest(`create/product/${isAuth().userInfo._id}`, data, setIsLoading, setIsError);
        setTitle("")
        setSelecttCategory("");
        setDescription("")
        setPrice("");
        setSelecttCategory("")
        setImageUrl("");
        setStock("")
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mb: 4 },
                '& .MuiTextField-root:not(:last-child)': { mr: 2 },
            }}
            autoComplete="off"
            onSubmit={addProductHandler}
        >
            {isLoading && <LineProgress />}
            <TextField
                error={isError ? true : false}
                required
                label="Title"
                type="text"
                fullWidth={true}
                helperText={isError}
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <TextField
                error={isError ? true : false}
                required
                label="Description"
                type="text"
                fullWidth={true}
                helperText={isError}
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
            />
            <TextField
                error={isError ? true : false}
                required
                id="outlined-required"
                label="Price"
                type="number"
                helperText={isError}
                value={price}
                fullWidth={true}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectCategory}
                    label="category"
                    onChange={(e) => { setSelecttCategory(e.target.value) }}
                >
                    {categories.map((cate) => (
                        <MenuItem value={cate._id} key={cate._id}>{cate.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                error={isError ? true : false}
                required
                label="Image"
                type="text"
                fullWidth={true}
                helperText={isError}
                value={imageUrl}
                onChange={(e) => { setImageUrl(e.target.value) }}
            />
            <TextField
                error={isError ? true : false}
                required
                label="Stock"
                type="number"
                fullWidth={true}
                helperText={isError}
                value={stock}
                onChange={(e) => { setStock(e.target.value) }}
            />
            <ButtonMain width={"100%"}>Create Account</ButtonMain>
        </Box>
    )
}

export default AddProducts