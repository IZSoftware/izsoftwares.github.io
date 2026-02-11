import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Divider image at top
import CyberThreatsDivider from '../../assets/images/cybersecurity banner.png';

// Hardcoded image paths for each component (change these to your actual files in public/ or src/assets/)
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
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Divider image at top */}
            <Box sx={{ mb: 6, width: '100%' }}>
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
                mb: 4,
                textAlign: 'left',
              }}
            >
              IT Components We Secure
            </Typography>

            {/* Grid of cards */}
            <Grid container spacing={3}>
              {components.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        height: '100%',
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e8f0',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                          borderColor: '#004d99',
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
                      <Box sx={{ mb: 3, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            margin: '0 auto',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            backgroundColor: '#f0f4f8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.08)' },
                          }}
                        >
                          <img
                            src={componentImages[item.title] || componentImages.__fallback__}
                            alt={`${item.title} illustration`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: '8px',
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
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Arrow icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        {isHovered ? (
                          <ArrowForwardIcon sx={{ color: '#004d99', fontSize: 24 }} />
                        ) : (
                          <ArrowOutwardIcon sx={{ color: '#004d99', fontSize: 24, opacity: 0.5 }} />
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
