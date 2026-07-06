import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';

const primaryColor = '#005EB8';

// Color scheme per tag type (Odoo-style outlined chips)
const tagColors = {
  ZetScore: { color: '#005EB8', border: '#005EB8' },
  ZetCollect: { color: '#7B1FA2', border: '#7B1FA2' },
  Services: { color: '#5f6368', border: '#c4c9cf' },
  Finance: { color: '#c0392b', border: '#c0392b' },
  Sales: { color: '#5f6368', border: '#c4c9cf' },
  HR: { color: '#00897b', border: '#00897b' },
  HQ: { color: '#e65100', border: '#e65100' },
};

const officesData = [
  {
    country: 'Kenya',
    flag: 'https://flagcdn.com/w80/ke.png',
    tags: ['ZetScore', 'Services', 'Finance', 'Sales', 'HR', 'HQ'],
    address: 'Delta Corner Towers',
    phone: '+254 703 468 300',
  },
  {
    country: 'Rwanda',
    flag: 'https://flagcdn.com/w80/rw.png',
    tags: ['ZetScore', 'Services', 'Sales'],
  },
  {
    country: 'Cameroon',
    flag: 'https://flagcdn.com/w80/cm.png',
    tags: ['ZetCollect', 'Services', 'Sales'],
  },
  {
    country: 'Namibia',
    flag: 'https://flagcdn.com/w80/na.png',
    tags: ['ZetScore', 'Services'],
  },
  {
    country: 'Botswana',
    flag: 'https://flagcdn.com/w80/bw.png',
    tags: ['ZetScore', 'Services'],
  },
  {
    country: 'Ghana',
    flag: 'https://flagcdn.com/w80/gh.png',
    tags: ['ZetScore', 'Services'],
  },
]

export default function Offices() {
  return (
    <Box sx={{ backgroundColor: 'rgb(246, 248, 248)', p: { xs: 3, md: 6 }, width: '100%' }}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={11} lg={10}>
          <Box sx={{ position: 'relative', display: 'inline-block', mb: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Caveat', cursive",
                fontSize: '5rem',
                lineHeight: 1,
                fontWeight: 700,
                color: primaryColor,
              }}
            >
              Our Offices
            </Typography>
            <svg
              style={{
                position: 'absolute',
                left: 0,
                bottom: '-6px',
                width: '100%',
                pointerEvents: 'none',
              }}
              height="14"
              viewBox="0 0 320 14"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9 C 80 3, 240 3, 317 9"
                stroke="#F87171"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </Box>
          <Box sx={{ mb: 4, mt: 3 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e' }}>
              Africa
            </Typography>
            <Box sx={{ borderBottom: '1px solid #dadfe3', mt: 1 }} />
          </Box>

          <Grid container spacing={4}>
            {officesData.map((office, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '14px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', mb: 3 }}>
                    <img 
                      src={office.flag} 
                      alt={`${office.country} flag`}
                      style={{ 
                        width: '48px', 
                        height: '36px', 
                        objectFit: 'cover',
                        borderRadius: '4px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                      }}
                    />
                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#1a1a2e' }}>
                      {office.country}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: office.address || office.phone ? 3 : 0 }}>
                    {office.tags.map((tag, i) => {
                      const style = tagColors[tag] || { color: '#5f6368', border: '#c4c9cf' };
                      return (
                        <Box
                          key={i}
                          sx={{
                            border: `1.5px solid ${style.border}`,
                            color: style.color,
                            borderRadius: '6px',
                            px: '12px',
                            py: '5px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.4px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </Box>
                      );
                    })}
                  </Box>

                  {office.address && (
                    <Typography sx={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.5, mb: 1 }}>
                      {office.address}
                    </Typography>
                  )}

                  {office.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: 2 }}>
                      <PhoneIcon sx={{ fontSize: '20px', color: primaryColor }} />
                      <Typography sx={{ fontSize: '1.05rem', color: primaryColor, fontWeight: 600 }}>
                        {office.phone}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}