// 1. Как и в прошлых задания - создаем отдельный файл для homework-8 и подключаем его в HTML с атрибутом type = module (что бы работали импорты)
// 2. Создаем файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из вёрстки (имейте ввиду, UI-данные не относятся к данным продукта. Гуглите). Вам нужно описать полностью объект и продублировать его для всех карточек и после импортировать в homework-8 для дальнейшей работы с ним.
// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)

const productInfoTemplate = document.getElementById("product-info-template");
const productList = document.getElementById("product-list");

productsInfo.forEach((card) => {
  const cardClone = productInfoTemplate.content.cloneNode(true);
  cardClone.querySelector(".product-card__img").textContent = card.img;
  cardClone.querySelector(".product-card__for-skin").textContent = card.skinType;
  cardClone.querySelector(".product-card__title").textContent = card.title;
  cardClone.querySelector(".product-card__description").textContent = card.description;
  cardClone.querySelector(".product-card__composition-list").textContent = card.composition;
  cardClone.querySelector(".product-card__price").textContent = card.price;
  productList.appendChild(cardClone);
  console.log(productList);
});

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

import { productsInfo } from "./products.js";

const productTitleDescription = productsInfo.reduce((acc, product) => {
  const item = {
    [product.title]: product.description,
  };
  acc.push(item);
  return acc;
}, []);

// 5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

function getCardsCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  const num = parseInt(count);

  if (!isNaN(num) && num >= 1 && num <= 5) {
    return num;
  } else {
    alert("Ведите число от 1 до 5");
    return getCardsCount();
  }
}
