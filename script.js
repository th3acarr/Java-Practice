document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  setTimeout(() => {
    navbar.classList.add('show');
  }, 100); // slight delay for smoother effect

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");

  title.style.opacity = 1;
  title.style.transform = "scale(1)";
  title.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  function animateTitle() {

    title.style.opacity = 0.5;
    title.style.transform = "scale(0.9)";


    setTimeout(() => {
      title.style.opacity = 1;
      title.style.transform = "scale(1)";
    }, 500); // Match the transition duration
  }

  setInterval(animateTitle, 3000);
});
