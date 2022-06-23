"use strict";

//Button selectors
const numBtns = document.querySelectorAll(".num");
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

numBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    currentValue += btn.textContent;
    display.value = currentValue;
    console.log("yo");
  })
);

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
