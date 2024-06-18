import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginSuccess } from '../../../../store/constant';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      const { email, password, role } = values;

      if (email === 'info@codedthemes.com' && password === '170506') {
        const user = {
          email: email,
          role: role
        };
        dispatch(loginSuccess(user));
        navigation('/dashboard/default')
      } else {
        toast.success('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}></Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: 'info@codedthemes.com',
          password: '170506',
          submit: null,
          role: 'admin'
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.role && errors.role)} sx={{ ...theme.typography.customInput }}>
              {!values.role && <InputLabel id="role-label">Role</InputLabel>}
              <Select
                labelId="role-label"
                id="role"
                value={values.role}
                name="role"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Role"
                placeholder="Select Role"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="parent">Parent</MenuItem>
              </Select>
              {touched.role && errors.role && <FormHelperText error>{errors.role}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} name="checkedA" />}
                label="Remember me"
              />
              <Typography variant="subtitle1" sx={{ cursor: 'pointer', color: theme.palette.primary.main }}>
                Forgot Password?
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" disabled={isSubmitting}>
                  Sign In
                </Button>
              </AnimateButton>
              <Typography variant="subtitle1" sx={{ cursor: 'pointer', color: theme.palette.primary.main }}>
                Dont have an account? Sign Up
              </Typography>
            </Stack>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
