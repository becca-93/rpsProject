// Variables
let playerWins = 0;
let playerTies = 0;
let playerLosses = 0;
let playerChoice;

// getElements from the DOM
const winsDisplay = document.getElementById('wins');
const tiesDisplay = document.getElementById('ties');
const lossesDisplay = document.getElementById('losses');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors');

// Event listener for buttons
rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    playGame();
});

paperBtn.addEventListener('click', () => {
    playerChoice = 'paper';
    playGame();
});

scissorsBtn.addEventListener('click', () => {
    playerChoice = 'scissors';
    playGame();
});

// Computer's Choice generator
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Compare and update choices
function playGame() {
    const computerChoice = getComputerChoice();

    // Compare choices and update scores
    if (playerChoice === computerChoice) {
        playerTies++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWins++;
    } else {
        playerLosses++;
    }

    // Update score displays
    updateScoreDisplay();
}

// Score displays
function updateScoreDisplay() {
    winsDisplay.textContent = playerWins;
    tiesDisplay.textContent = playerTies;
    lossesDisplay.textContent = playerLosses;
}