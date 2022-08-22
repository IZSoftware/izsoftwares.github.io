import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Logo from '../../resources/IZ-Logo.png';
import { Box } from '@mui/system';
import ConstructionA from '../../resources/constructionC.jpg';
import ConstructionFooter from './ConstructionFooter';


export default function IzConstruction(){
    return (
        <div>
            <Box sx={{ width: 7, height: 7}}>
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <Grid container direction="row" justify="center" alignItems="center" >
                            <Grid item xs sm md lg>
                                <Avatar alt="IZ Logo" src={Logo} />
                            </Grid>  
                        </Grid>       
                    </Toolbar>
                </AppBar>  
            </Box>
            <br /><br />
            <Box sx={{ mt: 5}}>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item md lg xl sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                        <Typography variant="h2" component="h4"> WE ARE UNDER CONSTRUCTION </Typography>
                    </Grid>  
                    <Grid item xs sm sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                        <Typography variant="h4" component="h6"> WE ARE UNDER CONSTRUCTION </Typography>
                    </Grid>  
                </Grid>      
            </Box>
            <Box component="img" sx={{height: 500, width: 730, maxHeight: { xs: 250, sm: 300, md: 500 }, maxWidth: { xs: 370, sm:420, md: 700 }}} alt="IZSoftwares Under Construction" src={ConstructionA}/>
            <ConstructionFooter />
        </div>
    )
}