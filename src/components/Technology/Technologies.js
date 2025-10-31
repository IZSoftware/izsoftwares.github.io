import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { TechnologiesData } from "../Data/TechnologyData";

const Technologies = () => {
  const {
    Backend,
    Frontend,
    Framework,
    Mobile,
    Database,
    Cloud,
    CloudDatabases,
    DevOpsContainerization,
    DevOpsCICDTools,
    DevOpsMonitoring,
    TestingAutomationTools,
  } = TechnologiesData;

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: { xs: "10px", md: "5px" },
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: "100px",
        marginTop: { xs: "120px", md: "150px" },
        overflow: "hidden",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={9.5}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "25px",
                fontWeight: "bold",
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  backgroundColor: "#57b8ff",
                  height: "5px",
                  width: "100px",
                  position: "absolute",
                  left: 0,
                  bottom: "-6px",
                },
              }}
            >
              Technologies and Platforms We Work With
            </Typography>

            <Box sx={{ backgroundColor: "#d8ecfc", borderRadius: "4px", overflow: "hidden" }}>
              {/* Backend Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Backend Programming Languages
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Backend.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Backend"
                        style={{
                          width: "100%",
                          height: "50px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Frontend Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Frontend Programming Languages
              </Typography>
              <Typography variant="h6" sx={{ paddingLeft: "30px", margin: "-5px", fontWeight: "bold" }}>
                Languages
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Frontend.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Frontend"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Framework Section */}
              <Typography
                variant="h5"
                sx={{ padding: "20px", marginBottom: "-18px", color: "#000000", fontWeight: "bold" }}
              >
                Javascript Frameworks
              </Typography>
              <Grid container sx={{ px: 2, marginBottom: "-18px" }}>
                {Framework.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Frameworks"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Mobile Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Mobile Technologies
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Mobile.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Mobile"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Database Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                SQL / NoSQL Databases
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Database.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Database"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Cloud Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Cloud
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Cloud.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Cloud"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Cloud Databases Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Cloud Databases
              </Typography>
              <Typography variant="h6" sx={{ paddingLeft: "30px", margin: "-5px", fontWeight: "bold" }}>
                AWS
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {CloudDatabases.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Cloud Databases"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* DevOps Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | CONTAINERIZATION
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsContainerization.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="DevOps"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* DevOps CI/CD Tools Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | CI/CD TOOLS
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsCICDTools.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="CI/CD Tools"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* DevOps Monitoring Tools Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | MONITORING
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsMonitoring.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Monitoring Tools"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Testing Automation Tools Section */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Testing Automation Tools
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {TestingAutomationTools.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt="Testing Tools"
                        style={{
                          width: "100%",
                          height: "45px",
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
