function startApp() {
  fadeInHamburgerIcon();
  slideDownMenuOnFocus();
  toggleHamburgerIconListen();
  scrollUpDownListen();
  largeNavigationLinksListen();
  smallNavigationLinksListen();
  blockInitialAnimations();
}

// page load animations

function fadeInHamburgerIcon() {
  setTimeout(function() {
    $('.js-small-screen-nav').fadeIn('slow');
  }, 3500);
}

// page interaction animations

function slideDownMenuOnFocus() {
  $('.js-home-small, .js-search-small').focusin(function() {
    openBurgerIcon();
    openBurgerIconColor();
    slideDownTheMenuStrip();
  });

  $('.js-home-small, .js-search-small').focusout(function() {
    closeBurgerIcon();
    closeBurgerIconColor();
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

function openBurgerIcon() {
  $('.js-menuToggle').addClass('open');
}

function closeBurgerIcon() {
  $('.js-menuToggle').removeClass('open');
}

function changeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').toggleClass('defaultBurgerColor').toggleClass('changeBurgerColor');
}

function openBurgerIconColor() {
  $('.js-small-screen-nav').find('span').removeClass('defaultBurgerColor').addClass('changeBurgerColor');
}

function closeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').addClass('defaultBurgerColor').removeClass('changeBurgerColor');
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
      if (event.originalEvent.wheelDelta<0) {
        // ONLY SCROLL DOWN
        fadeOutHeading();
        fadeOutScrollLabel();
        setTimeout(function() {
          fadeInSearchForm();
        }, 450);
      }
    });
  }, 4000);
}

function largeNavigationLinksListen() { // TRENUTNO RADIM NA OVOME!!!
  setTimeout(function() {
    $('body').on('click','.js-home-large',function() {
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 350);
      $('.js-home-large').blur();
    });

    $('body').on('click','.js-search-large',function() { // TRENUTNO RADIM NA OVOME!!
      fadeOutHeading();
      fadeOutScrollLabel();
      setTimeout(function() {
        fadeInSearchForm();
      }, 450);
      $('.js-search-large').blur();
    });
  }, 4000);
}

function smallNavigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home-small',function() {
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 350);
      $('.js-home-small').blur();
      closeBurgerIcon();
      closeBurgerIconColor();
    });

    $('body').on('click','.js-search-small',function() {
      fadeOutHeading();
      fadeOutScrollLabel();
      setTimeout(function() {
        fadeInSearchForm();
      }, 450);
      $('.js-search-small').blur();
      closeBurgerIcon();
      closeBurgerIconColor();
    });
  }, 4000);
}

function fadeOutHeading() {
  $('.js-headings').addClass('eject-down-scroll fade-out-down-scroll');

  setTimeout(function() {
    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
    $('.js-headings').removeClass('eject-down-scroll').css('display','none');
  }, 400);
}

function fadeOutScrollLabel() {
  $('.js-scroll-down-label').addClass('fade-out-down-scroll');
}

function fadeInHeading() {
  $('.js-headings').css('display','block');

  setTimeout(function() {
    $('.js-headings').removeClass('fade-out-down-scroll');
  }, 10);
}

function fadeInScrollLabel() {
  setTimeout(function() {
    $('.js-scroll-down-label').removeClass('fade-out-down-scroll');
  },300);
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
    $('.js-scroll-down-label').removeClass('label-opacity');

    $('.js-large-screen-nav').removeClass('large-screen-nav-animate');
    $('.js-scroll-down-label').removeClass('label-animate');

    $('.js-nav-bullet').removeClass('nav-bullet-animate');
    $('.js-nav-text').removeClass('nav-text-animate');
  }, 5500);
}

function fadeInSearchForm() {
  $('.js-search-form-partial').css('display','block');
  setTimeout(function() {
    $('.js-search-form-partial').addClass('fade-in-down-scroll');
  }, 10);
}

function fadeOutSearchForm() {
  $('.js-search-form-partial').removeClass('fade-in-down-scroll');
  setTimeout(function() {
    $('.js-search-form-partial').css('display','none');
  }, 310);
}

$(startApp);