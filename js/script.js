"use strict";

//Button selectors
const numBtns = document.querySelectorAll(".num-btn");
const display = document.querySelector(".display-screen");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");
const btnEquals = document.querySelector(".equal");
const btnAllClear = document.querySelector(".AC");
const btnDel = document.querySelector(".del");
const BtnDecimal = document.querySelector(".decimal");

window.addEventListener("keydown", function (e) {
  const btn = document.querySelector(`button[data-key='${e.keyCode}']`);
  btn.click();
});

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
    display.textContent = currentValue;
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

const operand = function () {
  result = operate(operation, Number(value1), Number(currentValue));
  if (result === Infinity) {
    display.textContent = "does not compute";
  } else if (result) {
    display.textContent = result;
    value1 = result;
  } else {
    display.textContent = "";
    value1 === "" ? (value1 = currentValue) : (value1 = value1);
  }
  currentValue = "";
};

btnSubtract.addEventListener("click", function () {
  if (!operation !== subtract) {
    operand();
    operation = subtract;
  }
});

btnMultiply.addEventListener("click", function () {
  if (!operation !== multiply) {
    operand();
    operation = multiply;
  }
});

btnDivide.addEventListener("click", function () {
  if (operation !== divide) {
    operand();
    operation = divide;
  }
});

btnAdd.addEventListener("click", function () {
  if (operation !== add) {
    operand();
    operation = add;
  }
});

btnEquals.addEventListener("click", function () {
  if (opStatus()) {
    operand();
    operation = "";
    console.log(value1, currentValue);
  }
});

btnAllClear.addEventListener("click", function () {
  currentValue = "";
  value1 = "";
  display.textContent = "";
  operation = "";
  result = "";
  delArr = null;
});

BtnDecimal.addEventListener("click", function () {
  if (!currentValue.split("").includes(".")) {
    currentValue += ".";
    display.textContent = currentValue;
  }
});

btnDel.addEventListener("click", function () {
  if (currentValue) {
    delArr = currentValue.split("");
    delArr.pop();
    currentValue = delArr.join("");
    display.textContent = currentValue;
  } else {
    delArr = value1.toString().split("");
    delArr.pop();
    value1 = delArr.join("");
    currentValue = value1;
    value1 = "";
    display.textContent = currentValue;
    operation = "";
  }
});
