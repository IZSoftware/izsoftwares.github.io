import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import LockIcon from '@mui/icons-material/LockOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function PricingOptionsSection() {
  const pricingOptions = [
    {
      title: "Fixed price",
      icon: LockIcon,
      bestFor: "Feasibility study, PoC, small cloud projects with clear and stable requirements.",
      description: "You pay the price established by a contract.",
    },
    {
      title: "Time & Material, Time & Material with a cap",
      icon: ScheduleIcon,
      bestFor:
        "advisory activities (business analysis, architecture design, project planning, etc.), agile cloud app development and implementation, cloud app evolution (introducing substantial changes or adding new functionality).",
      description:
        "You receive the end-of-the-month invoice based on the hours or efforts reported per month (under the stated upper limit in case of T&M with a cap).",
    },
    {
      title: "Per-ticket pricing",
      icon: ConfirmationNumberIcon,
      bestFor: "L1, L2 cloud application support.",
      description:
        "At the start of cooperation, we define the ticket cost, and you get charged based on the volume of incidents we resolve monthly.",
    },
    {
      title: "Fixed monthly fee",
      icon: CalendarTodayIcon,
      bestFor: "L3 cloud application support (in-code defect fixes, functional changes).",
      description:
        "At the start of cooperation, we define the hourly rate for cloud app support activities. After the service is delivered, you pay for a bunch of hours during which we’ve been providing support.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 4, sm: 6, md: 0 } }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Section title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                mb: 5,
                letterSpacing: "-0.5px",
              }}
            >
              Pricing Options for Our Services
            </Typography>

            {/* Cards grid */}
            <Grid container spacing={4}>
              {pricingOptions.map((option, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      border: "1px solid #e0e0e0",
                      borderRadius: 2,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#bdbdbd",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 5, textAlign: "justify" }}>
                      {/* Icon at top */}
                      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <option.icon sx={{ fontSize: 32, color: "#424242" }} />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: "#000000",
                          mb: 2,
                          textAlign: "center",
                        }}
                      >
                        {option.title}
                      </Typography>

                      {/* Best for */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          color: "#424242",
                          mb: 3,
                        }}
                      >
                        Best for: {option.bestFor}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "1.05rem",
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