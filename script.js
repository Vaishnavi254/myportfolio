$(document).ready(function () {
  // Navbar toggle for mobile
  $('.topnav .icon').click(function () {
    $('#myTopnav').toggleClass('responsive');
  });

  // Smooth scrolling for nav links
  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    if (target) {
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top - 60,
        },
        600
      );
    }

    // Close navbar on mobile after clicking
    if ($('#myTopnav').hasClass('responsive')) {
      $('#myTopnav').removeClass('responsive');
    }
  });

  // Highlight active section in nav on scroll
  $(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop();

    $('.nav-link').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (
        refElement.position().top - 70 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        
      }
    });

    // Show/hide back to top button
    if (scrollPos > 300) {
      $('#backToTopBtn').fadeIn();
    } else {
      $('#backToTopBtn').fadeOut();
    }
  });

  // Back to top button click
  $('#backToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});
