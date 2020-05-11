'use strict'

// --------------------------------------1

// let authors = ['William Shakespeare','Guy de Maupassant', 'Dante Alighieri', 'Mikhail Bulgakov', 'Albert Camus', 'Erich Maria Remarque'];

// authors.push('Honore de Balzac', 'Miguel de Cervantes', 'Anton Chekhov');

// authors.unshift(' Charles Dickens', 'Edgar Allan Poe','Gabriel Garcia Marquez');

// console.log(authors);//в массиве осталось 12 элементов

// --------------------------------------2

// let scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

// scores.shift();
// scores.shift(); 
// удаляю первые два елемента

// scores.pop();
// scores.pop();
// scores.pop();
// удаляю последние три елемента


// console.log(scores);


// --------------------------------------3

// let results = [ 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
// let removeFromStart = results.splice(0, 2);
// let removeFromEnd = results.splice(8,3);

// console.log(results);

// console.log(removeFromStart);

// console.log(removeFromEnd);

// --------------------------------------4

// let partOfResults = [];
// partOfResults = results.slice(2,7);

// console.log(partOfResults);

// --------------------------------------5

// let doubleResults = [];
// doubleResults = results.slice(0);

// console.log(doubleResults);

// --------------------------------------6

// let evenResults = [];

// let oddResults = [];

// for(let i = 0; i< doubleResults.length; i+=1){
//         if(doubleResults[i] % 2 == 0){
//             evenResults.unshift(doubleResults[i]);
//         }
//         else{
//             oddResults.unshift(doubleResults[i]);
//         }
//         }

//     console.log(evenResults);

//     console.log(oddResults);

// --------------------------------------7

// let includesOne = [];
// let AllResults = evenResults.concat(oddResults);

// for(let k = 0; k< AllResults.length; k += 1){
//     let item = AllResults[k]+'';
//     if(item.includes('1')){
//         includesOne.push(+item)
//     }
//     }

// console.log(includesOne);
