import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Add a conditional check to ensure faqData is a valid array
  if (!Array.isArray(faqData)) {
    console.error("Error: faqData is not an array. Check the data source.");
    return null; // or return a loading indicator, or an empty state
  }

  return (
    <div>
      <Box />
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
    </div>
  );
};

export default FAQ;