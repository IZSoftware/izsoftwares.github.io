import React from 'react';
import { Box, Grid, Typography, Hidden, Card, CardContent } from '@mui/material';
import AffiliateAgentImage from '../../../resources/images/become-iz-partner.svg';
import Button from '@mui/material/Button';
import './PolicyStyle.css';
import affiliateData from '../../../components/Data/AffiliateAgent.json';
import PortalIcon from '../../../assets/images/dashboard.png';
import MobileIcon from '../../../assets/images/mobile-app.png';
import CRMIcon from '../../../assets/images/crm.png';
const iconMap = {
  "../../../assets/images/dashboard.png": PortalIcon,
  "../../../assets/images/mobile-app.png": MobileIcon,
  "../../../assets/images/crm.png": CRMIcon
};

// Process solutions data with actual icon imports
const solutionsData = affiliateData.solutionsData.map(solution => ({
  ...solution,
  icon: iconMap[solution.icon]
}));

//data from JSON file
const howWeWorkData = affiliateData.howWeWorkData;
const whyChooseUsData = affiliateData.whyChooseUsData;

export default function MainAffiliateAgent(){
    return(
        <div>
            <Box sx={{marginTop: 15}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid item xs={10} sm={10}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography variant='h1' style={{textAlign: 'center'}}>
                                        <strong>IZ Affiliate Program</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography variant='h4'>
                                        <strong>IZ Affiliate Program</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br />
                                <img src={AffiliateAgentImage} alt="IZ Affiliate" style={{width: '100%', height: 'auto'}}></img>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Typography variant='subtitle1' paragraph="true">
                                    If you are a <strong>trusted consultancy</strong>, an <strong>individual</strong> consultant or a <strong>marketing agency</strong>, 
                                    you may need software development services for your customers apart from the services you directly provide. 
                                    We understand that software development is not your priority, and we are ready to take on this task and equip your clients with the software tailored to their industry specifics and business needs.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1' paragraph="true">
                                    If you are a <strong>sales agent</strong>, you can help us hunt for new Software consulting and custom software development opportunities. 
                                    All you need is to provide us with relevant leads, and we'll reward your efforts according to our Referral Program.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    Join <strong> IZ Affiliate Program </strong> for Software consulting and Software development services and get rewarded for the leads you bring us. 
                                    We are open to expanding our business network and obtaining new Software consulting and software development challenges.   
                                </Typography>
                            </Grid>

                           
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h3'>
                                        <strong>Collaboration Procedure</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Collaboration Procedure</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                          
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    1. We sign an NDA to ensure your sensitive data is not disclosed and an Agent Agreement that regulates our collaboration in frames of the 
                                    Referral Program (including the commissions you get as a mediator).
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    2. You introduce us to your clients who need IT services (Software consulting, Software design, Software development).
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    3. When we win a contract, we compensate your efforts (paying you the percentage following the contract) according to the conditions of our Referral Program.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    Your participation in the software project itself is not mandatory, but you can join it, for example, as a consultant. 
                                    We are interested in long-term cooperation and can offer all-round software development and IT consulting support to every new customer you have. 
                                    We respect your reputation and ensure that required services will be delivered to end-users within time and budget. 
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    <i> <strong> Please feel free to send your questions and set up a free consultation with our representative. </strong> </i>
                                </Typography>
                                <br /><br />

                                <Typography align="right" gutterBottom>
                                    <Button variant="contained" disableElevation href="/contact-us">CONTACT US</Button>
                                </Typography>                               
                            </Grid>
                        </Grid>

                        {/* Solutions Section */}
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 8 }}>
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography variant='h3' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>Solutions We Can Create for Your Clients</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography variant='h5' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>Solutions We Can Create for Your Clients</strong>
                                    </Typography>
                                </Hidden>
                                
                                <Grid container spacing={4}>
                                    {solutionsData.map((solution) => (
                                        <Grid item xs={12} key={solution.id}>
                                            <Card sx={{ 
                                                boxShadow: 4,
                                                borderRadius: 2,
                                                p: 3,
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: 6
                                                }
                                            }}>
                                                <CardContent sx={{ p: 0 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                                        {/* Solution Icon */}
                                                        <Box sx={{ 
                                                            width: '50px',
                                                            height: '50px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor: '#f0f7ff',
                                                            borderRadius: '8px',
                                                            mr: 2,
                                                            flexShrink: 0
                                                        }}>
                                                            <img 
                                                                src={solution.icon} 
                                                                alt={solution.title}
                                                                style={{
                                                                    width: '30px',
                                                                    height: '30px',
                                                                    objectFit: 'contain'
                                                                }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography variant='h5' sx={{ 
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                mb: 1
                                                            }}>
                                                                {solution.title}
                                                            </Typography>
                                                            <Typography variant='body1' sx={{ 
                                                                color: 'text.secondary',
                                                                lineHeight: 1.6
                                                            }}>
                                                                {solution.description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* How We Work Section */}
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 8 }}>
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography variant='h3' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>How We Work</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography variant='h5' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>How We Work</strong>
                                    </Typography>
                                </Hidden>
                                
                                {/* Vertical timeline layout */}
                                <Box sx={{ position: 'relative', mb: 8 }}>
                                    {/* Vertical line connecting the squares - centered */}
                                    <Box 
                                        sx={{ 
                                            position: 'absolute',
                                            left: '25px', // Centered for 50px squares
                                            top: '50px',
                                            bottom: '50px',
                                            width: '2px',
                                            backgroundColor: '#e0e0e0',
                                            zIndex: 0
                                        }}
                                    />
                                    
                                    <Grid container spacing={4}>
                                        {howWeWorkData.map((step, index) => (
                                            <Grid item xs={12} key={step.id}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    {/* Number square */}
                                                    <Box sx={{ 
                                                        position: 'relative',
                                                        zIndex: 1,
                                                        mr: 3,
                                                        flexShrink: 0
                                                    }}>
                                                        <Box sx={{ 
                                                            width: '50px',
                                                            height: '50px',
                                                            border: '2px solid #005eb8',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#005eb8',
                                                            fontWeight: 'bold',
                                                            fontSize: '20px',
                                                            backgroundColor: 'white'
                                                        }}>
                                                            {step.id}
                                                        </Box>
                                                    </Box>
                                                    
                                                    {/* Content card */}
                                                    <Card sx={{ 
                                                        flex: 1,
                                                        boxShadow: 4,
                                                        borderRadius: 2,
                                                        p: 3,
                                                        transition: 'transform 0.2s',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: 6
                                                        }
                                                    }}>
                                                        <CardContent sx={{ p: 0 }}>
                                                            <Typography variant='h5' gutterBottom sx={{ 
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                mb: 2
                                                            }}>
                                                                {step.title}
                                                            </Typography>
                                                            <Typography variant='body1' sx={{ 
                                                                color: 'text.secondary',
                                                                lineHeight: 1.6
                                                            }}>
                                                                {step.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* Why Choose Us Section */}
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 8, mb: 8 }}>
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography variant='h3' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>Why Choose Us</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography variant='h5' gutterBottom sx={{ color: '#000', mb: 4 }}>
                                        <strong>Why Choose Us</strong>
                                    </Typography>
                                </Hidden>
                                
                                <Card sx={{ 
                                    boxShadow: 4,
                                    borderRadius: 2,
                                    p: 4,
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: 6
                                    }
                                }}>
                                    <CardContent sx={{ p: 0 }}>
                                        <Grid container spacing={2}>
                                            {whyChooseUsData.map((point, index) => (
                                                <Grid item xs={12} key={index}>
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                        <Box sx={{ 
                                                            width: '6px', 
                                                            height: '6px', 
                                                            backgroundColor: '#005eb8', 
                                                            borderRadius: '50%',
                                                            mt: 1.5,
                                                            mr: 2,
                                                            flexShrink: 0
                                                        }} />
                                                        <Typography variant='body1' sx={{ 
                                                            color: 'text.secondary',
                                                            lineHeight: 1.6
                                                        }}>
                                                            {point}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Grid>
            </Box>
            <br /><br />
        </div>
    )
}