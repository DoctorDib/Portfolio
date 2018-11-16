import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import styles from '../../styles/contentStyle';
import HASImg from '../../img/HAS.png';
import MusicDEVImg from '../../img/MusicDEV.jpeg';

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
        title: 'MusicDEV',
        subtitle: 'University F.Y.P - Music Recommendation and Continuation',
        languages: {
            javaScript: 100
        },
        contentImg: MusicDEVImg,
        content: [
            {type: 'text', content: `
                MusicDEV allows the user to find new music based on an activity / mood / genre that they select. When
                they have linked their account, MusicDEV will learn from the users spotify profile all of the music that
                they have listened to and will base the right music. MusicDEV also has a feature that allows the user,
                to automatically add the song to a playlist so they can have a continous stream of recommeded music.
            `},
            {type: 'text', content: `
                So what does it do?
            `},
            {type: 'text', content: `
                MusicDEV is a current (working in progress) project that assists the user in finding new and enjoyable 
                music. The platform uses various of node libraries along with using react to help give the user a full 
                efficient experience, as well as using Google Material UI for nice usability and looks!
            `},
        ],
        github: 'https://github.com/DoctorDib/MusicDEV',
        otherLink: 'fyp.jamesdibnah.co.uk'
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
