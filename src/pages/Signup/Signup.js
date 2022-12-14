import PageLayout from '../../components/pageLayout/PageLayout';
import * as React from 'react';
import { Box, TextField, Stack, LinearProgress } from '@mui/material';
import ButtonMain from "../../components/buttons/Button-main";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { fetchPostRequest } from "../../helper/fetchApiData";

//TODO: Validation issue//
const Signup = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(null);
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmpassword] = React.useState("");
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword
    }

    fetchPostRequest("signup", data, setIsLoading, setIsError, () => {
      navigate("/")
    });

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  }

  console.log(isError)
  return (
    <PageLayout>
      <h1 className="heading"> Create Your Account</h1>
      <div className="form_wrapper">
        {isLoading && <Stack sx={{ width: '100%', position: "absolute", top: '0', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="success" />
        </Stack>}
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 4 },
            '& .MuiTextField-root:not(:last-child)': { mr: 2 },
          }}
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="First Name"
              type="text"
              helperText={isError}
              defaultValue={firstname}
              onChange={(e) => { setFirstname(e.target.value) }}
            />
            <TextField
              error={isError ? true : false}
              required
              label="Last Name"
              type="text"
              helperText={isError ? true : false}
              defaultValue={lastname}
              onChange={(e) => { setLastname(e.target.value) }}
            />
          </div>
          <div>
            <TextField
              error={isError ? true : false}
              required
              id="outlined-required"
              label="Email"
              type="email"
              helperText={isError ? true : false}
              defaultValue={email}
              fullWidth={true}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="Password"
              type="password"
              helperText={isError ? true : false}
              defaultValue={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <TextField
              error={isError ? true : false}
              required
              label="Confirm Password"
              type="password"
              helperText={isError ? true : false}
              defaultValue={confirmPassword}
              onChange={(e) => { setConfirmpassword(e.target.value) }}
            />
          </div>
          <ButtonMain width={"100%"}>Create Account</ButtonMain>
        </Box>
        <div className="login_link"><Link to="/login">Already have an Account?</Link></div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </PageLayout>
  )
}

export default Signup