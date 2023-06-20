"use client";
import React, { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUser } from '../../../../store/authSlice';
import { AppDispatch } from '../../../../store/store';
import { useRouter } from 'next/navigation';


type Props = {};

const LoginPage: FunctionComponent<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
    };
    const res = auth(credentials)
    console.log(res)
    if (res) {
      dispatch(setIsAuthenticated(true))
      dispatch(setUser({ res }))
    }
    else {
      alert("Invalid credentials")
    }
    router.push('/profile')

  };

  return (
    <div className="w-full main md:w-[950px] relative self-center">
      <Container component="main" maxWidth="xs" className='bg-white p-5'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Вход
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Нет аккаунта? Зарегестрируйтесь"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
