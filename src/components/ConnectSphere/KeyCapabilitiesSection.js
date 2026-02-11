import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

export default function KeyCapabilitiesSection({ keyCapabilities }) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography variant="h3" sx={{ fontWeight: "800", color: "#004283" }}>
                {keyCapabilities.title || "Key Capabilities & Features"}
              </Typography>
              <Typography variant="h6" sx={{ color: "#000000", mt: 2 }}>
                {keyCapabilities.subtitle || "Powerful features to streamline your cloud operations"}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {(keyCapabilities.features || []).map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
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
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          overflow: "hidden",
                          // No backgroundColor or border anymore → clean look
                        }}
                      >
                        <img
                          src={feature.iconSrc}
                          alt={`${feature.title} icon`}
                          style={{
                            width: "80%",          // increased to fill better without bg
                            height: "80%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "700", color: "#004283", mb: 2 }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          lineHeight: 1.7,
                          mb: 3,
                          flexGrow: 1,
                        }}
                      >
                        {feature.description}
                      </Typography>

                      {feature.bullets && (
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {feature.bullets
                            .split("• ")
                            .filter(Boolean)
                            .map((bullet, i) => (
                              <Typography
                                key={i}
                                component="li"
                                variant="body2"
                                sx={{ color: "#004283", mb: 0.5, fontWeight: 500 }}
                              >
                                {bullet.trim()}
                              </Typography>
                            ))}
                        </Box>
                      )}
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