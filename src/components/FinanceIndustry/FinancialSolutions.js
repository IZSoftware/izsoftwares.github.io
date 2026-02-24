import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const componentImages = {
  "Loan Management Software": "/loan-management.png",
  "Debt Collection Systems": "/debt-collection.png",
  "Investment Portfolio Management Software": "/investment-portfolio.png",
  "Insurance Claims Processing System": "/insurance-claims.png",
  "Mobile banking Apps": "/mobile-banking.png",
  "Insurance Apps": "/insurance-apps.png",
  "Lending Apps": "/lending-apps.png",
  "Investor Portal": "/investor-portal.png",
};

const components = [
  {
    title: "Loan Management Software",
    category: "Software for financial operations"
  },
  {
    title: "Debt Collection Systems",
    category: "Software for financial operations"
  },
  {
    title: "Investment Portfolio Management Software",
    category: "Software for financial operations"
  },
  {
    title: "Insurance Claims Processing System",
    category: "Software for financial operations"
  },
  
  // Section 2: Customer facing apps
  {
    title: "Mobile banking Apps",
    category: "Customer Facing Apps"
  },
  {
    title: "Insurance Apps",
    category: "Customer Facing Apps"
  },
  {
    title: "Lending Apps",
    category: "Customer Facing Apps"
  },
  {
    title: "Investor Portal",
    category: "Customer Facing Apps"
  },
];

export default function FinancialSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Group components by category
  const softwareOperations = components.filter(item => item.category === "Software for financial operations");
  const customerApps = components.filter(item => item.category === "Customer Facing Apps");

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Main Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#002d5c',
                mb: 2,
                textAlign: 'left',
              }}
            >
              IT Solutions for Financial Companies We Specialise In
            </Typography>

            {/* Section 1: Software for financial operations */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#004d99',
                mt: 6,
                mb: 3,
                textAlign: 'left',
                fontSize: '1.75rem',
              }}
            >
              Software for financial operations
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
              {softwareOperations.map((item, index) => {
                const originalIndex = components.findIndex(c => c.title === item.title);
                const isHovered = hoveredIndex === originalIndex;

                return (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(originalIndex)}
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

                      {/* Image */}
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
                            src={componentImages[item.title]}
                            alt={item.title}
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
                          fontSize: '0.95rem',
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

            {/* Section 2: Customer facing apps */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#004d99',
                mb: 3,
                textAlign: 'left',
                fontSize: '1.75rem',
              }}
            >
              Customer Facing Apps
            </Typography>

            <Grid container spacing={3}>
              {customerApps.map((item, index) => {
                const originalIndex = components.findIndex(c => c.title === item.title);
                const isHovered = hoveredIndex === originalIndex;

                return (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <Box
                      onMouseEnter={() => setHoveredIndex(originalIndex)}
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

                      {/* Image */}
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
                            src={componentImages[item.title]}
                            alt={item.title}
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
                          fontSize: '0.95rem',
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