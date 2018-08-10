import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import theme from '../../styles/withRoot';
import styles from '../../styles/contentStyle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core/styles';

class Template extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3 className={classes.title}> Homepage </h3>
                <Card className={classes.homeCard}>
                    <CardContent>
                        <p> Hi! I am James, I am a Software developer. Up for seeing some projects that I have been working on?  </p>
                        <p> Sure, head on over to my projects page. </p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default theme(withStyles(styles)(Template));
