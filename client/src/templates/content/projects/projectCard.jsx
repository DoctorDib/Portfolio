import React from 'react';
import ReactDOM from 'react-dom';


import theme from '../../../styles/withRoot';
import styles from '../../../styles/contentStyle';


import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



class ProjectsCardz extends React.Component {
    render() {
        return (
        <div>
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
        </div>
        );
    }
}

export default withStyles(styles)(ProjectsCardz);
