//====== SHARED LOGIC ======//
(function mobileMenu() {
  const menuButton = document.querySelector('.header-menu-icon');
  const menuCloseButton = document.querySelector('.close-menu-icon');
  const mobileMenu = document.getElementById('mobileMenu');

  function openMobileMenu(targetElement) {
    if (typeof targetElement === 'object') {
      targetElement.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
      });
    }
    else {
      mobileMenu.style.display = 'block';
    }
  }

  function closeMobileMenu(targetElement) {
    if (typeof targetElement === 'object') {
      targetElement.addEventListener('click', () => {
        mobileMenu.style.display = '';
      });
    }
    else {
      mobileMenu.style.display = '';
    }
  }

  openMobileMenu(menuButton);
  closeMobileMenu(menuCloseButton);
})();
