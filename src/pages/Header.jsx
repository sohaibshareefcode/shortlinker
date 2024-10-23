import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Features', path: '/features' },
  { label: 'Contact', path: '/contact' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', mb:8 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#F5F5F5', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left side: Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'green', fontWeight: 'bold', display: { xs: 'block', sm: 'block' } }}
          >
            Short.io
          </Typography>

          {/* Center: Navigation items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: '#000', marginLeft: 2 }}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right side: Login button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700', // Yellow color like in the image
              color: '#000',
              '&:hover': {
                backgroundColor: '#FFC300', // Slightly darker on hover
              },
            }}
            component={Link}
            to="/login"
          >
            Login Now
          </Button>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
