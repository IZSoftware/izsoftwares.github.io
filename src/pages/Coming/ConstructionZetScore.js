import React from 'react';
import { Box, Grid } from '@mui/material'
import ConstructionImg from '../../resources/images/Construction.jpg';
import './style.css';


export default function ConstructionZetScore() {

    return (
        <Box sx={{width: '100%',  marginTop: '125px'}}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Box className='full-screen-image'>
                        <img className='constructImg' src={ConstructionImg} alt="Construction Page" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}