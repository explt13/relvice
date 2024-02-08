export const ibg = () => {
    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0){
            if ($('body').hasClass('webp1')){ // for dev purpuses 1
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src').replace(/\.\w+$/, '.webp') + '")')
            } else {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
            }
            $(this).find('img').hide()
        }
    
        
    })
}
    
