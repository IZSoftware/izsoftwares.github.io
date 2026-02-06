import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

export default function KeyCapabilitiesSection({ keyCapabilities, getIcon }) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Box sx={{ mb: 8 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: "800", 
                color: "#002d5c"
              }}>
                {keyCapabilities.title || "Key Capabilities & Features"}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: "#5a6c7d", 
                mt: 2 
              }}>
                {keyCapabilities.subtitle || "Powerful features to streamline your cloud operations"}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {(keyCapabilities.features || []).map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card sx={{ 
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                    border: "1px solid #e1e8f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 40px rgba(0,77,153,0.1)",
                      borderColor: "#004d99"
                    }
                  }}>
                    <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                      <Box sx={{ 
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        backgroundColor: "#e6f2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3
                      }}>
                        {getIcon(feature.icon)}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: "700", color: "#002d5c", mb: 2 }}>
                        {feature.title || "Feature"}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#5a6c7d", lineHeight: 1.7, mb: 3, flexGrow: 1 }}>
                        {feature.description || "Feature description"}
                      </Typography>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#004d99", fontWeight: 600 }}>
                          {feature.bullets || "• Key points"}
                        </Typography>
                      </Box>
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