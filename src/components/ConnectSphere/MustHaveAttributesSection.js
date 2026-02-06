import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

// Real MUI icons
import ScaleIcon from '@mui/icons-material/Scale';
import GppGoodIcon from '@mui/icons-material/GppGood';
import TuneIcon from '@mui/icons-material/Tune';
import SecurityIcon from '@mui/icons-material/Security';
import SavingsIcon from '@mui/icons-material/Savings';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function MustHaveAttributesSection() {
  const attributes = [
    {
      title: "Scalability and portability",
      Icon: ScaleIcon,
      description:
        "We split an application into services/microservices and get them containerized to help minimize downtimes caused by application overload or migration.",
    },
    {
      title: "Resilience",
      Icon: GppGoodIcon,
      description:
        "We use hierarchies of services, message queues, dynamic scaling, and automated recovery to eliminate the possibility of app failure escalation.",
    },
    {
      title: "Flexibility",
      Icon: TuneIcon,
      description:
        "We leverage layered separation of concerns architectures, clear separation of concerns (SoC), standardized architectures and well-documented APIs, etc., to make apps easily adopt updates (e.g., conceptual APIs changes, new features) and integrate with other applications.",
    },
    {
      title: "Security",
      Icon: SecurityIcon,
      description:
        "We heavily invest in a mature security system compliant with ISO 27001 information security, NIST, OWASP and follow CIS, HIPAA, GDPR, PCI DSS, and other applicable requirements and recommendations. We also retain top OWASP experts onboard, build a secure development environment, ensure strict access control and strong encryption algorithms.",
    },
    {
      title: "Cost-efficiency",
      Icon: SavingsIcon,
      description:
        "We have a vast array of tools and practices to reduce software development, maintenance, and hosting costs. Depending on your needs, they can include building reusable code, automating CI/CD and testing, using the right ready-to-use cloud services for storage, event processing, integration, data management and analytics.",
    },
    {
      title: "Compliance",
      Icon: FactCheckIcon,
      description:
        "Our in-house compliance consultants ensure your app meets all the applicable compliance requirements (HIPAA, PCI DSS, GDPR, ZATCA, SAMAA and other global and local standards). For new apps, compliance becomes an integral step of the development plan. For existing apps, our experts identify compliance gaps, develop a remediation plan, and implement the required changes.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Title & intro – left-aligned, full width */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#000000",           // black for professional look
                  textAlign: 'left',          // ← aligned left
                }}
              >
                Must-Have Attributes of Our Apps
              </Typography>

              {/* Optional short intro if you want – full width, justified */}
              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#000000",
                  lineHeight: 1.8,
                  textAlign: 'justify',       // ← justified
                }}
              >
                Our cloud applications are built with these core attributes to ensure long-term reliability, performance, and compliance in any environment.
              </Typography>
            </Box>

            {/* 2-column grid of attribute cards */}
            <Grid container spacing={4}>
              {attributes.map((attr, index) => (
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
                    <CardContent
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",    // card content still centered (common for attribute cards)
                      }}
                    >
                      {/* Icon circle */}
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          backgroundColor: "#f5f5f5", // neutral background
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                        }}
                      >
                        <attr.Icon sx={{ fontSize: 40, color: "#004d99" }} />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#000000",
                          mb: 2,
                        }}
                      >
                        {attr.title}
                      </Typography>

                      {/* Description – justified */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          lineHeight: 1.8,
                          flexGrow: 1,
                          textAlign: 'justify',
                        }}
                      >
                        {attr.description}
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