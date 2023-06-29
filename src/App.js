


import ReactDOM from "react-dom/client";


import { Link } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';

import Home from './pages/Home';



import Layout from "./pages/Layout.js";

import { Box } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom";

 function App() {
 
  return (

    <Box>
      <Layout />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Box>
  
  );
}


export default App;