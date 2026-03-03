import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import StatsItem from '../../components/ConnectSphere/StatsItem';
import keyFactsData from '../Data/KeyFactsManufacturing.json';

export default function KeyFactsManufacturing() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Section Title */}
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography 
                variant="h3" 
                sx={{
                  fontWeight: "800",
                  color: "#004283",
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                    lg: '3rem'
                  },
                  lineHeight: 1.2,
                  textAlign: { xs: 'left', md: 'left' }
                }}
              >
                {keyFactsData.title}
              </Typography>
            </Box>

            {/* Stats Grid */}
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                {/* Map through stats data */}
                {keyFactsData.stats.map((stat) => (
                  <Grid item xs={4} sm={4} md={4} key={stat.id}>
                    <StatsItem 
                      number={stat.number} 
                      label={stat.label} 
                    />
                  </Grid>
                ))}

              </Grid>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}