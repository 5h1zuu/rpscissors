let compScore = 0
let userScore = 0
console.log(`User points: ${userScore} Computer points: ${compScore}`)

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

// need to create a function
// need to get the user choice
//function getUserChoice for validation

// need to create the conditions for the game
let round = function playRound(){
    let computerChoice = getComputerChoice()
    let user = prompt("Choose Rock, Paper or Scissors")
    let getUserChoice = user.toLowerCase()

//this can be shortened
    if (computerChoice == getUserChoice){
        return `draw\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "rock" && computerChoice === "scissors"){
        userScore +=1
        return `User won the round\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "rock" && computerChoice === "paper"){
        compScore +=1
        return `Computer won the round.\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "paper" && computerChoice === "rock"){
        userScore +=1
        return `User won the round\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "paper" && computerChoice === "scissors"){
        compScore +=1
        return `Computer won the round.\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "scissors" && computerChoice === "paper"){
        userScore +=1
        return `User won the round\nUser points: ${userScore} Computer points: ${compScore}`

    }else if (getUserChoice === "scissors" && computerChoice === "rock"){
        compScore +=1
        return `Computer won the round.\nUser points: ${userScore} Computer points: ${compScore}`
    }
}

// display the winner
function checkWinner(){
    if (userScore > compScore){
        return "User is just better"
    }else if (userScore < compScore){
        return "Computer is skill diff"
    }else{
        return "Draw, both of you are noobs!"
    }
}

// need to loop the game 5 times
function game(){
    for(let x = 0; x < 5; x++){
        console.log(round())
        //return round()?
        //console.log(`User points: ${userScore} Computer points: ${compScore}`)    
    }
    //return checkWinner()?
}

game()
console.log(checkWinner())











