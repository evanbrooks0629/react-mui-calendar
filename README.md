# React MaterialUI Calendar

* #### [GitHub Page](https://github.com/evanbrooks0629/react-mui-calendar)
* #### [Live Demo Link](link to github pages)
* #### [NPM Link](https://www.npmjs.com/package/react-mui-calendar)

A full-page calendar made for React applications, especially ones that use MaterialUI.

* **Flexible Date Management** - Move through months and years with ease

* **Flexible UI** - Looks great on any device and screen width

* **Customizable Colors** - Set a primary and secondary color

* **Customizable Data Display** - Choose whether to display your data as circles or as a list

## Installation and Usage

```sh
npm install react-mui-calendar --save
```

### Include the Component

```js
import React from 'react';
import Calendar from 'mui-calendar';

const Component = () => {
    return (
        <Calendar />
    );
}
```

### Props

```js
<Calendar
    primaryColor: string,
    // Accepts hex, rgb, color string, etc)
    // Default is #000000
    // Sets color of month text, 
    // month forward and backward background color,
    // current date background color, date box border color,
    // and date color
    
    secondaryColor: string,
    // Accepts hex, rgb, color string, etc)
    // Default is #FFFFFF
    // Sets background color of date boxes, color of icon
    // on month forward and backward buttons,
    // and text color of current date
    
    data: array,
    // Array of objects
    // Default is []
    // Each data object looks like this:
    {
        "day": 25,                    // *required
        "month": 12,                  // *required
        "year": 2022,                 // *required
        "name": "Christmas",          // default is ""
        "completed": false,           // default is false
        "color": "red"                // default is black
    }
    // The Calendar component will display your data objects 
    // on the day, month, and year that is in those fields
    // Depending on your data display, the "name", "color",
    // and "completed" fields can be optional
    
    dataDisplay: string,
    // Accepts "circle", "list", or "" (no data display))
    // Default is ""
    // Note that these options are case-sensitive
    // "circle" will show circles corresponding to the color
    // from each data object
    // If the object has `completed: true`, then the circle is
    // displayed with a check icon
    // "list" will show boxes with the color and name from
    // each data object
    // If the object has `completed: true`,
    // then the text is striked-through
    
    handleClickDay: function
    // When you click on a date, this function returns an object
    // with the date, month, and year of that day
/>
```

## Demo Usage

```js
const Component = () => {
    const testData = [
        {
            "day": 25,    
            "month": 12,     
            "year": 2022, 
            "name": "Christmas",
            "completed": false, 
            "color": "red" 
        }
    ];

    const handleClick = ({ day, month, year }) => {
        alert(month + "/" + day + "/" + year);
    }

    return (
        <Calendar 
            primaryColor="#000000"
            secondaryColor="#FFFFFF"
            data={testData} 
            dataDisplay="list"
            handleClickDay={handleClick}
        />
    );
}
```


### Best Practices

It is recommended to use this within a React project using MaterialUI since it matches the UI style. However, it can be implemented in any React app! 

This can be used for virtually any type of React web application. Try it out within your app with whatever data set you'd like! 


### What's Next

What's next for react-mui-calendar? Here are some things that are being considered as of now:
* Select whether to display dates shown in the month that are from the previous and next months
* More ways to display data
* More event handlers (handlePrevMonth, handleNextMonth, handleChangeYear, etc)

* Weekly calendar - similar to this component except it will only display one week at a time
* This would allow for way more daily data to be displayed and with more information too

* Reach out to me with any ideas / problems / general comments at **evanbrooks0629@gmail.com**. I respond quickly and would love to keep users active with this project.


### Why Use mui-calendar?

I created react-mui-calendar because I wanted to use a full-page calendar within a React app, especially with MaterialUI. Since MUI only had a tiny, kind-of-annoying-to-use calendar, I ventured out to create my own.  All of the other React calendars I came across were, in my opinion, basically useless for how I wanted a calendar to be implemented. Either they looked bad, didn't handle datasets well, or both. Well...screw that! This is an extremely easy-to-use implementation of a calendar with very simple props. It also looks great on every screen size which is a plus. Trust me, creating a calendar from scratch is a hassle that you should NOT have to endure when spinning up a web app. MaterialUI Calendar to the rescue!
