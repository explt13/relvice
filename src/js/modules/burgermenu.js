
export const burgerMenu = () =>{
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active')
        $('body').toggleClass('lock') // overflow: hidden
        $('.header__brand').toggleClass('active')
        if ($(this).hasClass('active') && !$('.menu__body').hasClass('closing')){

            $(this).one('click', function() {
                $('.menu__body').addClass('closing')
                setTimeout(() => {
                    $('.menu__body').removeClass('closing')
                }, 500)
            })

        }
    });
}
    