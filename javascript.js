function getComputerChoice(){
    let computer =  Math.floor(Math.random() * 4)
   
        if (computer === 1){
            console.log("Rock");
        }else if (computer === 2){
            console.log("Paper");
        }else if (computer === 3){
            console.log("Scissors")
        }
}

getComputerChoice()