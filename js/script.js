// Navigation scroll //
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                }, 1000);
            }
        }
    });

// Animations on scroll
$(".js--wp-about").waypoint(function(direction) {
    $(".js--wp-about").addClass('fadeIn')
}, {
    offset: '50%'
})

$(".js--wp-projects").waypoint(function(direction) {
    $(".js--wp-projects").addClass('fadeIn')
}, {
    offset: '50%'
})

$(".js--wp-motivation").waypoint(function(direction) {
    $(".js--wp-motivation").addClass('fadeIn')
}, {
    offset: '50%'
})

$(".js--wp-comments").waypoint(function(direction) {
    $(".js--wp-comments").addClass('fadeIn')
}, {
    offset: '50%'
})

$(".js--wp-contact-icons").waypoint(function(direction) {
    $(".js--wp-contact-icons").addClass('fadeIn')
}, {
    offset: '90%'
})