document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.toggle-menu').classList.toggle('show');
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.toggle-menu').classList.remove('show');
});
