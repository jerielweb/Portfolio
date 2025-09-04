// Resalta la pestaña activa según la sección visible
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .about');
  const navLinks = document.querySelectorAll('nav .navigation a');

  function activateNav() {
    let index = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= 80) {
        index = i;
      }
    }
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }

  window.addEventListener('scroll', activateNav);
  activateNav();
});
