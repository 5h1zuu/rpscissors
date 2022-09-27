function getComputerChoice(){
    let computer =  Math.floor(Math.random() * 4)
}

getComputerChoice()



let playerSelection = prompt("Type rock, paper or scissors")
let playerSelect = playerSelection.toLowerCase()

if (playerSelect == "rock"){
    playerSelect = 1;
    
}else if (playerSelect == "paper"){
    playerSelect = 2;
    
}else if (playerSelect == "scissors"){
    playerSelect = 3;
}else{
    console.log ("error did not type rock, paper or scissors")
}




function playRound(playerSelect, getComputerChoice){
    
}