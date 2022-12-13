import * as React from 'react';
import PageLayout from '../../components/pageLayout/PageLayout';
import ButtonMain from '../../components/buttons/Button-main';
import { Box, TextField, Stack, LinearProgress } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { fetchPostRequest } from "../../helper/fetchApiData";
import { Toaster } from 'react-hot-toast';


const Login = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(null);
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        fetchPostRequest("login", data, setIsLoading, setIsError);
        setEmail("");
        setPassword("");
        navigate("/")
    }
    return (
        <PageLayout>
            <h1 className="heading">Login to your Account</h1>
            <div className="form_wrapper">
                {isLoading && <Stack sx={{
                    width: '100%',
                    position: "absolute",
                    top: '0',
                    color: 'grey.500'
                }}
                    spacing={2}>
                    <LinearProgress color="success" />
                </Stack>}
                <Box
                    component="form"
                    onSubmit={loginHandler}
                    sx={{
                        "& .MuiTextField-root": { mb: 4, width: "25rem" }
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
                            helperText={isError ? true : false}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            error={isError ? true : false}
                            helperText={isError ? true : false}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type="password"
                            label="Password"
                        />
                    </div>
                    <ButtonMain width={"100%"}>Login</ButtonMain>
                </Box>
                <div className="login_link"><Link to="/signup">Don't have an Account?</Link></div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </PageLayout>
    )
}

export default Login