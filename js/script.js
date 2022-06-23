"use strict";

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

let currentValue = "";
let value1 = "";
let result;
let operation;
let delArr = null;

const operate = function (operator, a, b) {
  if (operator === add) {
    return Number(add(a, b).toFixed(10));
  } else if (operator === subtract) {
    return Number(subtract(a, b).toFixed(10));
  } else if (operator === multiply) {
    return Number(multiply(a, b).toFixed(10));
  } else if (operator === divide) {
    return Number(divide(a, b).toFixed(10));
  }
};

btnOne.addEventListener("click", function () {
  currentValue += 1;
  display.value = currentValue;
});

btnTwo.addEventListener("click", function () {
  currentValue += 2;
  display.value = currentValue;
});
btnThree.addEventListener("click", function () {
  currentValue += 3;
  display.value = currentValue;
});
btnFour.addEventListener("click", function () {
  currentValue += 4;
  display.value = currentValue;
});
btnFive.addEventListener("click", function () {
  currentValue += 5;
  display.value = currentValue;
});
btnSix.addEventListener("click", function () {
  currentValue += 6;
  display.value = currentValue;
});
btnSeven.addEventListener("click", function () {
  currentValue += 7;
  display.value = currentValue;
});
btnEight.addEventListener("click", function () {
  currentValue += 8;
  display.value = currentValue;
});
btnNine.addEventListener("click", function () {
  currentValue += 9;
  display.value = currentValue;
});
btnZero.addEventListener("click", function () {
  currentValue += 0;
  display.value = currentValue;
});

const opStatus = function () {
  if (value1 && currentValue) {
    return true;
  } else {
    console.log("no");
    return false;
  }
};

btnSubtract.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(currentValue));
  if (result) {
    display.value = result;
    value1 === "" ? (value1 = result) : (value1 = value1);
  } else {
    display.value = "";
    value1 === "" ? (value1 = currentValue) : (value1 = value1);
  }
  currentValue = "";
  operation = subtract;
});

btnMultiply.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(currentValue));
  if (result || result === 0) {
    display.value = result;
    value1 === "" ? (value1 = result) : (value1 = value1);
  } else {
    display.value = "";
    value1 === "" ? (value1 = currentValue) : (value1 = value1);
  }
  currentValue = "";
  operation = multiply;
});

btnDivide.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(currentValue));
  if (result) {
    display.value = result;
    value1 === "" ? (value1 = result) : (value1 = value1);
  } else {
    display.value = "";
    value1 === "" ? (value1 = currentValue) : (value1 = value1);
  }
  currentValue = "";
  operation = divide;
});

btnAdd.addEventListener("click", function () {
  result = operate(operation, Number(value1), Number(currentValue));
  if (result) {
    display.value = result;
    value1 === "" ? (value1 = result) : (value1 = value1);
  } else {
    display.value = "";
    value1 === "" ? (value1 = currentValue) : (value1 = value1);
  }
  currentValue = "";
  operation = add;
});

btnEquals.addEventListener("click", function () {
  if (opStatus()) {
    result = operate(operation, Number(value1), Number(currentValue));
    if (result === Infinity) {
      display.value = "You can't do that";
    } else if (result === 0) {
      display.value = 0;
    } else if (result) {
      display.value = result;
      value1 = result;
    } else {
      display.value = currentValue;
    }
    currentValue = "";
    operation = "";
    console.log(value1, currentValue);
  }
});

btnAllClear.addEventListener("click", function () {
  currentValue = "";
  value1 = "";
  display.value = "";
  operation = "";
  result = "";
  delArr = null;
});

BtnDecimal.addEventListener("click", function () {
  if (!currentValue.split("").includes(".")) {
    currentValue += ".";
    display.value = currentValue;
  }
});

btnDel.addEventListener("click", function () {
  if (currentValue) {
    delArr = currentValue.split("");
    delArr.pop();
    currentValue = delArr.join("");
    display.value = currentValue;
  } else {
    delArr = value1.toString().split("");
    delArr.pop();
    currentValue = delArr.join("");
    display.value = currentValue;
  }
});
