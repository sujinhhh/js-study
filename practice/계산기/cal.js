const form = document.querySelector("form");

const img = form.querySelector(".img");
const select = form.querySelector(".select");
const input = form.querySelector(".input");

select.onchange = function () {
  img.src = select.value;
  img.style.borderColor = input.value;
};

const calculator = {
  displayValue: "0",
  firstOperand: null,
  watingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, watingForSecondOperand } = calculator;
  if (watingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.watingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  console.log(calculator);
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  const result = inputValue;
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  }
  calculator.watingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  console.log(event);

  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
