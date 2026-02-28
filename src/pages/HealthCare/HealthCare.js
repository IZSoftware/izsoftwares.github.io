import React from "react";
import HeroSection from "../../components/HealthCare/HeroSection";

import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";
import { Box, Container, Grid } from "@mui/material";
import KeyFacts from "../../components/HealthCare/KeyFacts";
import HealthcareServices from "../../components/HealthCare/HealthcareServices";
import ClientsWeServe from "../../components/HealthCare/ClientsWeServe";
import HealthcareProjectGoals from "../../components/HealthCare/HealthcareProjectGoals";
import HealthcareSolutions from "../../components/HealthCare/HealthcareSolutions";
import CooperationBenefits from "../../components/HealthCare/CooperationBenefits";
import TechnologiesWeUse from "../../components/FinanceIndustry/TechnologiesWeUse";

function HealthCare() {
  return (
    <>
      <HeroSection />
      <KeyFacts />
      <HealthcareServices />
      <ClientsWeServe />
      <HealthcareProjectGoals />
      <HealthcareSolutions />
      <TechnologiesWeUse />
      <CooperationBenefits />

      {/* CONTACT AND SHARE */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 5, sm: 3, md: 0 }, py: 8, backgroundColor: "#f8f9fa" }}
      >
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} md={12}>
            <ContactForm />
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
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

export default HealthCare;
