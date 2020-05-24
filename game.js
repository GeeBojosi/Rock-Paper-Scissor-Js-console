let userChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();

computer = computerPlay = () => {
    let computerSelections = Math.floor(Math.random() * 3);
    
    if(computerSelections == 0)
        return "rock";
    else if(computerSelections == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

/* Don't forget to add some helper functions */

playRound = (playerSelection, computerSelection) => {
    playerSelection = userChoice;
    computerSelection = computer;

    if(playerSelection === computerSelection){
        return "It's a draw";
    }
   if(playerSelection === "rock"){
       if(computerSelection === "scissors"){
           return "You Win, Rock Crushes Scissors";
       }
   }else if(playerSelection === "paper"){
       if(computerSelection === "rock"){
           return "You Win, Paper Covers Rock"
       }
   }else if(playerSelection === "scissors"){
       if(computerSelection === "paper"){
           return "You Win, Scissors Cuts Paper";
       }
   }else if(computerSelection === "scissors"){
       if(playerSelection === "paper"){
           return "You Lose, Scissor Cuts Paper";
       }
   }else if(computerSelection === "paper"){
       if(playerSelection === "rock"){
           return "You Lose, Paper Covers Rock";
       }
   }else if(computerSelection === "rock"){
       if(playerSelection === "scissors"){
           return "You Lose, Rock Crushes Scissors";
       }
   }
    
}
console.log(`User Choice is: ${userChoice}`);
console.log(`Computer Choice is: ${computerPlay()}`);
console.log(playRound(userChoice, computerPlay()));

    // if(playerSelection === "paper"){
    //     if(computerSelection === "rock"){
    //         console.log("You Win, Paper Covers Rock");
    //         return "win";
    //     }

    // }else if(playerSelection === "scissors"){
    //     if(computerSelection === "paper"){
    //         console.log("You Win, Scissor Cuts Paper");
    //         return "win";
    //     }
    // }else if(playerSelection === "rock"){
    //     if(computerSelection === "scissors"){
    //         console.log("You Win, Rock Crushes Scissors");
    //         return "win";
    //     }
    // }else if(playerSelection === "rock"){
    //     if(computerSelection === "paper"){
    //         console.log("You Lose, Paper Covers Rock");
    //         return "lose"
    //     }
    // }else if(playerSelection === "paper"){
    //     if(computerSelection === "scissors"){
    //         console.log("You Lose, Scissors Cuts Paper");
    //         return "lose";
    //     }
    // }else if(playerSelection === "scissors"){
    //     if(computerSelection === "rock"){
    //         console.log("You Lose, Rock Crushes Scissors");
    //         return "lose";
    //     }
    // }else {
    //     if(playerSelection === computerSelection){
    //         console.log("It's A Draw Young blood, Skilllit");
    //         return "draw";
    //     }
    // }
// }


// game = () => {
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let i = 0; i < 5; i++){
//         let result = playRound();
//         if(result == "win"){
//             playerScore++;
//         }else {
//             computerScore++;
//         }
//     }
    // if(playerScore > computerScore){
    //     console.log(`You Won, you beat computer by ${playerScore}`);
    // }else {
    //     console.log(`You lose, computer beats you by ${computerScore}`);
    // }
// }


