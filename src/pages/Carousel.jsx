import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Typography, Card, CardContent, Avatar, Button, Box } from '@mui/material';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


import Chip from '@mui/material/Chip';
const testimonials = [
  {
    name: "John Smith",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing dis augue ex massa dui. Odio nulla auctor ut ut odio purus consectetur praesent.",
    avatar: "/images/carouselimage/Ellipse 9.png"
  },
  {
    name: "John Smith",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing dis augue ex massa dui. Odio nulla auctor ut ut odio purus consectetur praesent.",
    avatar: "/images/carouselimage/Ellipse 9.png"
  },
  {
    name: "John Smith",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing dis augue ex massa dui. Odio nulla auctor ut ut odio purus consectetur praesent.",
    avatar: "/images/carouselimage/Ellipse 9.png"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

function Carousel() {
  return (
    <Container sx={{ mt: 5 }}>
  <Chip label="Clickable Link" component="a" href="#basic-chip" clickable sx={{justifyItems:"center",bgcolor:"#15493E"}} />
      <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        What Our Client Say
      </Typography>

      <Slider {...settings}>
  {testimonials.map((testimonial, index) => (
    <div key={index}>
      <Card sx={{ p: 1, mx: 2, bgcolor: "#F2F2F2", borderRadius: '20px' }}>
        <CardContent>
          <Typography 
            variant="h1" 
            component="div" 
            style={{ display: 'inline-flex' }}
          >
            <img 
              src="/images/carouselimage/simclone.png" 
              alt="Quote Icon" 
              style={{ width: '3rem', height: '2rem', transform: 'rotate(360deg) ' }} 
            />
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, color: "#000000B0" }}>
            {testimonial.text}
          </Typography>

          <Box sx={{ mt: 3, textAlign: 'center', color: "#000000B0" }}>
            <Avatar alt={testimonial.name} src={testimonial.avatar} sx={{ mx: 'auto', width: 56, height: 56 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, color: '#15493E' }}>
              {testimonial.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  ))}
</Slider>



      <Grid container justifyContent="center" sx={{ mt:7 }}>
        <Button variant="contained" color="primary" sx={{pt:1,pb:1,pl:3,pr:3 ,color:"#15493E"}}>
          See More
        </Button>
      </Grid>
    </Container>
  );
}

export default Carousel;
