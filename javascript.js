
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



function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
        console.log("draw")
        return "draw"
    
    }if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("player wins")
        return "player wins"

    }else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("computer wins")
        return "computer wins"

    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("player wins")
        return "player wins"

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("computer wins")
        return "computer wins"
            
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("player wins")
        return "player wins"

    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("computer wins")
        return "computer wins"
            }
    }
    



function game(){
    for (let i = 0; i < 5; i++){
        getComputerChoice()
        player = prompt("rock, paper or scissors")
        playerSelection = player.toLowerCase()
        playRound(playerSelection, computerSelection)
        
    }
}


game()