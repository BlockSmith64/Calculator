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

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let displayValue = "";
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
  displayValue += 1;
  display.value = displayValue;
});

btnTwo.addEventListener("click", function () {
  displayValue += 2;
  display.value = displayValue;
});
btnThree.addEventListener("click", function () {
  displayValue += 3;
  display.value = displayValue;
});
btnFour.addEventListener("click", function () {
  displayValue += 4;
  display.value = displayValue;
});
btnFive.addEventListener("click", function () {
  displayValue += 5;
  display.value = displayValue;
});
btnSix.addEventListener("click", function () {
  displayValue += 6;
  display.value = displayValue;
});
btnSeven.addEventListener("click", function () {
  displayValue += 7;
  display.value = displayValue;
});
btnEight.addEventListener("click", function () {
  displayValue += 8;
  display.value = displayValue;
});
btnNine.addEventListener("click", function () {
  displayValue += 9;
  display.value = displayValue;
});
btnZero.addEventListener("click", function () {
  displayValue += 0;
  display.value = displayValue;
});

btnSubtract.addEventListener("click", function () {
  value1 = displayValue;
  displayValue = "";
  display.value = displayValue;
  operation = subtract;
});

btnMultiply.addEventListener("click", function () {
  value1 = displayValue;
  displayValue = "";
  display.value = displayValue;
  operation = multiply;
});

btnDivide.addEventListener("click", function () {
  value1 = displayValue;
  displayValue = "";
  display.value = displayValue;
  operation = divide;
});
btnAdd.addEventListener("click", function () {
  value1 = displayValue;
  displayValue = "";
  display.value = displayValue;
  operation = add;
});

btnEquals.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(displayValue));
  console.log(result);
  display.value = result;
  displayValue = "";
  operation = "";
  value1 = result;
});
