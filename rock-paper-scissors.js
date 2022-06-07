// TODO: Look at refactoring - how can you get the same results with less code?

const options = [`rock`, `paper`, `scissors`];
let playerWins = 0;

function computerPlay() {
    const computerPick = Math.floor(Math.random()*3);
    return options[computerPick];
}

function victoryCheck(playerChoice, computerChoice) {
    const outcomes = [`You Win! ${playerChoice} beats ${computerChoice}`, `You Lose! ${computerChoice} beats ${playerChoice}`];
    let conditions = {
        rock: `scissors`,
        paper: `rock`,
        scissors: `paper`
    } 
    if (conditions[playerChoice] === computerChoice) {
        playerWins++;
        return outcomes[0];
    }
    return outcomes[1];
}

function sanityCheck(selection) {
    check = selection.toLowerCase();
    if (!options.includes(check)) {
        console.log(`Invalid Entry, please make sure you've entered Rock, Paper, or Scissors! (capitalization doesn't matter, but spelling does!)`); 
        return sanityCheck(prompt());
    }
    return check;

}

function playRound(playerSelection, computerSelection) {
    const playerChoice = sanityCheck(playerSelection);
    const computerChoice = computerSelection;
    if (playerChoice === computerChoice) {
        console.log(`It's A Tie! You Both Picked ${playerChoice}`);
        console.log(`Please, select Rock, Paper, or Scissors.`);
        return playRound(prompt(), computerPlay());
    }
    else { 
        return victoryCheck(playerChoice, computerChoice);        
        }

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


