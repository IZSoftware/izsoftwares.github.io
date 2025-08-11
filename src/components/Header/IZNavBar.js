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

// Define a constant for the top navbar's height to ensure consistency
const TOP_NAVBAR_HEIGHT = 40; 

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
            {/* Top bar for Support, now with a height of 25px 
            <AppBar position="fixed" sx={{ backgroundColor: '#009eb6', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
                <Toolbar disableGutters variant="dense" sx={{ minHeight: TOP_NAVBAR_HEIGHT, py: 0 }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={12} md={10}>
                            <Grid container justifyContent="flex-end" sx={{ pr: 0.5 }}>
                                <div
                                    onMouseEnter={handleMouseEnterSupport}
                                    onMouseLeave={handleMouseLeaveSupport}
                                >
                                    <Button
                                        aria-controls="support-menu"
                                        aria-haspopup="true"
                                        sx={{ color: 'white', py: 0 }}
                                        endIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: 16 }} />}
                                    >
                                        <Typography sx={{ fontWeight: 420 }} variant="caption" fontSize={10}>
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
            */}

            {/* Main navbar, with its 'top' position adjusted to remove the gap */}
            <Box sx={{ width: '100%' }}>
                {/* The 'top' value is now set to the height of the top navbar */}
                <AppBar position="fixed" sx={{ borderBottom: "1px solid #00d8ff", zIndex: (theme) => theme.zIndex.drawer + 1 }} color="default">
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