


function getComputerChoice(){
    let computer =  Math.floor(Math.random() * 3)
    if (computer === 0){
        console.log("rock");
    }else if (computer === 1){
        console.log("paper");
    }else if (computer === 2){
        console.log("scissors");
    }else{
        console.log("out of scope")
    }
}



let playerSelection = prompt("Type rock, paper or scissors")
let playerSelect = playerSelection.toLowerCase()




        if (playerSelect == "rock"){
            playerSelect = 0;
        
        }else if (playerSelect == "paper"){
            playerSelect = 1;
            
        }else if (playerSelect == "scissors"){
            playerSelect = 2;
            
        }else{
            console.log ("error did not type rock, paper or scissors")
        }




function playRound(playerSelect, computerSelection){
    if (playerSelect === 1 && computerSelection  === 2){
        console.log("computer wins")
    }else if (playerSelect === 0 && computerSelection  === 1){
        console.log("player wins")
    }else if (playerSelect === 1 && computerSelection  === 0){
        console.log("player wins")
    }
}





let computerSelection = getComputerChoice()
console.log(playerSelect)