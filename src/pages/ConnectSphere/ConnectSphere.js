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

import KeyCapabilitiesSection from '../../components/ConnectSphere/KeyCapabilitiesSection';
import WhyConnectSphereSection from '../../components/ConnectSphere/WhyConnectSphereSection';
import UseCasesSection from '../../components/ConnectSphere/UseCasesSection';
import MustHaveAttributesSection from '../../components/ConnectSphere/MustHaveAttributesSection';
import HowWeEnsureFastStableSection from '../../components/ConnectSphere/HowWeEnsureFastStableSection';
import ProjectCost from '../../components/ConnectSphere/ProjectCost';
import PricingOptionsSection from '../../components/ConnectSphere/PricingOptionsSection';
import CloudTechnologies from '../../components/ConnectSphere/CloudTechnologies';
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";

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

export default function ConnectSphere() {
  const { 
    hero = {}, 
    cloudSolutions = {},
    keyCapabilities = {}, 
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
        background: "linear-gradient(135deg, #004d99 0%, #002d5c 100%)", 
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
                          backgroundColor: button.variant === 'contained' ? "#fff" : 'transparent',
                          color: button.variant === 'contained' ? "#005EB8" : "#fff",
                          borderColor: button.variant === 'outlined' ? "rgba(255,255,255,0.5)" : 'none',
                          "&:hover": { 
                            backgroundColor: button.variant === 'contained' ? "#e6f2ff" : "rgba(255,255,255,0.1)",
                            transform: "translateY(-2px)",
                            boxShadow: button.variant === 'contained' ? "0 8px 25px rgba(0,0,0,0.2)" : 'none',
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
                      src={hero.image || "/cover-cloud-app-development-services.svg"} 
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

      {/* CLOUD SOLUTIONS SECTION */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: "800", 
                  color: "#002d5c",
                  fontSize: { xs: "2rem", md: "2.5rem" }
                }}>
                  {cloudSolutions.title || "Cloud Solutions We Offer"}
                </Typography>
                <Typography variant="h6" sx={{ 
                  color: "#5a6c7d", 
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
                      boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: index === 0 
                          ? "0 20px 60px rgba(255,153,0,0.15)" 
                          : "0 20px 60px rgba(66,133,244,0.15)",
                        borderColor: provider.color || "#004d99"
                      }
                    }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                          <Box sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 2,
                            backgroundColor: provider.color || "#004d99",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 3
                          }}>
                            <CloudIcon sx={{ fontSize: 32, color: "white" }} />
                          </Box>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: "700" }}>
                              {provider.name || "Cloud Provider"}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#5a6c7d" }}>
                              {provider.subtitle || "Cloud Services"}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 3, color: "#4a5568", lineHeight: 1.7 }}>
                          {provider.description || "Comprehensive cloud services and integration"}
                        </Typography>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
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
                                    backgroundColor: provider.color || "#004d99",
                                    mr: 1.5
                                  }} />
                                  <Typography variant="body2" sx={{ color: "#5a6c7d" }}>
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
                            backgroundColor: index === 0 ? "#232f3e" : "#3c4043",
                            color: "white",
                            py: 1.5,
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: provider.color || "#004d99"
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

      <KeyCapabilitiesSection keyCapabilities={keyCapabilities} getIcon={getIcon} />

      <WhyConnectSphereSection whyConnectSphere={whyConnectSphere} getIcon={getIcon} />

      <UseCasesSection useCases={useCases} getIcon={getIcon} />

      {/* WHY BUSINESSES OPT FOR CLOUD SECTION */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: "800", 
                  color: "#002d5c"
                }}>
                  Why Do Businesses Increasingly Opt for Cloud?
                </Typography>
              </Box>

              <Grid container spacing={4} sx={{ mb: 8 }}>
                {[
                  { value: "~ 99.98%", label: "service availability" },
                  { value: "10–40%", label: "operating costs savings" },
                  { value: "3–4x", label: "faster launch of new features" },
                  { value: "15–30%", label: "higher development and support staff productivity" },
                  { value: "96%", label: "of businesses experience a significant upgrade in security" }
                ].map((stat, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ 
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(0,77,153,0.1)",
                        borderColor: "#004d99"
                      }
                    }}>
                      <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                        <Typography variant="h2" sx={{ 
                          fontWeight: "800", 
                          color: "#004d99",
                          mb: 1,
                          fontSize: { xs: "2.5rem", md: "3rem" }
                        }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="h6" sx={{ 
                          fontWeight: "600", 
                          color: "#002d5c",
                          lineHeight: 1.3
                        }}>
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ 
                  fontWeight: "700", 
                  color: "#004d99",
                  mb: 4
                }}>
                  Why ConnectSphere
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#004d99",
                      mt: 1.5,
                      mr: 2,
                      flexShrink: 0
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ color: "#002d5c", lineHeight: 1.6, fontWeight: 500 }}>
                        <strong>13 years</strong> in cloud development, including SaaS development and building large distributed enterprise systems.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#004d99",
                      mt: 1.5,
                      mr: 2,
                      flexShrink: 0
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ color: "#002d5c", lineHeight: 1.6, fontWeight: 500 }}>
                        <strong>150+ satisfied clients</strong> generously shared their experience of working with ConnectSphere.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#004d99",
                      mt: 1.5,
                      mr: 2,
                      flexShrink: 0
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ color: "#002d5c", lineHeight: 1.6, fontWeight: 500 }}>
                        In-house <strong>Architecture and Solutions CoE</strong> to ensure every cloud solution is resilient, secure, and built to avoid unnecessary complexity and costs.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CLOUD APPLICATION SERVICES SECTION */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Box sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: "800", 
                  color: "#002d5c"
                }}>
                  {cloudServicesSection.title}
                </Typography>
                <Typography variant="h6" sx={{ 
                  color: "#5a6c7d", 
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

      {/* MUST-HAVE ATTRIBUTES SECTION - placed at the very end */}
      <MustHaveAttributesSection />
      <HowWeEnsureFastStableSection />
      <ProjectCost />
      <PricingOptionsSection />
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