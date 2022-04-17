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

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

import classes from './Navbar.module.css';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ height: 100 }}>
          <Link href="./" passHref>
            <Box className={classes.logo}>EW</Box>
          </Link>
          <Box className={classes.navbarItem} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link href="./agence" passHref>
              <Button className={classes.btn}>
                <span className="hover-underline-animation underline-thin">Agence</span>
              </Button>
            </Link>
            <Link href="./services" passHref>
              <Button className={classes.btn}>
                <span className="hover-underline-animation underline-thin">Services</span>
              </Button>
            </Link>
            <Link href="./work" passHref>
              <Button className={classes.btn}>
                <span className="hover-underline-animation underline-thin">Work</span>
              </Button>
            </Link>
            <Link href="./blog" passHref>
              <Button className={classes.btn}>
                <span className="hover-underline-animation underline-thin">Blog</span>
              </Button>
            </Link>
            <Link href="./contact" passHref>
              <Button className={classes.btn}>
                <span className="hover-underline-animation underline-thin">Contact</span>
              </Button>
            </Link>
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
              <Link href="./agence" passHref scroll={false}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#555555' }}>
                    Agence
                  </Typography>
                </MenuItem>
              </Link>

              <Link href="./services" passHref scroll={false}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#555555' }}>
                    Services
                  </Typography>
                </MenuItem>
              </Link>

              <Link href="./work" passHref scroll={false}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#555555' }}>
                    Work
                  </Typography>
                </MenuItem>
              </Link>

              <Link href="./blog" passHref scroll={false}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#555555' }}>
                    Blog
                  </Typography>
                </MenuItem>
              </Link>

              <Link href="./contact" passHref scroll={false}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#555555' }}>
                    Contact
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
