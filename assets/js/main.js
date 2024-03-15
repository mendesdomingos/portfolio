let mobileMenu = document.getElementById('menu-closed');
let desktopMenu = document.getElementById('desktop-menu');

mobileMenu.addEventListener('click', function() {
    
    if (desktopMenu.style.display === 'none') {
        desktopMenu.style.display = 'flex';
        mobileMenu.src = './assets/images/menu_open.svg';
    } else {
        desktopMenu.style.display = 'none';
        mobileMenu.src = './assets/images/menu_closed.svg';
    }
});

window.addEventListener('resize', function() {
    let isMobile = window.innerWidth <= 768;
  
    if (isMobile) {
      desktopMenu.style.display = 'none'; // Hide desktop menu
      mobileMenu.src = './assets/images/menu_closed.svg'; // Reset mobile menu icon
    } else {
      desktopMenu.style.display = 'flex'; // Show desktop menu
      mobileMenu.src = './assets/images/menu_closed.svg'; // Reset mobile menu icon (optional)
    }
});  