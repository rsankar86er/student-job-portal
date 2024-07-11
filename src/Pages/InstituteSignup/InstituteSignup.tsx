import { Avatar, Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, IconButton, Link, ListItemIcon, Menu, MenuItem, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CREATE_INSTITUTE } from '../../Constants/Constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setInstitute } from '../../Redux/CreateInstitute';
import { CreateInstitute } from '../../Services/CreateInstitute';
import { useDispatch } from "react-redux";

const CreateInsituteSchema = Yup.object().shape({
  name: Yup.string().required('Insititute Name is required'),
  email: Yup.string().email('Invalid email').required('Insititute Email is required'),
  password: Yup.string()
                .required('Password is required'),
                // .min(8, 'Password must be 8 characters long')
                // .matches(/[0-9]/, 'Password requires a number')
                // .matches(/[a-z]/, 'Password requires a lowercase letter')
                // .matches(/[A-Z]/, 'Password requires an uppercase letter')
                // .matches(/[^\w]/, 'Password requires a symbol'),
  confirmPassword: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
});

function InstituteSignup (){
   
      const dispatch = useDispatch();
      const formInitialValues = CREATE_INSTITUTE;
      const formik = useFormik({
          initialValues: formInitialValues,
          validationSchema: CreateInsituteSchema, 
          onSubmit: async (values) => {
              dispatch(setInstitute(values));
              CreateInstitute(values);
          }
      });

      return (
        <>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Institute Sign up
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Institute Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive job updates."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/InstituteSignin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </>
    )
}
export default InstituteSignup;

