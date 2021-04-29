$(function(){
    // banner slider--
    
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,

    });
    
    // about-video---
    $(document).ready(function(){
        $('.venobox').venobox(); 
      });

      // gallery slider--
    $('.gall-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:500,
        arrows:true,
        dots:false,
        prevArrow:'.left' ,
        nextArrow:'.right' ,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
              }
            }
      
          ]

        
    });
        // test-slider-------
    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:500,
        arrows:false,
        dots:true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
            
      
          ]
    });

    // counter---
    $('.counter').counterUp({
        delay: 5,
        time: 1000,
    });
        // client-logo-slider-------
        $('.client-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            speed:500,
            arrows:true,
            dots:false,
            centerMode:true,
            centerPadding:0,
            prevArrow:'.left1' ,
            nextArrow:'.right2' ,
            responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,

                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,

                  }
                }
          
              ]
        });

        // scroll nav bar----
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.navbar').addClass('nav-bg');
        }
        else {
            $('.navbar').removeClass('nav-bg');
        }
    });

       // scroll up
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $(".top-to-up").fadeIn();
        }
        else {
            $(".top-to-up").fadeOut();
        }
    });

 
    
   
     //  animation scroll js-------------------------

     var html_body = $('html, body');
     $('.navbar a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 50
                 }, 500);
                 return false;
             }
         }
     });
    //  preloader--------------------------------------

    $(window).on('load',function(){
       $('.preloader').delay(500).fadeOut(500);
    });
    // wow js---
    new WOW().init();


});
