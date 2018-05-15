

var sender = function(val){
    return val;
}

const test = {
    
    body: {
        background: '#f3f3f3',
        margin: 0,
        color: '#f3f3f3',
        fontFamily: "'Roboto', sans-serif",
        height: '100%',
        display: 'flex',
        flexDirection:  'column',
        alignItems: 'center'
    },
    
    size: {
        backgroundColor: '#4286f4',
    },
    
    header: {
        height: '75%',
        backgroundColor: '#667db3',
        textAlign: 'center',
        verticalAlign: 'baseline',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
        width: '100%'
    }
    
}

export default sender(test);