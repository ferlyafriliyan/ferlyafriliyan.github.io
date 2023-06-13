function toggleMenu() {
  const links = document.querySelector('.links');
  links.classList.toggle('show');
}

const linksList = document.querySelectorAll('.links li a');

linksList.forEach(function (link) {
  link.addEventListener('click', function () {
    const links = document.querySelector('.links');
    links.classList.remove('show');
  });
});
