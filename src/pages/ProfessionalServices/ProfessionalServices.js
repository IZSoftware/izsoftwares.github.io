import React from "react";
import HeroSection from "../../components/ProfessionalServices/HeroSection";
import SoftwareSolutions from "../../components/ProfessionalServices/SoftwareSolutions";
import ChooseITServices from "../../components/ProfessionalServices/ChooseITServices";
import ITSolutionsGains from "../../components/ProfessionalServices/ITSolutionsGains";
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";
import { Box, Container, Grid } from "@mui/material";

function ProfessionalServices() {
  return (
    <>
      <HeroSection />
      <SoftwareSolutions />
      <ChooseITServices />
      <ITSolutionsGains />

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

export default ProfessionalServices;
