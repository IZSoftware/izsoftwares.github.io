import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { technologiesData } from "../../components/Data/CloudTechnologiesData"

const Technologies = () => {
  const {
    Cloud,
    CloudDatabases,
    DevOpsContainerization,
    DevOpsCICDTools,
    DevOpsMonitoring,
    TestingAutomationTools,
    Backend,
    Frontend,
    Framework,
    Mobile,
    Database,
  } = technologiesData;

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

              {/* ── Cloud first ── */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Cloud Platforms
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Cloud.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Cloud Databases & Storage
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {CloudDatabases.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              {/* ── DevOps ── */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | Containerization
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsContainerization.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | CI/CD Tools
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsCICDTools.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                DevOps | Monitoring
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {DevOpsMonitoring.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              {/* ── Testing ── */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Testing Automation Tools
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {TestingAutomationTools.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              {/* ── Rest of the stack (unchanged from your original) ── */}
              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Backend Programming Languages
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Backend.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Frontend Programming Languages
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Frontend.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                Mobile Technologies
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Mobile.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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

              <Typography variant="h5" sx={{ padding: "20px", color: "#004775", fontWeight: "bold" }}>
                SQL / NoSQL Databases
              </Typography>
              <Grid container sx={{ px: 2 }}>
                {Database.map((item) => (
                  <Grid item xs={4} sm={3} md={2} key={item.id}>
                    <Box sx={itemStyle}>
                      <img
                        src={item.image}
                        alt={item.name}
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