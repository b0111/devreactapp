import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from "react-router-dom";

import Link from '@mui/material/Link';

function Copyright(props) {
    return (
      <Typography variant="body2" color="inherit" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={window.location.origin}>
          Cool
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



function Footer() {
 

  return (
    <AppBar sx={{ bgcolor: "#454545" }}  position="static">
      <Container maxWidth="xl">
         
          <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </AppBar>
  );
}
export default Footer;