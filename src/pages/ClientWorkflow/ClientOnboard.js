import React from 'react';
import { Box, Grid, Hidden } from '@mui/material';

import ClientOnboardImg from '../../resources/images/Cooperation-Client/ClientOnboardImg.svg';
import ClientRequestImg from '../../resources/images/Cooperation-Client/request.svg';
import ClientMeetingImg from '../../resources/images/Cooperation-Client/meeting.svg';
import ClientNDAImg from '../../resources/images/Cooperation-Client/sign.svg';
import ClientProposalImg from '../../resources/images/Cooperation-Client/proposal.svg';
import ClientSLAImg from '../../resources/images/Cooperation-Client/sla.svg';
import ContactUsClientOnboarding from '../../components/Main/MainContactUs/ContactUsClientOnboarding';
import Share from '../../components/share/Share';
import Testimonial from './Testimonial';

import './style.css';



export default function ClientOnboard() {
    
    return (
        <Box sx={{ width: '100%', marginTop: '100px'}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <div className="header-container">
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={10} sx={{ p: 5 }}>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item xs={10} sm={10} md={6} lg={7}>
                                        <div>
                                            <h1 className="header-left-title">Prioritizing Customer Focus Even Before the Project Starts</h1>
                                            <p className="header-left-text">
                                                IZSoftwares boasts a finely tuned customer onboarding process. 
                                                Discover how to initiate collaboration with us and the measures we take to ensure prompt responses, efficient communication, and legal assurances for our customers.
                                                <br /><br />
                                                From the moment you engage with us, rest assured that your needs are not just met but exceeded, supported by a framework of trust, transparency, and unwavering commitment to your success.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={4} lg={4}>
                                        <div className="header-image-right">
                                            <img alt='Clients Onboard' src={ClientOnboardImg} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <br /><br /><br />
                <Grid item xs={12}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={10} sx={{ p: 5 }}>
                            <Hidden mdDown>
                                <h1 className='hp-title'>IZSoftwares Streamlined Client Onboarding Workflow </h1>
                            </Hidden>
                            <Hidden mdUp>
                                <h1 style={{fontWeight: 'bold'}}>IZSoftwares Streamlined Client Onboarding Workflow </h1>
                            </Hidden>

                            {/* CLIENT REQUEST SECTION */}
                            <br /><br />
                            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <h5 style={{fontWeight: 'bold'}}>1. Send us a Request</h5>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            You can choose a channel to reach us that is the most convenient for you
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <img style={{ height: '50%', width: '50%' }}  alt='Client Request' src={ClientRequestImg} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <div>
                                        <br />
                                        <Hidden mdUp>
                                            <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                                You may choose the most convenient channel to contact us.
                                            </div>
                                        </Hidden>
                                        <ul>
                                            <li>Our email <b> contact@izsoftwares.com </b> or  <b> any contact button on our website. </b> Our average response time may vary from 1­–2 hours to 2-3 business day, depending on the queue.</li>
                                            <li> <b>By phone +254 703 468 300 or +254 113 584 021: </b> the quickest way to reach us. We are available 8AM - 6PM on business days, on Kenya Time zone.</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>

                            {/* CLIENT SCHEDULE SECTION */}
                            <br /><br />
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <h5 style={{fontWeight: 'bold'}}>2. Schedule an introductory call</h5>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            We mainly conduct concise calls with our clients to have a brief introduction to parties and discuss pain points.
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <img style={{ height: '50%', width: '50%' }}  alt='Client Meeting' src={ClientMeetingImg} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <br />
                                    <div style={{fontSize: '18px', lineHeight: 1.78, textAlign: 'justify'}}>
                                        We respect your time. So, before the first contact, our sales team collect publicly available information about your company to direct the conversation straight to the point.
                                        <br />
                                        We need the call to dive into your situation, and we do care to make the most of this first conversation. 
                                        We don't listen passively but ask questions to uncover hidden pains and detect more value creation opportunities that you can capitalize on.
                                    </div>
                                </Grid>
                            </Grid>

                            {/* CLIENT NDA SECTION */}
                            <br /><br />
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <h5 style={{fontWeight: 'bold'}}>3. Sign an NDA</h5>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            A Non-Disclosure Agreement can be signed before or after the introductory call, depending entirely on our clients' preference.
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <img style={{ height: '50%', width: '50%' }}  alt='Client NDA' src={ClientNDAImg} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <br />
                                    <div style={{fontSize: '18px', lineHeight: 1.78, textAlign: 'justify'}}>
                                        We prioritize building trustful relationships by safeguarding your confidential business information through legal measures. 
                                        Depending on your needs, we offer flexibility to sign an NDA before the introductory call or upon agreement of a service contract.
                                    </div>
                                </Grid>
                            </Grid>


                            {/* CLIENT PROPOSAL SECTION */}
                            <br /><br />
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <h5 style={{fontWeight: 'bold'}}>4. Get a Proposal</h5>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            A service proposal document is provided for free and offers a comprehensive understanding of the service scope or the solution we are offering. Our proposals always include the following:
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <img style={{ height: '50%', width: '50%' }}  alt='Client Proposal' src={ClientProposalImg} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <br />
                                    <Hidden mdUp>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            The purpose of the proposal is to clearly communicate what the client can expect from our service, providing a comprehensive understanding of the service scope or the solution we offer.
                                            <br />
                                            Our proposal includes the following:
                                        </div>
                                    </Hidden>
                                    <div>
                                        <ul>
                                            <li>Short summary to make our offering comprehensible at a glance.</li>
                                            <li>Scope of work / Technical Execution Plan.</li>
                                            <li>Cost estimate.</li>
                                            <li>Project Timelines.</li>
                                            <li>Deliverables focused on the business value.</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>


                            {/* CLIENT SLA SECTION */}
                            <br /><br />
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <h5 style={{fontWeight: 'bold'}}>5. Sign a Service Contract & Kick off</h5>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            In our commitment to establish clear expectations and protect both parties, we formalize our mutual obligations and rights through a comprehensive Service Contract.
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={4}>
                                    <div>
                                        <img style={{ height: '50%', width: '50%' }}  alt='Client SLA' src={ClientSLAImg} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <br /> 
                                    <Hidden mdUp>
                                        <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                            In our commitment to establish clear expectations and protect both parties, we formalize our mutual obligations and rights through a comprehensive Service Contract.
                                        </div>
                                    </Hidden>
                                    <div style={{fontSize: '18px', lineHeight: 1.78}}>
                                        For continuous services (i.e ConnectSphere Services), we also sign a Service Level Agreement (SLA) that defines the scope of provided service and the metrics to assess its efficiency.
                                        Rest assured, your interests and confidential information are safeguarded within the framework of our service contract.
                                    </div>
                                </Grid>
                            </Grid>

                            {/* TESTIMONIAL SECTION */}
                            <br /><br /><br />
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12}>
                                    <br />
                                    <Testimonial />
                                </Grid>
                            </Grid>
                           

                            {/* CONTACT SECTION */}
                            <br /> <br /><br /><br />
                            <ContactUsClientOnboarding />

                            <Share/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}