import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './style.css';


function Share() {
  const currentUrl = window.location.href;
  return (
    <Box sx={{width: '100%'}}> 
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <Grid item xs={12} sm={10}>
          <div className="share-component">

              <p className="share-component-title">Share:</p>

              <a className="share-component-link" href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}>
                <LinkedInIcon titleAccess="Linkedin Account" />
              </a>

              <a className="share-component-link" href={`https://twitter.com/intent/tweet?url=${currentUrl}`}>
                <TwitterIcon titleAccess="Twitter Account"/> 
              </a>

              <a className="share-component-link" href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}>
                <FacebookOutlinedIcon titleAccess="Facebook Account"/>  
              </a>
            
          </div>
        </Grid>
       </Grid>
      
    </Box>
  )
}

export default Share
