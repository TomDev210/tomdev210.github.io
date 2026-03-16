/* SIDEBAR TOGGLE */

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}


/* CLOSE SIDEBAR WHEN NAV LINK IS CLICKED */

const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("sidebar").classList.remove("active");
    });
});


/* CLOSE SIDEBAR WHEN CLICKING OUTSIDE */

document.addEventListener("click", function (event) {

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.remove("active");
    }

});


/* TYPING ANIMATION */

const text = "AI & Data Analytics Developer";
let index = 0;

function typeEffect() {

    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }

}

typeEffect();



/* SCROLL ANIMATION */

function revealSections() {

    const sections = document.querySelectorAll("section");

    sections.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }

    });

}

window.addEventListener("load", revealSections);

window.addEventListener("scroll", revealSections);

