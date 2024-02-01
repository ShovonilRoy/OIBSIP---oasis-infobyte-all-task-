let displayValue = '';
let currentOperator = '';
let firstOperand = null;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '';
  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  firstOperand = parseFloat(displayValue);
  displayValue = '';
}

function calculate() {
  if (currentOperator === '') {
    return;
  }

  const secondOperand = parseFloat(displayValue);

  switch (currentOperator) {
    case '+':
      displayValue = (firstOperand + secondOperand).toString();
      break;
    case '-':
      displayValue = (firstOperand - secondOperand).toString();
      break;
    case '*':
      displayValue = (firstOperand * secondOperand).toString();
      break;
    case '/':
      if (secondOperand !== 0) {
        displayValue = (firstOperand / secondOperand).toString();
      } else {
        displayValue = 'Error';
      }
      break;
    default:
      return;
  }

  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}
