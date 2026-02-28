import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Divider image at top
import CyberThreatsDivider from '../../assets/images/cybersecurity banner.png';

// Hardcoded image paths for each component
const componentImages = {
  "Cloud Environment": "/cloud (2).png",
  "Databases, Data Warehouses and Data Lakes": "/database.png",
  "Internal and External Networks": "/network.png",
  "Web, Mobile and Desktop Apps": "/ux.png",
  "Websites and Web Portals": "/website.png",
  "APIs and Microservices": "/structure.png",
  "Email Services": "/email.png",
  "Security Policies and Practices": "/privacy-policy.png",
};

const components = [
  {
    title: "Cloud Environment",
  },
  {
    title: "Databases, Data Warehouses and Data Lakes",
  },
  {
    title: "Internal and External Networks",
  },
  {
    title: "Web, Mobile and Desktop Apps",
  },
  {
    title: "Websites and Web Portals",
  },
  {
    title: "APIs and Microservices",
  },
  {
    title: "Email Services",
  },
  {
    title: "Security Policies and Practices",
  },
];

export default function ITComponentsWeSecure() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Divider image at top */}
            <Box sx={{ mb: { xs: 4, md: 6 }, width: '100%' }}>
              <img
                src={CyberThreatsDivider}
                alt="Cyber threats illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: 0,
                  padding: 0,
                }}
              />
            </Box>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#002d5c',
                mb: { xs: 4, md: 4 },
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                px: { xs: 2, md: 0 }
              }}
            >
              IT Components We Secure
            </Typography>

            {/* Grid of cards */}
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {components.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        height: '100%',
                        p: { xs: 2.5, sm: 3, md: 4 },
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e8f0',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
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

                      {/* Image instead of icon */}
                      <Box sx={{ mb: { xs: 2, md: 3 }, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: { xs: 60, sm: 70, md: 80 },
                            height: { xs: 60, sm: 70, md: 80 },
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
                            src={componentImages[item.title] || componentImages.__fallback__}
                            alt={`${item.title} illustration`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: { xs: '6px', md: '8px' },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: isHovered ? '#004d99' : '#333333',
                          textAlign: 'center',
                          transition: 'color 0.3s ease',
                          fontSize: { 
                            xs: '0.95rem', 
                            sm: '1rem', 
                            md: '1.1rem', 
                            lg: '1.25rem' 
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}