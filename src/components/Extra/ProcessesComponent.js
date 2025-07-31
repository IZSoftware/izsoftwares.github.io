import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RequirementImg from '../../resources/images/processes/requirement.svg';
import UIUXImg from '../../resources/images/processes/ui_ux.svg';
import PrototypeImg from '../../resources/images/processes/prototype.svg';
import QaImg from '../../resources/images/processes/qa.svg';
import DeploymentImg from '../../resources/images/processes/deployment.svg';
import MaintenanceImg from '../../resources/images/processes/maintenance.svg';



export default function ProcessesComponent(){
    const processesDataTest=[
        {
            image: RequirementImg,
            title:'1. Requirement Gathering',
            text:'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.'
        },
        {
            image:UIUXImg,
            title:'2. UI/UX Design',
            text:'We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.'
        },
        {
            image: PrototypeImg,
            title: '3. Prototype',
            text: 'After designing, you will get your prototype, which will be sent ahead for the development process for the product.'
        },
        {
            image: 'https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/process-we-follow/appdevelopment.svg',
            title: '4. Development',
            text: 'Development of Software / ERP started using latest tools and technology with transparency.'
        },
       
        {
            image: QaImg,
            title: '5. Quality Assurance',
            text: 'IZSoftwares values quality and provides 100% bug free application with no compromisation in it.'
        },
        {
            image: DeploymentImg,
            title: '6. Deployment',
            text: 'After testing and following all processes, We make sure the deployment is easy using CI / CD Technology tools.'
        },
        {
            image: MaintenanceImg,
            title: '7. Support & Maintenance',
            text: 'Our company offers you all support and the team is always ready to answer every query after deployment.'
        }
    ]
    return(
        <Box sx={{width: '100%'}}>
            <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                {processesDataTest.map((items)=>(
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Box
                            sx={{
                                minWidth: '250px !important',
                                maxWidth: '250px !important',
                                minHeight: '350px !important',        
                                padding: '45px 25px !important',
                                borderRadius: '15px !important',
                                boxShadow: '0px 10px 15px 0px rgba(0,0,0,0.1) !important',
                                webkitBoxShadow: '0px 10px 15px 0px rgba(0,0,0,0.1) !important',
                                mozBoxShadow: '0px 10px 15px 0px rgba(0,0,0,0.1) !important',
                                minWidth: '100% !important',
                                minHeight: '100% !important'
                            }}>
                       
                            <div class="title-box text-center">
                                <img class="img-fluid" src={items.image} alt="development"/>
                                <h3 class="h6 my-3 w-100"><b>{items.title}</b></h3>
                                <p class="desc m-0">{items.text}</p>
                            </div>
                        </Box> 
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}