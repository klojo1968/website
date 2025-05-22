document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.nav-items');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navItems.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      menuToggle.classList.remove('active');
      navItems.classList.remove('active');
    }
  });

  // Handle dropdown on mobile
  if (window.matchMedia('(max-width: 768px)').matches) {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  }
});