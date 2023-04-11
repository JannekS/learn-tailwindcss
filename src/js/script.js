const playBtn = document.getElementById("play-btn");
const backBtn = document.getElementById("back-btn");
const statsCodeBtn = document.getElementById("stats-code-btn");
const codeBtnLabel = document.getElementById("code-btn-label");
const codeBtnImg = document.getElementById("code-btn-img");

const cardContainer = document.getElementById("card-container");
const header = document.getElementById("header");

const codeInfoBox = document.getElementById("code-info");
const codeExampleBox = document.getElementById("code-example");

playBtn.addEventListener("click", flipCard);
backBtn.addEventListener("click", flipCard);

statsCodeBtn.addEventListener("click", toggleInfoCode);

window.onscroll = function () {
  if (window.scrollY > 40) {
    if (!header.classList.contains("header-transparent")) {
      header.classList.remove("header-full");
      header.classList.add("header-transparent");
    }
  } else {
    header.classList.remove("header-transparent");
    header.classList.add("header-full");
  }
};

function flipCard() {
  cardContainer.classList.toggle("[transform:rotateY(180deg)]");
}

function toggleInfoCode() {
  if (!codeExampleBox.classList.contains("hidden")) {
    codeBtnImg.src = "/icons/code-solid.svg";
    codeBtnLabel.innerHTML = "Show Code";
  } else {
    codeBtnImg.src = "/icons/file-code-regular.svg";
    codeBtnLabel.innerHTML = "Show Stats";
  }
  codeInfoBox.classList.toggle("hidden");
  codeExampleBox.classList.toggle("hidden");
}
