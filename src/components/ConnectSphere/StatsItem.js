import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function StatsItem({ number, label }) {
  return (
    <Stack
      spacing={1}
      sx={{
        borderLeft: '3px solid #004283',
        pl: 3,
        py: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#004283',
          lineHeight: 1.1,
          fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
        }}
      >
        {number}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontWeight: 500,
          lineHeight: 1.4,
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}