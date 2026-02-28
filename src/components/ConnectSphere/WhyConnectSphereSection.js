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
      py: { xs: 6, sm: 8, md: 10 }, 
      backgroundColor: "#f8f9fa" 
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Header */}
            <Box sx={{ mb: { xs: 4, md: 8 } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: "800", 
                  color: "#004283",
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                  mb: 2,
                }}
              >
                {whyConnectSphere.title || "Why ConnectSphere?"}
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
                {whyConnectSphere.subtitle || "Discover the benefits of our platform"}
              </Typography>
            </Box>

            {/* Two Column Layout */}
            <Grid container spacing={{ xs: 4, md: 6 }}>
              {/* Business Benefits Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: "700", 
                      color: "#004283",
                      mb: { xs: 3, md: 4 },
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: { xs: 28, md: 36 }, color: "#004283" }} />
                    Business Benefits
                  </Typography>
                  
                  <Grid container spacing={{ xs: 3, sm: 4 }}>
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
                            transform: { xs: "none", md: "translateY(-4px)" },
                            boxShadow: { xs: "none", md: "0 10px 28px rgba(0,66,131,0.12)" },
                            borderColor: { xs: "#e0e0e0", md: "#004283" }
                          }
                        }}>
                          <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                            <Box sx={{ 
                              display: "flex", 
                              alignItems: "center", 
                              mb: 2,
                              flexDirection: { xs: 'column', sm: 'row' },
                              textAlign: { xs: 'center', sm: 'left' }
                            }}>
                              <Box sx={{
                                width: { xs: 36, sm: 40 },
                                height: { xs: 36, sm: 40 },
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: { xs: 0, sm: 2 },
                                mb: { xs: 1, sm: 0 },
                                overflow: "hidden"
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
                                  color: "#004283",
                                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                }}
                              >
                                {benefit.title}
                              </Typography>
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "#4a5568", 
                                lineHeight: 1.7,
                                fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                                textAlign: 'justify'
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

              {/* Technical Advantages Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 6 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: "700", 
                      color: "#004283",
                      mb: { xs: 3, md: 4 },
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: { xs: 28, md: 36 }, color: "#004283" }} />
                    Technical Advantages
                  </Typography>
                  
                  <Grid container spacing={{ xs: 3, sm: 4 }}>
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
                            transform: { xs: "none", md: "translateY(-4px)" },
                            boxShadow: { xs: "none", md: "0 10px 28px rgba(0,66,131,0.12)" },
                            borderColor: { xs: "#e0e0e0", md: "#004283" }
                          }
                        }}>
                          <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                            <Box sx={{ 
                              display: "flex", 
                              alignItems: "center", 
                              mb: 2,
                              flexDirection: { xs: 'column', sm: 'row' },
                              textAlign: { xs: 'center', sm: 'left' }
                            }}>
                              <Box sx={{
                                width: { xs: 36, sm: 40 },
                                height: { xs: 36, sm: 40 },
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: { xs: 0, sm: 2 },
                                mb: { xs: 1, sm: 0 },
                                overflow: "hidden"
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
                                  color: "#004283",
                                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                }}
                              >
                                {advantage.title}
                              </Typography>
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "#4a5568", 
                                lineHeight: 1.7,
                                fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                                textAlign: 'justify'
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