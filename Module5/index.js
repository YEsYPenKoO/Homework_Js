'use strict'

//процедурный код
// const test1 = 16;
// const test2 = 22;
// const test3 = 23;

// const score = (test1, test2, test3) =>{
//     return console.log(test1 + test2 + test3);
// };

// score(test1,test2,test3);

// // Объектно-ориентированное программирование
// const totalScore = {
//     test1:16,
//     test2:22,
//     test3:23,
//     toGetSum(){
//         return this.test1 + this.test2 + this.test3;
//     },
// };
// console.log(totalScore.toGetSum());

//КЛАССЫ - структура, описывающая состояние и поведение сущности
//ЭКЗМЕПЛЯРЫ - объекты-представители сущности
// ИНТЕРФЕЙС - набор свойств и методов класса
//ПАРАДИГМЫ: инкапсуляция, абстракция, наследование,  
//ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователей



// const Project  = function(title, theme, clients){
//     this.title = title;
//     this.theme = theme;
//     this.clients = clients;
// }

const Human = function (arms, legs, head, body){
     this.arms= arms;
this.legs=legs;
this.head=head;
this.body=body; 
}
const Ilia = new Human(2, 2, 1, 1);
console.log(Ilia);
const Dima = new Human(2, 2, 1);
console.log(Dima);

// //вызовы
// const project = new Project("habit`s manager", "human", "all types");
// console.log(project);

// const project_fe = new Project("app", "to do list", "all types");
// console.log(project_fe);

//внутренние методы

//добавление методов
const Movie = function(name, rate, category) {
  this.name = name;
  this.rate = rate;
  this.category = category;
  this.countUser = 0;

  this.greet = function(userName) {
      console.log(`Hello ${userName}, welcome to ${this.name}`)
  }
}

this.addUser = function (newUser) {
    this.countUser+=newUser;
    this.console.log(this.countUser);
}

this.removeUser = function(newUser) {
    this.countUser -=newUser;
    console.log(this.countUser);
}


const movi = new Movie('Hero', 9, 100);
console.log(movi);

const House= function(color){
    this.color = color; // если мне надо указать своё значение
    this.floors = 4;
    this.windows = 20;
    this.doors = 2;
    this.walls = 2.8;
}

myHouse.floors = 6;
const myHouse = new House('red');
console.log(myHouse);

myHouse.floors = 6;
console.log(myHouse);
