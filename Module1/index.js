// "use strict";

// let a = 7;
// a = "JavaScript";
// console.log(typeof a);
// console.log(a);
// console.log(typeof a);

// let b;
// b ="FE-1&FE-7";
// console.log(b);
// console.log(typeof b);

// var c = 10;

// c= 15;
// console.log(c);



// const isAuthenticated = true;
// console.log(isAuthenticated);
// console.log(typeof isAuthenticated);

// const isModalOpen = false;
// console.log(isModalOpen);
// console.log(typeof isModalOpen);

// const guest = null;
// console.log(null);
// console.log(typeof null);

// const message = "Hello!";
// console.log(message);
// let name = "Student";
// console.log(name);
// // console.log(`${name}, ${message}`);

// // alert(`${name}, ${message}`);

// // const isReady = confirm("Are you ready to study Javascript?");
// // console.log(isReady);

// // const enterName = prompt("Please enter your name.");
// // console.log(enterName);

// const KPI=30;
// const fact = KPI > 20 &&  KPI < 31;
// console.log(fact);

const age=30;
const trueAge= age<31 || age > 29;
console.log(trueAge);

// const trueAge2 = age <29 || age>31 || age >32 ;
// console.log(trueAge);


// console.log(!true);

const quantity=50;
console.log ((false && true) || true);
console.log (false && (true || true));

// console.log ((quantity > 39 && quantity < 49) || quantity > 48);

// console.log ((false && true) || "parrot");

// console.log ((quantity > 51 && quantity <53) || quantity > 48);

console.log ((false&&true) || NaN);

// console.log ((quantity > 39 && quantity < 49) || quantity > 51);

// let day = prompt("Enter today day please");

// if (day === String("Saturday") || day === String("Sunday")) {
//     weekday= "holiday";
// }
// else {
//     weekday = "workday";
// }
// console.log(weekday);

// let value = prompt ("Boolean value");
// let bool;

// if (value === "true" || value === "false") {
//     bool="Boolean";
// }
// else {
//     bool = "It's not a Boolean";
// }
// console.log(bool);

// let day = prompt("Enter today day please");
// if (day === String("Saturday") || day === String("Sunday")) {
//         weekday= "holiday";
// }
// else if (
//     day === "Monday" ||
//     day === "Tuesday" ||
//     day === "Wednesday" ||
//     day === "Thursday" ||
//     day === "Friday" 
//  ) {
//      weekday = "workday";
//  } else {
//      weekday = "Indalid data";
//  }
//  console.log(day);
//  console.log(weekday);


// let studentAge = prompt('Enter your age please');
// let group;

// if (studentAge >11 && studentAge < 15) {
//     group = "Junior";
// }
// else if ( studentAge > 14 && studentAge < 18) {
//     group = "Middle";
// }
// else {
//     group = "Your age is not valid for children group.";
// }
// console.log(studentAge);
// console.log(group);

// ----------------------

// let answer;
// let question = confirm("Are you student?");

// if (question === true) {
//     answer = "yes";
// }

// else {
//     answer = "no";
// }

// =====

// answer = question === true ? "yes" : "no"

// console.log(answer);
// ---------------------------


// let day = prompt("Enter today day please");
// let weekday;

// switch (day) {
//     case "Monday":
//       weekday = "the worst workday at week";
//       break;
  
//     case "Tuesday":
//       weekday = "a bit better workday";
//       break;
  
//     case "Wednesday":
//       weekday = "a workday and so it`s a small Friday)";
//       break;
  
//     case "Thursday":
//       weekday = "a strange workday";
//       break;
  
//     case "Friday":
//       weekday = "the best workday";
//       break;
  
//     case "Saturday":
//       weekday = " holiday";
//       break;
  
//     case "Sunday":
//       weekday = "also holiday";
//       break;
  
//     default:
//       alert("Invalid entered data");
//   }
//   console.log(`${day} is ${weekday}`);

// -----------------------------

// let myFirstName = "Eva";
// if (true) {
//     console.log("BLOCK scope:", myFirstName);
// }
//     console.log("GLOBAL scope:", myFirstName);

    
// if (true) {
//     let mySecondName = "Yesypenko";
//     console.log("BLOCK scope:", mySecondName);
// }
//     console.log("GLOBAL scope:", mySecondName);

// ---------------------------------

// const global = "global";

// if (true) {
//   const blockA = "block A";
//   console.log(global); // global
//   console.log(blockA); // block A
//   //   console.log(blockB); // Uncaught ReferenceError: blockB is not defined at module1.js:463
//   //   console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:464

//   if (true) {
//     const blockB = "block B";
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     // console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:471
//   }
// }

// if (true) {
//   const blockC = "block C";
//   console.log(blockC); // block C
//   console.log(global); // global
//   //   console.log(blockA); // ReferenceError: blockA is not defined
//   //   console.log(blockB); // ReferenceError: blockB is not defined
// }

// console.log(global); // global
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// -------------------------------------

// let counter = 0;

// while (counter <10) {
//     console.log("counter:", counter);
//     counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// let password= "";

// do {
//     password = prompt("Введите пароль длинее 4-х символов", "")
// }
// while ( password.length < 5);

// console.log("Bвели пароль:", password);

// FOR цикл со счетчиком

// example 1 ----------------


// const max = 100;

// for (let i = 10; i <= max; i += 5) {
//   console.log(i);
// }

// example 2 ---------------


// посчитаем сумму чисел до определенного значения


// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   console.log(i);
//   sum += i;
// }
// console.log(sum);

// example 3 ---------------


// выведем остаток от деления

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = , max % i`);
}