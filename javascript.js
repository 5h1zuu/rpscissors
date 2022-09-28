
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        choice = "rock";
        return choice;
    }else if (choice === 1){
        choice = "paper";
        return choice;
    }else if (choice === 2 ){
        choice = "scissors"
        return choice;
    }
}

computerSelection = getComputerChoice()


player = prompt("rock, paper or scissors")
playerSelection = player.toLowerCase()

console.log(playerSelection)


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "draw"
    }if (playerSelection == "rock" && computerSelection == "scissors"){
        return "player wins"

    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return "computer wins"

    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return "player wins"

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "computer wins"
    
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "player wins"

    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "computer wins"
    }
}

playRound(playerSelection, computerSelection)



function game(){
    for (let x = 0; x < 5; x++){
        console.log(x)
        return
    }
}



game()