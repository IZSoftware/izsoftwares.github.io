import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { partnershipData } from "../Data/HomeData";

export default function PartnershipComponent() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {partnershipData.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: "35px 30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                border: "1px solid #f0f0f0",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <h4
                style={{
                  color: "#005EB8",
                  textTransform: "uppercase",
                  margin: "0 auto 20px auto",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  textAlign: "justify",
                  display: "inline-block",
                }}
              >
                {items.title}
              </h4>

              <p
                style={{
                  textAlign: "justify",
                  margin: 0,
                  lineHeight: "1.6",
                  color: "#444",
                  fontSize: "18px",
                  flex: 1,
                }}
              >
                {items.text}
              </p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
