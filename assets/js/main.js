/* ================== Show Menu ==================== */
function showMenu() {
    const toggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#nav-menu");

    if(toggle && navMenu) {
        toggle.addEventListener("click", () => {
            navMenu.classList.toggle("show-menu");
        })
    }
}

showMenu();


/* =============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.querySelector("#nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach(element => {
    element.addEventListener("click", linkAction);
});


/* =============== Scroll Sections Active Link =============== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if(scrollY >sectionTop && scrollY<= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive;)