$(document).ready(function () {

    $('.js--section-feature').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px'
    });

    $('h1').click(function () {
        $(this).css('background-color', 'red');
    });


    /*
    var waypoint = new Waypoint({
     element: document.getElementById('px-offset-waypoint'),
     handler: function(direction) {
     notify('I am 20px from the top of the window')
     },
     offset: 20
     })
     **/
});


