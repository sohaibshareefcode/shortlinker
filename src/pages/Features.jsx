
import React from 'react';

import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';

function Features() {
  return (
    <Box sx={{ padding: { xs: '20px', sm: '30px', md: '40px', lg: '50px' } }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Left Section - Text and Image */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                fontFamily: 'Outfit', 
                fontSize: { xs: '24px', sm: '30px', md: '36px', lg: '50px' } 
              }}
            >
              Discover the Best Value for Your Investment
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ 
                fontFamily: 'Outfit', 
                fontSize: { xs: '14px', sm: '16px', md: '18px' }, 
                fontWeight: '400' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. At sed eo sollicitudin ipsum vivamus vitae amet ex faucibus At sed eo sollicitudin ipsum vivamus.
            </Typography>
            <Box 
              display="flex" 
              justifyContent="flex-start" 
              alignItems="center" 
              sx={{ mt: 2 }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  padding: '10px 20px', 
                  fontSize: { xs: '14px', sm: '16px' } 
                }}
              >
                Request A Quote
              </Button>
              <Box sx={{ paddingLeft: '10px' }}>
                <img src="/images/contactimage/play-button.png" alt="play button" style={{ width: '44px', height: '44px' }} />
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/images/contactimage/rightimage.png"
                alt="images"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* First Feature */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 'none', height: '100%' }}>
            <CardContent>
              <Button 
                variant="contained" 
                color="success" 
                size="small" 
                sx={{ marginBottom: 1 }}
              >
                Feature
              </Button>
              <Typography 
                variant="h5" 
                sx={{ fontWeight: 'bold', color: '#000000', fontSize: { xs: '18px', sm: '20px' } }}
              >
                Lorem ipsum dolor sit amet consec Bibendum in rhoncus tellus arcu
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ marginTop: 1, color: '#000000B0', fontSize: { xs: '14px', sm: '16px' } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tristique elit. Sed sit amet auctor nisl.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/featureimage/2 .png"
              alt="Feature Illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>

        {/* Second Feature */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/featureimage/1 .png"
              alt="Feature Illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Card sx={{ boxShadow: 'none', height: '100%' }}>
            <CardContent>
              <Button 
                variant="contained" 
                color="success" 
                size="small" 
                sx={{ marginBottom: 1 }}
              >
                Feature
              </Button>
              <Typography 
                variant="h5" 
                sx={{ fontWeight: 'bold', color: '#000000', fontSize: { xs: '18px', sm: '20px' } }}
              >
                Lorem ipsum dolor sit amet consec Bibendum in rhoncus tellus arcu
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ marginTop: 1, color: '#000000B0', fontSize: { xs: '14px', sm: '16px' } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tristique elit. Sed sit amet auctor nisl.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Features;
