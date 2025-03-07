
$(document).ready(function () {
    $('nav ul li a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Highlight active section in navigation
    $(window).on('scroll', function () {
        const scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            const sectionOffset = $($(this).attr('href')).offset().top - 50;
            if (scrollPos >= sectionOffset) {
                $('nav ul li a').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Back-to-top button functionality
    const backToTop = $('<div id="back-to-top">&#8679;</div>').appendTo('body');
    backToTop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });

    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Add user's image dynamically with modern styling
    const userImage = $('<div>', {
        class: 'user-image-container'
    }
    ).append(
        $('<h2>', {
            text: 'Welcome to My Portfolio',
            class: 'user-welcome'
        })
    );
    $('#about').prepend(userImage);

    // Add animations for image and welcome text
    $('.user-image-container').hide().fadeIn(1000);
    $('.user-welcome').css({
        color: '#1F41BB',
        'font-size': '1.5rem',
        'text-align': 'center',
        'margin-top': '10px'
    });
});
$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('nav ul li a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Highlight active section in navigation
    $(window).on('scroll', function () {
        const scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            const sectionOffset = $($(this).attr('href')).offset().top - 50;
            if (scrollPos >= sectionOffset) {
                $('nav ul li a').removeClass('active');
                $(this).addClass('active');
            }
        });

        // Show or hide the "Back to Top" button
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Back-to-top button functionality
    $('#back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Dynamically add the "Back to Top" button at the bottom of the page
    const backToTop = $('<div id="back-to-top">&#8679;</div>').appendTo('body');
});
