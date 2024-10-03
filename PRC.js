

computerScore = 0;
humanScore = 0;

let buttons = document.querySelector('#buttons');

buttons.addEventListener("click", (buttonEvent) => {
    let target = buttonEvent.target;
    console.log(target.id);
    switch(target.id){
        case "rockButton":
            console.log('rock');
            humanChoice = 'rock';
            break;
        case "paperButton":
            console.log('paper');
            humanChoice = 'paper';
            break;
        case "scissorsButton":
            console.log('scissors');
            humanChoice = 'scissors';
            break;
    }

    updateDisplay(playRound(humanChoice, getComputerChoice()));
})

function getComputerChoice(){
    let x = Math.random() * 3;
    console.log(x);
    if (x >2){
        return "scissors";
    } else if (x > 1){
        return "paper"
    } else {
        return "rock"
    }
}


function updateDisplay (text){
    const display = document.querySelector('#display');
    while (display.firstChild){
        display.removeChild(display.firstChild);
    }
    const content = document.createElement("p");
    const scoreText = document.createElement('p');
    content.textContent = text;
    scoreText.textContent = 
    ("Computer " + computerScore + " : Human " + humanScore);
    if (humanScore > 4){
        content.textContent = "YOU WIN YOU WIN YOU WIN";
        scoreText.textContent = "!!!!!!First to 5 Wins!!!!!!!";
    }
    if (computerScore > 4){
        content.textContent = "YOU LOSE YOU LOSE YOU LOSE";
        scoreText.textContent = "Computer was first to 5 wins";
    }

    display.appendChild(content);
    display.appendChild(scoreText);

}


function playRound(humanChoice, computerChoice){
    console.log ("human = " + humanChoice + " computer = " +computerChoice);
    if(humanChoice === computerChoice){
        console.log("It's a TIE, try again");
        return "It's a TIE, try again";
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log ("You lose! Paper beats Rock");
            computerScore ++;
            return "You lose! Paper beats Rock";
        }
        console.log ("You Win! Rock beats Scissors");
        humanScore ++;
        return "You Win! Rock beats Scissors";
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log ("You lose! Sissors beats Paper");
            computerScore ++;
            return "You lose! Scissors beats Paper";
        }
        console.log ("You win! Paper beats Rock");
        humanScore ++;
        return "You win! Paper beats Rock";
        
    }
    else if (computerChoice === "rock"){
        console.log ("You lose! Rock beats Scissors");
        computerScore ++;
        return "You lose! Rock beats Scissors";
        }
    else {
        console.log ("You Win! Scissors beats Paper");
        humanScore ++;
        return "You Win! Scissors beats Paper";
    }
    
}





