import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import styles from '../../styles/contentStyle';
import HASImg from '../../img/HAS.png';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const hobbies = [
    {
        id: 1,
        title: 'Photography',
        subtitle: 'Day to night photograph',
        contentImg: 'https://img.itch.zone/aW1hZ2UvMjc0ODgzLzEzMzE0NTkucG5n/original/83Z9Lt.png',
        content: `
            So Yeah, me and a friend made another game..\n
            but... this time it was different... \n
        `,
        otherLink: ''
    }, {
        id: 2,
        title: 'Programming',
        subtitle: 'Day to night photograph',
        contentImg: 'https://img.itch.zone/aW1hZ2UvMjc0ODgzLzEzMzE0NTkucG5n/original/83Z9Lt.png',
        content: `
            So Yeah, me and a friend made another game..\n
            but... this time it was different... \n
        `,
        otherLink: ''
    }
];

class ProjectsCard extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const tabs = hobbies.map((post) =>
            <div>
                <Tab label={post.title} />
            </div>
        );


        return (
            <div>
                <Typography variant='display3' className={classes.title}> My Hobbies </Typography>
                <section className={classes.hobbyList}>

                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        centered
                    >

                    {tabs}
                    </Tabs>

                    <div className={classes.project}>
                        <Card className={classes.hobbyHeader}>
                            <Typography variant='display2' className={classes.hobbyTitle}> {hobbies[value].title} </Typography>
                            <Typography variant='caption' className={classes.hobbySubtitle}> {hobbies[value].subtitle} </Typography>
                        </Card>
                        <Card className={classes.hobbyCard}>
                            <section className={classes.hobbyContent}>
                                {hobbies[value].contentImg ? (<img className={classes.hobbyImg} src={hobbies[value].contentImg}/>) : (<img className={classes.disabled}/>)}

                                <Typography gutterBottom> {hobbies[value].content} </Typography>
                                {hobbies[value].otherLink ? (<Button href={hobbies[value].otherLink} className={classes.hobbyButton}> Visit </Button>) : (<Button className={classes.disabled}/>)}
                                <section className={classes.hobbyLinks}>
                                    {hobbies[value].otherLink ? (<Button href={hobbies[value].otherLink} className={classes.hobbyButton}> Visit </Button>) : (<Button className={classes.disabled}/>)}
                                </section>

                            </section>


                        </Card>
                    </div>
                </section>
            </div>
        );
    }
}



ProjectsCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsCard);
