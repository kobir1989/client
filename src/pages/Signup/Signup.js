import PageLayout from '../../components/pageLayout/PageLayout';
import * as React from 'react';
import { Box, TextField } from '@mui/material';
import ButtonMain from "../../components/buttons/Button-main";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <PageLayout>
      <h1 className="heading"> Create Your Account</h1>
      <div className="form_wrapper">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 4 },
            '& .MuiTextField-root:not(:last-child)': { mr: 2 },
          }}
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email"
              fullWidth="true"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Password"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Confirm Password"
            />
          </div>
          <ButtonMain width={"100%"}>Create Account</ButtonMain>
        </Box>
        <div className="login_link"><Link to="/login">Already have an Account?</Link></div>
      </div>

    </PageLayout>
  )
}

export default Signup