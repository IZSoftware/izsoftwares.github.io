import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function UseCasesSection({ useCases, getIcon }) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: "800", 
                color: "#002d5c"
              }}>
                {useCases.title || "Use Cases"}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: "#5a6c7d", 
                mt: 2,
                maxWidth: 800
              }}>
                {useCases.subtitle || "Explore real-world applications"}
              </Typography>
            </Box>

            <Grid container spacing={6}>
              {(useCases.cases || []).map((useCase, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ 
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    border: "1px solid #e1e8f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(0,77,153,0.15)",
                      borderColor: "#004d99"
                    }
                  }}>
                    <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                      <Box sx={{ 
                        width: 70,
                        height: 70,
                        borderRadius: 2,
                        backgroundColor: "#e6f2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 4
                      }}>
                        {getIcon(useCase.icon)}
                      </Box>
                      
                      <Typography variant="h5" sx={{ 
                        fontWeight: "700", 
                        color: "#002d5c",
                        mb: 3
                      }}>
                        {useCase.title || "Use Case"}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ 
                        color: "#5a6c7d", 
                        lineHeight: 1.7,
                        mb: 4
                      }}>
                        {useCase.description || "Use case description"}
                      </Typography>
                      
                      <Box sx={{ mb: 4, flexGrow: 1 }}>
                        <Typography variant="subtitle2" sx={{ 
                          fontWeight: "600", 
                          color: "#002d5c",
                          mb: 2
                        }}>
                          Key Features:
                        </Typography>
                        
                        {(useCase.features || []).map((feature, featureIndex) => (
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }} key={featureIndex}>
                            <CheckCircleIcon sx={{ fontSize: 20, color: "#004d99", mr: 1.5 }} />
                            <Typography variant="body2" sx={{ color: "#5a6c7d" }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      
                      <Box sx={{ mt: "auto" }}>
                        <Typography variant="caption" sx={{ 
                          display: "block",
                          color: "#5a6c7d",
                          mb: 2,
                          fontStyle: "italic"
                        }}>
                          Ideal for: {useCase.idealFor || "Various applications"}
                        </Typography>
                        
                        <Button 
                          variant="outlined"
                          size="small"
                          sx={{ 
                            borderColor: "#004d99",
                            color: "#004d99",
                            "&:hover": { 
                              backgroundColor: "#004d99",
                              color: "white",
                              borderColor: "#004d99"
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
                  background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)",
                  color: "white",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                }}>
                  <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                    <Typography variant="h4" sx={{ 
                      fontWeight: "700", 
                      mb: 4,
                      textAlign: "center"
                    }}>
                      Common Benefits Across All Use Cases
                    </Typography>
                    
                    <Grid container spacing={4}>
                      {(useCases.commonBenefits || []).map((benefit, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Box sx={{ textAlign: "center", p: 3 }}>
                            {getIcon(benefit.icon)}
                            <Typography variant="h6" sx={{ fontWeight: "600", mb: 2 }}>
                              {benefit.title || "Benefit"}
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                              {benefit.description || "Benefit description"}
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
                          color: "#005EB8",
                          "&:hover": { 
                            backgroundColor: "#e6f2ff"
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