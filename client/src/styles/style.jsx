
const styles = theme => ({
    
    body: {
        background: '#f3f3f3',
        margin: 0,
        color: '#f3f3f3',
        fontFamily: "'Roboto', sans-serif",
        display: 'flex',
        flexDirection:  'column',
        alignItems: 'center'
    },
    
    header: {
        height: '40vh',
        backgroundColor: '#486bbf',
        textAlign: 'center',
        verticalAlign: 'baseline',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
        width: '100%'
    },

    name: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '5em',
        height: '2em'
    },

    nameChild: {
        fontSize: '0.35em',
        textAlign: 'right'
    },

    menu: {
        backgroundColor: '#e0e0e0',
        paddingTop: '0',
        paddingBottom: '0',
        transition: 'padding 0.75s',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        flexDirection: 'row'
    },

    sliderContent: {
        animation: 'moveSlideshow 20s linear infinite'
    },

    footer: {
        backgroundColor: '#486bbf',
        width: '100%',
        height: '5em'
    },

    backToTop: {
        position: 'fixed',
        right: '0',
        bottom: '0',
        color: 'black',
        fontSize: '3em'
    }

});

export default styles;