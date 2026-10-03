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
    if (value === "") {
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

    if(firstNumber !== null && value !== "") {
        calculate();
    }

    firstNumber = parseFloat(value);
    operatorOutput = button.textContent;
    value = "";
  });
});

equal.addEventListener("click", () => {
    if (firstNumber === null || operatorOutput === null || value === "") return;
    calculate()
})

c.addEventListener("click", () => {
    value = "";
    firstNumber = null;
    operatorOutput = null;
    output.textContent = 0;
})

del.addEventListener("click", () => {
    if(value.length > 0) {
        value = value.slice(0, -1);
        output.textContent = value || "0";
    }
})

point.addEventListener("click", () => {
    if (!value.includes(".")) {
        value = value === "" ? "0." : value + ".";
        output.textContent = value;
    }
})

persen.addEventListener("click", () => {
    if(value !== "") {
        value = (parseFloat(value) / 100).toString();
        output.textContent = value;
    }
})

function calculate() {
    const secondNumber = parseFloat(value);
    let result;

    switch (operatorOutput) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "÷":
            result = firstNumber / secondNumber;
            break;
    }

    output.textContent = result;
    value = result.toString();
    firstNumber = null;
    operatorOutput = null;
}