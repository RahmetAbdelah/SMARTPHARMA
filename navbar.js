document.addEventListener("DOMContentLoaded", () => {

  fetch("../components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const toggle = document.getElementById("menu-toggle");
      const links = document.getElementById("nav-links");

      toggle.addEventListener("click", () => {
        links.classList.toggle("active");
      });
    });

  fetch("../components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

});
