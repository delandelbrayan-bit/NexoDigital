/* =========================
   MENÚ MÓVIL
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================
   CERRAR MENÚ AL SELECCIONAR
========================= */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   ANIMACIÓN AL APARECER
========================= */

const elements = document.querySelectorAll(
    ".service-card, .project-card, .price-card, .about-box"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(function (element) {

    observer.observe(element);

});


console.log("NexoDigital iniciado correctamente.");