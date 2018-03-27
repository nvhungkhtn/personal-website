$(document).ready(function(){

    /*animate scrolling when clicking internal links*/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var menuHeightPC = 100; //the offset of the top
            var menuHeightSP = 284; //the offset of the top
            var checkWidth = window.matchMedia("(max-width: 991px)"); //check if mobile mode
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - (checkWidth.matches?menuHeightSP:menuHeightPC)
                }, 1000);
                return false;
            }
        }
    });

    $('.nav-sp .toggle-btn').click(function() {
        $('.nav-sp .toggle-btn').toggle();
        $('.hidden-menu').slideToggle(0);
        $('.nav-sp').toggleClass('opened');
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
