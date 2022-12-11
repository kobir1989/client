import * as React from 'react';
import PageLayout from '../../components/pageLayout/PageLayout';
import ButtonMain from '../../components/buttons/Button-main';
import { Box, TextField } from '@mui/material';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <PageLayout>
            <h1 className="heading">Login to your Account</h1>
            <div className="form_wrapper">
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { mb: 4, width: "25rem" },
                    }}
                >
                    <div>
                        <TextField
                            required

                            //   error={isError ? true : false}
                            //   onChange={(e) => {
                            //     setEmail(e.target.value);
                            //   }}
                            label="Email"
                            type="email"
                        //   value={email}
                        //   helperText={isError}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            //   error={isError ? true : false}
                            //   helperText={isError}
                            //   onChange={(e) => {
                            //     setPassword(e.target.value);
                            //   }}
                            //   value={password}
                            type="password"
                            label="Password"
                        />
                    </div>
                    <ButtonMain width={"100%"}>Login</ButtonMain>
                </Box>
                <div className="login_link"><Link to="/signup">Don't have an Account?</Link></div>
            </div>
        </PageLayout>
    )
}

export default Login