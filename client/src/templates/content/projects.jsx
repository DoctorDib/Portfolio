import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import theme from '../../styles/withRoot';
import styles from '../../styles/contentStyle';


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



class ProjectsCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;

        return (
        <div>
            <h1 className={classes.title}> My Personal Projects </h1>

            <section className={classes.projectList}>
                <Card className={classes.project}>
                    <CardContent>
                        <h1 className={classes.projectName}> FYP - musicDEV </h1>
                        <section className={classes.languageContainer}>
                            <div className={classes.python} style={{width:'33.33%'}}>
                                Python: 33.33%
                            </div>
                            <div className={classes.javaScript} style={{width:'33.33%'}}>
                                JavaScript: 33.33%
                            </div>
                            <div className={classes.css} style={{width:'33.33%'}}>
                                CSS: 33.33%
                            </div>
                        </section>
                        <section className={classes.projectContainer}>
                            <p> Content filler that should do its job if I just spam </p>
                            <p> Content filler that should do its job if I just spam </p>
                            <p> Content filler that should do its job if I just spam Content filler that should do its job if I
                            just spam Content filler that should do its job if I just spam </p>
                        </section>
                        <section className={classes.projectLinks}>
                            <h1> Create links when starting on my FYP </h1>

                        </section>
                    </CardContent>
                </Card>

                <Card className={classes.project}>
                    <CardContent>
                        <h1 className={classes.projectName}> FUN - Forced </h1>
                        <section className={classes.languageContainer}>
                            <div className={classes.cSharp} style={{width:'100%'}}>
                                C#: 100%
                            </div>
                        </section>

                        <section className={classes.projectContainer}>
                            <p> Content filler that should do its job if I just spam </p>
                            <p> Content filler that should do its job if I just spam </p>
                            <p> Content filler that should do its job if I just spam Content filler that should do its job if
                            I just spam Content filler that should do its job if I just spam </p>
                        </section>
                        <section className={classes.projectLinks}>
                            <Button href={"https://github.com/MidgetJake/GDQ-One-Mechanic-Jam"}> GitHub </Button>
                            <Button href={"https://valesoft.itch.io/forced"}> Itch.IO </Button>
                        </section>
                    </CardContent>
                </Card>
            </section>
        </div>
        );
    }
}

ProjectsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsCard);
