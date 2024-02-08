import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Logo from '../../resources/IZ-Logo.png';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './Construction.css';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
var countDownDate = new Date("February 03, 2024 12:00:00").getTime();

function padWithZeros(number) {
    const numberString = number.toString();
    if(numberString.length >= 2) return numberString;
    return "0".concat(numberString);
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/");
    }

    let updateRemainingTime = () => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let daysRemaining = padWithZeros(Math.floor(distance / (1000 * 60 * 60 * 24)));
        let hoursRemaining = padWithZeros(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutesRemaining = padWithZeros(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        let secondsRemaining = padWithZeros(Math.floor((distance % (1000 * 60)) / 1000));
        
       return { seconds: secondsRemaining, minutes: minutesRemaining, hours: hoursRemaining, days: daysRemaining}
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(updateRemainingTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);


    return(
        <div sx={{backgroundColor: 'blue'}}>
            <AppBar position="fixed" color="default" sx={{borderBottom: "1px solid #00d8ff"}}>
                <Toolbar>
                    <Grid container direction="row" justify="center" alignItems="center" >
                        <Grid item xs sm md lg>
                            <Avatar alt="IZ Logo" src={Logo} sx={{width: 60, height: 60}}/>
                        </Grid>  
                        <Grid item xs sm md lg sx={{textAlign: 'right'}}>
                            <Button startIcon={<HomeIcon />} onClick={routeChange} sx={{fontSize: 18, fontWeight: 'bold'}}>
                                Home
                            </Button>
                        </Grid>  
                    </Grid>       
                </Toolbar>
            </AppBar>  
            <br /><br />
            <Box sx={{ mt: 5}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item md lg xl sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                        <Typography variant="h2" component="h4" sx={{fontWeight: '400'}}> UNDER RECONSTRUCTION </Typography>
                    </Grid>  
                    <Grid item xs sm sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                        <Typography variant="h5" component="h6" sx={{fontWeight: '500'}}> UNDER RECONSTRUCTION </Typography>
                    </Grid>  
                </Grid>      
            </Box>
            <Box sx={{ mt: 5}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item md lg xl sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                        <div className="countdown-timer">
                            <span className="countdown">
                                <span>{remainingTime.days}</span>
                                <br />
                                <span className='timer-names'>Days</span>
                            </span>
                        
                            <span className="countdown">
                                <span className="two-numbers">{remainingTime.hours}</span>
                                <br />
                                <span className='timer-names'>Hours</span>
                            </span>
                            <span className="countdown">
                                <span className="two-numbers">{remainingTime.minutes}</span>
                                <br />
                                <span className='timer-names'>Minutes</span>
                            </span>
                            <span className="countdown">
                                <span className="two-numbers">{remainingTime.seconds}</span>
                                <br />
                                <span className='timer-names'>Seconds</span>
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs sm sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                        <div className="countdown-timer-phones">
                            <span className="countdown-phones">
                                <span>{remainingTime.days}</span>
                                <br />
                                <span className='timer-names'>Days</span>
                            </span>
                        
                            <span className="countdown-phones">
                                <span className="two-numbers">{remainingTime.hours}</span>
                                <br />
                                <span className='timer-names'>Hours</span>
                            </span>
                            <span className="countdown-phones">
                                <span className="two-numbers">{remainingTime.minutes}</span>
                                <br />
                                <span className='timer-names'>Minutes</span>
                            </span>
                            <span className="countdown-phones">
                                <span className="two-numbers">{remainingTime.seconds}</span>
                                <br />
                                <span className='timer-names'>Seconds</span>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 5}}>
                <Grid item md lg xl sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                    <Typography variant="h4" component="h6" sx={{fontStyle: 'italic', fontFamily: "Merriweather"}}>Stay Turned For Something Amazing EIZG.org !!!</Typography>
                </Grid>
                <Grid item xs sm sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                    <Typography variant="h6" component="h6" sx={{fontStyle: 'italic', fontFamily: "Merriweather"}}>Stay Turned For Something Amazing EIZG.org !!!</Typography>
                </Grid>
            </Box>
        </div>
    );
}

export default CountdownTimer;