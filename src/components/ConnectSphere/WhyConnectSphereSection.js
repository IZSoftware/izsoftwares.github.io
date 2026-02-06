import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  alpha,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function WhyConnectSphereSection({ whyConnectSphere, getIcon }) {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: "linear-gradient(135deg, #f8fafc 0%, #e6f2ff 100%)" 
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: "800", 
                color: "#002d5c"
              }}>
                {whyConnectSphere.title || "Why ConnectSphere?"}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: "#5a6c7d", 
                mt: 2,
                maxWidth: 800
              }}>
                {whyConnectSphere.subtitle || "Discover the benefits of our platform"}
              </Typography>
            </Box>

            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: "700", 
                    color: "#004d99",
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}>
                    <TrendingUpIcon sx={{ fontSize: 36 }} />
                    Business Benefits
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {(whyConnectSphere.businessBenefits || []).map((benefit, index) => (
                      <Grid item xs={12} key={index}>
                        <Card sx={{ 
                          borderRadius: 2,
                          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                          height: "100%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                          }
                        }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: "#e6f2ff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2
                              }}>
                                {getIcon(benefit.icon)}
                              </Box>
                              <Typography variant="h6" sx={{ fontWeight: "600", color: "#002d5c" }}>
                                {benefit.title || "Benefit"}
                              </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ color: "#5a6c7d", lineHeight: 1.7 }}>
                              {benefit.description || "Benefit description"}
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
                  <Typography variant="h4" sx={{ 
                    fontWeight: "700", 
                    color: "#004d99",
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}>
                    <SpeedIcon sx={{ fontSize: 36 }} />
                    Technical Advantages
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {(whyConnectSphere.technicalAdvantages || []).map((advantage, index) => (
                      <Grid item xs={12} key={index}>
                        <Card sx={{ 
                          borderRadius: 2,
                          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                          height: "100%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                          }
                        }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: "#e6f2ff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2
                              }}>
                                {getIcon(advantage.icon)}
                              </Box>
                              <Typography variant="h6" sx={{ fontWeight: "600", color: "#002d5c" }}>
                                {advantage.title || "Advantage"}
                              </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ color: "#5a6c7d", lineHeight: 1.7 }}>
                              {advantage.description || "Advantage description"}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ 
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)",
                  color: "white",
                  mt: 4,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                }}>
                  <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h4" sx={{ 
                        fontWeight: "700", 
                        mb: 4,
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                      }}>
                        <DashboardIcon sx={{ fontSize: 36, color: "white" }} />
                        {whyConnectSphere.unifiedPlatform?.title || "Why a Unified Platform?"}
                      </Typography>
                      
                      <Typography variant="h6" sx={{ 
                        opacity: 0.9, 
                        mb: 4,
                        lineHeight: 1.6
                      }}>
                        {whyConnectSphere.unifiedPlatform?.description || "Benefits of a unified cloud management platform"}
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {(whyConnectSphere.unifiedPlatform?.points || []).map((point, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Box sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: "600", mb: 2 }}>
                              {point.title || "Point"}
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                              {point.description || "Point description"}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Box sx={{ 
                      mt: 6, 
                      p: 4, 
                      backgroundColor: alpha('#fff', 0.1),
                      borderRadius: 2,
                      border: `1px solid ${alpha('#fff', 0.2)}`
                    }}>
                      <Typography variant="body1" sx={{ fontStyle: "italic", opacity: 0.9, lineHeight: 1.7 }}>
                        "{whyConnectSphere.unifiedPlatform?.testimonial || "Customer testimonial"}"
                      </Typography>
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