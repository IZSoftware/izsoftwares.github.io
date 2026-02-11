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
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#004283",
                  textAlign: 'left',
                }}
              >
                Must-Have Attributes of Our Apps
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#000000",
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                Our cloud applications are built with these core attributes to ensure long-term reliability, performance, and compliance in any environment.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {attributes.map((attr, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 32px rgba(0,66,131,0.12)",
                        borderColor: "#004283",
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
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          overflow: "hidden",
                          // background removed → clean modern look
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

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#004283",
                          mb: 2,
                        }}
                      >
                        {attr.title}
                      </Typography>

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