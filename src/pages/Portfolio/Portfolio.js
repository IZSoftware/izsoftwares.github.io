import React from "react";

import ProjectPortfolio from "../../components/portfolio/ProjectPortfolio";
import { Box, Grid } from "@mui/material";
import ContactUsClientOnboarding from "../../components/Main/MainContactUs/ContactUsClientOnboarding";
import Share from "../../components/share/Share";

const Portfolio = () => {
  return (
    <>
      <Box
        component="header"
        sx={{
          marginBottom: "100px",
        }}
      ></Box>

      <box component="portfolio">
        <ProjectPortfolio />
        {/* CONTACT SECTION */}
        <br /> <br />
        <br />
        <br />
        <ContactUsClientOnboarding />
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
      </box>

      <Box
        component="footer"
        sx={{
          marginTop: "100px",
        }}
      ></Box>
    </>
  );
};

export default Portfolio;
