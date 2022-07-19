

/*==================== SHOW SCROLL TOP ====================*/

function scrollTop() {
  const arrow = document.getElementById("arrow");
  if (this.scrollY >= 200) {
    arrow.classList.remove("d-none");
  } else {
    arrow.classList.add("d-none");
  }
}

window.addEventListener("scroll", scrollTop);

/*==================== HEADER SHADOW-BOX====================*/
function shadowHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) {
    header.classList.add("box-shadow");
  } else {
    header.classList.remove("box-shadow");
  }
}
window.addEventListener("scroll", shadowHeader);

/*==================== Toogle Nav ====================*/
const navToogle = document.getElementById("nav-toggle");

function showMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("showMenu");
}

navToogle.addEventListener("click", showMenu);

/*==================== Toogle Nav AllLink ====================*/
const navLink = document.querySelectorAll(".nav__link");

function navLinkCloseMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("showMenu");
}

navLink.forEach((item) => item.addEventListener("click", navLinkCloseMenu));

/*==================== Show experience ====================*/

const btnExperience = document.querySelectorAll(".experience__btn");
const divExperience = document.querySelectorAll(".experience__experience");

btnExperience.forEach((item) =>
  item.addEventListener("click", (e) => {
    btnExperience.forEach((item) => item.classList.remove("active"));
    divExperience.forEach((item) => item.classList.add("d-none"));

    if (e.target.dataset.id === "base") {
      e.target.classList.add("active");
      document.getElementById("experience-1").classList.remove("d-none");
    }
    if (e.target.dataset.id === "framework") {
      e.target.classList.add("active");
      document.getElementById("experience-2").classList.remove("d-none");
    }
    if (e.target.dataset.id === "library") {
      e.target.classList.add("active");
      document.getElementById("experience-3").classList.remove("d-none");
    }
    if (e.target.dataset.id === "platform") {
      e.target.classList.add("active");
      document.getElementById("experience-4").classList.remove("d-none");
    }
  })
);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SCROLL Reveal Animation ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.hero,
  .about__data, .about__img,
  .experience__data, .experience__buttons,
  .contact__data, .contact__btn,
  .footer`,
  {
    interval: 200,
  }
);
