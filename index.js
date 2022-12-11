function getComputerChoice(){

    let choice;
    let number = Math.round((Math.random() * 10)+1);

    if(number === 11){number =-1;}

   if(number <= 3){
        choice = "rock";
    }
    else if (number >= 4 && number <= 7 ){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

    return choice.toLowerCase();

}

function theGame(playerChoice,computerChoice){
   let pC = playerChoice;
   let cC = computerChoice;
   let winLose;
   let result;
    if(pC === "rock" && cC === "scissors"){
        winLose = "win";
        result = `you ${winLose}! Rock beat scissors`;
    }
    else if(cC === "rock" && pC === "scissors"){
        winLose = "lose";
        result = `you ${winLose}! Rock beat scissors`;
    }
}

