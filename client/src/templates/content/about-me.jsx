import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import theme from '../../styles/withRoot';
import styles from '../../styles/contentStyle';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Template extends React.Component {
    render() {
        const { classes } = this.props;
        
        return (
        <div>
            <Avatar aria-label="Picture of me" className={classes.aboutMeAvatar} src={require('../../img/me.jpg')} />
            <h1 className={classes.center}> About me </h1>
            
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        Contact Information:
                    </Typography>
                    
                    <Typography className={classes.pos} color="textSecondary">
                        LinkedIn:
                    </Typography>
                    <Typography component="p">
                        <a href="https://www.linkedin.com/in/jamesdibnah/"> https://www.linkedin.com/in/jamesdibnah/ </a>
                    </Typography>
    
                    <Typography className={classes.pos} color="textSecondary">
                        Email:
                    </Typography>
                    <Typography component="p">
                        jamesdibnah@gmail.com
                    </Typography>
    
                    <Typography className={classes.pos} color="textSecondary">
                        CV:
                    </Typography>
                    <Typography component="p">
                        Please contact me for my CV
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

export default theme(withStyles(styles)(Template));