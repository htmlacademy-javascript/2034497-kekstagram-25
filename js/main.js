//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNum(min, max) {
  if (max <= min) {
	  
   return (console.log('Ошибка')); 
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
 