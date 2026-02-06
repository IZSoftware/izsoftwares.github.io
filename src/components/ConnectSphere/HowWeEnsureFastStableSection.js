import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export default function HowWeEnsureFastStableSection() {
  const points = [
    {
      title: "Predictable project budget",
      description:
        "At IZSoftwares, we honestly tell the required investments and provide clear rationale behind the estimates to prove their fairness. We deliver free ballpark estimates before the cooperation start so that you can accurately plan expenses and reiterate estimates at later stages to enhance cost precision. Our teams control budget utilization and proactively suggest ways to optimize costs.",
    },
    {
      title: "Quick tangible results",
      description:
        "IZSoftwares’s rapid customer onboarding flow enables a cooperation start in 1–3 weeks. We rely on our established Agile culture to deliver iteratively and provide daily minor releases and major releases each 2–3 weeks.",
    },
    {
      title: "Simplified code maintenance",
      description:
        "We provide comprehensive coding documentation, optimize software architecture, use tried-and-tested development practices and tools defined by the Cloud Native Computing Foundation (CNCF), and have quality controls at each SDLC stage.",
    },
    {
      title: "A high level of automation",
      description:
        "Practicing DevOps for over a decade, we expertly automate code integration, testing, and monitoring to deploy as frequently as several times a day with a change failure rate of <5%.",
    },
    {
      title: "Incorporated industry specifics",
      description:
        "With hands-on experience in 30+ industries, our IT consultants and software developers are quick to deeply understand your challenges and needs, translate them into an accurate project scope, and create the optimal solutions to meet your business goals.",
    },
    {
      title: "Experienced project managers and well-defined communication points",
      description:
        "Our PMs arrange a high-performing development team, considering our talents’ domain expertise, seniority, experience with similar projects, and complementary skills. They professionally tackle risks, propel fast collaborative processing of change requests, and act as a single point of contact to ensure smooth communication between business and cross-functional distributed teams.",
    },
    {
      title: "Self-managed cross-functional teams",
      description:
        "Our teams can include a team lead, developers, DevOps engineers, testers, IT consultants, designers, and other roles. Regardless of the composition, our teams are trained to work independently, take full responsibility for the quality of deliverables, and consistently share knowledge with client stakeholders. Our team leads regularly report the fulfilled tasks to keep the client updated on project progress.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Title & description – left-aligned, full width */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#002d5c",
                  textAlign: 'left',           // ← changed to left
                }}
              >
                How We Ensure Fast and Stable Cloud App Development
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#5a6c7d",
                  lineHeight: 1.7,
                  textAlign: 'justify',        // ← justified for clean paragraph
                }}
              >
                IZSoftwares brings mature development and project management practices and deep multi-domain expertise to steadily drive cloud app projects to their goals, address uncertainties agilely, and ensure the superior quality of cloud solutions our clients receive.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#5a6c7d",
                  lineHeight: 1.7,
                  textAlign: 'justify',        // ← justified
                }}
              >
                Check the proven benefits of our approach and follow the links to discover our success-driven practices in detail.
              </Typography>
            </Box>

            {/* Grid of points – unchanged */}
            <Grid container spacing={4}>
              {points.map((point, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(0,77,153,0.1)",
                        borderColor: "#004d99",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, height: "100%" }}>
                      {/* Checkmark + Title */}
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            backgroundColor: "#e6f2ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          <Typography sx={{ color: "#004d99", fontWeight: 700, fontSize: "1.2rem" }}>
                            ✓
                          </Typography>
                        </Box>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#002d5c",
                          }}
                        >
                          {point.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#5a6c7d",
                          lineHeight: 1.7,
                          textAlign: 'justify',
                        }}
                      >
                        {point.description}
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