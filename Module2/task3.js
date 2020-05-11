'use strict'

//-----------------------------1

//FUNCTION EXPRESSIONS

// let toPassTests = function() {
//     alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');
// }

//ARROW FUNCTION

// let toPassTests = () => alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');
// toPassTests();

//-----------------------------2

//FUNCTION EXPRESSIONS

// let age = prompt('Enter your age');

// let checkAge = function(){
//     if(age>= 18){
//         alert('Here you are! You are got access!');
//     } 
//     else{
//         alert('Sorry, you can't to get access');
//     }
//     }

//ARROW FUNCTION

// let checkAge = () => (age >= 18) ? alert('Here you are! You are got access!') : alert('Sorry, you can't to get access');

// checkAge();

//-----------------------------3

//FUNCTION EXPRESS

// let toGetCost = function(message, pricePerWord) {
//     let countWords = message.split(" ").length;
//        console.log(pricePerWord = countWords * +pricePerWord);
// };
//ARROW FUNCTION 
// let toGetCost = (message, pricePerWord) => (pricePerWord = message.split(" ").length* pricePerWord);

// console.log(toGetCost("To be, or not to be, that is the question", 10)); //100

// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); //160

// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); //280

// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); //180

//-----------------------------4

// let logItems = function(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`${i+1} - ${array[i]}`);
//     }
// }

// logItems([
//     "Wolverine",
//     "Thor",
//     "Iron Man",
//     "Deadpool",
//     "Nick Fury",
//     "Colossus"
//   ]);

// logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

//-----------------------------5

//FUNCTION EXPRESS

// let checkTheWord = function(message) {
//   let words = message.split(' ');
//   if (words.includes('lose') || words.includes('not')) {
//     console.log('true');
//   }
//   }

//ARROW FUNCTION
// let checkTheWord = (message) => (message.split(' ').includes('lose') || message.split(' ').includes('not')) ?  true :  false;

  
// console.log(checkTheWord('Than fly to others that we know not of?')); //true

// console.log(checkTheWord('Thus conscience does make cowards of us all')); //false

// console.log(checkTheWord('And enterprises of great pitch and moment')); // alse

// console.log(checkTheWord('And lose the name of action')); //true

//-----------------------------6

// let totalSum = 0;
// let countTestsScore = function(){
//   for(let argument of arguments)
//     totalSum = totalSum + argument;
//     console.log(totalSum)
//  }
// countTestsScore(16, 22, 23); //61

// countTestsScore(15, 20, 22, 20); //138

// countTestsScore(14, 19, 21, 20, 23); //235

//-----------------------------7

//ARROW FUNCTION

// let  myNewArrowFunction = (...rest) => console.log(rest);
  
// myNewArrowFunction(1, 2, 3); [1, 2, 3]
// myNewArrowFunction(100, 200, 300, 400, 500); [100, 200, 300, 400, 500]
// myNewArrowFunction('Js', 'Python', 'Java', 'PHP', 'C++');// ['Js', 'Python', 'Java', 'PHP', 'C++']
