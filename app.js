function startApp() {
  detectBrowserVendor();
  fadeInHamburgerIcon();
  slideDownMenuOnFocus();
  toggleNavHomeColor();
  toggleHamburgerIconListen();
  scrollUpDownListen();
  swipeUpDownListen();
  largeNavigationLinksListen();
  smallNavigationLinksListen();
  blockInitialAnimations();
}

function detectBrowserVendor() {
  // Firefox 1.0+
  newsApiAppData.browserType.isFirefox = typeof InstallTrigger !== 'undefined';

  // Internet Explorer 6-11
  newsApiAppData.browserType.isIE = /*@cc_on!@*/false || !!document.documentMode;
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
    if (newsApiAppData.browserType.isFirefox || newsApiAppData.browserType.isIE) {
      $(window).bind('DOMMouseScroll',function(event) {
        if (event.originalEvent.detail>0) {
          // SCROLL DOWN
          executeOnPageScroll();
        }
      });
    } else {
      $('body').on('mousewheel',function(event) {
        if (event.originalEvent.wheelDelta<0) {
          executeOnPageScroll();          
        }
      });
    }
  }, 4000);
}

function executeOnPageScroll() {
  // SCROLL DOWN
  fadeOutHeading();
  fadeOutScrollLabel();
  if (newsApiAppData.sitePage === 1) {
    toggleNavLinksColor();      
    newsApiAppData.sitePage++;
  }
  setTimeout(function() {
    fadeInSearchForm();
  }, 450);
}

function swipeUpDownListen() { // this function is done with pure JS because jQuery doesn't support it
  setTimeout(function() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let yDown = null;

    function handleTouchStart(event) {
      yDown = getTouches(event)[0].clientY;
    }

    function getTouches(event) {
      return event.touches
    }

    function handleTouchMove(event) {
      if (!yDown) {
        return;
      }

      let yUp = event.touches[0].clientY;
      let yDiff = yDown - yUp;

      if (yDiff > 0) {
        // up swipe
        fadeOutHeading();
        fadeOutScrollLabel();
        if (newsApiAppData.sitePage === 1) {
          toggleNavLinksColor();      
          newsApiAppData.sitePage++;
        }
        setTimeout(function() {
          fadeInSearchForm();
        }, 450);
      }
    }

  }, 4000);
}

function largeNavigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home-large',function() {
      if (newsApiAppData.sitePage === 2) {
        toggleNavLinksColor();
        newsApiAppData.sitePage--;
      }
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 380);
      $('.js-home-large').blur();
    });

    $('body').on('click','.js-search-large',function() { 
      if (newsApiAppData.sitePage === 1) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage++;
      }
      fadeOutHeading();
      fadeOutScrollLabel();
      setTimeout(function() {
        fadeInSearchForm();
      }, 450);
      $('.js-search-large').blur();
    });
  }, 4000);
}

function toggleNavLinksColor() {
  $('.js-large-screen-nav').find('.js-nav-bullet').toggleClass('border-page-style');
  $('.js-home-small, .js-search-small').toggleClass('font-page-style');
}

function toggleNavHomeColor() {
  $('.js-home-large').find('.js-nav-bullet').toggleClass('border-page-style');
  $('.js-home-small').toggleClass('font-page-style');
}


function smallNavigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home-small',function() {
      if (newsApiAppData.sitePage === 2) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage--;
      }
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 380);
      $('.js-home-small').blur();
      closeBurgerIcon();
      closeBurgerIconColor();
    });

    $('body').on('click','.js-search-small',function() {
      if (newsApiAppData.sitePage === 1) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage++;
      }
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
  }, 30);
}

function fadeOutSearchForm() {
  $('.js-search-form-partial').removeClass('fade-in-down-scroll');
  setTimeout(function() {
    $('.js-search-form-partial').css('display','none');
  }, 380);
}

$(startApp);