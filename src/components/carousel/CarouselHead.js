import React, {useEffect, useState, useCallback} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Hidden } from '@mui/material';
import { animated } from 'react-spring';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import HomePowerImg from '../../resources/images/home-carousel/home_power.jpg';
import HomeStreamlineImg from '../../resources/images/home-carousel/home_streamline.jpg';
import HomeDriveImg from '../../resources/images/home-carousel/home_drive.jpg';
import SideBeachTurkey from '../../resources/images/CareerCarousel/side-beach-turkey.jpg';
import EnterprisePortalDevelopment from '../../resources/images/CareerCarousel/enterprise-portal-development-for-a-financial-advisory-firm.jpg';
import CustomerPortalDevelopment from '../../resources/images/CareerCarousel/customer-portal-development-for-a-tax-consultation-agency.jpg';
import DevelopmentSharepointRecordsManagementSystem from '../../resources/images/CareerCarousel/development-of-a-sharepoint-records-management-system-for-a-us-legal-firm.jpg';


const homeCarousel = [
   {
     name: 'Image 1',
     imageUrl: HomePowerImg
   },
   {
     name: 'Image 2',
     imageUrl: HomeStreamlineImg
   },
   {
    name: 'Image 3',
    imageUrl: HomeDriveImg
  },
];


const data = [
  {
    name: 'Development of a Records Management System for a Legal Firm',
    description: 'BI solution delivered by ScienceSoft allowed the Customer to integrate the data from disparate sources and better understand their business with a comprehensive financial analysis.',
    imageUrl: SideBeachTurkey,
  },
  {
    name: 'An enterprise portal that offers advanced team collaboration and project management functionality and supports regulatory compliance.',
    description: 'An enterprise portal that offers advanced team collaboration and project management functionality and supports regulatory compliance.',
    imageUrl: EnterprisePortalDevelopment
  },
  {
    name:'Development of a Records Management System for a Legal Firm',
    description: 'A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents.',
    imageUrl:CustomerPortalDevelopment
  },
  {
    name:'Development of a Records Management System for a Legal Firm',
    description: 'A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents.',
    imageUrl: DevelopmentSharepointRecordsManagementSystem
  },
];
export const BackgroundCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      interval={4400} 
      indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
      stopAutoPlayOnHover={false}>
      {homeCarousel.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};



const Item = ({ item }) => {
  const phrases = [
    "power",
    "streamline",
    "drive"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4500);

    return () => {
      clearInterval(intervalId);
    };
  }, [phrases.length]);

  useEffect(() => {
    setText(phrases[textIndex]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textIndex]);

  return (
    <Paper
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

     
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={10}>

        <div>
          <p style={{ color: 'white' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Software Consulting and Development</h1>
          </p>
          <br />
        </div>

        <Hidden smDown>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <div>
              <p  style={{ color: 'white' }}><h2 style={{ color: 'white',  textAlign: 'center'}}> We </h2> </p>
            </div>
            
            <div className="sb-animated-inner" style={{ width: '210px' }}>
              <div className="sb-animated-label">Action</div>
              <div>
                <animated.span className="sb-animated-word">{text}</animated.span>
              </div>
            </div>
            <div>
              <p  style={{ color: 'white',  textAlign: 'center'}}><h2 style={{ color: 'white'}}> digital success </h2> </p>
            </div>
          </Grid>
        </Hidden>
        </Grid>
      </Grid>
    </Paper>
  );
};


export const CareersPage = () => {
  return (
    <Carousel autoPlay={true} animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {homeCarousel.map((item, index) => (
        <Itema key={index} item={item} />
      ))}
    </Carousel>
  );
};



const Itema = ({ item }) => {
  return (
    <Paper
      style={{
        backgroundImage:`url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     }}
    >
      <div style={{gap:20,display:'flex',flexDirection:'column',textAlign:'center'}}>
        <div style={{color:'#fff',fontSize:60,fontWeight:'bolder'}}>Careers</div>
        <div  style={{color:'#fff',fontSize:50,fontWeight:'bolder'}}>Work with IzSoftware</div>
        <div style={{color:'#fff',maxWidth:1000}}>AGF recognises that its’ staff are its most important resource and are key to the achievement of AGF’s objectives. The achievement of AGF’s strategic objectives is dependent on having the right number of staff, with the right knowledge, skills and competencies deployed in the right roles.</div>
        <Link to='/careers-more' className='read-more'>Read More</Link>
      </div>
    </Paper>
  );
};


export const CardCarousel = () => {
  const [, setText] = useState('');

  const animateText = useCallback((direction) => {
    // Replace 'description' with the text you want to animate
    const description = "Lorem ipsum dolor sit amet...";
    const max = description.length;

    for (let index = 0; index < max; index++) {
      const startIndex = direction ? 0 : max;
      const endIndex = direction ? index : max - index;
      setTimeout(() => {
        setText(description.substring(startIndex, endIndex));
      }, index * 50);
    }
  }, []);

  useEffect(() => {
    animateText(true);
  }, [animateText]);
  return (
    <Carousel animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {data.map((item) => (
        <Paper
       className='pepperSection'
      >
         <div className='imageSection'> 
          <img alt='nothing' style={{height:'70%',width:'80%'}} className='imageSectionsm' src={item.imageUrl}/>
         </div>
         <div className='textsection'> 
         <div className='txt_title'> {item.name} </div>
         {item.description}
         
         <div className='details'> 
         <Link to={'/professiona-services-extra'}>
          Project Details
         </Link>
         
         <ArrowForwardIcon sx={{
              color: "white",
            
            }}/>
         </div>
         </div>
      </Paper>
      ))}
    </Carousel>
  );
};

export const CaseStudy = () =>{
  return(
    <div
    className='pepperSection1'
   >
      <div className='imageSection'> 
       <img alt='nothing' style={{height:'100%',width:'100%'}} className='imageSectionsm' src='https://www.scnsoft.com/images-for-slider-with-content/custom-software-dev/customer-portal-development-for-a-tax-consultation-agency.jpg'/>
      </div>
      <div className='case-study-textsection1'> 
      <div className='casestudy-title' style={{marginTop:-35}}> Development of a Records Management System for a Legal Firm </div>
      <div className='case-study-text'> 
      A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents
      A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents
      </div>
      
      <div className='details1'> 
      <Link  to='/professiona-services-extra' style={{textDecoration:'none',color:'#005eb8'}}>
       Learn More
      </Link>
      
      <ArrowForwardIcon sx={{
           color: "#005eb8",

         }}/>
      </div>
      </div>
   </div>
  )
}



export const CareerHeader = ({ item }) => {
  return (
    <Paper
      style={{
        backgroundImage: `url(${item})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '40px 60px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderTopLeftRadius: '0',
          borderTopRightRadius: '12px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '0',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          marginBottom: '20px',
          marginTop: '-15px'
        }}>
          JOIN US, BE YOU
        </div>
        
        <div style={{
          fontSize: '16px',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          This is where individual creativity comes together, united by the values that inspire great work. Here, you'll do more than just join something - you'll contribute something useful.
        </div>
        
        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginTop: '20px'
        }}>
          IZSoftwares. Make It Yours
        </div>
      </Paper>
    </Paper>
  );
};