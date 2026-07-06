import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Add a conditional check to ensure faqData is a valid array
  if (!Array.isArray(faqData)) {
    console.error("Error: faqData is not an array. Check the data source.");
    return null;
  }

  return (
    <Box>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            marginBottom: '12px',
            boxShadow: 'none',
            border: '1px solid #e8edf4',
            borderRadius: '8px !important',
            '&.Mui-expanded': {
              backgroundColor: '#f8faff',
              border: '1px solid #0073e6',
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0073e6', fontSize: '28px' }} />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
            sx={{
              padding: '16px 20px',
              '&.Mui-expanded': {
                backgroundColor: '#f8faff',
                borderRadius: '8px 8px 0 0',
              },
              '& .MuiAccordionSummary-content': {
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                margin: 0,
              },
            }}
          >
            <CheckCircleIcon 
              sx={{ 
                color: '#0073e6', 
                fontSize: { xs: '22px', sm: '24px', md: '26px' },
                flexShrink: 0
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '16px', sm: '17px', md: '18px' },
                fontWeight: 600,
                color: '#1a1a1a',
                lineHeight: 1.4
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '8px 20px 20px 58px',
              backgroundColor: '#f8faff',
              color: '#333',
              borderRadius: '0 0 8px 8px',
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '15px', sm: '16px', md: '17px' },
                lineHeight: 1.7
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;