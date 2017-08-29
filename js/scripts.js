$(document).ready(function(){

    /*animate scrolling when clicking internal links*/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var menuHeight = 100; //the offset of the top
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - menuHeight
                }, 1000);
                return false;
            }
        }
    });
});

$(window).resize(function() {

});

$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
        // what will happen
    } else {
        // what will happen
    }
});
