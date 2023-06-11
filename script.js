// Tambahkan kode JavaScript berikut ke dalam file script.js

// Ambil elemen yang dibutuhkan
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const linksList = document.querySelectorAll('.links li a');

// Tambahkan event listener untuk tombol hamburger
hamburger.addEventListener('click', function() {
  // Toggle class 'show' pada elemen links
  links.classList.toggle('show');
});

// Tambahkan event listener untuk setiap link pada daftar menu
linksList.forEach(function(link) {
  link.addEventListener('click', function() {
    // Hapus class 'show' dari elemen links
    links.classList.remove('show');
  });
});
