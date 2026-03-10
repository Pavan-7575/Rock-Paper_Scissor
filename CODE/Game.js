//  reset everything to 0 value
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// function for the computer to get computer random choice and return it
function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertCase(anythingIwant) {
if (anythingIwant === 'paper') return 'Paper';
if (anythingIwant === 'scissors') return 'Scissors';
return 'Rock';
}

// Winning Condition of  user
function win(user, computer) {
userScore++;
// updating user score
userScore_span.innerHTML = userScore;
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}
// Losing Condition of user
function loses(user, computer) {
computerScore++;
// updating computer score
computerScore_span.innerHTML = computerScore;
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('losingStyles');
setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}
// Draw Condition - when both select same symbol
function draw(user, computer) {
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('drawStyles');
setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

// The core game functions that set up and determine the games actual logic  paper beats rock etc
function game(userChoice) {
const computerChoice = getComputerChoice();
// getting user and computer choice and evaluating the winner using switch statement and concatenating the user and computer choice to compare with the cases
switch (userChoice + computerChoice) {
case 'paperrock':
case 'rockscissors':
case 'scissorspaper':
win(userChoice, computerChoice);
// user wins
break;
case 'rockpaper':
case 'scissorsrock':
case 'paperscissors':
loses(userChoice, computerChoice);
// computer wins
break;
case 'rockrock':
case 'scissorsscissors':
case 'paperpaper':
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}

// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function

function main() {
rock_div.addEventListener('click', () => game('rock'));
paper_div.addEventListener('click', () => game('paper'));
scissors_div.addEventListener('click', () => game('scissors'));
}
main();