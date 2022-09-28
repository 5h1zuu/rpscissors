function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "rock";
    }else if (choice === 1){
         return "paper";
    }else if (choice === 2 ){
        return "scissors";
    }
        
}

let computerSelection = getComputerChoice()
console.log(computerSelection)





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
let dScore = 0


function score(){
    if (playRound (playerSelection, computerSelection) == "computer wins"){
        cScore = cScore + 1
        
        return cScore
    }else if (playRound (playerSelection, computerSelection) == "player wins"){
        pScore = pScore + 1
        
        return cScore
    }else{
        dScore = dScore + 1

        return dScore
    }

}

function checkWinner(){
    if (pScore > cScore){
        return "Player wins"
    }else if (pScore < cScore){
        return "Computer wins"
    }else{
        return "Draw"
    }
}



function game(){
    for (let i = 0; i < 5; i++){

        player = prompt("rock, paper or scissors")
        playerSelection = player.toLowerCase()
        playRound(playerSelection, computerSelection)
        score()
        console.log("Computer: " + cScore + ". Player: " + pScore + ". Draws: " + dScore)
        
        
    }
}


game()

console.log(checkWinner())