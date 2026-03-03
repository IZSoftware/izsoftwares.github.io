import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import manufacturingData from '../Data/ManufacturingData.json';

// Hardcoded image paths for each technology
const technologyImages = {
  "Cloud Computing": "/cloud-computing.png",
  "Data Science": "/data-science.png",
  "Artificial Intelligence (AI)": "/artificial-intelligence.png",
};

export default function ManufacturingTechnologies() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#002d5c',
                mb: { xs: 3, md: 4 },
                textAlign: { xs: 'left', md: 'left' },
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                px: { xs: 2, md: 0 }
              }}
            >
              {manufacturingData.title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                mb: { xs: 4, md: 6 },
                textAlign: 'justify',
                maxWidth: '1200px',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                px: { xs: 2, md: 0 }
              }}
            >
              {manufacturingData.description}
            </Typography>

            {/* Grid of technology cards */}
            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
              {manufacturingData.technologies.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
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
                          transform: { xs: 'none', md: 'translateY(-8px)' },
                          boxShadow: { xs: 'none', md: '0 12px 32px rgba(0,0,0,0.1)' },
                          borderColor: { xs: '#e1e8f0', md: '#004d99' },
                        },
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
                      <Box sx={{ mb: { xs: 2, md: 3 }, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: { xs: 80, sm: 90, md: 100 },
                            height: { xs: 80, sm: 90, md: 100 },
                            margin: '0 auto',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: { xs: 'none', md: 'scale(1.08)' } },
                          }}
                        >
                          <img
                            src={technologyImages[item.title]}
                            alt={item.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: { xs: '12px', md: '16px' },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: isHovered ? '#004d99' : '#002d5c',
                          textAlign: 'center',
                          transition: 'color 0.3s ease',
                          fontSize: { 
                            xs: '1.1rem', 
                            sm: '1.2rem', 
                            md: '1.3rem', 
                            lg: '1.4rem' 
                          },
                          lineHeight: 1.4,
                          px: { xs: 0.5, md: 0 }
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Arrow icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 12, md: 16 },
                          right: { xs: 12, md: 16 },
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        {isHovered ? (
                          <ArrowForwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 20, md: 24 } 
                          }} />
                        ) : (
                          <ArrowOutwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 20, md: 24 }, 
                            opacity: 0.5 
                          }} />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {/* Reliable Partner Section - Plain (no card) */}
            <Box sx={{ mt: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#002d5c',
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
                  textAlign: { xs: 'left', md: 'left' }
                }}
              >
                {manufacturingData.reliablePartner.title}
              </Typography>

              <Box component="ul" sx={{ 
                pl: 0, 
                listStyle: 'none',
                m: 0
              }}>
                {manufacturingData.reliablePartner.bullets.map((bullet, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      mb: { xs: 2, md: 2.5 },
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: '#004d99',
                        fontSize: { xs: 20, md: 24 },
                        mr: { xs: 1.5, md: 2 },
                        mt: { xs: '2px', md: '2px' },
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#4a5568',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                        textAlign: 'justify',
                      }}
                    >
                      {bullet}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}