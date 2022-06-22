//Button selectors
const btnOne = document.querySelector(".num-1");
const btnTwo = document.querySelector(".num-2");
const btnThree = document.querySelector(".num-3");
const btnFour = document.querySelector(".num-4");
const btnFive = document.querySelector(".num-5");
const btnSix = document.querySelector(".num-6");
const btnSeven = document.querySelector(".num-7");
const btnEight = document.querySelector(".num-8");
const btnNine = document.querySelector(".num-9");
const btnZero = document.querySelector(".num-0");
const display = document.querySelector("input");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");
const btnEquals = document.querySelector(".equal");
const btnAllClear = document.querySelector(".ac");
const btnDel = document.querySelector(".del");
const BtnDecimal = document.querySelector(".decimal");

//arithmetic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let inputValue = "";
let value1;
let value2;
let result;
let operation;
const operate = function (operator, a, b) {
  if (operator === add) {
    return add(a, b);
  } else if (operator === subtract) {
    return subtract(a, b);
  } else if (operator === multiply) {
    return multiply(a, b);
  } else if (operator === divide) {
    return divide(a, b);
  }
};

btnOne.addEventListener("click", function () {
  inputValue += 1;
  display.value = inputValue;
});

btnTwo.addEventListener("click", function () {
  inputValue += 2;
  display.value = inputValue;
});
btnThree.addEventListener("click", function () {
  inputValue += 3;
  display.value = inputValue;
});
btnFour.addEventListener("click", function () {
  inputValue += 4;
  display.value = inputValue;
});
btnFive.addEventListener("click", function () {
  inputValue += 5;
  display.value = inputValue;
});
btnSix.addEventListener("click", function () {
  inputValue += 6;
  display.value = inputValue;
});
btnSeven.addEventListener("click", function () {
  inputValue += 7;
  display.value = inputValue;
});
btnEight.addEventListener("click", function () {
  inputValue += 8;
  display.value = inputValue;
});
btnNine.addEventListener("click", function () {
  inputValue += 9;
  display.value = inputValue;
});
btnZero.addEventListener("click", function () {
  inputValue += 0;
  display.value = inputValue;
});

btnSubtract.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(inputValue));
  if (result) {
    display.value = result;
    value1 = result;
  } else {
    display.value = "";
    value1 = inputValue;
  }
  inputValue = "";
  //display.value = inputValue;
  operation = subtract;
});

btnMultiply.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(inputValue));
  if (result || result === 0) {
    display.value = result;
    value1 = result;
  } else {
    display.value = "";
    value1 = inputValue;
  }
  inputValue = "";
  // display.value = inputValue;
  operation = multiply;
});

btnDivide.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(inputValue));
  if (result) {
    display.value = result;
    value1 = result;
  } else {
    display.value = "";
    value1 = inputValue;
  }
  inputValue = "";
  //display.value = inputValue;
  operation = divide;
});
btnAdd.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(inputValue));
  if (result) {
    display.value = result;
    value1 = result;
  } else {
    display.value = "";
    value1 = inputValue;
  }
  inputValue = "";
  //display.value = inputValue;
  operation = add;
});

btnEquals.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(inputValue));
  if (result) {
    display.value = result;
    value1 = result;
  } else if (result === 0) {
    display.value = value1;
  } else {
    display.value = inputValue;
  }
  inputValue = "";
  operation = "";
  console.log(value1, inputValue);
});

btnAllClear.addEventListener("click", function () {
  inputValue = "";
  value1 = "";
  display.value = "";
  operation = "";
  result = "";
});

BtnDecimal.addEventListener("click", function () {
  if (!inputValue.split("").includes(".")) {
    inputValue += ".";
    display.value = inputValue;
  }
});

// btnDel.addEventListener("click", function () {

// });
