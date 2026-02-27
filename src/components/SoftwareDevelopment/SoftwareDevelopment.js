import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Partnerships } from "../carousel";
import IndustriesComponent from "../../components/Extra/IndustriesComponent";
import ListComponent from "../../components/ListComponent/ListComponent";
import { izIndustriesData } from "../Data/ServiceMap";
import listData from "../Data/Listdata";
import OurOfferingsSoftwareDev from "../../components/ourOfferings/OurOfferingsSoftwareDev";
import Testimonial from "../Testimonial/Testimonial";
import ImageCard from "../../pages/ImageCard/ImageCard";
import FAQ from "../../components/Faq/FAQ";
import combinedFaqData from "../../components/Data/CombinedFaqData";
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";

const SoftwareDevelopment = () => {
  return (
    <>
      {/* First Section: Software Development */}
      <Box
        sx={{
          background: "linear-gradient(to right, #004d99, #002d5c)",
          color: "white",
          py: 4,
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={10} md={5}>
              <Box>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Prioritizing Customer Focus Even Before the Project Starts
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, mb: 4, lineHeight: 1.6 }}
                >
                  At IZSoftwares, we work with clients to shape software
                  solutions across the full development lifecycle — from
                  business analysis to delivery and support — and help modernize
                  legacy systems or provide expert advisory at any stage of the
                  SDLC.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#005EB8",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#005EB8",
                    },
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: 1,
                  }}
                >
                  Shape your solution with us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={10} md={4.5}>
              <Box
                sx={{
                  width: "100%",
                  mt: { xs: 5, md: 9 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "250px", md: "450px" },
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/softwaredevelopment.jpg"
                  alt="Placeholder for Testimonial or Product"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Second Section: Our Clients */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  We Are Trusted By Global Market Leaders
                </Typography>
                <Partnerships />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Third Section: Industry Expertise */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Explore our Services:
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                  {izIndustriesData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <IndustriesComponent
                        image={item.image}
                        text={item.title}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Fourth Section: Solution Focused Services */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Solution Focused Services
                </Typography>
                <Grid container spacing={4}>
                  {listData.serviceCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ListComponent
                        title={card.title}
                        items={card.items}
                        image={card.image}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Offerings Section with Grey Background */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#fafafa",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <OurOfferingsSoftwareDev />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  What Our Clients Value
                </Typography>
                <Testimonial />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Fifth Section: Image Cards */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Different Collaboration Scenarios
                </Typography>
                <ImageCard />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sixth Section: FAQ */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#ffffff",
          color: "#212121",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  FAQ about Our Software Development Services:
                </Typography>
                <FAQ faqData={combinedFaqData.softwareDevelopment.map(faq => ({
                  title: faq.question,
                  description: faq.answer
                }))} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact and Share Section */}
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 5, sm: 3, md: 0 },
          py: 8,
          backgroundColor: "#f8f9fa",
        }}
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
};

export default SoftwareDevelopment;
