//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInclusiveInteger(from, to) {
  //Гвард (нет числовых значений || два отрицательных значения)
  if (typeof from !== 'number' ||
  typeof to !== 'number' ||
  (from < 0 && to < 0)
  ) {
    return null;
  }

  //Одно отрицательное число
  if (from < 0) {
    from = 0;
  }
  if (to < 0) {
    to = 0;
  }
  //Числа равны
  if (from === to) {
    return from;
  }
  //Диапазон перевернут
  if (from > to) {
    [from, to] = [to, from]; //деструктурирующее присваивание
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);

  return Math.floor(min + Math.random() * (max - min + 1));
}
getRandomInclusiveInteger(10, 20);
//Функция для проверки максимальной длины строки.
function limitStr (str = '', maxLength) {
  return str.length <= maxLength;
}
limitStr('Hello', 10);

const objectCount = 25;

const names =	[
  'Марк',
  'Билал',
  'Елизавета',
  'Иван',
  'Таисия',
  'Владислав',
  'Александр',
  'Анастасия',
  'Михаил',
  'Виктор',
  'Виктория',
  'Матвей',
  'Вероника',
  'Ярослав',
  'Фёдор',
  'Дарина',
  'Тимофей',
  'Вячеслав',
  'Сергей',
  'Сафия',
  'Роман',
  'Филипп',
  'Павел',
  'Кирилл',
  'Дмитрий'
];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const shuffleArray = [];

const unshuffledIds = [];

const shuffledIds = shuffleArray(unshuffledIds);

for (let i=1 ; i <= objectCount ; i++) {
  unshuffledIds.push(i);
}

const getRandomArrayElement = (elements) => elements[getRandomInclusiveInteger(0, elements.length - 1)];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInclusiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(comments),
  name: getRandomArrayElement(names)
});

const createPost = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(comments),
  likes: getRandomInclusiveInteger(15, 200),
  comments: Array.from({length: objectCount}, (element, index) => createComment(shuffledIds[index]))
});

const similarPosts = Array.from({length: objectCount}, (element, index) => createPost(index+1));
