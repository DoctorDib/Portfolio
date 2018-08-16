import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

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
            <Typography variant='display3' className={classes.title}> More about me </Typography>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2"> Hobbies: </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Programming: </Typography>
                    <Typography component="p">
                        Might not come to you as a surpise but I program in my free time for fun, always challenging my
                        self to new algorithms and new methods to solutions.
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Google Photos photography: </Typography>
                    <Typography component="p"> <a href="https://goo.gl/photos/227oiMxe5FptxeLr8/"> https://goo.gl/photos/227oiMxe5FptxeLr8/ </a> </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Motorbiking: </Typography>
                    <Typography component="p">
                        May or may not count as a hobby, but I enjoy going out for long rides on my motorbike. Helps with stress and gives
                        me time to think about current problems and possible solutions.
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Drawing: </Typography>
                    <Typography component="p">
                        I never usally consider my art work as "Good" but just like when riding a motorbike, it is relaxing and defiantly helps with stress
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2"> Contact Information: </Typography>

                    <Typography className={classes.pos} color="textSecondary"> LinkedIn: </Typography>
                    <Typography component="p"> <a href="https://www.linkedin.com/in/jamesdibnah/"> https://www.linkedin.com/in/jamesdibnah/ </a> </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Google Photos photography: </Typography>
                    <Typography component="p"> <a href="https://goo.gl/photos/227oiMxe5FptxeLr8/"> https://goo.gl/photos/227oiMxe5FptxeLr8/ </a> </Typography>

                    <Typography className={classes.pos} color="textSecondary"> Email: </Typography>
                    <Typography component="p"> jamesdibnah@gmail.com </Typography>

                    <Typography className={classes.pos} color="textSecondary"> CV: </Typography>
                    <Typography component="p"> Please contact me for my CV </Typography>
                </CardContent>
            </Card>
        </div>
        );
    }
}


export default withStyles(styles)(Template);
