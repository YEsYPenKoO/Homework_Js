// const arr=[];
// console.log(arr);
// const students = ['Den', 'Nick', 'Dave'];

// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// //замена
// students[0] = 'Roy';
// console.log(students);
// console.log(students[0]);

// // добавление
// students[4] = 'Mary'; 
// console.log(students);
// console.log(students[0]);

// //длинна массива
// // текущее количество элементов
// console.log(students.length);

// //добавить елемент/ы
// students.length = 6;
// console.log(students.length)
// console.log(students);

// //убрать елемент/ы
// students.length = 4;
// console.log(students);


// //интеграция по массиву

// //перебор массива
// for (let i=0; i < students.length; i+= 1){
//     console.log('students item: ', students[i]);
// }

// //заполнение данными
// for (let i= 0; i< 3; i+=1){
//     students.push(`students-${i}`);
// }
// console.log('students list:', students); 


// for(const student of students) {
//     console.log(students);
// }


// const name = "Eva";
// console.log(name);

// for (const character of name) {
//     console.log(character)
// }

// const house = ['flat-1','flat-2','flat-3','flat-4'];
// for (const aFlat of house){
//     console.log(aFlat);
// }

// const week = ['mn', 'tu', 'wed', 'thu', 'fr'];
// for (const aDay of week){
//     console.log(aDay);
// }


// найти совпадение или не совпадение и вывести сообщение об этом
let studentName;
console.log("имя студента", studentName);
studentName = prompt("Enter your name please");
const studentsNew = [
  "Roy",
  "Nick",
  "Dave",
  "Helen",
  "Mary",
  "Sarah",
  "Charly",
  "Bob"
];
const studentsNotNew = [
  "Roy",
  "Nick",
  "Dave",
  "Dick",
  "Mary",
  "Olga",
  "Charly",
  "Bob"
];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];
console.log("список студентов", studentsNew);
let message;

for (const student of studentsNew) {
  if (student === studentName) {
    message = "A student with this name already is in the database";
    break;
  }
  message = "Welcome in our database of unique names!";
}
console.log(`${studentName}, ${message}`);


const carsList = [
  "BMW",
  "Toyota",
  "Mersedes",
  "Porshe",
  "Audi",
  "Lexus",
  "Honda",
  "Mazda",
  "Land Rover",
  "Nissan",
  "Subaru"
];










// многомерные массивы
const matrix = [
  [1, 2, 3], // [0]
  [11, 22, 33], // [1]
  [111, 222, 333] // [2]
];

console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[0][2]); // 3

console.log(matrix[1][0]); // 11
console.log(matrix[1][1]); // 22
console.log(matrix[1][2]); // 33

console.log(matrix[2][0]); // 111
console.log(matrix[2][1]); // 222
console.log(matrix[2][2]); // 333

// // вложенные циклы для перебора вложенных массивов
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log("Вложенный массив ", matrix[i]);
  for (let j = 0; j < matrix.length; j += 1) {
    console.log("Элемент вложенного массива", matrix[i][j]);
    total += matrix[i][j];
  }
}
console.log(total);



// Array


// Итерация по массиву присходит через for и for..of;