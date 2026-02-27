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
        "IZSoftwares's rapid customer onboarding flow enables a cooperation start in 1–3 weeks. We rely on our established Agile culture to deliver iteratively and provide daily minor releases and major releases each 2–3 weeks.",
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
        "Our PMs arrange a high-performing development team, considering our talents' domain expertise, seniority, experience with similar projects, and complementary skills. They professionally tackle risks, propel fast collaborative processing of change requests, and act as a single point of contact to ensure smooth communication between business and cross-functional distributed teams.",
    },
    {
      title: "Self-managed cross-functional teams",
      description:
        "Our teams can include a team lead, developers, DevOps engineers, testers, IT consultants, designers, and other roles. Regardless of the composition, our teams are trained to work independently, take full responsibility for the quality of deliverables, and consistently share knowledge with client stakeholders. Our team leads regularly report the fulfilled tasks to keep the client updated on project progress.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Header Section - Mobile Optimized */}
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#004283",
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { 
                    xs: '1.8rem', 
                    sm: '2.2rem', 
                    md: '2.5rem', 
                    lg: '3rem' 
                  },
                  lineHeight: 1.2,
                  mb: 3,
                  px: { xs: 1, md: 0 }
                }}
              >
                How We Ensure Fast and Stable Cloud App Development
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#4a5568",
                  lineHeight: 1.7,
                  textAlign: 'justify',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                IZSoftwares brings mature development and project management practices and deep multi-domain expertise to steadily drive cloud app projects to their goals, address uncertainties agilely, and ensure the superior quality of cloud solutions our clients receive.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#4a5568",
                  lineHeight: 1.7,
                  textAlign: 'justify',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                Check the proven benefits of our approach and follow the links to discover our success-driven practices in detail.
              </Typography>
            </Box>

            {/* Cards Grid - Mobile Optimized */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {points.map((point, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.25s ease",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-4px)" },
                        boxShadow: { xs: "none", md: "0 12px 32px rgba(0,66,131,0.12)" },
                        borderColor: { xs: "#e0e0e0", md: "#004283" },
                      },
                    }}
                  >
                    <CardContent sx={{ 
                      p: { xs: 2.5, sm: 3, md: 4 }, 
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1
                    }}>
                      {/* Title with Checkmark */}
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        mb: 2,
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: { xs: "center", sm: "left" }
                      }}>
                        <Box
                          sx={{
                            width: { xs: 28, sm: 30, md: 32 },
                            height: { xs: 28, sm: 30, md: 32 },
                            borderRadius: "50%",
                            backgroundColor: "#f0f4f8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: { xs: 0, sm: 2 },
                            mb: { xs: 1, sm: 0 },
                            flexShrink: 0,
                          }}
                        >
                          <Typography sx={{ 
                            color: "#004283", 
                            fontWeight: 700, 
                            fontSize: { xs: '1.1rem', md: '1.3rem' } 
                          }}>
                            ✓
                          </Typography>
                        </Box>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#004283",
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                            lineHeight: 1.3,
                          }}
                        >
                          {point.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.7,
                          textAlign: 'justify',
                          fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.95rem' },
                          flexGrow: 1,
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