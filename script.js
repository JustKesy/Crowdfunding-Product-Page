const hamburgerMenu = document.querySelector(".hamburger-icon");
const hamburgerMenuLinks = document.querySelector(".mobile-links");

let isOpen = false;
function openLinkMenu(e) {
  isOpen = !isOpen;
  if (isOpen) {
    e.target.src = "./images/icon-close-menu.svg";
    hamburgerMenuLinks.style.visibility = "visible";
  } else {
    e.target.src = "./images/icon-hamburger.svg";
    hamburgerMenuLinks.style.visibility = "hidden";
  }
}

hamburgerMenu.addEventListener("click", openLinkMenu);
