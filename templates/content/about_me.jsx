import React from 'react';

class PageLayout extends React.Component {
    render() {
        return <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/index.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </head>
            <body>
                <section id="main">
                    <section id="header" className="child">
                          <h1 id="name"> James Dibnah <span> Software developer </span> </h1>
                    </section>

                    <section id="slider" className="child">
                        <div className="sliderChild">
                          Javascript
                        </div>
                        <div className="sliderChild">
                         Python
                        </div>
                        <div className="sliderChild">
                         React
                        </div>
                    </section>

                    <section id="menu" className="child">
                        <ul>
                          <li> <a href=''> Home </a> </li>
                          <li> <a href='projects'> Projects </a> </li>
                          <li> <a href='about-me'> About me </a> </li>
                        </ul>
                    </section>

                    <section id="content" className="child">
                        <h1> boop </h1>
                    </section>
                </section>
            </body>
        </html>;
    }
}

export default PageLayout;
