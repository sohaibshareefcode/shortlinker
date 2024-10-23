import React from 'react';
import { Grid, Box, Container } from '@mui/material';

const LogoBar = () => {
  const logos = [
    '/images/logobarimage/Logoipsum/1.png',
    '/images/logobarimage/Logoipsum/2.png',
    '/images/logobarimage/Logoipsum/3.png',
    '/images/logobarimage/Logoipsum/4.png',
    '/images/logobarimage/Logoipsum/5.png',
  ];

  return (
    <Box sx={{ backgroundColor: '#15493E', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={4} sm={2} key={index}>
              <img 
                src={logo} 
                alt={`logo-${index}`} 
                style={{ 
                  height: 'auto', 
                  maxWidth: '100%', 
                  objectFit: 'contain' 
                }} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LogoBar;
