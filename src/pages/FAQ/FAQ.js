import React from 'react';
import FAQ from '../../components/Faq/FAQ';
import combinedFaqData from '../../components/Data/combinedFaqData';
import { Typography } from '@mui/material';

function FAQComponent() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <FAQ faqData={combinedFaqData.general.map(faq => ({
        title: faq.question,
        description: faq.answer
      }))} />
    </div>
  );
}

export default FAQComponent;