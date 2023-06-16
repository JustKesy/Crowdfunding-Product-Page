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
const continueBtns = Array.from(document.querySelectorAll(".continue"));
const modalMsgBtn = document.querySelector(".modal-msg-btn");
const bookMarkPara = document.querySelector(".btn-par");
const bookMarkBtn = document.querySelector(".title-bookmark");
const bookMarkIcon = document.querySelector(".bookmark-icon");
const moneyCount = document.querySelector(".money-count");
const totalBackers = document.querySelector(".number-of-backers");
const newPledgeInputs = Array.from(
  document.querySelectorAll("input[type=tel]")
);
const statusBar = document.querySelector(".progress-bar");
let curentMoneCount = "50000";
let curentBakers = "4805";
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

function updateCurentMoneyCount(e) {
  let x = newPledgeInputs.find(
    (input) => e.target.dataset.index == input.dataset.key
  );
  curentMoneCount = (+curentMoneCount + +x.value).toString();
}
function updateMoneyCount(x) {
  if (curentMoneCount.length <= 3) {
    moneyCount.innerHTML = "$" + curentMoneCount;
  } else if (curentMoneCount.length == 4) {
    x = curentMoneCount.slice(0, 1) + "," + curentMoneCount.slice(1);
    moneyCount.innerHTML = "$" + x;
  } else if (curentMoneCount.length == 5) {
    x = curentMoneCount.slice(0, 2) + "," + curentMoneCount.slice(2);
    moneyCount.innerHTML = "$" + x;
  } else {
    moneyCount.innerHTML = "$" + "100,000";
  }
}
function updateStatusBar(x) {
  if (+curentMoneCount >= 100000) {
    statusBar.setAttribute("style", "width:100%");
  } else {
    x = Math.ceil(+curentMoneCount / 1000);
    statusBar.setAttribute("style", `width:${x}%`);
  }
}
function updateTotalBackers(x) {
  if (curentBakers.length <= 3) {
    totalBackers.innerHTML = curentBakers;
    curentBakers = (+curentBakers + 1).toString();
  } else if (curentBakers.length == 4) {
    totalBackers.innerHTML =
      curentBakers.slice(0, 1) + "," + curentBakers.slice(1);
    curentBakers = (+curentBakers + 1).toString();
  } else if (curentBakers.length == 5) {
    totalBackers.innerHTML =
      curentBakers.slice(0, 2) + "," + curentBakers.slice(2);
    curentBakers = (+curentBakers + 1).toString();
  } else {
    totalBackers.innerHTML =
      curentBakers.slice(0, 3) + "," + curentBakers.slice(3);
    curentBakers = (+curentBakers + 1).toString();
  }
}
function submitPledge(e) {
  updateCurentMoneyCount(e);
  updateMoneyCount();
  updateStatusBar();
  updateTotalBackers();
  if (+curentMoneCount > 100000) {
    BackUpBtn.removeEventListener("click", openClose);
  }
  modal.setAttribute("style", "display:none");
  modalMsg.setAttribute("style", "display:flex");
}

continueBtns.forEach((btn) => btn.addEventListener("click", submitPledge));

function closeModalMsg() {
  reset();
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
function start() {
  updateMoneyCount();
  updateStatusBar();
  updateTotalBackers();
}

bookMarkBtn.addEventListener("click", bookMark);
start();
