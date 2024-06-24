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
 * TASK 1: FLIP ONE CARD
 * 1. The following code/files under this directory will be helpful for this task:
 *  (Feel free to read other files/functions as well)
 *  - `index.html`
 *  - `style.css`
 *  - `app.js`: functions `startGame`, `flip` and `flipCard`
 * 
 * 2. How do you expect the application to behave when you flip a card?
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
 * TASK 2: CHECK FOR MATCH
 * 1. The following code/files under this directory will be helpful for this task:
 *  (Feel free to read other files/functions as well)
 *  - `index.html`
 *  - `app.js`: function `checkForMatch`
 * 
 * 2. How do you expect the application to behave when you flip TWO cards?
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
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const msgBoard = document.querySelector('.msg');
const cards = document.querySelectorAll('.card');
const covers = document.querySelectorAll('.cover');
const pics = document.querySelectorAll('.pic');

// GLOBAL VARIABLES
let cardsChosen = [];
let cardsWon = [];
let allCards = new Map();

function getCardName(imgSrc) {
  const imgSrcArr = imgSrc.split('/');
  const fileName = imgSrcArr[imgSrcArr.length - 1];
  return fileName.split('.')[0];
}

function startGame() {
  cards.forEach((c) => {
    const imgSrc = c.querySelector('.pic').src;
    const name = getCardName(imgSrc);
    const id = parseInt(c.getAttribute('data-id'));
    allCards.set(id, { 'id': id, 'name': name});
    c.addEventListener('click', flipCard);
  });
}

function flip(el1, el2) {
  el1.style.opacity = '0';
  el2.style.opacity = '1';
}

function flipCard() {
  msgBoard.innerText = '';

  const pic = this.querySelector('.pic');
  const cover = this.querySelector('.cover');

  flip(cover, pic);

  const cardId = parseInt(this.getAttribute('data-id'));
  cardsChosen.push(allCards.get(cardId));

  if (cardsChosen.length > 1) {
    checkForMatch();
  }
}

function checkForMatch() {
  const card1_id = cardsChosen[0]['id'];
  const card2_id = cardsChosen[1]['id'];
  const card1_name = cardsChosen[0]['name'];
  const card2_name = cardsChosen[1]['name'];

  if (card1_id === card2_id) {
    const card = grid.querySelector(`div:nth-child(${card1_id + 1})`);
    const cover = card.querySelector('.cover');
    const pic = card.querySelector('.pic');
    msgBoard.innerText = 'You have clicked the same image!';

    flip(pic, cover);
  }
  else if (card1_name == card2_name) {
    msgBoard.innerText = 'You found a match';
    cardsWon.push(cardsChosen);

  } else {
    msgBoard.innerText = 'You did not find a match';
    const card = grid.querySelector(`div:nth-child(${card1_id + 1})`);
    const cover = card.querySelector('.cover');
    const pic = card.querySelector('.pic');
    
    flip(pic, cover);

    const cardTwo = grid.querySelector(`div:nth-child(${card2_id + 1})`);
    const coverTwo = cardTwo.querySelector('.cover');
    const picTwo = cardTwo.querySelector('.pic');
    
    flip(picTwo, coverTwo);
  }

  cardsChosen = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cards.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
  }
}


startGame();