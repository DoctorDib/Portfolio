import React from 'react';
import ReactDOM from 'react-dom';

import {Home} from './index' //CONTENT

import style from './style'

class Template extends React.Component {
    render(){
        return (
            <section id="main" style={style.body}>
                <section id="header" className="child" style={style.header}>
                    <h1 id="name"> James Dibnah <span> Software developer </span></h1>
                </section>
        
                <section id="slider" className="child">
                    <div className="sliderChild"> Javascript</div>
                    <div className="sliderChild"> Python</div>
                    <div className="sliderChild"> React</div>
                </section>
        
                <section id="menu" className="child">
                    <ul>
                        <li><a href='#'> Home </a></li>
                        <li><a href='#'> Projects </a></li>
                        <li><a href='#'> About me </a></li>
                    </ul>
                </section>
        
                <section id="content" className="child">
                    <Home />
                </section>
        
                <section id="footer" className="child">
                    <h1> James Dibnah - Copyright 2018 </h1>
                </section>
    
                <section id="backToTop"> <h1> <a> Up </a> </h1 > </section>
            </section>
        )
    }
}

ReactDOM.render(<Template />, document.getElementById('importContent'));