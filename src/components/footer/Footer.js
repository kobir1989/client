import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={
      {
        background: "#edf3ed",
        height: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        bottom: "0",
        width:"100%"
      }
    }>
      <Typography variant='h4' sx={{ fontSize: ".7rem" }}>Copyright&copy; 2022 | Kabir Hossain</Typography>
    </Box>
  )
}

export default Footer