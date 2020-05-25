'use sctrict'

// ---------------------------------1

let pass;

const homeworkIsDone = function(pass, homework) {
  pass = prompt('Please enter the result of student`s work');
  if (pass == 1) {
    homework = 'homework is done!';
  } else {
    homework = 'You must to pass the homework!';
  }
  console.log(homework);
};

const homeworkIsDone = (pass, homework) =>
  (pass =
    prompt('Please enter the result of student`s work') == true
      ? (homework = 'homework is done')
      : (homework = 'You must to pass the homework'));
homeworkIsDone();

// ---------------------------------2


const findLongestWord = function(string) {
      let wordsMassive = string.split(' '); 
      let longWord = wordsMassive[0];
      
      for (let i = 1; i < wordsMassive.length; i++) {
       
        if (wordsMassive[i].length > longWord.length) {
          longWord = wordsMassive[i];
        }
      }
      console.log(longWord);
    };

console.log(
    findLongestWord('And by opposing end them. To die—to sleep, No more; and by a sleep to say we end')
    ); // opposing
       
  console.log(
              findLongestWord("The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation")
       ); // consummation
       
  console.log(
              findLongestWord("Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub:")
      ); // perchance


// ---------------------------------3

const formatString = function(string){
    let arrString  = string.split("");
   
    if (arrString.length > 40) {
        arrString.splice(40, arrString.length - 40,"...");
        string = arrString.join("");
        return string;
    }
        return string;    
};     
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // форматированная строка
 
console.log(formatString('Curabitur ligula sapien.'));
// //оригинальная строка
 
console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')
);