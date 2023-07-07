import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";


import { Link } from 'react-router-dom'
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Logout from './components/user/Logout';




import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

import { Box, radioClasses } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom";

import Container from '@mui/material/Container';

import { useRecoilValue } from 'recoil';
import {checkLoginAtom} from './state/checkLogin'
import PageNotFound from './PageNotFound';

 function App() {
  const auth= ( useRecoilValue(checkLoginAtom) == 'true')?  true : false ;

  return (
    <Box>
      <Header />
      <Box className='Container' sx={{ height: '450px' }}>
      <Routes>
        
        <Route path="*" element={<PageNotFound />} />
        <Route path='/' element={<Navigate to="/home" />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/login' element= {auth ? <Navigate to="/" />  : <Login/> }   />
        <Route path='/profile' element={auth ? <Profile/> : <Navigate to="/" />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/logout' element={auth ? <Logout/> : <Navigate to="/" />}   />
      </Routes>
      </Box>
      <Footer />
    </Box>
  );
}






export default App;