const hamburgerClick = () => {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('active-menu');
}



document.querySelector('.hamburger').addEventListener('click', hamburgerClick)