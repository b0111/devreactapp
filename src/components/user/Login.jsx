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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { checkLoginAtom } from '../../state/checkLogin'






async function loginUser(credentials) {
  return fetch('http://localhost:4001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserName] = useState();
  const [password, setPassword] = useState();

  const [authenticated, setauthenticated] = useRecoilState(checkLoginAtom);


  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      userEmail,
      password
    });
    if ('accessToken' in response) {
      setauthenticated('true')
      localStorage.setItem("authenticated", true);


      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          // window.location.href = "/profile";
          navigate("/profile");
        });
    } else {
      const err = JSON.stringify(response.errors, false);
      console.log(err[0]);
      swal("Failed", 'test', "error", {
        dangerMode: true,
        buttons: true,
      });

    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      alert(1);
      setauthenticated(loggedInUser);
     
    }
  }, []);

  if (authenticated == 'false') {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(http://localhost:4001/uploads/cool-rider.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus onChange={e => setUserName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password" onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >

                  Sign In
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="join-now" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

    )

  } 

}


export default Login;