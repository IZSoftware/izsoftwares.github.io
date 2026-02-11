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
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Main Title – bigger */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#004d99",
                mb: 5,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '2.2rem', md: '3rem' },
              }}
            >
              How Much Will Your Cloud App Project Cost?
            </Typography>

            {/* Factors list + image */}
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000000",
                    fontWeight: 600,
                    mb: 4,
                    lineHeight: 1.5,
                  }}
                >
                  For accurate cost estimation, we take into account:
                </Typography>

                <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 5 }}>
                  {factors.map((factor, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: "#004d99",
                          mt: '12px',
                          mr: 2.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        {factor}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 5, textAlign: { xs: 'center', md: 'left' } }}>
                  <Button
                    component={Link}
                    to="/contact-us"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#004d99",
                      color: "white",
                      px: 6,
                      py: 2,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: "1.15rem",
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
                <img
                  src="/cost_calculation.svg"
                  alt="Cloud app cost estimation illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>

            {/* Optimization Points */}
            <Box sx={{ mt: 12 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#004d99",
                  mb: 5,
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
              >
                How We Help Optimize Cloud App Costs
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  lineHeight: 1.6,
                  mb: 6,
                  fontWeight: 500,
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
                      mb: 5,
                      counterIncrement: 'item',
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 52,
                        height: 52,
                        backgroundColor: "#e6f2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3.5,
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
                          mb: 1.5,
                          lineHeight: 1.4,
                        }}
                      >
                        {point.text.split('.')[0] + '.'}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          lineHeight: 1.8,
                          fontSize: '1.05rem',
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