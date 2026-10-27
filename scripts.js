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

// console.log(`Computer: ${computerSelection}`);

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter a choice of 'Rock', 'Paper', or 'Scissors'",
  );
  return humanChoice.toLowerCase();
}

// console.log(`Human: ${humanSelection}`);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      return `Rock beats Scissors - Human WINS!!\n Human Score: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return `Paper beats Rock - Human WINS!!\n Human Score: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return `Scissors beats Paper - Human WINS!! \n Human Score: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === computerChoice) {
      return `It's a TIE!! \n Human Score: ${humanScore} | Computer: ${computerScore}`;
    } else {
      computerScore++;
      return `${computerChoice} beats ${humanChoice} - Computer WINS!!\n Human Score: ${humanScore} | Computer: ${computerScore}`;
    }
  }
  // const humanSelection = getHumanChoice();
  // const computerSelection = getComputerChoice();
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  let gameRounds = humanScore + computerScore;
  if (gameRounds >= 5 && humanScore > computerScore) {
    console.log(
      `GAME OVER! Human Wins! Final Score - Human: ${humanScore} | Computer: ${computerScore}`,
    );
  } else if (gameRounds <= 5 && humanScore < computerScore) {
    console.log(
      `GAME OVER! Computer Wins! Final Score - Human: ${humanScore} | Computer: ${computerScore}`,
    );
  } else {
    console.log(
      `GAME OVER! Its a tie! Final Score - Human: ${humanScore} | Computer: ${computerScore}`,
    );
  }
}
playGame();
