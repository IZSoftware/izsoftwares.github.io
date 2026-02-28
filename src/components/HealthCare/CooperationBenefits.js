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
import cooperationData from '../Data/CooperationBenefits.json';

export default function CooperationBenefits() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: 6,
                textAlign: 'left',
                fontSize: {
                  xs: '1.75rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem'
                },
                lineHeight: 1.2,
              }}
            >
              {cooperationData.title}
            </Typography>

            {/* Benefits Cards Grid */}
            <Grid container spacing={4}>
              {cooperationData.benefits.map((benefit) => (
                <Grid item xs={12} md={4} key={benefit.id}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                        borderColor: "#004d99",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Yellow Star Icon - No background */}
                      <Box sx={{ mb: 3 }}>
                        <StarIcon
                          sx={{
                            fontSize: 48,
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
                          mb: 2,
                          fontSize: { xs: '1.2rem', md: '1.3rem' },
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
                          fontSize: { xs: '0.95rem', md: '1rem' },
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