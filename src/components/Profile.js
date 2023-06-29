import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';





// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

 function Profile()  {
    
  


 const items = JSON.parse(localStorage.getItem('user'));
  
 if(items){
   var   userEmail = items.userEmail;

   var  userNAme = items.userName;
 }
       
  console.log(items.userEmail);


  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      {  userEmail  }  <br/> 
      {userNAme}
 </Container>
  </ThemeProvider>
  )
}

export default  Profile;

