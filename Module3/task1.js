'use strict'


//--------------------1

// const user = {
//     name: 'Semen',
//     age: 15,
//     hobby: 'HTML',
//     premium: true,
//   };

// user.mood = "happy";
// user.hobby = "coding";
// user.premium = false;


// const toShowUpdatedUser = function(obj) { 
//const arrUser = Object.keys(obj);

//console.log (arrUser);

//     for(let elArrUser of arrUser){
//console.log(elArrUser);
//console.log(`${elArrUser}:${obj[elArrUser]}`);
//     }
// }

//--------------------2
//
// const countProps = function(obj) {
// const arrCountProps = Object.keys(obj).length;
// console.log(arrCountProps);
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3

//--------------------3

// const countTotalSalary = function(employees){
//   let arrCountTotalSalary = Object.values(employees);
//   let totalCount = 0;
//   for(let count of arrCountTotalSalary){
//     totalCount += count;
//   }
//   return totalCount;
// }
// console.log(countTotalSalary({})); // 0

 


// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }) ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }) ); // 400


//--------------------4


// const products = [
//     {name: 'Radar', price: 1300, quantity:4},
//     {name: 'Scaner', price: 2700, quantity:3},
//     {name: 'Droid', price: 400, quantity:7},
//     {name: 'Capture', price: 1200, quantity:2},
//   ];

//   const calculateTotalPrice = function (allProdcuts, productName) {
//   let total;
//   for(let i = 0; i < allProdcuts.length; i++ ){
//   let arrObject = Object.values(allProdcuts[i]);
//   if(arrObject[0] == productName){
//   total = arrObject[1] * arrObject[2]; 
//          }
//   console.log(total);
//    };
//console.log(calculateTotalPrice(products, "Radar")); // 5200
//console.log(calculateTotalPrice(products, 'Droid')); // 2800

