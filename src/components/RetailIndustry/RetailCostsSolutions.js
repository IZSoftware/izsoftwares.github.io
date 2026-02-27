import React, { useState } from 'react';
import { Box, Grid, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import retailCostsData from '../Data/RetailCostsData.json';

export default function RetailCostsSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            
            {/* Main Title */}
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
              Sample Costs of Custom IT Solutions for Retail
            </Typography>

            {/* Solution Cards */}
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {retailCostsData.map((solution, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} md={6} key={solution.id}>
                    <Box
                      onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                      onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                      sx={{
                        height: '100%',
                        p: { xs: 3, sm: 3.5, md: 4 },
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
                      <Box sx={{ mb: 2.5, textAlign: 'center' }}>
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
                        variant={isMobile ? "h6" : "h5"}
                        sx={{
                          fontWeight: 700,
                          color: isHovered ? '#004d99' : '#002d5c',
                          textAlign: 'left',
                          transition: 'color 0.3s ease',
                          mb: 1,
                          fontSize: {
                            xs: '1.1rem',
                            sm: '1.2rem',
                            md: '1.3rem'
                          },
                        }}
                      >
                        {solution.title}
                      </Typography>

                      {/* Price */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: '#333',
                          mb: 2,
                          fontSize: {
                            xs: '0.8rem',
                            sm: '0.9rem',
                            md: '1.0rem'
                          },
                        }}
                      >
                        {solution.price}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          lineHeight: 1.7,
                          textAlign: 'left',
                          mb: 1.5,
                          fontSize: {
                            xs: '0.95rem',
                            sm: '1rem',
                            md: '1rem'
                          },
                          fontWeight: 500,
                        }}
                      >
                        {solution.description}
                      </Typography>

                      {/* Features List */}
                      <Box component="ul" sx={{ 
                        m: 0, 
                        pl: 2, 
                        color: '#4a5568',
                        fontSize: {
                          xs: '0.875rem',
                          sm: '0.9rem',
                          md: '0.95rem'
                        },
                        lineHeight: 1.7,
                      }}>
                        {solution.features.map((feature, idx) => (
                          <li key={idx} style={{ marginBottom: '4px' }}>
                            {feature}
                          </li>
                        ))}
                      </Box>

                      {/* Arrow icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 16, sm: 20 },
                          right: { xs: 16, sm: 20 },
                          opacity: isMobile ? (isHovered ? 1 : 0.5) : (isHovered ? 1 : 0),
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        {isHovered ? (
                          <ArrowForwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 22, sm: 24, md: 26 } 
                          }} />
                        ) : (
                          <ArrowOutwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 22, sm: 24, md: 26 },
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