const playBtn = document.getElementById("play-btn");
const backBtn = document.getElementById("back-btn");
const cardContainer = document.getElementById("card-container");
const header = document.getElementById("header");

playBtn.addEventListener("click", flipCard);
backBtn.addEventListener("click", flipCard);

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
