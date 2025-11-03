import React from 'react';
import './home.css';
import { Partnerships, SwipeableText } from '../../components/carousel';
import OurOfferings from '../../components/ourOfferings';
import { Box, Grid, Hidden } from '@mui/material';
import { SolutionOffered, Technologies } from '../../components/Extra';
import { solutionData } from '../../components/Data/ServiceMap';
import IndustriesComponent from '../../components/Extra/IndustriesComponent';
import PartnershipComponent from '../../components/Extra/PartnershipComponent';
import ProcessesComponent from '../../components/Extra/ProcessesComponent';
import { izIndustriesData } from '../../components/Data/ServiceMap';
import ContactForm from '../../components/Main/MainContactUs/ContactUsHome';
import { BackgroundCarousel } from '../../components/carousel/CarouselHead';
import Share from '../../components/share/Share';

function Home() {
  return (
    <div>
      <BackgroundCarousel/>
      
      <div>
        <Box sx={{ p: 5, width: '100%' }}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Partnerships/>
            </Grid>
          </Grid>
        </Box>
      </div>
  
      <div>
        <Box sx={{ backgroundColor: '#fafafa', width: '100%' }}>
          <OurOfferings/>
        </Box>
      </div>

      <Box sx={{ width: '100%' }}>
        <div style={{ backgroundColor: '#004485', paddingBottom: '3%' }} >
          <Box sx={{ p: 5, width: '100%' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={10}>
                <h1 className='hp-title' style={{ color: '#fff' }}> Solutions We Deliver </h1>
                <br />
                <div style={{ fontSize: 20, color: '#fff' }}> 
                  With over 30+ years in Information Technology Team Experience, we have built up expertise in dozens of domains, including: 
                </div>
                <br />
                <Grid container spacing={2}>
                  {solutionData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <SolutionOffered item={item}/>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    
      <Box sx={{ width: '100%' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <Box sx={{ p: 5, width: '100%' }}>
              <h1 className='hp-title' style={{ paddingTop: 2 }}> 
                Technologies and Platforms We Work With 
              </h1>
              <br />
              <Technologies/>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: '#FCFCFC', p: 5, width: '100%' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <h1 className='hp-title'>Process We Follow</h1>
            <div className='processes'>
              <ProcessesComponent/>
            </div>
          </Grid>
        </Grid>
      </Box>


           <Box sx={{backgroundColor:'#FFF', p: 5, width: '100%'}}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={10}> 
              <h1 className='hp-title'>Partnership Models</h1>
              <br />
              <PartnershipComponent />
            </Grid>
          </Grid>
      </Box>
      
      <Box sx={{ p: 5, width: '100%' }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <Hidden smDown>
              <h1 className="hp-title">Our Clients Say</h1>
              <br />
              <div className='carousel'>
                <SwipeableText/>
              </div>  
            </Hidden>
          </Grid>
        </Grid>
      </Box>
      
      <br/><br/>
      
      <Box sx={{ backgroundColor: 'rgb(240, 249, 255)', p: 5, width: '100%' }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <h1 className="hp-title">Why Businesses Choose Us</h1>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ul>
                  <li className='box_geography_text'>5+ Success stories</li>
                  <li className='box_geography_text'>
                    We Build Relationships - A remarkable 95% of our clients will hire us again, 
                    placing their trust in us to provide precisely what they require. Always on time, with zero hassle.
                  </li>
                  <li className='box_geography_text'>
                    We are Cost effective - Our costs are determined by one single factor: Your budget. 
                    We adapt to you and stick to the numbers we agree on, from the beginning to the very end.
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ul>
                  <li className='box_geography_text'>
                    A motivated and closely united team of IT professionals, encompassing IT consultants, 
                    Project leaders, Technical architects, Software Engineers, QA engineers, and Security expert.
                  </li>
                  <li className='box_geography_text'>
                    A quality-first approach based on a mature Quality Management System. We are committed 
                    to meeting our customer requirements, elevating customer satisfaction, and consistently 
                    enhancing our internal processes.
                  </li>
                  <li className='box_geography_text'>
                    Security management grounded in proven security expertise, efficient protocols, 
                    cutting-edge security technology, and adept professionals.
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 5, width: '100%' }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <h1 className='hp-title'>Industry Expertise</h1>
            <br />
            <Grid container spacing={4}>
              {izIndustriesData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <IndustriesComponent image={item.image} text={item.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <ContactForm />
      
      <Box sx={{ p: 5, width: '100%' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <Hidden smDown>
              <Share/>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;