"use strict"


//--------------------------------------1
// class User {
//     constructor(name, age, followers){
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//     }
//     }

// const mango = new User('Mango', 2, 20);
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
// const poly = new User('Poly', 3, 17);
// poly.getInfo(); // User Poly is 3 years old and has 17 followers


//--------------------------------------2

// class Storage{
//     constructor(items){
//      this.items = items;
//     }
//     getItems(){
//         return this.items;
//     }

//     addItem(item){
//      return this.items.push(item);
//     } 

//     removeItem(item){
//         for(let i = 1; i < this.items.length; i++){
//             if(this.items[i] === item){
//                 this.items.splice(i,1);
//             }
//         }
//     } 
// }

// const storage = new Storage(['Нанитоиды','Пролонгер','Железные жупи','Антигравитатор']);
  
//   const items = storage.getItems();
  
//   console.table(items); // ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]
  
//   storage.addItem('Дроид');
  
//   console.table(storage.items); // ['Нанитоиды','Пролонгер','Железные жупи','Антигравитатор', 'Дроид' ]
  
//   storage.removeItem('Пролонгер');
  
//   console.table(storage.items); // [ Нанитоиды','Железные жупи','Антигравитатор', 'Дроид']


//--------------------------------------3

// class StringBuilder{
//     constructor(_value){
//         this._value = _value;
//     }

//     get value(){
//         return this._value
//     }

//     append(str){
//         this._value = this._value + str;
//         return this._value;
//     }
//     prepend(str){
//         this._value = str + this._value; 
//     }
//     pad(str){
//         this._value = str + this._value + str;
//     }
//     }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


//--------------------------------------4

// class Car {
//     static getSpecs(car){
//         console.log('maxSpeed',car.maxSpeed,"speed",car.speed,'isOn',car.isOn,'distance',car.distance,'price',car.price);
//     }
//     constructor(price, maxSpeed) {
//         this.speed = 0;
//         this.price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = false;
//         this.distance = 0;
//     }
    
//     set price(price){
//         return(this._price = price)
//     }
//     get price(){
//         return this._price;
//     }
  
//     turnOn() {
//         this.isOn = true;
// return this.isOn;
//     }
  
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//         return this.isOn, this.speed;
//     }
  
//     accelerate(value) {
//         if(this.speed <= this.maxSpeed){
//            return (this.speed += value);
//         }
//     }

//     decelerate(value) {
//         if(this.speed >= 0){
//             return(this.speed -= value);
//         }
//     }
  
//     drive(hours) {
//         if(this.isOn = true){
//           return(this.distance = hours * this.speed);
//                 }
//     }
//     }

// const mustang = new Car(200, 2000);

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

 
// Car.getSpecs(mustang); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();


// Car.getSpecs(mustang); // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000