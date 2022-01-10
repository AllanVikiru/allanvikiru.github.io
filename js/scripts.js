/*!
    * Allan Vikiru | Software Engineer based on Start Bootstrap v6.0.2 (http://allanvikiru.github.io)
    * Copyright 2013-2022 Start Bootstrap & Allan Vikiru (https://allanvikiru.github.io/)
    * Licensed under MIT (https://github.com/StartBootstrap/portfolio/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    //dismiss snackbar on button click
    var cb = document.getElementById("close-sb");
    cb.onclick = function () {
        $('#snackbar-section-content').toggleClass('active')
    };

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    //Copyright
    document
        .getElementById("copyright")
        .appendChild(document.createTextNode(new Date().getFullYear()));
})(jQuery); // End of use strict
