import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import styles from '../../styles/contentStyle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

class Template extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant='display3' className={classes.title}> About me </Typography>
                <Card className={classes.homeCard}>
                    <CardContent>
                        <Typography variant='subheading'> Hi! I am James, I am a Software developer - Games developer. </Typography>
                        <Typography variant='subheading'>
                            Welcome to my section of the internet. Here you may learn something new about me, either me
                            riding a motorbike or even the fact that I tried to re-create Jarvis from Ironman.
                        </Typography>
                        <Typography variant='subheading'>
                            Oh yeah, of course I failed... but I mean it's worth just noting it.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);
