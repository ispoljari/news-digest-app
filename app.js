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
  $('.js-menuToggle').click(function() {
    $(this).toggleClass('open');
  })
}

$(startApp);