"use strict"

// declare variables
let playerScore = 0;
let compScore = 0;
let options = ["rock", "paper", "scissors"];


// randomize computer selection
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

let computerSelection = computerPlay();

console.log(computerSelection)

// Get player input
let playerSelection = prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
console.log(playerSelection);


// game logic

function oneRound(playerSelection, computerSelection) {
if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
    return "You didn't select rock, paper, or scissors"
} else if (playerSelection === computerSelection) { 
    return "Game is a tie!";
} else if ((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")) {
                    return "You win!";
} else {
    return "Computer Win!";
}
        
}


console.log(oneRound(playerSelection, computerSelection));