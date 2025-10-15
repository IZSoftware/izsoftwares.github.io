import React, { useState, useMemo, Component } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import IndustriesComponent from '../../components/eGovernment/IndustriesComponent';
import DropdownModal from '../../components/eGovernment/DropdownModal';
import InfoModal from '../../components/eGovernment/InfoModal';
import servicesData from '../../components/Data/servicesData.json';
import { iconMap } from '../../components/eGovernment/iconMap';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" color="error">
            Something went wrong.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {this.state.error && this.state.error.toString()}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Please check the console for more details or try refreshing the page.
          </Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

// Updated services data for the card components
const services = [
  {
    title: 'Civil Status Certificates (G2C)',
    icon: DescriptionIcon,
    items: [
      'Birth Services',
      'Marriage Services',
      'Death Services',
      'Divorce Services',
      'Adoption Services'
    ],
    color: '#005eb8'
  },
  {
    title: 'Identity Services (G2C)',
    icon: BadgeIcon,
    items: [
      'Resident ID Card (For Foreigners & Non-Resident Diaspora)',
      'Criminal Record'
    ],
    color: '#005eb8'
  },
  {
    title: 'Licensing and Permit (G2B)',
    icon: BusinessIcon,
    items: [
      'Business Licenses',
      'Environmental Permits',
      'Construction Permits'
    ],
    color: '#005eb8'
  },
  {
    title: 'Business Registration Portal (G2B)',
    icon: AppRegistrationIcon,
    items: [
      'Business Registration',
      'Trade License'
    ],
    color: '#005eb8'
  }
];

const EGovernmentSolutions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Map icon strings to actual icon components
  const g2cServices = servicesData.g2cServices.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }));

  const g2bServices = servicesData.g2bServices.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }));

  // Filter services based on search query
  const filteredG2cServices = useMemo(() => {
    if (!searchQuery.trim()) return g2cServices;
    
    const query = searchQuery.toLowerCase().trim();
    return g2cServices.filter(service => 
      service.title.toLowerCase().includes(query) ||
      (service.description && service.description.toLowerCase().includes(query))
    );
  }, [searchQuery, g2cServices]);

  const filteredG2bServices = useMemo(() => {
    if (!searchQuery.trim()) return g2bServices;
    
    const query = searchQuery.toLowerCase().trim();
    return g2bServices.filter(service => 
      service.title.toLowerCase().includes(query) ||
      (service.description && service.description.toLowerCase().includes(query))
    );
  }, [searchQuery, g2bServices]);

  // Check if any services match the search
  const hasSearchResults = filteredG2cServices.length > 0 || filteredG2bServices.length > 0;
  const hasSearchQuery = searchQuery.trim().length > 0;

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  // Determine which modal to show based on service type
  const getModalComponent = () => {
    if (!selectedService) return null;

    if (selectedService.type === 'info') {
      return <InfoModal open={modalOpen} onClose={handleModalClose} service={selectedService} />;
    } else {
      return <DropdownModal open={modalOpen} onClose={handleModalClose} service={selectedService} />;
    }
  };

  return (
    <ErrorBoundary>
      <Box sx={{ width: "100%" }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #005eb8 0%, #005eb8 100%)',
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 0 } }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={9.5}>
                <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      fontWeight: 400,
                      mb: 4,
                      fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                  >
                    Welcome
                  </Typography>
                  <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    <TextField
                      fullWidth
                      placeholder="Search for services (e.g., Birth, Marriage, Business)"
                      variant="outlined"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#999' }} />
                          </InputAdornment>
                        ),
                        sx: {
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& fieldset': {
                            border: 'none'
                          }
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontSize: '1.1rem',
                          '&:hover fieldset': {
                            borderColor: '#005eb8',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#005eb8',
                            borderWidth: '2px',
                          },
                        }
                      }}
                    />
                    {hasSearchQuery && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mt: 1, 
                          color: 'white', 
                          textAlign: 'left',
                          fontSize: '0.9rem'
                        }}
                      >
                        {hasSearchResults 
                          ? `Found ${filteredG2cServices.length + filteredG2bServices.length} services matching "${searchQuery}"`
                          : `No services found for "${searchQuery}"`
                        }
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* SECTION 1: Original Card Components */}
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
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ 
                      fontWeight: "bold",
                      mb: 6,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    Other solutions & Services
                  </Typography>
                  
                  {/* Original Card Components */}
                  <Grid container spacing={4}>
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card
                            sx={{
                              height: '420px', // Fixed height for uniformity
                              minHeight: '420px', // Ensure minimum height
                              backgroundColor: service.color,
                              color: 'white',
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: '8px',
                              boxShadow: 3,
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                              "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: 3,
                              },
                              position: "relative",
                              overflow: "hidden"
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "8px",
                                backgroundColor: "#003d7a",
                              }}
                            ></Box>
                            <CardContent
                              sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                p: 3,
                                pt: 4,
                                height: '100%',
                                overflow: 'hidden'
                              }}
                            >
                              <Box
                                sx={{
                                  width: 80,
                                  height: 80,
                                  borderRadius: '50%',
                                  border: '2px solid white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mb: 3,
                                  flexShrink: 0
                                }}
                              >
                                <IconComponent sx={{ fontSize: 40 }} />
                              </Box>
                              <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                  mb: 3,
                                  fontWeight: 600,
                                  fontSize: '1.5rem',
                                  textAlign: "left",
                                  flexShrink: 0
                                }}
                              >
                                {service.title}
                              </Typography>
                              <Box 
                                component="ul" 
                                sx={{ 
                                  pl: 2.5, 
                                  mb: 2, 
                                  flexGrow: 1,
                                  listStyleType: 'disc',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 1.5
                                }}
                              >
                                {service.items.map((item, idx) => (
                                  <Typography
                                    component="li"
                                    key={idx}
                                    sx={{
                                      fontSize: '0.95rem',
                                      lineHeight: 1.4,
                                      textAlign: "left",
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      display: '-webkit-box',
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: 'vertical',
                                    }}
                                  >
                                    {item}
                                  </Typography>
                                ))}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* SECTION 2: IndustriesComponent Cards */}
        <Box
          sx={{
            py: 4,
            backgroundColor: "#f8f9fa",
            color: "#212121",
          }}
        >
          <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={9.5}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ 
                      fontWeight: "bold",
                      mb: 6,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    All Services
                  </Typography>
                  
                  {/* G2C Section */}
                  {(filteredG2cServices.length > 0 || !hasSearchQuery) && (
                    <Box sx={{ mb: 8 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: "bold",
                          mb: 4,
                          fontSize: '2rem',
                          textAlign: 'left',
                          color: '#005eb8'
                        }}
                      >
                        G2C Services {hasSearchQuery && filteredG2cServices.length > 0 && `(${filteredG2cServices.length} found)`}
                      </Typography>
                      {filteredG2cServices.length > 0 ? (
                        <Grid container spacing={3}>
                          {filteredG2cServices.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                              <IndustriesComponent 
                                icon={service.icon}
                                text={service.title}
                                onClick={() => handleServiceClick(service)}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      ) : hasSearchQuery ? (
                        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', py: 4 }}>
                          No G2C services found matching your search.
                        </Typography>
                      ) : null}
                    </Box>
                  )}

                  {/* G2B Section */}
                  {(filteredG2bServices.length > 0 || !hasSearchQuery) && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: "bold",
                          mb: 4,
                          fontSize: '2rem',
                          textAlign: 'left',
                          color: '#005eb8'
                        }}
                      >
                        G2B Services {hasSearchQuery && filteredG2bServices.length > 0 && `(${filteredG2bServices.length} found)`}
                      </Typography>
                      {filteredG2bServices.length > 0 ? (
                        <Grid container spacing={3}>
                          {filteredG2bServices.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                              <IndustriesComponent 
                                icon={service.icon}
                                text={service.title}
                                onClick={() => handleServiceClick(service)}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      ) : hasSearchQuery ? (
                        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', py: 4 }}>
                          No G2B services found matching your search.
                        </Typography>
                      ) : null}
                    </Box>
                  )}

                  {/* No results message */}
                  {hasSearchQuery && !hasSearchResults && (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                      <Typography variant="h5" sx={{ mb: 2, color: '#666' }}>
                        No services found
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666' }}>
                        Try searching with different keywords like "Birth", "Marriage", "Business", etc.
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Render the appropriate modal */}
        {getModalComponent()}
      </Box>
    </ErrorBoundary>
  );
};

export default EGovernmentSolutions;