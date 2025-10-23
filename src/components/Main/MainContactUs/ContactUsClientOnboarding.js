import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ContactUsClientOnboarding() {
  const [openValid, setOpenValid] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenValid(false);
    setOpenError(false);
  };
    
  function submit(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let form = e.target;
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setOpenValid(true);
      } else {
        setOpenError(true)
      }
    };
    xhr.send(new FormData(form));
  }

  return (
    <Box sx={{ backgroundColor: 'rgb(246, 248, 248)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}> 
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            {/* Title Section - Above image and form */}
            <Box sx={{ textAlign: 'left', mb: 3 }}>
              <h1 className='hp-title' style={{ 
                margin: 0, 
                fontSize: '2rem', 
                fontWeight: 'bold',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Reach Out To Our Expert
              </h1>
            </Box>

            {/* Image and Form Section */}
            <Grid container spacing={3} direction="row" alignItems="center">
              {/* Image Section - Left Side */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  sx={{
                    width: '90%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    maxHeight: '350px',
                    objectFit: 'cover'
                  }}
                  src="/contact us.jpg"
                  alt="Consultation"
                />
              </Grid>

              {/* Form Section - Right Side */}
              <Grid item xs={12} md={6}>
                <form onSubmit={submit} action="https://formspree.io/mdowveog" method="POST">
                  <Box sx={{ textAlign: 'left', mb: 2 }}>
                    <h6 style={{ margin: 0, fontSize: '0.9rem', color: 'gray', fontWeight: 'normal' }}>
                     If you need Professional Advice or Technological Expertise, Don't hesitate to reach out.
                    </h6>
                  </Box>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField 
                        name='email' 
                        label='Work Email' 
                        variant='outlined' 
                        fullWidth 
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField 
                        name='name' 
                        label='Company Name' 
                        variant='outlined' 
                        fullWidth 
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField 
                        name='message' 
                        label='How can we help you?' 
                        variant='outlined' 
                        fullWidth 
                        multiline 
                        rows={4} 
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <input type="text" name="_gotcha" style={{display: 'none'}} />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button 
                          variant="contained" 
                          size="medium" 
                          type="submit" 
                          endIcon={<SendIcon />}
                          sx={{ px: 3, py: 1 }}
                        > 
                          <b>Submit</b> 
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>

            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right' }} open={openValid} autoHideDuration={7000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                Thank you for contacting us. We will get back to you soon.
              </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right' }} open={openError} autoHideDuration={7000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
                Oops! something wrong happened. Check your network
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}