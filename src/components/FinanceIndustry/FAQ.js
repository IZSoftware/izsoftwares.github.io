import React from 'react';
import { Container, Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import financialData from '../Data/FinancialServices.json';

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const faqData = financialData.faqs || [];

  if (!Array.isArray(faqData)) {
    console.error("Error: faqData is not an array. Check the data source.");
    return null;
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FFF' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={10}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              
              {/* Title Section */}
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#002d5c",
                    mb: 2,
                    textAlign: 'left',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      display: 'block',
                      backgroundColor: '#57b8ff',
                      height: '5px',
                      width: '100px',
                      position: 'absolute',
                      left: 0,
                      bottom: '-10px',
                    },
                  }}
                >
                  Frequently Asked Questions
                </Typography>
              </Grid>

              {/* Description Section */}
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5568",
                    mb: 4,
                    textAlign: 'left',
                    maxWidth: '900px',
                    fontSize: '1.1rem',
                    lineHeight: 1.7
                  }}
                >
                  Find answers to common questions about our IT services for the financial industry. 
                  Learn how we help BFSI companies with secure, compliant, and innovative solutions.
                </Typography>
              </Grid>

              {/* FAQ Accordions Section */}
              <Grid item xs={12}>
                {faqData.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      marginBottom: '10px',
                      boxShadow: 'none',
                      border: '1px solid #dce3ed',
                      '&.Mui-expanded': {
                        backgroundColor: '#f5faff',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon
                        sx={{
                          color: '#000000',
                          transform: 'rotate(0deg)',
                          '&.Mui-expanded': { transform: 'rotate(180deg)' },
                        }}
                      />}
                      aria-controls={`faq-content-${index}`}
                      id={`faq-header-${index}`}
                      sx={{
                        padding: '10px 16px',
                        '&.Mui-expanded': {
                          backgroundColor: '#e7f1ff',
                          color: '#0073e6',
                        },
                        '& .MuiAccordionSummary-content': {
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          margin: 0,
                        },
                      }}
                    >
                      {expanded === `panel${index}` ? (
                        <KeyboardArrowDownIcon
                          sx={{
                            color: '#000000',
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        />
                      ) : (
                        <KeyboardArrowRightIcon
                          sx={{
                            color: '#000000',
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        />
                      )}
                      <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {faq.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: '10px 16px',
                        backgroundColor: '#f5faff',
                        color: '#333',
                        fontSize: '14px',
                        paddingLeft: '44px',
                      }}
                    >
                      <Typography variant="body1">{faq.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQ;