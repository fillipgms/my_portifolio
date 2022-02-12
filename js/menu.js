const menu = document.getElementById("mobile-menu")

window.addEventListener("scroll", () => {
  let nav = document.getElementById("nav")
  nav.classList.toggle("active", window.scrollY >10)
})

menu.addEventListener("click", () => {
  menu.classList.toggle("active")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});