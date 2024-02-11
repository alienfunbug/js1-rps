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
    alert("Tie! Both selections are equal!");
    return "Tie! Both selections are equal!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("You Lose! Rock beats Scissors");
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You Lose! Paper beats Rock");
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("You Win! Scissors beats Paper");
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("You Lose! Rock beats Scissors");
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You Win! Paper beats Rock");
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("You Lose! Scissors beats Paper");
    return "You Lose! Scissors beats Paper";
  } else {
    alert("You Lose! Invalid Selection Made!");
    return "Invalid Selection Made!";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter Rock, Paper, or Scissors... Any other case will be disqualified"
    );
    let results = playRound(playerSelection, getComputerChoice());
    if (results.includes("Win")) {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  if (computerScore > playerScore) {
    alert("Computer Wins, Better Luck Next Time!!!");
  } else {
    alert("Hey You're Pretty Good At This!!!");
  }
}

playGame();
