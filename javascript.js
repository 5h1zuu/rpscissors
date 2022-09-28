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

// need to get the user choice
function getUserChoice(){
    let user = prompt("Choose Rock, Paper or Scissors")
    let userChoice = user.toLowerCase()
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
        return userChoice
    }else{
        return "error, reload page"
    }

}




// need to create the conditions for the game
function playRound(){
    if (getComputerChoice() == getUserChoice()){
        return "draw"

    }else if (getUserChoice() == "rock" && getComputerChoice() == "scissors"){
        return "User won the round"

    }else if (getUserChoice() == "rock" && getComputerChoice() == "paper"){
        return "Computer won the round"

    }else if (getUserChoice() == "paper" && getComputerChoice() == "rock"){
        return "User won the round"

    }else if (getUserChoice() == "paper" && getComputerChoice() == "scissors"){
        return "Computer won the round"

    }else if (getUserChoice() == "scissors" && getComputerChoice() == "paper"){
        return "User won the round"

    }else if (getUserChoice() == "scissors" && getComputerChoice() == "rock"){
        return "Computer won the round"
    }

}










// need a score system
let userScore = 0
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









// need to loop the game 5 times











// display the winner