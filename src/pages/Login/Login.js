import * as React from 'react';
import PageLayout from '../../components/pageLayout/PageLayout';
import ButtonMain from '../../components/buttons/Button-main';
import { Box, TextField,  } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { authPostRequest } from "../../helper/authHelper";
import { Toaster } from 'react-hot-toast';
import LineProgress from '../../components/lineProgress/LineProgress';


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
        authPostRequest("auth/login", data, setIsLoading, setIsError, () => {
            navigate("/")
        });
        setEmail("");
        setPassword("");
    }
    return (
        <PageLayout>
            <h1 className="heading">Login to your Account</h1>
            <div className="form_wrapper">
                {isLoading &&
                    <LineProgress />
                }
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
                            helperText={isError}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            error={isError ? true : false}
                            helperText={isError}
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