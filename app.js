function startApp() {
  fadeInHamburgerIcon();
  // setFocusOnSelect();
  toggleHamburgerIconListen();
  detectSrollDown();
}

// page load animations

function fadeInHamburgerIcon() {
  setTimeout(function() {
    $('.js-small-screen-nav').fadeIn('slow');
  },3500);
}

function setFocusOnSelect() {
  $('.js-small-screen-nav').focusin(function() {
    $('.js-menuToggle').addClass('focused');
  });

  $('.js-small-screen-nav').focusout(function() {
    $('.js-menuToggle').removeClass('focused');
  });
}

function toggleHamburgerIconListen() {
  $('body').on('click', '.js-menuToggle', function() {
    animateBurgerIcon();
    changeBurgerIconColor();
    slideDownTheMenuStrip();
  });
}

function animateBurgerIcon() {
  $('.js-menuToggle').toggleClass('open');
}

function changeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').toggleClass('defaultBurgerColor').toggleClass('changeBurgerColor');
}

function slideDownTheMenuStrip() {
  $('.js-menu').toggleClass('slideMenuDown');
}

// page transition triger and animations

function detectSrollDown() {
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
    })
  }, 4000);
}

function fadeOutHeading() {
  $('.js-headings').addClass('eject-up-scroll fade-up-scroll');

  setTimeout(function() {
    $('.js-headings').css('top','+1000px');

    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
    $('.js-headings').css('display','none');
  }, 400);
}

function fadeInHeading() {
  $('.js-headings').css({'display':'block','top':''}).removeClass('eject-up-scroll');
  $('.js-h1').css('opacity','1');
  $('.js-h2').css('opacity','1');

  setTimeout(function() {
    $('.js-headings').removeClass('fade-up-scroll');
  }, 400);
}

$(startApp);