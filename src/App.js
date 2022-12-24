import React from 'react';
import Calendar from './components/Calendar';

import { MaterialPicker } from 'react-color';
import { Grid, Select, MenuItem } from '@mui/material';

const testData = [
  {
    "day": 3,
    "month": 12,
    "year": 2022,
    "name": "Meeting",
    "completed": true,
    "color": "red"
  },
  {
    "day": 8,
    "month": 12,
    "year": 2022,
    "name": "Class",
    "completed": true,
    "color": "purple"
  },
  {
    "day": 10,
    "month": 12,
    "year": 2022,
    "name": "Event",
    "completed": false,
    "color": "blue"
  },
  {
    "day": 10,
    "month": 12,
    "year": 2022,
    "name": "Party",
    "completed": false,
    "color": "red"
  },
  {
    "day": 11,
    "month": 12,
    "year": 2022,
    "name": "Meeting",
    "completed": true,
    "color": "green"
  },
  {
    "day": 13,
    "month": 12,
    "year": 2022,
    "name": "Work",
    "completed": true,
    "color": "orange"
  },
  {
    "day": 13,
    "month": 12,
    "year": 2022,
    "name": "Event",
    "completed": false,
    "color": "lightblue"
  },
  {
    "day": 13,
    "month": 12,
    "year": 2022,
    "name": "Class",
    "completed": false,
    "color": "purple"
  },
  {
    "day": 16,
    "month": 12,
    "year": 2022,
    "name": "Dance",
    "completed": true,
    "color": "darkgreen"
  },
  {
    "day": 19,
    "month": 12,
    "year": 2022,
    "name": "Class",
    "completed": true,
    "color": "blue"
  },
  {
    "day": 19,
    "month": 12,
    "year": 2022,
    "name": "Meeting",
    "completed": false,
    "color": "red"
  },
  {
    "day": 22,
    "month": 12,
    "year": 2022,
    "name": "Meeting",
    "completed": true,
    "color": "red"
  },
  {
    "day": 23,
    "month": 12,
    "year": 2022,
    "name": "Class",
    "completed": false,
    "color": "blue"
  },
  {
    "day": 25,
    "month": 12,
    "year": 2022,
    "name": "Christmas",
    "completed": false,
    "color": "red"
  },
];

const App = () => {

  const [primaryColor, setPrimaryColor] = React.useState("#000000");
  const [secondaryColor, setSecondaryColor] = React.useState("#FFFFFF");
  const [dataDisplay, setDataDisplay] = React.useState("circle");

  const handleClick = ({ day, month, year }) => {
      alert(month + "/" + day + "/" + year);
  }

  const changePrimaryColor = (color) => {
    setPrimaryColor(color.hex);
  }

  const changeSecondaryColor = (color) => {
    setSecondaryColor(color.hex);
  }

  const changeDataDisplay = (e) => {
    setDataDisplay(e.target.value);
  }

  return (
    <div align="left">
      <Grid container spacing={3}>
        <Grid item xs={9} align="left" style={{height: '20px'}}>
          <h1 style={{marginLeft: '10px', marginTop: '0px'}}>React MUI Calendar</h1>
        </Grid>
        <Grid item xs={3} align="right" style={{height: '20px', marginTop: '10px', }}>
          <a href="https://github.com/evanbrooks0629/react-mui-calendar" style={{marginRight: '10px'}}>GitHub</a>
        </Grid>
        <Grid item xs={8} align="left" style={{height: '20px', marginTop: '30px'}} />
        <Grid item xs={4} align="right" style={{height: '20px', marginTop: '10px'}}>
          <a href="https://www.npmjs.com/package/react-mui-calendar" style={{marginTop: '-10px', marginRight: '10px'}}>NPM Page</a>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{backgroundColor: '#cccccc', marginTop: '20px'}}>
        <Grid item xs={4} align="center" style={{marginTop: '-30px'}}>
          <h4>Primary Color</h4>
        </Grid>
        <Grid item xs={4} align="center" style={{marginTop: '-30px'}}>
          <h4>Secondary Color</h4>
        </Grid>
        <Grid item xs={4} align="center" style={{marginTop: '-30px'}}>
          <h4>Data Display</h4>    
        </Grid>
        <Grid item xs={4} style={{marginTop: '-40px', marginBottom: '20px'}} align="center">
          <MaterialPicker
            color={primaryColor}
            onChangeComplete={changePrimaryColor}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop: '-40px', marginBottom: '20px'}} align="center">
          <MaterialPicker
            color={secondaryColor}
            onChangeComplete={changeSecondaryColor}
          />
        </Grid>
        <Grid item xs={4} style={{marginTop: '-40px', marginBottom: '20px'}} align="center">
          <Select
            value={dataDisplay}
            onChange={changeDataDisplay}
          >
            <MenuItem value="No Data">No Data</MenuItem>
            <MenuItem value="circle">Circle</MenuItem>
            <MenuItem value="list">List</MenuItem>
          </Select>
        </Grid>
      </Grid>
      
      <div style={{height: '30px'}}></div>
      <Calendar 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor} 
        data={testData} 
        dataDisplay={dataDisplay}
        handleClickDay={handleClick}
      />
    </div>
  );
}

export default App;
