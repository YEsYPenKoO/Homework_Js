"use scrict";
// const singleButton = document.querySelector("#single");
// console.log(singleButton);

// const multipleButton = document.querySelector("#multiple");
// console.log(multipleButton);

// //CLICK
// singleButton.addEventListener("click", onClick);

// function onClick() {
//   singleButton.style.color = "red";
//   alert("КЛИК ПРОИЗОШЁЛ");
// }

// // multipleButton.addEventListener("click", firstClick);
// // multipleButton.addEventListener("click", secondClick);
// // multipleButton.addEventListener("click", thirdClick);

// function firstClick() {
//   multipleButton.style.fontSize = "30px";
//   //   alert("First CLICK!");
// }

// function secondClick() {
//   multipleButton.style.borderRadius = "50%";
//   //   alert("Second CLICK!");
// }

// function thirdClick() {
//   multipleButton.style.color = "yellow";
//   //   alert("Third CLICK!");
// }

// multipleButton.addEventListener("click", () => {
//   firstClick();
//   secondClick();
//   thirdClick();
// });

// //===================
// //КОНТЕКСТ ОБЪEКТА this

// const user = {
//   name: "Ilya",
//   showName() {
//     console.log("Контекст исполнения", this);
//     alert(`My name is ${this.name}`);
//   },
// };
// // user.showName();

// multipleButton.addEventListener("click", user.showName.bind(user));

// const add = document.querySelector('button[data-action="add"]');

// const remove = document.querySelector('button[data-action="remove"]');

// const click = document.querySelector("#newBtn");

// const updateClick = () => {
//   click.classList.toggle("newBtn");
// };

// add.addEventListener("click", () => {
//   click.addEventListener("click", updateClick);
// });

// remove.addEventListener("click", () => {
//   click.removeEventListener("click", updateClick);
// });

// const form = document.querySelector("form");
// console.log(form);

// const loginInput = document.querySelector('input[type="text"]');
// console.dir(loginInput);

// const passwordInput = document.querySelector('input[type="password"]');
// console.log(passwordInput);

// function getData(event) {
//   event.preventDefault();
//   const login = loginInput.value.trim();
//   const password = passwordInput.value.trim();

//   if (login === "" || password === "") {
//     return alert("заполните оба поля");
//   }

//   alert("спасибо за регистрацию");

//   console.log(login, password);
// }

// form.addEventListener("submit", getData);

// function updateInput() {
//   loginInput.style.border = "2px solid red";
// }

// loginInput.addEventListener("focus", updateInput);

// function blurInput() {
//   loginInput.style.border = "2px solid green";
// }

// loginInput.addEventListener("blur", blurInput);

//4 события: click, focus, blur, submit

//свойство key & code

const clearButton = document.querySelector('button[data-action="clear"]');
console.log(clearButton);

const logList = document.querySelector(".log-list");
console.log(logList);

function logMessage({ type, key, code }) {
  const message = document.createElement("section");
  const title = document.createElement("h2");
  title.textContent = `${type} event`;

  const content = document.createElement("p");
  content.textContent = `key value: ${key}, code value: ${code}`;

  message.append(title, content);
  logList.append(message);
}

window.addEventListener("keydown", logMessage);
window.addEventListener("keyup", logMessage);

clearButton.addEventListener("click", (event) => {
  logList.innerHTML = "";
});

//загрузка документа

function showGreet() {
  // const modalGreet = document.createElement("h2");
  // modalGreet.textContent = "добро пожаловать!";
  // modalGreet.classList.add("modalGreet");
  alert('добро пожаловать!');
}

// document.addEventListener('DOMContentLoaded', showGreet);



//load, unload

//event propogation

//распостранение событий

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

console.log(parent, child, innerChild)

function parentClickHandler() {
  alert('parent click');
}

function childClickHandler() {
  alert('child click');
}

function innerChildClickHandler() {
  alert('innerChild click');
}

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerChildClickHandler);

//объект события

// const objectClick = (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log(this);
//   console.log(event.target);
//   console.log(event.currentTarget);
// }

// parent.addEventListener('click', objectClick);

// function objectClick(event) {
//   console.log(event);
//   console.log(event.type);
//   console.log(this);
//   console.log(event.target);
//   console.log(event.currentTarget);
// }

//прекращение всплытия

//method stopPropagation

// const innerChildStop = (event) => {
//   event.stopPropagation();
//   alert('innerChildClick');
// }

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerChildStop);

// const innerChildStopImmediate = (event) => {
//   event.stopImmediatePropagation();
//   alert('immediateStopClick');
// }

// innerChild.addEventListener('click', innerChildStopImmediate);

// // stopPropagation тормозит всплытие но произойдёт на текущем елементе
// // а stopImmediate даже на текущем елементе не произойдёт, всё заблокируется

// // дилегирование

const teamList = document.querySelector('.js-nav');
teamList.addEventListener('click', memberClick);

function memberClick(event) {
  event.preventDefault();

  const target = event.target;
  console.log(event.target);

  //проверка узла на котором произошёл клик
  if (target.nodeName !== 'A') return;
  setActiveMember(target);
}

function setActiveMember(nextActiveMember) {
  const currentActiveMember = teamList.querySelector('a.active');
  if (currentActiveMember) {
    currentActiveMember.classList.remove('active');
  }
  nextActiveMember.classList.add('active');
}``