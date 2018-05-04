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
