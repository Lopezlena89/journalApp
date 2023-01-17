import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayOut";
import { useForm } from "../../hook/useForm";
import {checkingAuthentication,startGoogleSignIn} from '../../store/auth';




export const LoginPage = () => {

  const dispatch = useDispatch();

  const {status} = useSelector(state => state.auth);

  const {email, password, onInputChange} = useForm({
    email:'luis@google.com',
    password:12345,
  })

  const isAuthenticating = useMemo(()=>status ==='checking',[status])

  const onSubmit = (event)=>{
    event.preventDefault();
    console.log({email,password});
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () =>{
      console.log('onGoogleSignIn')
      dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
         <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type="email"
                placeholder="correo@google.com"
                fullWidth
                value={email}
                name='email'
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password"
                placeholder="Contraseña"
                fullWidth
                value={password}
                name='password'
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled ={isAuthenticating}
                  type='submit' 
                  variant='contained' 
                  fullWidth
                  >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled ={isAuthenticating}
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSignIn} 
                  >
                  <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
             
            </Grid>

          </Grid>
        </form>

    </AuthLayout>


  )
}
