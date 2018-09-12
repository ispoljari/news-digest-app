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
  },4000);
}

function fadeOutHeading() {
  $('.js-headings').addClass('fade-down-scroll');
}

function fadeInHeading() {
  $('.js-headings').removeClass('fade-down-scroll');
}

$(startApp);