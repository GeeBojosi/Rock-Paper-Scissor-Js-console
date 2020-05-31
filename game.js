let userScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.querySelector('.result');
const matchEnd = 5;

// get the Inputs from computer and player
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playerInput() {
    rockButton.addEventListener('click', function() {
        playRound("rock");
    });

    paperButton.addEventListener('click', function() {
        playRound("paper");
    });

    scissorsButton.addEventListener('click', function() {
        playRound("scissors");
    });
}

playerInput();

//Functions for Win and lose and called within playRound function//

// function win(){
//     result.innerHTML = "You Win, Rock Crushes scissors";
//     userScore++;
//     playerScore_span.innerHTML = userScore;
// }

//Where gameplay happens
function playRound(userChoice, computerSelection) {
    computerSelection = computerChoice();
    
    const win = `You Win, ${userChoice} beats ${computerSelection}`;
    const lose = `You Lose, ${computerSelection} beats ${userChoice}`;
    const draw = "it's a draw";
    
    if(userChoice === computerSelection){
        result.innerHTML = draw;
    }else if(userChoice === "rock"){
        if(computerSelection === "scissors"){
            result.innerHTML = win;
            userScore++;
            playerScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }else if(userChoice === "paper"){
        if(computerSelection === "rock"){
            result.innerHTML = win;
            userScore++;
            playerScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }else if(userChoice === "scissors"){
        if(computerSelection === "paper"){
            result.innerHTML = win;
            userScore++;
            playerScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }


        
    // }else if(userChoice === "paper"){
    //     if(computerSelection === "rock"){
    //         result.innerHTML = win;
    //         userScore++;
    //         playerScore_span.innerHTML = userScore;
    //     }
    // }else if(userChoice === "scissors"){
    //     if(computerSelection === "paper"){
    //         result.innerHTML = win;
    //         userScore++;
    //         playerScore_span = userScore;
    //     }
    // }
    endGame();
}

function endGame() {

    if(userScore >= matchEnd){
        result.innerHTML = "You Win, You beat the computer";
        return;
    }

    if(computerScore >= matchEnd){
        result.innerHTML = "You Lose, Computer beats you";
        return;
    }
}
// playRound();

