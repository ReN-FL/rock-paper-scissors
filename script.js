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
function playGame() {
  let i = 0;
  let playerScore = 0;
  let computerScore = 0;
  while (i < 5) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt('paper, rock or scissors?');
    let roundResult = playRound(playerChoice, computerChoice);
    console.log(roundResult);
    if (roundResult.substring(0, 11) == 'Player win,') {
      playerScore++;
      console.log('Player Score', playerScore);
    } else if (roundResult.substring(0, 13) == 'Computer win,') {
      computerScore++;
      console.log('Computer Score', computerScore);
    } else {
    }
    i++;
  }
  if (playerScore > computerScore) {
    console.log(
      `Final Score, Player: ${playerScore} Computer: ${computerScore}`
    );
    return 'Player Won the game';
  } else if (computerScore > playerScore) {
    console.log(
      `Final Score, Player: ${playerScore} Computer: ${computerScore}`
    );
    return 'Computer Won the game';
  } else {
    console.log(
      `Final Score, Player: ${playerScore} Computer: ${computerScore}`
    );
    return 'its a tie, No one won :(';
  }
}
console.log(playGame());
