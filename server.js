//const App = require('./templates/main.jsx');

const express = require('express');
//const ReactEngine = require('express-react-engine');
const bodyParser = require('body-parser');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const dependencies = require('./dependencies');


dependencies.resolve(function(home){
    const app = SetupExpress();

    function SetupExpress(){
        const app = express();
        const server = http.createServer(app);

        server.listen(8080, function(){
            console.log('Listening on port 8080');
        });

        configureExpress(app);

        // Setup Router/Routing
        const router = require('express-promise-router')();
        // grabbing main template
        // Grabbing content

        home.setRouting(router);


        app.use(router);
    }

    function configureExpress(app){
        app.use(express.static('public'));
        app.use(cookieParser());

        app.set('views', __dirname + '/templates');
        app.set('view engine', 'jsx');
        app.engine('jsx', require('express-react-views').createEngine());

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(validator());

        app.use(flash());
    }
});
