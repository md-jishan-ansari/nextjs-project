import { useState, useEffect } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import Footer from '../footer/Footer.jsx';

import classes from './Navbar.module.css';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      //   color={isScroll ? 'inherit' : 'transparent'}
      color="transparent"
      elevation={1}
      // style={{
      //     //   boxShadow: !isScroll && 'none',
      // boxShadow: 'none',
      // }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ height: 100 }}>
          <Box className={classes.logo}>EW</Box>
          <Box className={classes.navbarItem} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button className={classes.btn}>Agence</Button>
            <Button className={classes.btn}>Services</Button>
            <Button className={classes.btn}>Portfolio</Button>
            <Button className={classes.btn}>Contact</Button>
          </Box>

          <Box className={classes.menuIcon} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{ color: '#555555' }}>
                  Agence
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{ color: '#555555' }}>
                  Services
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{ color: '#555555' }}>
                  Portfolio
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{ color: '#555555' }}>
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
