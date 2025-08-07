import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarCollapse from './NavBarCollapse';
import Avatar from '@mui/material/Avatar';
import Logo from '../../resources/images/IZ.svg';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function IZNavBar() {

    const [anchorElSupport, setAnchorElSupport] = useState(null);

    const handleMouseEnterSupport = (event) => {
        setAnchorElSupport(event.currentTarget);
    };

    const handleMouseLeaveSupport = () => {
        setAnchorElSupport(null);
    };

    const openSupport = Boolean(anchorElSupport);

    return (
        <div>
            {/* Top bar for Support */}
            <AppBar position="fixed" sx={{ backgroundColor: 'primary', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
                <Toolbar disableGutters>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={12} md={10}>
                            <Grid container justifyContent="flex-end" sx={{ pr: 2 }}>
                                <div
                                    onMouseEnter={handleMouseEnterSupport}
                                    onMouseLeave={handleMouseLeaveSupport}
                                >
                                    <Button
                                        aria-controls="support-menu"
                                        aria-haspopup="true"
                                        sx={{ color: 'white' }}
                                        endIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    >
                                        <Typography sx={{ fontWeight: 420 }} variant="body2">
                                            SUPPORT
                                        </Typography>
                                    </Button>
                                    <Menu
                                        id="support-menu"
                                        anchorEl={anchorElSupport}
                                        open={openSupport}
                                        onClose={handleMouseLeaveSupport}
                                        MenuListProps={{ onMouseLeave: handleMouseLeaveSupport }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <MenuItem component={Link} to="/faqs">
                                            FAQs
                                        </MenuItem>
                                        <MenuItem component={Link} to="/client-support">
                                            Client Support
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

          {/* Existing main navbar, now with fixed position */}
            <Box sx={{ width: '100%' }}>
                <AppBar position="fixed" sx={{ borderBottom: "1px solid #00d8ff", top: 64, zIndex: (theme) => theme.zIndex.drawer + 1 }} color="default">
                    <Toolbar>
                        <Grid container spacing={2} direction="row" justifyContent="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={2} sm={2} md={4} lg={4}>
                                        <Grid container justifyContent="flex-start">
                                            <Link to='/' style={{ textDecoration: 'none' }}>
                                                <Avatar sx={{ width: 85, height: 85 }} alt="IZ Logo" src={Logo} />
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={10} sm={8} md={8} lg={8}>
                                        <Grid container justifyContent="flex-end">
                                            <NavBarCollapse />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}