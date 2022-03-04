//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNum(min, max) {
  if (max <= min) {
	  
   console.log('Ошибка'); 
  }
  if (min < 0) {
   console.log('Введите число больше либо равное 0'); 
  }
  if (max < 0) {
    console.log('Введите число больше либо равное 0'); }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum(10, 15);

//Функция для проверки максимальной длины строки.


function limitStr(str, n) {
 if (str.length > n) {
  console.log('warning') 
 }
 return str
}
 limitStr('Hello!', 10);