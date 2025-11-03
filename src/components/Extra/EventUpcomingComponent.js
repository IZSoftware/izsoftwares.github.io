import React from 'react';
import { Grid, Typography, Chip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from '@mui/material/Link';

export default function EventUpcoming({eventDate, eventName, eventDesc, eventType, eventStartTime, eventEndTime, eventLink}) {
  const { month, date, year, timeZone, day } = eventDate || {};

  return (
    <Grid container sx={{marginBottom: { xs: 4, md: 8, lg: 8 } }}>
      <Grid item xs={3} sm={2} md={2}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography variant="subtitle2" fontWeight={500} textTransform="uppercase">
              {month}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" color="#032d60" component="h2" sx={{fontSize: { xs: '32px', md: '32px', lg: '62px' }, fontWeight: 700 }}>
              {date}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={9} sm={10} md={10} sx={{ paddingLeft: { xs: '20px', lg: '40px' }, borderLeft: { xs: '3px solid #ebebeb' } }}>
        <Grid container direction="column" textAlign="left">
          <Chip variant="filled" label={eventType} sx={{  backgroundColor: eventType === 'Webinar' ? 'rgba(57, 101, 71, 0.1)' : 'rgba(255, 0, 0, 0.1)', color: eventType === 'Webinar' ? 'rgba(57, 101, 71, 1)' : 'rgb(255, 0, 0)', width: 'fit-content', paddingInline: '8px', marginBottom: 2 }}/>
          {/* Check if eventLink is not null and eventType is Webinar */}
          {eventLink && eventType === 'Webinar' ? 
          (
            <Typography color="#032d60" variant="h3" fontWeight="700" mt={2} sx={{ fontSize: { xs: '24px', md: '32px', lg: '40px' } }}>
              <Link href={eventLink} underline="none" color="#032d60">
                {eventName} <LaunchIcon fontSize='18'/>
              </Link>
            </Typography>
          ) 
          : 
          (
            <Typography color="#032d60" variant="h3" fontWeight="700" mt={2} sx={{ fontSize: { xs: '24px', md: '32px', lg: '40px' } }}>
              {eventName} {eventLink && <LaunchIcon fontSize='18'/>}
            </Typography>
          )}
          <Typography mt={1} textAlign="justify">
            {eventDesc}
          </Typography>
          <Typography mt={2} textTransform="uppercase" fontWeight="bold" color="deepskyblue">
            {`${day}, ${month}, ${date}, ${year}, at ${timeZone}`}
          </Typography>
          <Typography textTransform="uppercase">
            {eventStartTime} to {eventEndTime}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
