import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ hero }) {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contact-us');
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)",
        color: "white",
        minHeight: { xs: "80vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        mt: { xs: 8, md: 0 }, // Added margin-top on mobile to push below navbar
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              {/* Left: Text */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: "#ffffff",
                    textAlign: { xs: 'center', md: 'left' },
                    mb: 3,
                    lineHeight: 1.15,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
                    mt: { xs: 4, md: 0 }, // Added extra margin-top on mobile
                    px: { xs: 2, md: 0 }
                  }}
                >
                  {hero.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#e0e7ff",
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    mb: 4,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    px: { xs: 2, md: 0 }
                  }}
                >
                  {hero.description}
                </Typography>

                <Box sx={{ 
                  display: "flex", 
                  gap: { xs: 2, md: 3 }, 
                  flexWrap: "wrap",
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  px: { xs: 2, md: 0 }
                }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGetStartedClick}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#004d99",
                      px: { xs: 4, sm: 5 },
                      py: { xs: 1.5, sm: 1.8 },
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                      "&:hover": { backgroundColor: "#e6f2ff" },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>

              {/* Right: Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                    mt: { xs: 2, md: 0 }
                  }}
                >
                  <img
                    src="/Security-breach-alert-displayed-computer-monitor-working.jpg"
                    alt="Cybersecurity protection"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}