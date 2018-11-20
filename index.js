var button = document.getElementById("btn");
button.addEventListener("click", myFunction);

const form = document.querySelector('form');
var inputAnswer = document.getElementById("inputAnswer");

var testButton = document.getElementById("test");

form.addEventListener('submit', testFunction);

function testFunction(e){
    console.log(inputAnswer.value);
    e.preventDefault();
    inputAnswer.value = '';


}


// button.addEventListener("click", testFunction);

// function testFunction(e){
//     // console.log(inputAnswer.value)
//     e.preventDefault();    
// }

// var button = document.getElementById("btn");
// button.addEventListener("click", fillingArray);

var inc = -1;
var rightAnswer = 0;
var winCounter = 0;

var canvas = document.getElementById("myCanvas");
var guillotine = canvas.getContext("2d");
var board = canvas.getContext("2d");
var bodyMan = canvas.getContext("2d");
var legs = canvas.getContext("2d");
var head = canvas.getContext("2d");
var leftLeg = canvas.getContext("2d");
var rightLeg = canvas.getContext("2d");
var leftHand = canvas.getContext("2d");
var rightHand = canvas.getContext("2d");
var rope = canvas.getContext("2d");
//Гильотина
guillotine.fillRect(100, 25, 200, 10);
guillotine.fillRect(280, 25, 10, 300);
guillotine.fillRect(100, 25, 10, 50);
guillotine.fillRect(100, 25, 10, 50);

var arrayWords = ["кота", "собака", "черепаха", "слона", "носорога"];
var fillArray = [];

//Create random number for array
var randomNumWord = Math.round(Math.random() * (arrayWords.length - 1));
var randomWord = arrayWords[randomNumWord];
var splitRandomWordArray = randomWord.split("");
var lengthWord = splitRandomWordArray.length;
console.log("Загаданное компьютером слово " + splitRandomWordArray);

// function fillingArray() {
//   let answer = prompt();

//   console.log(answer);
//   console.log(splitRandomWordArray);

//   if (splitRandomWordArray.indexOf(answer) != -1) {
//     winCounter++;

//     console.log("Длина слова " + lengthWord);

//     var index = splitRandomWordArray.indexOf(answer);
//     console.log(splitRandomWordArray.indexOf(index));
//     delete splitRandomWordArray[index];

//     fillArray.push(answer);
//     console.log("Наполняемый массив " + fillArray);
//     if (winCounter == lengthWord) {
//       alert("You win!");
//     }
//   }
// }

//Петля
function drawRope() {
  rope.fillRect(105, 75, 1, 10);
}
//Голова
function drawHead() {
  head.beginPath();
  head.arc(104, 100, 15, 50, Math.PI * 2, true); // Внешняя окружность
  head.stroke();
}
//Туловище
function drawBody() {
  bodyMan.fillRect(102, 115, 2, 50);
}
//Левая нога
function drawLeftLeg() {
  leftLeg.lineWidth = 1; // толщина линии
  leftLeg.moveTo(104, 163); //передвигаем перо
  leftLeg.lineTo(80, 190); //рисуем линию
  leftLeg.stroke();
}
//Правая нога
function drawRightLeg() {
  rightLeg.lineWidth = 1; // толщина линии
  rightLeg.moveTo(104, 163); //передвигаем перо
  rightLeg.lineTo(125, 190); //рисуем линию
  rightLeg.stroke();
}
//Левая рука
function drawLeftHand() {
  leftHand.lineWidth = 1; // толщина линии
  leftHand.moveTo(104, 143); //передвигаем перо
  leftHand.lineTo(125, 130); //рисуем линию
  leftHand.stroke();
}
//Правая рука
function drawRightHand() {
  var rightHand = canvas.getContext("2d");
  rightHand.lineWidth = 1; // толщина линии
  rightHand.moveTo(104, 143); //передвигаем перо
  rightHand.lineTo(75, 130); //рисуем линию
  rightHand.stroke();
}

var arrayFunctions = [
  drawRope,
  drawHead,
  drawBody,
  drawLeftLeg,
  drawRightLeg,
  drawLeftHand,
  drawRightHand
];

function myFunction() {
  console.log(inc);

  
  

  var userWords = prompt("Введите любую букву");
  if (splitRandomWordArray.indexOf(userWords) != -1) {
    winCounter++;

    console.log("Длина слова " + lengthWord);

    var index = splitRandomWordArray.indexOf(userWords);
    console.log(splitRandomWordArray.indexOf(index));
    delete splitRandomWordArray[index];

    fillArray.push(userWords);
    console.log("Наполняемый массив " + fillArray);
    if (winCounter == lengthWord) {
      alert("You win! Загаданное слово: "+randomWord );
    }





    // rightAnswer++;
    // console.log(randomWord);
    // console.log(splitRandomWordArray);
    // console.log("Красава!");
    // if (rightAnswer == splitRandomWordArray.length) {
    //   alert("You Win!");
    // }
    // console.log("Правильных ответов" + rightAnswer);
  } else {
    inc = inc + 1;
    console.log("Здесь INC" + inc);
    console.log(randomWord);
    console.log(splitRandomWordArray);
    console.log("Такой буквы нет");
    if (inc < arrayFunctions.length) {
      arrayFunctions[inc]();
    }
    if (inc >= arrayFunctions.length) {
      canvas.style.background='red';
      alert("You Lose!");
    }
  }
}

//   var circleCanvas = document.getElementById("circle");
//   var ctx = circleCanvas.getContext("2d");

//   ctx.beginPath();
//   ctx.arc(142, 65, 5, 0, 2 * Math.PI);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(160, 65, 5, 0, 2 * Math.PI);
//   ctx.stroke();

//   ctx.fillStyle = "orange";
//   ctx.beginPath();
//   ctx.arc(150, 75, 3, 0, 2 * Math.PI);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(150, 75, 30, 0, 2 * Math.PI);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(150, 165, 60, 0, 2 * Math.PI);
//   ctx.stroke();
