import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarCollapse from './NavBarCollapse'
import Avatar from '@mui/material/Avatar';
import Logo from '../../resources/images/IZ.svg';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



export default function IZNavBar() {
    return (
        <div>
            <Box sx={{width: '100%'}}> 
                <AppBar position="fixed" sx={{borderBottom: "1px solid #00d8ff"}} color="default">
                    <Toolbar>
                        <Grid container spacing={2} direction="row" justifyContent="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={2} sm={2} md={4} lg={4}>
                                        <Grid container justifyContent="flex-start">
                                            <Link to='/'  style={{textDecoration:'none'}}>
                                                <Avatar sx={{width: 120, height: 120}} alt="IZ Logo" src={Logo} />
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
    )
}