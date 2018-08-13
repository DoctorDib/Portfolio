import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import theme from '../../styles/withRoot';
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

const posts = [
    {
        id: 1,
        title: 'FORCED',
        languages: {
            cSharp: 100
        },
        contentImg: 'https://img.itch.zone/aW1hZ2UvMjc0ODgzLzEzMzE0NTkucG5n/original/83Z9Lt.png',
        content: 'Me and a friend made a game! Wooohoooo',
        github: 'https://github.com/MidgetJake/GDQ-One-Mechanic-Jam',
        itchIO: 'https://valesoft.itch.io/forced'
    },
    {
        id: 2,
        title: 'HASv2',
        languages: {
            python: 75.1,
            html: 13.9,
            javaScript: 6.9,
            css: 4.1
        },
        contentImg: HASImg,
        content: 'Me and a friend made a game! Wooohoooo',
        github: 'https://github.com/DoctorDib/HASv2'
    }
];

class ProjectsCard extends React.Component {

    render() {
        const { classes } = this.props;
        const content = posts.map((post) =>
            <div className={classes.project}>
                <Card className={classes.projectHeader}>
                    <h1 className={classes.projectName}> {post.title} </h1>
                </Card>
                <Card>
                    <CardContent>
                        <section className={classes.languageContainer}>
                            {post.languages.python ? (<div className={classes.python} style={{width: post.languages.python + "%"}}> Python: {post.languages.python}% </div>) : (<div className={classes.disabled}/>)}
                            {post.languages.css ? (<div className={classes.css} style={{width: post.languages.css + "%"}}> CSS: {post.languages.css}% </div>) : (<div className={classes.disabled}/>)}
                            {post.languages.html ? (<div className={classes.html} style={{width: post.languages.html + "%"}}> HTML: {post.languages.html}% </div>) : (<div className={classes.disabled}/>)}
                            {post.languages.javaScript ? (<div className={classes.javaScript} style={{width: post.languages.javaScript + "%"}}> JavaScript: {post.languages.javaScript}% </div>) : (<div className={classes.disabled}/>)}
                            {post.languages.java ? (<div className={classes.java} style={{width: post.languages.java + "%"}}> Java: {post.languages.java}% </div>) : (<div className={classes.disabled}/>)}
                            {post.languages.cSharp ? (<div className={classes.cSharp} style={{width: post.languages.cSharp + "%"}}> C#: {post.languages.cSharp}% </div>) : (<div className={classes.disabled}/>)}
                        </section>

                        <section className={classes.projectContent}>
                            {post.contentImg ? (<img className={classes.projectImg} src={post.contentImg}/>) : (<img className={classes.disabled}/>)}

                            {post.content}
                        </section>

                        <section className={classes.projectLinks}>
                            {post.github ? (<Button href={post.github} className={classes.projectButton}> GitHub </Button>) : (<Button className={classes.disabled}/>)}
                            {post.itchIO ? (<Button href={post.itchIO} className={classes.projectButton}> Itch.IO </Button>) : (<Button className={classes.disabled}/>)}
                            {post.otherLink ? (<Button href={post.otherLink} className={classes.projectButton}> Visit </Button>) : (<Button className={classes.disabled}/>)}
                        </section>
                    </CardContent>
                </Card>
            </div>
        );

        return (
            <div>
                <h1 className={classes.title}> My Personal Projects </h1>
                <section className={classes.projectList}>
                    {content}
                </section>
            </div>
        );
    }
}



ProjectsCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsCard);
