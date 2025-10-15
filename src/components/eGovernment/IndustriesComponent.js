import React, { useState } from 'react';
import { Box } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const IndustriesComponent = ({ icon: IconComponent, text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const lineStyles = {
    width: '100%',
    transition: '0.5s',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    border: '1px',
    height: '4px',
    backgroundColor: '#005eb8'
  };

  const textStyle = {
    color: isHovered ? '#005eb8' : '',
    alignItems: 'center'
  };

  return (
    <Box onClick={onClick} sx={{ cursor: 'pointer' }}>
      <Box
        sx={{ 
          boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 -1px 5px 0 rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 25px 0 rgba(0, 0, 0, 0.15)'
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ fontSize: '12px', right: '10px', textAlign: 'end' }}>
          {!isHovered ? (
            <ArrowOutwardIcon fontSize="small" sx={{ color: '#005eb8' }} />
          ) : (
            <ArrowForwardIcon fontSize="small" sx={{ color: '#005eb8' }} />
          )}
        </Box>
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', py: 3 }}>
            <IconComponent sx={{ fontSize: 80, color: '#005eb8' }} />
          </Box>
          <Box sx={{ paddingBottom: 5, textAlign: 'center' }} style={textStyle}>
            {text}
          </Box>
        </div>
        <div style={lineStyles} />
      </Box>
    </Box>
  );
};

export default IndustriesComponent;