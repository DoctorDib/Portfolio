
const styles = theme => ({

    center: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },

    projectList: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    projectCard: {
        padding: '0',
        paddingBottom: '1em'
    },

    project: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2em',
        width: '80%',
        flex: '0 0 45%',
        maxWidth: '75vw',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 100%',
            margin: '0',
            marginTop: '2em',
            marginBottom: '2em',
            minWidth: '95vw'

        }
    },

    projectTitle: {
        fontSize: '2em',
        color: '#898989',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0.1em'
    },

    projectSubtitle: {
        backgroundColor: '#eaeaea',
        paddingTop: '0.15em',
        paddingBottom: '0.25em'
    },

    projectHeader: {
        marginBottom: '0.25em',
        textAlign: 'center',
        paddingTop: '0.25em'
    },

    projectContent: {
        padding: '1em'
    },

    projectImg: {
        width: '100%',
        marginBottom: '1em'
    },

    projectLinks: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    projectButton: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f3f3f3',
        margin: '0.25em'
    },

    languageContainer: {
        width: '100%',
        height: '3em',
        display: 'flex',
        textAlign: 'center'
    },

    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        })
    },

    expandOpen: {
        transform: 'rotate(180deg)',
    },

    python: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #4286f4'
    },

    css: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #ba8cff'
    },

    html: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #ea546d'
    },

    javaScript: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #fcf06c'
    },

    java: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #fcae51'
    },

    cSharp: {
        height: '0.75em',
        fontSize: '0.8em',
        padding: '1em',
        borderBottom: 'solid 0.5em #5fa85e'
    },

    aboutMeAvatar:{
        height: '9em',
        width: '9em',
        border: 'solid 0.1em #3f3f3f',
        boxShadow: '0 0 5px 1px #2c2c2c',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2em'
    },

    card: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2em',
        [theme.breakpoints.down('sm')]: {
            minWidth: '95%',
        }
    },

    homeCard: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '75vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            minWidth: '95vw',
        }
    },

    title: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '3em',
        flexDirection: 'column',
        color: '#2e2e35',
        marginTop: '0.2em',
        marginBottom: '0.5em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
            paddingTop: '0.5em'
        }
    },

    disabled: {
        display: 'none'
    },

    hobbyButtons: {

    },

    hobbyContentConfig: {
        width: '80%',
        marginTop: '2em',
        marginBottom: '2em',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95vw',
            minWidth: '100%'
        }
    },

    hobbyContainer: {
        margin: '1em'
    },

    hobbyContainer2: {
        margin: '1em',
        maxWidth: '70vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95vw',
        }
    },

    hobbyList: {
    },

    hobbyCard: {
        padding: '0',
        paddingBottom: '1em',
        padding: '2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    hobby: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2em',
        width: '80%',
        flex: '0 0 45%',
        maxWidth: '75vw',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 100%',
            margin: '0',
            marginTop: '2em',
            marginBottom: '2em'
        }
    },

    hobbyHeader: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        paddingTop: '0.5em',
        paddingBottom: '0.5em'
    },

    hobbyTitle: {
        fontSize: '2em',
        color: '#898989',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0.1em'
    },

    hobbySubtitle: {
        backgroundColor: '#e5e3e3'
    },

    hiddenContent: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'

    }
});

export default styles;
