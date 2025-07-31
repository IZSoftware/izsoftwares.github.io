import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function IndustriesComponent({image, text}){

    const [isHovered, setIsHovered] = useState(false);
  
    const lineStyles = {
      with:'100%',
      transition: '0.5s',
      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      border:'1px',
      height:'4px',
      backgroundColor:'#005eb8'
    };
  
    const textStyle ={
      color: isHovered? '#005eb8' : '',
      alignItems:'center'
    }
  
    return(
      <Box>  
        <Box 
          sx={{boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 -1px 5px 0 rgba(0, 0, 0, 0.05)'}} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} >
  
          <Box sx={{fontSize: '12px', right: '10px', textAlign: 'end'}}>    
            {!isHovered? <ArrowOutwardIcon fontSize='12px' sx={{color:'#005eb8'}}/> : <ArrowForwardIcon fontSize='12px' sx={{color:'#005eb8'}}/>}
          </Box>
          
          <div> 
              <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}> 
                  <img src={image} alt='Img not available' height={100} width={100} />
              </Box>
              <Box sx={{paddingBottom: 5, textAlign: 'center'}} style={textStyle}> 
                  {text} 
              </Box>
          </div>
          <div style={lineStyles} />

        </Box>
      </Box>
    )
  }
  
  