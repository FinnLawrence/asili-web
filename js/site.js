$(document).ready(function() {
    // Set portrait vs landscape
    page.setAspect();
    
    // Fire up carousels
    $('.asili-grid-content-carousel').slick({
        arrows: false,
        autoplay: true,
        fade: true
    });
});

$(window).resize(function() {
    // Set portrait vs landscape
    page.setAspect();
});

const page = {
    elementSelector: "main",
    portraitClass: "portrait",
    landscapeClass: "landscape",
    setAspect: function() {
        var height = $(window).height();
        var width = $(window).width();
        
        var aspect = width / height;
        
        if (aspect > 1) {
            $(page.elementSelector).removeClass(page.portraitClass);
            $(page.elementSelector).addClass(page.landscapeClass);
        } else {
            $(page.elementSelector).removeClass(page.landscapeClass);
            $(page.elementSelector).addClass(page.portraitClass);
        }
    }
}