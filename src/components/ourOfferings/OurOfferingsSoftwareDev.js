import React, { useEffect, useState } from 'react'
import './styles.css'
import LegacyModernisation from './LegacyModernisation'
import EGovernmentSolutions from './EGovernment'
import Software from './SoftwareDevelopment'
import Design from './Design'
import ConnectSphere from './ConnectSphere'
import DigitalTransformation from './DigitalTransformation'
import { Grid, Box, Typography } from '@mui/material'
import Services from './service'


function OurOfferingsSoftwareDev() {
  const [active, setActive] = useState('software')
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width > 700 ? (
        <Box>
          <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold"}}
                >
                  Our Development Approach
                </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box style={{ backgroundColor: '#0b3155' }}>
                <button onClick={() => setActive('software')} className={`a-services__tabs-label ${active === 'software' ? 'active' : ''}`} style={{ transition: 'none', textDecoration: 'none' }}>
                  <p style={{ textAlign: 'left' }}>Software Development</p>
                </button>
                <button onClick={() => setActive('egovernment')} data-slide-index="1" href="#" className={`a-services__tabs-label ${active === 'egovernment' ? 'active' : ''}`} style={{ transition: 'none' }}>
                  <p> eGovernment Solutions</p>
                </button>
                <button onClick={() => setActive('design')} data-slide-index="2" href="#" className={`a-services__tabs-label ${active === 'design' ? 'active' : ''}`} style={{ transition: 'none' }}>
                  <p>UX/UI Design</p>
                </button>
                <button onClick={() => setActive('legacy')} data-slide-index="3" href="#" className={`a-services__tabs-label ${active === 'legacy' ? 'active' : ''}`} style={{ transition: 'none' }}>
                  <p>Legacy Modernisation</p>
                </button>
                <button onClick={() => setActive('connect')} data-slide-index="4" href="#" className={`a-services__tabs-label ${active === 'connect' ? 'active' : ''}`} style={{ transition: 'none' }}>
                  <p>ConnectSphere</p>
                </button>
                <button onClick={() => setActive('digital-transformation')} data-slide-index="6" href="#" className={`a-services__tabs-label ${active === 'digital-transformation' ? 'active' : ''}`} style={{ transition: 'none' }}>
                  <p>Digital Transformation</p>
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className='second'>
                {active === 'software' && <Software />}
                {active === 'egovernment' && <EGovernmentSolutions />}
                {active === 'design' && <Design />}
                {active === 'legacy' && <LegacyModernisation />}
                {active === 'connect' && <ConnectSphere />}
                {active === 'digital-transformation' && <DigitalTransformation />}
              </div>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Services />
      )}
    </>
  );
}

export default OurOfferingsSoftwareDev;