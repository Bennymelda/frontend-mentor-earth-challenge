/*
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger img');
  const menu = document.querySelector('.you');
  let menuOpen = false;

  burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuOpen = !menuOpen;
    burger.src = menuOpen
      ? 'image/icon-close.svg'
      : 'image/icon-hamburger.svg';
  });

  highlightActiveLink();

  function highlightActiveLink() {
    const links = document.querySelectorAll('.you a');
    let currentPage = window.location.href.split('/').pop().split('?')[0].split('#')[0];
    if (!currentPage || currentPage === '/' || currentPage === '') {
      currentPage = 'index.html';
    }

    links.forEach(link => {
      const linkHref = link.getAttribute('href').split('/').pop();
      if (linkHref === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger img');
  const menu = document.querySelector('.you');
  const links = document.querySelectorAll('.you a');
  let menuOpen = false;

  // Burger toggle
  burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuOpen = !menuOpen;
    burger.src = menuOpen
      ? 'image/icon-close.svg'
      : 'image/icon-hamburger.svg';
  });

  // Highlight current page
  highlightActiveLink();

  function highlightActiveLink() {
    let currentPage = window.location.pathname.split('/').pop();
    if (!currentPage || currentPage === '/' || currentPage === '') {
      currentPage = 'index.html';
    }

    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Close menu on mobile when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        burger.src = 'image/icon-hamburger.svg';
        menuOpen = false;
      }
    });
  });
});
