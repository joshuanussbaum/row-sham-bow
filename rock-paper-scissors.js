// Computer Play Function:
    // Randomly return a number between 1 and 3 (or 0 and 2) that's converted to 'Rock' 'Paper' or 'Scissors

const options = [`rock`, `paper`, `scissors`];
let playerWins = 0;

function computerPlay() {
    const computerChoice = Math.floor(Math.random()*3);
    // console.log(computerChoice);
    // console.log(options[computerChoice]);
    return options[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    let roundResult = ``;
    const outcomes = [`You Win! ${playerChoice} beats ${computerSelection}`, `You Lose! ${computerSelection} beats ${playerChoice}`];
    if (!options.includes(playerChoice)) {
        console.log(`Invalid Entry, please make sure you've entered Rock, Paper, or Scissors! (capitalization doesn't matter, but spelling does!)`); 
        return playRound(prompt(), computerPlay());
    }
    if (playerChoice === computerSelection) {
        roundResult = `It's A Tie! You Both Picked ${playerChoice}`;
    }
    else if (playerChoice === `rock`) {
        if (computerSelection === `scissors`) {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    else if (playerChoice === `paper`) {
        if (computerSelection === `rock`) {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    else {
        if (computerSelection === `paper`) {
            roundResult = outcomes[0];
        }
        else {
            roundResult = outcomes[1];
        }
    }
    return roundResult;
}

function game() {
    playerWins = 0;
    console.log('Welcome!');
    console.log(`Let's Play Rock, Paper, Scissors!`);
    console.log(`Best of 5 Rounds Wins!`);
    for (let i = 0; i < 5; i++) {
        console.log(`Please, select Rock, Paper, or Scissors.`);
        console.log(playRound(prompt(), computerPlay()));
        console.log(`Current Score: Player = ${playerWins}, Computer = ${(i+1) - playerWins}`);
    }
    if (playerWins > 2) {
        console.log(`You Win The Game! Congratulations!`);
    }
    else {
        console.log(`You Lose The Game! Sorry!`);
    }
    console.log(`Play Again? Y/N`);
    const answer = prompt().charAt(0).toLowerCase();
    if (answer === `y`) {
        game();
    }
}


// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


// Create a function called game(). 
// Call playRound() inside of game for 5 rounds
// Tally wins/losses and report the final winner. 
// Use console.log to display the results of each round and the winner at the end
// use prompt() for user input
// go through previous functions to see how you can make them better
// think about what can be made into a "helper function" so each function only does ONE thing
