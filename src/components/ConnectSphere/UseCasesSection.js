import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function UseCasesSection({ useCases }) {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8f9fa" }}>
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
                {useCases.title || "Use Cases"}
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
                {useCases.subtitle || "Explore real-world applications"}
              </Typography>
            </Box>

            {/* Use Cases Grid */}
            <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
              {(useCases.cases || []).map((useCase, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ 
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.25s ease",
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      transform: { xs: "none", md: "translateY(-6px)" },
                      boxShadow: { xs: "none", md: "0 12px 32px rgba(0,66,131,0.12)" },
                      borderColor: { xs: "#e0e0e0", md: "#004283" }
                    }
                  }}>
                    <CardContent sx={{ 
                      p: { xs: 3, sm: 4 }, 
                      height: "100%", 
                      display: "flex", 
                      flexDirection: "column" 
                    }}>
                      {/* Icon */}
                      <Box sx={{ 
                        width: { xs: 60, sm: 70 },
                        height: { xs: 60, sm: 70 },
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        overflow: "hidden",
                        mx: { xs: 'auto', md: 0 }
                      }}>
                        <img
                          src={useCase.iconSrc}
                          alt={`${useCase.title} icon`}
                          style={{
                            width: "78%",
                            height: "78%",
                            objectFit: "contain"
                          }}
                        />
                      </Box>
                      
                      {/* Title */}
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: "700", 
                          color: "#004283",
                          mb: 2,
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                          textAlign: { xs: 'center', md: 'left' }
                        }}
                      >
                        {useCase.title}
                      </Typography>
                      
                      {/* Description */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: "#4a5568", 
                          lineHeight: 1.7,
                          mb: 3,
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                          textAlign: 'justify'
                        }}
                      >
                        {useCase.description}
                      </Typography>
                      
                      {/* Key Features */}
                      <Box sx={{ mb: 3, flexGrow: 1 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: "600", 
                            color: "#004283",
                            mb: 2,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            textAlign: { xs: 'center', md: 'left' }
                          }}
                        >
                          Key Features:
                        </Typography>
                        
                        {(useCase.features || []).map((feature, featureIndex) => (
                          <Box sx={{ 
                            display: "flex", 
                            alignItems: "flex-start", 
                            mb: 1.5 
                          }} key={featureIndex}>
                            <CheckCircleIcon sx={{ 
                              fontSize: { xs: 18, md: 20 }, 
                              color: "#004283", 
                              mr: 1.5,
                              mt: 0.3,
                              flexShrink: 0
                            }} />
                            <Typography variant="body2" sx={{ 
                              color: "#4a5568",
                              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
                            }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      
                      {/* Footer */}
                      <Box sx={{ mt: "auto", textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            display: "block",
                            color: "#4a5568",
                            mb: 2,
                            fontStyle: "italic",
                            fontSize: { xs: '0.75rem', md: '0.8rem' }
                          }}
                        >
                          Ideal for: {useCase.idealFor || "Various applications"}
                        </Typography>
                        
                        <Button 
                          variant="outlined"
                          size="small"
                          sx={{ 
                            borderColor: "#004283",
                            color: "#004283",
                            "&:hover": { 
                              backgroundColor: "#004283",
                              color: "white",
                              borderColor: "#004283"
                            },
                            fontWeight: "600",
                            textTransform: "none",
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                            px: { xs: 2, md: 3 }
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* Common Benefits Card */}
              <Grid item xs={12}>
                <Card sx={{ 
                  mt: { xs: 4, md: 8 },
                  borderRadius: 3,
                  backgroundColor: "#004283",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(0,66,131,0.2)"
                }}>
                  <CardContent sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: "700", 
                        mb: 4,
                        textAlign: "center",
                        color: "white",
                        fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem', lg: '2.2rem' }
                      }}
                    >
                      Common Benefits Across All Use Cases
                    </Typography>
                    
                    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                      {(useCases.commonBenefits || []).map((benefit, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Box sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
                            <Box sx={{
                              width: { xs: 50, sm: 60 },
                              height: { xs: 50, sm: 60 },
                              mx: "auto",
                              mb: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden"
                            }}>
                              <img
                                src={benefit.iconSrc}
                                alt={`${benefit.title} icon`}
                                style={{
                                  width: "80%",
                                  height: "80%",
                                  objectFit: "contain"
                                }}
                              />
                            </Box>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: "600", 
                                mb: 2,
                                color: "white",
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                              }}
                            >
                              {benefit.title}
                            </Typography>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "white", 
                                lineHeight: 1.7,
                                opacity: 0.95,
                                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                              }}
                            >
                              {benefit.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    
                    <Box sx={{ textAlign: "center", mt: { xs: 4, md: 6 } }}>
                      <Button 
                        variant="contained"
                        size="large"
                        sx={{ 
                          backgroundColor: "white",
                          color: "#004283",
                          "&:hover": { 
                            backgroundColor: "#f0f4f8"
                          },
                          px: { xs: 4, sm: 5, md: 6 },
                          py: { xs: 1.2, sm: 1.5 },
                          fontWeight: "bold",
                          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                          textTransform: "none",
                          borderRadius: 2
                        }}
                      >
                        {useCases.exploreButton || "Explore All Use Cases"}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}