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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';

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
        if (target.is(":focus")) {
            return !1;
        } else {
            target.attr('tabindex', '-1');
            target.focus()
        }
    });
}

class SideBar extends React.Component {
    
    state = {
        activeStep: 0,
    };
    
    handleStepper = () => {
        let activeStep;
        var number = Number(window.location.hash.replace('#page', ''));
        
        activeStep = number-1;
        
        this.setState({
            activeStep:activeStep,
        });
    };
    
    handleStep = step => {
        let steppers;
    
        steppers = step;
        scrollIntoView(jQuery('#page' + (step+1)))
    
        this.setState({
            activeStep:steppers,
        });
    }
    
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { activeStep } = this.state;
        
        const initialPosition = window.location.hash === '#top' ? 'none' : 'block';
    
        const steps = getSteps();
    
        var test =  $(window).on('hashchange',function(){
            if(this.state.currentPage !== window.location.hash){
                this.handleStepper();
                this.setState({currentPage: window.location.hash});
            }
        }.bind(this));
        
        return (
            <div id="sideBar" style={{display: initialPosition}}>
                {
                    $("document").ready(function($){
                        if(!initialSetUp) {
                
                            const page3 = $('#page3');
                            const page2 = $('#page2');
                            const page1 = $('#page1');
                
                            let distance3 = $('#page3').offset().top;
                            let distance2 = $('#page2').offset().top;
                            let distance1 = $('#page1').offset().top;
                
                            $(window).scroll(function () {
                    
                                var old = currentPage;
                    
                                console.log($(this).scrollTop())
                                if($(this).scrollTop() < distance1){
                                    currentPage = 'top';
                                } else if($(this).scrollTop() >= distance1 && $(this).scrollTop() < distance2-20) {
                                    currentPage = 'page1';
                                } else if($(this).scrollTop() >= distance2 && $(this).scrollTop() < distance3-20) {
                                    currentPage = 'page2';
                                } else if($(this).scrollTop() > distance3) {
                                    currentPage = 'page3';
                                }
                                
                                if(old !== currentPage) {
                                    if(currentPage === 'top'){
                                        jQuery('#sideBar').attr('style', 'display: none');
                                    } else {
                                        jQuery('#sideBar').attr('style', 'display: block');
                                    }
                                    console.log(">>" + currentPage)
                                    window.location.hash = currentPage;
                                }
                            });
                            initialSetUp = true;
                        }
                    })
                }
                
                <Stepper alternativeLabel nonLinear orientation="vertical" activeStep={activeStep} className={classes.sideBar}>
                    {steps.map((label, index) => {
                        const props = {};
                        const buttonProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepButton
                                onClick={() => this.handleStep(index)}
                                {...buttonProps}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        );
    }
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
                
                <SideBar classes={this.props.classes}/>

                <section className={classes.header}>
                    <h1 className={classes.name}> James Dibnah <span className={classes.nameChild}> Software developer </span></h1>
                </section>

                <section id="menu" className={classes.menu}>
                    <Button
                    color="primary"
                    onClick={ () => { scrollIntoView(jQuery('#page1')) } }
                    >
                        Home
                    </Button>
                    <Button
                    color="primary"
                    onClick={ () => { scrollIntoView(jQuery('#page2')) } }
                    >
                        Projects
                    </Button>
                    <Button
                    color="primary"
                    onClick={ () => { scrollIntoView(jQuery('#page3')) } }
                    >
                        About me
                    </Button>
                </section>

                <section id="slider" className={classes.slider}>
                    <div className={classes.sliderContent} style={{transition: 'opacity 0.5s ease-out', animation:'moveSlideshow 60s linear infinite', width: '15%'}}> Javascript</div>
                    <div className={classes.sliderContent}> Python </div>
                    <div className={classes.sliderContent}> React </div>
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

                <section className={classes.footer}>
                    <h1> James Dibnah - Copyright 2018 </h1>
                </section>
    
                <section id="backToTop"> <h1> <a> Up </a> </h1 > </section>
            </section>
        );
    }
};

Template.propTypes = {
    classes: PropTypes.object.isRequired
};

SideBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default theme(withStyles(styles)(Template));