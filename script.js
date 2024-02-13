function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let choice;
  if (num === 0) {
    choice = 'Rock';
    return choice;
  } else if (num === 1) {
    choice = 'Paper';
    return choice;
  } else {
    choice = 'Scissors';
    return choice;
  }
}
function getPlayerChoice(e) {
  let playerChoice = e.target.value;
  if (playerChoice === undefined) {
    resultTxt.textContent = 'You missed';
    return;
  }
  playGame(playerChoice);
}
const controls = document.querySelector('#controls');
const resultTxt = document.querySelector('#result-txt');
const round = document.querySelector('#round');
const pscore = document.querySelector('#Pscore');
const cscore = document.querySelector('#Cscore');
controls.addEventListener('click', getPlayerChoice);
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'its a tie ';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `Player win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Computer win, ${computerSelection} beats ${playerSelection}`;
  }
}
let i = 0;
let playerScore = 0;
let computerScore = 0;
function playGame(choice) {
  if (i < 5) {
    const computerChoice = getComputerChoice();
    const playerChoice = choice;
    let roundResult = playRound(playerChoice, computerChoice);
    resultTxt.textContent = roundResult;
    if (roundResult.substring(0, 11) == 'Player win,') {
      playerScore++;
      pscore.textContent = playerScore;
    } else if (roundResult.substring(0, 13) == 'Computer win,') {
      computerScore++;
      cscore.textContent = computerScore;
    } else {
    }
    i++;
    round.textContent = `Round ${i}`;
  } else if ((i = 5)) {
    endGame(playerScore, computerScore);
  }
}
function endGame(playerS, computerS) {
  if (playerS > computerS) {
    resultTxt.textContent = `Final Score, Player: ${playerS} Computer: ${computerS}\n Player Won the game`;
  } else if (computerS > playerS) {
    resultTxt.textContent = `Final Score, Player: ${playerS} Computer: ${computerS}\n Computer Won the game`;
  } else {
    resultTxt.textContent = `Final Score, Player: ${playerS} Computer: ${computerS}\n its a tie, No one won :(`;
  }
  clearResults();
}
function clearResults() {
  i = 0;
  playerScore = 0;
  pscore.textContent = playerScore;
  computerScore = 0;
  cscore.textContent = computerScore;
  round.textContent = `Round ${i}`;
}
