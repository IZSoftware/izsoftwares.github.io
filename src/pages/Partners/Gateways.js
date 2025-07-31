import React from 'react';
import { Box, Grid } from '@mui/material';
import PaymentGateways from '../../components/Partners/PaymentGateways';

export default function Gateways() {
    return (
        <Box sx={{p: 5, width: '100%',  marginTop: '100px'}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10}>
                    <PaymentGateways />
                </Grid>
            </Grid>
        </Box>
    )
}