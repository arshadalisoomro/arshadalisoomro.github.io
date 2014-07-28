$(function() {
    $('#navigation a').hover(function() {
    	$(this).addClass('hover');
    }, function() {
    	$(this).removeClass('hover');
    });  	

    $('#slider .slides').nivoSlider({
    	effect:"sliceUpDownLeft",
    	directionNav:true,
        directionNavHide:false,
        captionOpacity: 1
    });
});