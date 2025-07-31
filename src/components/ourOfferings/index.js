import React, { useEffect, useState } from 'react'
import './styles.css'
import LegacyModernisation from './LegacyModernisation'
import EGovernmentSolutions from './EGovernment'
import Software from './SoftwareDevelopment'
import Design from './Design'
import ConnectSphere from './ConnectSphere'
import DigitalTransformation from './DigitalTransformation'
import { Grid, Box } from '@mui/material'


import Services from './service'


function OurOfferings() {
  const [active, setActive] = useState('software')
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditional rendering based on the width value


  return (
    <div>
      {width > 700? 
      <div>
         <Box sx={{p: 5}}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} md={10}>

         
        <h1 className="hp-title" name="Services">Explore Our Offering </h1>
        <ul className='a-service'>
            <div style={{backgroundColor: '#0b3155'}}>
            <div>
                <button onClick={()=>setActive('software')} className={`a-services__tabs-label ${active === 'software' ? 'active' : ''}`} style={{transition:'none', textDecoration: 'none'}}>
                <p style={{textAlign:'left'}}>Software Development </p>
                </button>
            </div>
            <div >
                <button onClick={()=>setActive('egovernment')} data-slide-index="1" href="#" className={`a-services__tabs-label ${active === 'egovernment' ? 'active' : ''}`} style={{transition:'none'}}>
                <p> eGovernment Solutions </p>
                </button>
            </div>
            <div>
                <button onClick={()=>setActive('design')} data-slide-index="2" href="#" className={`a-services__tabs-label ${active === 'design' ? 'active' : ''}`} style={{transition:'none'}}>
                <p>UX/UI Design</p>
                </button>
            </div>
            <div >
                <button onClick={()=>setActive('legacy')} data-slide-index="3" href="#" className={`a-services__tabs-label ${active === 'legacy' ? 'active' : ''}`} style={{transition:'none'}}>
                <p>Legacy Modernisation</p>
                </button>
            </div>
            <div >
                <button onClick={()=>setActive('connect')} data-slide-index="4" href="#" className={`a-services__tabs-label ${active === 'connect' ? 'active' : ''}`} style={{transition:'none'}}>
                <p>ConnectSphere</p>
                </button>
            </div>
            <div>
                <button onClick={()=>setActive('digital-transformation')} data-slide-index="6" href="#" className={`a-services__tabs-label ${active === 'digital-transformation' ? 'active' : ''}`} style={{transition:'none'}}>
                <p>Digital Transformation</p>
                </button>
            </div>
            
            
            </div>
            <div  className=''>
              <div className='second'>
                  {active === 'software' && <Software/>}
                  {active === 'egovernment' && <EGovernmentSolutions/>}
                  {active === 'design' && <Design/>}
                  {active === 'legacy' && <LegacyModernisation/>}
                  {active === 'connect' && <ConnectSphere/>}
                  {active === 'digital-transformation' && <DigitalTransformation/>}
                  
              </div>
            </div>
        </ul>
          </Grid>
        </Grid>
        </Box>
        </div>

      : 
      <div>
        <div className='second'>
          <Services/>
        </div>
      </div>
      }
    </div>
  )
}

export default OurOfferings
