const playBtn = document.getElementById("play-btn");
const backBtn = document.getElementById("back-btn");
const cardContainer = document.getElementById("card-container");

playBtn.addEventListener("click", flipCard);
backBtn.addEventListener("click", flipCard);

function flipCard() {
  cardContainer.classList.toggle("[transform:rotateY(180deg)]");
}
