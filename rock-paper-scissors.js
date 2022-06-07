// Computer Play Function:
    // Randomly return a number between 1 and 3 (or 0 and 2) that's converted to 'Rock' 'Paper' or 'Scissors

const options = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const computerChoice = Math.floor(Math.random()*3);
    // console.log(computerChoice);
    // console.log(options[computerChoice]);
    return options[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    let roundResult = '';
    const outcomes = [`You Win! ${playerChoice} beats ${computerSelection}`, `You Lose! ${computerSelection} beats ${playerChoice}`];
    if (!options.includes(playerChoice)) {
        return "Invalid Entry, please make sure you've entered Rock, Paper, or Scissors! (capitalization doesn't matter, but spelling does!)"; 
    }
    if (playerChoice === computerSelection) {
        roundResult = `It's A Tie! You Both Picked ${playerChoice}`;
    }
    else if (playerChoice === 'rock') {
        if (computerSelection === 'scissors') {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    else if (playerChoice === 'paper') {
        if (computerSelection === 'rock') {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    else {
        if (computerSelection === 'paper') {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    return roundResult;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


