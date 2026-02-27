import React, { useState } from 'react';
import { Box, Grid, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import retailSolutionsData from '../Data/RetailSolutions.json';

export default function RetailSoftwareSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            {/* Description from the image */}
            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                mb: { xs: 2, sm: 2.5, md: 3 },
                textAlign: 'left',
                maxWidth: '1200px',
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Retail IT solutions are meant to enhance the efficiency of back-office retail operations and create a customer-centric experience for digital and physical sales channels.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                mb: { xs: 4, sm: 5, md: 6 },
                textAlign: 'left',
                maxWidth: '1200px',
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Knowing the competitive nature of retail, ScienceSoft is committed to helping retailers boost their digital maturity and market resilience. Our wide service portfolio covers all IT needs of retail companies, from automating business operations and data analytics to launching new digital sales channels and ensuring the security of payments and customer data.
            </Typography>

            {/* Title */}
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 800,
                color: '#002d5c',
                mb: { xs: 4, sm: 5, md: 6 },
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
              Software Solutions for All Key Retail Processes
            </Typography>

            {/* Solution Cards */}
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {retailSolutionsData.map((solution, index) => {
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
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}