import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: 'paola@google.com',
  password: '123456',
  displayName: 'Paola Guerra'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo que ingresó es incorrecto'],
  password: [ (value) => value.length >= 6, 'La password debe contener más de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displaynameValid, emailValid, passwordValid, 
  } = useForm(formData, formValidations );

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Regístrate">
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!displaynameValid}
              helperText={displaynameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo Electrónico"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button 
              type="submit"
              variant="contained" 
              fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
