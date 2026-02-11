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
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 6, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={6} alignItems="center">
              {/* Left: Text */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: "#ffffff",
                    textAlign: 'left',
                    mb: 4,
                    lineHeight: 1.15,
                    fontSize: { xs: "2.8rem", md: "4rem" },
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
                    mb: 6,
                  }}
                >
                  {hero.description}
                </Typography>

                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGetStartedClick}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#004d99",
                      px: 5,
                      py: 1.8,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: 2,
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
                    height: { xs: "300px", md: "500px" },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
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