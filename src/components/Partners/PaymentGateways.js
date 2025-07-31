import React from "react";
import { Typography, Card, CardContent, Button, Grid, Box} from "@mui/material";
import PaymentGatewayData from "../Data/PaymentGatewayData";

const PaymentGatewayPartner = () => {
  return (
    <div>
      <Typography
        variant="h1"
        className='hp-title'
        sx={{  textAlign: "left", fontWeight: "bold"}}>
        Our Payment Gateway Providers
      </Typography>

      <br /><br />

      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle1" sx={{textAlign: "justify"}} >
          At <b>IZSoftwares</b>, we are proud to collaborate with industry-leading
          payment solutions providers to deliver seamless and secure payment
          experiences for our clients. Our strategic partnerships with <b> I&M
          WebPay </b>, <b>DPO Pay</b>, and <b>JamboPay</b> allow us to offer versatile and reliable
          payment options, ensuring smooth transactions and enhanced customer
          satisfaction.
        </Typography>
      </Box>

      <br />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ px: { xs: 2, md: 0 } }}>
          {PaymentGatewayData.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "8px",
                    backgroundColor: "#1976d2",
                  }}
                ></Box>

                {/* Logo Wrapper */}
                <Box
                  sx={{
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{ maxWidth: "170px", maxHeight: "100px" }}
                  />
                </Box>

                {/* Card Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{textAlign: "justify"}}>
                    {partner.description}
                  </Typography>
                </CardContent>

                {/* Action Buttons */}
                <Box sx={{ padding: "8px 0 16px", textAlign: "end" }}>
                  {partner.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="text"
                      color="primary"
                      href={link.url}
                      target="_blank"
                      sx={{textTransform: "none", margin: "5px"}} >
                      {link.text}
                    </Button>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PaymentGatewayPartner;
