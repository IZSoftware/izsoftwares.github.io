import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import EventUpcoming from '../../components/Extra/EventUpcomingComponent';
import { Grid, Typography, Hidden } from '@mui/material';
import {eventsData} from '../../components/Data/EventData';

export default function Events() {
    const [eventType, setEventType] = React.useState('');
    const [filterData, setFilterData] = useState(eventsData);

    const handleChange = (e) => {
        const selectedEventType = e.target.value;
        setEventType(selectedEventType);
        handleFilterData(selectedEventType);
    };

    const handleFilterData = (selectedEventType) => {
        const filtered = eventsData.filter((event) => event.eventType === selectedEventType);
        if(selectedEventType !== 'all') {
            setFilterData(filtered);
        } else { setFilterData(eventsData) }

    }

  return (
    <Box sx={{width: '100%', marginTop: '50px'}}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>

                <Box>
                    <Grid container direction="row">
                        <Box py={16} style={{width: "100%", background: "linear-gradient(90deg, rgba(39,33,147,1) 0%, rgba(13,45,136,1) 35%, rgba(5,96,209,1) 100%)"}}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{p: 5}}>
                                <Grid item xs={10}>
                                    <Typography variant='h2' fontWeight={700} color={"#FFFFFF"}>Events</Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography color="#FFFFFF" fontWeight={500}> Find what events are coming next.</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container direction="row" justifyContent="center" sx={{p: 5}}>
                            <Grid item xs={12} sm={10} py={{xs: "5px", sm: "20px"}}>
                                <Grid container direction="row" justifyContent="space-between">
                                    <Hidden smDown>
                                        <div>Showing {filterData.length} / {eventsData.length}  elements</div>
                                    </Hidden>
                                    <FormControl sx={{ minWidth: 140, marginBottom: {xs: "25px"} }} size="small">
                                        <InputLabel id="demo-select-small-label" sx={{color:'#0065c5'}}>Event Type</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            label="Event Type"
                                            value={eventType}
                                            onChange={handleChange}>

                                            <MenuItem value="all">All</MenuItem>
                                            <MenuItem value="In Person">In Person</MenuItem>
                                            <MenuItem value="Webinar">Webinar</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start">
                                    <Typography sx={{fontSize: {xs: "28px", md: "32px", lg:"42px"}}} pb={8} variant='h3' component='h2' fontWeight={700}>Upcoming Events</Typography>
                                    <div>
                                        {filterData.map((event) => (
                                            <Grid item xs={12} sm={10} justifyContent="flex-start">
                                                <EventUpcoming
                                                    key={event.id}
                                                    eventDate={event.eventDate}
                                                    eventType={event.eventType}
                                                    eventName={event.eventName}
                                                    eventDesc={event.eventDesc}
                                                    eventStartTime={event.eventStartTime}
                                                    eventEndTime={event.eventEndTime}
                                                    eventLink={event.eventLink}
                                                />
                                            </Grid>
                                        ))}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}