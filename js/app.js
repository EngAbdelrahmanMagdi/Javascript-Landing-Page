const title = document.getElementById("titleID");
const nav = document.getElementById("listID");
const elementsOfSection = document.querySelectorAll("section");
const button = document.getElementById("buttonID");
let listOfNavbar = "";
document.addEventListener('DOMContentLoaded', scroll, false);

title.textContent = `Landing Page Project`;

//Navbar Functions

function createNavbar() {
  elementsOfSection.forEach((section) => {
    listOfNavbar += `<li> <a class="menu__link" href="#${section.id}" id="navbarLink">
          ${section.dataset.nav}</a></li>`;
  });
  nav.innerHTML = listOfNavbar;
}
createNavbar();

const navbar = document.getElementById("navbarID").querySelectorAll("li");

navbar.forEach((element) => {
  element.addEventListener("click", function (event) {
    navbar.forEach((element) => {
      element.classList.remove("clickOnNavbarClass");
    });
    element.classList.add("clickOnNavbarClass");
  });
});
//Scroll Functions


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = "block";
  } 
}
window.onscroll = function () {
  scrollFunction();
};
function goUp() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
button.addEventListener("click", goUp);



//Activate Section Functions

function removeActivatedClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("activatedClass");
}
function activateClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.add("activatedClass");
}

function activateSection() {
  elementsOfSection.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 100 && elementOffset.bottom >= 100) {
      activateClass(section);
    } else {
      removeActivatedClass(section);
    }
  });
}
document.addEventListener("scroll", activateSection);


