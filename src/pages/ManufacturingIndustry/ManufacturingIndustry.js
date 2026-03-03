import React from "react";
import HeroSection from "../../components/ManufacturingIndustry/HeroSection";
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";
import { Box, Container, Grid } from "@mui/material";
import KeyFactsManufacturing from "../../components/ManufacturingIndustry/KeyFactsManufacturing";
import { Partnerships } from '../../components/carousel';
import ManufacturingServices from "../../components/ManufacturingIndustry/ManufacturingServices";
import ManufacturingSolutions from "../../components/ManufacturingIndustry/ManufacturingSolutions";
import IndustryTechnologiesWeUse from "../../components/ManufacturingIndustry/IndustryTechnologiesWeUse";
import ManufacturingStrengths from "../../components/ManufacturingIndustry/ManufacturingStrengths";

function FinanceIndustry() {
  return (
    <>
      <HeroSection />
      <KeyFactsManufacturing />
      <div>
              <Box sx={{ p: 5, width: '100%' }}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item xs={12} md={10}>
                    <Partnerships/>
                  </Grid>
                </Grid>
              </Box>
            </div>

            <ManufacturingServices />
            <ManufacturingSolutions />
            <IndustryTechnologiesWeUse />
            <ManufacturingStrengths />


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

export default FinanceIndustry;
