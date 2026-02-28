import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BiotechIcon from '@mui/icons-material/Biotech';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HomeIcon from '@mui/icons-material/Home';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ComputerIcon from '@mui/icons-material/Computer';
import PetsIcon from '@mui/icons-material/Pets';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import healthcareSolutionsData from '../Data/HealthcareSolutions.json';

const iconMap = {
  LocalHospital: LocalHospitalIcon,
  Healing: HealingIcon,
  People: PeopleIcon,
  Psychology: PsychologyIcon,
  Biotech: BiotechIcon,
  Elderly: ElderlyIcon,
  Home: HomeIcon,
  Science: ScienceIcon,
  Analytics: AnalyticsIcon,
  PrecisionManufacturing: PrecisionManufacturingIcon,
  Computer: ComputerIcon,
  Pets: PetsIcon,
  AccountBalance: AccountBalanceIcon,
  Public: PublicIcon,
  FitnessCenter: FitnessCenterIcon,
};

export default function HealthcareSolutions() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            
            {/* Main Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: 4,
                textAlign: 'left',
                fontSize: {
                  xs: '1.75rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem'
                },
                lineHeight: 1.2,
              }}
            >
              IT Solutions for Healthcare We Deliver
            </Typography>

            {/* Map through each section */}
            {healthcareSolutionsData.map((section, sectionIndex) => (
              <Box key={sectionIndex} sx={{ mb: 8 }}>
                {/* Section Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#004283",
                    mb: 4,
                    pb: 1,
                    borderBottom: '2px solid #004283',
                    textAlign: 'left',
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                  }}
                >
                  {section.section}
                </Typography>

                {/* Categories Grid */}
                <Grid container spacing={3}>
                  {section.categories.map((category, categoryIndex) => {
                    const IconComponent = iconMap[category.icon];
                    
                    // Skip if icon not found (fallback)
                    if (!IconComponent) {
                      console.warn(`Icon ${category.icon} not found for category ${category.title}`);
                      return null;
                    }
                    
                    return (
                      <Grid item xs={12} sm={6} md={4} key={categoryIndex}>
                        <Card
                          sx={{
                            height: "100%",
                            borderRadius: 3,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                            border: "1px solid #e1e8f0",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                              borderColor: "#004d99",
                            },
                          }}
                        >
                          <CardContent sx={{ p: 4 }}>
                            {/* Icon with colored dot */}
                            <Box sx={{ position: 'relative', mb: 3, display: 'inline-block' }}>
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: -8,
                                  right: -8,
                                  width: 20,
                                  height: 20,
                                  borderRadius: '50%',
                                  backgroundColor: category.color,
                                  opacity: 0.7,
                                }}
                              />
                              <IconComponent sx={{ fontSize: 48, color: category.color }} />
                            </Box>

                            {/* Category Title */}
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: "#002d5c",
                                mb: 3,
                                fontSize: '1.1rem',
                                lineHeight: 1.4,
                              }}
                            >
                              {category.title}
                            </Typography>

                            {/* Items List */}
                            <Box component="ul" sx={{ pl: 0, listStyle: 'none', textAlign: 'left' }}>
                              {category.items.map((item, idx) => (
                                <Box
                                  component="li"
                                  key={idx}
                                  sx={{
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    color: "#444444",
                                    lineHeight: 1.6,
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      backgroundColor: "#004d99",
                                      mt: '10px',
                                      mr: 2,
                                      flexShrink: 0,
                                    }}
                                  />
                                  {item}
                                </Box>
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}