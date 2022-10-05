let compScore = 0
let userScore = 0
let userPoints = document.getElementById('score')
let compPoints = document.getElementById('comp')
let message = document.getElementById('won')

// need to get the computer choice
function getComputer(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return "rock"
    }else if (choice == 1){
        return "paper"
    }else{
        return "scissors"
    }
}

let getUserChoice = ""
let score = document.getElementById('score')
let roundwin = document.getElementById('roundwin')


let rockbtn = document.getElementById('one')
rockbtn.addEventListener('click', () => {
    getUserChoice = "rock"
    getComputer()
    game()
    
    
})

let paperbtn = document.getElementById('two')
paperbtn.addEventListener('click', () => {
    getUserChoice = "paper"
    getComputer()
    game()
    

})

let scissorsbtn = document.getElementById('three')
scissorsbtn.addEventListener('click', () => {
    getUserChoice = "scissors"
    getComputer()
    game()
   
})



function round(){
        if (getUserChoice == getComputer()){
            message.textContent = ('Draw')

        }else if (getUserChoice === "rock" && getComputer() === "scissors"){
            message.textContent = ('You win')
            ++userScore

        }else if (getUserChoice === "rock" && getComputer() === "paper"){
            message.textContent = ('You lose')
            ++compScore

        }else if (getUserChoice === "paper" && getComputer() === "rock"){
            message.textContent = ('You win')
            ++userScore

        }else if (getUserChoice === "paper" && getComputer() === "scissors"){
            message.textContent = ('You lose')
            ++compScore

        }else if (getUserChoice === "scissors" && getComputer() === "paper"){
            message.textContent = ('You win')
            ++userScore

        }else if (getUserChoice === "scissors" && getComputer() === "rock"){
            message.textContent = ('You lose')
            ++compScore
        }
    userPoints.textContent = ("Your Score: " + userScore)
    compPoints.textContent = ("Computer Score: " + compScore)
}


function game(){
    round()
    if (userScore == 5 ){
        message.textContent = ("Game Over: The User Won")
        userScore = 0
        compScore = 0
        userPoints.textContent = ("Your Score: " + userScore)
        compPoints.textContent = ("Your Score: " + userScore)

    }else if (compScore == 5){
        message.textContent = ("Game Over: The Computer Won")
        userScore = 0
        compScore = 0
        userPoints.textContent = ("Your Score: " + userScore)
        compPoints.textContent = ("Computer Score: " + compScore)
    }
}