
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
    

let pScore = 0
let cScore = 0

function score(){
    if (playRound (playerSelection, computerSelection) == "computer wins"){
        cScore = cScore + 1
        
        return cScore
    }else if (playRound (playerSelection, computerSelection) == "player wins"){
        pScore = pScore + 1
        
        return cScore
    }

}





function game(){
    for (let i = 0; i < 5; i++){
        getComputerChoice()
        player = prompt("rock, paper or scissors")
        playerSelection = player.toLowerCase()
        playRound(playerSelection, computerSelection)
        score()
        console.log("final total for computer is " + cScore + ". final total for player is " + pScore)
        
    }
}


game()