const output = document.getElementById("calculator-output");
const del = document.getElementById("del");
const c = document.getElementById("c");
const equal = document.getElementById("equal");
const point = document.getElementById("point");
const persen = document.querySelector(".persen");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

let firstNumber = null;
let operatorOutput = null;
let value = "";

output.textContent = 0;

number.forEach((button) => {
  button.addEventListener("click", () => {
    if (value === "0") {
      value = button.textContent;
    } else {
      value += button.textContent;
    }

    output.textContent = value;
  });
});

operator.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber === null && value === "") return;

    firstNumber = parseFloat(value);
    operatorOutput = button.textContent;
    value = "";
  });
});

