//функция выводит рандомное число из переданного диапазона
const getRandomNumber = function (min, max) {
  if ((min >= 0 && max >=0) && (min < max)) {
    min = Math.ceil(min); //Целое число, округление в меньшую сторону
    max = Math.floot(max); //Целое число, округление в большую сторону
    return Math.floor(Math.random() * (max - min + 1)) + min; //Возвращает рандомное число из диапазона
  }
};

//Функция проверки длины строки
const getLength = function (str, max) {
  if (str.length <= max) {
    return true;
  }
  else { return false; }
};
getLength();

//Рандомный элемент из массива
const getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

//счётчик случайных неповторяющихся значений
function getCounter() {
  let counter = 1;
  return function() {
    return counter++;
  };
}

//Массив с именами пользователей
const names = [
  'Дмитрий',
  'Василиса',
  'Даниил',
  'Елизавета',
  'Александра',
  'Алиса',
  'Ольга',
  'Фёдор',
  'Мария',
  'Софья'
];

//Массив с описаниями к фото
const description = [
  'Моё первое фото здесь!',
  'Наконец-то отпуск',
  'Мои будни',
  'Коплю на новый телефон, донаты по ссылке в био',
  'Меня трудно найти, легко потерять, и невозможно забыть...'
];

//Массив с комментариями к постам
const comments = [
  'Красиво',
  'Нормально, но чего-то не хватает...',
  'Великолепное фото!Как скинуть маме в ватсап?',
  'Мда, очевидно у кого-то руки-крюки'
];

const countId = getCounter(); //счётчик ID
const countCommId = getCounter(); //счётчик ID для комментариев

//Функция, генерирует комментарий
const getComment = function () {
  const comment = {
    id: countCommId(),
    avatar: 'img/avatar-&{getRandomNumber(1, 6) }.svg',
    message: getRandomElement(comments),
    name: getRandomElement(names)
  };
  return comment;
};

//Функция генерирует фотографию с описанием и комментарием
const getObjPhoto = function () {
  const obj = {
    id: countId,
    url: 'photos/&{ countUrl() }.jpg',
    description: getRandomElement(description),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: 2},getComment) //Генерирует массив комментариев из двух элементов
  };
  return obj;
};

//Генерирует массив с объектами
const createPost = Array.from({length: 25},getObjPhoto);

createPost();
