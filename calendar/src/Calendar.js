import React from 'react';
import MonthCalendar from './MonthCalendar';

const Calendar = (props) => {
    const currMonth = new Date().getMonth()+1;
    const thisYear = new Date().getFullYear();

    const [monthIndex, setMonthIndex] = React.useState(currMonth); 
    const [arrayOfDays, setArrayOfDays] = React.useState([]);
    const [currYear, setCurrYear] = React.useState(thisYear);

    const setDayArray = (newArray) => {
        setArrayOfDays(newArray);
    }

    const setMonth = (newMonth) => {
        setMonthIndex(newMonth);
    }

    const setYear = (newYear) => {
        setCurrYear(newYear);
    }

    if (typeof props.primaryColor !== 'undefined' && typeof props.primaryColor !== 'string') {
        console.log('Error: primaryColor prop must be of type string.');
        return;
    }

    if (typeof props.secondaryColor !== 'undefined' && typeof props.secondaryColor !== 'string') {
        console.log('Error: secondaryColor prop must be of type string.');
        return;
    }

    if (typeof props.data !== 'undefined' && typeof props.data !== 'object') {
        console.log('Error: data prop must be of type array (object).');
        return;
    }

    if (typeof props.dataDisplay !== 'undefined' && typeof props.dataDisplay !== 'string') {
        console.log('Error: dataDisplay prop must be of type string.');
        return;
    }

    if (typeof props.handleClickDay !== 'undefined' && typeof props.handleClickDay !== 'function') {
        console.log('Error: handleClickDay prop must be of type function.');
        return;
    }

    const primaryColor = props.primaryColor ? props.primaryColor : "#000000";
    const secondaryColor = props.secondaryColor ? props.secondaryColor : "#FFFFFF";
    const data = props.data ? props.data : [];
    const dataDisplay = props.data && props.dataDisplay ? props.dataDisplay : "";
    const handleClickDay = props.handleClickDay ? props.handleClickDay : () => {};

    return (
        <MonthCalendar 
            month={monthIndex} 
            year={currYear} 
            dayArray={arrayOfDays} 
            setDayArray={setDayArray} 
            setMonth={setMonth} 
            setYear={setYear} 
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            data={data}
            dataDisplay={dataDisplay}
            handleClickDay={handleClickDay}
        />
    );
}

export default Calendar;