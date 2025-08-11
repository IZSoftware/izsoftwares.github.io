import React from 'react';

import ProjectPortfolio from '../../components/portfolio/ProjectPortfolio';
import { Box } from '@mui/material';

const Portfolio = () => {
  return (
    <>
    
    <Box
      component="header"
      sx={{
        marginBottom: '100px', 
      }}
    >
    </Box>

      <box component ="portfolio">
        <ProjectPortfolio />
      </box>


    <Box component="footer"
     sx={{
        marginTop: '100px', 
      }}
      >
      </Box>

    </>
  );
};

export default Portfolio;