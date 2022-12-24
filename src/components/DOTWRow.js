import React from 'react';
import { Grid } from '@mui/material';

const DOTWRow = (props) => {
    return (
        <Grid item container xs={12} justifyContent="center">
            <Grid item sx={{ display: {xs: 'none', sm: 'block'} }} xs />
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>S</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>M</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>T</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>W</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>T</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>F</p>
            </Grid>
            <Grid item xs align="center">
                <p style={{color: props.primaryColor}}>S</p>
            </Grid>
            <Grid item sx={{ display: {xs: 'none', sm: 'block'} }} xs />
        </Grid>
    );
}

export default DOTWRow;