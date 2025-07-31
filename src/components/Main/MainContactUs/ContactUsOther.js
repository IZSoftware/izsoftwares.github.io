import React from 'react'
import {Grid, Hidden} from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



export default function ContactUsOther() {
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
        <Box> 
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>

              <br />

              <form onSubmit={submit} action="https://formspree.io/mdowveog" method="POST">
              
                <Hidden smDown>
                  <h6>If you need Professional Advice or Technological Expertise, Don’t hesitate to reach out.</h6>
                </Hidden>
                
                <Grid container direction="column" justifyContent="center" alignItems="center">
                
                  <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{marginBottom: 2}}>

                    <Grid item xs={12} sm={12} md={6}>
                      <TextField name='email' label='Email' variant='filled' fullWidth='true' />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <TextField name='name' label='Company Name' variant='filled' fullWidth='true'/>
                    </Grid>

                  </Grid>
                  <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{marginBottom: 5}}>

                    <Grid item xs={12} >
                      <TextField name='message' label=' How can we help ?' variant='filled' fullWidth='true' multiline='true' rows={5} />
                    </Grid>
                                                
                  </Grid>


                  <Hidden smDown>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                      <Button variant="contained" size="large" type="submit" endIcon={<SendIcon />}> <b> Submit </b> </Button>
                    </Grid>
                  </Hidden>

                  <Hidden smUp>
                    <Grid container direction="row">
                      <Grid item xs={12}>
                        <Button variant="contained" size="large" fullWidth='true' type="submit" endIcon={<SendIcon />}> <b> Submit </b> </Button>
                      </Grid>
                    </Grid>
                  </Hidden>

                </Grid>
              </form>
              <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right' }} open={openValid} autoHideDuration={7000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                  Thank you for contacting us. We will get back ASAP.
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