import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';
import classNames from 'classnames';
    const Cards = ({data:{confirmed, deaths , recovered ,lastUpdate}}) => {
    console.log(confirmed)
    if(!confirmed){
        return "loading"
    }

    const infectedclass = classNames('card', 'infected');
    const recoveredclass = classNames('card', 'recovered');
    const deathsclass = classNames('card', 'infected');
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={infectedclass}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={1} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbers of active cases of active cases</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={recoveredclass}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={1} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbers of active cases recovered</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={deathsclass}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={1} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbers of deaths caused by covid 19</Typography>
                </CardContent>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Cards;