const prompt = require('prompt');

// Define the choicesOption for Rock, Paper, Scissors
const choicesOption = ['ROCK', 'PAPER', 'SCISSORS'];

// Function to generate a random choice for the computer
function generateComputerChoice() {
  const randomNum = Math.random();
  if (randomNum <= 0.34) {
    return 'PAPER';
  } else if (randomNum <= 0.67) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

// Starting the prompt
prompt.start();

// Asking the user for their choice
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  const computerSelection = generateComputerChoice();

  console.log(`User chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins!');
  } else {
    console.log('Computer Wins!');
  }
});