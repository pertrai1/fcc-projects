const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');

const currentOperandText = document.querySelector('[data-current-operand]');
const previousOperandText = document.querySelector('[data-previous-operand]');

const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');

let operation;
let currentOperand = '';
let previousOperand = '';

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.dataset.number);
    updateDisplay();
  });
});

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.dataset.operation);
    updateDisplay();
  });
});

equalsBtn.addEventListener('click', () => {
  compute();
  updateDisplay();
});

allClearBtn.addEventListener('click', () => {
  clear();
  updateDisplay();
});

const clear = () => {
  currentOperand  = '';
  previousOperand = '';
  operation = undefined;
}

const chooseOperation = (operator) => {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

const deleteNum = () => {
  currentOperand = currentOperand.toString().slice(0, -1)
}

const appendNumber = (num) => {
  if (num === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + num.toString();
}

const getDisplayNumber = (num) => {
  const numToString = num.toString();
  const integerDigits = parseFloat(numToString.split('.')[0]);
  const decimalDigits = numToString.split('.')[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
  }

  if (decimalDigits != null) {
    return `${integerDigits}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

const updateDisplay = () => {
  currentOperandText.innerText = getDisplayNumber(currentOperand);
  if (operation != null) {
    previousOperandText.innerText = `${getDisplayNumber(previousOperand)} ${operation}`;
  } else {
    previousOperandText.innerText = '';
  }
}

const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = computation;
}

clear();

