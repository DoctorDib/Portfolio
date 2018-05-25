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
            <h3 className={classes.center}> Homepage </h3>
            <p> Welcome to my portfolio.</p>
            
            <h2> Personal projects </h2>
            <p> Here is where I get to show off my projects </p>
            
            <h2> About me </h2>
            <p> Holds contact details </p>
        </div>
        );
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default theme(withStyles(styles)(Template));