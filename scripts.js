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

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter a choice of 'Rock', 'Paper', or 'Scissors'",
  );
  let humChoice = humanChoice.toLowerCase();
  if (humChoice == "rock") {
    return "You chose Rock!";
  } else if (humChoice == "paper") {
    return "You chose Paper!";
  } else {
    return "You chose Scissors!";
  }
}
console.log(getHumanChoice());
