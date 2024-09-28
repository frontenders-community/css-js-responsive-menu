const hamburgetBtn = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgetBtn?.addEventListener("click", function() {
  hamburgetBtn.classList.toggle("active");
  navMenu?.classList.toggle("active");
});