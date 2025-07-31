import React from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import HealthcareIQ_Img from '../../resources/images/Partnership/HealthcareIQ.png';
import PajecImg from '../../resources/images/Partnership/Pajec.png';
import NBL_Img from '../../resources/images/Partnership/NBL.png';
import LaloImg from '../../resources/images/Partnership/Lalo.svg';
import EatAndMoreImg from '../../resources/images/Partnership/EatAndMore1.jpg';
import MinervaImg from '../../resources/images/Partnership/Minerva.png';


const partnershipImg = [
  {
    name: 'HealthcareIQ',
    description: 'HealthcareIQ Florida',
    image: HealthcareIQ_Img,
    width: 120,
    height: 60
  },
  {
    name: 'PAJEC',
    description: 'Patronant des Jeune Entrepreneur du Cameroon',
    image: PajecImg,
    width: 120,
    height: 60
  },
  {
    name: 'Nucleus Biotech Labs',
    description: 'NBL',
    image: NBL_Img,
    width: 120,
    height: 60
  },
  {
    name: 'Lalo App',
    description: 'Lalo App',
    image: LaloImg,
    width: 120,
    height: 60
  },
  {
    name: 'EatAndMore UK',
    description: 'EatAndMore UK',
    image: EatAndMoreImg,
    width: 120,
    height: 60
  },
  {
    name: 'Minerva Anonymization',
    description: 'Minerva',
    image: MinervaImg,
    width: 120,
    height: 60
  }
];


export function Partnerships() {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));


  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: isXS ? 1 : (isSM ? 2 : (isMD ? 3 : 5)),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <div className='slider'>
      <Slider {...settings}>
        {partnershipImg.map((img, index) => {
          return (
            <div key={index}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={img.image} title={img.name} alt={img.description} width={img.width} height={img.height} />
                </Grid>
              </Grid>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const successStories = [
  {
    label: {
      content: [
        {
          type: 'phrase',
          text: "The cooperation with Evolv IZSoftwares Group during all this time was very positive, the work, the delivery even difficult tasks was done with high proficiency and delivered always on time. I endorse this company and the team, and I will highly recommend them."
        }
      ]
    },
    company: "Eat&More",
    country: "London, UK",
    profile: EatAndMoreImg,
    user: "Erio Malagoli, CEO, Eat&More"
  },
  {
    label: {
      content: [
        {
          type: 'phrase',
          text: "Cooperation with IZSoftwares was excelent, They have an agile way of work with strong cooperation with us. For each sprint in the project was important:"
        },
        {
          type: 'points',
          list: [
            "Business process view",
            "IT Analyst view",
            "Clarification"
          ]
        },
        {
          type: 'phrase',
          text: "Based on this, cooperation with IZSoftwares was great."
        }
      ]
    },
    company: "Minerva",
    country: "Nitra, Slovakia",
    profile: MinervaImg,
    user: "Anton Lieskovsky, Project Manager, Minerva"
  },
  {
    label: {
      content: [
        {
          type: 'phrase',
          text: "IZSoftwares are always available, and peers with you on reaching good quality of products. You feel you are working with a team member that cares with you about the success of the project. We are lucky to have work with them."
        }
      ]
    },
    company: "HealthcareIQ",
    country: "Florida, USA",
    profile: HealthcareIQ_Img,
    user: "Kati Flores, Director Data Curation Analytics, HealthcareIQ"
  },
  {
    label: {
      content: [
        {
          type: 'phrase',
          text: "It has been a couple of months we are working together and we (NBL) appreciate the quality of our relationship. As every collaboration we have to show out all positives and negatives points in the duty of improve the way of working together. It is in this perspective we can quote as positives points :"
        },
        {
          type: 'points',
          list: [
            "The expertise of IZSoftwares.",
            "The openmind of the IZSoftwares team.",
            "The disponibility of IZSoftwares representatives.",
            "Consistently delivering High-Quality Products after every sprint."
          ]
        }
      ]
    },
    company: "Nucleus Biotech Lab",
    country: "Douala, Cameroon",
    profile: NBL_Img,
    user: "Rostand Muriel, CEO, Nucleus Biotech Lab"
  }
];


export function SwipeableText() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

  return (
    <Box>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          interval={7000}
          enableMouseEvents>
          {successStories.map((step, index) => (
            <div key={index}>
              <Box sx={{ height: 'auto', display: 'block', maxWidth: '100%', overflow: 'hidden', backgroundColor: '#fafafa;', border: '10px solid #e0e0e0', borderRadius: 5, paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5}}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                  <div>
                   
                    {step.label.content.map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        {item.type === 'phrase' && <p>{item.text}</p>}
                        {item.type === 'points' && (
                          <ul>
                            {item.list.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <Grid item xs={10} sm={10}>
                    <br />
                    <div>
                      <b>{step.user}</b>
                    </div>
                    <br />
                    <div>
                      <b>{step.country}</b>
                    </div>
                  </Grid>
                  
                </Grid>
                <br />
                <div>
                  <img src={step.profile} width={120} height={60} alt="Logo" />
                </div>
              </Box>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
    </Box>


  );
}