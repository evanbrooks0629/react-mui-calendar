import React from 'react';
import { Grid, Box, Typography, IconButton, Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DOTWRow from './DOTWRow';

const MonthBlock = (props) => {

    let newName = props.name;

    if (window.innerWidth < 400) {
        // mobile
        if (props.name.length >= 4) {
            newName = props.name.substr(0, 4) + "...";
        }
    } else if (window.innerWidth < 600) {
        // xs view
        if (props.name.length >= 10) {
            newName = props.name.substr(0, 10) + "...";
        }
    } else if (window.innerWidth < 800) {
        // sm view
        if (props.name.length >= 12) {
            newName = props.name.substr(0, 12) + "...";
        }
    } else if (window.innerWidth < 1100) {
        // sm view
        if (props.name.length >= 18) {
            newName = props.name.substr(0, 18) + "...";
        }
    } else if (window.innerWidth < 1400) {
        if (props.name.length >= 22) {
            newName = props.name.substr(0, 22) + "...";
        }
    } else {
        if (props.name.length >= 30) {
            newName = props.name.substr(0, 30) + "...";
        }
    }

    const [name, setName] = React.useState(newName);

    const updateDimensions = () => {

        let newName = props.name;

        if (window.innerWidth < 400) {
            // mobile
            if (props.name.length >= 4) {
                newName = props.name.substr(0, 4) + "...";
            }
        } else if (window.innerWidth < 600) {
            // xs view
            if (props.name.length >= 12) {
                newName = props.name.substr(0, 10) + "...";
            }
        } else if (window.innerWidth < 800) {
            // sm view
            if (props.name.length >= 12) {
                newName = props.name.substr(0, 12) + "...";
            }
        } else if (window.innerWidth < 1100) {
            // sm view
            if (props.name.length >= 18) {
                newName = props.name.substr(0, 18) + "...";
            }
        } else if (window.innerWidth < 1400) {
            if (props.name.length >= 22) {
                newName = props.name.substr(0, 22) + "...";
            }
        } else {
            if (props.name.length >= 30) {
                newName = props.name.substr(0, 30) + "...";
            }
        }
        setName(newName);
    }

    React.useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    });

    if (props.dataDisplay === "circle") {
        return (
            <Grid item xs={2} sx={{ height: { xs: '6px', sm: '12px', md: '20px' }, marginBottom: { xs: '3px', md: '5px' } }}>
                {props.completed && props.completed === true ? <CheckCircleIcon sx={{fontSize: {xs: '1.8vw', md: '1.5vw'}}} style={{color: props.color ? props.color : "#000000"}} /> : <CircleIcon sx={{fontSize: {xs: '1.8vw', md: '1.5vw'}}} style={{color: props.color ? props.color : "#000000"}} />}
            </Grid>
        );
    } else if (props.dataDisplay === "list") {
        return (
            <Grid item xs={12} zeroMinWidth style={{paddingLeft: '1px', paddingRight: '2px', paddingBottom: '1px',  overflow: 'hidden', textOverflow: 'clip'}}>
                <Typography noWrap sx={{fontSize: { xs: '10px' } }} style={{paddingLeft: '2px', color: '#ffffff', backgroundColor: props.color ? props.color : "#000000", textAlign: 'left', textDecoration: props.completed ? 'line-through' : 'none', borderRadius: '2px'}}>{props.name ? name : ""}</Typography>
            </Grid>
        );
    } else {
        return null;
    }
}

const CalendarItem = (props) => {
    let dateNum;
    let color;
    let circleColor = props.secondaryColor;
    if (props.day) {
        dateNum = props.day.date;
        color = props.day.isInMonth ? props.primaryColor : "#aaaaaa";
        if (props.day.isToday) {
            color = props.secondaryColor;
            circleColor = props.primaryColor;
        }
    } else {
        return;
    }

    const handleClick = () => {
        if (props.day.isInMonth) {
            props.handleDayClick({
                "day": dateNum,
                "month": props.monthIndex,
                "year": props.currYear
            });
        }
    }

    return (
        <Paper sx={{ height: { xs: '81px', md: '110px' } }} style={{ textAlign: 'center', borderRadius: '0px', color: color, border: '1px solid ' + props.primaryColor, backgroundColor: props.secondaryColor, width: '100%'}} onClick={handleClick}>
            <Box sx={{ height: { xs: '15px', sm: '20px', md: '25px' }, width: { xs: '15px', sm: '20px', md: '25px' }, fontSize: { xs: '10px', sm: '12px', md: '16px' } }} style={{borderRadius: '20px', backgroundColor: circleColor, margin: '3px'}}>
                {dateNum}
            </Box>
            <Grid container sx={{ marginTop: { xs: '0px', sm: '0px' } }} style={{width: '100%'}}>
            {
                props.data ? props.data.map((block, index) => (
                    block.day === dateNum && props.day.isInMonth && block.month === props.monthIndex && block.year === props.currYear ? (<MonthBlock dataDisplay={props.dataDisplay} name={block.name} hours={block.hours} minutes={block.minutes} color={block.color} yPos={block.yPos} key={index} completed={block.completed} />) : null
                )) : null
            }
            </Grid>
        </Paper>
    );
}

const CalendarRow = (props) => {

    return (
        <Grid item container spacing={0} xs={12} display="flex" justifyContent="center" style={{width: '100%'}}>
            <Grid item sx={{ display: {xs: 'none', sm: 'block'} }} xs />
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[0]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[1]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[2]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[3]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[4]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[5]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item xs>
                <CalendarItem dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} day={props.days[6]} handleDayClick={props.getDay} monthIndex={props.monthIndex} currYear={props.currYear} />
            </Grid>
            <Grid item sx={{ display: {xs: 'none', sm: 'block'} }} xs />
            
        </Grid>
    );
}

const MonthCalendar = (props) => {

    const today = new Date().getDate();
    const currMonth = new Date().getMonth()+1;
    const thisYear = new Date().getFullYear();

    // get current month by getting current month from date function
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const [monthIndex, setMonthIndex] = React.useState(props.month); 
    const [arrayOfDays, setArrayOfDays] = React.useState(Array(42)); // fill array with empty undefined elements
    const [currYear, setCurrYear] = React.useState(props.year); 

    const handleNextMonth = () => {
        if (monthIndex < 12) {
            props.setMonth(monthIndex + 1);
            setMonthIndex(monthIndex + 1);
        } else {
            props.setYear(props.year + 1);
            setCurrYear(props.year + 1);
            props.setMonth(1);
            setMonthIndex(1);
        }
    }

    const handlePrevMonth = () => {
        if (monthIndex > 1) {
            props.setMonth(monthIndex - 1);
            setMonthIndex(monthIndex - 1);
        } else {
            props.setYear(props.year - 1);
            setCurrYear(props.year - 1);
            props.setMonth(12);
            setMonthIndex(12);
        }
    }

    React.useEffect(() => {
        const getDaysOfMonth = () => {
            let month;
            if (monthIndex < 10) {
                month = '0'+monthIndex;
                console.log(month);
            } else {
                month = monthIndex;
            }

            let firstDayOfWeek = new Date(currYear + "-" + month + "-01").getDay(); // to tell which day of the week to start at
            const lastDay = new Date(currYear, month, 0).getDate(); // last number to end, days of month
            let updatedArrayOfDays = Array(42); // fill array with 42 empty values
            // based on days between Sunday to first day (lets say Thursday) we skip array at first 4 values
            const lastMonth = monthIndex-1;

            if (lastMonth < 10) {
                month = '0'+lastMonth;
            } else {
                month = lastMonth;
            }

            let lastDayOfLastMonth = new Date(currYear, month, 0).getDate(); // get last date of last month and count backwards to fill beginning of array
            for (let i = firstDayOfWeek; i >= 0 ; i--) {
                updatedArrayOfDays[i] = {
                    date: lastDayOfLastMonth,
                    isInMonth: false,
                    isToday: false,
                    events: [],
                    index: i
                }
                lastDayOfLastMonth--;
            }
    
            let count = 1;
            for (let i = firstDayOfWeek+1; i < 42; i++) {
                let isTodaysDate = false;
                if (monthIndex === currMonth && count === today && currYear === thisYear) {
                    isTodaysDate = true;
                }
                if (count > lastDay) {
                    break;
                } else {
                    updatedArrayOfDays[i] = {
                        date: count,
                        isInMonth: true,
                        isToday: isTodaysDate,
                        events: [],
                        index: i
                    }
                    count++;
                }
            }
    
            let newCount = 1;
            for (let i = count + firstDayOfWeek; i < 42; i++) {
                updatedArrayOfDays[i] = {
                    date: newCount,
                    isInMonth: false,
                    isToday: false,
                    events: [],
                    index: i
                }
                newCount++;
            }
    
            setArrayOfDays(updatedArrayOfDays);
            props.setDayArray(updatedArrayOfDays);
        }
        getDaysOfMonth();
    }, [currYear, monthIndex]);

    return (
        <Grid container>
            <Grid item container xs={12} sx={{ marginLeft: { xs: '10px', sm: '0' }, marginRight: { xs: '10px', sm: '0' } }}>
                <Grid item container xs={12} style={{marginTop: '10px'}}>
                    <Grid item xs={2} sm={3} md={4} align="right">
                        <IconButton aria-label="delete" style={{ cursor: 'pointer', color: props.secondaryColor, height: "35px", width: "35px", backgroundColor: props.primaryColor}} onClick={handlePrevMonth} >
                            {
                                // Go to prev month
                            }
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ textAlign: { xs: 'center' } }} xs={8} sm={6} md={4}>
                        <Typography variant="h5" sx={{ marginTop: { xs: '2px'} }} style={{color: props.primaryColor}}>{months[monthIndex-1]} {props.year}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={3} md={4} align="left">
                        <IconButton aria-label="delete" style={{ cursor: 'pointer', color: props.secondaryColor, height: "35px", width: "35px", backgroundColor: props.primaryColor}} onClick={handleNextMonth} >
                            {
                                // Go to next month
                            }
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={1} />
            </Grid>
            <Grid item xs={12} style={{height: '10px'}} />
            <Grid container item xs={12} sx={{ marginLeft: { xs: '10px', sm: '0' }, marginRight: { xs: '10px', sm: '0' } }}>
                <Grid item xs={12} container spacing={1}>
                    <DOTWRow primaryColor={props.primaryColor} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(0, 7)} start={0} end={7} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(7, 14)} start={7} end={14} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(14, 21)} start={14} end={21} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(21, 28)} start={21} end={28} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(28, 35)} start={28} end={35} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                    <CalendarRow dataDisplay={props.dataDisplay} data={props.data} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} days={arrayOfDays.slice(35, 42)} start={35} end={42} getWeek={props.handleClickWeek} getDay={props.handleClickDay} monthIndex={monthIndex} currYear={currYear} />
                </Grid>
            </Grid>
            <Grid item xs={12} style={{height: '100px'}} />

        </Grid>
    );
}

export default MonthCalendar;