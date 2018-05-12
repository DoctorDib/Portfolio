import React from 'react';

const React = require('react')

//import { Index } from './content/index.jsx';

class PageLayout extends React.Component {

    handleClick = () => {
        alert('hi')
    }

    render() {
        return <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/index.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="/js/main.js"></script>
        </head>
            <body>
                <section id="main">
                    <section id="header" className="child">
                          <h1 id="name"> James Dibnah <span> Software developer </span> </h1>
                    </section>

                    <section id="slider" className="child">
                        <div className="sliderChild"> Javascript </div>
                        <div className="sliderChild"> Python </div>
                        <div className="sliderChild"> React </div>
                    </section>

                    <section id="menu" className="child">
                        <ul>
                          <li> <a onClick={this.handleClick}> Home </a> </li>
                          <li> <a href='#'> Projects </a> </li>
                          <li> <a href='#'> About me </a> </li>
                        </ul>
                    </section>

                    <section id="content" className="child">

                    </section>

                    <section id="footer" className="child">
                        <h1> James Dibnah - Copyright 2018 </h1>
                    </section>
                </section>

                <section id="backToTop">
                      <h1> <a> Up </a> </h1>
                </section>
            </body>
        </html>;
    }
}

export default PageLayout;
