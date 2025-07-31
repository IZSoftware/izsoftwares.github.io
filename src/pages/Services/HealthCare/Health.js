import React from 'react'
import './health.css'
import { Box, Grid, Hidden, Stack } from '@mui/material'
import StatsItem from '../../../components/StatsItem'
import ServicesProjects from '../../../components/carousel/Healthcare'
import { FlexContainer, SoftwareTypesCard } from '../../../components/Extra'
import Stacks from '../../../components/carousel/stacks'

function Health() {
  return (
    <div>
        <div className='halthCare'>
            <div className='firstText'>Healthcare IT Services</div>
                <div className='imageComtainer'>
                    <img alt='nothing here' src='https://www.scnsoft.com/healthcare/healthcare-it-services/healthcare-it-services-cover.svg'
                    style={{height:'auto',width:'100%'}}
                    />
                </div>
                <div className='mainHealth'>
                <div className='left'>
                    <span>Healthcare IT services cover care delivery digitalization, IT modernization, cloud migration, IT support, etc. In healthcare IT since 2005, ScienceSoft offers full-cycle IT services for medical organizations to leverage tech-enabled healthcare without expanding an in-house IT team.</span>
                    <h1 className='hp-title'>Why Choose Healthcare IT Services by ScienceSoft</h1>
                    <Box mt={10} mb={15}>
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }} variant='div'>
            <StatsItem number="34 years" title="years software development" />
            <StatsItem number="18 years" title="In HealthCare IT" />
            <StatsItem number="18 years" title="In HealthCare IT" />
           <Hidden smDown>
           <StatsItem number="15 Years" title="of Experience in ITSM" />
            {/* <StatsItem number="30+" title="industry covers" /> */}
           </Hidden>
          </Stack>
        </Box>
        <div>
            <ul>
                <li>Hands-on experience with HIPAA, HITECH, FDA, MDR, IVDR, GDPR, NCPDP, ONC, SAMHSA regulatory requirements.</li>
                <li>Quality management system for medical device software and software as a medical device proven by ISO 13485 certification.</li>
                <li>Mature quality and security management systems backed by ISO 9001 and ISO 27001.</li>
                <li>Authorized AWS Solution Provider.</li>
                <li>ScienceSoft’s RPM solution won the Best Healthcare Technology Solution Award 2022 from Health Tech Digital.</li>
            </ul>
        </div>
        <div>
            
            <h1 className='hp-title'>Healthcare IT Services ScienceSoft Offers</h1>
            <span>We provide the following services separately or in combination.</span>
            <div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginBottom:'10px',justifyContent:'start'}}>
                <FlexContainer/>
          <FlexContainer/>
          <FlexContainer/>
          <FlexContainer/>
          <FlexContainer/>
          
    </div>
    <h1 className='hp-title'>Technologies We Work With </h1>
          {/* <Stacks/> */}
    {/* need to include starks here */}
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
              <SoftwareTypesCard
                
              />
              
               <SoftwareTypesCard
                
              />
               <SoftwareTypesCard
                
              />
               <SoftwareTypesCard
                
              />
               <SoftwareTypesCard
                
              />
              
            </div>
              <h1 className='hp-title'>Healthcare IT Service Investments </h1>
                <span>The following factors influence the cost of healthcare IT services:</span>

                <ul>
                    <li>Healthcare IT infrastructure type (cloud, on-premises) and complexity.</li>
                    <li>Scope of healthcare IT infrastructure modernization needs and care digitalization needs (e.g., telehealth applications for patients, digital therapeutics software).</li>
                    <li>Healthcare IT infrastructure type (cloud, on-premises) and complexity.</li>
                </ul>
        </div>
                </div>
               
                </div>
               
        </div>
    </div>
  )
}

export default Health