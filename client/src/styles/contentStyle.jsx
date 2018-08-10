
const styles = theme => ({

    center: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },

    projectList: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    project: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2em',
        width: '80%',
        backgroundColor: 'white',
        padding: '1em',
        flex: '1',
        maxWidth: '75vw'
    },

    projectName: {
        fontSize: '2em',
        color: '#898989',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    projectHeader: {
        backgroundColor: 'red',

    },

    projectSubHeader: {

    },

    projectShowMore: {
        width: '100%'
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
        height: '100%',
        padding: '1em',
        borderBottom: 'solid 0.5em #4286f4'
    },

    css: {
        height: '0.75em',
        fontSize: '0.8em',
        height: '100%',
        padding: '1em',
        borderBottom: 'solid 0.5em #ba8cff'
    },

    html: {
        height: '0.75em',
        fontSize: '0.8em',
        height: '100%',
        padding: '1em',
        borderBottom: 'solid 0.5em #ea546d'
    },

    javaScript: {
        height: '0.75em',
        fontSize: '0.8em',
        height: '100%',
        padding: '1em',
        borderBottom: 'solid 0.5em #fcf06c'
    },

    java: {
        height: '0.75em',
        fontSize: '0.8em',
        height: '100%',
        padding: '1em',
        borderBottom: 'solid 0.5em #fcae51'
    },

    cSharp: {
        height: '0.75em',
        fontSize: '0.8em',
        height: '100%',
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
        marginRight: 'auto'
    },

    homeCard: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '75vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },

    title: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '3em',
        fontWeight: 'bold',
        flexDirection: 'column',
        color: '#2e2e35',
        marginTop: '0.2em'
    }
});

export default styles;
