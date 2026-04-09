import React from 'react'
import { Box, Grid, Hidden, Button } from '@mui/material'
import StatsItem from '../../components/StatsItem'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Extra, Industries, Policy, SolutionOffered, Technologies } from '../../components/Extra'
import { aboutServiceMap, solutionData, geoData, pricePolicy, izIndustriesData } from '../../components/Data/ServiceMap'

import './styles.css'
import { Partnerships } from '../../components/carousel'
import Share from '../../components/share/Share'
import QualityImg from '../../resources/images/iz-quality/quality.svg';
import SecurityImg from '../../resources/images/iz-quality/security.svg';
import FastDeliveryImg from '../../resources/images/iz-quality/fast-delivery.svg';
import ExcellenceImg from '../../resources/images/iz-quality/excellence.svg';
import { CloudDownload } from '@mui/icons-material';


export default function About() {

  const fileUrl = "https://drive.google.com/file/d/1fyKnvEZP_CPP0BYQR1MVhoIVInpXn0pe/view";
  const pillarsUrl = "https://drive.google.com/file/d/1tPwOqhI-iaDxf56Ah9nYJPLjV0w11XhD/view";

  return (
    <Box sx={{p: 5, width: '100%',  marginTop: '100px'}}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10}>

            <Typography sx={{textAlign: ['left', 'left', 'center'], color: '#004485', fontSize: ['26px', '32px', '60px'], fontWeight: '700', display: ['block', 'block', 'inline-block'], mx: 'auto'}}> About </Typography> 
            <Hidden mdDown>
              <span>&nbsp;&nbsp;</span>
            </Hidden>
            <Typography sx={{textAlign: ['left', 'left', 'center'], color: '#004485', fontSize: ['26px', '32px', '60px'], fontWeight: '700', display: ['block', 'block', 'inline-block'], mx: 'auto'}}>
               Evolv IZSoftwares Group
            </Typography>
            <Box>
              <Box>
                <p className='line_text' style={{ textAlign: 'justify'}}>
                  <span> <b> Founded in 2022, </b></span> IZSoftwares emerged with a fervent commitment to innovation, aspiring to redefine the technological landscape in Africa. 
                  After undergoing a rebranding in mid 2023, as <span style={{color: '#004485', fontWeight: '700'}}> Evolv IZSoftwares Group </span> 
                  it transitioned into a prominent provider of <span><b>Software Development Services </b></span> and <span><b> Digital Transformation Solutions. </b></span>
                  Originally conceived as a modest startup product company, 
                  the switched to IT Services in 2023 marked a pivotal transformation and ever since we have been instrumental in enhancing the operational efficiency of 
                  non-IT organizations and software product companies, facilitating accelerated business growth and customer acquisition.
                </p>
                <p>
                  <span style={{color: '#004485', fontWeight: '700'}}>Evolv IZSoftwares Group Ltd </span> is regulated by the Government of Kenya. 
                </p>
                <p>
                  <span> 
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      startIcon={<CloudDownload />} 
                      href={fileUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                    > 
                       IZSoftwares Profile 2025
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      startIcon={<CloudDownload />} 
                      href={pillarsUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                    > 
                      IZSoftwares Core Pillars
                    </Button> 
                  </span>
                </p>
              </Box>
            </Box>
            <h1 className='hp-title'>Evolv IZSoftwares Group in Numbers</h1>
            <Box mt={5} mb={3}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs={12} sm={4} md={4} lg={3}>
                  <StatsItem number="50+" title="Team Professional Experience" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={2}>
                  <StatsItem number="5+" title="Success Stories" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={2}>
                  <StatsItem number="3+" title="Industry Covers" />
                </Grid>
              </Grid>
            </Box>
      

            {/* GEOGRAPHY SECTION */}
            <Box mt={2} mb={2}>
              <h1 className='hp-title'>Our Geography</h1>
                <p>
                  <span> <b>Headquartered in Kenya and operating internationally </b></span>, our team drives digital transformation for businesses globally.
                  We ensure on-site and virtual presence to deliver services to our major target markets in:
                </p>
              <div>
              <Grid container spacing={2}>
                {geoData.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Box className='box_geography'>
                      <Typography variant="h6" style={{ textAlign: 'center',fontWeight:'bold' }}>{item.title}</Typography>
                      <Box  mt={2} display="flex" flexDirection="column" alignItems="flex-start" paddingLeft="16px" gap='5px'> 
                        <ul>
                            <li>{item.text}</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              </div>
            </Box>
        
          
          {/* WHOM WE SERVE SECTION */}

          <Box mt={2} mb={2}>
            <h1 className='hp-title'>Whom We Serve</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ border: '1px solid #dadfe3', padding: '25px 20px', width: '100%'}}>
                  <Typography variant="h6" style={{fontWeight:'bold'}}>Non-IT Enterprises</Typography>
                  <Typography sx={{ display: 'flex', gap: '10px',paddingTop:2 }} >
                    <div style={{ fontSize: 16, boxSizing:'border-box'}}> Services to improve business performance, optimize customer service, and tap in digital transformation.</div>
                  </Typography>
                </Box>
              </Grid>
            
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ border: '1px solid #dadfe3', padding: '25px 20px', width: '100%'}}>
                  <Typography variant="h6" style={{fontWeight:'bold'}} >Software Product Companies</Typography>
                  <Typography sx={{ display: 'flex', gap: '10px', paddingTop:2 }} >
                    <div style={{ fontSize: 16, boxSizing:'border-box' }}> Services to help bring new products to the market and fast customer acquisition.</div>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* OUR CLIENT SECTION */}
          <div>
            <Box width={'100%'} mt={1} mb={4} >
              <h1 className='hp-title'>Our Clients</h1>      
              <p>
                We have collaborated with companies from 3 continents which are Africa, North America and Europe. Some of our prominent clients include:
              </p>
              
              <div style={{width: '100%'}}>
                  <Partnerships />
              </div>
            </Box>
          </div>


          {/* OUR SERVICE MAP SECTION */}
          <Box mb={4}>
            <h1 className='hp-title'>Our Service Map</h1>
            <br />
            <Grid container spacing={3} justifyContent="center">
              {aboutServiceMap.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className='main_box_service'>
                    <Extra bgCollor={item.bgColor} />
                    <CardContent>
                      <Typography variant="h5" component="div" sx={{ fontSize: 28 }}>
                        <b>{item.title}</b>
                      </Typography>
                      <ul>
                        <li>{item.text}</li>
                        <li>{item.text1}</li>
                        <li>{item.text2}</li>
                        <li>{item.text3}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* IZSOFTWARES INDUSTRIES  SECTION*/}
          <Box mb={4}>
            <h1 className='hp-title'> Industries We Serves </h1>
            <br />
            <p>
              During our practice, we acquired expertise and a deep understanding of business models and processes across 6 industries, including:
            </p>
            
            <br />
            <Grid container spacing={2} justifyContent="center">
              {izIndustriesData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Industries image={item.image} text={item.title} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* IZSOFTWARES SOLUTIONS  SECTION*/}
          <Box mb={4} >
            <h1 className='hp-title'>Solutions We Cover</h1>
              <p style={{ paddingTop: 2, paddingBottom: 10 }}> With over 30+ years in Information Technology Team Experience, we have built up expertise in dozens of domains, including:  </p>

              <Grid container spacing={2}>
                {solutionData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SolutionOffered item={item} />
                  </Grid>
                ))}
              </Grid>
          </Box>

          

          {/*TECHONOLOGY SECTION */}
          <Box sx={{width: '100%'}} mb={4}>  
            <Grid container direction="row" justifyContent="flex-start">           
              <h1 className='hp-title'> Our Technologies Expertise </h1>
            </Grid> 
            <br />
            <Technologies/>
          </Box>


          {/*PRICING POLICY SECTION */}
          <Box  width={'100%'} mb={4}>
            <h1 className='hp-title'>Our Pricing Policy</h1>
            <br />
            <div>
              <p> Depending on a project and the nature of the delivered service, we resort to one of the following pricing models:</p>
            </div>
            <br />
            <Grid container spacing={2}>
              {pricePolicy.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Policy item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>


          {/*CTO Message SECTION */}
          <div> 
            <div className='inner_person'>
            <Box sx={{ backgroundColor: 'white', textAlign: 'center', display: 'flex', flex: '1 1 25%',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <img width="75" height="75" style={{ borderRadius: '100%', display: 'block', margin: '0 auto' }} src="https://media.licdn.com/dms/image/D4D03AQGFZ169xcmDsg/profile-displayphoto-shrink_200_200/0/1685559491514?e=2147483647&v=beta&t=4KQVYKhZA96NvknW29JnTCam33GVuKgnO9RTtxN4hzw" alt="SE Profile" />
              <div>
                <Typography variant="h6">Beryl Joceran</Typography>
              </div>
              <div>
                <Typography variant="subtitle1">Senior Software Engineer</Typography>
              </div>
            </Box>
            <div className='text_section'>  
              <div className='text_section_text' >
                In the contemporary and dynamic field of IT, attempting to diminish costs solely through low rates is scarcely feasible. 
                Lower rates often lead to prolonged hours spent on tasks. At IZSoftwares, our focus is on elevating productivity by achieving more within shorter time frames. 
                Consequently, this approach leads to a decreased total cost on output.
              </div>
              </div>
            </div>
            <Box mb={4}>
              <section >
                <p>To <strong>increase productivity</strong> and <strong>provide for the project cost reduction</strong> for our clients, we invest a part of our revenue in:</p>
                <ul>
                  <li>Quality management and Process optimization.</li>
                  <li>Adoption of New technologies.</li>
                  <li>Employee training and Further education.</li>
                </ul> 
              </section>
            </Box>
          </div>


          <section>
            <h1 className='hp-title'>What Our Client Get Choosing IZSoftwares </h1>
          </section>
          <br />
          <Grid container spacing={4} mb={4}>
            <Grid item xs={12}>
              <Box className='service_card'>
                <div>
                  <img alt="Performance and Quality" height="100" width="100" src={QualityImg} />
                </div>
                <Box sx={{marginLeft: '40px'}}>
                  <h3><b>Quality-Centric company</b></h3>
                  <div style={{textAlign: 'justify'}}>
                    <p>
                      We provide only high-quality software and services to our clients.
                      We guarantee you will get tangible business value, enjoy healthy project processes, professional and motivated teams, 
                      effective communication between IZSoftwares, your teams, and stakeholders.

                      Our pledge to deliver high-quality software and services is not a mere promise; it's a covenant woven into every line of code and articulated in each strategic decision.
                    </p>
                  </div>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className='service_card'>
                <div>
                  <img alt="Security" height="100" width="100" src={SecurityImg} />
                </div>
                <Box sx={{marginLeft: '40px'}}>
                  <h3><b>Top-notch security</b></h3>
                  <div style={{textAlign: 'justify'}}>
                    <p>
                      Our security protocols are not confined to meeting industry standards; they exceed them. 
                      We view security as a living, breathing entity that evolves alongside the ever-changing threat landscape. 
                      Just as a sentry adapts to emerging challenges, our security measures undergo constant refinement and enhancement.
                      Consider us architects of a digital citadel, where strong encryption algorithms stands as the cornerstone, multi-layered defenses serve as bastions, 
                      and proactive monitoring functions as our watchtower. While certifications are valuable, we believe that true security is an ongoing commitment and <span><b>"security is everyone's responsibility".</b></span>
                    </p>
                  </div>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className='service_card'>
                <div>
                  <img alt="Fast Delivery" height="100" width="100" src={FastDeliveryImg} />
                </div>
                <Box sx={{marginLeft: '40px'}}>
                  <h3><b> Fast Development & Sustain Stability</b></h3>
                  <div style={{textAlign: 'justify'}}>
                    <p> 
                      We established a set of processes and technology practices that allows us to release new application versions every 2–3 weeks and implement minor updates up to several times a week. 
                      We achieve that due to an iterative approach to development, resorting to Agile project management practices. 
                      Simultaneously, we are committed to sustaining stability, prioritizing the durability and reliability of the developed systems over the long term. 
                    </p>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className='service_card'>
                <div>
                  <img alt="Exelllence" height="100" width="100" src={ExcellenceImg} />
                </div>
                <Box sx={{marginLeft: '40px'}}>
                  <h3><b> Commitment to Excellence </b></h3>
                  <div style={{textAlign: 'justify'}}>
                    <p> 
                      We think outside the box to encapsulates our unwavering dedication to delivering the highest standards of quality, innovation, and value-addeed to our clients. 
                      It signifies our pledge to go beyond expectations, consistently striving for excellence in every facet of our work. At IZSOFTWARES, this commitment is not just a motto; 
                      it's a guiding principle that permeates our culture ("We believe in solutions we build"), driving us to exceed benchmarks, continuously improve, and ensure that every interaction with our clients reflects a pursuit of excellence.
                    </p>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Share/>
          </Hidden>
      
        </Grid>
      </Grid>
    </Box>
  )
}