import { socialComments } from "./comments.js";

// 3. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arrayNumbers.filter((number) => number >= 5);

console.log(result);

// 4. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const furniture = ["Table", "Chair", "Sofa", "Bed", "Wardrobe"];

const hasSofa = furniture.includes("Sofa");

console.log(hasSofa);

// 5. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const kitchenTools = ["Blender", "Toaster", "Mixer", "Kettle", "Grill"];

function flipArray(arr) {
  return arr.reverse();
}

flipArray(numbers);
flipArray(kitchenTools);

console.log(numbers);
console.log(kitchenTools);

// 6.  Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filteredComments = socialComments.filter((comment) => {
  return comment.email.includes(".com");
});

console.log(filteredComments);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = socialComments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});

console.log(updatedComments);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const simplifiedComments = socialComments.map((item) => {
  return {
    id: item.id,
    name: item.name,
  };
});

console.log(simplifiedComments);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = socialComments.map((item) => {
  return {
    ...item,
    isInvalid: item.body.length > 180,
  };
});

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsByReduce = socialComments.reduce((accumulator, item) => {
  accumulator.push(item.email);
  return accumulator;
}, []);

console.log(emailsByReduce);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsToString = emailsByReduce.toString();

console.log(emailsToString);

const byjoin = emailsByReduce.join(", ");

console.log(byjoin);
