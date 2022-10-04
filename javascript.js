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


let getUserChoice = ""

// need to create the conditions for the game
let round = function playRound(){
    let computerChoice = getComputerChoice()
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



const one = document.querySelector('#one')
    getUserChoice = "rock"

const two = document.querySelector('#two')
    getUserChoice = "paper"

const three = document.querySelector('#three')
    getUserChoice = "scissors"



const buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        console.log(round())
        const container = document.querySelector("#container");
        const content = document.createElement('div');
        content.classList.add('content')
        content.textContent = round()
        container.appendChild(content)
        return container
    });
});