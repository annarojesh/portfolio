// ===============================
// HAMBURGER MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
