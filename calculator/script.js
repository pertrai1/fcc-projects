let previousNumber;
let currentNumber = 1;
let operator;
let currentCalculation;

const displaySmall = document.querySelector('#display-small');
const display = document.querySelector('#display');
const btns = Array.from(document.querySelectorAll('button'));

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (display.innerHTML.includes('.') && btn.innerText === '.')
      return;
    if (display.innerHTML.startsWith('0') && btn.innerText === '0') return;

    switch (btn.innerText) {
      case '=':
        updateCalculation(display.innerHTML);
        displaySmall.innerHTML = `${previousNumber} ${operator} ${currentNumber} `;
        previousNumber = currentCalculation;
        display.innerHTML = currentCalculation;
        break;
      case 'x':
        operator = '*';
        updateCalculation(display.innerHTML);
        break;
      case '+':
        operator = '+';
        updateCalculation(display.innerHTML);
        break;
      case '-':
        operator = '-';
        updateCalculation(display.innerHTML);
        break;
      case '÷':
        operator = '/';
        updateCalculation(display.innerHTML);
        break;
      default:
        display.innerHTML += btn.innerText;
        break;
    }
  });
});
const clearBtn = document.querySelector('[data-all-clear]');
clearBtn.addEventListener('click', e => {
  previousNumber = '';
  currentNumber = '';
  currentCalculation = '';
  operator = '';
  displaySmall.innerHTML = '';
  display.innerHTML = '';
});

function updateCalculation(num) {
  display.innerHTML = '';
  switch (operator) {
    case '*':
      if (Number(num) === currentCalculation) {
        return;
      }
      if (!previousNumber) {
        previousNumber = Number(num);
      } else if (!currentCalculation) {
        currentCalculation = previousNumber * Number(num);
      } else {
        currentCalculation *= Number(num);
      }
      currentNumber = Number(num);
      break;
    case '+':
      if (Number(num) === currentCalculation) {
        return;
      }
      if (!previousNumber) {
        previousNumber = Number(num);
      } else if (!currentCalculation) {
        currentCalculation = previousNumber + Number(num);
      } else {
        currentCalculation += Number(num);
      }
      currentNumber = Number(num);
      break;
    case '-':
      if (Number(num) === currentCalculation) {
        return;
      }
      if (!previousNumber) {
        previousNumber = Number(num);
      } else if (!currentCalculation) {
        currentCalculation = previousNumber - Number(num);
      } else {
        currentCalculation -= Number(num);
      }
      currentNumber = Number(num);
      break;
    case '/':
      if (Number(num) === currentCalculation) {
        return;
      }
      if (!previousNumber) {
        previousNumber = Number(num);
      } else if (!currentCalculation) {
        currentCalculation = previousNumber / Number(num);
      } else {
        currentCalculation /= Number(num);
      }
      currentNumber = Number(num);
      break;

  }
}
