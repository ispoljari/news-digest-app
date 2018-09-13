function startApp() {
  checkIfMobileOrTablet(window.navigator.userAgent||window.navigator.vendor||window.opera);
  updateScrollDownLabel();
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

// check if the user agent is mobile or tablet
function checkIfMobileOrTablet(userAgent) {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4))) newsApiAppData.mobileOrTablet = true;
}

function updateScrollDownLabel() {
  if (newsApiAppData.mobileOrTablet) {
    $('.js-scroll-down-label').find('p').text('Swipe Down');
  }
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