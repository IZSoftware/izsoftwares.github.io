import React from "react";
import HeroSection from "../../components/FinanceIndustry/HeroSection";
import FinancialServices from "../../components/FinanceIndustry/FinancialServices";
import FinancialInstitutions from "../../components/FinanceIndustry/FinancialInstitutions";
import FinancialSolutions from "../../components/FinanceIndustry/FinancialSolutions";
import TechnologiesWeUse from "../../components/FinanceIndustry/TechnologiesWeUse";
import FAQ from "../../components/FinanceIndustry/FAQ";
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";
import { Box, Container, Grid } from "@mui/material";

function FinanceIndustry() {
  return (
    <>
      <HeroSection />
      <FinancialServices />
      <FinancialInstitutions />
      <FinancialSolutions />
      <TechnologiesWeUse />
      <FAQ />

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
