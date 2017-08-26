$(document).ready(function() {
    // Set portrait vs landscape
    page.setAspect();

    // Fire up carousels
    $('.asili-grid-content-carousel').slick({
        arrows: true,
        autoplay: true,
        fade: true,
        dots: true
    });

    $('#navigation-toggle .tap-target').click(function () {
        nav.resetNav();
        $('#navigation-toggle').toggleClass("closed");
    });
    
    $(nav.activatorSelector).click(function(event) {
        event.preventDefault();
        nav.showChildNav($(this));
    });
    
    $(nav.backSelector).click(function(event) {
        event.preventDefault();
        nav.resetNav();
    });
});

$(window).resize(function() {
    // Set portrait vs landscape
    page.setAspect();
});

const nav = {
    parentSelector: ".nav-parent",
    activatorSelector: ".submenu",
    childSelector: ".nav-child",
    backSelector: ".back-link",
    showChildNav: function(activator) {
        var parentNav = $(nav.parentSelector);
        var childNavID = activator.attr("href");
        var childNav = $(childNavID);
        parentNav.addClass("child-open");
        childNav.addClass("open");
    },
    resetNav: function() {
        var parentNav = $(nav.parentSelector);
        var childNav= $(nav.childSelector);
        parentNav.removeClass("child-open");
        childNav.removeClass("open");
    }
}

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