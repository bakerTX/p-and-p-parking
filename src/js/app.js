var $ = require('jquery');

// Hover hero links -> underline nav links
let heroLinks = document.querySelectorAll(".js-hero-link");
for (let i = 0; i < heroLinks.length; i++) {
  let heroLink = heroLinks[i];
  let correspondingNavLink = document.querySelector('[data-link=' + heroLink.dataset.for + ']');
  heroLink.addEventListener('mouseenter', function() {
    correspondingNavLink.classList.add('u--underline');
  })
  heroLink.addEventListener('mouseleave', function() {
    correspondingNavLink.classList.remove('u--underline');
  })
}

// Change the position of the hero-nav links when you scroll past them
var target = $(".hero-nav");
var headerNav = $('.global-header__nav');
var targetPosition = target.offset().top;
var timeout = null;

$(window).scroll(function() {
  if(!timeout) {
    timeout = setTimeout(function() {
      clearTimeout(timeout);
      timeout = null;
      if ($(window).scrollTop() >= targetPosition - 50) {
        headerNav.addClass('with--extra-links')
      }
      if ($(window).scrollTop() < targetPosition) {
        headerNav.removeClass('with--extra-links');
      }
    }, 250);
  }
});
