export const contactCardAnim = () => {
    $('.card-contact').on('mouseenter', function(){
        $($(this).parent()).siblings().each(function(){
            if($(this).find('.card-contact_b')){
                $(this).find('.card-contact_b').children().each(function(index){
                    $(this).removeClass($(this).attr('class').split(' ')[0]+'_w')
                })
                $(this).find('.card-contact_b').removeClass('card-contact_b')
            }
        })
        $(this).addClass('card-contact_b')
        $(this).children().each(function(index){
            if (!$(this).attr('class').split(' ').includes($(this).attr('class')+'_w')){
                $(this).addClass($(this).attr('class').split(' ')[0]+'_w')
            }
        })
    })

    $('.card-contact').on('mouseleave', function(){
        $(this).removeClass('card-contact_b')
        $(this).children().each(function(index){
            $(this).removeClass($(this).attr('class').split(' ')[0]+'_w')
        })
    })

    $('.contact__row_three-col').on('mouseleave', function(){
        $($(this).find('.contact__column')[1]).find('.card-contact').addClass('card-contact_b')
        $($(this).find('.contact__column')[1]).find('.card-contact').children().each(function(index){
            $(this).addClass($(this).attr('class').split(' ')[0]+'_w')
        })
    })
}