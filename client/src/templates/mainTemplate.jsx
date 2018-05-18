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


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function handleInputChange (page) {
    console.log("Hello")
    return (e) => {
        this.setState({ currentPage: page })
        console.log(this.state)
    }
}


var currentPage;
class Template extends React.Component {

    state = {
        value: 0,
        currentPage: 'page1'
    };

    handleChange = (event, value) => {
        console.log("Hello)")
        this.setState({ value });
    };

    render(){
        
        const { classes } = this.props;
        const { value } = this.state;
        const { activeStep } = this.state;

        var test =  $(window).on('hashchange',function(){
            this.setState({currentPage: window.location.hash})
        }.bind(this));
        
        return (
            <section className={classes.body}>
                {
                    $("document").ready(function($){
                        const page1 = $('#page1');
                        const page2 = $('#page2');
                        const page3 = $('#page3');

                        let distance1 = $('#page1').offset().top;
                        let distance2 = $('#page2').offset().top;
                        let distance3 = $('#page3').offset().top;

                        $(window).scroll(function() {
                            var old = currentPage;
                            if ( $(this).scrollTop() >= distance3 ) {
                                console.log("page3")
                                currentPage = 'page3';
                            } else if ( $(this).scrollTop() >= distance2 ) {
                                console.log("page2")
                                currentPage = 'page2';
                            } else if ( $(this).scrollTop() >= distance1 ) {
                                console.log("page1")
                                currentPage = 'page1';
                            }

                            if(old !== currentPage){
                                console.log("Changed")
                                window.location.hash = currentPage;
                                handleInputChange(currentPage)
                            }
                        })
                    })
                }

                <section className={classes.header}>
                    <h1 className={classes.name} value={this.state.currentPage}> James Dibnah <span className={classes.nameChild}> Software developer </span></h1>
                    <h1 style={{position: 'fixed', color: 'black'}}> {this.state.currentPage} </h1>
                </section>

                <section id="menu" className={classes.menu}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollButtons="auto"
                            centered
                        >
                            <Tab label="Home" />
                            <Tab label="Projects" />
                            <Tab label="About me" />
                        </Tabs>
                    </AppBar>
                </section>

                <section id="slider" className={classes.slider}>
                    <div className={classes.sliderContent} style={{transition: 'opacity 0.5s ease-out', animation:'moveSlideshow 60s linear infinite', width: '15%'}}> Javascript</div>
                    <div className={classes.sliderContent}> Python</div>
                    <div className={classes.sliderContent}> React</div>
                </section>

                <section id="page1">
                    {this.props.content}
                </section>
                <section id="page2">
                    {this.props.content}
                </section>
                <section id="page3">
                    {this.props.content}
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

export default theme(withStyles(styles)(Template));