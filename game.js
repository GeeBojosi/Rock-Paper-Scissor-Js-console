let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resetbtn = document.querySelector("#reset");
let result = document.getElementById("result-msg");
let userScore_span = document.querySelector("#player");
let computerScore_span = document.querySelector("#computer");
let userScore = 0;
let computerScore = 0;


//Inputs from players

function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function player() {
    rock.addEventListener("click", function() {
        Game("rock");
    });
    
    paper.addEventListener("click", function() {
        Game("paper");
    });
    
    scissors.addEventListener("click", function() {
        Game("scissors");
    });
}

resetbtn.addEventListener("click", function() {
    reset();
});

player();


function Game(userChoice, computerSelection) {
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
            userScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }else if(userChoice === "paper"){
        if(computerSelection === "rock"){
            result.innerHTML = win;
            userScore++;
            userScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }else if(userChoice === "scissors"){
        if(computerSelection === "paper"){
            result.innerHTML = win;
            userScore++;
            userScore_span.innerHTML = userScore;
        }else {
            result.innerHTML = lose;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        }
    }

}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result.textContent = "Click Rock, Paper or Scissors";
}