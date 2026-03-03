import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import strengthsData from '../Data/ManufacturingStrengths.json';

export default function ManufacturingStrengths() {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: { xs: 4, md: 6 },
                textAlign: { xs: 'left', md: 'left' },
                fontSize: {
                  xs: '1.75rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem'
                },
                lineHeight: 1.2,
                px: { xs: 1, md: 0 }
              }}
            >
              {strengthsData.title}
            </Typography>

            {/* Benefits Cards Grid */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {strengthsData.benefits.map((benefit) => (
                <Grid item xs={12} sm={6} md={4} key={benefit.id}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-8px)" },
                        boxShadow: { xs: "none", md: "0 12px 32px rgba(0,0,0,0.12)" },
                        borderColor: { xs: "#e1e8f0", md: "#004d99" },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                      {/* Yellow Star Icon - No background */}
                      <Box sx={{ mb: { xs: 2, md: 3 } }}>
                        <StarIcon
                          sx={{
                            fontSize: { xs: 40, sm: 44, md: 48 },
                            color: '#FFD700', // Yellow color
                          }}
                        />
                      </Box>

                      {/* Benefit Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#002d5c",
                          mb: { xs: 1.5, md: 2 },
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      {/* Benefit Description - Justified */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.8,
                          textAlign: 'justify',
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}