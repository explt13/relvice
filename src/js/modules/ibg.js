export const ibg = () => {
    $.each($('.ibg'), function(index, val) {
       
        console.log($(this).find('img').attr('src'))
        if ($(this).find('img').length > 0){
            if ($('body').hasClass('webp')){
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src').replace(/\.\w+$/, '.webp') + '")')
            } else {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
            }
            $(this).find('img').hide()
        }
    
        
    })
}
    
