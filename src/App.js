


import ReactDOM from "react-dom/client";


import { Link } from 'react-router-dom'
import Login from './components/user/Login';
import Profile from './components/user/Profile';

import Header from "./components/Header";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

import { Box } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom";

 function App() {
 
  return (
    <Box>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Navigate to="/home" />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />


        
      </Routes>
    </Box>
  
  );
}


export default App;