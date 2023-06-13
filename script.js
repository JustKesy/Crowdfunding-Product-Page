const hamburgerMenu = document.querySelector(".hamburger-icon");
const hamburgerMenuLinks = document.querySelector(".mobile-links");
const BackUpBtn = document.querySelector(".title-btn");
const modalWindow = document.querySelector(".modal-window");
const closeModalBtn = document.querySelector(".close-btn");
const radioBtns = document.querySelectorAll("input[type=radio]");
const setPledgeWindows = Array.from(document.querySelectorAll(".set-pledge"));

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

function openClose() {
  if (modalWindow.classList[1] == "hidden") {
    modalWindow.classList.remove("hidden");
  } else {
    modalWindow.classList.add("hidden");
  }
}

hamburgerMenu.addEventListener("click", openLinkMenu);

BackUpBtn.addEventListener("click", openClose);

closeModalBtn.addEventListener("click", openClose);

function ifChecked(e) {
  setPledgeWindows.forEach((window) =>
    window.setAttribute("style", "display:none")
  );
  if (e.target.checked == true) {
    let window = setPledgeWindows.find(
      (x) => x.dataset.match == e.target.dataset.key
    );
    window.setAttribute("style", "display:flex");
  }
}
radioBtns.forEach((btn) => btn.addEventListener("click", ifChecked));
