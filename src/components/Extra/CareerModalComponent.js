import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function CareerModal({ title, jobSummary, location, jobQualifications, jobResponsibility, eligibility}){

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const qualifications = jobQualifications || [];
  const responsibility = jobResponsibility || [];

  return (
    <div>
      <button onClick={handleOpen}className='btn-apply'>Apply Now</button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">

        <Box  className='modal-box' style={{ overflowY: 'auto', maxHeight: '90vh' }}>
         <h1 style={{fontWeight:'bold'}} >{title}</h1>
         <div className='job-position'>{location}</div>

         <h2 style={{fontSize: '2rem', paddingBlock: '1rem', fontWeight: 600}}>Background</h2>
          <Typography sx={{ mt: 0,  textAlign: 'justify' }}> 
              <span> <b> Founded in 2022, </b></span> IZSoftwares emerged with a fervent commitment to innovation, aspiring to redefine the technological landscape in Africa. 
              After undergoing a rebranding in mid 2023, as <span style={{color: '#004485', fontWeight: '700'}}> Evolv IZSoftwares Group </span> 
              it transitioned into a prominent provider of <span><b>Software Development Services </b></span> and <span><b> Digital Transformation Solutions. </b></span>
              Originally conceived as a modest startup product company, 
              the switched to IT Services in 2023 marked a pivotal transformation and ever since we have been instrumental in enhancing the operational efficiency of 
              non-IT organizations and software product companies, facilitating accelerated business growth and customer acquisition.
          </Typography>

          <h2 style={{fontSize: '2rem', paddingBlock: '1rem', fontWeight: 600}}>Position Summary</h2>
          <Typography  sx={{ mt: 0, textAlign: 'justify'}}>{jobSummary}</Typography>

          <h2 style={{fontSize: '2rem', paddingBlock: '1rem', fontWeight: 600}}>Preferred Qualifications and Experiences</h2>
          <div>
            {qualifications.map((qualification, index) => (
              <ul key={index + 1}>
                <li className='list-disc'>{qualification}</li>
              </ul>
            ))}
          </div>

          <h2 style={{fontSize: '2rem', paddingBlock: '1rem', fontWeight: 600}}>Major Responsibilities</h2>
          <div>
            {responsibility.map((responsibility, index) => (
              <ul key={index + 1}>
                <li className='list-disc'>{responsibility}</li>
              </ul>
            ))}
          </div>


          <h2 style={{fontSize: '2rem', paddingBlock: '1rem', textAlign: 'justify', fontWeight: 600}}>Eligibility</h2>
          <div>
            {eligibility.map((e, index) => (
              <ul key={index + 1}>
                <li className='list-disc'>{e}</li>
              </ul>
            ))}
          </div>


          <h2 style={{fontSize: '2rem', paddingBlock: '1rem', fontWeight: 600}}> Applications</h2>
          <Typography sx={{ mt: 0, textAlign: 'justify' }}>
            Submit your application via email by sending a single document that comprises a cover letter outlining your suitability for the position,
            a comprehensive curriculum vitae as a separate document. 
            <br /> <br />
            Submit your application to: 
            <Link color="deepblue" href={`mailto:recruitment@izsoftwares.com?subject=Application for Vacancy Announcement - ${title}`} underline='none'>
              {' '}{'recruitment@izsoftwares.com'}
            </Link>
          </Typography>

          <div className='modal-btns' style={{display:'flex',justifyContent:'space-between', paddingTop:20}}>
          <a style={{width: "fit-content"}} href={`mailto:recruitment@izsoftwares.com?subject=Application for Vacancy Announcement - ${title} [IZ]`} className='btn-apply' >Apply Now</a>
          <button style={{width: "fit-content"}} onClick={()=>setOpen(false)} className='btn-apply'>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
