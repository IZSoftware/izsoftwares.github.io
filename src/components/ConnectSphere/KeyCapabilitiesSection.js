import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

export default function KeyCapabilitiesSection({ keyCapabilities }) {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Header Section */}
            <Box sx={{ mb: { xs: 4, md: 8 } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: "800", 
                  color: "#004283",
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                  mb: 2,
                  px: { xs: 1, md: 0 }
                }}
              >
                {keyCapabilities.title || "Key Capabilities & Features"}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#4a5568", 
                  mt: 2,
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                {keyCapabilities.subtitle || "Powerful features to streamline your cloud operations"}
              </Typography>
            </Box>

            {/* Features Grid */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {(keyCapabilities.features || []).map((feature, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-4px)" },
                        boxShadow: { xs: "none", md: "0 12px 32px rgba(0,66,131,0.12)" },
                        borderColor: { xs: "#e0e0e0", md: "#004283" },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: { xs: 3, sm: 4 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          width: { xs: 56, sm: 64 },
                          height: { xs: 56, sm: 64 },
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: { xs: 2, md: 3 },
                          overflow: "hidden",
                          mx: { xs: 'auto', md: 0 } // Center on mobile
                        }}
                      >
                        <img
                          src={feature.iconSrc}
                          alt={`${feature.title} icon`}
                          style={{
                            width: "80%",
                            height: "80%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{ 
                          fontWeight: "700", 
                          color: "#004283", 
                          mb: { xs: 1.5, md: 2 },
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                          textAlign: { xs: 'center', md: 'left' }
                        }}
                      >
                        {feature.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.7,
                          mb: 3,
                          flexGrow: 1,
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                          textAlign: 'justify',
                        }}
                      >
                        {feature.description}
                      </Typography>

                      {/* Bullets */}
                      {feature.bullets && (
                        <Box component="ul" sx={{ 
                          pl: { xs: 1.5, md: 2 }, 
                          m: 0,
                          mt: 'auto'
                        }}>
                          {feature.bullets
                            .split("• ")
                            .filter(Boolean)
                            .map((bullet, i) => (
                              <Typography
                                key={i}
                                component="li"
                                variant="body2"
                                sx={{ 
                                  color: "#004283", 
                                  mb: 0.5, 
                                  fontWeight: 500,
                                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                                  lineHeight: 1.6,
                                  textAlign: { xs: 'center', md: 'left' }
                                }}
                              >
                                {bullet.trim()}
                              </Typography>
                            ))}
                        </Box>
                      )}
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