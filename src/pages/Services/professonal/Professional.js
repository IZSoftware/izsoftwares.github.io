import React from 'react'
import '../HealthCare/health.css'
import { Box, Grid, Hidden, Stack } from '@mui/material'
import StatsItem from '../../../components/StatsItem'
import ServicesProjects from '../../../components/carousel/Healthcare'
import { FlexContainer, ITService, ServiceCompany, SoftwareTypesCard } from '../../../components/Extra'
import Stacks from '../../../components/carousel/stacks'
import TextCarousel from '../../../components/carousel/TextCarousel'
import { CardCarousel } from '../../../components/carousel/CarouselHead'
import Share from '../../../components/share/Share'

function Professional() {
  return (
    <div>
     <div className='halthCare'>
            <div className='firstText'>IT Solutions for Professional Services</div>
                <div className='imageComtainer'>
                    <img alt='nothing here' src='https://www.scnsoft.com/professional-services/cover-pic-professional-services-.svg'
                    style={{height:'auto',width:'100%'}}
                    />
                </div>
                <div className='mainHealth'>
                <div className='left'>
                    <div>IT solutions for professional services allow businesses to digitalize service delivery and automate internal operations for increased productivity and a more competitive advantage in their industry.</div>

                    <div style={{paddingTop:'10px'}}>Providing IT solutions for professional services <h1 style={{fontSize:'20px' ,color:'#000',fontWeight:'bold'}}>since 2008</h1> ScienceSoft enables professional services companies to acquire new customers with <h1
                    style={{fontSize:'20px' ,color:'#000',fontWeight:'bold'}}>
                        
                    digital service delivery channels and optimize internal business processes,</h1>like project management, employee collaboration, and more.</div>
                    <h1 className='hp-title'>What Makes ScienceSoft a Reliable Partner </h1>

                    <ul>
                        <li>15 years in IT for professional services.</li>
                        <li>AWS partner since 2017. </li>
                    </ul>
                
       
        <div>
           
            <h1 className='hp-title'>IT Solutions to Streamline Operations of Your Professional Services Company</h1>
         
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'10px'}}>
             <ServiceCompany/>
             <ServiceCompany/>
             <ServiceCompany/>  
          
    </div>

    <div>
      <h1 className='hp-title'>Our Hallmark Projects for Professional Services</h1>
      <CardCarousel/>
    </div>
    <h1 className='hp-title'>Our Hallmark Projects for Professional Services </h1>
          {/* <Stacks/> */}
    {/* need to include starks here */}
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
             
    <ServiceCompany/>    <ServiceCompany/>  
            </div>
             <div>
                <h1 className='hp-title'>Choose Your IT Services</h1>
                <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
             
             <ITService/>    <ITService/>  
                     </div>

                     <h1 className='hp-title'>Equip Your Professional Services Business with IT Solutions Right Now </h1>
            
            <div>By leveraging IT at your professional services company, you can achieve a number of gains, including:</div>

            <Box mt={10} mb={15}>
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }} variant='div'>
            <StatsItem number="+15-50%" title="employee productivity increase via convenient tools and improved collaboration " />
            <StatsItem number="+20-100%" title="revenue per employee via increased company productivity due to customer self-service" />
           <Hidden smDown>
           <StatsItem number="+20-100%" title="revenue due to new digital channelss" />
            
            </Hidden>
            </Stack>
            </Box>

            <Box mt={10} mb={15}>
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }} variant='div'>
            <StatsItem number="+15-50%" title="sales due to marketing and sales automation" />
            <StatsItem number="99.99%" title="IT srvice Availability" />
           <Hidden smDown>
           <StatsItem number="-5-35%" title="IT operating costs " />
            
            </Hidden>
            </Stack>
            </Box>
             </div>
        </div>
                </div>

                </div>
               
        </div>
        <div className='share_section'>
          <Share/>
        </div>
    </div>
  )
}

export default Professional