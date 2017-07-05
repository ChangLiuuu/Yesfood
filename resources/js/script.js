$(document).ready(function () {

    // $('h1').click(function () {
    //     $(this).css('background-color', 'red');
    // });
    /*-- sticky navigation --*/
    $('.js--section-feature').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px'
    });

    /*
     var waypoint = new Waypoint({
     element: document.getElementById('px-offset-waypoint'),
     handler: function(direction) {
     notify('I am 20px from the top of the window')
     },
     offset: 20
     })
     */

    /*-- scroll on buttons --*/
    $('.js--scroll-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000);
    });

    $('.js--scroll-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });

    $('.js--scroll-top').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1500);
    });

    /* Navigation scroll */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});


