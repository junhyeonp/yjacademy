document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.toggle-menu').classList.toggle('show');
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.toggle-menu').classList.remove('show');
});

const mainMenuTitles = document.querySelectorAll('.main-menu-title');
const subMenues = document.querySelectorAll('.sub-menu');

for (let i = 0; i < mainMenuTitles.length; i++) {
  mainMenuTitles[i].addEventListener('click', () => {
    subMenues[i].classList.toggle('show');
  });
}
