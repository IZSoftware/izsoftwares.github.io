import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent 
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';

export default function WhyConnectSphereSection({ whyConnectSphere }) {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      backgroundColor: "#f8f9fa" 
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: "800", 
                  color: "#004283"
                }}
              >
                {whyConnectSphere.title || "Why ConnectSphere?"}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#000000", 
                  mt: 2,
                  maxWidth: 800
                }}
              >
                {whyConnectSphere.subtitle || "Discover the benefits of our platform"}
              </Typography>
            </Box>

            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 6 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: "700", 
                      color: "#004283",
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      gap: 2
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 36, color: "#004283" }} />
                    Business Benefits
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {(whyConnectSphere.businessBenefits || []).map((benefit, index) => (
                      <Grid item xs={12} key={index}>
                        <Card sx={{ 
                          borderRadius: 2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                          border: "1px solid #e0e0e0",
                          height: "100%",
                          backgroundColor: "#ffffff",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 10px 28px rgba(0,66,131,0.12)",
                            borderColor: "#004283"
                          }
                        }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2,
                                overflow: "hidden"
                                // Removed backgroundColor → clean look
                              }}>
                                <img
                                  src={benefit.iconSrc}
                                  alt={`${benefit.title} icon`}
                                  style={{
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain"
                                  }}
                                />
                              </Box>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  fontWeight: "600", 
                                  color: "#004283" 
                                }}
                              >
                                {benefit.title}
                              </Typography>
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "#000000", 
                                lineHeight: 1.7 
                              }}
                            >
                              {benefit.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 6 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: "700", 
                      color: "#004283",
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      gap: 2
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: 36, color: "#004283" }} />
                    Technical Advantages
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {(whyConnectSphere.technicalAdvantages || []).map((advantage, index) => (
                      <Grid item xs={12} key={index}>
                        <Card sx={{ 
                          borderRadius: 2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                          border: "1px solid #e0e0e0",
                          height: "100%",
                          backgroundColor: "#ffffff",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 10px 28px rgba(0,66,131,0.12)",
                            borderColor: "#004283"
                          }
                        }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2,
                                overflow: "hidden"
                                // No backgroundColor
                              }}>
                                <img
                                  src={advantage.iconSrc}
                                  alt={`${advantage.title} icon`}
                                  style={{
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain"
                                  }}
                                />
                              </Box>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  fontWeight: "600", 
                                  color: "#004283" 
                                }}
                              >
                                {advantage.title}
                              </Typography>
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "#000000", 
                                lineHeight: 1.7 
                              }}
                            >
                              {advantage.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}