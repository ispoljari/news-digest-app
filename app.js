function startApp() {
  fadeInHamburgerIcon();
  // setFocusOnSelect();
  toggleHamburgerIconListen();
}

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

$(startApp);