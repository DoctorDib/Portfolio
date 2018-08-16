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
