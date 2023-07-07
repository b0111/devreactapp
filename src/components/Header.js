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

import {useEffect} from  'react';
import { useNavigate } from "react-router-dom";
import {useRecoilState, useRecoilValue } from 'recoil';
import { checkLoginAtom  } from '../state/checkLogin';


const pages = [
  {'name':'home','path':'/'},
  {'name':'Blogs','path':'/blogs'},
  {'name':'Contact','path':'/contact'},
 ];


 const settings = [
  {'name':'Profile','path':'/profile'}
];



function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const authenticated = ( useRecoilValue(checkLoginAtom) == 'true')?  true : false; 
  const items = JSON.parse(localStorage.getItem('user'));
  const [aauthenticated, setauthenticated] = useRecoilState(checkLoginAtom);

  if (items) {
    var imagePath =  "http://localhost:4001/uploads/"+items.profileImage;
  }


  function Logout () {
    setAnchorElUser(null);
    setauthenticated('false')
    localStorage.clear()
    navigate('/home')
  }

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (


    <AppBar position="static"  sx={{ bgcolor: "#454545" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cool
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() =>navigate(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}

              {!authenticated? (<MenuItem key="login" onClick={() =>navigate("login")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>) : ""}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cool
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center'} }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() =>navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            {!authenticated? (<Button key="login" onClick={() =>navigate("login")}  sx={{ my: 2, color: 'white', display: 'block' }}>
                 Login
                </Button>) : ""}
          </Box>
          
          {authenticated? (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} on   sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={items ? imagePath : ''} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.path} onClick={() =>navigate(setting.path)} >
                  <Typography   textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}

               {authenticated? (<MenuItem key="logout" onClick={() =>Logout()}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>) : ""}
            </Menu>
          </Box>) : ""}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;