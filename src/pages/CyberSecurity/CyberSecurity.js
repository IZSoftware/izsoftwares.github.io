import React from 'react';
import cybersecurityData from '../../components/Data/CybersecurityData.json';

// MUI imports (these were missing)
import { Box, Container, Grid } from '@mui/material';

// Import sub-components
import HeroSection from '../../components/Cybersecurity/HeroSection';
import ServicesSection from '../../components/Cybersecurity/ServicesSection';
import ITComponentsWeSecure from '../../components/Cybersecurity/ITComponentsWeSecure';
import CyberThreatsSection from '../../components/Cybersecurity/CyberThreatsSection';
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";

export default function Cybersecurity() {
  const { hero, services } = cybersecurityData;

  return (
    <>
      {/* Hero Section */}
      <HeroSection hero={hero} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* IT Components */}
      <ITComponentsWeSecure />

      {/* Cyber Threats */}
      <CyberThreatsSection />

      {/* CONTACT AND SHARE */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: 8, backgroundColor: "#f8f9fa" }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} md={12}>
            <ContactForm />
            <Box sx={{ width: "100%" }}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={9.5}>
                  <Share />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
