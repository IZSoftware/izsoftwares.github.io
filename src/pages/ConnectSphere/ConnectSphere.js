import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import ApiIcon from '@mui/icons-material/Api';
import BoltIcon from '@mui/icons-material/Bolt';
import ScaleIcon from '@mui/icons-material/Scale';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SavingsIcon from '@mui/icons-material/Savings';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BusinessIcon from '@mui/icons-material/Business';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import data from '../../components/Data/ConnectsphereData.json';
// import KeyCapabilitiesSection from '../../components/ConnectSphere/KeyCapabilitiesSection';
import WhyConnectSphereSection from '../../components/ConnectSphere/WhyConnectSphereSection';
import UseCasesSection from '../../components/ConnectSphere/UseCasesSection';
import MustHaveAttributesSection from '../../components/ConnectSphere/MustHaveAttributesSection';
import HowWeEnsureFastStableSection from '../../components/ConnectSphere/HowWeEnsureFastStableSection';
import ProjectCost from '../../components/ConnectSphere/ProjectCost';
import PricingOptionsSection from '../../components/ConnectSphere/PricingOptionsSection';
import CloudTechnologies from '../../components/ConnectSphere/CloudTechnologies';
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";
import StatsItem from '../../components/ConnectSphere/StatsItem';

let cloudServicesData;
try {
  cloudServicesData = require('../../components/Data/ConnectsphereData.json');
} catch (error) {
  console.warn('CloudServicesData.json not found, using fallback data');
  cloudServicesData = { cloudServices: { title: "", subtitle: "", services: [] } };
}

let ListComponent;
try {
  ListComponent = require('../../components/ListComponent/ListComponent').default;
} catch (error) {
  console.warn('ListComponent not found, creating simple fallback');
  ListComponent = ({ title, items }) => (
    <Card sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        {title}
      </Typography>
      <ul>
        {items?.slice(0, 4).map((item, index) => (
          <li key={index} style={{ fontSize: "0.9rem", color: "#555" }}>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

const iconMap = {
  Cloud: CloudIcon,
  Storage: StorageIcon,
  Security: SecurityIcon,
  Api: ApiIcon,
  Bolt: BoltIcon,
  Scale: ScaleIcon,
  MonetizationOn: MonetizationOnIcon,
  Dashboard: DashboardIcon,
  TrendingUp: TrendingUpIcon,
  Speed: SpeedIcon,
  Savings: SavingsIcon,
  Integration: IntegrationInstructionsIcon,
  Business: BusinessIcon,
  CloudUpload: CloudUploadIcon,
  Architecture: ArchitectureIcon,
  CheckCircle: CheckCircleIcon
};

const providerLogos = {
  "Amazon Web Services": "/Amazon_Web_Services-Logo.wine.png",
  "Google Cloud Platform": "/Google-Cloud-Logo.png",
};

export default function ConnectSphere() {
  const {
    hero = {},
    cloudSolutions = {},
    // keyCapabilities = {},
    whyConnectSphere = {},
    useCases = {}
  } = data || {};

  const cloudServicesSection = cloudServicesData?.cloudServices || {
    title: "Cloud Application Services",
    subtitle: "Our comprehensive cloud services",
    services: []
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  if (!hero || Object.keys(hero).length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6">Loading data...</Typography>
      </Box>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <Box sx={{
        backgroundColor: "#004283",
        color: "white",
        minHeight: { xs: "85vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 }
      }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={9.5}>
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h1" gutterBottom sx={{
                    fontWeight: "800",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px"
                  }}>
                    {hero.title || "ConnectSphere"}
                  </Typography>
                  <Typography variant="h5" sx={{
                    mt: 3,
                    mb: 4,
                    lineHeight: 1.6,
                    opacity: 0.95,
                    fontWeight: 400
                  }}>
                    {hero.subtitle || "Unified Cloud Management Platform"}
                  </Typography>
                 
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "white" }}>
                      What is ConnectSphere?
                    </Typography>
                    <Typography sx={{ lineHeight: 1.7, opacity: 0.9 }}>
                      {hero.description || "Advanced cloud management platform"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {(hero.buttons || []).map((button, index) => (
                      <Button
                        key={index}
                        variant={button.variant || 'contained'}
                        size="large"
                        sx={{
                          backgroundColor: button.variant === 'contained' ? "#ffffff" : 'transparent',
                          color: button.variant === 'contained' ? "#004283" : "#ffffff",
                          borderColor: button.variant === 'outlined' ? "rgba(255,255,255,0.6)" : 'none',
                          "&:hover": {
                            backgroundColor: button.variant === 'contained' ? "#f0f4f8" : "rgba(255,255,255,0.15)",
                            transform: "translateY(-2px)",
                          },
                          px: 4,
                          py: 1.5,
                          fontWeight: "bold",
                          fontSize: "1rem",
                          textTransform: "none",
                          borderRadius: 2,
                          transition: "all 0.3s ease"
                        }}
                      >
                        {button.text || "Get Started"}
                      </Button>
                    ))}
                  </Box>
                  <Grid container spacing={2} sx={{ mt: 4 }}>
                    {(hero.features || []).map((feature, index) => (
                      <Grid item key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {getIcon(feature.icon)}
                          <Typography variant="body2" sx={{ color: "white", opacity: 0.9 }}>
                            {feature.text || "Feature"}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    height: { xs: 350, sm: 450, md: 550 },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                  }}>
                    <img
                      src={hero.image || "/ConnectSphereHeroImage.png"}
                      alt="ConnectSphere Dashboard"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 1: WHY BUSINESS OPT FOR CLOUD */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h3" sx={{
                  fontWeight: "800",
                  color: "#004283"
                }}>
                  Why Do Businesses Increasingly Opt for Cloud?
                </Typography>
              </Box>

              <Box sx={{ mb: 10 }}>
                <Grid container spacing={{ xs: 5, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {[
                    { value: "99.98%", label: "service availability" },
                    { value: "10–40%", label: "operating costs savings" },
                    { value: "3–4×", label: "faster launch of new features" },
                    { value: "15–30%", label: "higher development & support staff productivity" },
                    { value: "96%", label: "of businesses experience significantly better security" },
                  ].map((stat, index) => (
                    <Grid item xs={4} sm={4} md={3} key={index}>
                      <StatsItem number={stat.value} label={stat.label} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2: CLOUD SOLUTION WE OFFER */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h3" sx={{
                  fontWeight: "800",
                  color: "#004283",
                  fontSize: { xs: "2rem", md: "2.5rem" }
                }}>
                  {cloudSolutions.title || "Cloud Solutions We Offer"}
                </Typography>
                <Typography variant="h6" sx={{
                  color: "#000000",
                  mt: 2
                }}>
                  {cloudSolutions.subtitle || "Seamlessly manage your cloud infrastructure"}
                </Typography>
              </Box>
              <Grid container spacing={4}>
                {(cloudSolutions.providers || []).map((provider, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 12px 32px rgba(0,66,131,0.12)",
                        borderColor: "#004283"
                      }
                    }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                          <Box sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 2,
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 3,
                            backgroundColor: "#f0f4f8"
                          }}>
                            <img
                              src={providerLogos[provider.name] || "/placeholder.png"}
                              alt={`${provider.name} logo`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                padding: "6px"
                              }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: "700", color: "#004283" }}>
                              {provider.name || "Cloud Provider"}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#000000" }}>
                              {provider.subtitle || "Cloud Services"}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 3, color: "#000000", lineHeight: 1.7 }}>
                          {provider.description || "Comprehensive cloud services and integration"}
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#004283" }}>
                            Key Capabilities:
                          </Typography>
                          <Grid container spacing={1}>
                            {(provider.capabilities || []).map((service, serviceIndex) => (
                              <Grid item xs={6} key={serviceIndex}>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                  <Box sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "#004283",
                                    mr: 1.5
                                  }} />
                                  <Typography variant="body2" sx={{ color: "#000000" }}>
                                    {service}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                        <Button
                          fullWidth
                          sx={{
                            mt: 4,
                            backgroundColor: "#004283",
                            color: "white",
                            py: 1.5,
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "#003366"
                            }
                          }}
                        >
                          {provider.buttonText || "Learn More"}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3: THE SCOPE OF IZSOFTWARES CLOUD APPLICATION SERVICES */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{
                  fontWeight: "800",
                  color: "#004283"
                }}>
                  {cloudServicesSection.title}
                </Typography>
                <Typography variant="h6" sx={{
                  color: "#000000",
                  mt: 2,
                  fontStyle: "italic"
                }}>
                  {cloudServicesSection.subtitle}
                </Typography>
              </Box>
              <Grid container spacing={4}>
                {(cloudServicesSection.services || []).map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
                    <ListComponent
                      title={service.title || "Service"}
                      items={service.items || []}
                      image={service.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4: WHY CONNECTSPHERE */}
      <WhyConnectSphereSection whyConnectSphere={whyConnectSphere} getIcon={getIcon} />

      {/* 5: HOW MUCH WILL YOUR CLOUD APP PROJECT COST */}
      <ProjectCost />

      {/* 6: HOW WE HELP OPTIMIZED CLOUD APP COST */}
      <HowWeEnsureFastStableSection />

      {/* 7: MUST-HAVE ATTRIBUTE OF OUR APPS */}
      <MustHaveAttributesSection />

      {/* 8: USE CASE */}
      <UseCasesSection useCases={useCases} getIcon={getIcon} />

      {/* 9: PRICING OPTIONS FOR OUR SERVICES */}
      <PricingOptionsSection />

      {/* 10: TECHNOLOGY WE USED */}
      <CloudTechnologies />

      {/* CONTACT AND SHARE */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: 8, backgroundColor: "#f8f9fa" }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} md={12}>
            <ContactForm />
            <Box sx={{ width: "100%" }}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
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