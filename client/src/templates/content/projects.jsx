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

const posts = [
    {
        id: 1,
        title: 'FORCED',
        subtitle: 'GDQ One Mechanic Jam - 48 hours',
        languages: {
            cSharp: 100
        },
        contentImg: 'https://img.itch.zone/aW1hZ2UvMjc0ODgzLzEzMzE0NTkucG5n/original/83Z9Lt.png',
        content: [
            {type: 'text', content: `
                Me and a friend decided to take part in a challenging 48 hour GameJam. This was the first ever GameJam we did
                together and will surely will not be the last. You're floating in space with boxes, a portal and some unwanted
                white and black holes...
            `},
            {type: 'text', content: `
                Your job is to jump from box to box but becareful, you only stick to the green ones. If you end up flying 
                into the abliss, you have one shot before you run out of propellant! Use it well.
            `},
        ],
        github: 'https://github.com/MidgetJake/GDQ-One-Mechanic-Jam',
        itchIO: 'https://valesoft.itch.io/forced'
    }, {
        id: 2,
        title: 'HAS V2',
        subtitle: 'Home Automation System - V2',
        languages: {
            python: 75.1,
            html: 13.9,
            javaScript: 6.9,
            css: 4.1
        },
        contentImg: HASImg,
        content: [
            {type: 'text', content: `
                From turning off my lights when I am not in the room to protecting my not so secret stash of snacks...
                If you're somehow thinking Jarvis... then you're correct! Tony Stark has indeed been my childhood hero and still
                is to this day. Future plans with this project, is to give it access to my google calanders, so it'll have more
                control to notify me.
            `},
        ],
        github: 'https://github.com/DoctorDib/HASv2'
    }, {
        id: 3,
        title: 'ONLY SPACE',
        subtitle: 'Ludem Dare 42 - 72 hours',
        languages: {
            cSharp: 100
        },
        contentImg: 'https://jakebarter.co.uk/static/media/FrontImage.c290a403.png',
        content: [
            {type: 'text', content: `
                So... you're stuck on a space station which is on the verge of destruction. You've been programmed to protect the
                precious cargo boxes with your AI life. The last act of kindness and selfless sacrifice you can do, is to gather as
                much cargo as possible before being sucked into the deep a bliss.
            `},
            {type: 'text', content: `
                Watch out for random explosions - you get around 5-10 seconds of warning then boom! Just make sure you're on the
                right side of the door when sealing.
            `},
        ],
        github: 'https://github.com/MidgetJake/LD-Jam',
        itchIO: 'https://valesoft.itch.io/only-space'
    }, {
        id: 4,
        title: 'PORTFOLIO',
        subtitle: 'Information about me - What you see now!',
        languages: {
            cSharp: 95.75,
            html: 6.25
        },
        contentImg: 'https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png',
        content: [
            {type: 'text', content: `
                My Portfolio (the webpage that you're on right now (in case you didn't figure it out (also this bracket 
                inception is starting to get too deep))) helps show off all of my favourite and successful projects and hobbies.
            `},
            {type: 'text', content: `
                It will also help the viewer (yourself included) to give a real insight on my ability to program.
            `},
        ],
        github: 'https://github.com/DoctorDib/Portfolio',
        otherLink: '/'
    }, {
        id: 5,
        title: 'SCREEPS',
        subtitle: 'One of the best programming games',
        languages: {
            javaScript: 100
        },
        contentImg: 'https://i.ytimg.com/vi/ZboTgOajnGg/maxresdefault.jpg',
        content: [
            {type: 'text', content: `
                A strategic and logical thinking programming game that shows your true skill with your selected programming language.
            `},
        ],
        github: 'https://github.com/DoctorDib/MyScreeps'
    }, {
        id: 6,
        title: 'MusicDEV',
        subtitle: 'Final Year Project - Music Recommendation',
        languages: {
            javaScript: 100
        },
        contentImg: '',
        content: [
            {type: 'text', content: `
                Using Spotify's music API + data, I am able to recommend users music that they may possibly enjoy.
            `},
        ],
        github: 'https://github.com/DoctorDib/MusicDEV'
    }
];

class ProjectsCard extends React.Component {

    render() {
        const { classes } = this.props;
        const content = posts.map((post) =>
            <div className={classes.project}>
                <Card className={classes.projectHeader}>
                    <Typography variant='display2' className={classes.projectTitle}> {post.title} </Typography>
                    <Typography variant='caption' className={classes.projectSubtitle}> {post.subtitle} </Typography>
                </Card>
                <Card className={classes.projectCard}>
                        <section className={classes.languageContainer}>
                            {post.languages.python ? (<Typography variant="caption" className={classes.python} style={{width: post.languages.python + "%"}}> Python: {post.languages.python}% </Typography>) : (<div className={classes.disabled}/>)}
                            {post.languages.css ? (<Typography variant="caption" className={classes.css} style={{width: post.languages.css + "%"}}> CSS: {post.languages.css}% </Typography>) : (<div className={classes.disabled}/>)}
                            {post.languages.html ? (<Typography variant="caption" className={classes.html} style={{width: post.languages.html + "%"}}> HTML: {post.languages.html}% </Typography>) : (<div className={classes.disabled}/>)}
                            {post.languages.javaScript ? (<Typography variant="caption" className={classes.javaScript} style={{width: post.languages.javaScript + "%"}}> JavaScript: {post.languages.javaScript}% </Typography>) : (<div className={classes.disabled}/>)}
                            {post.languages.java ? (<Typography variant="caption" className={classes.java} style={{width: post.languages.java + "%"}}> Java: {post.languages.java}% </Typography>) : (<div className={classes.disabled}/>)}
                            {post.languages.cSharp ? (<Typography variant="caption" className={classes.cSharp} style={{width: post.languages.cSharp + "%"}}> C#: {post.languages.cSharp}% </Typography>) : (<div className={classes.disabled}/>)}
                        </section>

                        <section className={classes.projectContent}>
                            {post.contentImg ? (<img className={classes.projectImg} src={post.contentImg}/>) : (<img className={classes.disabled}/>)}

                            {post.content.map(paragraph => (

                                paragraph.type !== "text" ?
                                    paragraph.type !== "image" ?
                                        <Typography variant="title" gutterBottom> {paragraph.content} </Typography>
                                        : <img src={paragraph.content} className={classes.hobbyContentConfig}/>
                                    : <Typography gutterBottom> {paragraph.content} </Typography>
                            ))}
                        </section>

                        <section className={classes.projectLinks}>
                            {post.github ? (<Button href={post.github} className={classes.projectButton}> GitHub </Button>) : (<Button className={classes.disabled}/>)}
                            {post.itchIO ? (<Button href={post.itchIO} className={classes.projectButton}> Itch.IO </Button>) : (<Button className={classes.disabled}/>)}
                            {post.otherLink ? (<Button href={post.otherLink} className={classes.projectButton}> Visit </Button>) : (<Button className={classes.disabled}/>)}
                        </section>
                </Card>
            </div>
        );

        return (
            <div>
                <Typography variant='display3' className={classes.title}> My Personal Projects </Typography>
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
