import { AppBar, Autocomplete, Avatar, Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, IconButton, Link, ListItemIcon, Menu, MenuItem, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function CandidateSignup (){
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
      const instituteList = [
        { label: 'Anna university'},
        { label: 'Vellore Institute Of Technology'},
        { label: 'Loyola College'},
        { label: 'SSN College Of Engineering'},
        { label: 'Madras Christian College'},
      ];

      const degreeList = [
        { label: 'B.Tech'},
        { label: 'B.E'},
        { label: 'B.Sc'},
        { label: 'B.Com'},
        { label: 'B.A'},
      ];

      const departmentList = [
        { label: 'Information Technology'},
        { label: 'Computer Science Engineering'},
        { label: 'Electronics and Communication Engineering'},
        { label: 'Electrical and Electronics Engineering'},
        { label: 'Electronics and Instrumentation Engineering'},
      ];

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
                Candidate Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disablePortal
                      id="institute"
                      options={instituteList}
                      fullWidth
                      renderInput={(params) => <TextField required {...params} label="Institute" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disablePortal
                      id="degree"
                      options={degreeList}
                      fullWidth
                      renderInput={(params) => <TextField required {...params} label="Degree" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disablePortal
                      id="department"
                      options={departmentList}
                      fullWidth
                      renderInput={(params) => <TextField required {...params} label="Department" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
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
                      autoComplete="new-password"
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
                    <Link href="/CandidateLogin" variant="body2">
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
export default CandidateSignup;