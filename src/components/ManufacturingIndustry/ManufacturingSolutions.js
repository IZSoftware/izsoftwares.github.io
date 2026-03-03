import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import manufacturingData from '../Data/ManufacturingSolutions.json';

const componentImages = {
  "High-level management and business operations": "/management-operations.png",
  "Production process and asset management": "/production-asset.png",
  "Procurement and vendor management": "/procurement-vendor.png",
  "Sales and customer management": "/sales-customer.png",
};

export default function ManufacturingSolutions() {
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

            {/* Grid of category cards */}
            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
              {manufacturingData.categories.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        height: '100%',
                        p: { xs: 2.5, sm: 3, md: 3.5 },
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
                      <Box sx={{ mb: { xs: 2, md: 2.5 }, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: { xs: 70, sm: 75, md: 80 },
                            height: { xs: 70, sm: 75, md: 80 },
                            margin: '0 auto',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            backgroundColor: '#f0f4f8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: { xs: 'none', md: 'scale(1.08)' } },
                          }}
                        >
                          <img
                            src={componentImages[item.title]}
                            alt={item.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: { xs: '8px', md: '10px' },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: isHovered ? '#004d99' : '#002d5c',
                          textAlign: 'center',
                          transition: 'color 0.3s ease',
                          fontSize: { 
                            xs: '1rem', 
                            sm: '1.05rem', 
                            md: '1.1rem', 
                            lg: '1.2rem' 
                          },
                          lineHeight: 1.4,
                          mb: { xs: 1.5, md: 2 },
                          px: { xs: 0.5, md: 0 },
                          minHeight: { xs: 'auto', sm: '50px', md: '55px' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Bullet Points - ALL bullets displayed, no truncation */}
                      <Box component="ul" sx={{ 
                        m: 0, 
                        pl: { xs: 1.5, sm: 2 },
                        pr: { xs: 0.5, sm: 1 },
                        listStyle: 'none',
                        flexGrow: 1,
                      }}>
                        {item.bullets.map((bullet, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              mb: 1,
                              display: 'flex',
                              alignItems: 'flex-start',
                              color: '#4a5568',
                              lineHeight: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: { xs: 4, sm: 5 },
                                height: { xs: 4, sm: 5 },
                                borderRadius: '50%',
                                backgroundColor: '#004d99',
                                mt: '8px',
                                mr: { xs: 1.5, sm: 2 },
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                lineHeight: 1.5,
                                color: '#4a5568',
                              }}
                            >
                              {bullet}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

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
                            fontSize: { xs: 18, md: 22 } 
                          }} />
                        ) : (
                          <ArrowOutwardIcon sx={{ 
                            color: '#004d99', 
                            fontSize: { xs: 18, md: 22 }, 
                            opacity: 0.5 
                          }} />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {/* Industry 4.0 Section - Plain text without card background */}
            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#002d5c',
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
                  textAlign: { xs: 'left', md: 'left' }
                }}
              >
                {manufacturingData.industry4.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  mb: { xs: 3, md: 4 },
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                  textAlign: 'justify',
                }}
              >
                {manufacturingData.industry4.description}
              </Typography>

              <Box component="ul" sx={{ 
                pl: 0, 
                listStyle: 'none',
                m: 0
              }}>
                {manufacturingData.industry4.bullets.map((bullet, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      mb: { xs: 1.5, md: 2 },
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 6, md: 8 },
                        height: { xs: 6, md: 8 },
                        borderRadius: '50%',
                        backgroundColor: '#004d99',
                        mt: { xs: '6px', md: '8px' },
                        mr: { xs: 1.5, md: 2 },
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#4a5568',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
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