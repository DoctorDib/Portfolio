import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import theme from '../../styles/withRoot';
import styles from '../../styles/contentStyle';

import { withStyles } from '@material-ui/core/styles';

class Template extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3 className={classes.title}> Homepage </h3>
                <p> Hi! I am James, I am a Software developer.  </p>
                <p> Up for seeing some projects that I have been working on? </p>
                <p> Sure, head on over to my projects page. </p>
            </div>
        );
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default theme(withStyles(styles)(Template));
