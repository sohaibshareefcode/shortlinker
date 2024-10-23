import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Container sx={{ mt: 5 }} maxWidth={false}>
      {/* Top Section */}
      <Grid container spacing={4}>
        {/* Left Section - Text and Image */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Outfit', fontSize: "50px" }}>
            Discover the Best Value for Your Investment
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Outfit', fontSize: "18px", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur. At sed eo sollicitudin ipsum vivamus vitae amet ex faucibus At sed eo sollicitudin ipsum vivamus.
          </Typography>
          <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ pt: 2, pb: 1, bgcolor: "#FFD25F", color: "#15493E" }}>
              Request A Quote
            </Button>
            <Box sx={{ paddingLeft: '20px' }}>
              <img src="/images/contactimage/play-button.png" alt="play button" />
            </Box>
          </Box>
        </Grid>
        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/contactimage/rightimage.png"
            alt="images"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Bottom Section - Contact Info and Form */}
      <Grid container spacing={4} sx={{ mt: 5, bgcolor: "#F2F2F2", pb: 10 }}>
       

      <Grid item xs={12} md={4}>
        <Card elevation={0} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon color="primary" sx={{ mr: 2, bgcolor:"#15493E",p:2,borderRadius:10 }} />
              <Box><Typography variant="h6">Phone</Typography>
            <Typography variant="body2" sx={{color:"#000000B0"}}>(704) 555-0127</Typography></Box>
            </Box>
          </CardContent>
        </Card>
        <Card elevation={0} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon color="primary" sx={{ mr: 2, bgcolor:"#15493E",p:2,borderRadius:10 }} />
             <Box> <Typography variant="h6">Location</Typography>
            <Typography variant="body2" sx={{color:"#000000B0"}}>3891 Ranchview Dr. Richar</Typography></Box>
            </Box>
          </CardContent>
        </Card>
        <Card elevation={0}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon color="primary" sx={{ mr: 2, bgcolor:"#15493E",p:2,borderRadius:10 }} />
             <Box> <Typography variant="h6">Email Address</Typography>
            <Typography variant="body2" sx={{color:"#000000B0"}}>willie.jennings@example.com</Typography></Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Box component="form" bgcolor={"#FFFFFF"} sx={{ p: 4, mr: 5 }}>
            <Typography variant="h5" gutterBottom>
              Send Message
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: "#000000B0" }}>
              Lorem ipsum dolor sit amet consectetur. At sed eo sollicitudin ipsum vivamus vitae amet ex faucibus sollicitudin ipsum vivamus vitae amet ex faucibus.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder='Your Name' variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder='Email Address' variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder='Phone Number' variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder='Subject' variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth placeholder='Messages' variant="outlined" multiline rows={4} />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ pt: 2, pb: 1, bgcolor: "#FFD25F", color: "#15493E" }}
              >
                Request A Quote
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
