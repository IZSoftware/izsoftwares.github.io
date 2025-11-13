import { CareerHeader } from '../../components/carousel/CarouselHead';
import { Grid, Paper } from '@mui/material';
import HomeDriveImg from '../../resources/images/home-carousel/home_drive.jpg';


function More() {

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
                              You live a full life shaped by your ideas. By your Family. Career. Community. You’re looking for an employer who not only understands your vision for life but also supports your meaningful career that aligns with your life’s aspirations.
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
                                It’s Your Career. Your Life. Where do you want to go?
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
                        
                    </div>
                </Grid>
            </Grid>
        </Paper>

        
    </div>
  )
}

export default More