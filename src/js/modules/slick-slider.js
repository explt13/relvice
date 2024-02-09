import 'slick-slider'
export const slickSlider = () => {
    const setSlider = function(){
        const mql = window.matchMedia('(max-width: 600px)')
        if (mql.matches){
            $('.achievements__row_cards').addClass('slider-achievements').children().addClass('slider-item')
            if($('.slider-achievements').length > 0){
                $('.slider-achievements').slick({
                    arrows: false,
                    dots: true,
                    adaptiveHeight: false, // use align-items: flex-start on slick-track
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    easing: 'ease',
                    infinite: true,
                    initialSlide: 0,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    pauseOnDotHover: true,
                    draggable: true,
                    swipe: true,
                    touchThreshold: 10,
                    touchMove: true,
                    waitForAnimate: true,
                    centerMode: true,
                    variableWidth: false,
                    rows: 0, // creates empty div
                    slidesPerRow: 1,
                    vertical: false, // use display block on slick track
                    verticalSwiping: false,
                    
                });
            }
            

            $('.advice__row_block').addClass('slider-advice').children().addClass('slider-advice__item')
            $('.slider-advice').slick({
                arrows: false,
                dots: true,
                adaptiveHeight: false, // use align-items: flex-start on slick-track
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                easing: 'ease',
                infinite: true,
                initialSlide: 0,
                autoplay: false,
                autoplaySpeed: 1500,
                pauseOnFocus: true,
                pauseOnHover: true,
                pauseOnDotHover: true,
                draggable: true,
                swipe: true,
                touchThreshold: 10,
                touchMove: true,
                waitForAnimate: true,
                centerMode: true,
                variableWidth: false,
                rows: 0,
                slidesPerRow: 1,
                vertical: false, // use display block on slick track
                verticalSwiping: false,
                
            });

            $('.trusted__companies').addClass('slider-companies')
            $('.slider-companies').slick({
                arrows: false,
                dots: false,
                adaptiveHeight: false, // use align-items: flex-start on slick-track
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 5000,
                // easing: 'ease',
                cssEase: 'linear',
                infinite: true,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 0,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotHover: false,
                draggable: false,
                swipe: false,
                touchThreshold: 10,
                touchMove: false,
                waitForAnimate: false,
                centerMode: true,
                variableWidth: false,
                rows: 0,
                slidesPerRow: 0,
                vertical: false, // use display block on slick track
                verticalSwiping: false,
            })
        }
    }
    $(window).on('resize', setSlider)
    setSlider()
   
    // verticalSwiping
    // asNavFor: ".sliderBig", // must have same elements and quantity
    // responsive: [
    //     {
    //         breakpoint: 768, // max-width x < 768
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480, // max-width x < 480
    //         settings: {
    //             slidesToShow: 1
    //         }
    //     }
    // ],
    // mobileFirst: false, // change breakpoint to min-width
    // appendArrows: $('content'), // move arrows to some element
    // appendDots: $('content')
    // $('.sliderBig').slick({
    //     arrows: false,
    //     fade: true, // slide show -> without slide animation slidesToShow must be 1
    //     asNavFor: ".slider"// must have same elements and quantity
    // })

    // //EVENTS
    // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    // })
    // $('.slider').on('afterChnage', function(event, slick, currentSlide){

    // })

    //METHODS
    // $('.slider').slick('setPosition'); // when i need to reload file if display none than onclick -> display block and need to set position
    // $('.slider').slick('goTo', POS); // pos
    // $('.slider').slick('slickPrev');
    // $('.slider').slick('slickNext');
    // $('.slider').slick('slickPlay');
    // $('.slider').slick('slickPause');
    // $('.slider').slick('slickAdd', HTML)
    // $('.slider').slick('slickRemove', INDEX)


    // let filtered;
    // $('.link_filter').on('click', function(){
    //     if (filtered === false){
    //         $('.slider').slick('slickFilter', '.filter'); // class filter to item
    //         $(this).text('Remove filter');
    //         filtered = true;
    //     } else {
    //         $('.slider').slick('slickUnfilter');
    //         $(this).text('Filter');
    //         filtered = false;
    //     }
    //     return false;
    // })


    // let option = $('.slider').slick('slickGetOption', 'slidesToShow');
    // $('.slider').slick('slickSetOption', 'slidesToShow', 2);
    // $('.slider').slick('unslick')
}
    
