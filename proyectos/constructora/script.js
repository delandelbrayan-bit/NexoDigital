// ================================
// MENÚ MÓVIL
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Cerrar menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const elements = document.querySelectorAll(
    ".service, .project, .step, .stat"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    observer.observe(element);

});


// ================================
// BOTONES DE PROYECTOS
// ================================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Este proyecto es demostrativo. " +
            "En una página real, aquí se mostraría " +
            "la información completa del proyecto."
        );

    });

});


// ================================
// MENSAJE EN CONSOLA
// ================================

console.log(
    "Constructora Norte — Proyecto demostrativo desarrollado por NexoDigital."
);