import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import projectGoalsData from '../Data/HealthcareProjectGoals.json';

export default function HealthcareProjectGoals() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            
            {/* Title and Description Section */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#004283",
                  textAlign: 'left',
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                    lg: '3rem'
                  },
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                {projectGoalsData.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4a5568",
                  lineHeight: 1.8,
                  textAlign: 'justify',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: '1200px',
                }}
              >
                {projectGoalsData.description}
              </Typography>
            </Box>

            {/* Goals Cards Grid */}
            <Grid container spacing={4}>
              {projectGoalsData.goals.map((goal) => (
                <Grid item xs={12} sm={6} md={4} key={goal.id}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.25s ease",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 32px rgba(0,66,131,0.12)",
                        borderColor: "#004283",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        flexGrow: 1,
                      }}
                    >
                      {/* Icon/Image */}
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          overflow: "hidden",
                          backgroundColor: '#f0f4f8',
                        }}
                      >
                        <img
                          src={goal.iconSrc}
                          alt={`${goal.title} icon`}
                          style={{
                            width: "72%",
                            height: "72%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#004283",
                          mb: 2,
                          fontSize: { xs: '1.1rem', md: '1.2rem' },
                          lineHeight: 1.4,
                        }}
                      >
                        {goal.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.8,
                          flexGrow: 1,
                          textAlign: 'justify',
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                        }}
                      >
                        {goal.description}
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