$("document").ready(function($){
    const nav = $('#menu');
    let distance = $('#menu').offset().top;

    $(window).scroll(function() {
        if ( $(this).scrollTop() >= distance ) {
            nav.addClass("fixedMenu");
            jQuery('#backToTop').removeClass("hidden");
        } else {
            nav.removeClass("fixedMenu");
            jQuery('#backToTop').addClass("hidden");
        }
    });

    /*$('button').click(function(){
        let content = jQuery(this).text();

    });*/
});
