/*let pocetnaVrijednost = 0;

pocetnaVrijednost = pocetnaVrijednost + 5;

outputResult(pocetnaVrijednost, "0+5");


function zbirBrojeva(a, b) {
  let zbir = a + b;
  return zbir;
}

let rezultat = zbirBrojeva(1, 3);



function razlikaBrojeva(a, b) {
  let razlika = a - b;
  return razlika;
}

let rezultat = razlikaBrojeva(4, 3);



function zbirBrojeva(a, b) {
  let zbir = a + b;
  return zbir;
}

let rezultat = zbirBrojeva(1, 3);



function proizvodBrojeva(a, b) {
  let proizvod = a * b;
  return proizvod;
}

let rezultat = proizvodBrojeva(2, 3);



function kolicnikBrojeva(a, b) {
  let kolicnik = a / b;
  return kolicnik;
}

let rezultat = kolicnikBrojeva(1, 3);*/


let currentResult = 0;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add(){
  let calculationDescription = currentResult + " + " + userInput.value; 
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function substract(){
  let calculationDescription = currentResult + " - " + userInput.value;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function multiply(){
  let calculationDescription = currentResult + " * " + userInput.value;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function divide(){
  let calculationDescription = currentResult + " / " + userInput.value; 
  currentResult = currentResult / parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}