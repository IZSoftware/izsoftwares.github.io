import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../resources/images/IZ2.svg';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Hidden from '@mui/material/Hidden';
import Chip from '@mui/material/Chip';

function Copyright(){
    
    return (
        <Box sx={{ p: 1}}>  
            <Typography variant="body2" component="h2" align="center" gutterBottom>
                Copyright
                {'©'}
                {' '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/" underline='none'>
                    Evolv IZSoftwares Group Ltd.
                </Link>
                {' | '}
                All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default function Footer(){
    return (
        <Box sx={{ backgroundColor: '#000000', color: '#fff', p: 5, width: '100%'}}>  
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={10}>
                        <Box sx={{ overflowX: 'hidden', overflowY: 'hidden'}}>
                            <footer> 
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Hidden smDown>
                                                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                    <Avatar sx={{width: 150, height: 150}} alt="IZ Logo" src={Logo} />
                                                </Grid>
                                            </Hidden>
                                           
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <PlaceIcon titleAccess="Address"/>    
                                                </Grid>
                                                <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                                                    <Typography variant="subtitle1">
                                                        Nairobi, Kenya
                                                    </Typography> 
                                                </Grid>    
                                                                                
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <CallIcon titleAccess="Call Us"/>    
                                                </Grid>
                                                <Grid item xs={10} sm={10} md={8} lg={10} xl={10}>
                                                    <Typography variant="subtitle1">
                                                        +254 703 468 300
                                                    </Typography> 
                                                    <Typography variant="subtitle1">
                                                        +254 113 584 021
                                                    </Typography> 
                                                </Grid>                                      
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <EmailIcon titleAccess="Contact"/>    
                                                </Grid>
                                                <Grid item xs={5} sm={5} md={6} lg={6} xl={6}>
                                                    <Typography variant="subtitle1">
                                                        <Link color="inherit" href="mailto:contact@izsoftwares.com?subject=Request for Consultation [IZSoftwares]" underline='none'>
                                                            <Typography variant="subtitle1" gutterBottom>
                                                                {'contact@izsoftwares.com'}
                                                            </Typography>  
                                                        </Link>
                                                    </Typography> 
                                                </Grid>                                      
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="https://www.linkedin.com/company/izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <LinkedInIcon titleAccess="Linkedin Account"/>                           
                                                        </Typography>  
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="https://www.youtube.com/@izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <YouTubeIcon titleAccess="Youtube Account"/>  
                                                                                     
                                                        </Typography>  
                                                    </Link>
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="https://twitter.com/izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <TwitterIcon titleAccess="Twitter Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="https://www.facebook.com/people/Evolv-IZSoftwares-Group/100092346416046" underline="none" color="inherit">
                                                        <Typography>
                                                            <FacebookIcon titleAccess="Facebook Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>                                  
                                            </Grid>        
                                        </Grid>
                                                                        
                                                                
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Company</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        About
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/case-studies" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                       Portfolio
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/client-onboard" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Client Onboarding Gateway
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/technology-used" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                       Technologies We Use
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/payment-gateway-providers" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Payment Gateway Providers
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/careers" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Careers  <Chip label="Hiring" color="success" size="small"/> {/* */}
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>                    
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Services</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/software-development" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Software Development
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/egovernment-solutions" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        eGovernment Solutions
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/web-design" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        UI/UX Design
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/legacy-modernisation" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Legacy Modernisation 
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/connect-sphere" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        ConnectSphere
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/digitization-and-digitalization" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Digital Transformation
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>   
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Industries</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/healthcare" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Healthcare
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/public-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Public Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/professional-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Professional Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/financial-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Financial Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/smart-office" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Smart Office
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/retail" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Retail
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>   
                                    </Grid>
                                </Grid>    
                                
                                <br />
                                <hr class="footerSeparator"/>
                                <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>  
                                        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}> 
                                                <Link href="/about/affiliate-agent" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Become Our Agent
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}> 
                                                <Link href="/about/payment-services-policy" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Payment & Services Terms
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}> 
                                                <Link href="/about/terms-use" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Terms of Use
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}> 
                                                <Link href="/about/privacy-policy" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Privacy Policy
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                        </Grid>                               
                                    </Grid>   
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>  
                                        <Copyright />  
                                    </Grid>      
                                </Grid>
                            </footer>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}
