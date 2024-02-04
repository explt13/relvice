
$(document).ready(function() {
    function ibg(){
        $.each($('.ibg'), function(index, val) {
            const isDevMode = window.location.hostname === 'localhost'; // DEV MODE
            if (isDevMode){
                if ($(this).find('img').length > 0){
                    $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
                }
                $(this).find('img').hide()
            }
            if (!isDevMode){
                if ($(this).find('img').length > 0){
                    if ($('body').hasClass('webp')){
                        $(this).css('background-image', 'url("' + $(this).find('img').attr('src').replace(/\.\w+$/, '.webp') + '")')
                    } else {
                        $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
                    }
                    $(this).find('img').hide()
                }
            }
            
        })
    }
    ibg()
    
});