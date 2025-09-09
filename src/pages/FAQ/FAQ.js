import React from 'react';
import FAQ from '../../components/Faq/FAQ';
import faqData from '../../components/Data/Faq';
import { Typography } from '@mui/material';


function FAQComponent() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <FAQ faqData={faqData} />
    </div>
  );
}

export default FAQComponent;
