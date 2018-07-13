import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import theme from '../styles/withRoot';
import styles from '../styles/style';

function getSteps() {
    return ['Home', 'Projects', 'About me'];
}

var currentPage, initialSetUp = false;

function scrollIntoView (target) {
    jQuery('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
        location.hash = target;
        target.focus();
        if (!target.is(":focus")) {
            target.attr('tabindex', '-1');
            target.focus()
        }
    });
}

class Template extends React.Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <section className={classes.body}>

                <section className={classes.header}>
                    <h1 className={classes.name}> James Dibnah <span className={classes.nameChild}> Software developer </span></h1>
                </section>

                <section id="menu" className={classes.menu}>
                    <Button
                        className={classes.menuButtons}
                        color="primary"
                        onClick={ () => { scrollIntoView(jQuery('#page1')) } }
                    >
                        Home
                    </Button>
                    <Button
                        className={classes.menuButtons}
                        color="primary"
                        onClick={ () => { scrollIntoView(jQuery('#page2')) } }
                    >
                        Projects
                    </Button>
                    <Button
                    className={classes.menuButtons}
                    color="primary"
                    onClick={ () => { scrollIntoView(jQuery('#page3')) } }
                    >
                        About me
                    </Button>
                </section>

                <section id="page1" className={classes.page}>
                    {this.props.page1}
                </section>
                <section id="page2" className={classes.page}>
                    {this.props.page2}
                </section>
                <section id="page3" className={classes.page}>
                    {this.props.page3}
                </section>
            </section>
        );
    }
};

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default theme(withStyles(styles)(Template));
