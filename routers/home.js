'use strict';

module.exports = function(){
    return {
        setRouting: function(router){
            router.get('/', this.Main);
        },

        Main: function(req, res){
            res.render('index/index.ejs', {title: 'Portfolio'})
        },
    }
};
