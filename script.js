const MAX_SCORE = 5;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const selectPlayerScore = document.querySelector("#playerScore");
const selectComputerScore = document.querySelector("#computerScore");
const bodySelector = document.querySelector("body");
const restartButton = document.createElement("button");

selectPlayerScore.textContent = 0;
selectComputerScore.textContent = 0;

function chooseRandomly() {
  return Math.floor(Math.random() * 100);
}

function getComputerChoice() {
  let seed = chooseRandomly() % 3;
  if (seed == 0) {
    return "rock";
  } else if (seed == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    results.textContent = "Tie! Both selections are equal!";
    return "Tie! Both selections are equal!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    results.textContent = "You Lose! Rock beats Scissors";
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    results.textContent = "You Lose! Paper beats Rock";
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    results.textContent = "You Win! Scissors beats Paper";
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    results.textContent = "You Lose! Rock beats Scissors";
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    results.textContent = "You Win! Paper beats Rock";
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    results.textContent = "You Lose! Scissors beats Paper";
    return "You Lose! Scissors beats Paper";
  } else {
    results.textContent = "You Lose! Invalid Selection Made!";
    return "Invalid Selection Made!";
  }
}

function playGame(userSelection) {
  let playerScore = selectPlayerScore.textContent;
  let computerScore = selectComputerScore.textContent;

  let playerSelection = userSelection;
  let gameOutcome = playRound(playerSelection, getComputerChoice());
  if (gameOutcome.includes("Win")) {
    playerScore++;
    selectPlayerScore.textContent = playerScore;
  } else if (gameOutcome.includes("Lose")){
    computerScore++;
    selectComputerScore.textContent = computerScore;
  }

  if (computerScore >= MAX_SCORE || playerScore >= MAX_SCORE) {
    if (computerScore > playerScore) {
      alert("Computer Wins, Better Luck Next Time!!!");
    } else {
      alert("Hey You're Pretty Good At This!!!");
    }
    restartButton.textContent = "Restart Game";
    bodySelector.append(restartButton);
  }
}

rockButton.addEventListener("click", () => {
  playGame("rock");
});

scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

paperButton.addEventListener("click", () => {
  playGame("paper");
});
restartButton.addEventListener("click", () => {
  location.reload();
});

