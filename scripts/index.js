const sideMenu = document.querySelector('.side-menu');
const menuToggle = document.querySelector('#menu-toggle');


menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
});