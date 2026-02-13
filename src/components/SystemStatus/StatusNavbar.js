import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Backdrop,
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../resources/images/IZ.svg';

const StatusNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close drawer when switching to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  return (
    <AppBar 
      position="sticky" 
      elevation={4}
      sx={{ 
        backgroundColor: '#ffffff',
        color: '#000000',
        top: 0,
        zIndex: 1200
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12}>
                <Toolbar disableGutters sx={{ minHeight: '64px', justifyContent: 'space-between' }}>
                  {/* Logo */}
                  <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Box
                      component="img"
                      src={Logo}
                      alt="IZ Logo"
                      sx={{
                        width: { xs: '85px', sm: '85px' },
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </Link>

                  {/* Desktop Menu - Professional, clean navbar */}
                  <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
                    <Link to="/status" style={{ textDecoration: 'none' }}>
                      <Typography sx={{ 
                        fontWeight: 500, 
                        fontSize: '0.9rem',
                        color: '#000000',
                        '&:hover': {
                          color: '#000000'
                        }
                      }}>
                        STATUS
                      </Typography>
                    </Link>
                  </Box>

                  {/* Mobile Hamburger */}
                  <IconButton
                    onClick={toggleMenu}
                    sx={{
                      display: { lg: 'none' },
                      color: '#000000',
                      '&:hover': {
                        color: '#000000',
                        backgroundColor: 'transparent'
                      },
                      p: 0.5
                    }}
                    aria-label="Toggle menu"
                  >
                    <MenuIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Toolbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: '#ffffff',
            boxShadow: 24
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Drawer Header */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            p: 1.5,
            borderBottom: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={Logo}
                alt="IZ Logo"
                sx={{
                  width: '70px',
                  height: 'auto'
                }}
              />
            </Link>
            <IconButton
              onClick={toggleMenu}
              sx={{
                color: '#000000',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#000000'
                },
                p: 0.5
              }}
              size="small"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>

          {/* Drawer Links - No hover color changes */}
          <List sx={{ p: 1.5 }}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to="/status"
                onClick={toggleMenu}
                sx={{
                  px: 1.5,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    '& .MuiListItemText-primary': {
                      color: '#000000'
                    }
                  }
                }}
              >
                <ListItemText 
                  primary="STATUS"
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#000000'
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <Backdrop
          open={isMenuOpen}
          onClick={toggleMenu}
          sx={{
            zIndex: 1199,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: { lg: 'none' }
          }}
        />
      )}
    </AppBar>
  );
};

export default StatusNavbar;