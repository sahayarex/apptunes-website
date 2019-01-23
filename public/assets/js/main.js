"use strict";
jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.labici').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/labici1.png'
        },{
            src: 'assets/images/labici2.png'
        },{
            src: 'assets/images/labici-large1.png'
        },{
            src: 'assets/images/labici-large2.png'
        },{
            src: 'assets/images/labici-large3.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.rigmove').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/rigmove1.jpg'
        },{
            src: 'assets/images/rigmove2.jpg'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.synduite').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/synduite1.jpg'
        },{
            src: 'assets/images/synduite2.jpg'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.livelocl').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/livelocl1.jpg'
        },{
            src: 'assets/images/livelocl2.jpg'
        },{
            src: 'assets/images/livelocl-large3.png'
        },{
            src: 'assets/images/livelocl-large2.png'
        },{
            src: 'assets/images/livelocl-large1.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.separarensuneix').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/separarensuneix1.png'
        },{
            src: 'assets/images/separarensuneix2.png'
        },{
            src: 'assets/images/sepronix-large1.png'
        },{
            src: 'assets/images/sepronix-large2.png'
        },{
            src: 'assets/images/sepronix-large3.png'
        },{
            src: 'assets/images/sepronix-large4.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.sepl').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/sepl1.png'
        },{
            src: 'assets/images/sepl2.png'
        },{
            src: 'assets/images/sepl-large1.png'
        },{
            src: 'assets/images/sepl-large2.png'
        },{
            src: 'assets/images/sepl-large3.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.pictuscode').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/pictuscode1.png'
        },{
            src: 'assets/images/pictuscode2.png'
        },{
            src: 'assets/images/pituscode-large1.png'
        },{
            src: 'assets/images/pituscode-large2.png'
        },{
            src: 'assets/images/pituscode-large3.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.aadiya').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/aadiya1.png'
        },{
            src: 'assets/images/aadiya2.png'
        },{
            src: 'assets/images/aaditya-large1.png'
        },{
            src: 'assets/images/aaditya-large2.png'
        },{
            src: 'assets/images/aaditya-large3.png'
        }],
        gallery: {
            enabled: true
        }
    });
    $('.servicerabbit').magnificPopup({
        type: 'image',
        items: [{
            src: 'assets/images/servicerabbit1.png'
        },{
            src: 'assets/images/servicerabbit3.png'
        },{
            src: 'assets/images/service-large2.png'
        },{
            src: 'assets/images/service-large1.png'
        }],
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });



// slick slider active Home Page Tow
//    $(".hello_slid").slick({
//        dots: true,
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        arrows: true,
//        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
//        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
//        autoplay: true,
//        autoplaySpeed: 2000
//    });




//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });





//Team Skillbar active js

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });





    //End

});



