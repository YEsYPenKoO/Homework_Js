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

// const Human = function (arms, legs, head, body){
//      this.arms= arms;
// this.legs=legs;
// this.head=head;
// this.body=body; 
// }
// const Ilia = new Human(2, 2, 1, 1);
// console.log(Ilia);
// const Dima = new Human(2, 2, 1);
// console.log(Dima);

// //вызовы
// const project = new Project("habit`s manager", "human", "all types");
// console.log(project);

// const project_fe = new Project("app", "to do list", "all types");
// console.log(project_fe);

//внутренние методы

//добавление методов
// const Movie = function(name, rate, category) {
//   this.name = name;
//   this.rate = rate;
//   this.category = category;
//   this.countUser = 0;

//   this.greet = function(userName) {
//       console.log(`Hello ${userName}, welcome to ${this.name}`)
//   }
// }

// this.addUser = function (newUser) {
//     this.countUser+=newUser;
//     this.console.log(this.countUser);
// }

// this.removeUser = function(newUser) {
//     this.countUser -=newUser;
//     console.log(this.countUser);
// }


// const movi = new Movie('Hero', 9, 100);
// console.log(movi);

// const House= function(color){
//     this.color = color; // если мне надо указать своё значение
//     this.floors = 4;
//     this.windows = 20;
//     this.doors = 2;
//     this.walls = 2.8;
// }


// const myHouse = new House('red'); //мщмент создания новго объекта
// console.log('на момент создания', myHouse);

// // myHouse.windows = 15;
// // console.log(myHouse);

// const salesManager_1= {
//     name: "Olena",
//     sales: 5,
//     sell(product){
//         this.sales +=1;
//         return `Manager ${this.name} sold ${product}`;
//     }
// }

// console.log(salesManager_1.sales);
// console.log(salesManager_1.sell('Club Card'));
// console.log(salesManager_1.sell('Training Card');
// console.log(salesManager_1.sales);



// const salesManager_2 = {
//     name: 'Kostya',
//     sales: 10,
//     sell(product){
//         this.sales +=1;
//         return `Manager ${this.name} sold ${product}`;
//     }
// }

// console.log(salesManager_2.sales);
// console.log(salesManager_2.sell('Club Card'));
// console.log(salesManager_2.sell('Training Card');
// console.log(salesManager_2.sales);


// const Manager = function (name = 'manager', sales = 0){
//     this.name = name;
//     this.sales = sales;
    
//     this.sell = function (product){
//         this.sales +=1;
//         return 'Manager ${this.name} sold ${product}';
//     }
// }

// const manager_1 = new Manager('Sasha');
// console.log(manager_1.name);
// console.log(manager_1.sales);

// console.log(manager_1.sell('Club Card'));
// console.log(manager_1.sell('Training Card'));

// console.log(manager_1.sales);

// Прототипы, прототипное наследование свойство

// const teacher = {lang_1: 'HTML'};
// const child = {lang_2: 'CSS'};

// child._proto_ = teacher;

// console.log(child.lang_1);
// console.log(child.lang_2);


//свойство наследуется у прототипа, только если такого нет в потомке,
// если есть, то используется без обращения к такому же свойству родителя
// const child2 = {lang_1: 'Js', lang_2: 'CSS'};

// child._proto_ = teacher;

// console.log(child.lang_1);
// console.log(child.lang_2);