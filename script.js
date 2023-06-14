const hamburgerMenu = document.querySelector(".hamburger-icon");
const hamburgerMenuLinks = document.querySelector(".mobile-links");
const BackUpBtn = document.querySelector(".title-btn");
const modalWindow = document.querySelector(".modal-window");
const closeModalBtn = document.querySelector(".close-btn");
const radioBtns = document.querySelectorAll("input[type=radio]");
const setPledgeWindows = Array.from(document.querySelectorAll(".set-pledge"));
const pledges = Array.from(document.querySelectorAll(".pledge"));
const modal = document.querySelector(".modal");
const modalMsg = document.querySelector(".modal-msg");
const continueBtns = document.querySelectorAll(".continue");
const modalMsgBtn = document.querySelector(".modal-msg-btn");
const bookMarkPara = document.querySelector(".btn-par");
const bookMarkBtn = document.querySelector(".title-bookmark");
const bookMarkIcon = document.querySelector(".bookmark-icon");

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
    modal.setAttribute("style", "display:block");
  }
}

hamburgerMenu.addEventListener("click", openLinkMenu);

BackUpBtn.addEventListener("click", openClose);

closeModalBtn.addEventListener("click", openClose);

function reset() {
  setPledgeWindows.forEach((window) =>
    window.setAttribute("style", "display:none")
  );
  pledges.forEach((pledge) =>
    pledge.setAttribute("style", "border: 1px solid #cbcbcb")
  );
}

function ifChecked(e) {
  reset();
  if (e.target.checked == true && e.target.dataset.key == "0") {
    let pledge = pledges.find((y) => y.dataset.index == e.target.dataset.key);
    pledge.setAttribute("style", "border:1px solid #449e83");
  } else if (e.target.checked == true) {
    let window = setPledgeWindows.find(
      (x) => x.dataset.match == e.target.dataset.key
    );
    let pledge = pledges.find((y) => y.dataset.index == e.target.dataset.key);
    window.setAttribute("style", "display:flex");
    pledge.setAttribute("style", "border:1px solid #449e83");
  }
}

radioBtns.forEach((btn) => btn.addEventListener("click", ifChecked));

function submitPledge() {
  modal.setAttribute("style", "display:none");
  modalMsg.setAttribute("style", "display:flex");
}

continueBtns.forEach((btn) => btn.addEventListener("click", submitPledge));

function closeModalMsg() {
  reset();
  // modalWindow.setAttribute("style", "display:none");
  modalMsg.setAttribute("style", "display:none");
  openClose();
  radioBtns.forEach((btn) => (btn.checked = false));
}

modalMsgBtn.addEventListener("click", closeModalMsg);

function bookMark() {
  if (bookMarkPara.innerHTML == "Bookmark") {
    bookMarkPara.innerHTML = "Bookmarked";
    bookMarkPara.setAttribute("style", "color: #447d73");
    bookMarkIcon.src = "./images/download.svg";
    bookMarkIcon.setAttribute("style", "filter: none");
  } else {
    bookMarkPara.innerHTML = "Bookmark";
    bookMarkPara.setAttribute("style", "color:white");
    bookMarkIcon.src = "./images/icon-bookmark.svg";
    bookMarkIcon.setAttribute("style", "filter: contrast(0.5)");
  }
}

bookMarkBtn.addEventListener("click", bookMark);
