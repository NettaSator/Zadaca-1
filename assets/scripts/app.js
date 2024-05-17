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

let resultHistory = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
/*kvadriranjeBtn.addEventListener("click", kvadriranje);
powBtn.addEventListener("click", pow);*/

function addHistoryLog(userInput, userOperation, operationResult){
  let logEntry = {
    input: userInput,
    operation: userOperation,
    resut: operationResult,
};
resultHistory.push(logEntry);
console.log(resultHistory);
}

function add(){
  let calculationDescription = currentResult + " + " + userInput.value;
  currentResult = currentResult + parseInt(userInput.value); 
  outputResult(currentResult, calculationDescription);
  addHistoryLog(parseInt(userInput.value), "ADD", currentResult);
}

function substract(){
  let calculationDescription = currentResult + " - " + userInput.value;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
  addHistoryLog(parseInt(userInput.value), "SUBSTRACT", currentResult);
}

function multiply(){
  let calculationDescription = currentResult + " * " + userInput.value;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
  addHistoryLog(parseInt(userInput.value), "MULTIPLY", currentResult);
}

function divide(){
  if (userInput.value == 0) {
    alert("Can not devide by 0");
    return;
  }
  let calculationDescription = currentResult + " / " + userInput.value; 
  currentResult = currentResult / parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
  addHistoryLog(parseInt(userInput.value), "DIVIDE", currentResult);
}

/*function kvadriranje(){
  if (userInput.value == 0) {
    alert("Can not devide by 0");
    return;
  }
  let calculationDescription = currentResult + " ^2 "; 
  currentResult = currentResult * currentResult;
  outputResult(currentResult, calculationDescription);
  resultHistory.push(currentResult);
  console.log(resultHistory);}*/







function pow(){
  if (userInput.value == 0) {
    alert("Can not devide by 0");
    Math.pow(0, 1);
    return;
  }
  let calculationDescription = currentResult + " ^3 "; 
  currentResult = currentResult * currentResult;
  outputResult(currentResult, calculationDescription);
}