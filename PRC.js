
function getComputerChoice(){
    let x = Math.random() * 3;
    if (x > 2){
        return "scissors";
    }
    else if (x > 1){
        return "paper"
    }
    else {
        return "rock"
    }
}
//console.log ("Computer choose " + getComputerChoice());

function  getHumanChoice(){
   let choice = prompt("Choose [r]ock, [p]aper or [s]issors");
   if (choice.charAt(0) === "r" || choice.charAt(0) === "R"){
    return "rock"
   }
   else if (choice.charAt(0) === "p" || choice.charAt(0) === "P"){
    return "paper"
   }
   else if (choice.charAt(0) === "s" || choice.charAt(0) === "S"){
    return "scissors"
   }
}

//console.log("Human choose: " + getHumanChoice());

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a TIE, try again");
        return
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log ("You lose! Paper beats Rock");
            computerScore ++;
            return
        }
        console.log ("You Win! Rock beats Sissors");
        humanScore ++;
        return
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "sissors"){
            console.log ("You lose! Sissors beats Paper");
            computerScore ++;
            return
        }
        console.log ("You win! Paper beats Rock");
        humanScore ++;
        return
        
    }
    else if (computerChoice === "rock"){
        console.log ("You lose! Rock beats Sissors");
        computerScore ++;
        return
        }
    else {
        console.log ("You Win! Sissors beats Paper");
        humanScore ++;
        return
    }
    
}

function PlayGame(){
    computerScore = 0;
    humanScore = 0;
    for (i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log ("Computer " + computerScore + " : Human " + humanScore);
    }

}

