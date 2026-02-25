import React, { useState } from 'react';
import { Box, Grid, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import servicesData from '../Data/ITServicesData.json';

export default function ChooseITServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 5, md: 6, lg: 10 }, 
      backgroundColor: '#f8fafc' 
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            {/* Main Title  */}
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
              Choose Your IT Services
            </Typography>

            {/* Two cards grid */}
            <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }}>
              {servicesData.map((service, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} md={6} key={service.id}>
                    <Box
                      onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                      onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e8f0',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
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
                      {/* Primary color top bar */}
                      <Box
                        sx={{
                          height: { xs: '6px', sm: '7px', md: '8px' },
                          width: '100%',
                          backgroundColor: '#004d99',
                        }}
                      />

                      {/* Bottom animated blue line */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: { xs: '3px', sm: '3.5px', md: '4px' },
                          backgroundColor: '#004d99',
                          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: 'transform 0.4s ease',
                        }}
                      />

                      <Box sx={{ 
                        p: { xs: 3, sm: 3.5, md: 4 }, 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column' 
                      }}>
                        {/* Image  */}
                        <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 }, textAlign: 'center' }}>
                          <Box
                            sx={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              style={{
                                maxWidth: '100%',
                                maxHeight: isMobile ? '120px' : isTablet ? '150px' : '180px',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Title below image */}
                        <Typography
                          variant={isMobile ? "h6" : "h5"}
                          sx={{
                            fontWeight: 700,
                            color: isHovered ? '#004d99' : '#002d5c',
                            mb: { xs: 2, sm: 2.5, md: 3 },
                            textAlign: 'left',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.3,
                            fontSize: { 
                              xs: '1.1rem', 
                              sm: '1.25rem', 
                              md: '1.5rem' 
                            },
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Sections with list items */}
                        <Box sx={{ flexGrow: 1 }}>
                          {service.sections.map((section, idx) => (
                            <Box key={idx} sx={{ mb: idx < service.sections.length - 1 ? { xs: 2, sm: 2.5, md: 3 } : 0 }}>
                              {section.heading && (
                                <Typography
                                  variant={isMobile ? "body1" : "subtitle1"}
                                  sx={{
                                    fontWeight: 700,
                                    color: '#002d5c',
                                    mb: { xs: 1, sm: 1.2, md: 1.5 },
                                    fontSize: { 
                                      xs: '0.95rem', 
                                      sm: '1rem', 
                                      md: '1.1rem' 
                                    },
                                  }}
                                >
                                  {section.heading}
                                </Typography>
                              )}

                              {/* List items  */}
                              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                                {section.items.map((item, itemIdx) => (
                                  <Box
                                    key={itemIdx}
                                    component="li"
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: { xs: 1, sm: 1.2, md: 1.5 },
                                      mb: { xs: 1, sm: 1.2, md: 1.5 },
                                      '&:last-child': { mb: 0 },
                                    }}
                                  >
                                    {/* Bullet point  */}
                                    <Box
                                      sx={{
                                        width: { xs: 5, sm: 5.5, md: 6 },
                                        height: { xs: 5, sm: 5.5, md: 6 },
                                        borderRadius: '50%',
                                        backgroundColor: '#004d99',
                                        mt: { xs: 1, sm: 1.2, md: 1.5 },
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: '#4a5568',
                                        lineHeight: 1.7,
                                        fontSize: { 
                                          xs: '0.875rem', 
                                          sm: '0.9rem', 
                                          md: '1rem' 
                                        },
                                      }}
                                    >
                                      {item}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>

                        {/* Button inside card  */}
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: { xs: 'stretch', sm: 'center' }, 
                          mt: { xs: 3, sm: 3.5, md: 4 } 
                        }}>
                          <Button
                            variant="contained"
                            onClick={() => navigate('/contact-us')}
                            fullWidth={isMobile}
                            sx={{
                              backgroundColor: '#004d99',
                              color: '#ffffff',
                              fontWeight: 600,
                              px: { xs: 3, sm: 3.5, md: 4 },
                              py: { xs: 1, sm: 1.1, md: 1.2 },
                              fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.95rem' },
                              borderRadius: '8px',
                              minWidth: { xs: '100%', sm: '140px', md: '140px' },
                              '&:hover': {
                                backgroundColor: '#002d5c',
                              },
                            }}
                          >
                            Let's talk
                          </Button>
                        </Box>
                      </Box>

                      {/* Arrow icon  */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 12, sm: 14, md: 16 },
                          right: { xs: 12, sm: 14, md: 16 },
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