// Покраска первой карточки

const recolorFirstCardButton = document.getElementById(
  "recolor-first-card-button",
);
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#0e09ff";

recolorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек

const greenHashColor = "#00ff08";

const productCards = document.querySelectorAll(".product-card");
const recolorAllCardButton = document.getElementById("recolor-all-card-button");

recolorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = greenHashColor));
});

// Переход на страницу Google

const openGoogleButton = document.getElementById("open-google-button");
openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("вы действительно хотите перейти на сайт Google?");

  if (answer === true) {
    window.open("https://google.com");
  } else console.log("Пользователь отменил действие");
}

// Вывод текста в консоль

const title = document.getElementById("main-title");
title.addEventListener("mouseover", () => {
  console.log(title.textContent);
});

// Перекрась меня

const repaintMeButton = document.getElementById("Repaint-me-button");
repaintMeButton.addEventListener("click", () => {
  repaintMeButton.classList.toggle("btn-green");
  repaintMeButton.classList.toggle("btn-blue");
});