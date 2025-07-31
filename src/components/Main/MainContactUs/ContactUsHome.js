import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



export default function ContactUsHome() {
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
        <Box sx={{ backgroundColor: 'rgb(246, 248, 248)', p: 5, width: '100%'}}> 
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={10}>
              <h1 className='hp-title' >Require a Consultation ?</h1>

              <br />

              <form onSubmit={submit} action="https://formspree.io/mdowveog" method="POST">
                
                <h6>Reach out anytime! We're here to address your queries 24/7</h6>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                
                  <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

                    <Grid item xs={12} sm={12} md={6}>
                      <TextField name='email' label='Work Email' variant='filled' fullWidth='true' />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <TextField name='name' label='Company Name' variant='filled' fullWidth='true'/>
                    </Grid>

                  </Grid>
                  <br />

                  <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

                    <Grid item xs={12} >
                      <TextField name='message' label=' How can we help you ?' variant='filled' fullWidth='true' multiline='true' rows={5} />
                    </Grid>

              
                    <Grid item xs={6}> 
                      <input type="text" name="_gotcha" style={{display: 'none'}} />
                    </Grid>
                                                
                  </Grid>

                  <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Button variant="contained" size="large" type="submit" endIcon={<SendIcon />}> <b> Submit </b> </Button>
                  </Grid>

                </Grid>
              </form>
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
          <br />
        </Box>
    )
}