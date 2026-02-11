import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function UseCasesSection({ useCases }) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
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
                {useCases.title || "Use Cases"}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#000000", 
                  mt: 2,
                  maxWidth: 800
                }}
              >
                {useCases.subtitle || "Explore real-world applications"}
              </Typography>
            </Box>

            <Grid container spacing={6}>
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
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 32px rgba(0,66,131,0.12)",
                      borderColor: "#004283"
                    }
                  }}>
                    <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                      <Box sx={{ 
                        width: 70,
                        height: 70,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 4,
                        overflow: "hidden"
                        // Removed backgroundColor → clean & modern
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
                      
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: "700", 
                          color: "#004283",
                          mb: 3
                        }}
                      >
                        {useCase.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: "#000000", 
                          lineHeight: 1.7,
                          mb: 4
                        }}
                      >
                        {useCase.description}
                      </Typography>
                      
                      <Box sx={{ mb: 4, flexGrow: 1 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: "600", 
                            color: "#004283",
                            mb: 2
                          }}
                        >
                          Key Features:
                        </Typography>
                        
                        {(useCase.features || []).map((feature, featureIndex) => (
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }} key={featureIndex}>
                            <CheckCircleIcon sx={{ fontSize: 20, color: "#004283", mr: 1.5 }} />
                            <Typography variant="body2" sx={{ color: "#000000" }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      
                      <Box sx={{ mt: "auto" }}>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            display: "block",
                            color: "#000000",
                            mb: 2,
                            fontStyle: "italic"
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
                            textTransform: "none"
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Card sx={{ 
                  mt: 8,
                  borderRadius: 3,
                  backgroundColor: "#004283",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(0,66,131,0.2)"
                }}>
                  <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: "700", 
                        mb: 4,
                        textAlign: "center",
                        color: "white"
                      }}
                    >
                      Common Benefits Across All Use Cases
                    </Typography>
                    
                    <Grid container spacing={4}>
                      {(useCases.commonBenefits || []).map((benefit, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Box sx={{ textAlign: "center", p: 3 }}>
                            <Box sx={{
                              width: 60,
                              height: 60,
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
                                color: "white"
                              }}
                            >
                              {benefit.title}
                            </Typography>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: "white", 
                                lineHeight: 1.7,
                                opacity: 0.95
                              }}
                            >
                              {benefit.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    
                    <Box sx={{ textAlign: "center", mt: 6 }}>
                      <Button 
                        variant="contained"
                        size="large"
                        sx={{ 
                          backgroundColor: "white",
                          color: "#004283",
                          "&:hover": { 
                            backgroundColor: "#f0f4f8"
                          },
                          px: 6,
                          py: 1.5,
                          fontWeight: "bold",
                          fontSize: "1.1rem",
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