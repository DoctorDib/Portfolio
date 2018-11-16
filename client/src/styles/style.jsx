
const styles = theme => ({

    body: {
        background: '#cbcbcb',
        margin: 0,
        color: '#f3f3f3',
        fontWeight: 200,
        display: 'flex',
        flexDirection:  'column',
        alignItems: 'center'
    },

    header: {
        height: '40vh',
        backgroundColor: '#3A539B',
        textAlign: 'center',
        verticalAlign: 'baseline',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '30vh',
        }
    },

    name: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '6em',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '5em'
        }
    },

    nameChild: {
        fontSize: '2em',
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.25em'
        }
    },

    menu: {
        backgroundColor: '#3f5483',
        paddingTop: '0',
        paddingBottom: '0',
        transition: 'padding 0.75s',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '4em',
        zIndex: '1',
        borderTop: 'solid 5px #486bbf',
        borderBottom: 'solid 5px #3a4763'
    },

    menuList: {
        listStyle: 'none',
        display: 'flex'
    },

    content: {
        width: '90%',
        backgroundColor: '#eaeaea',
        paddingLeft: '5em',
        paddingRight: '5em',
        color: '#1b1b1b'
    },

    slider: {
        width: '100%',
        backgroundColor: '#904737',
        transition: 'opacity 0.5s ease-out',
        animation: 'moveSlideshow 60s linear infinite',
        display: 'flex',
        flexDirection: 'row',
        zIndex: '10'
    },

    sliderContent: {
        animation: 'moveSlideshow 20s linear infinite'
    },

    backToTop: {
        position: 'fixed',
        right: '0',
        bottom: '0',
        color: 'black',
        fontSize: '3em'
    },

    sideBar: {
        position: 'fixed',
        width: '75px',
        height: '100%',
        right: '0',
        top: '10',
        backgroundColor: 'inherit',
        padding: '0.5em'
    },

    page: {
        color: 'black',
        borderBottom: 'solid #222222 0.1em',
        margin: '0',
        paddingBottom: '2em',
        width: '100%',
        backgroundColor: '#eeeeee',
        boxShadow: '0px 0px 6px 1px #b9b9b9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    menuButtons: {
        color: '#f4f3f3',
        marginLeft: '4em',
        marginRight: '4em',
        height: '80%',
        width: '10%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1em',
            marginRight: '1em'
        }
    },

    backTop: {
        fontSize: '3em',
        position: 'fixed',
        zIndex: '66',
        bottom: '0',
        right: '10',
        color: 'black',
        cursor: 'pointer',
        borderRadius: '100em',
        width: '50px',
        height: '50px',
        border: '3px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }

});

export default styles;
