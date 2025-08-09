import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Corrected import: import the data as an object
import faqData from '../Data/Faq';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData.faqs;

  return (
    <Box component="section" sx={{ minHeight: '100vh', py: { xs: 10, lg: 19 }, bgcolor: 'white' }}>
      {/* Header Section */}
      <Container maxWidth="lg" sx={{ mb: 10, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 5, fontWeight: 'bold', color: '#1F2A44' }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '48rem', mx: 'auto', color: '#4B5563' }}>
          Find answers to common questions about our services and offerings.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
          
        </Box>
      </Container>

      {/* FAQ Items Section */}
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ bgcolor: 'white', boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
          {/* Use the corrected 'faqs' variable here */}
          {Array.isArray(faqs) && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={openIndex === index}
                onChange={() => toggleFAQ(index)}
                sx={{ borderBottom: index === faqs.length - 1 ? 'none' : '1px solid #E5E7EB' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#6B7280' }} />}
                  sx={{ px: 3, py: 2 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#1F2A44' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography sx={{ color: '#4B5563' }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography sx={{ p: 3, color: '#4B5563' }}>No FAQs available at this time.</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQPage;