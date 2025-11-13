import React from 'react'

import { Grid, Box, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CareerModal from '../../components/Extra/CareerModalComponent';
import Share from '../../components/share/Share'
import {jobData, internshipData, consultantData} from '../../components/Data/CareerData';

import './careers.css'


export default function Careers() {
  return (
    <Box sx={{width: '100%'}}>
        
        <Paper style={{paddingBottom: '100px', marginBottom: '100px', background: 'linear-gradient(90deg, rgba(42,97,163,1) 0%, rgba(28,92,161,1) 35%, rgba(37,124,232,1) 100%)' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={10} >
                    <div style={{textAlign:'center', paddingTop: '200px' }}>
                        <div style={{ color:'#fff', fontWeight:'bolder', fontSize: '48px'}}>CAREERS</div>
                        <br />
                        <div style={{ color:'#fff', fontSize: '28px', marginBottom: '50px'}}>WORKING WITH IZSOFTWARES</div>
                        
                        
                        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ textAlign: 'justify', color: '#fff' }}>
                            <div style={{maxWidth: '700px'}}>    
                                Evolv IZSoftwares Group acknowledges that its staff constitute its most valuable resource and are instrumental in the attainment of IZSoftwares Objectives.
                            </div>
                        </Grid>
                        <br />
                        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ textAlign: 'justify', color: '#fff' }}>
                            <div style={{maxWidth: '700px'}}>
                                The realization of IZSoftwares Strategic Goals relies on having an appropriate number of staff members possessing the requisite knowledge, skills, and competencies, deployed effectively in their respective roles.
                            </div>
                        </Grid>
                        <br />
                        <Link to='/about/careers-more' className='read-more' sx={{textAlign:'center'}}>Read More</Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        
        <div className='main-career'>
            <div style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold'}}> CAREERS </div>

            <Grid container direction="row" justifyContent="center" alignItems="center" py={'20px'}>
                <Grid item xs={12} sm={10} sx={{padding: 5}}>
                    <Typography sx={{fontSize: ['25px','30px'], fontWeight: 'bold', color: 'rgba(42,97,163,1)'}}>JOB OPENINGS</Typography>
                    <hr/>
                    <Box>
                        {jobData.length === 0 ? (
                                <div>No Current Job Available</div>
                            ) : (
                            jobData.map((job) => (
                                <Box>
                                    <Grid container alignItems={"center"} style={{borderBottomWidth: "1px", paddingInline: 24, paddingBlock: 24, borderBottomColor: "#CCCCCC", borderBottomStyle: "solid"}}>
                                        <Grid xs={12} sm={12} md={8} lg={10} item key={job.jobId}>
                                            <div className="job">
                                                <Typography className='job-title' sx={{fontSize: ['1.2em','1.5em'], color: "#000000", textTransform: "uppercase"}}>Vacancy Announcement - {job.jobName}</Typography>
                                                <Typography sx={{fontSize: '0.9em'}}>{job.isRemote ? "Africa (Remote)" : job.jobLocation}</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={3} md={4} lg={2} justifySelf={"flex-end"}>
                                            <CareerModal
                                                title={job.jobName}
                                                jobQualifications={job.jobQualifications}
                                                location={job.isRemote ? "Remote" : job.jobLocation}
                                                eligibility={job.jobEligibility}
                                                jobResponsibility = {job.jobResponsibility}
                                                jobSummary={job.jobSummary}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        )}
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" py={'20px'}>
                <Grid item xs={12} sm={10} sx={{padding: 5}}>
                    <Typography sx={{fontSize: ['25px','30px'], fontWeight: 'bold', color: 'rgba(42,97,163,1)'}}>INTERNSHIPS</Typography>
                    <hr/>
                    <Box>
                        {internshipData.length === 0 ? (
                            <div>No Current Internships Available</div>
                        ) : (
                        internshipData.map((job) => (
                            <Box>
                                <Grid container alignItems={"center"} style={{borderBottomWidth: "1px", paddingInline: 24, paddingBlock: 24, borderBottomColor: "#CCCCCC", borderBottomStyle: "solid"}}>
                                    <Grid xs={12} sm={9} md={8} lg={10} item key={job.jobId}>
                                        <div className="job">
                                            <Typography className='job-title' sx={{fontSize: ['1.2em','1.5em'], color: "#000000", textTransform: "uppercase"}}>Vacancy Announcement - {job.jobName}</Typography>
                                            <Typography sx={{fontSize: '0.9em'}}>{job.isRemote ? "Africa (Remote)" : job.jobLocation}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={4} lg={2} justifySelf={"flex-end"}>
                                        <CareerModal
                                            title={job.jobName}
                                            jobQualifications={job.jobQualifications}
                                            location={job.isRemote ? "Remote" : job.jobLocation}
                                            eligibility={job.jobEligibility}
                                            jobResponsibility = {job.jobResponsibility}
                                            jobSummary={job.jobSummary}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        )))}
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" py={'20px'}>
                <Grid item xs={12} sm={10} sx={{padding: 5}}>
                    <Typography sx={{fontSize: ['25px','30px'], fontWeight: 'bold', color: 'rgba(42,97,163,1)'}}>CONSULTANCIES</Typography>
                    <hr/>
                    <Box pb={5}>
                        { consultantData.length === 0 ? (
                            <div>No Consultation required for the moment</div>
                        ) : (
                        
                        consultantData.map((job) => (
                            <Box>
                                <Grid container alignItems={"center"} style={{borderBottomWidth: "1px", paddingInline: 24, paddingBlock: 24, borderBottomColor: "#CCCCCC", borderBottomStyle: "solid"}}>
                                    <Grid xs={12} sm={9} md={8} lg={10} item key={job.jobId}>
                                        <div className="job">
                                            <Typography className='job-title' sx={{fontSize: ['1.2em','1.5em'], color: "#000000", textTransform: "uppercase"}}>{job.jobName}</Typography>
                                            <Typography sx={{fontSize: '0.9em'}}>{job.isRemote ? "Africa (Remote)" : job.jobLocation}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={4} lg={2} justifySelf={"flex-end"}>
                                        <CareerModal
                                            title={job.jobName}
                                            jobQualifications={job.jobQualifications}
                                            location={job.isRemote ? "Remote" : job.jobLocation}
                                            eligibility={job.jobEligibility}
                                            jobResponsibility = {job.jobResponsibility}
                                             jobSummary={job.jobSummary}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        )))}
                    </Box>

                    <Share/>
                </Grid>
            </Grid>
        </div>
    </Box>
  )
}