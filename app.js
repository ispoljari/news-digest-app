function startApp() {
  fadeInHamburgerIcon();
  setFocusOnSelect();
  toggleHamburgerIconListen();
  scrollUpDownListen();
  navigationLinksListen();
  blockInitialAnimations();
}

// page load animations

function fadeInHamburgerIcon() {
  setTimeout(function() {
    $('.js-small-screen-nav').fadeIn('slow');
  }, 3500);
}

function setFocusOnSelect() {
  $('.js-home').focusin(function() {
    slideDownTheMenuStrip();
  });

  $('.js-home').focusout(function() {
    slideUpTheMenuStrip();
  });

  $('.js-search').focusin(function() {
    slideDownTheMenuStrip();
  });

  $('.js-search').focusout(function() {
    slideUpTheMenuStrip();
  });
}

function toggleHamburgerIconListen() {
  $('body').on('click', '.js-menuToggle', function() {
    animateBurgerIcon();
    changeBurgerIconColor();
    toggleTheMenuStrip();
  });
}

function animateBurgerIcon() {
  $('.js-menuToggle').toggleClass('open');
}

function changeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').toggleClass('defaultBurgerColor').toggleClass('changeBurgerColor');
}

function toggleTheMenuStrip() {
  $('.js-menu').toggleClass('slideMenuDown');
}

function slideDownTheMenuStrip() {
  $('.js-menu').addClass('slideMenuDown');
}

function slideUpTheMenuStrip() {
  $('.js-menu').removeClass('slideMenuDown');
}

// page transition triger and animations

function scrollUpDownListen() {
  setTimeout(function() {
    $('body').on('mousewheel',function(event) {
      if (event.originalEvent.wheelDelta>0) {
        // scroll up
        fadeInHeading();
      } else {
        // scroll down
        fadeOutHeading();
        // fadeInSearchForm();
      }
    });
  }, 4000);
}

function navigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home',function() {
      fadeInHeading();
      $('.js-home').blur();
    });

    $('body').on('click','.js-search',function() {
      fadeOutHeading();
      $('.js-search').blur();
    });
  }, 4000);
  
}

function fadeOutHeading() {
  $('.js-headings').addClass('eject-up-scroll fade-up-scroll');

  setTimeout(function() {
    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
    $('.js-headings').css('display','none');
  }, 400);
}

function fadeInHeading() {
  $('.js-headings').css('display','block').removeClass('eject-up-scroll');

  setTimeout(function() {
    $('.js-headings').removeClass('fade-up-scroll');
  }, 400);
}

function blockInitialAnimations() {
  setTimeout(function() {
    $('.js-h1').css('opacity','1');
    $('.js-h2').css('opacity','1');

    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
  }, 3600);

  setTimeout(function() {
    $('.js-large-screen-nav').css('opacity','1');

    $('.js-large-screen-nav').removeClass('large-screen-nav-animate');
    $('.js-nav-bullet').removeClass('nav-bullet-animate');
    $('.js-nav-text').removeClass('nav-text-animate');
  }, 5500);
}

$(startApp);