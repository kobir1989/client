import * as React from 'react';
import ButtonMain from "../../../components/buttons/Button-main";
import { Typography, Box, TextField } from '@mui/material';

const UserDetailsForm = () => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mb: 4, width: "80%" },
                '& .MuiTextField-root:not(:last-child)': { mr: 2 },
            }}
            autoComplete="off"
        // onSubmit={submitHandler}
        >
            <div>
                <TextField
                    // error={isError ? true : false}
                    required
                    label="First Name"
                    type="text"
                // helperText={isError}
                // defaultValue={firstname}
                // onChange={(e) => { setFirstname(e.target.value) }}
                />
                <TextField
                    // error={isError ? true : false}
                    required
                    label="Last Name"
                    type="text"
                // helperText={isError ? true : false}
                // defaultValue={lastname}
                // onChange={(e) => { setLastname(e.target.value) }}
                />
            </div>
            <div>
                <TextField
                    // error={isError ? true : false}
                    required
                    id="outlined-required"
                    label="Email"
                    type="email"
                // helperText={isError ? true : false}
                // defaultValue={email}
                // fullWidth={true}
                // onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div>
                <TextField
                    // error={isError ? true : false}
                    required
                    label="Password"
                    type="password"

                // helperText={isError ? true : false}
                // defaultValue={password}
                // onChange={(e) => { setPassword(e.target.value) }}
                />
                <TextField
                    // error={isError ? true : false}
                    required
                    label="Phone Number"
                    type="number"
                // helperText={isError ? true : false}
                // defaultValue={confirmPassword}
                // onChange={(e) => { setConfirmpassword(e.target.value) }}
                />
                <TextField
                    // error={isError ? true : false}
                    required
                    label="Address"
                    type="number"
                // fullWidth={true}
                // helperText={isError ? true : false}
                // defaultValue={confirmPassword}
                // onChange={(e) => { setConfirmpassword(e.target.value) }}
                />
            </div>
            {/* <ButtonMain width={"100%"}>Create Account</ButtonMain> */}
            <ButtonMain width={"80%"}>Update Account</ButtonMain>
        </Box>
    )
}

export default UserDetailsForm