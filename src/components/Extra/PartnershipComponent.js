import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {partnershipData} from '../Data/HomeData';


export default function PartnershipComponent(){
    return(
        <Box sx={{width: '100%'}}>
            <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                {partnershipData.map((items)=>(
                    <Grid item xs={12} sm={12} md={6} lg={4}> 
                        <Box 
                            sx={{
                                padding: '50px 25px !important', 
                                borderRadius: '15px !important', 
                                boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1) !important',
                                webkitBoxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1) !important',
                                mozBoxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1) !important',
                                minWidth: '100% !important',
                                minHeight: '100% !important',
                                display: 'flex',
                                flexDirection: 'column', // Stack items vertically
                                alignItems: 'center', // Center items horizontally
                                justifyContent: 'center', // Center items vertically
                            }}>
                            {/**<img src={items.image} alt="Partnership Model" style={{maxWidth: '100%',  height: 'auto' }}/>**/}

                            <h4 style={{color: "#005EB8", textTransform: "uppercase"}}> <b> {items.title} </b> </h4>
                            <p style={{textAlign: "justify"}}> {items.text} </p>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
)}