function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "Computer choice: Rock!";
  } else if (computerChoice == 1) {
    return "Computer choice: Paper!";
  } else {
    return "Computer Choice: Scissors!";
  }
}
console.log(getComputerChoice());
