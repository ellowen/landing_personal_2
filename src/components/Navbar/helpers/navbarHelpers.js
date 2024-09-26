// src/helpers/navbarHelpers.js

export const initializeNavbarEvents = () => {
  const headerToggleBtn = document.querySelector('.header-toggle');
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }

  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
  }

  // Hide mobile nav on same-page/hash links
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });
  });

  // Toggle mobile nav dropdowns
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Navmenu Scrollspy
   */
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

  // Add scrollspy functionality on page load and scroll
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  return () => {
    // Cleanup event listeners
    if (headerToggleBtn) {
      headerToggleBtn.removeEventListener('click', headerToggle);
    }
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.removeEventListener('click', headerToggle);
    });
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.removeEventListener('click', function () {});
    });

    // Remove scrollspy event listeners
    window.removeEventListener('load', navmenuScrollspy);
    document.removeEventListener('scroll', navmenuScrollspy);
  };
};
