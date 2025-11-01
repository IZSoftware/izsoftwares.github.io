import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, IconButton } from '@mui/material';
import { Star, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import UIUX from '../../assets/images/UX_UI_design.png';
import uiuxData from '../../components/Data/UiuxdesignData.json';
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from '../../components/share/Share';

// Import your industry vertical images
import industry1 from '../../assets/images/Mobile design 1.png';
import industry2 from '../../assets/images/ZetCollect mockuper.png';
import industry3 from '../../assets/images/Mobile design 2.png';
import industry4 from '../../assets/images/ZetScore mockuper.png';
import industry5 from '../../assets/images/Mobile design 3.png';

// Import your UX service images
import uxService1 from '../../assets/images/web-mobile-ux.png';
import uxService2 from '../../assets/images/saas-ux-2.png';
import uxService3 from '../../assets/images/b2c-retailers.png';
import uxService4 from '../../assets/images/B2B website.jpg';

const UIDesignServices = () => {
  const navigate = useNavigate();
  
  // Destructure data from JSON import
  const { 
    brandDifferentiation: brandDifferentiationData, 
    uxServices: uxServicesData, 
    uxDesignServices: uxDesignServicesData, 
    serviceOptions: serviceOptionsData,
    industryVerticals: industryVerticalsData
  } = uiuxData;

  // Carousel state - separate for mobile and web
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [currentWebSlide, setCurrentWebSlide] = useState(0);

   // Map images to the data
  const industryImages = {
    'industry1.png': industry1,
    'industry2.png': industry2,
    'industry3.png': industry3,
    'industry4.png': industry4,
    'industry5.png': industry5,
  };

  const uxServiceImages = {
    'ux_service1.png': uxService1,
    'ux_service2.png': uxService2,
    'ux_service3.png': uxService3,
    'ux_service4.png': uxService4,
  };

  const mobileVerticals = industryVerticalsData.filter((_, index) => index % 2 === 0);
  const webVerticals = industryVerticalsData.filter((_, index) => index % 2 !== 0);

  const handlePrevSlide = (type) => {
    if (type === 'mobile') {
      setCurrentMobileSlide((prev) => (prev === 0 ? mobileVerticals.length - 1 : prev - 1));
    } else {
      setCurrentWebSlide((prev) => (prev === 0 ? webVerticals.length - 1 : prev - 1));
    }
  };

  const handleNextSlide = (type) => {
    if (type === 'mobile') {
      setCurrentMobileSlide((prev) => (prev === mobileVerticals.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentWebSlide((prev) => (prev === webVerticals.length - 1 ? 0 : prev + 1));
    }
  };

  const handleDotClick = (index, type) => {
    if (type === 'mobile') {
      setCurrentMobileSlide(index);
    } else {
      setCurrentWebSlide(index);
    }
  };

  const handleContactNavigate = () => {
    navigate('/contact-us');
  };

  // Carousel component for reusability
  const CarouselSection = ({ title, slides, currentSlide, type }) => (
    <Box>
      <Typography 
        variant="h5" 
        component="h3" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          mb: 3,
          textAlign: 'center'
        }}
      >
        {title}
      </Typography>

      {/* Carousel Container */}
      <Box sx={{ position: 'relative', mb: 3 }}>
        <Box
          sx={{
            width: '100%',
            height: 400,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
            backgroundColor: '#fff'
          }}
        >
          {/* Carousel Slides */}
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`,
              height: '100%'
            }}
          >
            {slides.map((vertical, index) => (
              <Box
                key={vertical.id}
                sx={{
                  minWidth: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '85%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  <img
                    src={industryImages[vertical.image]}
                    alt={vertical.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#333'
                  }}
                >
                  {vertical.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Previous Button */}
          <IconButton
            onClick={() => handlePrevSlide(type)}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              boxShadow: 2,
              width: 40,
              height: 40
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={() => handleNextSlide(type)}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              boxShadow: 2,
              width: 40,
              height: 40
            }}
          >
            <ChevronRight size={24} />
          </IconButton>
        </Box>

        {/* Carousel Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            mt: 2
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index, type)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#FFA500' : '#d0d0d0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: currentSlide === index ? '#FF8C00' : '#b0b0b0',
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth={false} sx={{ 
        position: 'relative', 
        zIndex: 1, 
        px: { xs: 5, sm: 3, md: 0 },
        mt: 8
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={4} alignItems="center">
              {/* Left Column - Text Content */}
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h3" 
                  component="h1" 
                  gutterBottom 
                  sx={{ fontWeight: 'bold', mb: 3 }}
                >
                  User Interface and User Experience (UI/UX) Design Services
                </Typography>
                
                <Typography 
                  variant="h6" 
                  component="p" 
                  sx={{ mb: 4, lineHeight: 1.6, color: 'text.secondary' }}
                >
                  IZSoftwares delivers UI/UX solutions that are tailored individually to your audience, 
                  reflect customer values, as well as effectively back up your business objectives.
                </Typography>

                {/* CTA Button */}
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={handleContactNavigate}
                  sx={{
                    backgroundColor: '#005eb8',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#ff5252',
                    }
                  }}
                >
                  Discuss my needs
                </Button>
              </Grid>

              {/* Right Column - Actual Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    overflow: 'hidden',
                    mt: 6,
                    mb: 6 
                  }}
                >
                  <img 
                    src={UIUX}
                    alt="UI Design Services"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8,
        backgroundColor: '#f8f9fa'
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4
              }}
            >
              Why Choose IZSoftwares as Your UI Design Agency
            </Typography>
            
            <Box component="ul" sx={{ 
              pl: 2, 
              listStyle: 'none'
            }}>
              {[
                "Years-long experience: 36 years in IT, 26 years in web development, 20 years in mobile development.",
                "Rich portfolio: over 4,200 completed projects.",
                "User-driven UX design: usability is always the top priority in our software.",
                "A holistic approach to UI design that reflects the target audience's demographic, social, and cultural characteristics.",
                "From UI mockups to coding: our team of skilled front-end developers can implement the design we've created and ensure error-free deployment.",
                "Designing for accessibility and inclusion following the WCAG 2.2 design principles and guidelines.",
                "150+ testimonials from our valued clients."
              ].map((item, index) => (
                <Box component="li" key={index} sx={{ 
                  mb: 2, 
                  display: 'flex', 
                  alignItems: 'flex-start' 
                }}>
                  <Box 
                    sx={{ 
                      width: 8, 
                      height: 8, 
                      backgroundColor: '#005eb8', 
                      borderRadius: '50%', 
                      mt: 1, 
                      mr: 2,
                      flexShrink: 0 
                    }} 
                  />
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* UX Design Matters Section */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4
              }}
            >
              Why UX Design Matters
            </Typography>

            {/* Stats Grid - Horizontal Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  boxShadow: 2, 
                  borderRadius: 2,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h3" component="div" sx={{ 
                      fontWeight: 'bold', 
                      color: '#005eb8', 
                      mb: 2 
                    }}>
                      79%
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      users will switch to a competitor if they aren't satisfied with current UX
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  boxShadow: 2, 
                  borderRadius: 2,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h3" component="div" sx={{ 
                      fontWeight: 'bold', 
                      color: '#005eb8', 
                      mb: 2 
                    }}>
                      400%+
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      conversion improvement on sites and apps with high-quality UX
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  boxShadow: 2, 
                  borderRadius: 2,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h3" component="div" sx={{ 
                      fontWeight: 'bold', 
                      color: '#005eb8', 
                      mb: 2 
                    }}>
                      $100
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      returned on each $1 invested in user experience
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Sources */}
            <Box sx={{ 
              mt: 4, 
              pt: 2, 
              borderTop: '1px solid #e0e0e0'
            }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Sources: Google, Forrester
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* UI Section - UI Designing for Different Industry Verticals with TWO COLUMN CAROUSEL */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8,
        backgroundColor: '#f8f9fa'
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4,
                textAlign: 'center'
              }}
            >
              Designing for Different Industry Verticals
            </Typography>

            {/* Two Column Layout for Carousels */}
            <Grid container spacing={4}>
              {/* Mobile Design Carousel */}
              <Grid item xs={12} md={6}>
                <CarouselSection 
                  title="Mobile Design"
                  slides={mobileVerticals}
                  currentSlide={currentMobileSlide}
                  type="mobile"
                />
              </Grid>

              {/* Web Design Carousel */}
              <Grid item xs={12} md={6}>
                <CarouselSection 
                  title="Web Design"
                  slides={webVerticals}
                  currentSlide={currentWebSlide}
                  type="web"
                />
              </Grid>
            </Grid>

            {/* Request Demo Button */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleContactNavigate}
                sx={{
                  borderColor: '#005eb8',
                  color: '#005eb8',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: 1,
                  '&:hover': {
                    borderColor: '#005eb8',
                    color: '#005eb8',
                  }
                }}
              >
                request a demo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* UI Section - Our SaaS UI Design Services */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4
              }}
            >
              Our SaaS UI Design Services
            </Typography>

            {/* Service Cards - Horizontal Layout */}
            <Grid container spacing={3}>
              {serviceOptionsData.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ 
                    textAlign: 'left', 
                    boxShadow: 2, 
                    borderRadius: 2,
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f2f9fe'
                  }}>
                    <CardContent sx={{ flexGrow: 1, p: 0, '&:last-child': { pb: 0 } }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {service.description}
                      </Typography>
                      <Button 
                        variant="outlined"
                        onClick={handleContactNavigate}
                        sx={{
                          borderColor: '#005eb8',
                          color: '#005eb8',
                          fontWeight: 'bold',
                          '&:hover': {
                            borderColor: '#005eb8',
                            color: '#005eb8',
                          }
                        }}
                      >
                        Request →
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* UI Section - Why You Should Invest in UI Design */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8,
        backgroundColor: '#f8f9fa'
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4
              }}
            >
              Why You Should Invest in UI Design
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Poor and unprofessional user interface and user experience design make only 20% of your potential user base stay and tolerate the experience. Uncovered during or after development, UI flaws give you a miserable choice between proceeding with them and losing 80% of your clients, or fixing them and drastically exceeding your budget.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
              Your only winning option that will keep you within budget and get you the most of satisfied customers is investing in high-quality user interface design from the start.
            </Typography>

            <Box sx={{ 
              mt: 4, 
              pt: 4, 
              borderTop: '2px solid #e0e0e0'
            }}>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                Avoid Costly Mistakes by Investing in Quality UI Now!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                IZSoftwares' UI design team makes sure your user interface lays solid groundwork for wide user adoption and high customer conversion.
              </Typography>

              <Button 
                variant="contained" 
                size="large"
                onClick={handleContactNavigate}
                sx={{
                  backgroundColor: '#005eb8',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: '#005eb8',
                  }
                }}
              >
                Get my high-quality UI now
              </Button>
            </Box>

            {/* Brand Differentiation Cards - ONE COLUMN with ICONS */}
            <Box sx={{ mt: 6 }}>
              <Grid container spacing={3}>
                {brandDifferentiationData.features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Card sx={{ 
                      textAlign: 'left', 
                      boxShadow: 2, 
                      borderRadius: 2,
                      p: 3,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <Box 
                        sx={{ 
                          width: 60,
                          height: 60,
                          backgroundColor: '#FFA500',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 3,
                          flexShrink: 0
                        }}
                      >
                        <Star size={32} color="white" fill="white" />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* UX Section */}
      <Container maxWidth={false} sx={{ 
        px: { xs: 5, sm: 3, md: 0 },
        py: 8
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 6
              }}
            >
              UX Section
            </Typography>

            {/* What UX Includes */}
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4
              }}
            >
              {uxServicesData.title}
            </Typography>

            {/* UX Services List with vertical line */}
            <Box sx={{ position: 'relative', mb: 8 }}>
              {/* Vertical line connecting the circles */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  left: '20px',
                  top: '40px',
                  bottom: '40px',
                  width: '2px',
                  backgroundColor: '#f2f9fe',
                  zIndex: 0
                }}
              />
              
              <Grid container spacing={3}>
                {uxServicesData.services.map((service, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ mb: 4, position: 'relative' }}>
                      <Typography 
                        variant="h5" 
                        component="h4" 
                        sx={{ 
                          fontWeight: 'bold', 
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 40,
                            height: 40,
                            borderColor: '#005eb8',
                            borderWidth: 2,
                            borderStyle: 'solid',
                            color: '#005eb8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            mr: 3,
                            flexShrink: 0,
                            position: 'relative',
                            zIndex: 1
                          }}
                        >
                          {service.number}
                        </Box>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: 1.6, pl: 7 }}>
                        {service.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* What UX Services Include - 4 CARDS PER ROW WITH REAL IMAGES */}
            <Typography 
              variant="h3" 
              component="h2"  
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 4,
                mt: 6
              }}
            >
              What UX Services Include
            </Typography>

            {/* UX Services Cards with Real Images - 4 per row */}
            <Grid container spacing={3}>
              {uxDesignServicesData.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box sx={{ 
                    textAlign: 'left', 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}>
                    {/* Image without card shadow */}
                    <Box
                      sx={{
                        width: '100%',
                        height: 180,
                        overflow: 'hidden',
                        borderRadius: 1
                      }}
                    >
                      <img
                        src={uxServiceImages[service.image]}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                        {service.description}
                      </Typography>
                      <Button 
                        variant="outlined"
                        size="small"
                        onClick={handleContactNavigate}
                        sx={{
                          borderColor: '#005eb8',
                          color: '#005eb8',
                          fontWeight: 'bold',
                          alignSelf: 'flex-start',
                          '&:hover': {
                            borderColor: '#005eb8',
                            color: '#005eb8',
                          }
                        }}
                      >
                        Request →
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

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
    </Box>
  );
};

export default UIDesignServices;

