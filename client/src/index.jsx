import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.jsx';

//const test = JSON.stringify(style.size)

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 style={style.size}>Hello</h1>
            </div>
        );
    }
}