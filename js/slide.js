$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.variable');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: true,
        prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/banner-arrow-left.svg" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/banner-arrow-right.svg" alt=""></div>',
        infinite: true,
        variableWidth: false,
        speed: 600,
        centerMode: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4200, 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
         
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            autoplay: false,
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            variableWidth: false,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 });

});

$(document).on('ready', function() {
        $(".album-list").slick({
            dots: false,
            prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/next-black-arrow.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow"><img src="images/prev-black-arrow.svg" alt=""></div>',
            infinite: true,
            variableWidth: false,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/next-black-arrow.svg" alt=""></div>',
                        nextArrow: '<div class="slide-arrow next-arrow"><img src="images/prev-black-arrow.svg" alt=""></div>',
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    });

$(document).on('ready', function() {
        $(".link-list").slick({
            dots: false,
            prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/next-black-arrow.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow"><img src="images/prev-black-arrow.svg" alt=""></div>',
            infinite: true,
            variableWidth: false,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/next-black-arrow.svg" alt=""></div>',
                        nextArrow: '<div class="slide-arrow next-arrow"><img src="images/prev-black-arrow.svg" alt=""></div>',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
