import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export default function MustHaveAttributesSection() {
  const attributes = [
    {
      title: "Scalability and portability",
      iconSrc: "/scalability.png",
      description:
        "We split an application into services/microservices and get them containerized to help minimize downtimes caused by application overload or migration.",
    },
    {
      title: "Resilience",
      iconSrc: "/resilience.png",
      description:
        "We use hierarchies of services, message queues, dynamic scaling, and automated recovery to eliminate the possibility of app failure escalation.",
    },
    {
      title: "Flexibility",
      iconSrc: "/flexibility.png",
      description:
        "We leverage layered separation of concerns architectures, clear separation of concerns (SoC), standardized architectures and well-documented APIs, etc., to make apps easily adopt updates (e.g., conceptual APIs changes, new features) and integrate with other applications.",
    },
    {
      title: "Security",
      iconSrc: "/security.png",
      description:
        "We heavily invest in a mature security system compliant with ISO 27001 information security, NIST, OWASP and follow CIS, HIPAA, GDPR, PCI DSS, and other applicable requirements and recommendations. We also retain top OWASP experts onboard, build a secure development environment, ensure strict access control and strong encryption algorithms.",
    },
    {
      title: "Cost-efficiency",
      iconSrc: "/cost.png",
      description:
        "We have a vast array of tools and practices to reduce software development, maintenance, and hosting costs. Depending on your needs, they can include building reusable code, automating CI/CD and testing, using the right ready-to-use cloud services for storage, event processing, integration, data management and analytics.",
    },
    {
      title: "Compliance",
      iconSrc: "/compliance.png",
      description:
        "Our in-house compliance consultants ensure your app meets all the applicable compliance requirements (HIPAA, PCI DSS, GDPR, ZATCA, SAMAA and other global and local standards). For new apps, compliance becomes an integral step of the development plan. For existing apps, our experts identify compliance gaps, develop a remediation plan, and implement the required changes.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Header Section - Mobile Optimized */}
            <Box sx={{ mb: { xs: 4, md: 8 } }}>
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
                Must-Have Attributes of Our Apps
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#4a5568",
                  lineHeight: 1.8,
                  textAlign: 'justify',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                Our cloud applications are built with these core attributes to ensure long-term reliability, performance, and compliance in any environment.
              </Typography>
            </Box>

            {/* Cards Grid - Mobile Optimized */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {attributes.map((attr, index) => (
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
                    <CardContent
                      sx={{
                        p: { xs: 2.5, sm: 3, md: 4 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        flexGrow: 1,
                      }}
                    >
                      {/* Icon with responsive sizing */}
                      <Box
                        sx={{
                          width: { xs: 60, sm: 70, md: 80 },
                          height: { xs: 60, sm: 70, md: 80 },
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: { xs: 2, md: 3 },
                          overflow: "hidden",
                          backgroundColor: '#f0f4f8',
                        }}
                      >
                        <img
                          src={attr.iconSrc}
                          alt={`${attr.title} icon`}
                          style={{
                            width: "72%",
                            height: "72%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      {/* Title with responsive font */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#004283",
                          mb: { xs: 1.5, md: 2 },
                          fontSize: { 
                            xs: '1.1rem', 
                            sm: '1.2rem', 
                            md: '1.3rem', 
                            lg: '1.5rem' 
                          },
                          lineHeight: 1.3,
                        }}
                      >
                        {attr.title}
                      </Typography>

                      {/* Description with responsive font and justified text */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.8,
                          flexGrow: 1,
                          textAlign: 'justify',
                          fontSize: { 
                            xs: '0.875rem', 
                            sm: '0.9rem', 
                            md: '0.95rem', 
                            lg: '1rem' 
                          },
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