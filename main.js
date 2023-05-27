// main of javascript

import Nav from "./Module/JavaScript/nav-system.js";
import candaan from "./Module/JavaScript/ApiC.js";
import setTime from "./Module/JavaScript/time.js";

const nav = new Nav("btn-navon","nav-selct","nav-selection-on");
nav.click;

setInterval(setTime, 100);

window.addEventListener("scroll", function() {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("nav-onScroll", window.scrollY > 0)
})


candaan("joke")
document.getElementById('joke').addEventListener('click', () => {
      let loadView = document.querySelector(".loading")
      loadView.classList.toggle("loadon")
      setTimeout(function() {
        loadView.classList.toggle("loadon")
      }, 1000);
    candaan('joke')
})

