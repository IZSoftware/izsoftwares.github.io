import { Optimal, SoftwareTypesCard, Transform } from '../../components/Extra'
import TimeLine from '../../components/Timeline/TimeLine';
import Share from '../../components/share/Share';
import { Box } from '@mui/material';
import { geoData } from '../../components/Data/ServiceMap';
import Typography from '@mui/material/Typography';

export default function DigitalTransform() {
  return (
    <div >
      <div className="icp-header-container">
        <div className="icp-header">
        <h1 className="icp-title">
        End-to-End Digital Transformation Services
        </h1>   
        <p className="icp-text">Digital transformation is the process of planning and executing an individual business strategy for digital adoption. Medium and large enterprises partner with IZSoftwares to find improvement opportunities in their business processes and launch digital transformation.</p>
        <div className="icp-header-phrase">
        {/* <p className='text'>Combining over 30 years of experience in IT and a great drive for innovation, IZSoftwares designs and builds software to rely on: secure, high-performing, scalable, and user-friendly.</p> */}
        </div>
        <div className="icp-header-link-wrapper">
        <button  className="icp" >
        Start Your Digital Tranformation
        </button>
        {/* <button className="icp2">
        Request software development
        </button> */}
        </div>
        
        </div>
        <div className="icp-image-wrapper ">
        <img  
        className='img' alt='nothing to show here'
        src="https://www.scnsoft.com/it-consulting/digital-transformation-services/cover-pic-digital-transformation-services.svg"/>
        </div>
        </div>
        <div className='main'>
          <div className='left'>
            <h1 className='hp-title'>True to Our CEO’s Word – See How We Can Apply Digital Transformation for You </h1>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
              <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
              
            </div>
            <h1 className='hp-title'>How We Unfold Digital Transformation</h1>
           

            <div>
              <TimeLine/>
            </div>
            <h1 className='hp-title'>Choosing an Optimal Pace for Your Project</h1>
            <Optimal/>
            <Optimal/>
            <h1 className='hp-title'>Digital Transformation Technologies We Use to Ensure Business Value </h1>
            <div style={{display:'flex',flexWrap:'wrap',gap:'7px',}}>
            <Transform/>
            <Transform/>
            <Transform/>
            <Transform/>
            </div>
          </div>
         
        </div>
        <div style={{paddingLeft:'14%',paddingRight:'14%'}}>
          <h1 className='hp-title'>How IZSoftwares Will Create Your Digital Transformation Profit </h1>

          <div>Digital transformations are vast in scale and cost. So, before rushing into this experience, you need to understand if the investment will pay off. Below, we describe the most common opportunities created by digital adoption, but surely you will have even more benefits arising from your individual digital transformation strategy.</div>
        <div 
        className='main_box_geography'
        >
          {geoData.map((item, i) => (
            <Box
              className='box_geography'
            >
              <div
              style={{
               marginLeft:'auto',
               marginRight:'auto',
               display:'flex',
               paddingBottom:5  
              }}
              >
              <img alt='nothing here' src='https://www.scnsoft.com/icons-linear-gradient/star.svg'
              style={{
                height:50,
                width:50,
                alignItems:'center'
              }}
              />
              </div>
              <Typography variant="h6" style={{ textAlign: 'center',fontWeight:'bold' }}>{item.title}</Typography>
              <Box
                mt={2}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                paddingLeft="16px"
                gap='5px' 
              >
               <ul>
                  <li className='box_geography_text'>{item.text}.</li>
                  <li  className='box_geography_text'>{item.text1}</li>
            </ul>
              </Box>
            </Box>

          ))}
        </div>
        </div>
        <div className='share_section'>
        <Share/>

        </div>
    </div>
  )
}
