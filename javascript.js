// need to get the computer choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return "rock"
    }else if (choice == 1){
        return "paper"
    }else{
        return "scissors"
    }
}

let computerChoice = getComputerChoice()


// need to get the user choice
//function getUserChoice(){
    let user = prompt("Choose Rock, Paper or Scissors")
    let getUserChoice = user.toLowerCase()
 /*   if (userChoice == "rock"){
        return userChoice
    }else if (userChoice == "paper"){
        return userChoice 
    }else if(userChoice == "scissors"){
        return userChoice
    }else{
        return "error"
    }

} */




// need to create the conditions for the game
function playRound(){
    if (computerChoice == getUserChoice){
        return "draw"

    }else if (getUserChoice === "rock" && computerChoice === "scissors"){
        return "User won the round"

    }else if (getUserChoice === "rock" && computerChoice === "paper"){
        return "Computer won the round"

    }else if (getUserChoice === "paper" && computerChoice === "rock"){
        return "User won the round"

    }else if (getUserChoice === "paper" && computerChoice === "scissors"){
        return "Computer won the round"

    }else if (getUserChoice === "scissors" && computerChoice === "paper"){
        return "User won the round"

    }else if (getUserChoice === "scissors" && computerChoice === "rock"){
        return "Computer won the round"
    }

}








// need a score system
/*let userScore = 0
let compScore = 0

function score(){
    if (playRound() == "User won the round"){
        userScore = userScore + 1
        return userScore

    }else if (playRound() == "Computer won the round"){
        compScore = compScore + 1
        return compScore

    }else{
        return "draw"
    }
}

*/




// need to loop the game 5 times


function game(){
    for(let x = 0; x < 5; x++){


    }
}





game()



console.log(computerChoice)
console.log(getUserChoice)
console.log(playRound())

// display the winner