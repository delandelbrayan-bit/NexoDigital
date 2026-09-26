/* =========================
   MENÚ MÓVIL
========================= */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================
   CERRAR MENÚ
========================= */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   ANIMACIONES
========================= */

const animatedElements = document.querySelectorAll(
    ".food-card, .gallery-item, .contact-card, .about-card"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   MENSAJE DE CONSOLA
========================= */

console.log(
    "La Terraza - Proyecto demostrativo de NexoDigital"
);