export const showContent = () => {
    
    const mql = window.matchMedia('(max-width: 1500px)')
    const handleAccrd = () => {
  
        $('.row-content__title').on('click', function(event){
            if (!($(this).hasClass('active'))){
                $(this).addClass('active')
                $(this).siblings().css('max-height', $(this).siblings().get(0).scrollHeight + "px")
                
            } else if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings().css('max-height', '0px')
            }
        })
    }
    if (mql.matches){
        handleAccrd()
    }

    let isMqlMathces = mql.matches // false
    $(window).on('resize', function(){
        if (isMqlMathces !== mql.matches){ // if false === true => 
            isMqlMathces = mql.matches;
            if (isMqlMathces){
                $('.row-content__title').each(function(){
                    $(this).siblings().css({'max-height': '0px'})
                })
                handleAccrd()
            } else if (!isMqlMathces){
                $('.row-content__title').each(function(){
                    $(this).off('click');
                    $(this).siblings().css({'max-height': $(this).siblings().get(0).scrollHeight + "px"})
                })
            }
        }
        
    })   
}