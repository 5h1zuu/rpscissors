let compScore = 0
let userScore = 0
console.log(`User points: ${userScore} Computer points: ${compScore}`)

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
    round()
})

let paperbtn = document.getElementById('two')
paperbtn.addEventListener('click', () => {
    getUserChoice = "paper"
    getComputer()
    round()
})

let scissorsbtn = document.getElementById('three')
scissorsbtn.addEventListener('click', () => {
    getUserChoice = "scissors"
    getComputer()
    round()
})


let draw = document.createElement('p')
draw.textContent = "Draw"

let win = document.createElement('p')
win.textContent = "You won"

let lose = document.createElement('p')
lose.textContent = "You lose"




function round(){
    if (getUserChoice == getComputer()){
        roundwin.append(draw)

    }else if (getUserChoice === "rock" && getComputer() === "scissors"){
        roundwin.append(win)

    }else if (getUserChoice === "rock" && getComputer() === "paper"){
        roundwin.append(lose)

    }else if (getUserChoice === "paper" && getComputer() === "rock"){
        roundwin.append(win)

    }else if (getUserChoice === "paper" && getComputer() === "scissors"){
        roundwin.append(lose)

    }else if (getUserChoice === "scissors" && getComputer() === "paper"){
        roundwin.append(win)

    }else if (getUserChoice === "scissors" && getComputer() === "rock"){
        roundwin.append(lose)
    }
}



