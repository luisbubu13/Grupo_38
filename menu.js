document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-list");

    // Toggle al dar click en el botón
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el click se propague al document
        navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
    });

    // Cerrar al dar click en un enlace
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
        navMenu.style.display = "none";
        });
    });

    // Cerrar al hacer click fuera del menú o del botón
    document.addEventListener("click", (e) => {
        if (
        navMenu.style.display === "flex" &&
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
        ) {
        navMenu.style.display = "none";
        }
    });
});
