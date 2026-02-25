import React, { useState } from 'react';
import { Box, Grid, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

import solutionsData from '../Data/ProfessionalServicesSolutions.json';

export default function SoftwareSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            {/* Title - Responsive */}
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 800,
                color: '#002d5c',
                mb: 2,
                textAlign: 'left',
                fontSize: {
                  xs: '1.75rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem'
                },
                lineHeight: 1.2,
              }}
            >
              Software Solutions for Professional Services Companies
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                mb: { xs: 4, sm: 5, md: 6 },
                textAlign: 'left',
                maxWidth: '1000px',
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: 1.6,
                pr: { xs: 1, sm: 2, md: 0 }
              }}
            >
              IT solutions for professional services allow businesses to digitalize service delivery and automate internal operations for increased productivity and a competitive advantage in their industry.
            </Typography>

            {/* solution cards  */}
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {solutionsData.map((solution, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} key={solution.id}>
                    <Box
                      onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                      onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                      sx={{
                        height: '100%',
                        p: { xs: 2.5, sm: 2.5, md: 3 },
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e8f0',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: !isMobile ? 'translateY(-8px)' : 'none',
                          boxShadow: !isMobile ? '0 12px 32px rgba(0,0,0,0.1)' : 'none',
                          borderColor: !isMobile ? '#004d99' : '#e1e8f0',
                        },
                        boxShadow: isHovered && isMobile ? '0 8px 24px rgba(0,77,153,0.15)' : 'none',
                        borderColor: isHovered && isMobile ? '#004d99' : '#e1e8f0',
                      }}
                    >
                      {/* Bottom animated blue line */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '4px',
                          backgroundColor: '#004d99',
                          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: 'transform 0.4s ease',
                        }}
                      />

                      {/* Image */}
                      <Box sx={{ mb: 2, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: { xs: '60px', sm: '70px', md: '80px' },
                          }}
                        >
                          <img
                            src={solution.image}
                            alt={solution.title}
                            style={{
                              maxWidth: '100%',
                              maxHeight: isMobile ? '50px' : isTablet ? '60px' : '70px',
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain',
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant={isMobile ? "subtitle1" : "h6"}
                        sx={{
                          fontWeight: 700,
                          color: isHovered ? '#004d99' : '#002d5c',
                          textAlign: 'left',
                          transition: 'color 0.3s ease',
                          mb: 1.5,
                          fontSize: {
                            xs: '1rem',
                            sm: '1.05rem',
                            md: '1.1rem'
                          },
                        }}
                      >
                        {solution.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          lineHeight: 1.7,
                          textAlign: 'justify',
                          flexGrow: 1,
                          fontSize: {
                            xs: '0.875rem',
                            sm: '0.9rem',
                            md: '0.95rem'
                          },
                        }}
                      >
                        {solution.description}
                      </Typography>

                      {/* Arrow icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 12, sm: 16 },
                          right: { xs: 12, sm: 16 },
                          opacity: isMobile ? (isHovered ? 1 : 0.5) : (isHovered ? 1 : 0),
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        {isHovered ? (
                          <ArrowForwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 20, sm: 22, md: 24 } 
                          }} />
                        ) : (
                          <ArrowOutwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 20, sm: 22, md: 24 },
                            opacity: isMobile ? 0.5 : 0.5
                          }} />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                );
              })}

              {/* Looking for Something Specific? Card */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: { xs: 3, sm: 3.5, md: 4 },
                    p: { xs: 3, sm: 3.5, md: 4 },
                    borderRadius: 3,
                    background: '#fff',
                    color: '#002d5c',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    gap: { xs: 2.5, sm: 3, md: 3 },
                    boxShadow: '0 8px 24px rgba(0,77,153,0.2)',
                  }}
                >
                  {/* Left side - Text */}
                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        fontWeight: 700,
                        mb: { xs: 1, sm: 1, md: 1 },
                        fontSize: { 
                          xs: '1.5rem', 
                          sm: '1.75rem', 
                          md: '2rem' 
                        },
                        lineHeight: 1.2,
                      }}
                    >
                      Looking for Something Specific?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.9,
                        maxWidth: '1200px',
                        fontSize: { 
                          xs: '0.95rem', 
                          sm: '1rem', 
                          md: '1.1rem' 
                        },
                        lineHeight: 1.6,
                      }}
                    >
                      Professional services are diverse, and so is the sector's preferred software. Share your business needs with us to discuss how we can help with a tailored solution.
                    </Typography>
                  </Box>

                  {/* Right side - Button */}
                  <Button
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    onClick={() => navigate('/contact-us')}
                    fullWidth={isMobile}
                    sx={{
                      backgroundColor: '#ffffff',
                      border: '2px solid #004d99',
                      color: '#004d99',
                      fontWeight: 700,
                      px: { xs: 3, sm: 3.5, md: 4 },
                      py: { xs: 1.2, sm: 1.3, md: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                      whiteSpace: { xs: 'normal', sm: 'nowrap', md: 'nowrap' },
                      minWidth: { xs: '100%', sm: '200px', md: '150px' },
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#004d99',
                        color: '#ffffff',
                        transform: isMobile ? 'none' : 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Let's talk
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}