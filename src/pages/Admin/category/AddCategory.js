import * as React from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { postRequest } from "../../../helper/apiHelper";
import { isAuth } from '../../../helper/authHelper';
import ButtonMain from '../../../components/buttons/Button-main';
import LineProgress from '../../../components/lineProgress/LineProgress';

const AddCategory = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(null);
    const [category, setCategory] = React.useState("");
    const addCategoryHandler = (e) => {
        e.preventDefault();
        const data = {
            name: category
        }
        postRequest(`category/create/${isAuth()?.userInfo?._id}`, data, setIsLoading, setIsError)
        setCategory("")
    }
    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { mb: 4, position: "relative" },
                '& .MuiTextField-root:not(:last-child)': { mr: 2 },
            }}
            autoComplete="off"
            onSubmit={addCategoryHandler}>
            {isLoading &&
                <LineProgress />
            }
            <TextField
                error={isError ? true : false}
                required
                label="Add Category"
                type="text"
                fullWidth={true}
                helperText={isError}
                value={category}
                onChange={(e) => { setCategory(e.target.value) }}
            />

            <ButtonMain width={"100%"}>Add Category</ButtonMain>
        </Box>
    )
}

export default AddCategory