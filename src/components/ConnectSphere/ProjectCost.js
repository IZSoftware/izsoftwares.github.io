import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';

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
            {/* Main Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              How Much Will Your Cloud App Project Cost?
            </Typography>

            {/* Factors list + standalone image */}
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="body1" sx={{ color: "#5a6c7d", lineHeight: 1.7, mb: 3 }}>
                  For accurate cost estimation, ScienceSoft takes into account:
                </Typography>

                <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 4 }}>
                  {factors.map((factor, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2,
                        color: "#5a6c7d",
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: "#004d99",
                          mt: '10px',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                        {factor}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#004d99",
                      color: "white",
                      px: 5,
                      py: 1.8,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: "1.1rem",
                      "&:hover": {
                        backgroundColor: "#003366",
                      },
                    }}
                  >
                    Request a cost estimate
                  </Button>
                </Box>
              </Grid>

              {/* Image – completely standalone, no wrapper styling */}
              <Grid item xs={12} md={5}>
                <img
                  src="/images/cloud-cost-estimation-illustration.svg" // ← replace with your actual image path
                  alt="Cloud app cost estimation illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>

            {/* Second part: How ScienceSoft Helps Optimize Costs – plain list */}
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#002d5c",
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                How ScienceSoft Helps Optimize Cloud App Costs
              </Typography>

              <Typography variant="body1" sx={{ color: "#5a6c7d", lineHeight: 1.7, mb: 5 }}>
                ScienceSoft's consultants provide an efficient cloud resource utilization plan due to:
              </Typography>

              <Box component="ol" sx={{ pl: 0, listStyle: 'none', counterReset: 'item' }}>
                {optimizationPoints.map((point, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 4,
                      counterIncrement: 'item',
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 48,
                        height: 48,
                        backgroundColor: "#e6f2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                        mt: 0.5,
                        flexShrink: 0,
                        border: "2px solid #004d99",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#004d99",
                        }}
                      >
                        {point.number}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#5a6c7d",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {point.text}
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