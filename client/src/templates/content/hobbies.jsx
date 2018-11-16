import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import styles from '../../styles/contentStyle';
import MotorbikeMain from '../../img/motorbiking/main.jpg';
import MotorbikeMeetings from '../../img/motorbiking/meetings.jpg';
import MotorbikeRiding from '../../img/motorbiking/riding.jpg';
import MyBikes from '../../img/motorbiking/myBikes.jpg';
import NewBike from '../../img/motorbiking/newBike.png';
import BikeOnHill from '../../img/motorbiking/bikeOnHill.jpg';

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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const hobbies = [
    {
        id: 1,
        title: 'Photography',
        subtitle: `Here you'll find my favourite images`
    }, {
        id: 2,
        title: 'Programming',
        subtitle: 'A programmer inspired by Tony Stark',
        contentImg: '',
        content: [
            {type: 'text', content: `
                Puzzles and problem solving has always sparked my interest back when I was a kid, always trying to push
                myself that onestep further in order to solve the hardest of riddles. This is where programming comes
                into my life, figuring out problems in order to move onto th nex.
            `},
        ],
        otherLink: 'https://github.com/DoctorDib'
    }, {
        id: 3,
        title: 'Motorbiking',
        subtitle: 'Day to night photograph',
        contentImg: '',
        content: [
            {type: 'img', content: MotorbikeMain},
            {type: 'text', content: `
                Yeah, I don't seem like the type of person to ride a motorbike, I seem to get that a lot from most people.
            `},
            {type: 'img', content: MotorbikeRiding},
            {type: 'text', content: `
                Motorbiking isn't just a way to travel from point A to point B for me, it is also a hobby. On a weekly basis
                I take time out of my weekend to go out on long and distant rides with my friends, discovering new places and taking
                pictures where ever I can.
            `},
            {type: 'img', content: MotorbikeMeetings},
            {type: 'text', content: `
                Another reason why I love biking, is the community. No matter who you pass out on the road, they always 
                give time to either nod or even wave hello. I also attend some meet ups, where we get to show off
                our motorbikes and just socialise with the community.
            `},
            {type: 'img', content: MyBikes},
            {type: 'text', content: `
                I now have a total of two bikes, the first one I bought (the one of the right in the image above) is a Sinis Stealth 125. 
                My very first bike I bought for myself cost me £500 to buy and £300 to insure, not too bad right? After
                the comming months a year had past, and now sadly my bike started to get pretty tired.
            `},
            {type: 'img', content: NewBike},
            {type: 'text', content: `
                This is where my second bike comes into picture. I passed my A2 Mod 1 and Mod 2 tests and was ready to 
                move onto a bigger and stronger bike. The bike I had my heart set on was a Suzuki GSR600S, and from days
                of searching, I have found my bike. Costing me £1950 and over £600 of insurance, I believe in the long 
                it'll be beneficial.
            `},
            {type: 'img', content: BikeOnHill},
            {type: 'text', content: `
                Why do I do it? I motorbike for the adventure and the freedom, not only I am not limited to the distance, 
                but I am not limited by the traffic, going far and wide leaving a trail of dust behind.
            `}
        ],
        otherLink: ''
    }, {
        id: 4,
        title: 'Drawing',
        subtitle: 'Day to night photograph',
        contentImg: '',
        content: [
            {type: 'text', content: `
                Drawing has been a hobby since I was little. I have always found my drawing nice and relaxing, and the 
                results you get when putting in effort. I had learnt that sometimes to view the imaage you draw, you 
                just need to step back and look at it from another angle.
            `},
            {type: 'text', content: `
                My mum first introduced me to drawing, when ever I got too loud and too active she would put a movie on
                and give me a pad and pen, and then to draw my favourite character from it. Now I can't say I am super duper
                amazing at drawing, but I do believe I have improved over the years.
            `},
        ],
        otherLink: ''
    }
];

function grabPhotographyImages(){
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../img/photography/', false, /\.(png|jpe?g|svg)$/));
    return images;
}

function grabDrawingImages(){
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../img/drawings/', false, /\.(png|jpe?g|svg)$/));
    return images;
}


class HobbiesCard extends React.Component {

    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const tabs = hobbies.map((post) =>
            <Tab label={post.title} />
        );

        const contentParagraphs = hobbies.map((post) =>
            <Tab label={post.title} />
        );

        const images = require.context('../../img/photography/', false, /\.(png|jpe?g|svg)$/).keys().map((img) =>
            <GridListTile  cols={5}>
                <img src={img} width={200} height="40" />
            </GridListTile>
        );

        const drawing = require.context('../../img/drawings/', false, /\.(png|jpe?g|svg)$/).keys().map((img) =>
            <GridListTile  cols={5}>
                <img src={img}  />
            </GridListTile>
        );

        return (
            <div>
                <Typography variant='display3' className={classes.title}> My Hobbies </Typography>
                <section className={classes.hobbyList}>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}

                        indicatorcolor="primary"
                        textcolor="primary"
                        centered
                    >

                    {tabs}
                    </Tabs>
                    {value === 0 && <div className={classes.hobbyContainer}>
                        <Card className={classes.hobbyHeader}>
                            <Typography variant='display2' className={classes.hobbyTitle}> {hobbies[value].title} </Typography>
                            <Typography variant='caption' className={classes.hobbySubtitle}> {hobbies[value].subtitle} </Typography>
                        </Card>
                        <GridList cellHeight={160} cols={3}>
                            {grabPhotographyImages().map(tile => (
                                <GridListTile cols={1}>
                                    <img src={tile}  />
                                </GridListTile>
                            ))}
                            <Button href='https://goo.gl/photos/227oiMxe5FptxeLr8'> Want more? </Button>
                        </GridList>
                    </div>}

                    {value > 0 && <div className={classes.hobbyContainer2}>
                        <Card className={classes.hobbyHeader}>
                            <Typography variant='display2' className={classes.hobbyTitle}> {hobbies[value].title} </Typography>
                            <Typography variant='caption' className={classes.hobbySubtitle}> {hobbies[value].subtitle} </Typography>
                        </Card>
                        <Card className={classes.hobbyCard}>
                            <section className={classes.hobbyContent}>
                                {hobbies[value].contentImg ? (<img className={classes.hobbyImg} src={hobbies[value].contentImg}/>) : (<img className={classes.disabled}/>)}

                                {hobbies[value].content.map(paragraph => (
                                    paragraph.type === "text" ?
                                        <Typography gutterBottom className={classes.hobbyContentConfig}> {paragraph.content} </Typography> :
                                        <img src={paragraph.content} className={classes.hobbyContentConfig}/>
                                ))}

                                {value === 3 && <GridList cols={2}>
                                    {grabDrawingImages().map(tile => (
                                        <GridListTile cols={1}>
                                            <img src={tile}  />
                                        </GridListTile>
                                    ))}
                                </GridList>}

                                <section className={classes.hobbyLinks}>
                                    {hobbies[value].otherLink ? (<Button href={hobbies[value].otherLink} className={classes.projectButton}> Visit </Button>) : (<Button className={classes.disabled}/>)}
                                </section>
                            </section>
                        </Card>
                    </div>}
                </section>
            </div>
        );
    }
}



HobbiesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HobbiesCard);
