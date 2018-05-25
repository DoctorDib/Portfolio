import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Template from '../mainTemplate';
import Home from './home';
import Projects from './projects';
import AboutMe from './about-me';

ReactDOM.render(<Template page1={<Home />} page2={<Projects />} page3={<AboutMe />}/>, document.getElementById('importContent'));
