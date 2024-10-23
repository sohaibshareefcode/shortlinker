
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, InputAdornment, Divider, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="false" disableGutters sx={{ padding: 0, margin: 0, overflow: 'hidden' }}>
      <Grid container spacing={0} alignItems="stretch" justifyContent="center" sx={{ height: '100vh', margin: 0, padding: 0 }}>
        
        {/* Left Section (Image + Logo) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: '#F2F2F2',
            display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on larger screens
            flexDirection: 'column',
            position: 'relative',
            height: '100vh',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0, padding: 2 }}>
            <img
              src="/images/loginimages/Logoipsum/15.png" 
              alt="Logo"
              style={{ width: 150, height: 'auto' }}
            />
          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              width: { xs: '80%', md: '60%' }, 
              height: { xs: 'auto', md: 'auto' },
            }}
          >
            <img
              src="/images/loginimages/leftimage.png" 
              alt="Login Illustration"
              style={{
                maxWidth: '100%', 
                height: 'auto',
                objectFit: 'contain', 
              }}
            />
          </Box>
        </Grid>

        {/* Right Section (Login Form) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: { xs: '90%', md: '400px' }, 
            }}
          >
            <Typography component="h1" variant="h4" sx={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: { xs: '24px', md: '32px' } }}>
              Hello Again!
            </Typography>
            <Typography sx={{ color: "#15493E", fontSize: { xs: '16px', md: '18px' } }}>Welcome Back</Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: '100%' }}
            >
              {/* Email Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: '10px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                }}
              />

              {/* Password Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: '10px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                }}
              />

              {/* Forgot Password Link */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Link href="#" variant="body2" sx={{ color: "#858585" }}>
                  Forgot Password?
                </Link>
              </Box>

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2, pt: 2, pb: 2, bgcolor: "#15493E", color: 'white', borderRadius: "10px", fontSize: '16px' }}
              >
                Login
              </Button>

              
              <Divider sx={{ mt: 2, mb: 2 }}>
                <Typography sx={{ color: "#858585" }}>or</Typography>
              </Divider>

              {/* Sign in with Google */}
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  mb: 1,
                  pt: 1,
                  pb: 1,
                  bgcolor: "#F2F2F2",
                  color: "#000000CC",
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'none',
                  fontFamily: 'Outfit',
                }}
              >
                <img src="images/loginimages/Google.png" alt="google" style={{ marginRight: 8, height: 20 }} />
                Sign in with Google
              </Button>

              {/* Sign in with Facebook */}
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  mb: 2,
                  pt: 1,
                  pb: 1,
                  bgcolor: "#F2F2F2",
                  color: "#000000CC",
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'none',
                  fontFamily: 'Outfit',
                }}
              >
                <img src="images/loginimages/Facebook.png" alt="facebook" style={{ marginRight: 8, height: 20 }} />
                Sign in with Facebook
              </Button>

              {/* Sign-up Link */}
              <Typography sx={{ textAlign: 'center', mt: 2 }}>
                Don't you have an account? <Link href="">Sign up</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
