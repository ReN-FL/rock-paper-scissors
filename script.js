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
