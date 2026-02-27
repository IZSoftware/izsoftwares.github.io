import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function HowMuchWillYourCloudAppProjectCost() {
  const factors = [
    "The number and complexity of app features.",
    "The development method for app features (built with ready cloud services or coded from scratch).",
    "The number of user roles.",
    "The complexity of the application logic and workflows.",
    "The number and complexity of integrations with other software systems.",
    "UI design uniqueness and complexity (including the number and complexity of screens).",
    "Government and industry regulations to comply with.",
    "The cloud to host the app and cloud services employed, and more.",
  ];

  const optimizationPoints = [
    {
      number: 1,
      text: "Comparing cost and capabilities of different clouds for each specific cloud app project.",
    },
    {
      number: 2,
      text: "Keeping up with unique cloud cost optimization opportunities from the most popular cloud vendors (Microsoft Azure, AWS, Google Cloud).",
    },
    {
      number: 3,
      text: "Designing an auto-scaling cloud app architecture and dynamic resource orchestration to achieve up to a 37% decrease in cloud hosting costs.",
    },
    {
      number: 4,
      text: "Introducing proven application performance management practices to achieve a 19% increase in cloud app performance.",
    },
    {
      number: 5,
      text: "Providing the cloud resource consumption optimization plan and helping with its implementation and continuous management on-demand.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            {/* Main Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#004d99",
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              }}
            >
              How Much Will Your Cloud App Project Cost?
            </Typography>

            {/* Factors list + image */}
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000000",
                    fontWeight: 600,
                    mb: 3,
                    lineHeight: 1.5,
                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  For accurate cost estimation, we take into account:
                </Typography>

                <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 4 }}>
                  {factors.map((factor, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: "#004d99",
                          mt: '10px',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.7,
                          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                        }}
                      >
                        {factor}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
                  <Button
                    component={Link}
                    to="/contact-us"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#004d99",
                      color: "white",
                      px: { xs: 4, sm: 5, md: 6 },
                      py: { xs: 1.5, sm: 1.8, md: 2 },
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                      "&:hover": {
                        backgroundColor: "#003366",
                      },
                    }}
                  >
                    Request a cost estimate
                  </Button>
                </Box>
              </Grid>

              {/* Image */}
              <Grid item xs={12} md={5}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  mt: { xs: 2, md: 0 }
                }}>
                  <img
                    src="/cost_calculation.svg"
                    alt="Cloud app cost estimation illustration"
                    style={{
                      width: "100%",
                      maxWidth: { xs: 300, sm: 400, md: '100%' },
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Optimization Points */}
            <Box sx={{ mt: { xs: 8, md: 12 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#004d99",
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                }}
              >
                How We Help Optimize Cloud App Costs
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#4a5568",
                  lineHeight: 1.6,
                  mb: 5,
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Our consultants provide an efficient cloud resource utilization plan through:
              </Typography>

              <Box component="ol" sx={{ pl: 0, listStyle: 'none', counterReset: 'item' }}>
                {optimizationPoints.map((point, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: { xs: 4, md: 5 },
                      counterIncrement: 'item',
                      flexDirection: { xs: 'column', sm: 'row' },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: { xs: 44, sm: 48, md: 52 },
                        height: { xs: 44, sm: 48, md: 52 },
                        backgroundColor: "#e6f2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: { xs: 0, sm: 3 },
                        mb: { xs: 2, sm: 0 },
                        mt: 0.5,
                        flexShrink: 0,
                        border: "2px solid #004d99",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: "#004d99",
                          fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                        }}
                      >
                        {point.number}
                      </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#000000",
                          fontWeight: 700,
                          mb: 1,
                          lineHeight: 1.4,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        }}
                      >
                        {point.text.split('.')[0] + '.'}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.8,
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        }}
                      >
                        {point.text}
                      </Typography>
                    </Box>
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