// lottery ticket animation when scroll
$(document).ready(function(){
    var $section = $('#lottery-ticket');
    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.lottery-ticket').addClass('active');
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });    
});  