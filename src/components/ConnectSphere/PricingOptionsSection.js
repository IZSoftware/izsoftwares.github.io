import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export default function PricingOptionsSection() {
  const pricingOptions = [
    {
      title: "Fixed price",
      iconSrc: "/price-tag.png",
      bestFor: "Feasibility study, PoC, small cloud projects with clear and stable requirements.",
      description: "You pay the price established by a contract.",
    },
    {
      title: "Time & Material, Time & Material with a cap",
      iconSrc: "/hourglass.png",
      bestFor:
        "advisory activities (business analysis, architecture design, project planning, etc.), agile cloud app development and implementation, cloud app evolution (introducing substantial changes or adding new functionality).",
      description:
        "You receive the end-of-the-month invoice based on the hours or efforts reported per month (under the stated upper limit in case of T&M with a cap).",
    },
    {
      title: "Per-ticket pricing",
      iconSrc: "/tickets.png",
      bestFor: "L1, L2 cloud application support.",
      description:
        "At the start of cooperation, we define the ticket cost, and you get charged based on the volume of incidents we resolve monthly.",
    },
    {
      title: "Fixed monthly fee",
      iconSrc: "/fees.png",
      bestFor: "L3 cloud application support (in-code defect fixes, functional changes).",
      description:
        "At the start of cooperation, we define the hourly rate for cloud app support activities. After the service is delivered, you pay for a bunch of hours during which we've been providing support.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            {/* Section title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#004283",
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
              }}
            >
              Pricing Options for Our Services
            </Typography>

            {/* Cards grid */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {pricingOptions.map((option, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      border: "1px solid #e0e0e0",
                      borderRadius: 3,
                      backgroundColor: "#ffffff",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: { xs: "#e0e0e0", md: "#004283" },
                        boxShadow: { xs: "none", md: "0 8px 24px rgba(0,66,131,0.12)" },
                        transform: { xs: "none", md: "translateY(-4px)" },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, textAlign: "left" }}>
                      {/* Icon */}
                      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            width: { xs: 56, sm: 64 },
                            height: { xs: 56, sm: 64 },
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={option.iconSrc}
                            alt={`${option.title} icon`}
                            style={{
                              width: "72%",
                              height: "72%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#004283",
                          mb: 2,
                          textAlign: "center",
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        }}
                      >
                        {option.title}
                      </Typography>

                      {/* Best for */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "#000000",
                          mb: 2,
                          lineHeight: 1.5,
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        }}
                      >
                        <strong>Best for:</strong> {option.bestFor}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.7,
                          fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                        }}
                      >
                        {option.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}