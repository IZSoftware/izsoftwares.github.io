import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StatsItem from '../ConnectSphere/StatsItem';

export default function ITSolutionsGains() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const statsData = [
    { 
      value: "+15-50%", 
      label: "employee productivity increase via convenient tools and improved collaboration" 
    },
    { 
      value: "+5-15%", 
      label: "revenue per employee via increased company productivity due to customer self-service" 
    },
    { 
      value: "+20-100%", 
      label: "revenue due to new digital channels" 
    },
    { 
      value: "+15-30%", 
      label: "sales due to marketing and sales automation" 
    },
    { 
      value: "99.99%", 
      label: "IT service availability" 
    },
    { 
      value: "-5-35%", 
      label: "IT operating costs" 
    },
  ];

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 5, md: 6, lg: 10 }, 
      backgroundColor: '#f8f9fa' 
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            
            {/* Main Title */}
            <Box sx={{ mb: { xs: 3, sm: 3.5, md: 4 } }}>
              <Typography 
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  fontWeight: 800,
                  color: '#002d5c',
                  lineHeight: 1.2,
                  fontSize: { 
                    xs: '1.75rem', 
                    sm: '2.2rem', 
                    md: '2.5rem', 
                    lg: '3rem' 
                  },
                  pr: { xs: 1, sm: 2, md: 0 }
                }}
              >
                Equip Your Professional Services Business with IT Solutions Right Now
              </Typography>
            </Box>

            {/* Description  */}
            <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
              <Typography 
                variant="body1" 
                sx={{
                  color: '#4a5568',
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.1rem', 
                    md: '1.2rem' 
                  },
                  lineHeight: 1.6,
                  maxWidth: '1000px',
                  pr: { xs: 1, sm: 2, md: 0 }
                }}
              >
                By leveraging IT at your professional services company, you can achieve a number of gains, including:
              </Typography>
            </Box>

            {/* Stats Grid  */}
            <Box sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
              <Grid 
                container 
                spacing={{ xs: 3, sm: 3.5, md: 4, lg: 5 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {statsData.map((stat, index) => (
                  <Grid item xs={4} sm={4} md={4} key={index}>
                    <StatsItem 
                      number={stat.value} 
                      label={stat.label} 
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Bottom CTA Card   */}
            <Paper
              elevation={isMobile ? 2 : 3}
              sx={{
                borderRadius: { xs: 3, sm: 3.5, md: 4 },
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                border: '1px solid #e1e8f0',
              }}
            >
              <Box
                sx={{
                  p: { xs: 3, sm: 3.5, md: 4, lg: 5 },
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  alignItems: { xs: 'stretch', sm: 'stretch', md: 'center' },
                  justifyContent: 'space-between',
                  gap: { xs: 3, sm: 3.5, md: 4 },
                }}
              >
                {/* Left side - Text */}
                <Box sx={{ flex: 1, width: '100%' }}>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                      fontWeight: 700,
                      color: '#002d5c',
                      mb: { xs: 1, sm: 1.2, md: 1.5 },
                      fontSize: { 
                        xs: '1.5rem', 
                        sm: '1.75rem', 
                        md: '1.8rem', 
                        lg: '2rem' 
                      },
                      lineHeight: 1.2,
                    }}
                  >
                    Profit by IT Solutions for Professional Services!
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4a5568',
                      fontSize: { 
                        xs: '0.95rem', 
                        sm: '1rem', 
                        md: '1.05rem', 
                        lg: '1.1rem' 
                      },
                      lineHeight: 1.6,
                      maxWidth: { xs: '100%', md: '800px' },
                      pr: { xs: 0, md: 2 }
                    }}
                  >
                    Reach out to ScienceSoft's team right NOW to learn how to streamline service delivery and raise the productivity of your business with IT.
                  </Typography>
                </Box>

                {/* Right side - Button */}
                <Button
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  onClick={() => navigate('/contact-us')}
                  fullWidth={isMobile}
                  sx={{
                    backgroundColor: '#004d99',
                    color: '#ffffff',
                    fontWeight: 700,
                    px: { xs: 3, sm: 4, md: 5 },
                    py: { xs: 1.5, sm: 1.6, md: 1.8 },
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem', lg: '1.1rem' },
                    borderRadius: '8px',
                    whiteSpace: { xs: 'normal', sm: 'nowrap', md: 'nowrap' },
                    minWidth: { xs: '100%', sm: '200px', md: '220px' },
                    boxShadow: '0 4px 12px rgba(0,77,153,0.2)',
                    '&:hover': {
                      backgroundColor: '#002d5c',
                      transform: isMobile ? 'none' : 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,77,153,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a consultation
                </Button>
              </Box>
            </Paper>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}