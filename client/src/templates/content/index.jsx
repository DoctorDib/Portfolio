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

import styles from '../../styles/style';

import AboutMe from './about-me';
import Projects from './projects';
import Hobbies from './hobbies';
import ContactMe from './contact-me';

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
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <section className={classes.body}>
                <section className={classes.header}>
                    <Typography variant='display4' color="whiteText" className={classes.name}> James Dibnah </Typography>
                    <Typography variant='display1' color="whiteText" className={classes.nameChild}> Software developer - ICTTech TMIET </Typography>
                </section>

                <section id="menu" className={classes.menu}>
                    <Button className={classes.menuButtons} color="primary" onClick={ () => { scrollIntoView(jQuery('#page1')) } } > Projects </Button>
                    <Button className={classes.menuButtons} color="primary" onClick={ () => { scrollIntoView(jQuery('#page2')) } } > Hobbies </Button>
                    <Button className={classes.menuButtons} color="primary" onClick={ () => { scrollIntoView(jQuery('#page3')) } } > Contact me </Button>
                </section>

                <section id="page0" className={classes.page}>
                    <AboutMe />
                </section>
                <section id="page1" className={classes.page}>
                    <Projects />
                </section>
                <section id="page2" className={classes.page}>
                    <Hobbies />
                </section>
                <section id="page3" className={classes.page}>
                    <ContactMe />
                </section>
            </section>
        );
    }
};

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);
