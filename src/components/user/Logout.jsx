
  import React, { useEffect, useState } from 'react';
  import { useNavigate ,Link, Navigate} from 'react-router-dom';
  import {checkLoginAtom, notificationAtom} from '../../state/checkLogin'
  import { useRecoilState} from 'recoil';


  function Logout () {
      const [anchorElNav, setAnchorElNav] = React.useState("");

    const [authenticated, setauthenticated] = useRecoilState(checkLoginAtom);
    var navigate = useNavigate();
    useEffect(() => {
      setauthenticated('false');
      localStorage.clear()
      navigate('/home');
    }, []);
  }
  

  export default  Logout; 