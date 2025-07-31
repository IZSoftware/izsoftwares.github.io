import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material'
import HomeIcon from '@material-ui/icons/Home';
import ConstructionImg from '../../resources/images/Construction.jpg';
import './style.css';


export default function Construction() {

    return (
        <Box sx={{width: '100%',  marginTop: '125px'}}>
            <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                        <b><i> Page is presently undergoing complete reconstruction.</i> </b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box className='full-screen-image'>
                        <img className='constructImg' src={ConstructionImg} alt="Construction Page" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}