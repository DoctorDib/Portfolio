'use strict';

module.exports = function(){
    return {
        setRouting: function(router){
            router.get('/', this.Main);
            router.get('/login', this.Login);
        },

        Main: function(req, res){
            res.render('main.jsx', {title: 'Portfolio'})
        },

        Login: function(req, res){
            res.render('login.jsx', {title: 'Login'})
        }
    }
};
