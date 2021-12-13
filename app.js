"use strict";

// declare variables
let playerScore = 0;
let compScore = 0;
const options = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";

function oneRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
  console.log(playerSelection);
  computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(computerSelection);
  if (
    playerSelection !== "rock" &&
    playerSelection !== "scissors" &&
    playerSelection !== "paper"
  ) {
    console.log("You didn't select rock, paper, or scissors");
  } else if (playerSelection === computerSelection) {
    return "Game is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return "You win!";
  } else {
    compScore++;
    return "Computer Win!";
  }
}

function fiveRounds() {
  for (let i = 1; i <= 5; i++) {
    oneRound(playerSelection, computerSelection);
    console.log(
      `At the end of Round ${i}, CompScore: ${compScore} & PlayerScore: ${playerScore}`
    );
  }
  console.log(
    `Final Game Score is CompScore: ${compScore} & PlayerScore: ${playerScore}`
  );
  if (playerScore > compScore) {
      console.log('You won the game!');
  } else if (compScore > playerScore) {
      console.log('You lost the game!');
  } else {
      console.log("It's a tie game!");
  }
}

fiveRounds();
