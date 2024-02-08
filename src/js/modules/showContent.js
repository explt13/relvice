export const showContent = () => {
    let active = false;
    $('.row-content__title').on('click', function(){
        let height;
        height = $(this).siblings().get(0).scrollHeight
        
        if (!active){
            active = true;
            $(this).addClass('active')
            $(this).siblings().css('display', 'block').animate({
                height: height ? height : '126px',
                opacity: 1,
            }, 500)
            
        } else if (active) {
            $(this).removeClass('active')
            $(this).siblings().animate({
                height: 0,
                opacity: 0,
                margin: 0,
            }, 500, function(){
                $(this).css('display', 'none')
            })
            active = false;
            
        }
    })
}