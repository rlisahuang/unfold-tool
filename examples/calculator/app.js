/************************************
 * From this point and on, you will be focusing on solving tasks using the visualization.
 * The experimenter will not interrupt you or answer any questions unless the visualization 
 *   is problematic (or you believe there is a bug with the visualization).
 * 
 * Once again, feel free to take breaks, move onto future tasks, or end the study early.
 * You are encouraged, but not required, to "think aloud" -- tell the experimenter 
 *   explicitly any thoughts, observations, or struggles you have.
 ************************************/

/************************************
 * TASK 1: ENTER VALUES
 * 1. The following code/files under this directory will be helpful for this task:
 *  (Feel free to read other files/functions as well)
 *  - `index.html`
 *  - `app.js`: functions `updateValues`, and event handlers
 * 
 * 2. How do you expect the application to behave when you click on a value key (e.g., "1")?
 *   What is the actual behavior?
 *   Interact with the application, examine the visualization and the code.
 *   Tell the experimenter about your findings.
 * 
 * 3. If you believe the code is buggy, fix the bug. 
 *   (Remember: If you want to log any data, you can use `visual.log()`)
 * 
 * 4. When you finish / decide to move on, press "Clear" to reset the recorded click events.
 * 
 * ------------
 * 
 * TASK 2: OPERATION
 * 1. The following code/files under this directory will be helpful for this task:
 *  (Feel free to read other files/functions as well)
 *  - `index.html`
 *  - `app.js`: functions `chooseOperation`, `compute` and `updateValues`, and event handlers
 * 
 * 2. How do you expect the application to behave when you click on keys to do an addition
 *   (e.g., "8 + 2")?
 *   What is the actual behavior?
 *   Interact with the application, examine the visualization and the code.
 *   Tell the experimenter about your findings.
 * 
 * 3. If you believe the code is buggy, fix the bug. 
 *   (Remember: If you want to log any data, you can use `visual.log()`)
 * 
 * 4. When you finish / decide to move on, press "Clear" to reset the recorded click events.
 * 
 ************************************/

// DOM ELEMENTS
const numBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevOperandEl = document.querySelector('[data-previous-operand]');
const currOperandEl = document.querySelector('[data-current-operand]');

// GLOBAL VARIABLES
let currOperand, prevOperand, operation;

// EVENT HANDLERS
numBtns.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.innerText;
    if (number === '.' && currOperand.includes('.')) return;
    currOperand = currOperand.toString() + number.toString();
    updateValues();
  });
});

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    updateValues();
  });
});

equalsBtn.addEventListener('click', button => {
  compute();
  updateValues();
});

allClearBtn.addEventListener('click', button => {
  reset();
  updateValues();
});

deleteBtn.addEventListener('click', button => {
  currOperand = currOperand.toString().slice(0, -1);
  updateValues();
});

function reset() {
  currOperand = '';
  prevOperand = '';
  operation = undefined;
}

function chooseOperation(operation) {
  if (currOperand === '') return;
  if (prevOperand !== '') {
    compute();
  }

  operation = operation;
  prevOperand = currOperand;
  currOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
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
  currOperand = `${computation}`;
  operation = undefined;
  prevOperand = '';
}


function updateValues() {
  currOperandEl.innerText = currOperand;
  prevOperandEl.innerText = `${prevOperand} ${operation}`;  
}

reset();