import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Container, Grid } from '@mui/material';
import FAQ from './FAQ';
import combinedFaqData from '../Data/CombinedFaqData';

const FAQPage = () => {
  return (
    <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: 8 }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={9.5}>
          {/* Added top padding to push content down */}
          <Box sx={{ pt: { xs: 8, sm: 10, md: 12 } }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                color: '#1a1a1a'
              }}
            >
              Any Questions?
            </Typography>
            
            <Typography 
              variant="h6" 
              component="p"
              sx={{ 
                mb: 5, 
                color: '#555',
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: 1.6
              }}
            >
              If the answer to your question is not on this page, please contact our{' '}
              <Link 
                to="/contact-us" 
                style={{ 
                  color: '#0073e6', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Account Managers
              </Link>
              .
            </Typography>

            {/* Software Development Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  color: '#1a1a1a',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                }}
              >
                Software Development
              </Typography>
              <FAQ faqData={combinedFaqData.softwareDevelopment} />
            </Box>

            {/* General Section */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  color: '#1a1a1a',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                }}
              >
                General Questions
              </Typography>
              <FAQ faqData={combinedFaqData.general} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQPage;