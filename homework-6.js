// 3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.

const user = {
  name: "Магомед",
  lastName: "Магомедов",
  age: 27,
  cointry: "Россия",
  city: "Кизляр",
  Email: "Magomed_0901@bk.ru",
  companyWork: "Полиэтиленовый завод",
  positionJobTitle: "ветеран пакетчик",
  relationshiStatus: "женат",
};

// 4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const carData = {
  make: "LaDa ",
  model: "Vesta",
  year: 2022,
  color: "White",
  mileage: 15000,
  licensePlate: "ABC-123",
  transmission: "Автомат",
};

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

function addMaxSpeed(car) {
  if (!car.maxSpeed) {
    car.maxSpeed = "250км";
  }
  addMaxSpeed(car);

  console.log(car);
}

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showObjectProperty(obj, property) {
  console.log(obj[property]);
}

 showObjectProperty(car, "model");

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["помидор", "арбуз", "хлеб", "сыр", "соль"];

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). После, используя известный нам метод массив, добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

let books = [
  {
    title: "Ведьмак",
    author: "Анджей Сапковский",
    releaseYear: 1986,
    coverColor: "Black",
    genre: "Fantasy",
  },
  {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    releaseYear: 1887,
    coverColor: "Brown",
    genre: "Detective",
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    releaseYear: 1943,
    coverColor: "Blue",
    genre: "Fable",
  },
  {
    title: "Хоббит",
    author: "Дж. Р. Р. Толкин",
    releaseYear: 1937,
    coverColor: "Green",
    genre: "Fantasy",
  },
  {
    title: "Дюна",
    author: "Фрэнк Герберт",
    releaseYear: 1965,
    coverColor: "Orange",
    genre: "Sci-Fi",
  },
];

books.push({
  title: "Interstellar",
  director: "Christopher Nolan",
  releaseYear: 2014,
  genre: "Adventure",
  rating: 8.7,
});
console.log(books);

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один

const marvelMovies = [
  {
    title: "Iron Man",
    director: "Jon Favreau",
    releaseYear: 2008,
    genre: "Action",
    rating: 7.9,
  },
  {
    title: "The Avengers",
    director: "Joss Whedon",
    releaseYear: 2012,
    genre: "Sci-Fi",
    rating: 8.0,
  },
];
books = [...books, ...marvelMovies];
console.log(books);

// 10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).

const getMarkedRarityBooks = (booksArray) => {
  return booksArray.map((book) => ({
    ...book,
    isRare: book.year > 2000,
  }));
};
const updatedPotterUniverse = getMarkedRarityBooks(potterUniverse);
console.log(updatedPotterUniverse);
