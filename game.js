// controls the play of 5 rounds of rock, paper & scissors
function game() {

    // declare relevant variables to avoid repeat declarations
    let playerSelection;
    let computerSelection;
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
    const TOTAL_ROUNDS = 5;

    // iterate through 5 rounds of the game
    for (let i = 0; i < TOTAL_ROUNDS; i++) {
        
        // get user selection
        playerSelection = getPlayerSelection();

        // get computer selection
        computerSelection = getComputerSelection();

        // play a single round using both selections
        roundResult = playRound(playerSelection, computerSelection);

        // print the winner to the console
        console.log(roundResult);

        // update scores based on the result of that round
        playerScore = updateScore(roundResult, playerScore, "win");
        computerScore = updateScore(roundResult, computerScore, "lose");

    }

    // end of game - determine the winner and print that to the console
    console.log(determineWinner(playerScore, computerScore));
}

// gather user selection:
function getPlayerSelection() {
    // take user input
    const input = prompt("Enter your selection:");

    // convert to lower case and return
    return input.toLowerCase();
}

// generate computer selection:
function getComputerSelection() {
    // generate a random number between 0 and 2
    const selectionNumber = Math.floor(Math.random() * 3);

    // return the selection based on the random selected number
    return (selectionNumber == 2) ? "rock" : 
           (selectionNumber == 1) ? "paper" : "scissors";
}

// play a single round using the selections:
function playRound(playerSelection, computerSelection) {

    // group all scenarios in which the computer wins
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            // computer wins
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // group all scenarios in which the user wins
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
            // user wins
            return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    // therefore the remaining scenario is where they picked the same
    else {
        return `It was a draw! You both picked ${playerSelection}.`;
    }
}

function updateScore(roundResult, currentScore, searchStr) {
    // increment score if result of that round contains the search string
    return (roundResult.includes(searchStr)) ? ++currentScore : currentScore;
}

function determineWinner(playerScore, computerScore, TOTAL_ROUNDS) {
    // the player wins
    if (playerScore > computerScore) {
        return `You have won! You scored ${playerScore} and computer scored ${computerScore}.`;
    }
    
    // the computer wins
    else if (playerScore < computerScore) {
        return `You have lost! You scored ${playerScore} and computer scored ${computerScore}.`;
    }

    // it was a tie
    else {
        return `It was a tie! You both scored ${playerScore}`;
    }
}