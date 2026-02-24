import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const heroImageUrl = '/cover-investment-portfolio-management-software.svg';

const HeroImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: 'auto',
  maxHeight: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(3),
  },
}));

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      pt: { xs: '100px', sm: '120px', md: '120px' },
      background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)",
      minHeight: '80vh'
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Grid 
                  container 
                  spacing={{ xs: 3, sm: 4, md: 6 }} 
                  alignItems="center" 
                  direction={{ xs: 'column-reverse', md: 'row' }}
                >
                  {/* Left side: text and buttons - appears second on mobile, first on desktop */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      py: { xs: 1, sm: 2 },
                      textAlign: { xs: 'center', md: 'left' }
                    }}>
                      <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                          fontWeight: 700,
                          fontSize: { 
                            xs: '1.75rem', 
                            sm: '2.2rem', 
                            md: '2.5rem', 
                            lg: '3rem' 
                          },
                          lineHeight: 1.2,
                          mb: 2,
                          color: '#ffffff',
                          px: { xs: 1, sm: 2, md: 0 }
                        }}
                      >
                        Financial IT Services and Solutions
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { 
                            xs: '0.95rem', 
                            sm: '1rem', 
                            md: '1.125rem' 
                          },
                          color: '#ffffff',
                          opacity: 0.9,
                          mb: 3,
                          maxWidth: { xs: '100%', md: '90%' },
                          px: { xs: 2, sm: 3, md: 0 },
                          mx: { xs: 'auto', md: 0 }
                        }}
                      >
                        Since 2005, ScienceSoft has been an end-to-end technology partner for companies from the finance sector, helping them smoothly digitalize their business operations and deliver top-of-the-line customer experience despite time and budget constraints and changing requirements.
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        gap: 2, 
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        px: { xs: 2, sm: 3, md: 0 }
                      }}>
                        <Button
                          variant="contained"
                          size="large"
                          sx={{
                            backgroundColor: '#ffffff',
                            color: '#004d99',
                            fontWeight: 600,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1.2, sm: 1.5 },
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            '&:hover': {
                              backgroundColor: '#f0f0f0',
                            },
                          }}
                        >
                          Success stories
                        </Button>
                        <Button
                          variant="outlined"
                          size="large"
                          onClick={() => navigate('/contact-us')}
                          sx={{
                            borderColor: '#ffffff',
                            color: '#ffffff',
                            fontWeight: 600,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1.2, sm: 1.5 },
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            '&:hover': {
                              borderColor: '#f0f0f0',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          Discuss my needs
                        </Button>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Right side: image - appears first on mobile, second on desktop */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      py: { xs: 0.5, sm: 1 },
                      px: { xs: 2, sm: 3, md: 0 }
                    }}>
                      <HeroImage
                        src={heroImageUrl}
                        alt="Financial IT Services"
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