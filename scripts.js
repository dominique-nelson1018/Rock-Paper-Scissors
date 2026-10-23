function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

let humanChoice = prompt(
  "Please enter a choice of 'Rock', 'Paper', or 'Scissors'",
);
function getHumanChoice() {
  let humChoice = humanChoice.toLowerCase();
  return humChoice;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    return "Rock beats Scissors - Human WINS!!";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "Paper beats Rock - Human WINS!!";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "Scissors beats Paper - Human WINS!!";
  } else if (humanChoice == computerChoice) {
    return "It's a TIE!!";
  } else {
    return "Computer WINS!!";
  }
}

console.log(playRound(getHumanChoice(), computerChoice));
