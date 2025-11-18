import { CareerHeader } from '../../components/carousel/CarouselHead';
import { Grid, Paper, Button } from '@mui/material';
import HomeDriveImg from '../../resources/images/home-carousel/home_drive.jpg';
import { Description } from '@mui/icons-material';

function More() {

  const carMethodUrl = "/C.A.R Method IZSoftwares.pdf";

  return (
    <div>
        <CareerHeader item={HomeDriveImg} />
        <Paper style={{paddingBottom: '20px', marginBottom: '20px', backgroundColor: 'rgb(231, 238, 241)' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={9} >
                    <div style={{paddingTop: '20px' }}>
                        <div style={{ color:'#000', fontWeight:'bolder', fontSize: '48px'}}>Make It Yours</div>
                        <br />
                        
                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ textAlign: 'justify', color: '#000' }}>
                            <div style={{maxWidth: '900px', fontSize: '20px'}}>    
                              You live a full life shaped by your ideas. By your Family. Career. Community. You're looking for an employer who not only understands your vision for life but also supports your meaningful career that aligns with your life's aspirations.
                            </div>
                        </Grid>
                        <br />

                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ textAlign: 'justify', color: '#000' }}>
                            <div style={{maxWidth: '900px', fontSize: '20px'}}>
                                At IZSoftwares, we understand what truly matters. We're dedicated to fostering an environment where you can unlock your full potential. Whether it's gaining new skills, exploring opportunities for innovation and growth, 
                                enjoying modern and comprehensive benefits, or having the flexibility to cherish life's important moments, IZSoftwares is the ideal place to grow both your career and your life.
                            </div>
                        </Grid>
                        <br />

                        <Grid item xs={10} >
                            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ textAlign: 'justify', color: '#000' }}>
                              <div style={{maxWidth: '900px', fontSize: '20px'}}>
                                It's Your Career. Your Life. Where do you want to go?
                              </div>
                            </Grid>
                            <br />

                            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ textAlign: 'justify', color: '#000' }}>
                              <div style={{maxWidth: '900px', fontSize: '20px'}}>
                                <span style={{fontWeight: '520'}}> IZSoftwares. Make It Yours </span>
                              </div>
                            </Grid>
                            <br />
                        </Grid> 

                        {/* New Interview Process Section */}
                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ textAlign: 'justify', color: '#000', marginTop: '40px' }}>
                            <div style={{maxWidth: '900px'}}>
                                <div style={{ color:'#000', fontWeight:'bolder', fontSize: '36px', marginBottom: '20px'}}>Our Interview Process</div>
                                
                                <div style={{fontSize: '20px', marginBottom: '20px'}}>
                                    At IZSoftwares, we believe in a comprehensive and transparent interview process that helps us identify the right talent while giving candidates a clear understanding of our expectations. Our process is designed to be thorough yet efficient.
                                </div>

                                <div style={{fontSize: '18px', marginLeft: '20px'}}>
                                    <ul style={{lineHeight: '1.8'}}>
                                        <li><strong>Initial Screening:</strong> Resume review and preliminary phone screening to discuss basic qualifications and mutual fit</li>
                                        <li><strong>Technical Assessment:</strong> Practical skills evaluation through coding challenges or domain-specific tests</li>
                                        <li><strong>Technical Interview:</strong> In-depth discussion with our technical team about your expertise and problem-solving approach</li>
                                        <li><strong>Cultural Fit Interview:</strong> Meeting with team leads to assess alignment with company values and team dynamics</li>
                                        <li><strong>Final Interview:</strong> Discussion with senior leadership about role expectations and career growth opportunities</li>
                                        <li><strong>Reference Check:</strong> Verification of professional background and previous work experience</li>
                                        <li><strong>Offer Extension:</strong> Formal job offer with comprehensive compensation and benefits package</li>
                                    </ul>
                                </div>

                                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '20px'}}>
                                    We use the CAR (Context, Action, Result) method throughout our interview process to better understand your experiences and accomplishments.
                                </div>

                                {/* CAR Method Button - Professional Style */}
                                <p>
                                  <span> 
                                    <Button 
                                      variant="outlined" 
                                      color="primary" 
                                      startIcon={<Description />} 
                                      href={carMethodUrl} 
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    > 
                                      View C.A.R Method 
                                    </Button>
                                  </span>
                                </p>
                            </div>
                        </Grid>
                        
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
  )
}

export default More