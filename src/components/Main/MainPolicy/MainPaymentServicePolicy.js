import React from 'react';
import { Box, Grid, Typography, Hidden, Link } from '@mui/material';
import './PolicyStyle.css';


export default function MainPaymentServicePolicy(){
    return(
        <div>
            <Box sx={{marginTop: 20}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={10} sm={10}>

                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={10}>
                                <Hidden mdDown='true'>
                                   <Typography className='titleA' variant='h2'>
                                        <strong>Payment & Service Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Payment & Service Policy</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <br /><br />
                                <Typography variant='subtitle1' paragraph="true">
                                    <i>Last Updated: May 2, 2024</i>
                                </Typography>
                                <br />
                                Thank you for choosing Evolv IZSoftwares Group for your Software Development, Digital Transformation, Legacy Modernization, UI/UX Design, ConnectSphere Service, and eGovernment Solutions. 
                                We appreciate your trust in our services and are committed to delivering high-quality solutions tailored to your needs. This policy will be separated in two parts which are:
                                
                                <ul>
                                    <li> Payment and Service Terms  </li>
                                    <li> Refund & Cancellation Terms </li>
                                </ul>
                                
                                <b>Payment & Service Term</b> is designed to outline the terms and conditions governing, Payment, Service Delivery, Price Adjustment, Taxes and Fees, Subscription Terms, Termination of Services, Intellectual Property Rights while <br/>
                                <b>Refund & Cancellation Policy</b> will outline the terms and conditions governing refunds and cancellations to ensure a transparent and mutually beneficial relationship.                                
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Payment Terms</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Payment Terms</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    
                                    <h4><strong>Accepted Payment Method </strong></h4>
                                    We accept the following payment methods for our software development, digital transformation, legacy modernization, UI/UX design, and eGovernment solutions services:

                                    <ul>
                                        <li> <b>Bank Cards:</b> We currently accept payments made with major debit, credit and prepaid cards, including Union, Visa, and MasterCard using <b>I&M WebPay Solution</b>. For more: https://www.imbankgroup.com/ke/business-solutions/im-webpay </li>
                                        <li> <b>PayPal:</b> Clients have the option to make payments securely through PayPal. </li>
                                        <li> <b>Mobile Money:</b> We also accept payments through mobile money using MPesa PayBill. Our PayBill details will be provided upon request. </li>
                                        <li> <b>Bank Transfers:</b> For a more traditional approach, we also accept payments through direct bank transfers. Our bank details will be provided upon request. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Payment Due Dates</strong></h4>

                                    <ul>
                                        <li> 
                                            <b>Software Development, Digital Transformation, and UI/UX Design Services </b><br />
                                            For project-based work: Payments are typically structured based on project milestones. Invoices will be issued upon the initiation of each agreed-upon milestone, with initial payment due within 7 days of the invoice date.
                                        </li>
                                        <li>
                                            <b>Legacy Modernization and eGovernment Solutions</b><br />
                                            Payment terms for these services will be discussed and agreed upon during the project initiation phase, considering the scope and duration of the engagement.

                                        </li>
                                        <li>
                                            <b>ConnectSphere Service (Subscription-Based Service)</b><br />
                                            For subscription-based services, billing cycles are clearly communicated upon subscription. Renewal invoices will be issued in advance, with payment due at least 7 days before the renewal date.
                                        </li>
                                        <li>
                                            <b>Customized Payment Plans</b><br />
                                            In certain cases, customized payment plans may be established based on mutual agreement between the client and our company. Any such arrangements will be clearly outlined on IZPayment-Schedule Agreement.
                                        </li>
                                    </ul>

                                    <br />
                                    
                                    <h4><strong>Payment Conditions for Lower Value Contracts </strong></h4>
                                    <ul>
                                        <li> Contracts amounting to less than $1000 will be split into two installments, with the initial payment deemed non-refundable.</li>
                                    </ul>

                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Service / Product Delivery</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Service / Product Delivery</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Timeline for Delivery </strong></h4>
                                    The delivery timeline for  projects will be outlined in the project proposal and agreement. 
                                    Milestones and project phases will be clearly defined, providing clients with a transparent view of the development process.

                                    <br /><br />

                                    <h4><strong>Communication of Delays </strong></h4>
                                    We understand that unexpected challenges may arise during the course of a project. In the event of potential delays, we are committed to maintaining transparent communication with our clients. 
                                    The following outlines our approach:

                                    <ul>
                                        <li> <b>Proactive Communication:</b>If our team anticipates any potential delays in the project timeline, we will promptly inform the client. This communication will include a detailed explanation of the factors contributing to the delay.</li>
                                        <li> <b>Mitigation and Resolution:</b> Alongside communication, we will present a mitigation plan outlining steps to address the delays and get the project back on track. This may involve allocating additional resources, adjusting timelines, or implementing other measures to expedite the process. </li>
                                        <li> <b>Client Consultations:</b> Clients will be actively involved in the decision-making process regarding any adjustments to the project timeline. We value client input and will collaborate to find solutions that meet both parties' expectations. </li>
                                        <li> <b>Revised Timelines:</b> Once a resolution is agreed upon, revised timelines will be communicated to the client. Our team will work diligently to minimize the impact on the overall project schedule. </li>
                                    </ul>
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Price Adjustment</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Price Adjustment</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Circumstances for Price Adjustment </strong></h4>
                                    <ul>
                                        <li> <b>Scope Changes:</b> Prices may be adjusted if there are significant changes in the project scope or requirements that were not initially accounted for in the agreement. This could include additional features, functionalities, or modifications requested by the client after the project has commenced.</li>
                                        <li> <b>Enhancements and Additional Services:</b> Prices may be subject to adjustment if the client requests enhancements or additional services beyond the originally agreed-upon scope. Such adjustments will be discussed and agreed upon with the client before implementation. </li>
                                        <li> <b>Unforeseen Circumstances:</b> In the case of unforeseen circumstances that significantly impact the project, such as changes in technology, regulatory requirements, or external dependencies, pricing adjustments may be necessary. These will be communicated and discussed with the client in a transparent manner.</li>
                                        <li> <b>Subscription-Based Services:</b> Prices for subscription-based services may be adjusted during renewal periods based on changes in service levels, features, or other factors agreed upon in the subscription terms. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Notification of Price Adjustment </strong></h4>
                                    <ul>
                                        <li> <b>Timely Communication:</b> Customers will be notified of any potential price adjustments as soon as it becomes apparent that changes are necessary. This proactive communication ensures transparency and allows clients to plan accordingly.</li>
                                        <li> <b>Written Notice:</b> Formal written notice will be provided to clients detailing the reasons for the price adjustment. This notice will include a breakdown of the changes in scope, additional features, or other factors contributing to the adjustment. </li>
                                        <li> <b>Timeframe for Notifications:</b> Clients will receive notification of price adjustments at least 30 days before the changes take effect. This timeframe allows clients to assess the impact on their budget and discuss any concerns or questions with our team.</li>
                                        <li> <b>Discussion and Agreement:</b> Following the notification, our team will be available to discuss the adjustments with the client, addressing any questions or concerns they may have. We aim to reach a mutual agreement that aligns with the client's needs and expectations. </li>
                                        <li> <b>Updated Agreement:</b> Once an agreement is reached, an updated contract or agreement reflecting the new pricing details will be provided to the client for their records. </li>

                                    </ul>

                                </Typography>
                            </Grid>



                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Taxes and Fees</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Taxes and Fees</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Inclusion of Taxes </strong></h4>
                                    <ul>
                                        <li> <b>Software Development, Digital Transformation, and UI/UX Design:</b> Our listed prices for software development services, digital transformation, and UI/UX design projects do not include taxes. Taxes, if applicable, will be added to the total amount at the checkout or invoicing stage. The specific tax rates will be communicated in accordance with local tax regulations.</li>
                                        <li> <b>Legacy Modernization and eGovernment Solutions:</b> Similarly, prices for legacy modernization and eGovernment solutions do not include taxes. Applicable taxes will be clearly outlined and added to the invoice or checkout total based on the relevant tax regulations. </li>
                                        <li> <b>Subscription-Based (ConnectSphere) Services:</b> For ConnectSphere services, prices displayed exclude taxes. Taxes will be applied during the checkout process or invoicing, and subscribers will be notified of the applicable tax rates.</li>
                                    </ul>

                                    <br />

                                    <h4><strong> Administrative Fees (Mandatory) </strong></h4>
                                    <ul>
                                        <li> <b>Financial Fees:</b>  This includes but depends on the payment methods choosen: Bank Transaction Fees and Payment Processing Fees. <Link href="/about/payment-services-policy/fees" underline="none"> View breakdown.</Link>  </li>
                                        <li> <b>Administrative Labor:</b> Time allocated to administrative tasks such as billing, invoicing, bookkeeping, and software subscriptions associated with financial management.</li>
                                    </ul>

                                    <br />

                                    <h4><strong>Additional Fees (Optional) </strong></h4>
                                    <ul>
                                        <li> <b>Transaction Fees:</b> PayPal Currency Conversion and Service Fees may apply. These fees will be clearly communicated at the time of payment and will be the responsibility of the clients. <Link href="/about/payment-services-policy/fees" underline="none"> View breakdown.</Link>  </li>
                                        <li> <b>Other Applicable Charges:</b> Clients should be aware that additional charges may apply in specific scenarios, such as third-party software licensing fees, specialized hardware requirements, or other external costs directly associated with the project. These charges will be clearly communicated and agreed upon in advance.</li>
                                        <li> <b>Subscription-Related Charges:</b> For subscription-based services, any additional fees related to upgrades, add-ons, or changes to subscription plans will be clearly communicated before implementation. Subscribers will have the opportunity to review and accept these changes before they are applied. </li>
                                    </ul>
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Termination of Services</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Termination of Services</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Conditions for Termination </strong></h4>
                                    <ul>
                                        <li> <b>Non-Payment:</b> Services may be terminated in the event of non-payment. If a customer fails to make the required payments within the specified timeframe, we reserve the right to suspend or terminate services.</li>
                                        <li> <b>Breach of Agreement:</b> Termination may occur in the event of a material breach of the agreement by the customer. This includes, but is not limited to, failure to adhere to payment terms, violation of usage policies, or engaging in prohibited activities outlined in the agreement. </li>
                                        <li> <b>Force Majeure Events:</b> In cases of force majeure events, where circumstances beyond our control prevent the continuation of services, termination may be necessary. However, reasonable efforts will be made to resume services once the force majeure event has been resolved.</li>
                                        <li> <b>Client Request:</b> Clients have the right to request termination of services. Such requests must be submitted in writing, and any prepaid fees for the remaining service period will be subject to the agreed-upon refund policy.</li>
                                    </ul>

                                    <br />

                                    <h4><strong>Adherence to Guidelines </strong></h4>
                                    <ul>
                                        <li> <b>Compliance with Term:</b> Users are expected to adhere to all guidelines and terms outlined in the agreement. This includes compliance with usage policies, ethical standards, and any specific guidelines related to the type of service being provided.</li>
                                        <li> <b>Project Collaboration:</b> In the case of collaborative projects, users must actively participate in the project according to agreed-upon milestones and communication protocols. Failure to do so may impact the project timeline and deliverables.</li>
                                        <li> <b>Prohibited Activities:</b> Users are prohibited from engaging in any activities that are illegal, unethical, or violate the terms of the agreement. Such activities may result in immediate termination of services and, where applicable, legal action.</li>
                                    </ul>
                                </Typography>
                            </Grid>



                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Intellectual Property Rights</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Intellectual Property Rights</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Ownership and Usage Rights </strong></h4>

                                    <ul>
                                        <li> 
                                            <b>Intellectual Property Rights:</b> All intellectual property rights related to the services delivered, including software, designs, and other materials, remain the exclusive property of <b>Evolv IZSoftwares Group.</b>
                                            Upon full payment for the services, the client is granted full ownership of the intellectual property rights pertaining to the specific deliverables for their intended purpose. 
                                            However, regarding the broader products or solutions offered, <b>Evolv IZSoftwares Group</b> will retain full ownership of the intellectual property rights.
                                        </li>
                                        <li> <b>Data Privacy and Security:</b> Evolv IZSoftwares Group is committed to ensuring the confidentiality, integrity, and availability of client data, following the principles outlined in the Data Protection Act of Kenya. Client data will be handled and stored securely, and measures will be implemented to protect against unauthorized access or disclosure. A detailed privacy policy is available on our website. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Liability and Dispute Resolution </strong></h4>
                                    <ul>
                                        <li> <b>Limitations of Liability:</b> While we strive to deliver high-quality services, <b>Evolv IZSoftwares Group</b> limits its liability for any direct or indirect damages arising from the provision of services within the bounds set by Kenyan law. In no event shall <b>Evolv IZSoftwares Group</b> be liable for consequential, incidental, or punitive damages.</li>
                                        <li> <b>Dispute Resolution Process:</b> In the event of a dispute, both parties agree to engage in good faith negotiations to resolve the matter. If resolution cannot be reached informally, the dispute will be subject to mediation by a neutral third party, in accordance with the Mediation Act of Kenya, before pursuing arbitration or legal action. Any legal proceedings will be conducted in Kenyan courts, as specified in the governing law clause of the agreement.</li>
                                    </ul>

                                    <br />
                                    
                                    <h4><strong>Updates to Terms </strong></h4>
                                    <ul>
                                        <li> <b>Notification of Updates:</b> Evolv IZSoftwares Group reserves the right to update these terms as needed. Clients will be notified of any changes through email and a notification will be prominently displayed on our website. Continued use of our services after the effective date of the changes constitutes acceptance of the updated terms.</li>
                                    </ul>

                                </Typography>
                            </Grid>
                


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Refund Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Refund Policy</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    <h4><strong>Eligibility for Refund </strong></h4>

                                    <ul>
                                        <li> Refunds are applicable in specific circumstances, primarily defined by the nature of the services provided and adherence to outlined conditions.</li>
                                        <li> Clients are eligible to request a refund within 14 days of the service purchase or project commencement. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Non-Refundable Service </strong></h4>

                                    <ul>
                                        <li> Certain services are deemed non-refundable, including but not limited to consultation fees, customization services, and third-party expenses incurred on behalf of the client.</li>
                                    </ul>

                                    <br />

                                    <h4><strong>Refund Process </strong></h4>
                                    <ul>
                                        <li> Clients must submit a refund request by contacting our customer support team at <b>support@izsoftwares.com.</b> The request should include detailed reasons for the refund.</li>
                                        <li> The refund process will commence upon approval, with funds returned within 7 business days. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Refund Amount </strong></h4>
                                    <ul>
                                        <li> The refund amount will be determined based on the extent of service completion and expenses incurred up to the point of cancellation.</li>
                                    </ul>

                                    <br />

                                    <h4><strong>Exception </strong></h4>

                                    <ul>
                                        <li> No refunds will be issued for services that have been completed or delivered.</li>
                                        <li> Refunds are not applicable for any delays caused by the client, such as the late provision of required information or approvals. </li>
                                    </ul>

                                </Typography>
                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Cancellation Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Cancellation Policy</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    <h4><strong>Cancellation by Client </strong></h4>
                                    <ul>
                                        <li> Clients may request cancellations at any stage of the project but must provide written notice to <a href={`mailto:cancellation@izsoftwares.com?subject=Cancellation Inquiry: Written Notice`} style={{textDecoration: 'none', color: '#005eb8'}}>cancellation@izsoftwares.com</a>.</li>
                                        <li> Cancellation requests are subject to the terms outlined in the service agreement or contract. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Cancellation Fees </strong></h4>
                                    <ul>
                                        <li> Cancellation fees may apply based on the project stage and resources expended.</li>
                                        <li> Clients are responsible for covering any third-party expenses incurred on their behalf. </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Project Handover </strong></h4>
                                    <ul>
                                        <li> Upon cancellation, clients may request the transfer of completed work, if applicable, based on the payment for services rendered.</li>
                                    </ul>
                                    <br />

                                    <h4><strong>Cancellation by Evolv IZSoftwares Group </strong></h4>
                                    <ul>
                                        <li> Evolv IZSoftwares Group reserves the right to cancel a project or service at any time due to unforeseen circumstances or non-compliance with our terms.</li>
                                    </ul>
                                </Typography>                                
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Continuous Improvement</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Continuous Improvement</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    <h4><strong>Feedback Mechanism </strong></h4>
                                    <ul>
                                        <li> 
                                            <b>Evolv IZSoftwares Group</b> values client feedback. We encourage clients to provide feedback on our services, 
                                            allowing us to continuously improve and enhance our offerings at <a href={`mailto:feedback@izsoftwares.com?subject=Feedback: [Brief Description]`} style={{textDecoration: 'none', color: 'inherit'}}>feedback@izsoftwares.com</a>.
                                            </li>
                                    </ul>

                                    <br />

                                    <h4><strong>Post-Project Evaluation </strong></h4>
                                    <ul>
                                        <li> Post-project evaluations provide insights into areas of improvement and opportunities for further collaboration at <a href={`mailto:feedback@izsoftwares.com?subject=Feedback: [Brief Description]`} style={{textDecoration: 'none', color: 'inherit'}}>feedback@izsoftwares.com  </a>.</li>
                                    </ul>
                                </Typography>                                
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Legal Compliance</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Legal Compliance</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    <h4><strong>Compliance with Laws </strong></h4>
                                    <ul>
                                        <li> Evolv IZSoftwares Group is committed to complying with all applicable laws and regulations governing our services in Kenya. Clients are expected to adhere to legal requirements as well.</li>
                                    </ul>

                                    <br />

                                    <h4><strong>Dispute Resolution </strong></h4>
                                    <ul>
                                        <li> In the event of disputes, Evolv IZSoftwares Group is committed to resolving issues amicably through mediation or other alternative dispute resolution mechanisms.</li>
                                    </ul>
                                </Typography>                                
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Governing Law</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Governing Law</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    <h4><strong>Jurisdiction and Laws </strong></h4>
                                    <ul>
                                        <li> This agreement is governed by and construed in accordance with the laws of the Republic of Kenya.</li>
                                        <li> Any disputes arising out of or in connection with this agreement will be subject to the exclusive jurisdiction of the courts in Kenya.</li>
                                    </ul>

                                    <br />
                                </Typography>                                
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='titleA' variant='h4'>
                                        <strong>Communication and Contact</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='titleA' variant='h6'>
                                        <strong>Communication and Contact</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    <h4><strong>Contact Information </strong></h4>
                                    <ul>
                                        <li> For payment requests, services, or any inquiries related to this Payment & Service Terms, please contact our sale team at <b> <a href={`mailto:sales@izsoftwares.com?subject=Payment and Service Inquiry: [Brief Description]`} style={{textDecoration: 'none', color: 'inherit'}}>sales@izsoftwares.com  </a></b></li>
                                        <li> For refund requests, cancellations, or any inquiries related to this Refund & Cancellation Terms, please contact our support team at <b> <a href={`mailto:support@izsoftwares.com?subject=Support Request: [Brief Description of Issue]`} style={{textDecoration: 'none', color: 'inherit'}}>support@izsoftwares.com  </a></b></li>
                                    </ul>

                                    <br />

                                    <h4><strong>Policy Updates </strong></h4>
                                    <ul>
                                        <li> Evolv IZSoftwares Group reserves the right to update or modify this Payment & Services Policy at any time. Clients will be notified of any changes through our official communication channels.</li>
                                    </ul>

                                </Typography>                                
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1' sx={{fontSize: '18px', lineHeight: 1.78}}>
                                    By choosing <b style={{color: '#004485'}}>Evolv IZSoftwares Group</b>, clients affirm their acknowledgment and agreement to abide by the terms and conditions outlined in this Payment & Service Policy. We are dedicated to maintaining transparency and fairness in our business practices, ensuring a positive and mutually beneficial relationship.
                                <br />
                                Thank you for choosing <b>Evolv IZSoftwares Group.</b>

                                </Typography>                                
                            </Grid>
                                                   
                        </Grid>                                    
                    </Grid>
                   
                </Grid>
            </Box>
            <br /><br />
        </div>
    )
}
