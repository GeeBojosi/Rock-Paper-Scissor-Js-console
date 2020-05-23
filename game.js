//computer's play function

// if(playerSelection == computerSelection){
    //     return "Draw";
    // } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    //     return "You Win, Rock crushes scissors";
    // } else if (playerSelection == "Scissors" && computerSelection == "paper"){
    //     return
    // }


computerPlay = () => {
    let computerSelections = Math.floor(Math.random() * 3);
    
    if(computerSelections == 0)
        return "ROCK".toLowerCase();
    
    if(computerSelections == 1)
        return "PAPER".toLowerCase();
    
    if(computerSelections == 2)
        return "SCISSORS".toLowerCase();

}

playerInput = () => {
    alert("This is a game of rock, paper, scissors " + 
    " press Ok to continue ");

    prompt('Enter Rock, Paper or Scissors').toLowerCase();
}

/* Don't forget to add some helper functions */

playRound = (playerSelection, computerSelection) => {

    playerSelection = playerInput();
    computerSelection = computerPlay();

    if(playerSelection === "paper"){
        if(computerSelection === "rock".toLowerCase()){
            return "You Win, Paper Covers Rock";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "paper".toLowerCase()){
            return "You Win, Scissor Cuts Paper";
        }
    }else if(playerSelection === "rock"){
        if(computerSelection === "scissors".toLowerCase()){
            return "You Win, Rock Crushes Scissors";
        }
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "You Lose, Paper Covers Rock";
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return "You Lose, Scissors Cuts Paper";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You Lose, Rock Crushes Scissors";
        }
    }else {
        if(playerSelection === computerSelection){
            return "It's A Draw Young blood, Skilllit";
        }
    }

    
}

game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let result = playRound();
        if(result == "you win".toUpperCase()){
            playerScore++;
        }else {
            computerScore++;
        }
    }
}

console.log(game());
// console.log(playRound());