// src/helpers/navbarHelpers.js

export const initializeNavbarEvents = () => {
  const headerToggleBtn = document.querySelector('.header-toggle');

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
  };
};
