import React from 'react';
import { Box, Container, Grid, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const heroImageUrl = '/it-services-and-solutions-for-retail-cover-01.svg';

const HeroImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: 'auto',
  maxHeight: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
  objectFit: 'contain',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
  },
}));

const HeroPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      pt: { xs: '80px', sm: '90px', md: '100px', lg: '120px' },
      pb: { xs: 4, sm: 5, md: 6, lg: 8 },
      background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)",
      minHeight: { xs: 'auto', sm: 'auto', md: '80vh' },
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={11} lg={10}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Grid 
                  container 
                  spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }} 
                  alignItems="center" 
                  direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
                >
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      py: { xs: 0.5, sm: 1, md: 2 },
                      textAlign: { xs: 'center', sm: 'center', md: 'left' },
                      px: { xs: 1, sm: 2, md: 0 }
                    }}>
                      <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                          fontWeight: 800,
                          fontSize: { 
                            xs: '1.5rem', 
                            sm: '1.8rem', 
                            md: '2.2rem', 
                            lg: '2.5rem', 
                            xl: '3rem' 
                          },
                          lineHeight: { xs: 1.3, sm: 1.2 },
                          mb: { xs: 1.5, sm: 2, md: 2.5 },
                          color: '#ffffff',
                          px: { xs: 0.5, sm: 1, md: 0 },
                          maxWidth: { xs: '100%', md: '95%', lg: '90%' },
                          mx: { xs: 'auto', md: 0 }
                        }}
                      >
                      IT Services & Solutions for Retail
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { 
                            xs: '0.875rem', 
                            sm: '0.95rem', 
                            md: '1rem', 
                            lg: '1.125rem' 
                          },
                          color: '#ffffff',
                          opacity: 0.9,
                          mb: { xs: 2, sm: 2.5, md: 3 },
                          maxWidth: { xs: '100%', md: '95%', lg: '90%' },
                          px: { xs: 1, sm: 2, md: 0 },
                          mx: { xs: 'auto', md: 0 },
                          lineHeight: { xs: 1.6, sm: 1.7 }
                        }}
                      >
                        Since 2022, IZSoftwares has been helping retail companies launch digital customer service channels and build tailored software solutions for business process management.
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: 1.5, sm: 2 }, 
                        flexWrap: 'wrap',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
                        alignItems: 'center',
                        px: { xs: 1, sm: 2, md: 0 },
                        maxWidth: { xs: '100%', sm: '400px', md: '100%' },
                        mx: { xs: 'auto', sm: 'auto', md: 0 }
                      }}>
                        <Button
                          variant="contained"
                          size={isMobile ? "medium" : "large"}
                          onClick={() => navigate('/get-quote')}
                          sx={{
                            backgroundColor: '#ffffff',
                            color: '#004d99',
                            fontWeight: 700,
                            px: { xs: 3, sm: 3.5, md: 4 },
                            py: { xs: 1, sm: 1.2, md: 1.5 },
                            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            '&:hover': {
                              backgroundColor: '#f5f5f5',
                              boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Get a quote
                        </Button>
                        <Button
                          variant="outlined"
                          size={isMobile ? "medium" : "large"}
                          onClick={() => navigate('/contact-us')}
                          sx={{
                            borderColor: '#ffffff',
                            borderWidth: '2px',
                            color: '#ffffff',
                            fontWeight: 700,
                            px: { xs: 3, sm: 3.5, md: 4 },
                            py: { xs: 1, sm: 1.2, md: 1.5 },
                            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            borderRadius: '8px',
                            '&:hover': {
                              borderColor: '#ffffff',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderWidth: '2px',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Discuss my needs
                        </Button>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      py: { xs: 0.5, sm: 1 },
                      px: { xs: 1, sm: 2, md: 0 },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <HeroImage
                        src={heroImageUrl}
                        alt="IT Solutions for Professional Services"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroPage;